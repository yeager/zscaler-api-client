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
