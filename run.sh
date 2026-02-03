#!/bin/bash
cd "$(dirname "$0")"

# Create venv if needed
if [ ! -d ".venv" ]; then
    python3 -m venv .venv
    source .venv/bin/activate
    pip install PyQt6
else
    source .venv/bin/activate
fi

python zscaler_api_client.py "$@"
