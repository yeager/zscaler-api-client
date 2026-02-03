#!/usr/bin/env python3
# SPDX-License-Identifier: GPL-3.0-or-later
# Zscaler API Client - A Qt-based API client for Zscaler APIs
# Copyright (C) 2026 Daniel Nylander <daniel@danielnylander.se>

"""
Zscaler API Client - Postman-like tool for Zscaler APIs

Supports:
- ZIA (Zscaler Internet Access)
- ZPA (Zscaler Private Access)
- Batch operations with CSV import
- Multi-language support (en, sv, de, fr, es, ja, zh)
"""

import csv
import json
import os
import sys
import time
import urllib.request
import urllib.parse
import urllib.error
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional, Dict, List, Any

# Use PyQt6 for Qt bindings
from PyQt6.QtWidgets import (
    QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout,
    QSplitter, QTreeWidget, QTreeWidgetItem, QTextEdit, QLineEdit,
    QComboBox, QPushButton, QLabel, QTabWidget, QTableWidget,
    QTableWidgetItem, QHeaderView, QFileDialog, QMessageBox,
    QGroupBox, QFormLayout, QDialog, QDialogButtonBox, QProgressBar,
    QStatusBar, QMenuBar, QMenu, QToolBar, QPlainTextEdit, QSplashScreen,
    QCheckBox, QScrollArea, QFrame
)
from PyQt6.QtCore import Qt, QThread, pyqtSignal, QSettings, QTranslator, QLocale, QTimer
from PyQt6.QtGui import QAction, QFont, QColor, QSyntaxHighlighter, QTextCharFormat, QPixmap, QPainter
QT_BINDINGS = "PyQt6"

__version__ = "1.6.5"

# Stylesheets for theming
DARK_STYLE = """
QMainWindow, QDialog {
    background-color: #1e1e1e;
    color: #d4d4d4;
}
QWidget {
    background-color: #1e1e1e;
    color: #d4d4d4;
}
QGroupBox {
    border: 1px solid #3c3c3c;
    border-radius: 4px;
    margin-top: 8px;
    padding-top: 8px;
    font-weight: bold;
}
QGroupBox::title {
    subcontrol-origin: margin;
    left: 10px;
    padding: 0 5px;
}
QLineEdit, QPlainTextEdit, QTextEdit, QComboBox, QSpinBox {
    background-color: #2d2d2d;
    border: 1px solid #3c3c3c;
    border-radius: 4px;
    padding: 4px;
    color: #d4d4d4;
    selection-background-color: #264f78;
}
QLineEdit:focus, QPlainTextEdit:focus, QTextEdit:focus {
    border-color: #0078d4;
}
QComboBox::drop-down {
    border: none;
    padding-right: 8px;
}
QComboBox::down-arrow {
    image: none;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid #d4d4d4;
}
QPushButton {
    background-color: #0078d4;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 6px 16px;
    font-weight: bold;
}
QPushButton:hover {
    background-color: #1084d8;
}
QPushButton:pressed {
    background-color: #006cc1;
}
QPushButton:disabled {
    background-color: #3c3c3c;
    color: #6c6c6c;
}
QTreeWidget, QTableWidget, QListWidget {
    background-color: #252526;
    border: 1px solid #3c3c3c;
    border-radius: 4px;
    alternate-background-color: #2d2d2d;
}
QTreeWidget::item, QTableWidget::item, QListWidget::item {
    padding: 4px;
}
QTreeWidget::item:selected, QTableWidget::item:selected, QListWidget::item:selected {
    background-color: #264f78;
}
QTreeWidget::item:hover, QTableWidget::item:hover, QListWidget::item:hover {
    background-color: #2a2d2e;
}
QHeaderView::section {
    background-color: #2d2d2d;
    color: #d4d4d4;
    border: none;
    border-bottom: 1px solid #3c3c3c;
    padding: 6px;
    font-weight: bold;
}
QTabWidget::pane {
    border: 1px solid #3c3c3c;
    border-radius: 4px;
}
QTabBar::tab {
    background-color: #2d2d2d;
    color: #d4d4d4;
    border: 1px solid #3c3c3c;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 6px 12px;
    margin-right: 2px;
}
QTabBar::tab:selected {
    background-color: #1e1e1e;
    border-bottom: 2px solid #0078d4;
}
QTabBar::tab:hover:!selected {
    background-color: #383838;
}
QMenuBar {
    background-color: #2d2d2d;
    color: #d4d4d4;
}
QMenuBar::item:selected {
    background-color: #3c3c3c;
}
QMenu {
    background-color: #2d2d2d;
    color: #d4d4d4;
    border: 1px solid #3c3c3c;
}
QMenu::item:selected {
    background-color: #264f78;
}
QStatusBar {
    background-color: #007acc;
    color: white;
}
QSplitter::handle {
    background-color: #3c3c3c;
}
QScrollBar:vertical {
    background-color: #1e1e1e;
    width: 12px;
    border: none;
}
QScrollBar::handle:vertical {
    background-color: #5a5a5a;
    border-radius: 6px;
    min-height: 20px;
}
QScrollBar::handle:vertical:hover {
    background-color: #6a6a6a;
}
QScrollBar:horizontal {
    background-color: #1e1e1e;
    height: 12px;
    border: none;
}
QScrollBar::handle:horizontal {
    background-color: #5a5a5a;
    border-radius: 6px;
    min-width: 20px;
}
QProgressBar {
    border: 1px solid #3c3c3c;
    border-radius: 4px;
    background-color: #2d2d2d;
    text-align: center;
}
QProgressBar::chunk {
    background-color: #0078d4;
    border-radius: 3px;
}
QLabel {
    background-color: transparent;
}
QLabel a {
    color: #3794ff;
}
"""

LIGHT_STYLE = """
QMainWindow, QDialog {
    background-color: #f5f5f5;
    color: #1e1e1e;
}
QWidget {
    background-color: #f5f5f5;
    color: #1e1e1e;
}
QGroupBox {
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    margin-top: 8px;
    padding-top: 8px;
    font-weight: bold;
}
QGroupBox::title {
    subcontrol-origin: margin;
    left: 10px;
    padding: 0 5px;
}
QLineEdit, QPlainTextEdit, QTextEdit, QComboBox, QSpinBox {
    background-color: white;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    padding: 4px;
    color: #1e1e1e;
    selection-background-color: #0078d4;
    selection-color: white;
}
QLineEdit:focus, QPlainTextEdit:focus, QTextEdit:focus {
    border-color: #0078d4;
}
QComboBox::drop-down {
    border: none;
    padding-right: 8px;
}
QComboBox::down-arrow {
    image: none;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid #1e1e1e;
}
QPushButton {
    background-color: #0078d4;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 6px 16px;
    font-weight: bold;
}
QPushButton:hover {
    background-color: #1084d8;
}
QPushButton:pressed {
    background-color: #006cc1;
}
QPushButton:disabled {
    background-color: #e0e0e0;
    color: #a0a0a0;
}
QTreeWidget, QTableWidget, QListWidget {
    background-color: white;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    alternate-background-color: #fafafa;
}
QTreeWidget::item, QTableWidget::item, QListWidget::item {
    padding: 4px;
}
QTreeWidget::item:selected, QTableWidget::item:selected, QListWidget::item:selected {
    background-color: #0078d4;
    color: white;
}
QTreeWidget::item:hover, QTableWidget::item:hover, QListWidget::item:hover {
    background-color: #e8e8e8;
}
QHeaderView::section {
    background-color: #f0f0f0;
    color: #1e1e1e;
    border: none;
    border-bottom: 1px solid #d0d0d0;
    padding: 6px;
    font-weight: bold;
}
QTabWidget::pane {
    border: 1px solid #d0d0d0;
    border-radius: 4px;
}
QTabBar::tab {
    background-color: #e8e8e8;
    color: #1e1e1e;
    border: 1px solid #d0d0d0;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 6px 12px;
    margin-right: 2px;
}
QTabBar::tab:selected {
    background-color: #f5f5f5;
    border-bottom: 2px solid #0078d4;
}
QTabBar::tab:hover:!selected {
    background-color: #d8d8d8;
}
QMenuBar {
    background-color: #f0f0f0;
    color: #1e1e1e;
}
QMenuBar::item:selected {
    background-color: #d0d0d0;
}
QMenu {
    background-color: white;
    color: #1e1e1e;
    border: 1px solid #d0d0d0;
}
QMenu::item:selected {
    background-color: #0078d4;
    color: white;
}
QStatusBar {
    background-color: #0078d4;
    color: white;
}
QSplitter::handle {
    background-color: #d0d0d0;
}
QScrollBar:vertical {
    background-color: #f5f5f5;
    width: 12px;
    border: none;
}
QScrollBar::handle:vertical {
    background-color: #c0c0c0;
    border-radius: 6px;
    min-height: 20px;
}
QScrollBar::handle:vertical:hover {
    background-color: #a0a0a0;
}
QScrollBar:horizontal {
    background-color: #f5f5f5;
    height: 12px;
    border: none;
}
QScrollBar::handle:horizontal {
    background-color: #c0c0c0;
    border-radius: 6px;
    min-width: 20px;
}
QProgressBar {
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    background-color: white;
    text-align: center;
}
QProgressBar::chunk {
    background-color: #0078d4;
    border-radius: 3px;
}
QLabel {
    background-color: transparent;
}
QLabel a {
    color: #0066cc;
}
"""

# Zscaler API Definitions
ZIA_ENDPOINTS = {
    "Authentication": {
        "Authenticate": {
            "method": "POST",
            "path": "/api/v1/authenticatedSession",
            "description": "Authenticate and get session cookie",
            "body": {"apiKey": "", "username": "", "password": "", "timestamp": ""},
        },
        "End Session": {
            "method": "DELETE",
            "path": "/api/v1/authenticatedSession",
            "description": "End authenticated session",
        },
    },
    "Users": {
        "List Users": {
            "method": "GET",
            "path": "/api/v1/users",
            "description": "Get all users",
            "params": {"page": "1", "pageSize": "100", "search": ""},
        },
        "Get User": {
            "method": "GET",
            "path": "/api/v1/users/{userId}",
            "description": "Get user by ID",
        },
        "Create User": {
            "method": "POST",
            "path": "/api/v1/users",
            "description": "Create a new user",
            "body": {"name": "", "email": "", "department": {"id": 0}, "groups": []},
        },
        "Update User": {
            "method": "PUT",
            "path": "/api/v1/users/{userId}",
            "description": "Update existing user",
            "body": {"name": "", "email": "", "department": {"id": 0}, "groups": []},
        },
        "Delete User": {
            "method": "DELETE",
            "path": "/api/v1/users/{userId}",
            "description": "Delete user by ID",
        },
        "Bulk Delete Users": {
            "method": "POST",
            "path": "/api/v1/users/bulkDelete",
            "description": "Bulk delete users",
            "body": {"ids": []},
        },
    },
    "Groups": {
        "List Groups": {
            "method": "GET",
            "path": "/api/v1/groups",
            "description": "Get all groups",
        },
        "Get Group": {
            "method": "GET",
            "path": "/api/v1/groups/{groupId}",
            "description": "Get group by ID",
        },
    },
    "Departments": {
        "List Departments": {
            "method": "GET",
            "path": "/api/v1/departments",
            "description": "Get all departments",
        },
    },
    "Locations": {
        "List Locations": {
            "method": "GET",
            "path": "/api/v1/locations",
            "description": "Get all locations",
        },
        "Get Location": {
            "method": "GET",
            "path": "/api/v1/locations/{locationId}",
            "description": "Get location by ID",
        },
        "Create Location": {
            "method": "POST",
            "path": "/api/v1/locations",
            "description": "Create a new location",
            "body": {"name": "", "ipAddresses": [], "vpnCredentials": []},
        },
    },
    "URL Categories": {
        "List URL Categories": {
            "method": "GET",
            "path": "/api/v1/urlCategories",
            "description": "Get all URL categories",
        },
        "Get URL Category": {
            "method": "GET",
            "path": "/api/v1/urlCategories/{categoryId}",
            "description": "Get URL category by ID",
        },
        "Lookup URL": {
            "method": "POST",
            "path": "/api/v1/urlLookup",
            "description": "Lookup URL categorization",
            "body": ["example.com"],
        },
    },
    "Firewall Policies": {
        "List Firewall Rules": {
            "method": "GET",
            "path": "/api/v1/firewallRules",
            "description": "Get all firewall rules",
        },
        "Get Firewall Rule": {
            "method": "GET",
            "path": "/api/v1/firewallRules/{ruleId}",
            "description": "Get firewall rule by ID",
        },
    },
    "Admin Audit Logs": {
        "Get Audit Logs": {
            "method": "GET",
            "path": "/api/v1/adminAuditLogs",
            "description": "Get admin audit logs",
            "params": {"startTime": "", "endTime": "", "page": "1", "pageSize": "100"},
        },
    },
    "Activation": {
        "Get Status": {
            "method": "GET",
            "path": "/api/v1/status",
            "description": "Get activation status",
        },
        "Activate Changes": {
            "method": "POST",
            "path": "/api/v1/status/activate",
            "description": "Activate pending changes",
        },
    },
    "Security Insights": {
        "Get Company Risk Score": {
            "method": "GET",
            "path": "/api/v1/riskScore",
            "description": "Get company-wide risk score and trends",
            "doc_url": "https://help.zscaler.com/zia/api-risk-score",
        },
        "Get Risk Score History": {
            "method": "GET",
            "path": "/api/v1/riskScore/history",
            "description": "Get historical risk score data",
            "params": {"startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/zia/api-risk-score",
        },
        "Get Insights Summary": {
            "method": "GET",
            "path": "/api/v1/insights/summary",
            "description": "Get security insights summary",
            "doc_url": "https://help.zscaler.com/zia/api-insights",
        },
        "Get Threat Insights": {
            "method": "GET",
            "path": "/api/v1/insights/threats",
            "description": "Get threat-related insights and statistics",
            "params": {"startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/zia/api-insights",
        },
    },
    "Malware Protection": {
        "Get Malware Summary": {
            "method": "GET",
            "path": "/api/v1/malware/summary",
            "description": "Get malware detection summary (count, types)",
            "params": {"startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/zia/api-malware-protection",
        },
        "Get Malware Detections": {
            "method": "GET",
            "path": "/api/v1/malware/detections",
            "description": "Get list of detected malware",
            "params": {"startTime": "", "endTime": "", "page": "1", "pageSize": "100"},
            "doc_url": "https://help.zscaler.com/zia/api-malware-protection",
        },
        "Get Blocked Malware": {
            "method": "GET",
            "path": "/api/v1/malware/blocked",
            "description": "Get blocked malware statistics",
            "params": {"startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/zia/api-malware-protection",
        },
        "Get Malware by Type": {
            "method": "GET",
            "path": "/api/v1/malware/byType",
            "description": "Get malware breakdown by type (virus, trojan, ransomware, etc.)",
            "params": {"startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/zia/api-malware-protection",
        },
    },
    "Reports": {
        "Get Executive Summary": {
            "method": "GET",
            "path": "/api/v1/reports/executive",
            "description": "Get executive summary report",
            "params": {"startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/zia/api-reports",
        },
        "Get Web Traffic Report": {
            "method": "GET",
            "path": "/api/v1/reports/webTraffic",
            "description": "Get web traffic analytics",
            "params": {"startTime": "", "endTime": "", "groupBy": "user"},
            "doc_url": "https://help.zscaler.com/zia/api-reports",
        },
        "Get Security Report": {
            "method": "GET",
            "path": "/api/v1/reports/security",
            "description": "Get security events report",
            "params": {"startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/zia/api-reports",
        },
        "Get Bandwidth Report": {
            "method": "GET",
            "path": "/api/v1/reports/bandwidth",
            "description": "Get bandwidth usage report",
            "params": {"startTime": "", "endTime": "", "groupBy": "department"},
            "doc_url": "https://help.zscaler.com/zia/api-reports",
        },
        "Get Top Users": {
            "method": "GET",
            "path": "/api/v1/reports/topUsers",
            "description": "Get top users by traffic/threats",
            "params": {"startTime": "", "endTime": "", "limit": "10", "metric": "traffic"},
            "doc_url": "https://help.zscaler.com/zia/api-reports",
        },
        "Get Top Applications": {
            "method": "GET",
            "path": "/api/v1/reports/topApps",
            "description": "Get top applications by usage",
            "params": {"startTime": "", "endTime": "", "limit": "10"},
            "doc_url": "https://help.zscaler.com/zia/api-reports",
        },
        "Get Top Threats": {
            "method": "GET",
            "path": "/api/v1/reports/topThreats",
            "description": "Get top threats detected",
            "params": {"startTime": "", "endTime": "", "limit": "10"},
            "doc_url": "https://help.zscaler.com/zia/api-reports",
        },
    },
    "Sandbox": {
        "Get Sandbox Report": {
            "method": "GET",
            "path": "/api/v1/sandbox/report/{md5Hash}",
            "description": "Get sandbox analysis report for a file",
            "doc_url": "https://help.zscaler.com/zia/api-sandbox",
        },
        "Submit File for Analysis": {
            "method": "POST",
            "path": "/api/v1/sandbox/submit",
            "description": "Submit a file for sandbox analysis",
            "body": {"fileType": "", "force": False},
            "doc_url": "https://help.zscaler.com/zia/api-sandbox",
        },
        "Get Sandbox Quota": {
            "method": "GET",
            "path": "/api/v1/sandbox/quota",
            "description": "Get remaining sandbox submission quota",
            "doc_url": "https://help.zscaler.com/zia/api-sandbox",
        },
    },
}

ZPA_ENDPOINTS = {
    "Authentication": {
        "Get Access Token": {
            "method": "POST",
            "path": "/signin",
            "description": "Get OAuth access token",
            "body": {"client_id": "", "client_secret": ""},
        },
    },
    "Application Segments": {
        "List App Segments": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/application",
            "description": "Get all application segments",
        },
        "Get App Segment": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/application/{appId}",
            "description": "Get application segment by ID",
        },
        "Create App Segment": {
            "method": "POST",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/application",
            "description": "Create application segment",
            "body": {
                "name": "",
                "domainNames": [],
                "tcpPortRanges": [],
                "segmentGroupId": "",
            },
        },
    },
    "Segment Groups": {
        "List Segment Groups": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/segmentGroup",
            "description": "Get all segment groups",
        },
    },
    "Server Groups": {
        "List Server Groups": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/serverGroup",
            "description": "Get all server groups",
        },
    },
    "Connectors": {
        "List Connectors": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/connector",
            "description": "Get all connectors",
        },
        "Get Connector": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/connector/{connectorId}",
            "description": "Get connector by ID",
        },
    },
    "Access Policies": {
        "List Access Policies": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/policySet/rules/policyType/ACCESS_POLICY",
            "description": "Get all access policies",
        },
    },
    "SAML Attributes": {
        "List SAML Attributes": {
            "method": "GET",
            "path": "/mgmtconfig/v1/admin/customers/{customerId}/samlAttribute",
            "description": "Get all SAML attributes",
        },
    },
}

ZDX_ENDPOINTS = {
    "Authentication": {
        "Get Access Token": {
            "method": "POST",
            "path": "/v1/oauth/token",
            "description": "Get OAuth access token for ZDX API",
            "body": {"key_id": "", "key_secret": ""},
            "doc_url": "https://help.zscaler.com/zdx/understanding-api-authentication",
        },
    },
    "Administration": {
        "Get Departments": {
            "method": "GET",
            "path": "/v1/administration/departments",
            "description": "Get all departments",
            "doc_url": "https://help.zscaler.com/zdx/administration-api",
        },
        "Get Locations": {
            "method": "GET",
            "path": "/v1/administration/locations",
            "description": "Get all locations",
            "doc_url": "https://help.zscaler.com/zdx/administration-api",
        },
        "Get Geolocations": {
            "method": "GET",
            "path": "/v1/administration/geolocations",
            "description": "Get all geolocations",
            "doc_url": "https://help.zscaler.com/zdx/administration-api",
        },
    },
    "Devices": {
        "List Devices": {
            "method": "GET",
            "path": "/v1/devices",
            "description": "Get all devices with ZDX scores",
            "params": {"since": "", "search": "", "limit": "100", "offset": "0"},
            "doc_url": "https://help.zscaler.com/zdx/devices-api",
        },
        "Get Device": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}",
            "description": "Get device details by ID",
            "doc_url": "https://help.zscaler.com/zdx/devices-api",
        },
        "Get Device Apps": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/apps",
            "description": "Get applications on a specific device",
            "doc_url": "https://help.zscaler.com/zdx/devices-api",
        },
        "Get Device Web Probes": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/web-probes",
            "description": "Get web probe results for a device",
            "doc_url": "https://help.zscaler.com/zdx/devices-api",
        },
        "Get Device Health Metrics": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/health-metrics",
            "description": "Get health metrics for a device",
            "doc_url": "https://help.zscaler.com/zdx/devices-api",
        },
        "Get Device Events": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/events",
            "description": "Get events for a device",
            "doc_url": "https://help.zscaler.com/zdx/devices-api",
        },
    },
    "Users": {
        "List Users": {
            "method": "GET",
            "path": "/v1/users",
            "description": "Get all users with ZDX scores",
            "params": {"since": "", "search": "", "limit": "100", "offset": "0"},
            "doc_url": "https://help.zscaler.com/zdx/users-api",
        },
        "Get User": {
            "method": "GET",
            "path": "/v1/users/{userId}",
            "description": "Get user details by ID",
            "doc_url": "https://help.zscaler.com/zdx/users-api",
        },
    },
    "Applications": {
        "List Applications": {
            "method": "GET",
            "path": "/v1/apps",
            "description": "Get all monitored applications",
            "doc_url": "https://help.zscaler.com/zdx/apps-api",
        },
        "Get Application": {
            "method": "GET",
            "path": "/v1/apps/{appId}",
            "description": "Get application details by ID",
            "doc_url": "https://help.zscaler.com/zdx/apps-api",
        },
        "Get App Score": {
            "method": "GET",
            "path": "/v1/apps/{appId}/score",
            "description": "Get ZDX score for an application",
            "doc_url": "https://help.zscaler.com/zdx/apps-api",
        },
        "Get App Metrics": {
            "method": "GET",
            "path": "/v1/apps/{appId}/metrics",
            "description": "Get performance metrics for an application",
            "doc_url": "https://help.zscaler.com/zdx/apps-api",
        },
    },
    "Alerts": {
        "List Alerts": {
            "method": "GET",
            "path": "/v1/alerts",
            "description": "Get all active alerts",
            "params": {"since": "", "limit": "100", "offset": "0"},
            "doc_url": "https://help.zscaler.com/zdx/alerts-api",
        },
        "Get Alert": {
            "method": "GET",
            "path": "/v1/alerts/{alertId}",
            "description": "Get alert details by ID",
            "doc_url": "https://help.zscaler.com/zdx/alerts-api",
        },
    },
    "Web Probes": {
        "List Web Probes": {
            "method": "GET",
            "path": "/v1/web-probes",
            "description": "Get all configured web probes",
            "doc_url": "https://help.zscaler.com/zdx/web-probes-api",
        },
    },
    "Deep Traces": {
        "Start Deep Trace": {
            "method": "POST",
            "path": "/v1/devices/{deviceId}/deep-traces",
            "description": "Start a deep trace on a device",
            "body": {"app_id": "", "duration": 300},
            "doc_url": "https://help.zscaler.com/zdx/deep-traces-api",
        },
        "Get Deep Trace Status": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/deep-traces/{traceId}",
            "description": "Get deep trace status",
            "doc_url": "https://help.zscaler.com/zdx/deep-traces-api",
        },
    },
}

ZCC_ENDPOINTS = {
    "Authentication": {
        "Get Access Token": {
            "method": "POST",
            "path": "/oauth/token",
            "description": "Get OAuth access token for Client Connector API",
            "body": {"client_id": "", "client_secret": ""},
            "doc_url": "https://help.zscaler.com/zcc/understanding-api-authentication",
        },
    },
    "Devices": {
        "List Devices": {
            "method": "GET",
            "path": "/v1/devices",
            "description": "Get all registered devices",
            "params": {"osType": "", "limit": "100", "offset": "0"},
            "doc_url": "https://help.zscaler.com/zcc/devices-api",
        },
        "Get Device": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}",
            "description": "Get device details by ID",
            "doc_url": "https://help.zscaler.com/zcc/devices-api",
        },
        "Get Device by UDID": {
            "method": "GET",
            "path": "/v1/devices/udid/{udid}",
            "description": "Get device by UDID",
            "doc_url": "https://help.zscaler.com/zcc/devices-api",
        },
        "Force Remove Device": {
            "method": "POST",
            "path": "/v1/devices/{deviceId}/force-remove",
            "description": "Force remove a device",
            "doc_url": "https://help.zscaler.com/zcc/devices-api",
        },
    },
    "Compliance": {
        "Get Compliance Status": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/compliance",
            "description": "Get device compliance status",
            "doc_url": "https://help.zscaler.com/zcc/compliance-api",
        },
        "List Non-Compliant Devices": {
            "method": "GET",
            "path": "/v1/compliance/non-compliant",
            "description": "Get all non-compliant devices",
            "params": {"limit": "100", "offset": "0"},
            "doc_url": "https://help.zscaler.com/zcc/compliance-api",
        },
        "Get Compliance Summary": {
            "method": "GET",
            "path": "/v1/compliance/summary",
            "description": "Get compliance summary statistics",
            "doc_url": "https://help.zscaler.com/zcc/compliance-api",
        },
        "Get Posture Profiles": {
            "method": "GET",
            "path": "/v1/compliance/posture-profiles",
            "description": "Get all device posture profiles",
            "doc_url": "https://help.zscaler.com/zcc/compliance-api",
        },
    },
    "Software": {
        "Get Software Versions": {
            "method": "GET",
            "path": "/v1/software/versions",
            "description": "Get available ZCC software versions",
            "doc_url": "https://help.zscaler.com/zcc/software-api",
        },
        "Get Device Software": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/software",
            "description": "Get software version on a device",
            "doc_url": "https://help.zscaler.com/zcc/software-api",
        },
        "Trigger Software Update": {
            "method": "POST",
            "path": "/v1/devices/{deviceId}/software/update",
            "description": "Trigger software update on a device",
            "body": {"version": ""},
            "doc_url": "https://help.zscaler.com/zcc/software-api",
        },
    },
    "Enrollment": {
        "Get Enrollment Tokens": {
            "method": "GET",
            "path": "/v1/enrollment/tokens",
            "description": "Get all enrollment tokens",
            "doc_url": "https://help.zscaler.com/zcc/enrollment-api",
        },
        "Create Enrollment Token": {
            "method": "POST",
            "path": "/v1/enrollment/tokens",
            "description": "Create new enrollment token",
            "body": {"name": "", "maxDevices": 100},
            "doc_url": "https://help.zscaler.com/zcc/enrollment-api",
        },
        "Delete Enrollment Token": {
            "method": "DELETE",
            "path": "/v1/enrollment/tokens/{tokenId}",
            "description": "Delete an enrollment token",
            "doc_url": "https://help.zscaler.com/zcc/enrollment-api",
        },
    },
    "Troubleshooting": {
        "Get Connection Health": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/health",
            "description": "Get connection health for a device",
            "doc_url": "https://help.zscaler.com/zcc/troubleshooting-api",
        },
        "Get Device Logs": {
            "method": "GET",
            "path": "/v1/devices/{deviceId}/logs",
            "description": "Get diagnostic logs from a device",
            "doc_url": "https://help.zscaler.com/zcc/troubleshooting-api",
        },
        "Request Log Upload": {
            "method": "POST",
            "path": "/v1/devices/{deviceId}/logs/upload",
            "description": "Request device to upload logs",
            "doc_url": "https://help.zscaler.com/zcc/troubleshooting-api",
        },
    },
}

# ZIdentity API Endpoints (Identity and Access Management)
ZIDENTITY_ENDPOINTS = {
    "Authentication": {
        "Get OAuth Token": {
            "method": "POST",
            "path": "/oauth2/v1/token",
            "description": "Get OAuth 2.0 access token",
            "body": {"client_id": "", "client_secret": "", "grant_type": "client_credentials"},
            "doc_url": "https://help.zscaler.com/zidentity/getting-started-zidentity-api",
        },
        "Revoke Token": {
            "method": "POST",
            "path": "/oauth2/v1/revoke",
            "description": "Revoke an access token",
            "body": {"token": ""},
            "doc_url": "https://help.zscaler.com/zidentity/getting-started-zidentity-api",
        },
    },
    "Users": {
        "List Users": {
            "method": "GET",
            "path": "/api/v1/users",
            "description": "List all users",
            "params": {"page": "1", "pageSize": "100", "search": ""},
            "doc_url": "https://help.zscaler.com/zidentity/user-management-api",
        },
        "Get User": {
            "method": "GET",
            "path": "/api/v1/users/{userId}",
            "description": "Get user by ID",
            "doc_url": "https://help.zscaler.com/zidentity/user-management-api",
        },
        "Create User": {
            "method": "POST",
            "path": "/api/v1/users",
            "description": "Create a new user",
            "body": {"userName": "", "email": "", "firstName": "", "lastName": "", "active": True},
            "doc_url": "https://help.zscaler.com/zidentity/user-management-api",
        },
        "Update User": {
            "method": "PUT",
            "path": "/api/v1/users/{userId}",
            "description": "Update an existing user",
            "body": {"userName": "", "email": "", "firstName": "", "lastName": "", "active": True},
            "doc_url": "https://help.zscaler.com/zidentity/user-management-api",
        },
        "Delete User": {
            "method": "DELETE",
            "path": "/api/v1/users/{userId}",
            "description": "Delete a user",
            "doc_url": "https://help.zscaler.com/zidentity/user-management-api",
        },
    },
    "Groups": {
        "List Groups": {
            "method": "GET",
            "path": "/api/v1/groups",
            "description": "List all groups",
            "params": {"page": "1", "pageSize": "100"},
            "doc_url": "https://help.zscaler.com/zidentity/group-management-api",
        },
        "Get Group": {
            "method": "GET",
            "path": "/api/v1/groups/{groupId}",
            "description": "Get group by ID",
            "doc_url": "https://help.zscaler.com/zidentity/group-management-api",
        },
        "Create Group": {
            "method": "POST",
            "path": "/api/v1/groups",
            "description": "Create a new group",
            "body": {"displayName": "", "description": ""},
            "doc_url": "https://help.zscaler.com/zidentity/group-management-api",
        },
        "Update Group": {
            "method": "PUT",
            "path": "/api/v1/groups/{groupId}",
            "description": "Update a group",
            "body": {"displayName": "", "description": ""},
            "doc_url": "https://help.zscaler.com/zidentity/group-management-api",
        },
        "Delete Group": {
            "method": "DELETE",
            "path": "/api/v1/groups/{groupId}",
            "description": "Delete a group",
            "doc_url": "https://help.zscaler.com/zidentity/group-management-api",
        },
        "Add User to Group": {
            "method": "POST",
            "path": "/api/v1/groups/{groupId}/members",
            "description": "Add user to group",
            "body": {"userId": ""},
            "doc_url": "https://help.zscaler.com/zidentity/group-management-api",
        },
        "Remove User from Group": {
            "method": "DELETE",
            "path": "/api/v1/groups/{groupId}/members/{userId}",
            "description": "Remove user from group",
            "doc_url": "https://help.zscaler.com/zidentity/group-management-api",
        },
    },
    "SCIM": {
        "List SCIM Users": {
            "method": "GET",
            "path": "/scim/v2/Users",
            "description": "List users via SCIM 2.0",
            "params": {"startIndex": "1", "count": "100", "filter": ""},
            "doc_url": "https://help.zscaler.com/zidentity/scim-api",
        },
        "Get SCIM User": {
            "method": "GET",
            "path": "/scim/v2/Users/{userId}",
            "description": "Get user via SCIM 2.0",
            "doc_url": "https://help.zscaler.com/zidentity/scim-api",
        },
        "Create SCIM User": {
            "method": "POST",
            "path": "/scim/v2/Users",
            "description": "Create user via SCIM 2.0",
            "body": {"schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"], "userName": "", "name": {"givenName": "", "familyName": ""}, "emails": [{"value": "", "primary": True}]},
            "doc_url": "https://help.zscaler.com/zidentity/scim-api",
        },
        "List SCIM Groups": {
            "method": "GET",
            "path": "/scim/v2/Groups",
            "description": "List groups via SCIM 2.0",
            "params": {"startIndex": "1", "count": "100"},
            "doc_url": "https://help.zscaler.com/zidentity/scim-api",
        },
    },
    "Identity Providers": {
        "List IdPs": {
            "method": "GET",
            "path": "/api/v1/idp",
            "description": "List all identity providers",
            "doc_url": "https://help.zscaler.com/zidentity/idp-api",
        },
        "Get IdP": {
            "method": "GET",
            "path": "/api/v1/idp/{idpId}",
            "description": "Get identity provider by ID",
            "doc_url": "https://help.zscaler.com/zidentity/idp-api",
        },
        "Get IdP Metadata": {
            "method": "GET",
            "path": "/api/v1/idp/{idpId}/metadata",
            "description": "Get SAML metadata for IdP",
            "doc_url": "https://help.zscaler.com/zidentity/idp-api",
        },
    },
    "API Clients": {
        "List API Clients": {
            "method": "GET",
            "path": "/api/v1/clients",
            "description": "List all API clients",
            "doc_url": "https://help.zscaler.com/zidentity/api-clients",
        },
        "Get API Client": {
            "method": "GET",
            "path": "/api/v1/clients/{clientId}",
            "description": "Get API client by ID",
            "doc_url": "https://help.zscaler.com/zidentity/api-clients",
        },
        "Create API Client": {
            "method": "POST",
            "path": "/api/v1/clients",
            "description": "Create a new API client",
            "body": {"name": "", "description": "", "scopes": []},
            "doc_url": "https://help.zscaler.com/zidentity/api-clients",
        },
        "Rotate Client Secret": {
            "method": "POST",
            "path": "/api/v1/clients/{clientId}/rotate-secret",
            "description": "Rotate API client secret",
            "doc_url": "https://help.zscaler.com/zidentity/api-clients",
        },
    },
    "Audit Logs": {
        "Get Audit Logs": {
            "method": "GET",
            "path": "/api/v1/audit/logs",
            "description": "Get audit logs",
            "params": {"startTime": "", "endTime": "", "page": "1", "pageSize": "100"},
            "doc_url": "https://help.zscaler.com/zidentity/audit-api",
        },
    },
}

# ZTW API Endpoints (Zero Trust Workloads / Cloud Branch Connector)
ZTW_ENDPOINTS = {
    "Authentication": {
        "Get OAuth Token": {
            "method": "POST",
            "path": "/oauth/token",
            "description": "Get OAuth access token for ZTW API",
            "body": {"client_id": "", "client_secret": "", "grant_type": "client_credentials"},
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/getting-started-api",
        },
    },
    "Branch Connectors": {
        "List Branch Connectors": {
            "method": "GET",
            "path": "/api/v1/branch-connectors",
            "description": "List all branch connectors",
            "params": {"page": "1", "pageSize": "100"},
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/branch-connector-api",
        },
        "Get Branch Connector": {
            "method": "GET",
            "path": "/api/v1/branch-connectors/{connectorId}",
            "description": "Get branch connector details",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/branch-connector-api",
        },
        "Create Branch Connector": {
            "method": "POST",
            "path": "/api/v1/branch-connectors",
            "description": "Create a new branch connector",
            "body": {"name": "", "description": "", "locationId": ""},
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/branch-connector-api",
        },
        "Update Branch Connector": {
            "method": "PUT",
            "path": "/api/v1/branch-connectors/{connectorId}",
            "description": "Update branch connector",
            "body": {"name": "", "description": ""},
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/branch-connector-api",
        },
        "Delete Branch Connector": {
            "method": "DELETE",
            "path": "/api/v1/branch-connectors/{connectorId}",
            "description": "Delete branch connector",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/branch-connector-api",
        },
    },
    "Connector Groups": {
        "List Connector Groups": {
            "method": "GET",
            "path": "/api/v1/connector-groups",
            "description": "List all connector groups",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/connector-group-api",
        },
        "Get Connector Group": {
            "method": "GET",
            "path": "/api/v1/connector-groups/{groupId}",
            "description": "Get connector group details",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/connector-group-api",
        },
        "Create Connector Group": {
            "method": "POST",
            "path": "/api/v1/connector-groups",
            "description": "Create a connector group",
            "body": {"name": "", "description": "", "enabled": True},
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/connector-group-api",
        },
    },
    "Locations": {
        "List Locations": {
            "method": "GET",
            "path": "/api/v1/locations",
            "description": "List all locations",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/location-api",
        },
        "Get Location": {
            "method": "GET",
            "path": "/api/v1/locations/{locationId}",
            "description": "Get location details",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/location-api",
        },
        "Create Location": {
            "method": "POST",
            "path": "/api/v1/locations",
            "description": "Create a new location",
            "body": {"name": "", "address": "", "latitude": 0, "longitude": 0},
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/location-api",
        },
    },
    "Service Edges": {
        "List Service Edges": {
            "method": "GET",
            "path": "/api/v1/service-edges",
            "description": "List all service edges",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/service-edge-api",
        },
        "Get Service Edge": {
            "method": "GET",
            "path": "/api/v1/service-edges/{edgeId}",
            "description": "Get service edge details",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/service-edge-api",
        },
        "Get Service Edge Health": {
            "method": "GET",
            "path": "/api/v1/service-edges/{edgeId}/health",
            "description": "Get service edge health status",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/service-edge-api",
        },
    },
    "Traffic Forwarding": {
        "List Forwarding Rules": {
            "method": "GET",
            "path": "/api/v1/forwarding-rules",
            "description": "List traffic forwarding rules",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/forwarding-api",
        },
        "Get Forwarding Rule": {
            "method": "GET",
            "path": "/api/v1/forwarding-rules/{ruleId}",
            "description": "Get forwarding rule details",
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/forwarding-api",
        },
        "Create Forwarding Rule": {
            "method": "POST",
            "path": "/api/v1/forwarding-rules",
            "description": "Create a forwarding rule",
            "body": {"name": "", "order": 1, "action": "FORWARD", "conditions": []},
            "doc_url": "https://help.zscaler.com/cloud-branch-connector/forwarding-api",
        },
    },
}

# ZWA API Endpoints (Workflow Automation)
ZWA_ENDPOINTS = {
    "Authentication": {
        "Get OAuth Token": {
            "method": "POST",
            "path": "/oauth/token",
            "description": "Get OAuth access token for Workflow Automation",
            "body": {"client_id": "", "client_secret": "", "grant_type": "client_credentials"},
            "doc_url": "https://help.zscaler.com/workflow-automation/getting-started-api",
        },
    },
    "Workflows": {
        "List Workflows": {
            "method": "GET",
            "path": "/api/v1/workflows",
            "description": "List all workflows",
            "params": {"page": "1", "pageSize": "100", "status": ""},
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
        "Get Workflow": {
            "method": "GET",
            "path": "/api/v1/workflows/{workflowId}",
            "description": "Get workflow details",
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
        "Create Workflow": {
            "method": "POST",
            "path": "/api/v1/workflows",
            "description": "Create a new workflow",
            "body": {"name": "", "description": "", "trigger": {}, "actions": []},
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
        "Update Workflow": {
            "method": "PUT",
            "path": "/api/v1/workflows/{workflowId}",
            "description": "Update a workflow",
            "body": {"name": "", "description": "", "enabled": True},
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
        "Delete Workflow": {
            "method": "DELETE",
            "path": "/api/v1/workflows/{workflowId}",
            "description": "Delete a workflow",
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
        "Enable Workflow": {
            "method": "POST",
            "path": "/api/v1/workflows/{workflowId}/enable",
            "description": "Enable a workflow",
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
        "Disable Workflow": {
            "method": "POST",
            "path": "/api/v1/workflows/{workflowId}/disable",
            "description": "Disable a workflow",
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
        "Execute Workflow": {
            "method": "POST",
            "path": "/api/v1/workflows/{workflowId}/execute",
            "description": "Manually execute a workflow",
            "body": {"parameters": {}},
            "doc_url": "https://help.zscaler.com/workflow-automation/workflow-api",
        },
    },
    "Executions": {
        "List Executions": {
            "method": "GET",
            "path": "/api/v1/executions",
            "description": "List workflow executions",
            "params": {"workflowId": "", "status": "", "startTime": "", "endTime": ""},
            "doc_url": "https://help.zscaler.com/workflow-automation/execution-api",
        },
        "Get Execution": {
            "method": "GET",
            "path": "/api/v1/executions/{executionId}",
            "description": "Get execution details",
            "doc_url": "https://help.zscaler.com/workflow-automation/execution-api",
        },
        "Get Execution Logs": {
            "method": "GET",
            "path": "/api/v1/executions/{executionId}/logs",
            "description": "Get execution logs",
            "doc_url": "https://help.zscaler.com/workflow-automation/execution-api",
        },
        "Cancel Execution": {
            "method": "POST",
            "path": "/api/v1/executions/{executionId}/cancel",
            "description": "Cancel a running execution",
            "doc_url": "https://help.zscaler.com/workflow-automation/execution-api",
        },
    },
    "Triggers": {
        "List Trigger Types": {
            "method": "GET",
            "path": "/api/v1/triggers/types",
            "description": "List available trigger types",
            "doc_url": "https://help.zscaler.com/workflow-automation/trigger-api",
        },
        "List Webhooks": {
            "method": "GET",
            "path": "/api/v1/webhooks",
            "description": "List webhook triggers",
            "doc_url": "https://help.zscaler.com/workflow-automation/trigger-api",
        },
        "Create Webhook": {
            "method": "POST",
            "path": "/api/v1/webhooks",
            "description": "Create a webhook trigger",
            "body": {"name": "", "workflowId": ""},
            "doc_url": "https://help.zscaler.com/workflow-automation/trigger-api",
        },
    },
    "Actions": {
        "List Action Types": {
            "method": "GET",
            "path": "/api/v1/actions/types",
            "description": "List available action types",
            "doc_url": "https://help.zscaler.com/workflow-automation/action-api",
        },
        "List Integrations": {
            "method": "GET",
            "path": "/api/v1/integrations",
            "description": "List available integrations",
            "doc_url": "https://help.zscaler.com/workflow-automation/integration-api",
        },
    },
    "Templates": {
        "List Templates": {
            "method": "GET",
            "path": "/api/v1/templates",
            "description": "List workflow templates",
            "doc_url": "https://help.zscaler.com/workflow-automation/template-api",
        },
        "Get Template": {
            "method": "GET",
            "path": "/api/v1/templates/{templateId}",
            "description": "Get template details",
            "doc_url": "https://help.zscaler.com/workflow-automation/template-api",
        },
        "Create from Template": {
            "method": "POST",
            "path": "/api/v1/templates/{templateId}/instantiate",
            "description": "Create workflow from template",
            "body": {"name": "", "parameters": {}},
            "doc_url": "https://help.zscaler.com/workflow-automation/template-api",
        },
    },
}

# EASM API Endpoints (External Attack Surface Management)
EASM_ENDPOINTS = {
    "Authentication": {
        "Get OAuth Token": {
            "method": "POST",
            "path": "/oauth/token",
            "description": "Get OAuth access token for EASM API",
            "body": {"client_id": "", "client_secret": "", "grant_type": "client_credentials"},
            "doc_url": "https://help.zscaler.com/easm/getting-started-api",
        },
    },
    "Assets": {
        "List Assets": {
            "method": "GET",
            "path": "/api/v1/assets",
            "description": "List all discovered assets",
            "params": {"page": "1", "pageSize": "100", "type": "", "riskLevel": ""},
            "doc_url": "https://help.zscaler.com/easm/assets-api",
        },
        "Get Asset": {
            "method": "GET",
            "path": "/api/v1/assets/{assetId}",
            "description": "Get asset details",
            "doc_url": "https://help.zscaler.com/easm/assets-api",
        },
        "Get Asset History": {
            "method": "GET",
            "path": "/api/v1/assets/{assetId}/history",
            "description": "Get asset change history",
            "doc_url": "https://help.zscaler.com/easm/assets-api",
        },
        "Update Asset Tags": {
            "method": "PUT",
            "path": "/api/v1/assets/{assetId}/tags",
            "description": "Update asset tags",
            "body": {"tags": []},
            "doc_url": "https://help.zscaler.com/easm/assets-api",
        },
    },
    "Domains": {
        "List Domains": {
            "method": "GET",
            "path": "/api/v1/domains",
            "description": "List all monitored domains",
            "params": {"page": "1", "pageSize": "100"},
            "doc_url": "https://help.zscaler.com/easm/domains-api",
        },
        "Get Domain": {
            "method": "GET",
            "path": "/api/v1/domains/{domainId}",
            "description": "Get domain details",
            "doc_url": "https://help.zscaler.com/easm/domains-api",
        },
        "Add Domain": {
            "method": "POST",
            "path": "/api/v1/domains",
            "description": "Add a domain to monitor",
            "body": {"domain": "", "autoDiscover": True},
            "doc_url": "https://help.zscaler.com/easm/domains-api",
        },
        "Remove Domain": {
            "method": "DELETE",
            "path": "/api/v1/domains/{domainId}",
            "description": "Remove a monitored domain",
            "doc_url": "https://help.zscaler.com/easm/domains-api",
        },
        "Get Subdomains": {
            "method": "GET",
            "path": "/api/v1/domains/{domainId}/subdomains",
            "description": "Get discovered subdomains",
            "doc_url": "https://help.zscaler.com/easm/domains-api",
        },
    },
    "IP Ranges": {
        "List IP Ranges": {
            "method": "GET",
            "path": "/api/v1/ip-ranges",
            "description": "List monitored IP ranges",
            "doc_url": "https://help.zscaler.com/easm/ip-api",
        },
        "Get IP Range": {
            "method": "GET",
            "path": "/api/v1/ip-ranges/{rangeId}",
            "description": "Get IP range details",
            "doc_url": "https://help.zscaler.com/easm/ip-api",
        },
        "Add IP Range": {
            "method": "POST",
            "path": "/api/v1/ip-ranges",
            "description": "Add an IP range to monitor",
            "body": {"cidr": "", "description": ""},
            "doc_url": "https://help.zscaler.com/easm/ip-api",
        },
        "Get IPs in Range": {
            "method": "GET",
            "path": "/api/v1/ip-ranges/{rangeId}/ips",
            "description": "Get discovered IPs in range",
            "doc_url": "https://help.zscaler.com/easm/ip-api",
        },
    },
    "Vulnerabilities": {
        "List Vulnerabilities": {
            "method": "GET",
            "path": "/api/v1/vulnerabilities",
            "description": "List all discovered vulnerabilities",
            "params": {"severity": "", "status": "", "page": "1", "pageSize": "100"},
            "doc_url": "https://help.zscaler.com/easm/vulnerabilities-api",
        },
        "Get Vulnerability": {
            "method": "GET",
            "path": "/api/v1/vulnerabilities/{vulnId}",
            "description": "Get vulnerability details",
            "doc_url": "https://help.zscaler.com/easm/vulnerabilities-api",
        },
        "Update Vulnerability Status": {
            "method": "PUT",
            "path": "/api/v1/vulnerabilities/{vulnId}/status",
            "description": "Update vulnerability status",
            "body": {"status": "ACKNOWLEDGED", "notes": ""},
            "doc_url": "https://help.zscaler.com/easm/vulnerabilities-api",
        },
        "Get Affected Assets": {
            "method": "GET",
            "path": "/api/v1/vulnerabilities/{vulnId}/assets",
            "description": "Get assets affected by vulnerability",
            "doc_url": "https://help.zscaler.com/easm/vulnerabilities-api",
        },
    },
    "Risks": {
        "Get Risk Summary": {
            "method": "GET",
            "path": "/api/v1/risks/summary",
            "description": "Get overall risk summary",
            "doc_url": "https://help.zscaler.com/easm/risks-api",
        },
        "Get Risk Trends": {
            "method": "GET",
            "path": "/api/v1/risks/trends",
            "description": "Get risk trends over time",
            "params": {"startDate": "", "endDate": ""},
            "doc_url": "https://help.zscaler.com/easm/risks-api",
        },
        "List Risk Factors": {
            "method": "GET",
            "path": "/api/v1/risks/factors",
            "description": "List contributing risk factors",
            "doc_url": "https://help.zscaler.com/easm/risks-api",
        },
    },
    "Certificates": {
        "List Certificates": {
            "method": "GET",
            "path": "/api/v1/certificates",
            "description": "List discovered SSL/TLS certificates",
            "params": {"status": "", "expiringWithin": ""},
            "doc_url": "https://help.zscaler.com/easm/certificates-api",
        },
        "Get Certificate": {
            "method": "GET",
            "path": "/api/v1/certificates/{certId}",
            "description": "Get certificate details",
            "doc_url": "https://help.zscaler.com/easm/certificates-api",
        },
        "Get Expiring Certificates": {
            "method": "GET",
            "path": "/api/v1/certificates/expiring",
            "description": "Get certificates expiring soon",
            "params": {"days": "30"},
            "doc_url": "https://help.zscaler.com/easm/certificates-api",
        },
    },
    "Scans": {
        "List Scans": {
            "method": "GET",
            "path": "/api/v1/scans",
            "description": "List all scans",
            "doc_url": "https://help.zscaler.com/easm/scans-api",
        },
        "Get Scan": {
            "method": "GET",
            "path": "/api/v1/scans/{scanId}",
            "description": "Get scan details",
            "doc_url": "https://help.zscaler.com/easm/scans-api",
        },
        "Trigger Scan": {
            "method": "POST",
            "path": "/api/v1/scans",
            "description": "Trigger a new scan",
            "body": {"type": "FULL", "targets": []},
            "doc_url": "https://help.zscaler.com/easm/scans-api",
        },
        "Get Scan Results": {
            "method": "GET",
            "path": "/api/v1/scans/{scanId}/results",
            "description": "Get scan results",
            "doc_url": "https://help.zscaler.com/easm/scans-api",
        },
    },
    "Reports": {
        "List Reports": {
            "method": "GET",
            "path": "/api/v1/reports",
            "description": "List generated reports",
            "doc_url": "https://help.zscaler.com/easm/reports-api",
        },
        "Generate Report": {
            "method": "POST",
            "path": "/api/v1/reports",
            "description": "Generate a new report",
            "body": {"type": "EXECUTIVE", "format": "PDF"},
            "doc_url": "https://help.zscaler.com/easm/reports-api",
        },
        "Download Report": {
            "method": "GET",
            "path": "/api/v1/reports/{reportId}/download",
            "description": "Download a report",
            "doc_url": "https://help.zscaler.com/easm/reports-api",
        },
    },
}

# API Documentation URLs
API_DOCS = {
    "ZIA": {
        "base": "https://help.zscaler.com/zia/api",
        "getting_started": "https://help.zscaler.com/zia/getting-started-zia-api",
        "authentication": "https://help.zscaler.com/zia/api-authentication",
        "rate_limits": "https://help.zscaler.com/zia/rate-limiting",
    },
    "ZPA": {
        "base": "https://help.zscaler.com/zpa/api-reference",
        "getting_started": "https://help.zscaler.com/zpa/zpa-api-getting-started",
        "authentication": "https://help.zscaler.com/zpa/about-zpa-api-authentication",
        "rate_limits": "https://help.zscaler.com/zpa/api-rate-limiting",
    },
    "ZDX": {
        "base": "https://help.zscaler.com/zdx/api-reference",
        "getting_started": "https://help.zscaler.com/zdx/getting-started-zdx-api",
        "authentication": "https://help.zscaler.com/zdx/understanding-api-authentication",
        "rate_limits": "https://help.zscaler.com/zdx/api-rate-limiting",
    },
    "ZCC": {
        "base": "https://help.zscaler.com/zcc/api-reference",
        "getting_started": "https://help.zscaler.com/zcc/getting-started-zcc-api",
        "authentication": "https://help.zscaler.com/zcc/understanding-api-authentication",
        "rate_limits": "https://help.zscaler.com/zcc/api-rate-limiting",
    },
    "ZIdentity": {
        "base": "https://help.zscaler.com/zidentity/api-reference",
        "getting_started": "https://help.zscaler.com/zidentity/getting-started-zidentity-api",
        "authentication": "https://help.zscaler.com/zidentity/api-authentication",
        "rate_limits": "https://help.zscaler.com/zidentity/api-rate-limiting",
    },
    "ZTW": {
        "base": "https://help.zscaler.com/cloud-branch-connector/api-reference",
        "getting_started": "https://help.zscaler.com/cloud-branch-connector/getting-started-api",
        "authentication": "https://help.zscaler.com/cloud-branch-connector/api-authentication",
        "rate_limits": "https://help.zscaler.com/cloud-branch-connector/api-rate-limiting",
    },
    "ZWA": {
        "base": "https://help.zscaler.com/workflow-automation/api-reference",
        "getting_started": "https://help.zscaler.com/workflow-automation/getting-started-api",
        "authentication": "https://help.zscaler.com/workflow-automation/api-authentication",
        "rate_limits": "https://help.zscaler.com/workflow-automation/api-rate-limiting",
    },
    "EASM": {
        "base": "https://help.zscaler.com/easm/api-reference",
        "getting_started": "https://help.zscaler.com/easm/getting-started-api",
        "authentication": "https://help.zscaler.com/easm/api-authentication",
        "rate_limits": "https://help.zscaler.com/easm/api-rate-limiting",
    },
}


class JsonHighlighter(QSyntaxHighlighter):
    """Syntax highlighter for JSON."""
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.formats = {}
        
        # String format (green)
        string_format = QTextCharFormat()
        string_format.setForeground(QColor("#22863a"))
        self.formats["string"] = string_format
        
        # Number format (blue)
        number_format = QTextCharFormat()
        number_format.setForeground(QColor("#005cc5"))
        self.formats["number"] = number_format
        
        # Key format (purple)
        key_format = QTextCharFormat()
        key_format.setForeground(QColor("#6f42c1"))
        self.formats["key"] = key_format
        
        # Boolean/null format (red)
        keyword_format = QTextCharFormat()
        keyword_format.setForeground(QColor("#d73a49"))
        self.formats["keyword"] = keyword_format
    
    def highlightBlock(self, text):
        import re
        
        # Keys
        for match in re.finditer(r'"([^"]+)"(?=\s*:)', text):
            self.setFormat(match.start(), match.end() - match.start(), self.formats["key"])
        
        # Strings (not keys)
        for match in re.finditer(r':\s*"([^"]*)"', text):
            start = match.start() + text[match.start():].index('"')
            self.setFormat(start, match.end() - start, self.formats["string"])
        
        # Numbers
        for match in re.finditer(r'\b-?\d+\.?\d*\b', text):
            self.setFormat(match.start(), match.end() - match.start(), self.formats["number"])
        
        # Keywords
        for match in re.finditer(r'\b(true|false|null)\b', text):
            self.setFormat(match.start(), match.end() - match.start(), self.formats["keyword"])


class ApiWorker(QThread):
    """Worker thread for API requests."""
    finished = pyqtSignal(dict)
    progress = pyqtSignal(int, int)
    
    def __init__(self, requests: List[Dict]):
        super().__init__()
        self.requests = requests
    
    def run(self):
        results = []
        total = len(self.requests)
        
        for i, req in enumerate(self.requests):
            try:
                result = self._make_request(req)
                results.append({"success": True, "data": result, "request": req})
            except Exception as e:
                results.append({"success": False, "error": str(e), "request": req})
            
            self.progress.emit(i + 1, total)
            time.sleep(0.1)  # Rate limiting
        
        self.finished.emit({"results": results})
    
    def _make_request(self, req: Dict) -> Dict:
        url = req["url"]
        method = req.get("method", "GET")
        headers = req.get("headers", {})
        body = req.get("body")
        
        data = None
        if body:
            data = json.dumps(body).encode("utf-8")
            headers["Content-Type"] = "application/json"
        
        request = urllib.request.Request(url, data=data, headers=headers, method=method)
        
        with urllib.request.urlopen(request, timeout=30) as response:
            return json.loads(response.read().decode("utf-8"))


class WelcomeDialog(QDialog):
    """Welcome dialog for new users with getting started guidance."""
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle(self.tr("Welcome to Zscaler API Client"))
        self.setMinimumSize(700, 600)
        
        layout = QVBoxLayout(self)
        layout.setSpacing(20)
        
        # Header
        header = QLabel(f"<h1>🔐 Zscaler API Client v{__version__}</h1>")
        header.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(header)
        
        subtitle = QLabel(self.tr(
            "<p style='font-size: 14px; color: #666;'>"
            "A Postman-like tool for exploring Zscaler APIs"
            "</p>"
        ))
        subtitle.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(subtitle)
        
        # Scroll area for content
        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        scroll.setFrameShape(QFrame.Shape.NoFrame)
        
        content = QWidget()
        content_layout = QVBoxLayout(content)
        
        # Supported APIs
        apis_group = QGroupBox(self.tr("Supported APIs"))
        apis_layout = QVBoxLayout(apis_group)
        apis_label = QLabel(self.tr(
            "<table cellspacing='10'>"
            "<tr><td><b>🌐 ZIA</b></td><td>Zscaler Internet Access – Web security, URL filtering, firewall</td></tr>"
            "<tr><td><b>🔒 ZPA</b></td><td>Zscaler Private Access – Zero trust application access</td></tr>"
            "<tr><td><b>📊 ZDX</b></td><td>Zscaler Digital Experience – User experience monitoring</td></tr>"
            "<tr><td><b>💻 ZCC</b></td><td>Client Connector – Device management and compliance</td></tr>"
            "<tr><td><b>🔑 ZIdentity</b></td><td>Identity & Access Management – Users, groups, SCIM, IdPs</td></tr>"
            "<tr><td><b>🌿 ZTW</b></td><td>Zero Trust Workloads – Branch connectors, service edges</td></tr>"
            "<tr><td><b>⚡ ZWA</b></td><td>Workflow Automation – Automated policies and triggers</td></tr>"
            "<tr><td><b>🔍 EASM</b></td><td>External Attack Surface Management – Asset discovery, vulnerabilities</td></tr>"
            "</table>"
        ))
        apis_label.setWordWrap(True)
        apis_layout.addWidget(apis_label)
        content_layout.addWidget(apis_group)
        
        # Getting Started
        start_group = QGroupBox(self.tr("Getting Started"))
        start_layout = QVBoxLayout(start_group)
        start_label = QLabel(self.tr(
            "<ol>"
            "<li><b>Configure Credentials</b> – Go to <i>File → Settings</i> and enter your API credentials</li>"
            "<li><b>Select API</b> – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM</li>"
            "<li><b>Browse Endpoints</b> – Click on an endpoint in the tree to load it</li>"
            "<li><b>Send Request</b> – Modify parameters if needed, then click Send</li>"
            "<li><b>View Response</b> – JSON response will appear with syntax highlighting</li>"
            "</ol>"
        ))
        start_label.setWordWrap(True)
        start_layout.addWidget(start_label)
        content_layout.addWidget(start_group)
        
        # Tips for Advanced Users
        tips_group = QGroupBox(self.tr("Tips for Advanced Users"))
        tips_layout = QVBoxLayout(tips_group)
        tips_label = QLabel(self.tr(
            "<ul>"
            "<li><b>Ctrl+Enter</b> – Send request quickly</li>"
            "<li><b>Ctrl+Shift+C</b> – Copy request as cURL command</li>"
            "<li><b>Ctrl+H</b> – View request history</li>"
            "<li><b>Batch Operations</b> – Import CSV for bulk API calls</li>"
            "<li><b>Request menu</b> – Quick authentication helpers for each API</li>"
            "<li><b>Themes</b> – Switch between Light/Dark/System in Settings</li>"
            "</ul>"
        ))
        tips_label.setWordWrap(True)
        tips_layout.addWidget(tips_label)
        content_layout.addWidget(tips_group)
        
        # Documentation Links
        docs_group = QGroupBox(self.tr("Documentation"))
        docs_layout = QVBoxLayout(docs_group)
        docs_label = QLabel(
            "<p>"
            "<a href='https://help.zscaler.com/zia/api'>ZIA API Documentation</a> · "
            "<a href='https://help.zscaler.com/zpa/api-reference'>ZPA API Documentation</a><br>"
            "<a href='https://help.zscaler.com/zdx/api-reference'>ZDX API Documentation</a> · "
            "<a href='https://help.zscaler.com/zcc/api-reference'>ZCC API Documentation</a><br><br>"
            "<a href='https://github.com/yeager/zscaler-api-client'>GitHub Repository</a>"
            "</p>"
        )
        docs_label.setOpenExternalLinks(True)
        docs_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        docs_layout.addWidget(docs_label)
        content_layout.addWidget(docs_group)
        
        content_layout.addStretch()
        scroll.setWidget(content)
        layout.addWidget(scroll)
        
        # Show on startup checkbox
        self.show_on_startup = QCheckBox(self.tr("Show this dialog on startup"))
        self.show_on_startup.setChecked(True)
        layout.addWidget(self.show_on_startup)
        
        # Buttons
        btn_layout = QHBoxLayout()
        btn_layout.addStretch()
        
        settings_btn = QPushButton(self.tr("Open Settings"))
        settings_btn.clicked.connect(self._open_settings)
        btn_layout.addWidget(settings_btn)
        
        start_btn = QPushButton(self.tr("Get Started"))
        start_btn.setDefault(True)
        start_btn.clicked.connect(self.accept)
        btn_layout.addWidget(start_btn)
        
        layout.addLayout(btn_layout)
        
        # Load preference
        settings = QSettings("Zscaler", "APIClient")
        show = settings.value("welcome/show_on_startup", "true") == "true"
        self.show_on_startup.setChecked(show)
    
    def _open_settings(self):
        self.accept()
        if self.parent():
            self.parent()._show_settings()
    
    def accept(self):
        settings = QSettings("Zscaler", "APIClient")
        settings.setValue("welcome/show_on_startup", 
                         "true" if self.show_on_startup.isChecked() else "false")
        super().accept()


def create_splash_pixmap() -> QPixmap:
    """Create a splash screen pixmap."""
    pixmap = QPixmap(500, 300)
    pixmap.fill(QColor("#1e1e1e"))
    
    painter = QPainter(pixmap)
    painter.setRenderHint(QPainter.RenderHint.Antialiasing)
    
    # Draw gradient background
    painter.fillRect(0, 0, 500, 300, QColor("#1a1a2e"))
    
    # Draw accent bar
    painter.fillRect(0, 0, 500, 4, QColor("#0078d4"))
    
    # Draw title
    font = QFont("Arial", 28, QFont.Weight.Bold)
    painter.setFont(font)
    painter.setPen(QColor("#ffffff"))
    painter.drawText(pixmap.rect().adjusted(0, 60, 0, 0), 
                    Qt.AlignmentFlag.AlignHCenter, "🔐 Zscaler API Client")
    
    # Draw version
    font = QFont("Arial", 14)
    painter.setFont(font)
    painter.setPen(QColor("#888888"))
    painter.drawText(pixmap.rect().adjusted(0, 120, 0, 0),
                    Qt.AlignmentFlag.AlignHCenter, f"Version {__version__}")
    
    # Draw supported APIs
    font = QFont("Arial", 11)
    painter.setFont(font)
    painter.setPen(QColor("#666666"))
    painter.drawText(pixmap.rect().adjusted(0, 170, 0, 0),
                    Qt.AlignmentFlag.AlignHCenter, "ZIA · ZPA · ZDX · ZCC · ZIdentity · ZTW · ZWA · EASM")
    
    # Draw loading text
    painter.drawText(pixmap.rect().adjusted(0, 220, 0, 0),
                    Qt.AlignmentFlag.AlignHCenter, "Loading...")
    
    # Draw copyright
    font = QFont("Arial", 9)
    painter.setFont(font)
    painter.setPen(QColor("#444444"))
    painter.drawText(pixmap.rect().adjusted(0, 0, 0, -20),
                    Qt.AlignmentFlag.AlignHCenter | Qt.AlignmentFlag.AlignBottom,
                    "© 2026 Daniel Nylander · GPL-3.0")
    
    painter.end()
    return pixmap


class AboutDialog(QDialog):
    """About dialog with copyright and disclaimer."""
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle(self.tr("About Zscaler API Client"))
        self.setFixedSize(500, 400)
        
        layout = QVBoxLayout(self)
        layout.setSpacing(15)
        
        # Title and version
        title_label = QLabel(f"<h1>Zscaler API Client</h1>")
        title_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(title_label)
        
        version_label = QLabel(f"<p style='font-size: 14px;'>Version {__version__}</p>")
        version_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(version_label)
        
        # Description
        desc_label = QLabel(self.tr(
            "<p>A Postman-like desktop application for exploring and testing "
            "Zscaler APIs (ZIA and ZPA).</p>"
        ))
        desc_label.setWordWrap(True)
        desc_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(desc_label)
        
        # Copyright
        copyright_label = QLabel(
            "<p><b>Copyright © 2026 Daniel Nylander</b><br>"
            "<a href='mailto:daniel@danielnylander.se'>daniel@danielnylander.se</a></p>"
        )
        copyright_label.setOpenExternalLinks(True)
        copyright_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(copyright_label)
        
        # Credits
        credits_label = QLabel(
            "<p><i>Thanks to Nima Samadi for feature suggestions</i></p>"
        )
        credits_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(credits_label)
        
        # License
        license_label = QLabel(
            "<p>Licensed under the <a href='https://www.gnu.org/licenses/gpl-3.0.html'>"
            "GNU General Public License v3.0</a> or later.</p>"
        )
        license_label.setOpenExternalLinks(True)
        license_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(license_label)
        
        # Disclaimer box
        disclaimer_group = QGroupBox(self.tr("Disclaimer"))
        disclaimer_layout = QVBoxLayout(disclaimer_group)
        disclaimer_text = QLabel(self.tr(
            "<p style='color: #666;'>"
            "This software is <b>not affiliated with, endorsed by, or supported by "
            "Zscaler, Inc.</b> in any way. This is an independent community project.</p>"
            "<p style='color: #666;'>"
            "Zscaler® is a registered trademark of Zscaler, Inc. All product names, "
            "logos, and brands are property of their respective owners.</p>"
            "<p style='color: #666;'>"
            "<b>NO WARRANTY:</b> This software is provided \"as is\" without warranty "
            "of any kind. Use at your own risk. The author is not responsible for any "
            "damage or data loss resulting from the use of this software.</p>"
            "<p style='color: #666;'>"
            "<b>NO SUPPORT:</b> For Zscaler product support, please contact "
            "Zscaler directly through official channels.</p>"
        ))
        disclaimer_text.setWordWrap(True)
        disclaimer_layout.addWidget(disclaimer_text)
        layout.addWidget(disclaimer_group)
        
        # Links
        links_label = QLabel(
            "<p><a href='https://github.com/yeager/zscaler-api-client'>GitHub Repository</a> | "
            "<a href='https://help.zscaler.com/zia/api'>ZIA API Docs</a> | "
            "<a href='https://help.zscaler.com/zpa/api-reference'>ZPA API Docs</a></p>"
        )
        links_label.setOpenExternalLinks(True)
        links_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(links_label)
        
        layout.addStretch()
        
        # Close button
        buttons = QDialogButtonBox(QDialogButtonBox.StandardButton.Close)
        buttons.rejected.connect(self.reject)
        layout.addWidget(buttons)


class SettingsDialog(QDialog):
    """Settings dialog for API credentials and advanced options."""
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle(self.tr("Settings"))
        self.setMinimumWidth(550)
        
        layout = QVBoxLayout(self)
        
        # Create tab widget for organized settings
        tabs = QTabWidget()
        
        # === Credentials Tab ===
        creds_widget = QWidget()
        creds_layout = QVBoxLayout(creds_widget)
        
        # ZIA Settings
        zia_group = QGroupBox(self.tr("ZIA (Zscaler Internet Access)"))
        zia_layout = QFormLayout(zia_group)
        
        self.zia_cloud = QLineEdit()
        self.zia_cloud.setPlaceholderText("zsapi.zscaler.net")
        zia_layout.addRow(self.tr("Cloud:"), self.zia_cloud)
        
        self.zia_api_key = QLineEdit()
        self.zia_api_key.setEchoMode(QLineEdit.EchoMode.Password)
        zia_layout.addRow(self.tr("API Key:"), self.zia_api_key)
        
        self.zia_username = QLineEdit()
        zia_layout.addRow(self.tr("Username:"), self.zia_username)
        
        self.zia_password = QLineEdit()
        self.zia_password.setEchoMode(QLineEdit.EchoMode.Password)
        zia_layout.addRow(self.tr("Password:"), self.zia_password)
        
        creds_layout.addWidget(zia_group)
        
        # ZPA Settings
        zpa_group = QGroupBox(self.tr("ZPA (Zscaler Private Access)"))
        zpa_layout = QFormLayout(zpa_group)
        
        self.zpa_cloud = QLineEdit()
        self.zpa_cloud.setPlaceholderText("config.private.zscaler.com")
        zpa_layout.addRow(self.tr("Cloud:"), self.zpa_cloud)
        
        self.zpa_client_id = QLineEdit()
        zpa_layout.addRow(self.tr("Client ID:"), self.zpa_client_id)
        
        self.zpa_client_secret = QLineEdit()
        self.zpa_client_secret.setEchoMode(QLineEdit.EchoMode.Password)
        zpa_layout.addRow(self.tr("Client Secret:"), self.zpa_client_secret)
        
        self.zpa_customer_id = QLineEdit()
        zpa_layout.addRow(self.tr("Customer ID:"), self.zpa_customer_id)
        
        creds_layout.addWidget(zpa_group)
        
        # ZDX Settings
        zdx_group = QGroupBox(self.tr("ZDX (Zscaler Digital Experience)"))
        zdx_layout = QFormLayout(zdx_group)
        
        self.zdx_cloud = QLineEdit()
        self.zdx_cloud.setPlaceholderText("api.zdxcloud.net")
        zdx_layout.addRow(self.tr("Cloud:"), self.zdx_cloud)
        
        self.zdx_key_id = QLineEdit()
        zdx_layout.addRow(self.tr("Key ID:"), self.zdx_key_id)
        
        self.zdx_key_secret = QLineEdit()
        self.zdx_key_secret.setEchoMode(QLineEdit.EchoMode.Password)
        zdx_layout.addRow(self.tr("Key Secret:"), self.zdx_key_secret)
        
        creds_layout.addWidget(zdx_group)
        
        # ZCC Settings
        zcc_group = QGroupBox(self.tr("ZCC (Client Connector)"))
        zcc_layout = QFormLayout(zcc_group)
        
        self.zcc_cloud = QLineEdit()
        self.zcc_cloud.setPlaceholderText("api.zscaler.com")
        zcc_layout.addRow(self.tr("Cloud:"), self.zcc_cloud)
        
        self.zcc_client_id = QLineEdit()
        zcc_layout.addRow(self.tr("Client ID:"), self.zcc_client_id)
        
        self.zcc_client_secret = QLineEdit()
        self.zcc_client_secret.setEchoMode(QLineEdit.EchoMode.Password)
        zcc_layout.addRow(self.tr("Client Secret:"), self.zcc_client_secret)
        
        creds_layout.addWidget(zcc_group)
        
        # ZIdentity Settings
        zidentity_group = QGroupBox(self.tr("ZIdentity (Identity & Access)"))
        zidentity_layout = QFormLayout(zidentity_group)
        
        self.zidentity_domain = QLineEdit()
        self.zidentity_domain.setPlaceholderText("your-tenant.zslogin.net")
        zidentity_layout.addRow(self.tr("Vanity Domain:"), self.zidentity_domain)
        
        self.zidentity_client_id = QLineEdit()
        zidentity_layout.addRow(self.tr("Client ID:"), self.zidentity_client_id)
        
        self.zidentity_client_secret = QLineEdit()
        self.zidentity_client_secret.setEchoMode(QLineEdit.EchoMode.Password)
        zidentity_layout.addRow(self.tr("Client Secret:"), self.zidentity_client_secret)
        
        creds_layout.addWidget(zidentity_group)
        
        # ZTW Settings (Zero Trust Workloads / Cloud Branch Connector)
        ztw_group = QGroupBox(self.tr("ZTW (Zero Trust Workloads)"))
        ztw_layout = QFormLayout(ztw_group)
        
        self.ztw_cloud = QLineEdit()
        self.ztw_cloud.setPlaceholderText("api.zscaler.com")
        ztw_layout.addRow(self.tr("Cloud:"), self.ztw_cloud)
        
        self.ztw_client_id = QLineEdit()
        ztw_layout.addRow(self.tr("Client ID:"), self.ztw_client_id)
        
        self.ztw_client_secret = QLineEdit()
        self.ztw_client_secret.setEchoMode(QLineEdit.EchoMode.Password)
        ztw_layout.addRow(self.tr("Client Secret:"), self.ztw_client_secret)
        
        creds_layout.addWidget(ztw_group)
        
        # ZWA Settings (Workflow Automation)
        zwa_group = QGroupBox(self.tr("ZWA (Workflow Automation)"))
        zwa_layout = QFormLayout(zwa_group)
        
        self.zwa_cloud = QLineEdit()
        self.zwa_cloud.setPlaceholderText("api.zscaler.com")
        zwa_layout.addRow(self.tr("Cloud:"), self.zwa_cloud)
        
        self.zwa_client_id = QLineEdit()
        zwa_layout.addRow(self.tr("Client ID:"), self.zwa_client_id)
        
        self.zwa_client_secret = QLineEdit()
        self.zwa_client_secret.setEchoMode(QLineEdit.EchoMode.Password)
        zwa_layout.addRow(self.tr("Client Secret:"), self.zwa_client_secret)
        
        creds_layout.addWidget(zwa_group)
        
        # EASM Settings (External Attack Surface Management)
        easm_group = QGroupBox(self.tr("EASM (Attack Surface Management)"))
        easm_layout = QFormLayout(easm_group)
        
        self.easm_cloud = QLineEdit()
        self.easm_cloud.setPlaceholderText("api.zscaler.com")
        easm_layout.addRow(self.tr("Cloud:"), self.easm_cloud)
        
        self.easm_client_id = QLineEdit()
        easm_layout.addRow(self.tr("Client ID:"), self.easm_client_id)
        
        self.easm_client_secret = QLineEdit()
        self.easm_client_secret.setEchoMode(QLineEdit.EchoMode.Password)
        easm_layout.addRow(self.tr("Client Secret:"), self.easm_client_secret)
        
        creds_layout.addWidget(easm_group)
        creds_layout.addStretch()
        
        tabs.addTab(creds_widget, self.tr("Credentials"))
        
        # === Advanced Tab ===
        advanced_widget = QWidget()
        advanced_layout = QVBoxLayout(advanced_widget)
        
        # Network Settings
        network_group = QGroupBox(self.tr("Network"))
        network_layout = QFormLayout(network_group)
        
        self.timeout_spin = QComboBox()
        self.timeout_spin.addItems(["10", "30", "60", "120", "300"])
        self.timeout_spin.setEditable(True)
        network_layout.addRow(self.tr("Request Timeout (seconds):"), self.timeout_spin)
        
        self.verify_ssl = QComboBox()
        self.verify_ssl.addItems([self.tr("Enabled"), self.tr("Disabled")])
        ssl_note = QLabel(self.tr("<small><i>⚠️ Only disable for testing</i></small>"))
        ssl_layout = QHBoxLayout()
        ssl_layout.addWidget(self.verify_ssl)
        ssl_layout.addWidget(ssl_note)
        ssl_layout.addStretch()
        network_layout.addRow(self.tr("SSL Verification:"), ssl_layout)
        
        advanced_layout.addWidget(network_group)
        
        # Proxy Settings
        proxy_group = QGroupBox(self.tr("Proxy"))
        proxy_layout = QFormLayout(proxy_group)
        
        self.proxy_enabled = QComboBox()
        self.proxy_enabled.addItems([self.tr("No Proxy"), self.tr("System Proxy"), self.tr("Manual")])
        self.proxy_enabled.currentIndexChanged.connect(self._on_proxy_changed)
        proxy_layout.addRow(self.tr("Proxy Mode:"), self.proxy_enabled)
        
        self.proxy_host = QLineEdit()
        self.proxy_host.setPlaceholderText("proxy.example.com")
        proxy_layout.addRow(self.tr("Proxy Host:"), self.proxy_host)
        
        self.proxy_port = QLineEdit()
        self.proxy_port.setPlaceholderText("8080")
        self.proxy_port.setMaximumWidth(100)
        proxy_layout.addRow(self.tr("Proxy Port:"), self.proxy_port)
        
        self.proxy_username = QLineEdit()
        self.proxy_username.setPlaceholderText(self.tr("Optional"))
        proxy_layout.addRow(self.tr("Proxy Username:"), self.proxy_username)
        
        self.proxy_password = QLineEdit()
        self.proxy_password.setEchoMode(QLineEdit.EchoMode.Password)
        self.proxy_password.setPlaceholderText(self.tr("Optional"))
        proxy_layout.addRow(self.tr("Proxy Password:"), self.proxy_password)
        
        advanced_layout.addWidget(proxy_group)
        
        # Behavior Settings
        behavior_group = QGroupBox(self.tr("Behavior"))
        behavior_layout = QFormLayout(behavior_group)
        
        self.auto_auth = QComboBox()
        self.auto_auth.addItems([self.tr("Disabled"), self.tr("Enabled")])
        behavior_layout.addRow(self.tr("Auto-authenticate on startup:"), self.auto_auth)
        
        self.save_history = QComboBox()
        self.save_history.addItems([self.tr("Disabled"), self.tr("Enabled")])
        behavior_layout.addRow(self.tr("Save request history:"), self.save_history)
        
        self.history_limit = QComboBox()
        self.history_limit.addItems(["50", "100", "200", "500", "1000"])
        behavior_layout.addRow(self.tr("History limit:"), self.history_limit)
        
        self.default_api = QComboBox()
        self.default_api.addItems(["ZIA", "ZPA", "ZDX", "ZCC", "ZIdentity", "ZTW", "ZWA", "EASM"])
        behavior_layout.addRow(self.tr("Default API:"), self.default_api)
        
        self.auto_update_check = QComboBox()
        self.auto_update_check.addItems([self.tr("Disabled"), self.tr("Enabled")])
        behavior_layout.addRow(self.tr("Check for updates on startup:"), self.auto_update_check)
        
        advanced_layout.addWidget(behavior_group)
        advanced_layout.addStretch()
        
        tabs.addTab(advanced_widget, self.tr("Advanced"))
        
        # === Display Tab ===
        display_widget = QWidget()
        display_layout = QVBoxLayout(display_widget)
        
        display_group = QGroupBox(self.tr("Response Display"))
        display_form = QFormLayout(display_group)
        
        self.json_indent = QComboBox()
        self.json_indent.addItems(["2", "4", "Tab"])
        display_form.addRow(self.tr("JSON Indentation:"), self.json_indent)
        
        self.word_wrap = QComboBox()
        self.word_wrap.addItems([self.tr("Disabled"), self.tr("Enabled")])
        display_form.addRow(self.tr("Word Wrap:"), self.word_wrap)
        
        self.font_size = QComboBox()
        self.font_size.addItems(["10", "11", "12", "13", "14", "16", "18"])
        display_form.addRow(self.tr("Font Size:"), self.font_size)
        
        self.theme = QComboBox()
        self.theme.addItems([self.tr("Light"), self.tr("Dark"), self.tr("System")])
        display_form.addRow(self.tr("Theme:"), self.theme)
        
        display_layout.addWidget(display_group)
        display_layout.addStretch()
        
        tabs.addTab(display_widget, self.tr("Display"))
        
        layout.addWidget(tabs)
        
        # Buttons
        buttons = QDialogButtonBox(
            QDialogButtonBox.StandardButton.Save | 
            QDialogButtonBox.StandardButton.Cancel |
            QDialogButtonBox.StandardButton.RestoreDefaults
        )
        buttons.accepted.connect(self.accept)
        buttons.rejected.connect(self.reject)
        buttons.button(QDialogButtonBox.StandardButton.RestoreDefaults).clicked.connect(
            self._restore_defaults
        )
        layout.addWidget(buttons)
        
        self._load_settings()
        self._on_proxy_changed()
    
    def _on_proxy_changed(self):
        """Enable/disable proxy fields based on mode."""
        manual = self.proxy_enabled.currentIndex() == 2
        self.proxy_host.setEnabled(manual)
        self.proxy_port.setEnabled(manual)
        self.proxy_username.setEnabled(manual)
        self.proxy_password.setEnabled(manual)
    
    def _restore_defaults(self):
        """Restore default settings."""
        reply = QMessageBox.question(
            self,
            self.tr("Restore Defaults"),
            self.tr("This will reset all advanced settings to defaults. Continue?"),
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No
        )
        if reply == QMessageBox.StandardButton.Yes:
            self.timeout_spin.setCurrentText("30")
            self.verify_ssl.setCurrentIndex(0)
            self.proxy_enabled.setCurrentIndex(0)
            self.proxy_host.clear()
            self.proxy_port.clear()
            self.proxy_username.clear()
            self.proxy_password.clear()
            self.auto_auth.setCurrentIndex(0)
            self.save_history.setCurrentIndex(1)
            self.history_limit.setCurrentText("100")
            self.default_api.setCurrentIndex(0)
            self.json_indent.setCurrentText("2")
            self.word_wrap.setCurrentIndex(0)
            self.font_size.setCurrentText("11")
            self.theme.setCurrentIndex(2)
    
    def _load_settings(self):
        settings = QSettings("Zscaler", "APIClient")
        
        # Credentials
        self.zia_cloud.setText(settings.value("zia/cloud", ""))
        self.zia_api_key.setText(settings.value("zia/api_key", ""))
        self.zia_username.setText(settings.value("zia/username", ""))
        self.zia_password.setText(settings.value("zia/password", ""))
        self.zpa_cloud.setText(settings.value("zpa/cloud", ""))
        self.zpa_client_id.setText(settings.value("zpa/client_id", ""))
        self.zpa_client_secret.setText(settings.value("zpa/client_secret", ""))
        self.zpa_customer_id.setText(settings.value("zpa/customer_id", ""))
        
        # ZDX
        self.zdx_cloud.setText(settings.value("zdx/cloud", ""))
        self.zdx_key_id.setText(settings.value("zdx/key_id", ""))
        self.zdx_key_secret.setText(settings.value("zdx/key_secret", ""))
        
        # ZCC
        self.zcc_cloud.setText(settings.value("zcc/cloud", ""))
        self.zcc_client_id.setText(settings.value("zcc/client_id", ""))
        self.zcc_client_secret.setText(settings.value("zcc/client_secret", ""))
        
        # ZIdentity
        self.zidentity_domain.setText(settings.value("zidentity/domain", ""))
        self.zidentity_client_id.setText(settings.value("zidentity/client_id", ""))
        self.zidentity_client_secret.setText(settings.value("zidentity/client_secret", ""))
        
        # ZTW
        self.ztw_cloud.setText(settings.value("ztw/cloud", ""))
        self.ztw_client_id.setText(settings.value("ztw/client_id", ""))
        self.ztw_client_secret.setText(settings.value("ztw/client_secret", ""))
        
        # ZWA
        self.zwa_cloud.setText(settings.value("zwa/cloud", ""))
        self.zwa_client_id.setText(settings.value("zwa/client_id", ""))
        self.zwa_client_secret.setText(settings.value("zwa/client_secret", ""))
        
        # EASM
        self.easm_cloud.setText(settings.value("easm/cloud", ""))
        self.easm_client_id.setText(settings.value("easm/client_id", ""))
        self.easm_client_secret.setText(settings.value("easm/client_secret", ""))
        
        # Advanced
        self.timeout_spin.setCurrentText(settings.value("advanced/timeout", "30"))
        self.verify_ssl.setCurrentIndex(0 if settings.value("advanced/verify_ssl", "true") == "true" else 1)
        self.proxy_enabled.setCurrentIndex(int(settings.value("advanced/proxy_mode", "0")))
        self.proxy_host.setText(settings.value("advanced/proxy_host", ""))
        self.proxy_port.setText(settings.value("advanced/proxy_port", ""))
        self.proxy_username.setText(settings.value("advanced/proxy_username", ""))
        self.proxy_password.setText(settings.value("advanced/proxy_password", ""))
        self.auto_auth.setCurrentIndex(1 if settings.value("advanced/auto_auth", "false") == "true" else 0)
        self.save_history.setCurrentIndex(1 if settings.value("advanced/save_history", "true") == "true" else 0)
        self.history_limit.setCurrentText(settings.value("advanced/history_limit", "100"))
        self.default_api.setCurrentText(settings.value("advanced/default_api", "ZIA"))
        self.auto_update_check.setCurrentIndex(1 if settings.value("advanced/auto_update_check", "true") == "true" else 0)
        
        # Display
        self.json_indent.setCurrentText(settings.value("display/json_indent", "2"))
        self.word_wrap.setCurrentIndex(1 if settings.value("display/word_wrap", "false") == "true" else 0)
        self.font_size.setCurrentText(settings.value("display/font_size", "11"))
        self.theme.setCurrentIndex(int(settings.value("display/theme", "2")))
    
    def accept(self):
        settings = QSettings("Zscaler", "APIClient")
        
        # Credentials
        settings.setValue("zia/cloud", self.zia_cloud.text())
        settings.setValue("zia/api_key", self.zia_api_key.text())
        settings.setValue("zia/username", self.zia_username.text())
        settings.setValue("zia/password", self.zia_password.text())
        settings.setValue("zpa/cloud", self.zpa_cloud.text())
        settings.setValue("zpa/client_id", self.zpa_client_id.text())
        settings.setValue("zpa/client_secret", self.zpa_client_secret.text())
        settings.setValue("zpa/customer_id", self.zpa_customer_id.text())
        
        # ZDX
        settings.setValue("zdx/cloud", self.zdx_cloud.text())
        settings.setValue("zdx/key_id", self.zdx_key_id.text())
        settings.setValue("zdx/key_secret", self.zdx_key_secret.text())
        
        # ZCC
        settings.setValue("zcc/cloud", self.zcc_cloud.text())
        settings.setValue("zcc/client_id", self.zcc_client_id.text())
        settings.setValue("zcc/client_secret", self.zcc_client_secret.text())
        
        # ZIdentity
        settings.setValue("zidentity/domain", self.zidentity_domain.text())
        settings.setValue("zidentity/client_id", self.zidentity_client_id.text())
        settings.setValue("zidentity/client_secret", self.zidentity_client_secret.text())
        
        # ZTW
        settings.setValue("ztw/cloud", self.ztw_cloud.text())
        settings.setValue("ztw/client_id", self.ztw_client_id.text())
        settings.setValue("ztw/client_secret", self.ztw_client_secret.text())
        
        # ZWA
        settings.setValue("zwa/cloud", self.zwa_cloud.text())
        settings.setValue("zwa/client_id", self.zwa_client_id.text())
        settings.setValue("zwa/client_secret", self.zwa_client_secret.text())
        
        # EASM
        settings.setValue("easm/cloud", self.easm_cloud.text())
        settings.setValue("easm/client_id", self.easm_client_id.text())
        settings.setValue("easm/client_secret", self.easm_client_secret.text())
        
        # Advanced
        settings.setValue("advanced/timeout", self.timeout_spin.currentText())
        settings.setValue("advanced/verify_ssl", "true" if self.verify_ssl.currentIndex() == 0 else "false")
        settings.setValue("advanced/proxy_mode", str(self.proxy_enabled.currentIndex()))
        settings.setValue("advanced/proxy_host", self.proxy_host.text())
        settings.setValue("advanced/proxy_port", self.proxy_port.text())
        settings.setValue("advanced/proxy_username", self.proxy_username.text())
        settings.setValue("advanced/proxy_password", self.proxy_password.text())
        settings.setValue("advanced/auto_auth", "true" if self.auto_auth.currentIndex() == 1 else "false")
        settings.setValue("advanced/save_history", "true" if self.save_history.currentIndex() == 1 else "false")
        settings.setValue("advanced/history_limit", self.history_limit.currentText())
        settings.setValue("advanced/default_api", self.default_api.currentText())
        settings.setValue("advanced/auto_update_check", "true" if self.auto_update_check.currentIndex() == 1 else "false")
        
        # Display
        settings.setValue("display/json_indent", self.json_indent.currentText())
        settings.setValue("display/word_wrap", "true" if self.word_wrap.currentIndex() == 1 else "false")
        settings.setValue("display/font_size", self.font_size.currentText())
        settings.setValue("display/theme", str(self.theme.currentIndex()))
        
        super().accept()


class BatchDialog(QDialog):
    """Dialog for batch operations."""
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle(self.tr("Batch Operations"))
        self.setMinimumSize(700, 500)
        
        layout = QVBoxLayout(self)
        
        # Instructions
        instructions = QLabel(self.tr(
            "Import a CSV file to perform batch operations. "
            "The CSV should have columns matching the API parameters."
        ))
        instructions.setWordWrap(True)
        layout.addWidget(instructions)
        
        # File selection
        file_layout = QHBoxLayout()
        self.file_path = QLineEdit()
        self.file_path.setPlaceholderText(self.tr("Select CSV file..."))
        file_layout.addWidget(self.file_path)
        
        browse_btn = QPushButton(self.tr("Browse..."))
        browse_btn.clicked.connect(self._browse_file)
        file_layout.addWidget(browse_btn)
        layout.addLayout(file_layout)
        
        # Preview table
        self.preview_table = QTableWidget()
        self.preview_table.setMinimumHeight(200)
        layout.addWidget(self.preview_table)
        
        # Operation selection
        op_layout = QHBoxLayout()
        op_layout.addWidget(QLabel(self.tr("Operation:")))
        self.operation_combo = QComboBox()
        self.operation_combo.addItems([
            self.tr("Create Users (ZIA)"),
            self.tr("Delete Users (ZIA)"),
            self.tr("Create Locations (ZIA)"),
            self.tr("URL Lookup (ZIA)"),
            self.tr("Create App Segments (ZPA)"),
        ])
        op_layout.addWidget(self.operation_combo)
        op_layout.addStretch()
        layout.addLayout(op_layout)
        
        # Progress
        self.progress_bar = QProgressBar()
        self.progress_bar.setVisible(False)
        layout.addWidget(self.progress_bar)
        
        # Buttons
        buttons = QDialogButtonBox(
            QDialogButtonBox.StandardButton.Ok | QDialogButtonBox.StandardButton.Cancel
        )
        buttons.accepted.connect(self.accept)
        buttons.rejected.connect(self.reject)
        layout.addWidget(buttons)
        
        self.csv_data = []
    
    def _browse_file(self):
        file_path, _ = QFileDialog.getOpenFileName(
            self, self.tr("Select CSV File"), "", "CSV Files (*.csv);;All Files (*)"
        )
        if file_path:
            self.file_path.setText(file_path)
            self._load_csv(file_path)
    
    def _load_csv(self, file_path: str):
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                reader = csv.DictReader(f)
                self.csv_data = list(reader)
            
            if not self.csv_data:
                return
            
            # Update table
            headers = list(self.csv_data[0].keys())
            self.preview_table.setColumnCount(len(headers))
            self.preview_table.setHorizontalHeaderLabels(headers)
            self.preview_table.setRowCount(min(10, len(self.csv_data)))
            
            for row_idx, row in enumerate(self.csv_data[:10]):
                for col_idx, header in enumerate(headers):
                    item = QTableWidgetItem(str(row.get(header, "")))
                    self.preview_table.setItem(row_idx, col_idx, item)
            
            self.preview_table.resizeColumnsToContents()
            
        except Exception as e:
            QMessageBox.critical(self, self.tr("Error"), str(e))


class HistoryDialog(QDialog):
    """Dialog to view and select from request history."""
    
    request_selected = pyqtSignal(dict)
    
    def __init__(self, history: List[Dict], parent=None):
        super().__init__(parent)
        self.setWindowTitle(self.tr("Request History"))
        self.setMinimumSize(800, 500)
        self.history = history
        
        layout = QVBoxLayout(self)
        
        # Search
        search_layout = QHBoxLayout()
        search_layout.addWidget(QLabel(self.tr("Search:")))
        self.search_input = QLineEdit()
        self.search_input.setPlaceholderText(self.tr("Filter by URL or method..."))
        self.search_input.textChanged.connect(self._filter_history)
        search_layout.addWidget(self.search_input)
        
        clear_btn = QPushButton(self.tr("Clear History"))
        clear_btn.clicked.connect(self._clear_history)
        search_layout.addWidget(clear_btn)
        layout.addLayout(search_layout)
        
        # History table
        self.history_table = QTableWidget()
        self.history_table.setColumnCount(5)
        self.history_table.setHorizontalHeaderLabels([
            self.tr("Time"), self.tr("Method"), self.tr("URL"), 
            self.tr("Status"), self.tr("Duration")
        ])
        self.history_table.horizontalHeader().setStretchLastSection(True)
        self.history_table.setSelectionBehavior(QTableWidget.SelectionBehavior.SelectRows)
        self.history_table.setSelectionMode(QTableWidget.SelectionMode.SingleSelection)
        self.history_table.doubleClicked.connect(self._on_double_click)
        layout.addWidget(self.history_table)
        
        # Buttons
        btn_layout = QHBoxLayout()
        btn_layout.addStretch()
        
        load_btn = QPushButton(self.tr("Load Request"))
        load_btn.clicked.connect(self._load_selected)
        btn_layout.addWidget(load_btn)
        
        close_btn = QPushButton(self.tr("Close"))
        close_btn.clicked.connect(self.reject)
        btn_layout.addWidget(close_btn)
        layout.addLayout(btn_layout)
        
        self._populate_table()
    
    def _populate_table(self, filter_text: str = ""):
        self.history_table.setRowCount(0)
        filter_lower = filter_text.lower()
        
        for entry in reversed(self.history):  # Most recent first
            if filter_lower and filter_lower not in entry.get("url", "").lower() \
               and filter_lower not in entry.get("method", "").lower():
                continue
            
            row = self.history_table.rowCount()
            self.history_table.insertRow(row)
            
            self.history_table.setItem(row, 0, QTableWidgetItem(entry.get("timestamp", "")))
            self.history_table.setItem(row, 1, QTableWidgetItem(entry.get("method", "")))
            self.history_table.setItem(row, 2, QTableWidgetItem(entry.get("url", "")))
            
            status = entry.get("status", "")
            status_item = QTableWidgetItem(str(status) if status else "-")
            if status and 200 <= status < 300:
                status_item.setForeground(QColor("#22863a"))
            elif status and status >= 400:
                status_item.setForeground(QColor("#d73a49"))
            self.history_table.setItem(row, 3, status_item)
            
            duration = entry.get("duration_ms", "")
            self.history_table.setItem(row, 4, QTableWidgetItem(f"{duration}ms" if duration else "-"))
            
            # Store full entry data
            self.history_table.item(row, 0).setData(Qt.ItemDataRole.UserRole, entry)
        
        self.history_table.resizeColumnsToContents()
    
    def _filter_history(self, text: str):
        self._populate_table(text)
    
    def _clear_history(self):
        reply = QMessageBox.question(
            self,
            self.tr("Clear History"),
            self.tr("Are you sure you want to clear all request history?"),
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No
        )
        if reply == QMessageBox.StandardButton.Yes:
            self.history.clear()
            self._populate_table()
    
    def _on_double_click(self, index):
        self._load_selected()
    
    def _load_selected(self):
        row = self.history_table.currentRow()
        if row >= 0:
            item = self.history_table.item(row, 0)
            if item:
                entry = item.data(Qt.ItemDataRole.UserRole)
                if entry:
                    self.request_selected.emit(entry)
                    self.accept()


class MainWindow(QMainWindow):
    """Main application window."""
    
    def __init__(self):
        super().__init__()
        self.setWindowTitle(f"Zscaler API Client v{__version__}")
        self.setMinimumSize(1200, 800)
        
        self.zia_session = None
        self.zpa_token = None
        self.request_history = []
        
        self._setup_ui()
        self._setup_menu()
        self._load_settings()
        self._load_history()
    
    def _setup_ui(self):
        central = QWidget()
        self.setCentralWidget(central)
        layout = QHBoxLayout(central)
        
        # Left panel - API Explorer
        left_panel = QWidget()
        left_layout = QVBoxLayout(left_panel)
        left_layout.setContentsMargins(0, 0, 0, 0)
        
        # API type selector
        api_selector = QHBoxLayout()
        api_selector.addWidget(QLabel(self.tr("API:")))
        self.api_type = QComboBox()
        self.api_type.addItems(["ZIA", "ZPA", "ZDX", "ZCC", "ZIdentity", "ZTW", "ZWA", "EASM"])
        self.api_type.currentTextChanged.connect(self._update_endpoint_tree)
        api_selector.addWidget(self.api_type)
        api_selector.addStretch()
        left_layout.addLayout(api_selector)
        
        # Endpoint tree
        self.endpoint_tree = QTreeWidget()
        self.endpoint_tree.setHeaderLabel(self.tr("Endpoints"))
        self.endpoint_tree.itemClicked.connect(self._on_endpoint_selected)
        left_layout.addWidget(self.endpoint_tree)
        
        # Right panel - Request/Response
        right_panel = QWidget()
        right_layout = QVBoxLayout(right_panel)
        right_layout.setContentsMargins(0, 0, 0, 0)
        
        # Request section
        request_group = QGroupBox(self.tr("Request"))
        request_layout = QVBoxLayout(request_group)
        
        # Method and URL
        url_layout = QHBoxLayout()
        self.method_combo = QComboBox()
        self.method_combo.addItems(["GET", "POST", "PUT", "DELETE", "PATCH"])
        self.method_combo.setFixedWidth(100)
        url_layout.addWidget(self.method_combo)
        
        self.url_input = QLineEdit()
        self.url_input.setPlaceholderText(self.tr("Enter URL or select endpoint..."))
        url_layout.addWidget(self.url_input)
        
        self.send_btn = QPushButton(self.tr("Send"))
        self.send_btn.clicked.connect(self._send_request)
        url_layout.addWidget(self.send_btn)
        
        request_layout.addLayout(url_layout)
        
        # Request tabs (Params, Headers, Body)
        self.request_tabs = QTabWidget()
        
        # Params tab
        params_widget = QWidget()
        params_layout = QVBoxLayout(params_widget)
        self.params_table = QTableWidget(5, 2)
        self.params_table.setHorizontalHeaderLabels([self.tr("Key"), self.tr("Value")])
        self.params_table.horizontalHeader().setStretchLastSection(True)
        params_layout.addWidget(self.params_table)
        self.request_tabs.addTab(params_widget, self.tr("Params"))
        
        # Headers tab
        headers_widget = QWidget()
        headers_layout = QVBoxLayout(headers_widget)
        self.headers_table = QTableWidget(5, 2)
        self.headers_table.setHorizontalHeaderLabels([self.tr("Key"), self.tr("Value")])
        self.headers_table.horizontalHeader().setStretchLastSection(True)
        headers_layout.addWidget(self.headers_table)
        self.request_tabs.addTab(headers_widget, self.tr("Headers"))
        
        # Body tab
        body_widget = QWidget()
        body_layout = QVBoxLayout(body_widget)
        self.body_input = QPlainTextEdit()
        self.body_input.setPlaceholderText(self.tr("Request body (JSON)..."))
        font = QFont("Menlo, Monaco, Consolas, monospace", 11)
        self.body_input.setFont(font)
        body_layout.addWidget(self.body_input)
        self.request_tabs.addTab(body_widget, self.tr("Body"))
        
        request_layout.addWidget(self.request_tabs)
        right_layout.addWidget(request_group)
        
        # Response section
        response_group = QGroupBox(self.tr("Response"))
        response_layout = QVBoxLayout(response_group)
        
        # Response info
        self.response_info = QLabel()
        response_layout.addWidget(self.response_info)
        
        # Response body
        self.response_body = QPlainTextEdit()
        self.response_body.setReadOnly(True)
        self.response_body.setFont(font)
        self.json_highlighter = JsonHighlighter(self.response_body.document())
        response_layout.addWidget(self.response_body)
        
        right_layout.addWidget(response_group)
        
        # Help panel
        help_group = QGroupBox(self.tr("Help"))
        help_layout = QVBoxLayout(help_group)
        self.help_text = QLabel()
        self.help_text.setWordWrap(True)
        self.help_text.setAlignment(Qt.AlignmentFlag.AlignTop)
        help_layout.addWidget(self.help_text)
        
        # Splitter
        splitter = QSplitter(Qt.Orientation.Horizontal)
        splitter.addWidget(left_panel)
        splitter.addWidget(right_panel)
        splitter.addWidget(help_group)
        splitter.setSizes([250, 600, 250])
        
        layout.addWidget(splitter)
        
        # Status bar
        self.status_bar = QStatusBar()
        self.setStatusBar(self.status_bar)
        self.status_bar.showMessage(self.tr("Ready"))
        
        # Initialize endpoint tree
        self._update_endpoint_tree("ZIA")
    
    def _setup_menu(self):
        menubar = self.menuBar()
        
        # File menu
        file_menu = menubar.addMenu(self.tr("&File"))
        
        settings_action = QAction(self.tr("&Settings..."), self)
        settings_action.setShortcut("Ctrl+,")
        settings_action.triggered.connect(self._show_settings)
        file_menu.addAction(settings_action)
        
        batch_action = QAction(self.tr("&Batch Operations..."), self)
        batch_action.setShortcut("Ctrl+B")
        batch_action.triggered.connect(self._show_batch)
        file_menu.addAction(batch_action)
        
        file_menu.addSeparator()
        
        history_action = QAction(self.tr("Request &History..."), self)
        history_action.setShortcut("Ctrl+H")
        history_action.triggered.connect(self._show_history)
        file_menu.addAction(history_action)
        
        file_menu.addSeparator()
        
        quit_action = QAction(self.tr("&Quit"), self)
        quit_action.setShortcut("Ctrl+Q")
        quit_action.triggered.connect(self.close)
        file_menu.addAction(quit_action)
        
        # Edit menu
        edit_menu = menubar.addMenu(self.tr("&Edit"))
        
        copy_curl_action = QAction(self.tr("Copy as c&URL"), self)
        copy_curl_action.setShortcut("Ctrl+Shift+C")
        copy_curl_action.triggered.connect(self._copy_as_curl)
        edit_menu.addAction(copy_curl_action)
        
        copy_response_action = QAction(self.tr("Copy &Response"), self)
        copy_response_action.setShortcut("Ctrl+Shift+R")
        copy_response_action.triggered.connect(self._copy_response)
        edit_menu.addAction(copy_response_action)
        
        edit_menu.addSeparator()
        
        clear_request_action = QAction(self.tr("C&lear Request"), self)
        clear_request_action.triggered.connect(self._clear_request)
        edit_menu.addAction(clear_request_action)
        
        # Request menu
        request_menu = menubar.addMenu(self.tr("&Request"))
        
        send_action = QAction(self.tr("&Send Request"), self)
        send_action.setShortcut("Ctrl+Return")
        send_action.triggered.connect(self._send_request)
        request_menu.addAction(send_action)
        
        request_menu.addSeparator()
        
        auth_zia_action = QAction(self.tr("Authenticate &ZIA"), self)
        auth_zia_action.triggered.connect(self._authenticate_zia)
        request_menu.addAction(auth_zia_action)
        
        auth_zpa_action = QAction(self.tr("Authenticate Z&PA"), self)
        auth_zpa_action.triggered.connect(self._authenticate_zpa)
        request_menu.addAction(auth_zpa_action)
        
        request_menu.addSeparator()
        
        logout_action = QAction(self.tr("&Logout All Sessions"), self)
        logout_action.triggered.connect(self._logout_all)
        request_menu.addAction(logout_action)
        
        # Language menu
        lang_menu = menubar.addMenu(self.tr("&Language"))
        
        languages = [
            ("🇬🇧 English", "en"),
            ("🇸🇪 Svenska", "sv"),
            ("🇩🇪 Deutsch", "de"),
            ("🇫🇷 Français", "fr"),
            ("🇪🇸 Español", "es"),
            ("🇯🇵 日本語", "ja"),
            ("🇨🇳 中文", "zh"),
            ("🇮🇷 فارسی", "fa"),
        ]
        
        for name, code in languages:
            action = QAction(name, self)
            action.setData(code)
            action.triggered.connect(self._change_language)
            lang_menu.addAction(action)
        
        # Help menu
        help_menu = menubar.addMenu(self.tr("&Help"))
        
        welcome_action = QAction(self.tr("&Welcome Guide..."), self)
        welcome_action.triggered.connect(self._show_welcome)
        help_menu.addAction(welcome_action)
        
        about_action = QAction(self.tr("&About..."), self)
        about_action.triggered.connect(self._show_about)
        help_menu.addAction(about_action)
        
        help_menu.addSeparator()
        
        zia_docs_action = QAction(self.tr("ZIA API &Documentation"), self)
        zia_docs_action.triggered.connect(lambda: __import__("webbrowser").open("https://help.zscaler.com/zia/api"))
        help_menu.addAction(zia_docs_action)
        
        zpa_docs_action = QAction(self.tr("ZPA API D&ocumentation"), self)
        zpa_docs_action.triggered.connect(lambda: __import__("webbrowser").open("https://help.zscaler.com/zpa/api-reference"))
        help_menu.addAction(zpa_docs_action)
        
        api_portal_action = QAction(self.tr("Zscaler API &Portal"), self)
        api_portal_action.triggered.connect(lambda: __import__("webbrowser").open("https://automate.zscaler.com/"))
        help_menu.addAction(api_portal_action)
        
        help_menu.addSeparator()
        
        check_updates_action = QAction(self.tr("Check for &Updates..."), self)
        check_updates_action.triggered.connect(self._check_for_updates)
        help_menu.addAction(check_updates_action)
    
    def _load_settings(self):
        settings = QSettings("Zscaler", "APIClient")
        geometry = settings.value("geometry")
        if geometry:
            self.restoreGeometry(geometry)
    
    def _save_settings(self):
        settings = QSettings("Zscaler", "APIClient")
        settings.setValue("geometry", self.saveGeometry())
    
    def closeEvent(self, event):
        self._save_settings()
        event.accept()
    
    def _update_endpoint_tree(self, api_type: str):
        self.endpoint_tree.clear()
        
        # Select endpoints based on API type
        endpoint_map = {
            "ZIA": ZIA_ENDPOINTS,
            "ZPA": ZPA_ENDPOINTS,
            "ZDX": ZDX_ENDPOINTS,
            "ZCC": ZCC_ENDPOINTS,
            "ZIdentity": ZIDENTITY_ENDPOINTS,
            "ZTW": ZTW_ENDPOINTS,
            "ZWA": ZWA_ENDPOINTS,
            "EASM": EASM_ENDPOINTS,
        }
        endpoints = endpoint_map.get(api_type, ZIA_ENDPOINTS)
        
        for category, items in endpoints.items():
            category_item = QTreeWidgetItem([category])
            category_item.setExpanded(True)
            
            for name, details in items.items():
                endpoint_item = QTreeWidgetItem([f"{details['method']} {name}"])
                endpoint_item.setData(0, Qt.ItemDataRole.UserRole, details)
                category_item.addChild(endpoint_item)
            
            self.endpoint_tree.addTopLevelItem(category_item)
        
        # Update help panel with API documentation links
        docs = API_DOCS.get(api_type, {})
        if docs:
            self.help_text.setText(
                f"<h3>{api_type} API</h3>"
                f"<p><a href='{docs.get('getting_started', '')}'>Getting Started</a></p>"
                f"<p><a href='{docs.get('authentication', '')}'>Authentication</a></p>"
                f"<p><a href='{docs.get('base', '')}'>API Reference</a></p>"
                f"<p><a href='{docs.get('rate_limits', '')}'>Rate Limits</a></p>"
            )
            self.help_text.setOpenExternalLinks(True)
    
    def _on_endpoint_selected(self, item: QTreeWidgetItem, column: int):
        details = item.data(0, Qt.ItemDataRole.UserRole)
        if not details:
            return
        
        # Update request
        self.method_combo.setCurrentText(details["method"])
        
        # Build URL
        settings = QSettings("Zscaler", "APIClient")
        api_type = self.api_type.currentText()
        path = details["path"]
        
        if api_type == "ZIA":
            cloud = settings.value("zia/cloud", "zsapi.zscaler.net")
            base_url = f"https://{cloud}"
        elif api_type == "ZPA":
            cloud = settings.value("zpa/cloud", "config.private.zscaler.com")
            base_url = f"https://{cloud}"
            # Replace customer ID placeholder
            customer_id = settings.value("zpa/customer_id", "")
            path = path.replace("{customerId}", customer_id)
        elif api_type == "ZDX":
            cloud = settings.value("zdx/cloud", "api.zdxcloud.net")
            base_url = f"https://{cloud}"
        elif api_type == "ZCC":
            cloud = settings.value("zcc/cloud", "api.zscaler.com")
            base_url = f"https://{cloud}"
        else:
            base_url = ""
        
        self.url_input.setText(base_url + path)
        
        # Update body if present
        if "body" in details:
            self.body_input.setPlainText(json.dumps(details["body"], indent=2))
            self.request_tabs.setCurrentIndex(2)  # Body tab
        else:
            self.body_input.clear()
        
        # Update params
        self.params_table.clearContents()
        if "params" in details:
            for row, (key, value) in enumerate(details["params"].items()):
                if row < self.params_table.rowCount():
                    self.params_table.setItem(row, 0, QTableWidgetItem(key))
                    self.params_table.setItem(row, 1, QTableWidgetItem(value))
        
        # Update help with documentation link
        doc_url = details.get("doc_url", "")
        doc_link = f"<br><br><a href='{doc_url}'>📖 View Documentation</a>" if doc_url else ""
        self.help_text.setText(f"<b>{item.text(0)}</b><br><br>{details['description']}{doc_link}")
        self.help_text.setOpenExternalLinks(True)
    
    def _send_request(self):
        url = self.url_input.text()
        method = self.method_combo.currentText()
        
        if not url:
            QMessageBox.warning(self, self.tr("Warning"), self.tr("Please enter a URL"))
            return
        
        # Build headers
        headers = {}
        for row in range(self.headers_table.rowCount()):
            key_item = self.headers_table.item(row, 0)
            value_item = self.headers_table.item(row, 1)
            if key_item and value_item and key_item.text():
                headers[key_item.text()] = value_item.text()
        
        # Add session/token headers
        api_type = self.api_type.currentText()
        if api_type == "ZIA" and self.zia_session:
            headers["Cookie"] = f"JSESSIONID={self.zia_session}"
        elif api_type == "ZPA" and self.zpa_token:
            headers["Authorization"] = f"Bearer {self.zpa_token}"
        
        # Build params
        params = {}
        for row in range(self.params_table.rowCount()):
            key_item = self.params_table.item(row, 0)
            value_item = self.params_table.item(row, 1)
            if key_item and value_item and key_item.text() and value_item.text():
                params[key_item.text()] = value_item.text()
        
        if params:
            url += "?" + urllib.parse.urlencode(params)
        
        # Get body
        body = None
        body_text = self.body_input.toPlainText().strip()
        if body_text and method in ["POST", "PUT", "PATCH"]:
            try:
                body = json.loads(body_text)
            except json.JSONDecodeError as e:
                QMessageBox.warning(self, self.tr("Error"), f"Invalid JSON: {e}")
                return
        
        # Send request
        self.status_bar.showMessage(self.tr("Sending request..."))
        self.send_btn.setEnabled(False)
        
        request = {
            "url": url,
            "method": method,
            "headers": headers,
            "body": body,
        }
        
        # Store request info for history
        self._pending_request = {
            "method": method,
            "url": url,
            "headers": headers,
            "body": body,
            "start_time": time.time(),
        }
        
        self.worker = ApiWorker([request])
        self.worker.finished.connect(self._on_request_finished)
        self.worker.start()
    
    def _on_request_finished(self, result: Dict):
        self.send_btn.setEnabled(True)
        
        # Calculate duration
        duration_ms = None
        if hasattr(self, "_pending_request") and self._pending_request:
            duration_ms = int((time.time() - self._pending_request["start_time"]) * 1000)
        
        if result["results"]:
            res = result["results"][0]
            status = 200 if res["success"] else 0
            
            if res["success"]:
                self.response_info.setText(
                    f"<span style='color: green;'>✓ {self.tr('Success')} ({duration_ms}ms)</span>"
                )
                
                # Get indent setting
                settings = QSettings("Zscaler", "APIClient")
                indent = settings.value("display/json_indent", "2")
                indent_val = None if indent == "Tab" else int(indent)
                
                self.response_body.setPlainText(json.dumps(res["data"], indent=indent_val))
                self.status_bar.showMessage(self.tr("Request successful") + f" ({duration_ms}ms)")
                
                # Check for session token in response (ZIA)
                if isinstance(res["data"], dict):
                    if "authCookie" in res["data"]:
                        self.zia_session = res["data"]["authCookie"]
                        self.status_bar.showMessage(self.tr("ZIA authenticated successfully"))
                    elif "access_token" in res["data"]:
                        self.zpa_token = res["data"]["access_token"]
                        self.status_bar.showMessage(self.tr("ZPA authenticated successfully"))
            else:
                self.response_info.setText(
                    f"<span style='color: red;'>✗ {self.tr('Error')} ({duration_ms}ms)</span>"
                )
                self.response_body.setPlainText(res["error"])
                self.status_bar.showMessage(self.tr("Request failed"))
            
            # Save to history
            if hasattr(self, "_pending_request") and self._pending_request:
                self._add_to_history(
                    self._pending_request["method"],
                    self._pending_request["url"],
                    self._pending_request["headers"],
                    self._pending_request["body"],
                    status=status,
                    duration_ms=duration_ms
                )
                self._pending_request = None
    
    def _show_settings(self):
        dialog = SettingsDialog(self)
        if dialog.exec():
            self._apply_settings()
    
    def _apply_settings(self):
        """Apply settings that can be changed without restart."""
        settings = QSettings("Zscaler", "APIClient")
        
        # Apply font size
        font_size = int(settings.value("display/font_size", "11"))
        font = QFont("Menlo, Monaco, Consolas, monospace", font_size)
        self.body_input.setFont(font)
        self.response_body.setFont(font)
        
        # Apply word wrap
        word_wrap = settings.value("display/word_wrap", "false") == "true"
        if word_wrap:
            self.response_body.setLineWrapMode(QPlainTextEdit.LineWrapMode.WidgetWidth)
        else:
            self.response_body.setLineWrapMode(QPlainTextEdit.LineWrapMode.NoWrap)
        
        # Apply theme
        theme = int(settings.value("display/theme", "2"))
        apply_theme(QApplication.instance(), theme)
    
    def _show_batch(self):
        dialog = BatchDialog(self)
        if dialog.exec() and dialog.csv_data:
            self._run_batch(dialog.csv_data, dialog.operation_combo.currentText())
    
    def _run_batch(self, data: List[Dict], operation: str):
        # TODO: Implement batch operations
        QMessageBox.information(
            self, 
            self.tr("Batch"), 
            self.tr("Processing {count} items...").format(count=len(data))
        )
    
    def _show_history(self):
        dialog = HistoryDialog(self.request_history, self)
        dialog.request_selected.connect(self._load_from_history)
        dialog.exec()
        self._save_history()
    
    def _load_from_history(self, entry: Dict):
        """Load a request from history."""
        self.method_combo.setCurrentText(entry.get("method", "GET"))
        self.url_input.setText(entry.get("url", ""))
        
        if entry.get("body"):
            self.body_input.setPlainText(json.dumps(entry["body"], indent=2))
            self.request_tabs.setCurrentIndex(2)
        
        # Load headers
        self.headers_table.clearContents()
        for row, (key, value) in enumerate(entry.get("headers", {}).items()):
            if row < self.headers_table.rowCount():
                self.headers_table.setItem(row, 0, QTableWidgetItem(key))
                self.headers_table.setItem(row, 1, QTableWidgetItem(value))
        
        self.status_bar.showMessage(self.tr("Request loaded from history"))
    
    def _load_history(self):
        """Load request history from file."""
        history_file = Path.home() / ".zscaler-api-client" / "history.json"
        if history_file.exists():
            try:
                with open(history_file, "r", encoding="utf-8") as f:
                    self.request_history = json.load(f)
            except Exception:
                self.request_history = []
    
    def _save_history(self):
        """Save request history to file."""
        settings = QSettings("Zscaler", "APIClient")
        if settings.value("advanced/save_history", "true") != "true":
            return
        
        history_dir = Path.home() / ".zscaler-api-client"
        history_dir.mkdir(exist_ok=True)
        history_file = history_dir / "history.json"
        
        # Limit history size
        limit = int(settings.value("advanced/history_limit", "100"))
        self.request_history = self.request_history[-limit:]
        
        try:
            with open(history_file, "w", encoding="utf-8") as f:
                json.dump(self.request_history, f, indent=2)
        except Exception:
            pass
    
    def _add_to_history(self, method: str, url: str, headers: Dict, body: Any, 
                        status: int = None, duration_ms: int = None):
        """Add a request to history."""
        from datetime import datetime
        
        entry = {
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "method": method,
            "url": url,
            "headers": {k: v for k, v in headers.items() if k.lower() not in ("cookie", "authorization")},
            "body": body,
            "status": status,
            "duration_ms": duration_ms,
        }
        self.request_history.append(entry)
        self._save_history()
    
    def _copy_as_curl(self):
        """Copy current request as cURL command."""
        url = self.url_input.text()
        method = self.method_combo.currentText()
        
        if not url:
            QMessageBox.warning(self, self.tr("Warning"), self.tr("No URL to copy"))
            return
        
        # Build cURL command
        parts = ["curl", "-X", method]
        
        # Add headers
        for row in range(self.headers_table.rowCount()):
            key_item = self.headers_table.item(row, 0)
            value_item = self.headers_table.item(row, 1)
            if key_item and value_item and key_item.text():
                parts.extend(["-H", f"'{key_item.text()}: {value_item.text()}'"])
        
        # Add body
        body_text = self.body_input.toPlainText().strip()
        if body_text and method in ["POST", "PUT", "PATCH"]:
            parts.extend(["-H", "'Content-Type: application/json'"])
            # Escape single quotes in body
            escaped_body = body_text.replace("'", "'\\''")
            parts.extend(["-d", f"'{escaped_body}'"])
        
        parts.append(f"'{url}'")
        
        curl_cmd = " \\\n  ".join(parts)
        
        # Copy to clipboard
        QApplication.clipboard().setText(curl_cmd)
        self.status_bar.showMessage(self.tr("cURL command copied to clipboard"))
    
    def _copy_response(self):
        """Copy response body to clipboard."""
        text = self.response_body.toPlainText()
        if text:
            QApplication.clipboard().setText(text)
            self.status_bar.showMessage(self.tr("Response copied to clipboard"))
        else:
            QMessageBox.warning(self, self.tr("Warning"), self.tr("No response to copy"))
    
    def _clear_request(self):
        """Clear all request fields."""
        self.url_input.clear()
        self.body_input.clear()
        self.params_table.clearContents()
        self.headers_table.clearContents()
        self.response_body.clear()
        self.response_info.clear()
        self.help_text.clear()
        self.status_bar.showMessage(self.tr("Request cleared"))
    
    def _authenticate_zia(self):
        """Authenticate to ZIA API."""
        settings = QSettings("Zscaler", "APIClient")
        cloud = settings.value("zia/cloud", "")
        api_key = settings.value("zia/api_key", "")
        username = settings.value("zia/username", "")
        password = settings.value("zia/password", "")
        
        if not all([cloud, api_key, username, password]):
            QMessageBox.warning(
                self, 
                self.tr("Missing Credentials"),
                self.tr("Please configure ZIA credentials in Settings first.")
            )
            return
        
        # Generate obfuscated API key
        import hashlib
        timestamp = str(int(time.time() * 1000))
        obf_key = self._obfuscate_api_key(api_key, timestamp)
        
        # Set up auth request
        self.api_type.setCurrentText("ZIA")
        self.method_combo.setCurrentText("POST")
        self.url_input.setText(f"https://{cloud}/api/v1/authenticatedSession")
        self.body_input.setPlainText(json.dumps({
            "apiKey": obf_key,
            "username": username,
            "password": password,
            "timestamp": timestamp
        }, indent=2))
        self.request_tabs.setCurrentIndex(2)
        
        self.status_bar.showMessage(self.tr("ZIA auth request prepared. Click Send to authenticate."))
    
    def _obfuscate_api_key(self, api_key: str, timestamp: str) -> str:
        """Obfuscate API key for ZIA authentication."""
        high = timestamp[-6:]
        low = str(int(high) >> 1)
        
        obf = ""
        for i, char in enumerate(api_key):
            if i < len(high):
                obf += chr(ord(char) + ord(high[i]))
            elif i < len(low) + len(high):
                obf += chr(ord(char) + ord(low[i - len(high)]))
            else:
                obf += chr(ord(char) + ord(high[i - len(high) - len(low)]))
        
        return obf
    
    def _authenticate_zpa(self):
        """Authenticate to ZPA API."""
        settings = QSettings("Zscaler", "APIClient")
        cloud = settings.value("zpa/cloud", "")
        client_id = settings.value("zpa/client_id", "")
        client_secret = settings.value("zpa/client_secret", "")
        
        if not all([cloud, client_id, client_secret]):
            QMessageBox.warning(
                self, 
                self.tr("Missing Credentials"),
                self.tr("Please configure ZPA credentials in Settings first.")
            )
            return
        
        self.api_type.setCurrentText("ZPA")
        self.method_combo.setCurrentText("POST")
        self.url_input.setText(f"https://{cloud}/signin")
        self.body_input.setPlainText(json.dumps({
            "client_id": client_id,
            "client_secret": client_secret
        }, indent=2))
        self.request_tabs.setCurrentIndex(2)
        
        self.status_bar.showMessage(self.tr("ZPA auth request prepared. Click Send to authenticate."))
    
    def _logout_all(self):
        """Clear all authentication sessions."""
        self.zia_session = None
        self.zpa_token = None
        self.status_bar.showMessage(self.tr("All sessions cleared"))
    
    def _change_language(self):
        action = self.sender()
        lang_code = action.data()
        
        settings = QSettings("Zscaler", "APIClient")
        settings.setValue("language", lang_code)
        
        reply = QMessageBox.question(
            self,
            self.tr("Language Changed"),
            self.tr("The application needs to restart to apply the new language.\n\nRestart now?"),
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No,
            QMessageBox.StandardButton.Yes
        )
        
        if reply == QMessageBox.StandardButton.Yes:
            self._restart_application()
    
    def _restart_application(self):
        """Restart the application."""
        QApplication.closeAllWindows()
        
        if getattr(sys, 'frozen', False):
            # Running as bundled app (PyInstaller)
            # On macOS, we need to launch the .app bundle, not the binary
            executable = sys.executable
            bundle_path = os.path.dirname(os.path.dirname(os.path.dirname(executable)))
            if bundle_path.endswith('.app'):
                # Use 'open' command to launch the .app properly
                os.system(f'open "{bundle_path}" &')
            else:
                os.execv(executable, [executable])
        else:
            # Running as script
            executable = sys.executable
            script = os.path.abspath(__file__)
            os.execv(executable, [executable, script])
    
    def _check_for_updates(self):
        """Check GitHub for newer releases."""
        self.status_bar.showMessage(self.tr("Checking for updates..."))
        QApplication.processEvents()
        
        try:
            import ssl
            # Create SSL context - try certifi first, fall back to unverified for bundled apps
            try:
                import certifi
                ssl_context = ssl.create_default_context(cafile=certifi.where())
            except ImportError:
                # Bundled app without certifi - use unverified context for GitHub API only
                ssl_context = ssl.create_default_context()
                ssl_context.check_hostname = False
                ssl_context.verify_mode = ssl.CERT_NONE
            
            url = "https://api.github.com/repos/yeager/zscaler-api-client/releases/latest"
            request = urllib.request.Request(url, headers={"User-Agent": "ZscalerAPIClient"})
            
            with urllib.request.urlopen(request, timeout=10, context=ssl_context) as response:
                data = json.loads(response.read().decode("utf-8"))
            
            latest_version = data.get("tag_name", "").lstrip("v")
            current_version = __version__
            
            # Simple version comparison
            def version_tuple(v):
                return tuple(map(int, v.split(".")))
            
            if version_tuple(latest_version) > version_tuple(current_version):
                reply = QMessageBox.information(
                    self,
                    self.tr("Update Available"),
                    self.tr(
                        "<h3>A new version is available!</h3>"
                        "<p><b>Current version:</b> {current}</p>"
                        "<p><b>Latest version:</b> {latest}</p>"
                        "<p>Would you like to open the download page?</p>"
                    ).format(current=current_version, latest=latest_version),
                    QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No
                )
                if reply == QMessageBox.StandardButton.Yes:
                    import webbrowser
                    webbrowser.open(data.get("html_url", "https://github.com/yeager/zscaler-api-client/releases"))
                self.status_bar.showMessage(self.tr("Update available: v{version}").format(version=latest_version))
            else:
                QMessageBox.information(
                    self,
                    self.tr("No Updates"),
                    self.tr(
                        "<p>You are running the latest version.</p>"
                        "<p><b>Version:</b> {version}</p>"
                    ).format(version=current_version)
                )
                self.status_bar.showMessage(self.tr("You are up to date (v{version})").format(version=current_version))
        
        except Exception as e:
            QMessageBox.warning(
                self,
                self.tr("Update Check Failed"),
                self.tr("Could not check for updates:\n{error}").format(error=str(e))
            )
            self.status_bar.showMessage(self.tr("Update check failed"))
    
    def _show_welcome(self):
        dialog = WelcomeDialog(self)
        dialog.exec()
    
    def _show_about(self):
        dialog = AboutDialog(self)
        dialog.exec()


def is_system_dark_mode() -> bool:
    """Check if macOS is in dark mode."""
    if sys.platform == "darwin":
        try:
            import subprocess
            result = subprocess.run(
                ["defaults", "read", "-g", "AppleInterfaceStyle"],
                capture_output=True, text=True
            )
            return result.stdout.strip().lower() == "dark"
        except Exception:
            pass
    return False


def apply_theme(app: QApplication, theme: int):
    """Apply theme: 0=Light, 1=Dark, 2=System."""
    if theme == 2:  # System
        use_dark = is_system_dark_mode()
    else:
        use_dark = (theme == 1)
    
    if use_dark:
        app.setStyleSheet(DARK_STYLE)
    else:
        app.setStyleSheet(LIGHT_STYLE)


def main():
    # Fix for bundled macOS apps (PyInstaller/py2app)
    # Must be done BEFORE QApplication is created
    if getattr(sys, 'frozen', False):
        bundle_dir = os.path.dirname(sys.executable)
        # Set Qt plugin path for bundled app (PyQt6)
        plugin_path = os.path.join(bundle_dir, '..', 'Frameworks', 'PyQt6', 'Qt6', 'plugins')
        if os.path.exists(plugin_path):
            os.environ['QT_PLUGIN_PATH'] = plugin_path
        # Also try alternative locations
        alt_plugin_path = os.path.join(bundle_dir, '..', 'Resources', 'PyQt6', 'Qt6', 'plugins')
        if os.path.exists(alt_plugin_path):
            os.environ['QT_PLUGIN_PATH'] = alt_plugin_path
        # Set library path for Qt
        lib_path = os.path.join(bundle_dir, '..', 'Frameworks')
        if os.path.exists(lib_path):
            os.environ['QT_QPA_PLATFORM_PLUGIN_PATH'] = os.path.join(lib_path, 'PyQt6', 'Qt6', 'plugins', 'platforms')
    
    app = QApplication(sys.argv)
    app.setApplicationName("Zscaler API Client")
    app.setOrganizationName("Zscaler")
    
    # Load settings
    settings = QSettings("Zscaler", "APIClient")
    
    # Show splash screen
    splash_pixmap = create_splash_pixmap()
    splash = QSplashScreen(splash_pixmap)
    splash.show()
    app.processEvents()
    
    # Load translation
    lang = settings.value("language", QLocale.system().name()[:2])
    
    translator = QTranslator()
    translations_dir = Path(__file__).parent / "translations"
    if translator.load(f"zscaler_api_client_{lang}", str(translations_dir)):
        app.installTranslator(translator)
    
    # Apply theme
    theme = int(settings.value("display/theme", "2"))
    apply_theme(app, theme)
    
    # Small delay for splash visibility
    import time
    time.sleep(0.5)
    
    # Create main window
    window = MainWindow()
    
    # Close splash and show window
    splash.finish(window)
    window.show()
    
    # Show welcome dialog on first run or if enabled
    show_welcome = settings.value("welcome/show_on_startup", "true") == "true"
    if show_welcome:
        QTimer.singleShot(100, lambda: WelcomeDialog(window).exec())
    
    # Auto-check for updates on startup
    auto_update = settings.value("advanced/auto_update_check", "true") == "true"
    if auto_update and not show_welcome:
        QTimer.singleShot(2000, window._check_for_updates)
    
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
