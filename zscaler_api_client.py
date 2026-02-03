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

# Try PyQt6 first, then PySide6
try:
    from PyQt6.QtWidgets import (
        QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout,
        QSplitter, QTreeWidget, QTreeWidgetItem, QTextEdit, QLineEdit,
        QComboBox, QPushButton, QLabel, QTabWidget, QTableWidget,
        QTableWidgetItem, QHeaderView, QFileDialog, QMessageBox,
        QGroupBox, QFormLayout, QDialog, QDialogButtonBox, QProgressBar,
        QStatusBar, QMenuBar, QMenu, QToolBar, QPlainTextEdit
    )
    from PyQt6.QtCore import Qt, QThread, pyqtSignal, QSettings, QTranslator, QLocale
    from PyQt6.QtGui import QAction, QFont, QColor, QSyntaxHighlighter, QTextCharFormat
    PYQT_VERSION = 6
except ImportError:
    try:
        from PySide6.QtWidgets import (
            QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout,
            QSplitter, QTreeWidget, QTreeWidgetItem, QTextEdit, QLineEdit,
            QComboBox, QPushButton, QLabel, QTabWidget, QTableWidget,
            QTableWidgetItem, QHeaderView, QFileDialog, QMessageBox,
            QGroupBox, QFormLayout, QDialog, QDialogButtonBox, QProgressBar,
            QStatusBar, QMenuBar, QMenu, QToolBar, QPlainTextEdit
        )
        from PySide6.QtCore import Qt, QThread, Signal as pyqtSignal, QSettings, QTranslator, QLocale
        from PySide6.QtGui import QAction, QFont, QColor, QSyntaxHighlighter, QTextCharFormat
        PYQT_VERSION = "PySide6"
    except ImportError:
        print("Error: PyQt6 or PySide6 required. Install with: pip install PyQt6")
        sys.exit(1)

__version__ = "1.2.0"

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
        self.default_api.addItems(["ZIA", "ZPA"])
        behavior_layout.addRow(self.tr("Default API:"), self.default_api)
        
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
        self.api_type.addItems(["ZIA", "ZPA"])
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
        ]
        
        for name, code in languages:
            action = QAction(name, self)
            action.setData(code)
            action.triggered.connect(self._change_language)
            lang_menu.addAction(action)
        
        # Help menu
        help_menu = menubar.addMenu(self.tr("&Help"))
        
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
        
        endpoints = ZIA_ENDPOINTS if api_type == "ZIA" else ZPA_ENDPOINTS
        
        for category, items in endpoints.items():
            category_item = QTreeWidgetItem([category])
            category_item.setExpanded(True)
            
            for name, details in items.items():
                endpoint_item = QTreeWidgetItem([f"{details['method']} {name}"])
                endpoint_item.setData(0, Qt.ItemDataRole.UserRole, details)
                category_item.addChild(endpoint_item)
            
            self.endpoint_tree.addTopLevelItem(category_item)
    
    def _on_endpoint_selected(self, item: QTreeWidgetItem, column: int):
        details = item.data(0, Qt.ItemDataRole.UserRole)
        if not details:
            return
        
        # Update request
        self.method_combo.setCurrentText(details["method"])
        
        # Build URL
        settings = QSettings("Zscaler", "APIClient")
        api_type = self.api_type.currentText()
        
        if api_type == "ZIA":
            cloud = settings.value("zia/cloud", "zsapi.zscaler.net")
            base_url = f"https://{cloud}"
        else:
            cloud = settings.value("zpa/cloud", "config.private.zscaler.com")
            base_url = f"https://{cloud}"
            # Replace customer ID placeholder
            customer_id = settings.value("zpa/customer_id", "")
            details["path"] = details["path"].replace("{customerId}", customer_id)
        
        self.url_input.setText(base_url + details["path"])
        
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
        
        # Update help
        self.help_text.setText(f"<b>{item.text(0)}</b><br><br>{details['description']}")
    
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
        
        QMessageBox.information(
            self,
            self.tr("Language Changed"),
            self.tr("Please restart the application to apply the new language.")
        )
    
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
    app = QApplication(sys.argv)
    app.setApplicationName("Zscaler API Client")
    app.setOrganizationName("Zscaler")
    
    # Load translation
    settings = QSettings("Zscaler", "APIClient")
    lang = settings.value("language", QLocale.system().name()[:2])
    
    translator = QTranslator()
    translations_dir = Path(__file__).parent / "translations"
    if translator.load(f"zscaler_api_client_{lang}", str(translations_dir)):
        app.installTranslator(translator)
    
    # Apply theme
    theme = int(settings.value("display/theme", "2"))
    apply_theme(app, theme)
    
    window = MainWindow()
    window.show()
    
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
