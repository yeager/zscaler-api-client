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

__version__ = "1.0.0"

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


class SettingsDialog(QDialog):
    """Settings dialog for API credentials."""
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle(self.tr("Settings"))
        self.setMinimumWidth(500)
        
        layout = QVBoxLayout(self)
        
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
        
        layout.addWidget(zia_group)
        
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
        
        layout.addWidget(zpa_group)
        
        # Buttons
        buttons = QDialogButtonBox(
            QDialogButtonBox.StandardButton.Save | QDialogButtonBox.StandardButton.Cancel
        )
        buttons.accepted.connect(self.accept)
        buttons.rejected.connect(self.reject)
        layout.addWidget(buttons)
        
        self._load_settings()
    
    def _load_settings(self):
        settings = QSettings("Zscaler", "APIClient")
        self.zia_cloud.setText(settings.value("zia/cloud", ""))
        self.zia_api_key.setText(settings.value("zia/api_key", ""))
        self.zia_username.setText(settings.value("zia/username", ""))
        self.zia_password.setText(settings.value("zia/password", ""))
        self.zpa_cloud.setText(settings.value("zpa/cloud", ""))
        self.zpa_client_id.setText(settings.value("zpa/client_id", ""))
        self.zpa_client_secret.setText(settings.value("zpa/client_secret", ""))
        self.zpa_customer_id.setText(settings.value("zpa/customer_id", ""))
    
    def accept(self):
        settings = QSettings("Zscaler", "APIClient")
        settings.setValue("zia/cloud", self.zia_cloud.text())
        settings.setValue("zia/api_key", self.zia_api_key.text())
        settings.setValue("zia/username", self.zia_username.text())
        settings.setValue("zia/password", self.zia_password.text())
        settings.setValue("zpa/cloud", self.zpa_cloud.text())
        settings.setValue("zpa/client_id", self.zpa_client_id.text())
        settings.setValue("zpa/client_secret", self.zpa_client_secret.text())
        settings.setValue("zpa/customer_id", self.zpa_customer_id.text())
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


class MainWindow(QMainWindow):
    """Main application window."""
    
    def __init__(self):
        super().__init__()
        self.setWindowTitle(f"Zscaler API Client v{__version__}")
        self.setMinimumSize(1200, 800)
        
        self.zia_session = None
        self.zpa_token = None
        
        self._setup_ui()
        self._setup_menu()
        self._load_settings()
    
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
        settings_action.triggered.connect(self._show_settings)
        file_menu.addAction(settings_action)
        
        batch_action = QAction(self.tr("&Batch Operations..."), self)
        batch_action.triggered.connect(self._show_batch)
        file_menu.addAction(batch_action)
        
        file_menu.addSeparator()
        
        quit_action = QAction(self.tr("&Quit"), self)
        quit_action.triggered.connect(self.close)
        file_menu.addAction(quit_action)
        
        # Language menu
        lang_menu = menubar.addMenu(self.tr("&Language"))
        
        languages = [
            ("English", "en"),
            ("Svenska", "sv"),
            ("Deutsch", "de"),
            ("Français", "fr"),
            ("Español", "es"),
            ("日本語", "ja"),
            ("中文", "zh"),
        ]
        
        for name, code in languages:
            action = QAction(name, self)
            action.setData(code)
            action.triggered.connect(self._change_language)
            lang_menu.addAction(action)
        
        # Help menu
        help_menu = menubar.addMenu(self.tr("&Help"))
        
        about_action = QAction(self.tr("&About"), self)
        about_action.triggered.connect(self._show_about)
        help_menu.addAction(about_action)
        
        docs_action = QAction(self.tr("Zscaler API &Documentation"), self)
        docs_action.triggered.connect(lambda: __import__("webbrowser").open("https://help.zscaler.com/zia/api"))
        help_menu.addAction(docs_action)
    
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
        
        self.worker = ApiWorker([request])
        self.worker.finished.connect(self._on_request_finished)
        self.worker.start()
    
    def _on_request_finished(self, result: Dict):
        self.send_btn.setEnabled(True)
        
        if result["results"]:
            res = result["results"][0]
            
            if res["success"]:
                self.response_info.setText(
                    f"<span style='color: green;'>✓ {self.tr('Success')}</span>"
                )
                self.response_body.setPlainText(json.dumps(res["data"], indent=2))
                self.status_bar.showMessage(self.tr("Request successful"))
            else:
                self.response_info.setText(
                    f"<span style='color: red;'>✗ {self.tr('Error')}</span>"
                )
                self.response_body.setPlainText(res["error"])
                self.status_bar.showMessage(self.tr("Request failed"))
    
    def _show_settings(self):
        dialog = SettingsDialog(self)
        dialog.exec()
    
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
        QMessageBox.about(
            self,
            self.tr("About Zscaler API Client"),
            f"""<h2>Zscaler API Client v{__version__}</h2>
            <p>A Postman-like tool for Zscaler APIs (ZIA, ZPA)</p>
            <p>Copyright © 2026 Daniel Nylander</p>
            <p>License: GPL-3.0-or-later</p>
            <p><a href="https://github.com/yeager/zscaler-api-client">GitHub</a></p>
            """
        )


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
    
    window = MainWindow()
    window.show()
    
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
