#!/usr/bin/env python3
"""Generate reviewable machine-translation Qt catalogs for ZS API Client.

The command intentionally requires an explicit contact address for the
translation provider and never stores it in the repository.
"""

from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor
import html
import re
import time
import urllib.parse
import urllib.request
from urllib.error import HTTPError
import xml.etree.ElementTree as ET
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
TRANSLATIONS = ROOT / "translations"
PROVIDER_URL = "https://api.mymemory.translated.net/get"
PROTECTED = re.compile(r"<[^>]+>|&[A-Za-z0-9#]+;|\{[^}]+\}|%\d+|%n")
SWEDISH_REVIEW = {
    "Operation:": "Åtgärd:", "API Error Codes Reference": "Referens för API-felkoder", "Code": "Kod", "Name": "Namn", "Description": "Beskrivning", "Close": "Stäng", "Status": "Status", "Auth": "Autentisering", "Variable": "Variabel", "Path Variables": "Sökvägsvariabler", "Pretty": "Formatera", "Console": "Konsol", "API Explorer": "API-utforskaren", "Product": "Produkt", "Request Builder": "Begärandebyggare", "Missing Path Variables": "Saknade sökvägsvariabler", "Batch": "Batch", "Proxy": "Proxy", "System": "System", "Settings Validation": "Inställningsvalidering", "Save Anyway": "Spara ändå", "Go Back": "Gå tillbaka", "Getting Started Wizard": "Kom igång-guiden", "Back": "Tillbaka", "Open full settings": "Öppna fullständiga inställningar", "Continue": "Fortsätt", "Vanity domain": "Vanity-domän", "Client ID": "Klient-ID", "Client secret": "Klienthemlighet", "Cloud": "Moln", "ZPA customer ID": "ZPA-kund-ID", "Just explore the API catalog": "Utforska bara API-katalogen", "Authenticate immediately after finishing": "Autentisera direkt när du är klar", "Finish": "Slutför", "Language": "Språk", "System default": "Systemstandard", "Application language:": "Programspråk:", "System default follows your operating system language. Restart after saving to apply a change.": "Systemstandard följer operativsystemets språk. Starta om efter sparning för att tillämpa ändringen.", "Basic": "Grundläggande", "Advanced": "Avancerat", "Interface mode:": "Gränssnittsläge:", "Setup mode:": "Installationsläge:", "Export response": "Exportera svar", "Export AI result": "Exportera AI-resultat", "No chart data is available to export.": "Det finns inga diagramdata att exportera.", "Masked cURL command copied to clipboard": "Maskerat cURL-kommando kopierat till urklipp",
    "Common error codes and their meanings for each API.": "Vanliga felkoder och deras betydelse för varje API.", "Toggle pretty-print JSON (Ctrl+P)": "Växla formaterad JSON (Ctrl+P)", "Authenticate with selected API (Ctrl+Shift+A)": "Autentisera med valt API (Ctrl+Shift+A)", "🔍 Filter endpoints...": "🔍 Filtrera slutpunkter...", "Send request (Ctrl+Return)": "Skicka begäran (Ctrl+Retur)", "Copy request as cURL command (Ctrl+Shift+C)": "Kopiera begäran som cURL-kommando (Ctrl+Skift+C)", "Enter values for: {names}": "Ange värden för: {names}", "OneAPI authenticated successfully": "OneAPI har autentiserats", "OneAPI credentials not configured. Please go to Settings.": "OneAPI-autentiseringsuppgifter är inte konfigurerade. Gå till Inställningar.", "{count} operations · {groups} groups": "{count} åtgärder · {groups} grupper", "{count} matching operations": "{count} matchande åtgärder", "{count} operations": "{count} åtgärder", "Step {current} of {total}": "Steg {current} av {total}",
    "<h2>🔴 Zscaler API Error Codes</h2>": "<h2>🔴 Zscaler API-felkoder</h2>", "<p><b>💡 Tips:</b></p><ul><li><b>401/403:</b> Re-authenticate using the Auth button</li><li><b>429:</b> Wait 60 seconds before retrying</li><li><b>500:</b> Check Zscaler status page for outages</li></ul>": "<p><b>💡 Tips:</b></p><ul><li><b>401/403:</b> Autentisera igen med knappen Autentisering</li><li><b>429:</b> Vänta 60 sekunder innan nytt försök</li><li><b>500:</b> Kontrollera Zscalers statussida för driftstörningar</li></ul>",
    "<h1>Welcome to ZS API Client</h1>": "<h1>Välkommen till ZS API Client</h1>", "<h2>Connect your Zscaler tenant</h2>": "<h2>Anslut din Zscaler-tenant</h2>", "Create an API client with the required roles in ZIdentity, then enter its details below.": "Skapa en API-klient med nödvändiga roller i ZIdentity och ange sedan uppgifterna nedan.", "Leave empty for production; use beta or alpha when applicable": "Lämna tomt för produktion; använd beta eller alpha när det är tillämpligt", "Optional; required for many ZPA requests": "Valfritt; krävs för många ZPA-begäranden", "<h2>What would you like to do first?</h2>": "<h2>Vad vill du göra först?</h2>", "Choose a common operation. The wizard will load it into the request builder with required path variables highlighted.": "Välj en vanlig åtgärd. Guiden läser in den i begärandebyggaren med obligatoriska sökvägsvariabler markerade.", "<h2>You are ready to make your first request</h2>": "<h2>Du är redo att göra din första begäran</h2>", "The API Explorer contains the complete bundled catalog. Use the Documentation tab for endpoint details, the Console tab for request activity, and Request History to replay safe, redacted requests.": "API-utforskaren innehåller hela den medföljande katalogen. Använd fliken Dokumentation för information om slutpunkter, Konsol för begärandeaktivitet och Begärandehistorik för att spela upp säkra, maskerade begäranden.",
}

SWEDISH_REVIEW.update({
    "&Operations": "&Åtgärder", "Operations &Center...": "&Åtgärdscenter...", "Environment &Profiles...": "&Miljöprofiler...",
    "Create new profile…": "Skapa ny profil…", "Environment profiles": "Miljöprofiler", "Profile:": "Profil:", "New profile name:": "Nytt profilnamn:", "Environment profile active: ": "Aktiv miljöprofil: ",
    "Operations Center": "Åtgärdscenter", "Refresh dashboard": "Uppdatera instrumentpanel", "Dashboard": "Instrumentpanel", "Previous policy JSON": "Föregående policy-JSON", "Proposed policy JSON": "Föreslagen policy-JSON", "Compare policies": "Jämför policyer", "Policy diff": "Policyjämförelse",
    "Rules JSON: [{\"name\": \"Allow staff\", \"conditions\": {\"group\": \"staff\"}, \"action\": \"allow\"}]": "Regel-JSON: [{\"name\": \"Tillåt personal\", \"conditions\": {\"group\": \"personal\"}, \"action\": \"allow\"}]",
    "Request context JSON: {\"group\": \"staff\"}": "Begärandekontext-JSON: {\"group\": \"personal\"}", "Simulate policy (local only)": "Simulera policy (endast lokalt)", "Simulation": "Simulering",
    "CSV data, e.g. name,email\nAda,ada@example.com": "CSV-data, t.ex. namn,e-post\nAda,ada@example.com", "Required columns (comma separated)": "Obligatoriska kolumner (kommaseparerade)", "Validate bulk import": "Validera massimport", "Bulk operations": "Massåtgärder", "Refresh audit trail": "Uppdatera revisionsspår", "Schedule report": "Schemalägg rapport", "Create redacted support bundle": "Skapa maskerat supportpaket", "Audit & automation": "Revision och automatisering",
    "Invalid JSON: ": "Ogiltig JSON: ", "Metrics are local and contain no credentials.": "Mätvärden är lokala och innehåller inga autentiseringsuppgifter.", "Scheduled report": "Schemalagd rapport", "Report name and cadence:": "Rapportnamn och intervall:", "Save support bundle": "Spara supportpaket", "Support bundle": "Supportpaket", "A redacted support bundle was created.": "Ett maskerat supportpaket skapades.",
    "Administrator": "Administratör", "Analyst": "Analytiker", "Read only": "Endast läsning", "Local role:": "Lokal roll:", "Alert threshold (errors):": "Larmgräns (fel):", "Webhook endpoint (disabled until approved):": "Webhook-slutpunkt (inaktiverad tills godkänd):", "Optional local automation script; never runs without approval": "Valfritt lokalt automationsskript; körs aldrig utan godkännande", "Local automation:": "Lokal automatisering:", "Save governance settings": "Spara styrningsinställningar", "Read-only mode blocks write requests. Webhooks and local automation are saved only; this app will ask before any execution.": "Skrivskyddat läge blockerar skrivbegäranden. Webhooks och lokal automatisering sparas bara; programmet frågar före körning.", "Governance": "Styrning", "Alert threshold must be a positive integer.": "Larmgränsen måste vara ett positivt heltal.", "Governance settings saved.": "Styrningsinställningar sparades.", "Read-only mode blocks write requests. Change the local role in Operations Center to continue.": "Skrivskyddat läge blockerar skrivbegäranden. Ändra den lokala rollen i Åtgärdscenter för att fortsätta.",
    "Export policy as JSON": "Exportera policy som JSON", "Export policy as YAML": "Exportera policy som YAML", "Run compliance checks": "Kör efterlevnadskontroller", "Policy export": "Policyexport", "Export policy": "Exportera policy", "Compliance": "Efterlevnad",
    "Heatmap": "Värmekarta", "Topology": "Topologi", "Export preview": "Exportförhandsgranskning", "Nodes": "Noder", "Connections": "Anslutningar", "Sensitive fields are masked in every export.": "Känsliga fält maskeras i varje export.", "No nodes or connections were found in this response.": "Inga noder eller anslutningar hittades i svaret.",
    "Choose a guided AI example…": "Välj ett guidat AI-exempel…",
    "Validated: {count} requests are ready for review.": "Validerat: {count} begäranden är redo för granskning.",
    "Batch validation failed. Required CSV columns: {columns}": "Batchvalideringen misslyckades. Obligatoriska CSV-kolumner: {columns}",
    "Batch validation failed: ": "Batchvalideringen misslyckades: ",
    "Select {api} before running this batch.": "Välj {api} innan du kör denna batch.",
    "Review complete. Send {count} request(s) to the active environment?": "Granskningen är klar. Skicka {count} begäran/begäranden till den aktiva miljön?",
    "Confirm batch": "Bekräfta batch", "Sending batch request 0 of {count}...": "Skickar batchbegäran 0 av {count}...",
    "Batch execution started: {count} request(s)": "Batchkörning startad: {count} begäran/begäranden",
    "Sending batch request {completed} of {total}...": "Skickar batchbegäran {completed} av {total}...",
    "Batch complete: {successful} succeeded, {failed} failed.": "Batch klar: {successful} lyckades, {failed} misslyckades.",
    "Guided example loaded. Find the API request, review the preview, then choose whether to run it.": "Guidat exempel inläst. Hitta API-begäran, granska förhandsvisningen och välj sedan om du vill köra den.",
    "ZIA · List users": "ZIA · Lista användare",
    "ZIA · List URL categories": "ZIA · Lista URL-kategorier",
    "ZIA · Check activation status": "ZIA · Kontrollera aktiveringsstatus",
    "ZIA · List cloud firewall policies": "ZIA · Lista molnbrandväggspolicyer",
    "ZPA · List application segments": "ZPA · Lista applikationssegment",
    "ZPA · List segment groups": "ZPA · Lista segmentgrupper",
    "ZPA · List connectors": "ZPA · Lista anslutningar",
    "ZDX · List devices and experience scores": "ZDX · Lista enheter och upplevelsepoäng",
    "ZDX · List active alerts": "ZDX · Lista aktiva aviseringar",
    "ZDX · List monitored applications": "ZDX · Lista övervakade applikationer",
    "Client Connector · List devices": "Client Connector · Lista enheter",
    "ZIdentity · List users": "ZIdentity · Lista användare",
    "ZIdentity · List groups": "ZIdentity · Lista grupper",
    "AI Security · List workloads": "AI Security · Lista arbetsbelastningar",
    "ZIA · Find URL categories": "ZIA · Hitta URL-kategorier",
    "ZIA · Review firewall policies": "ZIA · Granska brandväggspolicyer",
    "ZPA · Application segments": "ZPA · Applikationssegment",
    "ZPA · Connector inventory": "ZPA · Anslutningsinventering",
    "ZDX · Experience overview": "ZDX · Upplevelseöversikt",
    "ZDX · Active alerts": "ZDX · Aktiva aviseringar",
    "ZDX · Application monitoring": "ZDX · Applikationsövervakning",
    "Client Connector · Devices": "Client Connector · Enheter",
    "ZIdentity · Users": "ZIdentity · Användare",
    "ZIdentity · Groups": "ZIdentity · Grupper",
    "AI Security · Workloads": "AI Security · Arbetsbelastningar",
    "List ZIA users with pagination": "Lista ZIA-användare med sidindelning",
    "Search ZIA URL categories for social media": "Sök ZIA-URL-kategorier för sociala medier",
    "List ZIA cloud firewall policies": "Lista ZIA-molnbrandväggspolicyer",
    "List ZPA application segments": "Lista ZPA-applikationssegment",
    "List ZPA connectors": "Lista ZPA-anslutningar",
    "List ZDX devices and experience scores": "Lista ZDX-enheter och upplevelsepoäng",
    "List active ZDX alerts with pagination": "Lista aktiva ZDX-aviseringar med sidindelning",
    "List monitored ZDX applications": "Lista övervakade ZDX-applikationer",
    "List Client Connector devices": "Lista Client Connector-enheter",
    "List ZIdentity users with pagination": "Lista ZIdentity-användare med sidindelning",
    "List ZIdentity groups": "Lista ZIdentity-grupper",
    "List AI Security workloads": "Lista AI Security-arbetsbelastningar",
})


def protect(text: str) -> tuple[str, list[str]]:
    values: list[str] = []

    def replace(match: re.Match[str]) -> str:
        values.append(match.group(0))
        return f"ZXPH{len(values) - 1}ZZ"

    return PROTECTED.sub(replace, text), values


def restore(text: str, values: list[str]) -> str:
    for index, value in enumerate(values):
        text = text.replace(f"ZXPH{index}ZZ", value)
    return text


def translate(text: str, target: str, email: str) -> str:
    safe_text, protected = protect(text)
    query = urllib.parse.urlencode({"q": safe_text, "langpair": f"en|{target}", "de": email})
    request = urllib.request.Request(PROVIDER_URL + "?" + query, headers={"User-Agent": "ZS-API-Client-l10n"})
    for attempt in range(6):
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                payload = __import__("json").load(response)
            break
        except HTTPError as error:
            if error.code != 429 or attempt == 5:
                raise
            time.sleep(2 ** attempt)
    translated = html.unescape(payload["responseData"]["translatedText"])
    result = restore(translated, protected)
    if any(f"ZXPH{index}ZZ" in result for index in range(len(protected))):
        raise RuntimeError(f"Provider did not preserve placeholders for: {text!r}")
    return result


def fill_catalog(path: Path, target: str, email: str, workers: int, delay: float, translate_fallbacks: bool) -> tuple[int, int]:
    tree = ET.parse(path)
    root = tree.getroot()
    canonical_locales = {"fa": "fa_IR", "pt": "pt_BR", "zh": "zh_CN"}
    root.set("language", canonical_locales.get(target, target))
    translated = skipped = 0
    pending: list[tuple[ET.Element, str, list[str]]] = []
    for message in tree.findall(".//message"):
        source = message.findtext("source", default="")
        translation = message.find("translation")
        if translation is None or not source:
            continue
        if translation.text and translation.get("type") != "unfinished" and not (translate_fallbacks and translation.text == source):
            skipped += 1
            continue
        safe_source, protected = protect(source)
        pending.append((translation, safe_source, protected))

    # Parallel independent requests avoid corrupting markup: batched machine
    # translation can move XML tags and placeholders between source strings.
    def request(item: tuple[ET.Element, str, list[str]]) -> tuple[ET.Element, str]:
        translation, safe_source, protected = item
        value = restore(translate(safe_source, target, email), protected)
        time.sleep(delay)
        return translation, value

    with ThreadPoolExecutor(max_workers=workers) as executor:
        for translation, value in executor.map(request, pending):
            translation.text = value
            translation.attrib.pop("type", None)
            translated += 1
    ET.indent(tree, space="    ")
    tree.write(path, encoding="utf-8", xml_declaration=True)
    return translated, skipped


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--email", help="Contact address required by MyMemory")
    parser.add_argument("--language", action="append", required=True, help="catalog code, e.g. it")
    parser.add_argument("--workers", type=int, default=1, help="parallel translation requests (default: 1)")
    parser.add_argument("--delay", type=float, default=0.5, help="pause between requests per worker")
    parser.add_argument("--fallback-source", action="store_true", help="fill remaining messages with English for offline review")
    parser.add_argument("--translate-fallbacks", action="store_true", help="replace English review fallbacks")
    parser.add_argument("--swedish-review", action="store_true", help="apply reviewed Swedish UI translations")
    args = parser.parse_args()
    if not (args.fallback_source or args.swedish_review) and not args.email:
        parser.error("--email is required unless --fallback-source is used")
    target_codes = {"pt": "pt-BR", "nb": "no", "zh": "zh-CN"}
    for code in args.language:
        path = TRANSLATIONS / f"zscaler_api_client_{code}.ts"
        if not path.exists():
            raise FileNotFoundError(path)
        if args.fallback_source:
            tree = ET.parse(path)
            fallback_count = 0
            for message in tree.findall(".//message"):
                source = message.findtext("source", default="")
                translation = message.find("translation")
                if source and translation is not None and (not translation.text or translation.get("type") == "unfinished"):
                    translation.text = source
                    translation.attrib.pop("type", None)
                    fallback_count += 1
            ET.indent(tree, space="    ")
            tree.write(path, encoding="utf-8", xml_declaration=True)
            print(f"{code}: filled {fallback_count} English review fallbacks")
            continue
        if args.swedish_review:
            tree = ET.parse(path)
            translated = 0
            for message in tree.findall(".//message"):
                source = message.findtext("source", default="")
                translation = message.find("translation")
                if translation is not None and source in SWEDISH_REVIEW and (translation.text == source or translation.get("type") == "unfinished"):
                    translation.text = SWEDISH_REVIEW[source]
                    translation.attrib.pop("type", None)
                    translated += 1
            ET.indent(tree, space="    ")
            tree.write(path, encoding="utf-8", xml_declaration=True)
            print(f"{code}: applied {translated} reviewed Swedish translations")
            continue
        translated, skipped = fill_catalog(
            path, target_codes.get(code, code), args.email, args.workers, args.delay, args.translate_fallbacks
        )
        print(f"{code}: translated {translated}, retained {skipped}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
