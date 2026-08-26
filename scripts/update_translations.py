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
    "Invalid JSON: ": "Ogiltig JSON: ", "Metrics are local and contain no credentials.": "Mätvärden är lokala och innehåller inga autentiseringsuppgifter.", "Scheduled report": "Schemalagd rapport", "Report name and cadence:": "Rapportnamn och intervall:", "Report name:": "Rapportnamn:", "Report cadence:": "Rapportintervall:", "Hourly": "Varje timme", "Daily": "Dagligen", "Weekly": "Varje vecka", "Choose report output folder": "Välj utdatakatalog för rapporter", "Scheduled report saved. Reports run locally while the application is open.": "Den schemalagda rapporten sparades. Rapporter körs lokalt medan programmet är öppet.", "Save support bundle": "Spara supportpaket", "Support bundle": "Supportpaket", "A redacted support bundle was created.": "Ett maskerat supportpaket skapades.",
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
    "Masked response copied to clipboard": "Maskerat svar kopierat till urklipp",
    "Update Users (ZIA)": "Uppdatera användare (ZIA)",
    "Security posture": "Säkerhetsläge", "Refresh security posture": "Uppdatera säkerhetsläge", "Posture score: {score}/100": "Säkerhetspoäng: {score}/100",
    "Local security posture uses redacted request history and audit integrity. It is an operational signal, not a tenant security assessment.": "Det lokala säkerhetsläget använder maskerad begärandehistorik och revisionsintegritet. Det är en driftsignal, inte en bedömning av tenantens säkerhet.",
    "Critical": "Kritisk", "High": "Hög", "Medium": "Medel", "Low": "Låg", "Info": "Information",
    "Audit integrity needs review": "Revisionsintegriteten behöver granskas", "The local audit chain did not verify.": "Den lokala revisionskedjan kunde inte verifieras.",
    "Repeated API failures": "Upprepade API-fel", "{count} failed requests are in local history.": "{count} misslyckade begäranden finns i den lokala historiken.",
    "API failures observed": "API-fel upptäckta", "{count} request(s) need review.": "{count} begäran/begäranden behöver granskas.",
    "Change activity burst": "Topp i ändringsaktivitet", "{count} write requests are in local history.": "{count} skrivbegäranden finns i den lokala historiken.",
    "Slow API responses": "Långsamma API-svar", "{count} request(s) took ten seconds or more.": "{count} begäran/begäranden tog tio sekunder eller mer.",
    "No local telemetry yet": "Ingen lokal telemetri ännu", "Send or import redacted requests to establish a local baseline.": "Skicka eller importera maskerade begäranden för att skapa en lokal baslinje.",
    "Build a redacted local investigation timeline. Prepared chains never send API requests automatically.": "Skapa en maskerad lokal utredningstidslinje. Förberedda kedjor skickar aldrig API-begäranden automatiskt.",
    "Investigation:": "Utredning:", "API failure investigation": "Utredning av API-fel", "Change activity review": "Granskning av ändringsaktivitet", "Slow response investigation": "Utredning av långsamma svar",
    "Prepare investigation chain": "Förbered utredningskedja", "Source": "Källa", "Evidence": "Bevisunderlag", "Refresh investigation": "Uppdatera utredning", "Export incident evidence": "Exportera incidentunderlag", "Incident investigation": "Incidentutredning",
    "Request": "Begäran", "Audit": "Revision",
    "1. Review failed requests in the local timeline.\n2. Select the matching product and endpoint in API Explorer.\n3. Run the read-only status or list operation.\n4. Compare the masked response with the audit trail.\n5. Export evidence or open a change review; no remediation is sent automatically.": "1. Granska misslyckade begäranden i den lokala tidslinjen.\n2. Välj motsvarande produkt och slutpunkt i API-utforskaren.\n3. Kör status- eller liståtgärden med läsbehörighet.\n4. Jämför det maskerade svaret med revisionsspåret.\n5. Exportera underlag eller öppna en ändringsgranskning; ingen åtgärd skickas automatiskt.",
    "1. Review recent write requests and audit events.\n2. Export or load the current policy object.\n3. Use Policy diff and local simulation.\n4. Run compliance checks.\n5. Prepare a reviewed Terraform or Git change; no apply is sent automatically.": "1. Granska senaste skrivbegäranden och revisionshändelser.\n2. Exportera eller läs in det aktuella policyobjektet.\n3. Använd policyjämförelse och lokal simulering.\n4. Kör efterlevnadskontroller.\n5. Förbered en granskad Terraform- eller Git-ändring; ingen tillämpning skickas automatiskt.",
    "1. Identify slow requests in the local timeline.\n2. Review response status, duration, and rate-limit headers.\n3. Query the relevant ZDX or product status endpoint.\n4. Compare against recent requests.\n5. Export the masked incident evidence for escalation.": "1. Identifiera långsamma begäranden i den lokala tidslinjen.\n2. Granska svarsstatus, varaktighet och rate-limit-rubriker.\n3. Fråga relevant ZDX- eller produktstatusslutpunkt.\n4. Jämför med senaste begäranden.\n5. Exportera maskerat incidentunderlag för eskalering.",
    "Create a local review from Policy diff. Approval records intent only; no policy, Terraform, or Git change is applied automatically.": "Skapa en lokal granskning från policyjämförelse. Godkännande registrerar endast avsikt; ingen policy-, Terraform- eller Git-ändring tillämpas automatiskt.",
    "Change ticket or reference": "Ändringsärende eller referens", "Reviewer name": "Granskarens namn", "Reference:": "Referens:", "Reviewer:": "Granskare:", "Prepare change review": "Förbered ändringsgranskning", "Record local approval": "Registrera lokalt godkännande", "Export Git review": "Exportera Git-granskning", "Export rollback plan": "Exportera rollback-plan", "Change control": "Ändringsstyrning",
    "Review policy diff": "Granska policyjämförelse", "Run local simulation": "Kör lokal simulering", "Record reviewer approval": "Registrera granskarens godkännande", "Export Git/Terraform review": "Exportera Git/Terraform-granskning", "Apply outside this client only after approval": "Tillämpa utanför klienten först efter godkännande", "Enter a reviewer before recording approval.": "Ange en granskare innan godkännande registreras.", "Local approval recorded. External apply remains disabled.": "Lokalt godkännande registrerat. Extern tillämpning förblir inaktiverad.",
    "Generate local, redacted reports for leadership, SOC, or operations. Reports contain no credentials and are not sent automatically.": "Generera lokala, maskerade rapporter för ledning, SOC eller drift. Rapporter innehåller inga autentiseringsuppgifter och skickas inte automatiskt.",
    "Report type:": "Rapporttyp:", "CISO security summary": "CISO-säkerhetssammanfattning", "SOC investigation summary": "SOC-utredningssammanfattning", "Operations health summary": "Driftstatussammanfattning", "Generate report": "Generera rapport", "Export report as Markdown": "Exportera rapport som Markdown", "Export report as JSON": "Exportera rapport som JSON", "Reports": "Rapporter", "Scheduled reports": "Schemalagda rapporter", "Type": "Typ", "Cadence": "Intervall", "Next run": "Nästa körning", "Paused": "Pausad", "Run selected now": "Kör vald nu", "Enable or pause": "Aktivera eller pausa", "Remove schedule": "Ta bort schema", "Refresh schedules": "Uppdatera scheman", "Select a scheduled report first.": "Välj först en schemalagd rapport.", "Remove the selected scheduled report?": "Ta bort den valda schemalagda rapporten?", "The scheduled report was generated locally.": "Den schemalagda rapporten genererades lokalt.", "The scheduled report could not be generated. Check its output folder and the audit trail.": "Den schemalagda rapporten kunde inte genereras. Kontrollera utdatakatalogen och revisionsspåret.",
    "Local requests: {count}": "Lokala begäranden: {count}", "Failed requests: {count}": "Misslyckade begäranden: {count}", "Audit integrity: {status}": "Revisionsintegritet: {status}", "Valid": "Giltig", "Needs review": "Behöver granskas", "Incident signals": "Incidentsignaler", "Executive actions": "Ledningsåtgärder", "Review high-risk findings and approval records.": "Granska högriskfynd och godkännandeposter.", "Use the Security Posture and Change Control workspaces for evidence.": "Använd arbetsytorna Säkerhetsläge och Ändringsstyrning som underlag.",
    "SOC next steps": "SOC:s nästa steg", "Use Incident Investigation to prepare a review chain.": "Använd Incidentutredning för att förbereda en granskningskedja.", "Export masked evidence before escalation.": "Exportera maskerat underlag före eskalering.", "Operations next steps": "Driftens nästa steg", "Review slow responses and API failures.": "Granska långsamma svar och API-fel.", "Confirm rate limits and service health with read-only queries.": "Bekräfta rate limits och tjänstehälsa med skrivskyddade frågor.",
    "Send masked webhook test": "Skicka maskerat webhook-test", "Webhook test": "Webhook-test", "Configure a webhook endpoint in Governance first.": "Konfigurera först en webhook-slutpunkt i Styrning.", "Webhook endpoints must use HTTPS unless they are local.": "Webhook-slutpunkter måste använda HTTPS om de inte är lokala.", "Send a masked connectivity test to the configured webhook endpoint?": "Skicka ett maskerat anslutningstest till den konfigurerade webhook-slutpunkten?", "Masked webhook test succeeded (HTTP {status}).": "Maskerat webhook-test lyckades (HTTP {status}).", "Masked webhook test failed: {error}": "Maskerat webhook-test misslyckades: {error}",
    "API chains": "API-kedjor", "Chain JSON": "Kedje-JSON", "Validate chain": "Validera kedja", "Run approved chain": "Kör godkänd kedja", "Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and every run requires approval.": "Kör en granskad sekvens mot den aktiva autentiserade miljön. Kedjor är begränsade till 20 steg, stannar på vald produktvärd och varje körning kräver godkännande.", "A JSON list of API requests. Relative paths use the active product host.": "En JSON-lista med API-begäranden. Relativa sökvägar använder den aktiva produktvärden.", "Configure a host for the active product before running a chain.": "Konfigurera en värd för den aktiva produkten innan du kör en kedja.", "Each chain step must stay on the active product host.": "Varje kedjesteg måste stanna på den aktiva produktvärden.", "Fix the chain validation errors before running it.": "Åtgärda kedjans valideringsfel innan den körs.", "Authenticate the active product before running a chain.": "Autentisera den aktiva produkten innan du kör en kedja.", "Run {count} API step(s) sequentially against the active environment?": "Kör {count} API-steg i följd mot den aktiva miljön?", "The chain contains write operations; review and approve before continuing.": "Kedjan innehåller skrivåtgärder; granska och godkänn innan du fortsätter.", "Running API chain step {completed} of {total}...": "Kör API-kedjesteg {completed} av {total}...", "API chain completed: {successful} succeeded, {failed} failed.": "API-kedjan är klar: {successful} lyckades, {failed} misslyckades.",
    "Alert Center": "Larmcenter", "Local alerts evaluate retained, redacted request history only. They do not monitor the tenant in real time or send data externally.": "Lokala larm utvärderar endast bevarad, maskerad begärandehistorik. De övervakar inte tenanten i realtid och skickar inga data externt.", "Severity": "Allvarlighetsgrad", "Alert": "Larm", "Count": "Antal", "Refresh local alerts": "Uppdatera lokala larm", "Copy masked alert summary": "Kopiera maskerad larmsammanfattning", "{count} local alert(s) · error threshold: {threshold}": "{count} lokalt/lokala larm · feltröskel: {threshold}", "The local audit chain needs review.": "Den lokala revisionskedjan behöver granskas.", "Local failed requests reached the configured threshold.": "Lokala misslyckade begäranden nådde den konfigurerade tröskeln.", "API rate limiting was observed in local history.": "API-rate limiting observerades i lokal historik.", "Three or more local requests took ten seconds or more.": "Tre eller fler lokala begäranden tog tio sekunder eller mer.", "Copied to clipboard": "Kopierat till urklipp",
    "Configure a base URL for the selected product before sending a relative API path.": "Konfigurera en bas-URL för den valda produkten innan du skickar en relativ API-sökväg.",
    "Policy rule overview": "Översikt över policyregler", "Rule": "Regel", "Action": "Åtgärd", "Conditions": "Villkor", "State": "Status", "Enabled": "Aktiverad", "Disabled": "Inaktiverad", "Best-practice finding": "Best-practice-fynd", "Order": "Ordning", "Decision": "Beslut", "Allow rule has no conditions": "Tillåt-regeln saknar villkor", "Rule is disabled": "Regeln är inaktiverad", "Rule name is duplicated": "Regelnamnet är duplicerat", "Rule action is unspecified": "Regelåtgärden är inte angiven", "Rules evaluated": "Utvärderade regler", "Matched rule": "Matchad regel", "Matched": "Matchad", "Not matched": "Ingen matchning",
    "Open alerts": "Öppna larm",
    "A response reported no remaining API rate-limit capacity.": "Ett svar rapporterade att ingen API-rate-limit-kapacitet återstår.",
    "Recent request latency (ms)": "Senaste begärandelatens (ms)",
    "The latest request failed after successful requests to the same endpoint.": "Den senaste begäran misslyckades efter lyckade begäranden till samma slutpunkt.", "The latest endpoint response was much slower than its local baseline.": "Det senaste svaret från slutpunkten var mycket långsammare än den lokala baslinjen.",
    "Auto-refresh local signals": "Uppdatera lokala signaler automatiskt", "Every 30 seconds": "Var 30:e sekund", "Every minute": "Varje minut", "Every 5 minutes": "Var femte minut",
    "Export alerts as JSON": "Exportera larm som JSON", "Export alerts as Markdown": "Exportera larm som Markdown", "Local alert summary": "Lokal larmsammanfattning", "Error threshold: {threshold}": "Feltröskel: {threshold}", "No local alerts.": "Inga lokala larm.", "Count: {count}": "Antal: {count}", "Export local alerts": "Exportera lokala larm",
    "Stop after the first failed step": "Stoppa efter första misslyckade steget", "The chain stopped after the first failed step.": "Kedjan stoppades efter första misslyckade steget.",
    "Documented ZInsights query…": "Dokumenterad ZInsights-fråga…", "Load documented query": "Läs in dokumenterad fråga", "Browse documented schema": "Bläddra i dokumenterat schema", "Documented GraphQL schema": "Dokumenterat GraphQL-schema", "Queries": "Frågor", "Types": "Typer", "The current Automation Hub page has no executable query example. Open its documentation or use schema introspection.": "Den aktuella sidan i Automation Hub saknar ett körbart frågeexempel. Öppna dokumentationen eller använd schemainspektion.", "Loaded documented ZInsights query. Review time ranges, filters, and fields before sending.": "Dokumenterad ZInsights-fråga inläst. Granska tidsintervall, filter och fält innan den skickas.",
    "Dataset:": "Datamängd:", "No tabular datasets": "Inga tabulära datamängder",
    "Absolute path to a reviewed local Python automation": "Absolut sökväg till en granskad lokal Python-automatisering", "Read-only mode blocks write requests and local automation. Every webhook or local automation execution requires explicit approval.": "Skrivskyddat läge blockerar skrivbegäranden och lokal automatisering. Varje webhook- eller lokal automationskörning kräver uttryckligt godkännande.", "Run reviewed local automation": "Kör granskad lokal automatisering", "Local automation must be an existing absolute path to a non-symlinked .py file no larger than 1 MiB.": "Lokal automatisering måste vara en befintlig absolut sökväg till en .py-fil som inte är en symbolisk länk och är högst 1 MiB.", "Local automation": "Lokal automatisering", "Read-only mode blocks local automation.": "Skrivskyddat läge blockerar lokal automatisering.", "Configure a valid local Python automation in Governance first.": "Konfigurera först en giltig lokal Python-automatisering i Styrning.", "Local automation is already running.": "Lokal automatisering körs redan.", "Run the reviewed Python file with masked local posture and alert data? The process receives no API credentials.": "Kör den granskade Python-filen med maskerade lokala säkerhets- och larmdata? Processen får inga API-autentiseringsuppgifter.", "Local automation exceeded the 15-second limit and was stopped.": "Lokal automatisering överskred tidsgränsen på 15 sekunder och stoppades.", "Local automation completed with exit code {code}.": "Lokal automatisering slutfördes med slutkod {code}.", "Local automation failed to start.": "Lokal automatisering kunde inte startas.",
    "Send current masked alerts": "Skicka aktuella maskerade larm", "Webhook endpoints must use HTTPS (or local HTTP) and must not contain credentials in the URL.": "Webhook-slutpunkter måste använda HTTPS (eller lokal HTTP) och får inte innehålla autentiseringsuppgifter i URL:en.", "Send the current masked local alert snapshot to the configured webhook endpoint?": "Skicka den aktuella maskerade lokala larmsammanställningen till den konfigurerade webhook-slutpunkten?", "Webhook delivery": "Webhook-leverans", "A webhook delivery is already running.": "En webhook-leverans pågår redan.", "Masked webhook delivery succeeded (HTTP {status}).": "Maskerad webhook-leverans lyckades (HTTP {status}).", "Masked webhook delivery failed: {error}": "Maskerad webhook-leverans misslyckades: {error}",
    "Show webhook endpoint": "Visa webhook-slutpunkt", "Webhook endpoint (stored in system keychain):": "Webhook-slutpunkt (lagras i systemets nyckelring):", "Webhook delivery history": "Leveranshistorik för webhook", "Delivery": "Leverans", "Connectivity test": "Anslutningstest", "Alert snapshot": "Larmögonblicksbild", "Started": "Startad", "Succeeded": "Lyckades", "Failed": "Misslyckades",
    "Secure storage": "Säker lagring", "The system keychain could not save the secret. Check the keychain service and try again.": "Systemets nyckelring kunde inte spara hemligheten. Kontrollera nyckelringstjänsten och försök igen.", "The system keychain could not save one or more secrets. No secret changes were applied.": "Systemets nyckelring kunde inte spara en eller flera hemligheter. Inga ändringar av hemligheter genomfördes.", "The system keychain could not save the webhook endpoint. Check the keychain service and try again.": "Systemets nyckelring kunde inte spara webhook-slutpunkten. Kontrollera nyckelringstjänsten och försök igen.",
    "Mode": "Läge", "Background": "Bakgrund", "App only": "Endast programmet", "The operating-system schedule could not be updated. No state was changed.": "Operativsystemets schema kunde inte uppdateras. Ingen status ändrades.", "The report is paused and cannot generate output, but the operating-system job cleanup needs manual review.": "Rapporten är pausad och kan inte generera utdata, men operativsystemets jobbrensning behöver granskas manuellt.", "The report was removed, but the operating-system job could not be removed. It can no longer generate a report because its schedule ID is no longer active.": "Rapporten togs bort, men operativsystemets jobb kunde inte tas bort. Det kan inte längre generera en rapport eftersom dess schema-ID inte längre är aktivt.", "Run this report even when ZS API Client is closed? This creates a user-level operating-system schedule and requires no administrator privileges.": "Kör rapporten även när ZS API Client är stängt? Detta skapar ett schema på användarnivå i operativsystemet och kräver inga administratörsbehörigheter.", "The operating-system schedule could not be created. The report was not scheduled.": "Operativsystemets schema kunde inte skapas. Rapporten schemalades inte.", "Scheduled report saved. It will run in the background even when the application is closed.": "Den schemalagda rapporten sparades. Den körs i bakgrunden även när programmet är stängt.", "Scheduled report saved. It will run locally while the application is open.": "Den schemalagda rapporten sparades. Den körs lokalt medan programmet är öppet.",
    "Extract typed variables from the selected GraphQL operation. Values are inserted into the JSON request body, never into the URL.": "Extrahera typade variabler från den valda GraphQL-operationen. Värden infogas i JSON-begärandens body, aldrig i URL:en.", "JSON value": "JSON-värde", "Extract variables from query": "Extrahera variabler från frågan", "No GraphQL variables extracted.": "Inga GraphQL-variabler extraherades.", "GraphQL Variables": "GraphQL-variabler", "{count} variable(s) extracted · {missing} required value(s) missing": "{count} variabel/variabler extraherade · {missing} obligatoriskt/obligatoriska värden saknas", "GraphQL body must be a JSON object containing a query string.": "GraphQL-body måste vara ett JSON-objekt som innehåller en frågesträng.", "Variable ${name} is required.": "Variabeln ${name} är obligatorisk.", "Variable ${name} must be valid for type {type}.": "Variabeln ${name} måste vara giltig för typen {type}.", "Remove undeclared GraphQL variables: {names}": "Ta bort odeklarerade GraphQL-variabler: {names}", "The system keychain could not save the GraphQL query.": "Systemets nyckelring kunde inte spara GraphQL-frågan.", "The system keychain could not rename the GraphQL query.": "Systemets nyckelring kunde inte byta namn på GraphQL-frågan.", "The system keychain could not delete the GraphQL query.": "Systemets nyckelring kunde inte ta bort GraphQL-frågan.", "The system keychain could not save the GraphQL schema.": "Systemets nyckelring kunde inte spara GraphQL-schemat.", "Choose operationName because the document contains multiple GraphQL operations.": "Välj operationName eftersom dokumentet innehåller flera GraphQL-operationer.", "GraphQL operationName does not match a named operation in the query.": "GraphQL operationName matchar inte någon namngiven operation i frågan.",
    "API version:": "API-version:", "{product} Cloud: Removed URL prefix (only hostname needed)": "{product}-moln: URL-prefixet togs bort (endast värdnamn behövs)", "ZCC is enabled but Cloud host is empty": "ZCC är aktiverat men molnets värdnamn saknas",
    "Maximum upload/download (MB):": "Största uppladdning/nedladdning (MB):", "Body type:": "Body-typ:", "Raw text": "Råtext", "Form URL encoded": "URL-kodat formulär", "Multipart file upload": "Multipart-filuppladdning", "File field:": "Filfält:", "Upload file:": "Fil att ladda upp:", "Select a local file; its path is never saved in history": "Välj en lokal fil; sökvägen sparas aldrig i historiken", "Browse…": "Bläddra…", "Raw request body...": "Rå request-body...", "Form fields as JSON or an encoded key=value string...": "Formulärfält som JSON eller en kodad key=value-sträng...", "Optional multipart fields as a JSON object...": "Valfria multipart-fält som ett JSON-objekt...", "Select upload file": "Välj fil att ladda upp", "Select an available local file before sending.": "Välj en tillgänglig lokal fil innan du skickar.", "Multipart fields must be a JSON object: {error}": "Multipart-fälten måste vara ett JSON-objekt: {error}", "Multipart fields must be a JSON object.": "Multipart-fälten måste vara ett JSON-objekt.", "Binary response ready to save.\nFile: {name}\nType: {type}\nSize: {size}": "Binärt svar är redo att sparas.\nFil: {name}\nTyp: {type}\nStorlek: {size}", "Save binary response": "Spara binärt svar", "Binary content cannot be inspected or obfuscated as text. Save the original response only if you trust this endpoint and destination?": "Binärt innehåll kan inte granskas eller maskeras som text. Spara originalsvaret endast om du litar på slutpunkten och destinationen?", "All files (*)": "Alla filer (*)", "Original binary response saved": "Det ursprungliga binära svaret sparades", "Binary content is not included in this preview.": "Binärt innehåll ingår inte i denna förhandsgranskning.", "Original binary export requires a separate confirmation.": "Export av det ursprungliga binära innehållet kräver en separat bekräftelse.", "Binary response": "Binärt svar", "Binary response content is not copied to the clipboard. Use Export to save the original file.": "Det binära svarets innehåll kopieras inte till urklipp. Använd Exportera för att spara originalfilen.", "Multipart request loaded. Select the local file again before sending.": "Multipart-begäran lästes in. Välj den lokala filen igen innan du skickar.",
    "Select a documented endpoint to inspect its request contract.": "Välj en dokumenterad slutpunkt för att granska dess request-kontrakt.", "Location": "Plats", "API Guide": "API-guide", "View Documentation": "Visa dokumentation", "Documented response codes": "Dokumenterade svarskoder", "body template available": "bodymall tillgänglig", "no body template": "ingen bodymall", "not listed": "inte angivet", "{count} documented parameter(s) · {body} · responses: {codes}. Templates are examples; review every value before sending.": "{count} dokumenterad(e) parameter/parametrar · {body} · svar: {codes}. Mallar är exempel; granska varje värde innan du skickar.", "The URL was edited manually. Select an endpoint again to attach its documented request contract.": "URL:en redigerades manuellt. Välj en slutpunkt igen för att koppla dess dokumenterade request-kontrakt.", "Missing documented parameters": "Dokumenterade parametrar saknas", "Enter required values for: {names}": "Ange obligatoriska värden för: {names}", "Suggested request: {method} {name}. Review the attached API Guide and all template values before running.": "Föreslagen begäran: {method} {name}. Granska den kopplade API-guiden och alla mallvärden innan körning.",
    "Write request prepared": "Skrivbegäran förberedd", "The documented write template is ready. Review the API Guide, parameters, and body, then choose Send explicitly.": "Den dokumenterade skrivmallen är klar. Granska API-guiden, parametrarna och body-innehållet och välj sedan Skicka uttryckligen.",
    "Required value": "Obligatoriskt värde", "Optional value": "Valfritt värde",
    "Fetch all pages": "Hämta alla sidor", "Follow only the pagination parameters documented for the selected read operation.": "Följ endast pagineringsparametrarna som dokumenterats för den valda läsoperationen.", "Page size:": "Sidstorlek:", "Maximum pages:": "Högsta antal sidor:", "Documented {mode} pagination using {parameter}. Results retain every page and stop at the configured maximum.": "Dokumenterad {mode}-paginering med {parameter}. Resultatet behåller varje sida och stoppar vid den konfigurerade gränsen.", "Documented {mode} pagination is available as an explicit bounded option.": "Dokumenterad {mode}-paginering finns som ett uttryckligt begränsat alternativ.", "Pagination unavailable": "Paginering är inte tillgänglig", "Select a documented paginated GET operation before fetching all pages.": "Välj en dokumenterad paginerad GET-operation innan du hämtar alla sidor.", "Fetching page {page} of at most {maximum}…": "Hämtar sida {page} av högst {maximum}…", "Pagination complete: {pages} page(s), {records} record(s)": "Paginering klar: {pages} sida/sidor, {records} post/poster", "Partial pagination result": "Partiellt pagineringsresultat", "Pagination stopped before completion: {pages} page(s), {records} record(s)": "Pagineringen stoppades före slutförande: {pages} sida/sidor, {records} post/poster",
    "Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.": "Kör en granskad sekvens mot den aktiva autentiserade miljön. Kedjor är begränsade till 20 steg, stannar på den valda produktvärden och kan referera till tidigare JSON-värden med {{stepId.path.0.value}}. Varje körning kräver godkännande.", "A JSON list of API requests. Relative paths use the active product host; references can use only completed step IDs.": "En JSON-lista med API-begäranden. Relativa sökvägar använder den aktiva produktvärden; referenser får endast använda slutförda steg-ID:n.", "Step": "Steg", "Records": "Poster", "Duration": "Varaktighet", "Export masked chain results": "Exportera maskerade kedjeresultat", "{duration} ms": "{duration} ms", "Succeeded": "Lyckades", "Failed": "Misslyckades", "Run a chain before exporting its masked results.": "Kör en kedja innan dess maskerade resultat exporteras.",
    "Cancel": "Avbryt", "Stop before the next page or chain step; the current HTTP request is allowed to finish safely.": "Stoppa före nästa sida eller kedjesteg; den aktuella HTTP-begäran får slutföras säkert.", "Cancellation requested; waiting for the current HTTP request to finish safely…": "Avbrott begärt; väntar på att den aktuella HTTP-begäran ska slutföras säkert…", "Request cancelled": "Begäran avbröts", "Request cancelled before completion": "Begäran avbröts före slutförande", "Cancel chain": "Avbryt kedja", "Cancellation requested; the current HTTP request will finish and no new chain step will start.": "Avbrott begärt; den aktuella HTTP-begäran slutförs och inget nytt kedjesteg startas.", "The chain was cancelled before all steps started; completed results were retained.": "Kedjan avbröts innan alla steg startade; slutförda resultat behölls.",
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
    "Open export": "Öppna export",
    "Open response export…": "Öppna svarsexport…",
    "Open response export": "Öppna svarsexport",
    "No tabular response data is available to export.": "Det finns inga tabulära svarsdata att exportera.",
    "The response export is unavailable, is a symbolic link, or exceeds the configured transfer limit.": "Svarsexporten är inte tillgänglig, är en symbolisk länk eller överskrider den konfigurerade överföringsgränsen.",
    "This is not a supported ZS API response exchange file.": "Detta är inte en ZS API-svarsfil som stöds.",
    "The response exchange file is incomplete.": "Svarsfilen är ofullständig.",
    "Imported": "Importerad",
    "Response export opened locally; no API request was sent.": "Svarsexporten öppnades lokalt; ingen API-begäran skickades.",
    "Retry only GET, HEAD, and OPTIONS after transient network errors or HTTP 408, 429, 502, 503, and 504. Write requests are never retried automatically.": "Återförsök endast GET, HEAD och OPTIONS efter tillfälliga nätverksfel eller HTTP 408, 429, 502, 503 och 504. Skrivbegäranden återförsöks aldrig automatiskt.",
    "Retry safe reads:": "Återförsök säkra läsningar:",
    "Maximum read retries:": "Högsta antal läsåterförsök:",
    "Maximum seconds to honor from Retry-After; shorter exponential backoff is used when the server omits it.": "Högsta antal sekunder att respektera från Retry-After; kortare exponentiell väntan används när servern utelämnar det.",
    "Maximum retry wait (seconds):": "Längsta väntan för återförsök (sekunder):",
    "Safe read retry {attempt} of {maximum} in {seconds} second(s)…": "Säker läsåterförsökning {attempt} av {maximum} om {seconds} sekund(er)…",
    "Safe read retries: {count}": "Säkra läsåterförsök: {count}",
    "The response export is not valid UTF-8 JSON.": "Svarsexporten är inte giltig UTF-8-kodad JSON.",
    "The response exchange file could not be opened.": "Svarsfilen kunde inte öppnas.",
    "Response drift comparison": "Jämförelse av svarsdrift",
    "Compare the active masked response with a local ZS API Exchange baseline. Matching records are aligned by id, UUID, resourceId, key, or name. No API request is sent.": "Jämför det aktiva maskerade svaret med en lokal ZS API Exchange-baslinje. Matchande poster justeras efter id, UUID, resourceId, nyckel eller namn. Ingen API-begäran skickas.",
    "Baseline:": "Baslinje:",
    "Choose a masked response exchange file": "Välj en maskerad svarsfil",
    "Open baseline…": "Öppna baslinje…",
    "Ignore volatile fields:": "Ignorera flyktiga fält:",
    "Comma-separated field names ignored at every JSON depth. Secrets are always masked independently.": "Kommaseparerade fältnamn som ignoreras på alla JSON-nivåer. Hemligheter maskeras alltid oberoende.",
    "Compare responses": "Jämför svar",
    "Open a baseline to calculate drift.": "Öppna en baslinje för att beräkna drift.",
    "Impact": "Påverkan", "Change": "Ändring", "JSON path": "JSON-sökväg", "Identity": "Identitet", "Baseline value": "Baslinjevärde", "Current value": "Aktuellt värde",
    "Export masked drift…": "Exportera maskerad drift…",
    "Open response baseline": "Öppna svarsbaslinje",
    "Open a baseline response exchange first.": "Öppna först en svarsbaslinje.",
    "No drift found in the compared scope.": "Ingen drift hittades i det jämförda omfånget.",
    "{total} change(s): {added} added, {removed} removed, {changed} changed · {high} high-impact": "{total} ändring(ar): {added} tillagda, {removed} borttagna, {changed} ändrade · {high} med hög påverkan",
    "Result truncated at {maximum} changes": "Resultatet begränsades vid {maximum} ändringar",
    "Baseline {baseline} · current {current}": "Baslinje {baseline} · aktuell {current}",
    "Added": "Tillagda", "Removed": "Borttagna", "Changed": "Ändrade", "High impact": "Hög påverkan",
    "Export masked drift": "Exportera maskerad drift",
    "Compare drift": "Jämför drift",
    "Compare response drift…": "Jämför svarsdrift…",
    "Binary responses cannot be structurally compared. Export and inspect the original file with an appropriate tool.": "Binära svar kan inte jämföras strukturellt. Exportera och granska originalfilen med ett lämpligt verktyg.",
    "Send a request or open a response export before comparing drift.": "Skicka en begäran eller öppna en svarsexport innan du jämför drift.",
})

SWEDISH_REVIEW.update({
    "Latency": "Svarstid",
    "{count} condition(s)": "{count} villkor",
    "Policy, application, group, location, and resource names": "Namn på policyer, applikationer, grupper, platser och resurser",
    "Build a local digital twin of policy order. It explains decisions, highlights overlap and shadowing, estimates change blast radius, and never applies a policy.": "Bygg en lokal digital tvilling av policyordningen. Den förklarar beslut, visar överlappningar och skuggning, uppskattar ändringens påverkansområde och tillämpar aldrig en policy.",
    "Policy rules JSON or an object containing a rules list": "Policyregler som JSON eller ett objekt med en regellista",
    "Analyze policy twin": "Analysera policytvilling",
    "Export twin evidence": "Exportera underlag från tvillingen",
    "Load proposed policy": "Läs in föreslagen policy",
    "Test context:": "Testkontext:",
    "Request context JSON": "Begärandekontext som JSON",
    "Explain decision": "Förklara beslut",
    "Rules": "Regler",
    "Conflicts": "Konflikter",
    "Shadowed": "Skuggade",
    "Blast radius": "Påverkansområde",
    "Policy order and conflict graph": "Graf över policyordning och konflikter",
    "Earlier rule": "Tidigare regel",
    "Later rule": "Senare regel",
    "Explanation": "Förklaring",
    "Policy time travel": "Policyhistorik",
    "Save snapshot": "Spara ögonblicksbild",
    "Use as baseline": "Använd som baslinje",
    "Load snapshot": "Läs in ögonblicksbild",
    "Delete snapshot": "Ta bort ögonblicksbild",
    "Policy twin": "Policytvilling",
    "No baseline (analyze current policy only)": "Ingen baslinje (analysera endast aktuell policy)",
    "Snapshot": "Ögonblicksbild",
    "Unconditional allow": "Ovillkorligt tillåt",
    "Shadowed conflict": "Skuggad konflikt",
    "Redundant shadow": "Redundant skuggning",
    "Overlapping actions": "Överlappande åtgärder",
    "Duplicate rule name": "Duplicerat regelnamn",
    "An unconditional allow rule can expose every later matching scope.": "En ovillkorlig tillåt-regel kan exponera alla senare matchande omfång.",
    "The later rule can never decide because an earlier rule covers all of its matches.": "Den senare regeln kan aldrig avgöra eftersom en tidigare regel täcker alla dess matchningar.",
    "The rules can match the same context but have different actions; order decides the outcome.": "Reglerna kan matcha samma kontext men ha olika åtgärder; ordningen avgör resultatet.",
    "Duplicate rule names make reviews, evidence, and rollback ambiguous.": "Duplicerade regelnamn gör granskning, underlag och återställning tvetydiga.",
    "Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.": "Policytvilling: {rules} regel/regler, {findings} fynd, påverkansområde {score}/100, {changed} ändrad(e) regel/regler jämfört med baslinjen.",
    "Request context must be a JSON object.": "Begärandekontexten måste vara ett JSON-objekt.",
    "Decision: {action}. Rule “{name}” matched after evaluating {count} rule(s).": "Beslut: {action}. Regeln ”{name}” matchade efter utvärdering av {count} regel/regler.",
    "Decision: no match after evaluating {count} rule(s).": "Beslut: ingen matchning efter utvärdering av {count} regel/regler.",
    "Select one environment before saving a policy snapshot.": "Välj en miljö innan du sparar en policyögonblicksbild.",
    "Policy snapshots are limited to 2 MB.": "Policyögonblicksbilder är begränsade till 2 MB.",
    "Save policy snapshot": "Spara policyögonblicksbild",
    "Snapshot name:": "Namn på ögonblicksbild:",
    "Select a saved policy snapshot first.": "Välj först en sparad policyögonblicksbild.",
    "Delete policy snapshot": "Ta bort policyögonblicksbild",
    "Delete the selected local policy snapshot?": "Ta bort den valda lokala policyögonblicksbilden?",
})

SWEDISH_REVIEW.update({
    "Privacy": "Integritet",
    "Secrets only (identifiers visible)": "Endast hemligheter (identifierare visas)",
    "Obfuscate exports and external integrations (recommended)": "Obfuskera exporter och externa integrationer (rekommenderas)",
    "Obfuscate exports, integrations, and on-screen data": "Obfuskera exporter, integrationer och data på skärmen",
    "Identifier obfuscation:": "Obfuskering av identifierare:",
    "Credentials and authentication material are always masked. Identifier pseudonyms are stable until the local pseudonym key is rotated; no original-to-pseudonym mapping is stored.": "Autentiseringsuppgifter och autentiseringsmaterial maskeras alltid. Pseudonymer för identifierare är stabila tills den lokala pseudonymnyckeln roteras; ingen koppling mellan original och pseudonym lagras.",
    "Usernames, display names, and email addresses": "Användarnamn, visningsnamn och e-postadresser",
    "IPv4 and IPv6 addresses": "IPv4- och IPv6-adresser",
    "Hostnames, domains, and URL hosts": "Värdnamn, domäner och URL-värdar",
    "Tenant, customer, organization, and environment names": "Tenant-, kund-, organisations- och miljönamn",
    "Object IDs, UUIDs, GUIDs, and client identifiers": "Objekt-ID:n, UUID:n, GUID:n och klientidentifierare",
    "Rotate local pseudonym key": "Rotera lokal pseudonymnyckel",
    "Creates new pseudonyms for future views and exports. Existing files are not modified.": "Skapar nya pseudonymer för framtida vyer och exporter. Befintliga filer ändras inte.",
    "Obfuscation preview": "Förhandsgranskning av obfuskering",
    "Preview of exported or externally shared data using synthetic examples:": "Förhandsgranskning av exporterade eller externt delade data med syntetiska exempel:",
    "Rotate pseudonym key": "Rotera pseudonymnyckel",
    "Rotate the local pseudonym key? Future pseudonyms will change and will no longer correlate with previous exports.": "Rotera den lokala pseudonymnyckeln? Framtida pseudonymer ändras och kan inte längre korreleras med tidigare exporter.",
    "The local pseudonym key was rotated. No credentials or source identifiers were stored.": "Den lokala pseudonymnyckeln roterades. Inga autentiseringsuppgifter eller ursprungliga identifierare lagrades.",
    "Abstract zero trust security network": "Abstrakt zero trust-säkerhetsnätverk",
    "Security investigation evidence map": "Beviskarta för säkerhetsutredning",
    "Security posture report artwork": "Illustration för säkerhetslägesrapport",
    "Export visual report as HTML": "Exportera visuell rapport som HTML",
    "Posture score": "Säkerhetspoäng",
    "Local requests": "Lokala begäranden",
    "Failed requests": "Misslyckade begäranden",
    "Audit integrity": "Revisionsintegritet",
    "No local findings.": "Inga lokala fynd.",
    "No recent evidence.": "Inget aktuellt bevisunderlag.",
    "Security findings": "Säkerhetsfynd",
    "Recent evidence": "Aktuellt bevisunderlag",
    "Generated locally; credentials are never included.": "Genererad lokalt; autentiseringsuppgifter inkluderas aldrig.",
})

SWEDISH_REVIEW.update({
    "Default": "Standard",
    "Environment": "Miljö",
    "Active": "Aktiv",
    "Default API": "Standard-API",
    "Configured host": "Konfigurerad värd",
    "Keychain secrets": "Hemligheter i nyckelringen",
    "{count} configured": "{count} konfigurerade",
    "Create profile": "Skapa profil",
    "Rename profile": "Byt namn på profil",
    "Delete profile": "Ta bort profil",
    "Activate profile": "Aktivera profil",
    "Profile name:": "Profilnamn:",
    "Each environment keeps separate tenant hosts, client identifiers, enabled products, and keychain credentials. Creating a profile copies only non-secret configuration. Activating a profile clears every in-memory API session.": "Varje miljö håller tenantvärdar, klientidentifierare, aktiverade produkter och autentiseringsuppgifter i nyckelringen åtskilda. När en profil skapas kopieras endast konfiguration som inte är hemlig. När en profil aktiveras rensas alla API-sessioner i minnet.",
    "Enter a unique profile name without path separators (maximum 60 characters).": "Ange ett unikt profilnamn utan sökvägsavgränsare (högst 60 tecken).",
    "The profile was created with non-secret settings only. Open Settings after activation to add its keychain credentials.": "Profilen skapades endast med inställningar som inte är hemliga. Öppna Inställningar efter aktivering för att lägga till profilens autentiseringsuppgifter i nyckelringen.",
    "The default or active profile cannot be deleted. Activate another profile first.": "Standardprofilen eller den aktiva profilen kan inte tas bort. Aktivera först en annan profil.",
    "Delete profile “{name}” and all of its keychain credentials? This cannot be undone.": "Ta bort profilen ”{name}” och alla dess autentiseringsuppgifter i nyckelringen? Detta kan inte ångras.",
    "The profile could not be deleted because its keychain credentials could not be removed.": "Profilen kunde inte tas bort eftersom dess autentiseringsuppgifter inte kunde tas bort från nyckelringen.",
    "Current environment: {name}": "Aktuell miljö: {name}",
    "All environments": "Alla miljöer",
    "Active environment: {name}": "Aktiv miljö: {name}",
    "The selected environment profile is unavailable.": "Den valda miljöprofilen är inte tillgänglig.",
    "Environment profile active: {name}. Sessions and request data were cleared.": "Miljöprofilen {name} är aktiv. Sessioner och begärandedata har rensats.",
    "This request belongs to another environment. Activate that environment profile before loading it.": "Begäran tillhör en annan miljö. Aktivera den miljöprofilen innan begäran läses in.",
    "Data scope:": "Dataomfång:",
    "Data scope: {name}": "Dataomfång: {name}",
    "All environments (cross-tenant overview)": "Alla miljöer (översikt över flera tenanter)",
    "Analytics are tenant-isolated by default. Cross-tenant scope is explicit and available in Advanced mode.": "Analysdata är som standard isolerade per tenant. Omfång över flera tenanter väljs uttryckligen och är tillgängligt i avancerat läge.",
    "Showing local evidence for: {name}": "Visar lokalt underlag för: {name}",
    "Cross-tenant overview is active. Exports and integrations will include all local environments.": "Översikt över flera tenanter är aktiv. Exporter och integrationer kommer att omfatta alla lokala miljöer.",
})

SWEDISH_REVIEW.update({
    "Identity": "Identitet", "Address": "Adress", "Device": "Enhet", "Application": "Applikation", "Policy": "Policy",
    "Service": "Tjänst", "Endpoint": "Slutpunkt", "Infrastructure": "Infrastruktur", "Indicator": "Indikator",
    "Activity": "Aktivitet", "Resource": "Resurs", "Normal": "Normal",
    "Correlate retained local activity with every object in the current masked REST or GraphQL response. Paths are investigation hypotheses, never proof of compromise, and prepared chains never run automatically.": "Korrelera bevarad lokal aktivitet med varje objekt i det aktuella maskerade REST- eller GraphQL-svaret. Vägar är undersökningshypoteser, aldrig bevis på intrång, och förberedda kedjor körs aldrig automatiskt.",
    "Include current API/GraphQL response": "Inkludera aktuellt API-/GraphQL-svar",
    "Correlate entities": "Korrelera entiteter",
    "Export entity graph": "Exportera entitetsgraf",
    "Evidence timeline": "Tidslinje för underlag",
    "Entities": "Entiteter", "Relationships": "Relationer", "Potential paths": "Potentiella vägar", "High-risk entities": "Högriskentiteter",
    "Filter entities:": "Filtrera entiteter:",
    "Name, type, risk, or evidence source": "Namn, typ, risk eller underlagskälla",
    "SOC entity and potential attack-path graph": "SOC-graf över entiteter och potentiella attackvägar",
    "Select an entity to inspect its local evidence.": "Välj en entitet för att granska dess lokala underlag.",
    "Target": "Mål", "Hops": "Hopp",
    "Observed relationship chain across local evidence; validate before treating it as an exploitable attack path.": "Observerad relationskedja i lokalt underlag; validera innan den behandlas som en exploaterbar attackväg.",
    "Entity graph": "Entitetsgraf",
    "Explainable signals are derived only from retained local evidence and the selected response. Validate them against authoritative product telemetry.": "Förklarbara signaler härleds endast från bevarat lokalt underlag och det valda svaret. Validera dem mot auktoritativ produkttelemetri.",
    "Signal": "Signal", "Entity": "Entitet", "Correlated signals": "Korrelerade signaler",
    "Endpoint failure evidence": "Underlag för slutpunktsfel",
    "Relationship concentration": "Relationskoncentration",
    "Security indicator observed": "Säkerhetsindikator observerad",
    "The endpoint has locally retained server or network failure evidence.": "Slutpunkten har lokalt bevarat underlag för server- eller nätverksfel.",
    "The entity is connected to an unusually broad set of locally observed relationships.": "Entiteten är ansluten till en ovanligt bred uppsättning lokalt observerade relationer.",
    "A threat, exposure, vulnerability, or indicator-like object was present in the response.": "Ett hot, en exponering, en sårbarhet eller ett indikatorliknande objekt fanns i svaret.",
    "The graph reached its local safety limit; use the filter or export the evidence for complete review.": "Grafen nådde sin lokala säkerhetsgräns; använd filtret eller exportera underlaget för fullständig granskning.",
    "No correlatable entities are available in the selected local scope.": "Det finns inga korrelerbara entiteter i det valda lokala omfånget.",
    "{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}": "{type}: {label} · risk {risk} · {evidence} underlagspost(er) · {relationships} relation(er) · källor: {sources}",
})

SWEDISH_REVIEW.update({
    "Value": "Värde", "Score": "Poäng",
    "Continuously evaluate a transparent local evidence baseline. Framework mappings are navigational aids—not certification—and no tenant query or remediation runs automatically.": "Utvärdera kontinuerligt en transparent lokal underlagsbaslinje. Ramverksmappningar är navigeringshjälpmedel – inte certifiering – och ingen tenantfråga eller åtgärd körs automatiskt.",
    "Framework view:": "Ramverksvy:", "All local controls": "Alla lokala kontroller", "NIST CSF 2.0 functions": "NIST CSF 2.0-funktioner", "CISA Zero Trust pillars": "CISA Zero Trust-pelare",
    "Include proposed policy from Policy diff": "Inkludera föreslagen policy från Policyjämförelse", "Evaluate now": "Utvärdera nu",
    "Assurance score": "Säkerhetspoäng", "Passed": "Godkända", "Not evaluated": "Inte utvärderade", "Evidence coverage": "Underlagstäckning",
    "Control": "Kontroll", "Control objective": "Kontrollmål", "Framework mapping": "Ramverksmappning", "Recommendation": "Rekommendation",
    "Leadership narrative": "Ledningssammanfattning", "Local baseline:": "Lokal baslinje:", "Save assessment baseline": "Spara bedömningsbaslinje",
    "Export signed evidence": "Exportera signerat underlag", "Verify signed evidence": "Verifiera signerat underlag", "Continuous assurance": "Kontinuerlig säkerhetsbedömning",
    "No comparison baseline": "Ingen jämförelsebaslinje", "{time} · score {score}/100": "{time} · poäng {score}/100",
    "Audit evidence integrity": "Auditunderlagets integritet", "Review and restore the local hash-linked audit trail.": "Granska och återställ den lokala hash-länkade auditloggen.",
    "Operational evidence available": "Operativt underlag tillgängligt", "Collect or import masked read-only evidence for the selected environment.": "Samla in eller importera maskerat skrivskyddat underlag för den valda miljön.",
    "API health and anomaly monitoring": "API-hälsa och avvikelseövervakning", "Investigate repeated failures, latency regressions, and rate limiting.": "Undersök upprepade fel, försämrad svarstid och hastighetsbegränsning.",
    "Least-privilege policy baseline": "Policybaslinje för minsta behörighet", "Constrain unconditional allow rules and validate order in Policy Twin.": "Begränsa ovillkorliga tillåt-regler och validera ordningen i Policytvillingen.",
    "Reviewed write activity": "Granskad skrivaktivitet", "Require a recorded review and rollback artifact for write activity.": "Kräv en registrerad granskning och en återställningsartefakt för skrivaktivitet.",
    "Incident evidence readiness": "Beredskap för incidentunderlag", "Prepare and export masked investigation evidence for unresolved failures.": "Förbered och exportera maskerat undersökningsunderlag för olösta fel.",
    "Recovery evidence available": "Återställningsunderlag tillgängligt", "Save a policy snapshot or reviewed rollback artifact before change.": "Spara en policyögonblicksbild eller granskad återställningsartefakt före ändring.",
    "Pass": "Godkänd", "Fail": "Underkänd",
    "Local assurance requires attention": "Den lokala säkerhetsbedömningen kräver åtgärd", "No failing controls in the evaluated local scope": "Inga underkända kontroller i det utvärderade lokala omfånget",
    "{passed} evaluated control(s) passed and {failed} failed.": "{passed} utvärderad(e) kontroll(er) godkändes och {failed} underkändes.",
    "Evidence coverage is {coverage}% and local posture is {posture}/100.": "Underlagstäckningen är {coverage} % och den lokala säkerhetsnivån är {posture}/100.",
    "The assurance score changed by {delta:+d} points versus the selected baseline.": "Säkerhetspoängen ändrades med {delta:+d} poäng jämfört med den valda baslinjen.",
    "Prioritized actions": "Prioriterade åtgärder", "Now": "Nu",
    "Local evidence limitation: validate results against authoritative tenant and governance records.": "Begränsning i lokalt underlag: validera resultaten mot auktoritativa tenant- och styrningsregister.",
    "Assessment {identifier} · {frameworks} · local evidence only, not certification.": "Bedömning {identifier} · {frameworks} · endast lokalt underlag, inte certifiering.",
    "Select one environment before saving an assurance baseline.": "Välj en miljö innan du sparar en säkerhetsbedömningsbaslinje.",
    "Signed evidence": "Signerat underlag", "The system keychain could not store the evidence signing key.": "Systemets nyckelring kunde inte lagra nyckeln för underlagssignering.",
    "The protected evidence signing key is invalid. Rotate it in Settings before signing.": "Den skyddade nyckeln för underlagssignering är ogiltig. Rotera den i Inställningar före signering.",
    "Signed evidence exported · public-key fingerprint {fingerprint}": "Signerat underlag exporterat · den publika nyckelns fingeravtryck {fingerprint}",
    "Signature verified. Payload digest {digest}; public-key fingerprint {fingerprint}.": "Signaturen verifierades. Innehållets kontrollsumma {digest}; den publika nyckelns fingeravtryck {fingerprint}.",
    "Signature verification failed: {reason}": "Signaturverifieringen misslyckades: {reason}",
    "Rotate evidence signing key": "Rotera nyckel för underlagssignering",
    "Creates a new Ed25519 key in the system keychain. Existing signed packages remain verifiable with their embedded public keys.": "Skapar en ny Ed25519-nyckel i systemets nyckelring. Befintliga signerade paket kan fortfarande verifieras med sina inbäddade publika nycklar.",
    "Create a new local evidence signing identity? Existing signed packages remain verifiable, but future packages will have a different public-key fingerprint.": "Skapa en ny lokal identitet för underlagssignering? Befintliga signerade paket kan fortfarande verifieras, men framtida paket får ett annat fingeravtryck för den publika nyckeln.",
    "A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}": "En ny signeringsnyckel lagrades i systemets nyckelring. Den publika nyckelns fingeravtryck: {fingerprint}",
    "Assurance score: {score}/100 · evidence coverage {coverage}%": "Säkerhetspoäng: {score}/100 · underlagstäckning {coverage} %",
    "Executive assurance narrative": "Ledningens säkerhetssammanfattning", "Evidence coverage: {coverage}%": "Underlagstäckning: {coverage} %",
})

SWEDISH_REVIEW.update({
    "No journey telemetry in the current response": "Ingen resetelemetri i det aktuella svaret",
    "No observed data": "Inga observerade data",
    "Trace observed digital experience from user and device through network and service edge to the application. The parser consumes the complete current REST or GraphQL response, marks missing stages explicitly, and never queries the tenant automatically.": "Spåra den observerade digitala upplevelsen från användare och enhet via nätverk och service edge till programmet. Parsern använder hela det aktuella REST- eller GraphQL-svaret, markerar saknade steg tydligt och frågar aldrig tenanten automatiskt.",
    "Experience score": "Upplevelsepoäng", "Latency": "Latens", "Packet loss": "Paketförlust", "Journey issues": "Reseproblem",
    "Observed user-to-application experience journey": "Observerad upplevelseresa från användare till program",
    "Trend metric:": "Trendmätvärde:", "Observed value": "Observerat värde", "Stage": "Steg", "Metric": "Mätvärde",
    "Analyze current experience response": "Analysera aktuellt upplevelsesvar", "Export masked journey": "Exportera maskerad resa", "Experience journey": "Upplevelseresa",
    "Build and test explainable detections against retained local request history. Rules use a bounded declarative grammar—no Python, eval, tenant writes, network calls, or automatic remediation.": "Bygg och testa förklarbara detekteringar mot sparad lokal begärandehistorik. Regler använder en begränsad deklarativ grammatik – ingen Python, eval, tenantskrivning, nätverksanrop eller automatisk åtgärd.",
    "Template:": "Mall:", "Server errors": "Serverfel", "Rate-limit responses": "Svar med hastighetsbegränsning", "High request latency": "Hög begärandelatens", "Write activity": "Skrivaktivitet", "Authentication failures": "Autentiseringsfel",
    "Anomaly sensitivity:": "Avvikelsekänslighet:", "Relaxed": "Avslappnad", "Balanced": "Balanserad", "Sensitive": "Känslig",
    "Declarative detection rule JSON": "JSON för deklarativ detekteringsregel", "Validate rule": "Validera regel", "Run local detection": "Kör lokal detektering", "Analyze adaptive anomalies": "Analysera adaptiva avvikelser", "Export masked detection evidence": "Exportera maskerat detekteringsunderlag",
    "Duration": "Varaktighet", "Endpoint": "Slutpunkt", "Observed": "Observerat", "Detection lab": "Detekteringslabb",
    "Device score": "Enhetspoäng", "Application score": "Programpoäng", "Service-edge score": "Service edge-poäng", "Jitter": "Jitter", "DNS time": "DNS-tid", "TCP connect time": "TCP-anslutningstid", "Page fetch time": "Sidhämtningstid", "Availability": "Tillgänglighet", "Memory": "Minne",
    "Network": "Nätverk", "Service edge": "Service edge", "Application": "Program", "User": "Användare", "Device": "Enhet",
    "No current API or GraphQL response is available. Run or import a ZDX/OneAPI query, then analyze again.": "Inget aktuellt API- eller GraphQL-svar är tillgängligt. Kör eller importera en ZDX-/OneAPI-fråga och analysera sedan igen.",
    "Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}": "Observerade {stages} av 5 resesteg i {samples} mätvärdesprov. {disclaimer}",
    "Rule is valid and can be evaluated locally.": "Regeln är giltig och kan utvärderas lokalt.", "Rule validation failed: {errors}": "Regelvalideringen misslyckades: {errors}",
    "Examined {examined} local event(s); {matched} matched. {explanation}": "Granskade {examined} lokala händelser; {matched} matchade. {explanation}",
    "Endpoint {number} current": "Slutpunkt {number}, aktuell", "Endpoint {number} threshold": "Slutpunkt {number}, tröskelvärde",
    "Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}": "Den adaptiva analysen utvärderade {endpoints} slutpunkter och hittade {findings} förklarbara avvikelseindikationer. Metod: {method}",
    "Overall experience score is below 70": "Den övergripande upplevelsepoängen är under 70", "Device score is below 70": "Enhetspoängen är under 70", "Application score is below 70": "Programpoängen är under 70", "Service-edge score is below 70": "Service edge-poängen är under 70",
    "Observed latency exceeds 250 ms": "Observerad latens överstiger 250 ms", "Observed packet loss exceeds 2%": "Observerad paketförlust överstiger 2 %", "Observed jitter exceeds 40 ms": "Observerat jitter överstiger 40 ms", "Observed availability is below 99%": "Observerad tillgänglighet är under 99 %",
    "Schema-tolerant local interpretation of observed API fields. Thresholds are transparent operational hints, not Zscaler health verdicts or SLA determinations.": "Schematolerant lokal tolkning av observerade API-fält. Tröskelvärdena är transparenta driftindikationer, inte Zscaler-hälsobesked eller SLA-bedömningar.",
    "Matched events where {mode} of {conditions} declarative condition(s) were true.": "Matchade händelser där {mode} av {conditions} deklarativa villkor var uppfyllda.", "All": "Alla", "Any": "Något",
    "Median absolute deviation (MAD), scaled by 1.4826 with a 10%/10 ms noise floor": "Absolut medianavvikelse (MAD), skalad med 1,4826 och ett brusgolv på 10 %/10 ms",
})

SWEDISH_REVIEW.update({
    "Use guided, locally tracked response and recovery checklists. A completed step records only operator intent in the local audit trail; it never changes a tenant or closes an authoritative incident.": "Använd guidade, lokalt spårade checklistor för respons och återställning. Ett slutfört steg registrerar endast operatörens avsikt i det lokala revisionsspåret; det ändrar aldrig en tenant eller stänger en auktoritativ incident.",
    "Playbook:": "Playbook:", "API/service disruption": "API-/tjänsteavbrott", "High-risk policy change": "Policyändring med hög risk", "Digital experience degradation": "Försämrad digital upplevelse", "Possible credential exposure": "Möjlig exponering av autentiseringsuppgifter", "Ransomware containment support": "Stöd för begränsning av utpressningsprogram",
    "Mark selected step complete": "Markera valt steg som slutfört", "Export masked playbook evidence": "Exportera maskerat playbook-underlag", "Step": "Steg", "Guidance": "Vägledning", "Local evidence": "Lokalt underlag", "Response playbooks": "Respons-playbooks",
    "Smart API planner (review only)": "Smart API-planerare (endast granskning)", "Describe a goal to rank documented Automation Hub operations deterministically. Read operations are preferred; tenant values are never guessed and nothing runs automatically.": "Beskriv ett mål för att rangordna dokumenterade Automation Hub-åtgärder deterministiskt. Läsåtgärder prioriteras; tenantvärden gissas aldrig och ingenting körs automatiskt.",
    "Example: investigate slow ZDX application experience": "Exempel: utred långsam ZDX-programupplevelse", "Plan documented operations": "Planera dokumenterade åtgärder", "Copy safe reads to API Chains": "Kopiera säkra läsningar till API-kedjor", "Score": "Poäng",
    "Change owner": "Ändringsägare", "Independent reviewer": "Oberoende granskare", "Owner:": "Ägare:", "Maintenance window confirmed": "Underhållsfönster bekräftat", "Local simulation reviewed": "Lokal simulering granskad", "Rollback prepared": "Rollback förberedd", "Gate": "Kontrollpunkt", "Required": "Obligatorisk", "Verify rollback artifact": "Verifiera rollback-underlag",
    "Complete": "Slutförd", "Pending": "Väntar", "Recorded in local audit trail": "Registrerat i lokalt revisionsspår", "No completion evidence": "Inget underlag för slutförande", "Select a playbook step first.": "Välj först ett playbook-steg.", "Mark step complete": "Markera steg som slutfört", "Record this step as completed in the local audit trail? This does not perform the action or update an authoritative incident.": "Registrera steget som slutfört i det lokala revisionsspåret? Detta utför inte åtgärden och uppdaterar ingen auktoritativ incident.",
    "Describe an administrative or investigation goal first.": "Beskriv först ett administrations- eller utredningsmål.", "Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.": "Hittade {matches} dokumenterade träffar; föreslog {proposed}, inklusive {writes} skrivåtgärder. Granska parametrar och dokumentation innan en kedja skapas.",
    "Smart API planner": "Smart API-planerare", "Create a plan with at least one read operation first.": "Skapa först en plan med minst en läsåtgärd.", "Planner output copied for review. Validate the chain, supply required path values, and approve it separately before execution.": "Planerarens utdata kopierades för granskning. Validera kedjan, ange obligatoriska sökvägsvärden och godkänn den separat före körning.",
    "Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)": "Ändringsrisk: {risk} · {score}/100 · {blocking} blockerande kontrollpunkter", "Change reference recorded": "Ändringsreferens registrerad", "Change owner recorded": "Ändringsägare registrerad", "Independent reviewer recorded": "Oberoende granskare registrerad", "Local policy simulation reviewed": "Lokal policysimulering granskad", "Rollback artifact prepared": "Rollback-underlag förberett", "Local approval recorded": "Lokalt godkännande registrerat", "Passed": "Godkänd", "Blocked": "Blockerad", "Optional": "Valfri",
    "Rollback artifact integrity verified. This does not authorize applying it.": "Rollback-underlagets integritet verifierades. Detta ger inte behörighet att tillämpa det.", "Rollback verification failed: {reason}": "Rollback-verifieringen misslyckades: {reason}",
    "Confirm scope from retained failures": "Bekräfta omfattning från sparade fel", "Check rate-limit and service-health evidence": "Kontrollera underlag för hastighetsgränser och tjänstehälsa", "Collect read-only product status": "Samla in produktstatus med läsbehörighet", "Correlate affected entities": "Korrelera berörda entiteter", "Export masked incident evidence": "Exportera maskerat incidentunderlag", "Record closure decision": "Registrera avslutsbeslut",
    "Capture current policy baseline": "Fånga aktuell policybaslinje", "Run policy diff and best-practice checks": "Kör policyjämförelse och kontroller av bästa praxis", "Run Policy Twin and decision simulation": "Kör Policy Twin och beslutssimulering", "Prepare rollback artifact": "Förbered rollback-underlag", "Record independent review": "Registrera oberoende granskning", "Export change package": "Exportera ändringspaket",
    "Identify affected user and application scope": "Identifiera berörda användare och programomfattning", "Inspect device metrics": "Granska enhetsmätvärden", "Inspect network latency, loss and jitter": "Granska nätverkslatens, förlust och jitter", "Inspect service-edge path": "Granska service edge-sökväg", "Compare application response": "Jämför programsvar", "Export masked journey evidence": "Exportera maskerat reseunderlag",
    "Stop copying or exporting raw material": "Sluta kopiera eller exportera råmaterial", "Rotate the affected credential outside this client": "Rotera berörda autentiseringsuppgifter utanför klienten", "Clear in-memory sessions": "Rensa sessioner i minnet", "Review masked audit evidence": "Granska maskerat revisionsunderlag", "Validate least-privilege access": "Validera åtkomst med minsta behörighet", "Record containment and recovery": "Registrera begränsning och återställning",
    "Validate the alert in authoritative security tooling": "Validera larmet i auktoritativa säkerhetsverktyg", "Identify users, devices and applications": "Identifiera användare, enheter och program", "Preserve masked evidence": "Bevara maskerat underlag", "Prepare containment changes for independent approval": "Förbered begränsningsändringar för oberoende godkännande", "Track recovery prerequisites": "Spåra förutsättningar för återställning", "Record lessons learned": "Registrera lärdomar",
})

SWEDISH_REVIEW.update({
    "JSON Lines (SIEM/SOAR)": "JSON Lines (SIEM/SOAR)", "Export masked security events": "Exportera maskerade säkerhetshändelser", "Export read-only MCP manifest": "Exportera skrivskyddat MCP-manifest", "Export Terraform review handoff": "Exportera Terraform-underlag för granskning",
    "Exported {count} masked local event(s) as {format}. No data was sent automatically.": "Exporterade {count} maskerade lokala händelser som {format}. Inga data skickades automatiskt.",
    "Created a non-executable Terraform review handoff. Run terraformer and terraform plan only after independent review; this client never applies it.": "Skapade ett icke körbart Terraform-underlag för granskning. Kör terraformer och terraform plan först efter oberoende granskning; klienten tillämpar det aldrig.",
})

SWEDISH_REVIEW.update({
    "Inspect the complete current REST or GraphQL response for explicit internet exposure, vulnerability severity and broad or write-capable access. Findings are local hypotheses and deception suggestions are never deployed automatically.": "Granska hela det aktuella REST- eller GraphQL-svaret efter uttrycklig internetexponering, sårbarhetsgrad och bred eller skrivbar åtkomst. Fynden är lokala hypoteser och deception-förslag driftsätts aldrig automatiskt.",
    "Exposure signals": "Exponeringssignaler", "High-risk assets": "Högrisktillgångar", "Access findings": "Åtkomstfynd", "Broad privileges": "Breda behörigheter", "Asset": "Tillgång", "Risk score": "Riskpoäng", "Observed factors": "Observerade faktorer", "Subject": "Subjekt", "Permission field": "Behörighetsfält", "Defensive deception opportunities": "Defensiva deception-möjligheter",
    "Analyze current exposure and access": "Analysera aktuell exponering och åtkomst", "Export masked exposure evidence": "Exportera maskerat exponeringsunderlag", "Investigation notebook": "Utredningsanteckningar", "Note title": "Anteckningsrubrik", "Comma-separated tags": "Kommaseparerade taggar", "Masked investigation observations, decisions and follow-up": "Maskerade utredningsobservationer, beslut och uppföljning", "Save local note": "Spara lokal anteckning", "Export masked notebook": "Exportera maskerade anteckningar", "Title": "Rubrik", "Tags": "Taggar", "Preview": "Förhandsvisning", "Exposure & access": "Exponering och åtkomst",
    "Explicit broad or write-capable access observed; validate least privilege and assignment context.": "Uttrycklig bred eller skrivbar åtkomst observerades; validera minsta behörighet och tilldelningskontext.", "Consider a monitored decoy resource near exposed paths": "Överväg en övervakad skenresurs nära exponerade sökvägar", "Consider a non-production canary permission for privileged-path monitoring": "Överväg en icke-produktionsbaserad kanariebehörighet för övervakning av privilegierade sökvägar", "Maintain an exposure and least-privilege baseline": "Underhåll en baslinje för exponering och minsta behörighet", "Suggestion only; design and approve it in authoritative security and governance tooling.": "Endast ett förslag; utforma och godkänn det i auktoritativa säkerhets- och styrningsverktyg.",
    "Select one environment before saving an investigation note.": "Välj en miljö innan en utredningsanteckning sparas.", "Notebook title and body are required": "Anteckningsrubrik och innehåll krävs",
})

SWEDISH_REVIEW.update({
    "Preview export": "Förhandsgranska export",
    "Table": "Tabell",
    "Chart": "Diagram",
    "JSON structure": "JSON-struktur",
    "Tree": "Träd",
    "AI Assistant": "AI-assistent",
    "Ask a OneAPI question, e.g. list ZPA application segments": "Ställ en OneAPI-fråga, t.ex. lista ZPA-programsegment",
    "Find API request": "Hitta API-begäran",
    "Run selected request": "Kör vald begäran",
    "Export result": "Exportera resultat",
    "Ask in plain language. Sensitive values are masked before display or export.": "Fråga med vanligt språk. Känsliga värden maskeras före visning eller export.",
    "AI request preview appears here before execution.": "Förhandsvisningen av AI-begäran visas här före körning.",
    "Bar chart": "Stapeldiagram",
    "Line chart": "Linjediagram",
    "Pie chart": "Cirkeldiagram",
    "API &Error Codes...": "API-&felkoder...",
    "ZCC credentials not configured. Please go to Settings.": "ZCC-autentiseringsuppgifter är inte konfigurerade. Gå till Inställningar.",
    "No matching API operation was found. Try product and resource names.": "Ingen matchande API-åtgärd hittades. Prova produkt- och resursnamn.",
    "Suggested request: {method} {name}. Review path variables before running.": "Föreslagen begäran: {method} {name}. Granska sökvägsvariabler före körning.",
    "Operation": "Åtgärd",
    "Method": "Metod",
    "Ask the AI assistant for a request first.": "Be först AI-assistenten om en begäran.",
    "Review AI request": "Granska AI-begäran",
    "Review the URL, path variables, and parameters in the preview before sending. Send this request now?": "Granska webbadressen, sökvägsvariablerna och parametrarna i förhandsvisningen före sändning. Vill du skicka begäran nu?",
    "Asking configured LLM…": "Frågar konfigurerad LLM…",
    "LLM unavailable; using the local catalog assistant.": "LLM är inte tillgänglig; den lokala katalogassistenten används.",
    "Configure an AI endpoint and model in Settings.": "Konfigurera en AI-slutpunkt och modell i Inställningar.",
    "AI endpoint must use HTTP or HTTPS.": "AI-slutpunkten måste använda HTTP eller HTTPS.",
    "External AI is disabled. Enable it explicitly in Settings.": "Extern AI är inaktiverad. Aktivera den uttryckligen i Inställningar.",
    "External AI endpoints must use HTTPS.": "Externa AI-slutpunkter måste använda HTTPS.",
    "AI question is too long (maximum 2000 characters).": "AI-frågan är för lång (högst 2 000 tecken).",
    "Masked response exported": "Maskerat svar exporterades",
    "AI result exported": "AI-resultatet exporterades",
    "Visualized {count} records as a masked table. Export is available from the AI Assistant tab.": "Visualiserade {count} poster som en maskerad tabell. Export är tillgänglig på fliken AI-assistent.",
    "Yes": "Ja",
    "No": "Nej",
    "Enter a name before saving the GraphQL query.": "Ange ett namn innan GraphQL-frågan sparas.",
    "GraphQL query saved securely": "GraphQL-frågan sparades säkert",
    "Saved GraphQL query is unavailable.": "Den sparade GraphQL-frågan är inte tillgänglig.",
    "GraphQL introspection query prepared. Review the endpoint before sending.": "GraphQL-introspektionsfrågan har förberetts. Granska slutpunkten före sändning.",
    "GraphQL schema saved securely": "GraphQL-schemat sparades säkert",
    "GraphQL schema": "GraphQL-schema",
    "No saved introspection result exists for this endpoint.": "Det finns inget sparat introspektionsresultat för den här slutpunkten.",
    "{count} GraphQL errors": "{count} GraphQL-fel",
    "extensions included": "tillägg inkluderade",
    "Explore APIs, review changes, and operate safely": "Utforska API:er, granska ändringar och arbeta säkert",
    "1 · Environment": "1 · Miljö",
    "Select or create a tenant environment profile": "Välj eller skapa en tenantmiljöprofil",
    "2 · Analyze": "2 · Analysera",
    "Open dashboards, audits, policy diffs, and response analysis": "Öppna instrumentpaneler, revisioner, policyjämförelser och svarsanalys",
    "3 · Change": "3 · Ändra",
    "Open policy diff and policy-as-code export": "Öppna policyjämförelse och policy-as-code-export",
    "Settings": "Inställningar",
    "GraphQL request": "GraphQL-begäran",
    "Send the request body as a GraphQL query and preserve data, errors, and extensions.": "Skicka begärandetexten som en GraphQL-fråga och bevara data, fel och tillägg.",
    "Saved GraphQL query name": "Namn på sparad GraphQL-fråga",
    "Save query": "Spara fråga",
    "Load query": "Läs in fråga",
    "Rename query": "Byt namn på fråga",
    "Delete query": "Ta bort fråga",
    "Introspect schema": "Introspektera schema",
    "Load saved schema": "Läs in sparat schema",
    "Field": "Fält",
    "Request History": "Begärandehistorik",
    "Batch": "Batchbearbetning",
    "Requests": "Begäranden",
    "Success rate": "Lyckandefrekvens",
    "Active environment": "Aktiv miljö",
    "Recent request outcomes": "Senaste begäranderesultat",
    "Time": "Tid",
    "Recent activity": "Senaste aktivitet",
    "Official integrations are optional. Credentials remain in the system keychain and no command runs automatically.": "Officiella integrationer är valfria. Autentiseringsuppgifter stannar i systemets nyckelring och inget kommando körs automatiskt.",
    "Recommended use": "Rekommenderad användning",
    "Check local integrations": "Kontrollera lokala integrationer",
    "Prepare Terraform import": "Förbered Terraform-import",
    "Prepare MCP connection": "Förbered MCP-anslutning",
    "Prepare SDK configuration": "Förbered SDK-konfiguration",
    "Copy reviewed command": "Kopiera granskat kommando",
    "Integrations": "Integrationer",
    "Event": "Händelse",
    "Details": "Detaljer",
    "Finding": "Fynd",
    "Playbook:": "Åtgärdsplan:",
    "Audit chain is valid": "Revisionskedjan är giltig",
    "Audit chain needs review": "Revisionskedjan behöver granskas",
    "Success": "Lyckades",
    "Other": "Annat",
    "Use OneAPI or legacy clients locally": "Använd OneAPI- eller äldre klienter lokalt",
    "AI-assisted, tool-scoped exploration": "AI-assisterad, verktygsbegränsad utforskning",
    "Export existing ZIA/ZPA configuration to Terraform": "Exportera befintlig ZIA-/ZPA-konfiguration till Terraform",
    "Available": "Tillgänglig",
    "Not installed": "Inte installerad",
    "Prepare an integration first.": "Förbered först en integration.",
    "Local catalog assistant": "Lokal katalogassistent",
    "OpenAI-compatible cloud": "OpenAI-kompatibelt moln",
    "Local OpenAI-compatible server": "Lokal OpenAI-kompatibel server",
    "AI provider:": "AI-leverantör:",
    "AI endpoint:": "AI-slutpunkt:",
    "Model:": "Modell:",
    "Stored securely in your system keychain": "Lagras säkert i systemets nyckelring",
    "API key:": "API-nyckel:",
    "Allow this app to send the masked question and catalog metadata to an external AI service": "Tillåt programmet att skicka den maskerade frågan och katalogmetadata till en extern AI-tjänst",
    "Clear AI key": "Rensa AI-nyckel",
    "Test AI connection": "Testa AI-anslutning",
    "Configured securely in your system keychain": "Säkert konfigurerad i systemets nyckelring",
    "AI key cleared": "AI-nyckeln rensades",
    "AI connection": "AI-anslutning",
    "Local catalog assistant is ready.": "Den lokala katalogassistenten är klar.",
    "Enter an AI endpoint first.": "Ange först en AI-slutpunkt.",
    "AI connection succeeded.": "AI-anslutningen lyckades.",
    "AI connection failed: {error}": "AI-anslutningen misslyckades: {error}",
    "ZIA Cloud: Removed URL prefix (only hostname needed)": "ZIA-moln: URL-prefixet togs bort (endast värdnamnet behövs)",
    "ZPA Cloud: Removed URL prefix (only hostname needed)": "ZPA-moln: URL-prefixet togs bort (endast värdnamnet behövs)",
    "ZPA: Customer ID is empty — required for most ZPA endpoints": "ZPA: Kund-ID är tomt – krävs för de flesta ZPA-slutpunkter",
    "ZPA: Customer ID should be numeric (got '{value}')": "ZPA: Kund-ID ska vara numeriskt (fick '{value}')",
    "OneAPI: Removed URL prefix from vanity domain": "OneAPI: URL-prefixet togs bort från vanity-domänen",
    "OneAPI: Removed .zslogin.net suffix — only the prefix is needed (e.g. 'acme')": "OneAPI: Suffixet .zslogin.net togs bort – endast prefixet behövs (t.ex. 'acme')",
    "OneAPI: Vanity domain usually has no dots (e.g. 'acme', not '{value}')": "OneAPI: Vanity-domänen innehåller vanligtvis inga punkter (t.ex. 'acme', inte '{value}')",
    "OneAPI: Cloud should be empty (production) or a simple name like 'beta'/'alpha'. Got '{value}' — this looks like a full domain. Leave empty for production.": "OneAPI: Moln ska vara tomt (produktion) eller ett enkelt namn som 'beta'/'alpha'. Fick '{value}' – det ser ut som en fullständig domän. Lämna tomt för produktion.",
    "OneAPI: Customer ID should be numeric (got '{value}')": "OneAPI: Kund-ID ska vara numeriskt (fick '{value}')",
    "ZIdentity: Removed URL prefix from domain": "ZIdentity: URL-prefixet togs bort från domänen",
    "ZIA is enabled but Cloud is empty": "ZIA är aktiverat men Moln är tomt",
    "OneAPI is enabled but Vanity Domain is empty": "OneAPI är aktiverat men Vanity-domän är tomt",
    "OneAPI is enabled but Client ID is empty": "OneAPI är aktiverat men Klient-ID är tomt",
    "Some settings were adjusted or may need attention:": "Vissa inställningar justerades eller kan behöva granskas:",
    "<p>This guide sets up secure OneAPI access and prepares common requests. Credentials are stored in your system keychain; you can change any setting later.</p><p><b>Recommended:</b> use OneAPI for a unified token across supported Zscaler services.</p>": "<p>Den här guiden konfigurerar säker OneAPI-åtkomst och förbereder vanliga begäranden. Autentiseringsuppgifter lagras i systemets nyckelring; du kan ändra alla inställningar senare.</p><p><b>Rekommenderas:</b> använd OneAPI för en gemensam token till Zscaler-tjänster som stöds.</p>",
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
                translation_type = translation.get("type") if translation is not None else None
                if (
                    translation is not None
                    and translation_type not in {"vanished", "obsolete"}
                    and source in SWEDISH_REVIEW
                    and (translation.text == source or translation_type == "unfinished")
                ):
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
