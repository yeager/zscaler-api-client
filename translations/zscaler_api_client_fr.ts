<?xml version='1.0' encoding='utf-8'?>
<TS version="2.1" language="fr">
    <context>
        <name />
        <message>
            <location filename="../zscaler_config_services.py" line="97" />
            <source>Blank line: use it to separate rule groups for review.</source>
            <translation>Blank line: use it to separate rule groups for review.</translation>
        </message>
        <message>
            <location filename="../zscaler_config_services.py" line="99" />
            <source>Comment: documents intent and is ignored by PAC execution.</source>
            <translation>Comment: documents intent and is ignored by PAC execution.</translation>
        </message>
        <message>
            <location filename="../zscaler_config_services.py" line="101" />
            <source>Required PAC entry point. Browsers call it with the URL and host and expect a proxy decision.</source>
            <translation>Required PAC entry point. Browsers call it with the URL and host and expect a proxy decision.</translation>
        </message>
        <message>
            <location filename="../zscaler_config_services.py" line="103" />
            <source>Wildcard host comparison. Keep patterns specific so unintended destinations are not bypassed.</source>
            <translation>Wildcard host comparison. Keep patterns specific so unintended destinations are not bypassed.</translation>
        </message>
        <message>
            <location filename="../zscaler_config_services.py" line="105" />
            <source>Matches single-label internal host names. This is commonly evaluated before external proxy rules.</source>
            <translation>Matches single-label internal host names. This is commonly evaluated before external proxy rules.</translation>
        </message>
        <message>
            <location filename="../zscaler_config_services.py" line="107" />
            <source>DIRECT bypasses Zscaler for this matching destination. Confirm that bypass is intentional and scoped.</source>
            <translation>DIRECT bypasses Zscaler for this matching destination. Confirm that bypass is intentional and scoped.</translation>
        </message>
        <message>
            <location filename="../zscaler_config_services.py" line="109" />
            <source>PROXY sends matching traffic to the listed service edge. A secondary gateway and DIRECT provide controlled fallback.</source>
            <translation>PROXY sends matching traffic to the listed service edge. A secondary gateway and DIRECT provide controlled fallback.</translation>
        </message>
        <message>
            <location filename="../zscaler_config_services.py" line="111" />
            <source>PAC return decision. Return values must be quoted and rule order determines which decision wins.</source>
            <translation>PAC return decision. Return values must be quoted and rule order determines which decision wins.</translation>
        </message>
        <message>
            <location filename="../zscaler_config_services.py" line="113" />
            <source>Conditional PAC rule. Earlier matching conditions take precedence over later rules.</source>
            <translation>Conditional PAC rule. Earlier matching conditions take precedence over later rules.</translation>
        </message>
        <message>
            <location filename="../zscaler_config_services.py" line="115" />
            <source>PAC JavaScript. Keep expressions deterministic and avoid slow DNS helpers unless specifically required.</source>
            <translation>PAC JavaScript. Keep expressions deterministic and avoid slow DNS helpers unless specifically required.</translation>
        </message>
        <message>
            <location filename="../zscaler_config_services.py" line="123" />
            <source>{location}; network {network}; endpoints {endpoints}.</source>
            <translation>{location}; network {network}; endpoints {endpoints}.</translation>
        </message>
        <message>
            <location filename="../zscaler_config_services.py" line="123" />
            <source>not published</source>
            <translation>not published</translation>
        </message>
        <message>
            <location filename="../zscaler_config_services.py" line="124" />
            <source> Zscaler Configuration match: {details} Network owner: Zscaler Cloud Enforcement Node (bundled official index).</source>
            <translation> Zscaler Configuration match: {details} Network owner: Zscaler Cloud Enforcement Node (bundled official index).</translation>
        </message>
    </context>
    <context>
        <name>AboutDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4456" />
            <source>About ZS API Client</source>
            <translation>À propos de ZS API Client</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4482" />
            <source>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</source>
            <translation>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4515" />
            <source>Disclaimer</source>
            <translation>Avertissement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4518" />
            <source>&lt;p style='color: #666;'&gt;This software is &lt;b&gt;not affiliated with, endorsed by, or supported by Zscaler, Inc.&lt;/b&gt; in any way. This is an independent community project.&lt;/p&gt;&lt;p style='color: #666;'&gt;Zscaler® is a registered trademark of Zscaler, Inc. All product names, logos, and brands are property of their respective owners.&lt;/p&gt;&lt;p style='color: #666;'&gt;&lt;b&gt;NO WARRANTY:&lt;/b&gt; This software is provided "as is" without warranty of any kind. Use at your own risk. The author is not responsible for any damage or data loss resulting from the use of this software.&lt;/p&gt;&lt;p style='color: #666;'&gt;&lt;b&gt;NO SUPPORT:&lt;/b&gt; For Zscaler product support, please contact Zscaler directly through official channels.&lt;/p&gt;</source>
            <translation>&lt;p style='color: #666;'&gt;This software is &lt;b&gt;not affiliated with, endorsed by, or supported by Zscaler, Inc.&lt;/b&gt; in any way. This is an independent community project.&lt;/p&gt;&lt;p style='color: #666;'&gt;Zscaler® is a registered trademark of Zscaler, Inc. All product names, logos, and brands are property of their respective owners.&lt;/p&gt;&lt;p style='color: #666;'&gt;&lt;b&gt;NO WARRANTY:&lt;/b&gt; This software is provided "as is" without warranty of any kind. Use at your own risk. The author is not responsible for any damage or data loss resulting from the use of this software.&lt;/p&gt;&lt;p style='color: #666;'&gt;&lt;b&gt;NO SUPPORT:&lt;/b&gt; For Zscaler product support, please contact Zscaler directly through official channels.&lt;/p&gt;</translation>
        </message>
    </context>
    <context>
        <name>BatchDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5758" />
            <source>Batch Operations</source>
            <translation>Opérations par lots</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5765" />
            <source>Import a CSV file to perform batch operations. The CSV should have columns matching the API parameters.</source>
            <translation>Importez un fichier CSV pour effectuer des opérations par lots. Le CSV doit avoir des colonnes correspondant aux paramètres de l'API.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5774" />
            <source>Select CSV file...</source>
            <translation>Sélectionner un fichier CSV...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5777" />
            <source>Browse...</source>
            <translation>Parcourir...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5789" />
            <source>Operation:</source>
            <translation>Opération :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5793" />
            <source>Create Users (ZIA)</source>
            <translation>Créer des utilisateurs (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5794" />
            <source>Update Users (ZIA)</source>
            <translation>Mettre à jour les utilisateurs (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5795" />
            <source>Delete Users (ZIA)</source>
            <translation>Supprimer des utilisateurs (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5796" />
            <source>Create Locations (ZIA)</source>
            <translation>Créer des emplacements (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5797" />
            <source>URL Lookup (ZIA)</source>
            <translation>Recherche d'URL (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5798" />
            <source>Create App Segments (ZPA)</source>
            <translation>Créer des segments d'application (ZPA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5824" />
            <source>Select CSV File</source>
            <translation>Sélectionner un fichier CSV</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5854" />
            <source>Error</source>
            <translation>Erreur</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5863" />
            <source>Validated: {count} requests are ready for review.</source>
            <translation>Validated: {count} requests are ready for review.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5865" />
            <source>Batch validation failed. Required CSV columns: {columns}</source>
            <translation>Batch validation failed. Required CSV columns: {columns}</translation>
        </message>
    </context>
    <context>
        <name>ChangelogDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4561" />
            <source>What's New</source>
            <translation>Les nouveautés</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4568" />
            <source>&lt;h2&gt;🎉 Updated to version {version}&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;🎉 Updated to version {version}&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4573" />
            <source>&lt;p style='color: #666;'&gt;Updated from version {prev}&lt;/p&gt;</source>
            <translation>&lt;p style='color: #666;'&gt;Updated from version {prev}&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4589" />
            <source>Don't show this after future updates</source>
            <translation>Ne plus afficher après les futures mises à jour</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4610" />
            <source>*Changelog not found*</source>
            <translation>*Changelog introuvable*</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4631" />
            <source>*Could not load changelog: {error}*</source>
            <translation>*Impossible de charger le journal des modifications : {error}*</translation>
        </message>
    </context>
    <context>
        <name>EnvironmentProfilesDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="6001" />
            <location filename="../zscaler_api_client.py" line="6044" />
            <location filename="../zscaler_api_client.py" line="6047" />
            <location filename="../zscaler_api_client.py" line="6055" />
            <source>Environment profiles</source>
            <translation>Profils d'environnement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6003" />
            <source>Each environment keeps separate tenant hosts, client identifiers, enabled products, and keychain credentials. Creating a profile copies only non-secret configuration. Activating a profile clears every in-memory API session.</source>
            <translation>Chaque environnement conserve des hôtes locataires, des identifiants client, des produits activés et des informations d'identification de trousseau distincts. La création d'un profil copie uniquement la configuration non secrète. L'activation d'un profil efface chaque session API en mémoire.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Active</source>
            <translation>Actif</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Name</source>
            <translation>Nom</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Default API</source>
            <translation>API par défaut</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Configured host</source>
            <translation>Hôte configuré</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Keychain secrets</source>
            <translation>Secrets du porte-clés</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6007" />
            <location filename="../zscaler_api_client.py" line="6040" />
            <source>Create profile</source>
            <translation>Créer un profil</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6008" />
            <location filename="../zscaler_api_client.py" line="6052" />
            <source>Rename profile</source>
            <translation>Renommer le profil</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6009" />
            <location filename="../zscaler_api_client.py" line="6063" />
            <location filename="../zscaler_api_client.py" line="6064" />
            <source>Delete profile</source>
            <translation>Supprimer le profil</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6010" />
            <source>Activate profile</source>
            <translation>Activer le profil</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6011" />
            <source>Close</source>
            <translation>Fermer</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6027" />
            <source>{count} configured</source>
            <translation>{count} configured</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6040" />
            <location filename="../zscaler_api_client.py" line="6052" />
            <source>Profile name:</source>
            <translation>Nom du profil :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6044" />
            <location filename="../zscaler_api_client.py" line="6055" />
            <source>Enter a unique profile name without path separators (maximum 60 characters).</source>
            <translation>Entrez un nom de profil unique sans séparateurs de chemin (60 caractères maximum).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6047" />
            <source>The profile was created with non-secret settings only. Open Settings after activation to add its keychain credentials.</source>
            <translation>Le profil a été créé uniquement avec des paramètres non secrets. Ouvrez les paramètres après l'activation pour ajouter ses informations d'identification de trousseau.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6063" />
            <source>The default or active profile cannot be deleted. Activate another profile first.</source>
            <translation>Le profil par défaut ou actif ne peut pas être supprimé. Activez d'abord un autre profil.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6064" />
            <source>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</source>
            <translation>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6066" />
            <source>Secure storage</source>
            <translation>Stockage sécurisé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6066" />
            <source>The profile could not be deleted because its keychain credentials could not be removed.</source>
            <translation>Le profil n'a pas pu être supprimé car ses informations d'identification de trousseau n'ont pas pu être supprimées.</translation>
        </message>
    </context>
    <context>
        <name>ErrorCodesDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5695" />
            <source>API Error Codes Reference</source>
            <translation>Référence des codes d'erreur de l'API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5701" />
            <source>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5704" />
            <source>Common error codes and their meanings for each API.</source>
            <translation>Codes d'erreur courants et leur signification pour chaque API.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5717" />
            <source>Code</source>
            <translation>Coder</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5717" />
            <source>Name</source>
            <translation>Nom</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5717" />
            <source>Description</source>
            <translation>Descriptif</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5737" />
            <source>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5748" />
            <source>Close</source>
            <translation>Fermer</translation>
        </message>
    </context>
    <context>
        <name>ExperienceJourneyGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3982" />
            <source>No journey telemetry in the current response</source>
            <translation>Aucune télémétrie de trajet dans la réponse actuelle</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4001" />
            <source>No observed data</source>
            <translation>Aucune donnée observée</translation>
        </message>
    </context>
    <context>
        <name>HighPerformanceLineChart</name>
        <message>
            <source>Latency</source>
            <translation type="vanished">Latence</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3813" />
            <source>Value</source>
            <translation>Valeur</translation>
        </message>
    </context>
    <context>
        <name>HistoryDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5875" />
            <source>Request History</source>
            <translation>Historique des requêtes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5884" />
            <source>Search:</source>
            <translation>Rechercher:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5886" />
            <source>Filter by URL or method...</source>
            <translation>Filtrer par URL ou méthode...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5891" />
            <source>Current environment: {name}</source>
            <translation>Current environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5892" />
            <source>All environments</source>
            <translation>Tous les environnements</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5896" />
            <location filename="../zscaler_api_client.py" line="5973" />
            <source>Clear History</source>
            <translation>Effacer l'historique</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>Time</source>
            <translation>Heure</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>Method</source>
            <translation>Méthode</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>URL</source>
            <translation>URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>Environment</source>
            <translation>Environnement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5906" />
            <source>Status</source>
            <translation>Statut</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5906" />
            <source>Duration</source>
            <translation>Durée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5918" />
            <source>Load Request</source>
            <translation>Charger la requête</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5922" />
            <source>Close</source>
            <translation>Fermer</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5946" />
            <source>Default</source>
            <translation>Par défaut</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5974" />
            <source>Are you sure you want to clear all request history?</source>
            <translation>Êtes-vous sûr de vouloir effacer tout l'historique des demandes ?</translation>
        </message>
    </context>
    <context>
        <name>MainWindow</name>
        <message>
            <source>API:</source>
            <translation type="vanished">API :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8672" />
            <source>Auth</source>
            <translation>Authentification</translation>
        </message>
        <message>
            <source>Authenticate with selected API</source>
            <translation type="vanished">Authentifier avec l'API sélectionnée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8694" />
            <source>Endpoints</source>
            <translation>Points de terminaison</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8700" />
            <source>Output</source>
            <translation>Sortie</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8706" />
            <source>Authentication status, requests, and audit info...</source>
            <translation>Statut d'authentification, demandes et informations d'audit...</translation>
        </message>
        <message>
            <source>Request</source>
            <translation type="vanished">Requête</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8740" />
            <source>Enter URL or select endpoint...</source>
            <translation>Entrez l'URL ou sélectionnez un point de terminaison...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8744" />
            <source>Send</source>
            <translation>Envoyer</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8753" />
            <source>cURL</source>
            <translation>boucle</translation>
        </message>
        <message>
            <source>Copy request as cURL command</source>
            <translation type="vanished">Copier la demande en tant que commande cURL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8826" />
            <location filename="../zscaler_api_client.py" line="8835" />
            <source>Key</source>
            <translation>Clé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8826" />
            <location filename="../zscaler_api_client.py" line="8835" />
            <location filename="../zscaler_api_client.py" line="8895" />
            <location filename="../zscaler_api_client.py" line="8970" />
            <source>Value</source>
            <translation>Valeur</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8829" />
            <source>Params</source>
            <translation>Paramètres</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8838" />
            <location filename="../zscaler_api_client.py" line="8963" />
            <source>Headers</source>
            <translation>En-têtes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8871" />
            <location filename="../zscaler_api_client.py" line="10713" />
            <source>Request body (JSON)...</source>
            <translation>Corps de la requête (JSON)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8875" />
            <location filename="../zscaler_api_client.py" line="8962" />
            <source>Body</source>
            <translation>Corps</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8895" />
            <source>Variable</source>
            <translation>Variable</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8898" />
            <source>Path Variables</source>
            <translation>Variables de chemin</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8920" />
            <location filename="../zscaler_api_client.py" line="10618" />
            <source>Response</source>
            <translation>Réponse</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8935" />
            <source>Pretty</source>
            <translation>Jolie</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8938" />
            <source>Toggle pretty-print JSON (Ctrl+P)</source>
            <translation>Activer/désactiver le JSON à jolie impression (Ctrl+P)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8943" />
            <location filename="../zscaler_api_client.py" line="10125" />
            <location filename="../zscaler_api_client.py" line="10144" />
            <location filename="../zscaler_api_client.py" line="10149" />
            <location filename="../zscaler_api_client.py" line="10157" />
            <source>Export response</source>
            <translation>Exporter la réponse</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8946" />
            <source>Preview export</source>
            <translation>Aperçu de l'exportation</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8966" />
            <source>Table</source>
            <translation>Tableau</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8968" />
            <source>Chart</source>
            <translation>Graphique</translation>
        </message>
        <message>
            <source>JSON structure</source>
            <translation type="vanished">Structure JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8972" />
            <source>Tree</source>
            <translation>Arbre</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8975" />
            <source>Heatmap</source>
            <translation>Carte thermique</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8978" />
            <source>Topology</source>
            <translation>Topologie</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8982" />
            <source>Schema</source>
            <translation>Schéma</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8987" />
            <location filename="../zscaler_api_client.py" line="9053" />
            <source>AI Assistant</source>
            <translation>Assistant IA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8990" />
            <source>Ask a OneAPI question, e.g. list ZPA application segments</source>
            <translation>Posez une question OneAPI, par ex. lister les segments d'application ZPA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8994" />
            <source>Choose a guided AI example…</source>
            <translation>Choisissez un exemple d’IA guidée…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9000" />
            <source>Find API request</source>
            <translation>Rechercher une demande d'API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9003" />
            <source>Run selected request</source>
            <translation>Exécuter la requête sélectionnée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9006" />
            <source>Export result</source>
            <translation>Résultat de l'exportation</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9010" />
            <location filename="../zscaler_api_client.py" line="11827" />
            <source>Ask in plain language. Sensitive values are masked before display or export.</source>
            <translation>Demandez dans un langage simple. Les valeurs sensibles sont masquées avant affichage ou export.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9016" />
            <source>AI request preview appears here before execution.</source>
            <translation>L'aperçu de la demande AI apparaît ici avant l'exécution.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9022" />
            <source>Bar chart</source>
            <translation>Graphique à barres</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9023" />
            <source>Line chart</source>
            <translation>Graphique linéaire</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9024" />
            <source>Pie chart</source>
            <translation>Diagramme circulaire</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9033" />
            <source>Help</source>
            <translation>Aide</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9052" />
            <source>Console</source>
            <translation>Console</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9069" />
            <source>Ready</source>
            <translation>Prêt</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9078" />
            <source>&amp;File</source>
            <translation>&amp;Fichier</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9080" />
            <source>&amp;Settings...</source>
            <translation>&amp;Paramètres...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9085" />
            <source>&amp;Batch Operations...</source>
            <translation>Opérations par &amp;lots...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9092" />
            <source>Request &amp;History...</source>
            <translation>Demande et historique...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9101" />
            <source>&amp;Quit</source>
            <translation>&amp;Quitter</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9107" />
            <source>&amp;Edit</source>
            <translation>&amp;Édition</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9109" />
            <source>Copy as c&amp;URL</source>
            <translation>Copier en tant que c&amp;URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9114" />
            <source>Copy &amp;Response</source>
            <translation>Copier la &amp;réponse</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9121" />
            <source>C&amp;lear Request</source>
            <translation>Demande de &amp;clairage</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9126" />
            <source>&amp;Request</source>
            <translation>&amp;Requête</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9128" />
            <source>&amp;Send Request</source>
            <translation>&amp;Envoyer la demande</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9135" />
            <source>Authenticate &amp;ZIA</source>
            <translation>Authentifier &amp;ZIA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9139" />
            <source>Authenticate Z&amp;PA</source>
            <translation>Authentifier Z&amp;PA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9145" />
            <source>&amp;Logout All Sessions</source>
            <translation>&amp;Déconnexion de toutes les sessions</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9149" />
            <source>&amp;Operations</source>
            <translation>&amp;Opérations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9150" />
            <source>Operations &amp;Center...</source>
            <translation>Opérations et Centre...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9158" />
            <source>Environment &amp;Profiles...</source>
            <translation>Environnement et profils...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9163" />
            <source>&amp;Language</source>
            <translation>&amp;Langue</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9172" />
            <source>&amp;Help</source>
            <translation>&amp;Aide</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9174" />
            <source>&amp;Welcome Guide...</source>
            <translation>Guide de &amp;bienvenue...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9178" />
            <source>&amp;About...</source>
            <translation>À &amp;propos...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9183" />
            <source>About &amp;Qt...</source>
            <translation>À propos de &amp; Qt</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9190" />
            <source>ZIA API &amp;Documentation</source>
            <translation>API ZIA et documentation</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9194" />
            <source>ZPA API D&amp;ocumentation</source>
            <translation>Documentation de l'API ZPA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9198" />
            <source>Zscaler API &amp;Portal</source>
            <translation>API et portail Zscaler</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9202" />
            <source>API &amp;Error Codes...</source>
            <translation>API et codes d'erreur...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9208" />
            <source>Check for &amp;Updates...</source>
            <translation>Vérifier les &amp;mises à jour...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9278" />
            <source>{count} operations · {groups} groups</source>
            <translation>{count} operations · {groups} groups</translation>
        </message>
        <message>
            <source>Create new profile…</source>
            <translation type="vanished">Créer un nouveau profil…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9636" />
            <source>Environment profiles</source>
            <translation>Profils d'environnement</translation>
        </message>
        <message>
            <source>Profile:</source>
            <translation type="vanished">Profil :</translation>
        </message>
        <message>
            <source>New profile name:</source>
            <translation type="vanished">Nouveau nom de profil :</translation>
        </message>
        <message>
            <source>Environment profile active: </source>
            <translation type="vanished">Profil d'environnement actif : </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9683" />
            <source>{count} matching operations</source>
            <translation>{count} matching operations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9683" />
            <source>{count} operations</source>
            <translation>{count} operations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9720" />
            <source>Guided example loaded. Find the API request, review the preview, then choose whether to run it.</source>
            <translation>Exemple guidé chargé. Recherchez la demande d'API, examinez l'aperçu, puis choisissez si vous souhaitez l'exécuter.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9822" />
            <source>ZIA credentials not configured. Please go to Settings.</source>
            <translation>Les informations d'identification ZIA ne sont pas configurées. Veuillez accéder aux paramètres.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9851" />
            <source>ZCC credentials not configured. Please go to Settings.</source>
            <translation>Les informations d'identification ZCC ne sont pas configurées. Veuillez accéder aux paramètres.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9877" />
            <source>{api_type} credentials not configured. Please go to Settings.</source>
            <translation>{api_type} credentials not configured. Please go to Settings.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9941" />
            <source>OneAPI credentials not configured. Please go to Settings.</source>
            <translation>Les identifiants OneAPI ne sont pas configurés. Veuillez accéder aux paramètres.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9982" />
            <source>No matching API operation was found. Try product and resource names.</source>
            <translation>Aucune opération d'API correspondante n'a été trouvée. Essayez les noms de produits et de ressources.</translation>
        </message>
        <message>
            <source>Suggested request: {method} {name}. Review path variables before running.</source>
            <translation type="vanished">Suggested request: {method} {name}. Review path variables before running.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9999" />
            <source>Operation</source>
            <translation>Fonctionnement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9999" />
            <location filename="../zscaler_api_client.py" line="11630" />
            <source>Method</source>
            <translation>Méthode</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9999" />
            <location filename="../zscaler_api_client.py" line="11630" />
            <source>URL</source>
            <translation>URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10033" />
            <source>Ask the AI assistant for a request first.</source>
            <translation>Demandez d’abord une demande à l’assistant IA.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10036" />
            <source>Review AI request</source>
            <translation>Examiner la demande d'IA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10037" />
            <source>Review the URL, path variables, and parameters in the preview before sending. Send this request now?</source>
            <translation>Vérifiez l'URL, les variables de chemin et les paramètres dans l'aperçu avant l'envoi. Envoyer cette demande maintenant ?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10060" />
            <location filename="../zscaler_api_client.py" line="10065" />
            <source>Asking configured LLM…</source>
            <translation>Demander un LLM configuré…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10063" />
            <source>LLM unavailable; using the local catalog assistant.</source>
            <translation>LLM indisponible ; à l'aide de l'assistant de catalogue local.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10074" />
            <source>Configure an AI endpoint and model in Settings.</source>
            <translation>Configurez un point de terminaison et un modèle IA dans Paramètres.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10078" />
            <source>AI endpoint must use HTTP or HTTPS.</source>
            <translation>Le point de terminaison AI doit utiliser HTTP ou HTTPS.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10080" />
            <source>External AI is disabled. Enable it explicitly in Settings.</source>
            <translation>L'IA externe est désactivée. Activez-le explicitement dans Paramètres.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10082" />
            <source>External AI endpoints must use HTTPS.</source>
            <translation>Les points de terminaison IA externes doivent utiliser HTTPS.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10084" />
            <source>AI question is too long (maximum 2000 characters).</source>
            <translation>La question AI est trop longue (2 000 caractères maximum).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10113" />
            <location filename="../zscaler_api_client.py" line="10119" />
            <source>Save binary response</source>
            <translation>Enregistrer la réponse binaire</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10114" />
            <source>Binary content cannot be inspected or obfuscated as text. Save the original response only if you trust this endpoint and destination?</source>
            <translation>Le contenu binaire ne peut pas être inspecté ou masqué sous forme de texte. Enregistrer la réponse d'origine uniquement si vous faites confiance à ce point de terminaison et à cette destination ?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10119" />
            <source>All files (*)</source>
            <translation>Tous les fichiers (*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10122" />
            <source>Original binary response saved</source>
            <translation>Réponse binaire originale enregistrée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10171" />
            <source>Masked response exported</source>
            <translation>Réponse masquée exportée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10277" />
            <source>Binary content is not included in this preview.</source>
            <translation>Le contenu binaire n'est pas inclus dans cet aperçu.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10279" />
            <location filename="../zscaler_api_client.py" line="10285" />
            <source>Export preview</source>
            <translation>Aperçu de l'exportation</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10280" />
            <source>Original binary export requires a separate confirmation.</source>
            <translation>L'exportation binaire d'origine nécessite une confirmation distincte.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10286" />
            <source>Sensitive fields are masked in every export.</source>
            <translation>Les champs sensibles sont masqués à chaque export.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10340" />
            <location filename="../zscaler_api_client.py" line="10349" />
            <location filename="../zscaler_api_client.py" line="10357" />
            <source>Export AI result</source>
            <translation>Exporter le résultat de l'IA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10149" />
            <location filename="../zscaler_api_client.py" line="10157" />
            <location filename="../zscaler_api_client.py" line="10349" />
            <location filename="../zscaler_api_client.py" line="10357" />
            <source>No chart data is available to export.</source>
            <translation>Aucune donnée graphique n'est disponible pour l'exportation.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10366" />
            <source>AI result exported</source>
            <translation>Résultat IA exporté</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10625" />
            <source>No tabular datasets</source>
            <translation>Aucun ensemble de données tabulaires</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10634" />
            <source>Nodes</source>
            <translation>Nœuds</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10634" />
            <source>Connections</source>
            <translation>Connexions</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10636" />
            <source>No nodes or connections were found in this response.</source>
            <translation>Aucun nœud ou connexion n'a été trouvé dans cette réponse.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10697" />
            <source>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</source>
            <translation>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10714" />
            <source>Raw request body...</source>
            <translation>Corps brut de la requête...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10715" />
            <source>Form fields as JSON or an encoded key=value string...</source>
            <translation>Champs de formulaire au format JSON ou chaîne clé = valeur codée...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10716" />
            <source>Optional multipart fields as a JSON object...</source>
            <translation>Champs multipart facultatifs en tant qu'objet JSON...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10722" />
            <source>Select upload file</source>
            <translation>Sélectionnez le fichier de téléchargement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9474" />
            <location filename="../zscaler_api_client.py" line="10771" />
            <source>Yes</source>
            <translation>Oui</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9474" />
            <location filename="../zscaler_api_client.py" line="10771" />
            <source>No</source>
            <translation>Non</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10789" />
            <source>{count} variable(s) extracted · {missing} required value(s) missing</source>
            <translation>{count} variable(s) extracted · {missing} required value(s) missing</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10796" />
            <location filename="../zscaler_api_client.py" line="11144" />
            <source>GraphQL body must be a JSON object containing a query string.</source>
            <translation>Le corps GraphQL doit être un objet JSON contenant une chaîne de requête.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10800" />
            <source>Choose operationName because the document contains multiple GraphQL operations.</source>
            <translation>Choisissez operationName car le document contient plusieurs opérations GraphQL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10802" />
            <source>GraphQL operationName does not match a named operation in the query.</source>
            <translation>GraphQL operationName ne correspond pas à une opération nommée dans la requête.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10813" />
            <source>Variable ${name} is required.</source>
            <translation>Variable ${name} is required.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10817" />
            <source>Variable ${name} must be valid for type {type}.</source>
            <translation>Variable ${name} must be valid for type {type}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10824" />
            <source>Remove undeclared GraphQL variables: {names}</source>
            <translation>Remove undeclared GraphQL variables: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10848" />
            <location filename="../zscaler_api_client.py" line="10868" />
            <source>Documented GraphQL schema</source>
            <translation>Schéma GraphQL documenté</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10849" />
            <source>The current Automation Hub page has no executable query example. Open its documentation or use schema introspection.</source>
            <translation>La page actuelle d'Automation Hub ne contient aucun exemple de requête exécutable. Ouvrez sa documentation ou utilisez l'introspection de schéma.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10863" />
            <source>Loaded documented ZInsights query. Review time ranges, filters, and fields before sending.</source>
            <translation>Requête ZInsights documentée chargée. Vérifiez les plages horaires, les filtres et les champs avant l'envoi.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10899" />
            <source>Enter a name before saving the GraphQL query.</source>
            <translation>Entrez un nom avant d'enregistrer la requête GraphQL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10903" />
            <location filename="../zscaler_api_client.py" line="10944" />
            <location filename="../zscaler_api_client.py" line="10957" />
            <location filename="../zscaler_api_client.py" line="10976" />
            <source>Secure storage</source>
            <translation>Stockage sécurisé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10903" />
            <source>The system keychain could not save the GraphQL query.</source>
            <translation>Le trousseau système n'a pas pu enregistrer la requête GraphQL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10909" />
            <source>GraphQL query saved securely</source>
            <translation>Requête GraphQL enregistrée en toute sécurité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10915" />
            <source>Saved GraphQL query is unavailable.</source>
            <translation>La requête GraphQL enregistrée n'est pas disponible.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10944" />
            <source>The system keychain could not rename the GraphQL query.</source>
            <translation>Le trousseau système n'a pas pu renommer la requête GraphQL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10957" />
            <source>The system keychain could not delete the GraphQL query.</source>
            <translation>Le trousseau système n'a pas pu supprimer la requête GraphQL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10968" />
            <source>GraphQL introspection query prepared. Review the endpoint before sending.</source>
            <translation>Requête d'introspection GraphQL préparée. Vérifiez le point de terminaison avant l’envoi.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10976" />
            <source>The system keychain could not save the GraphQL schema.</source>
            <translation>Le trousseau système n'a pas pu enregistrer le schéma GraphQL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10978" />
            <source>GraphQL schema saved securely</source>
            <translation>Schéma GraphQL enregistré en toute sécurité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8980" />
            <location filename="../zscaler_api_client.py" line="10983" />
            <source>GraphQL schema</source>
            <translation>Schéma GraphQL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10983" />
            <source>No saved introspection result exists for this endpoint.</source>
            <translation>Aucun résultat d'introspection enregistré n'existe pour ce point de terminaison.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11024" />
            <source>{count} GraphQL errors</source>
            <translation>{count} GraphQL errors</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11026" />
            <source>extensions included</source>
            <translation>rallonges incluses</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10033" />
            <location filename="../zscaler_api_client.py" line="10899" />
            <location filename="../zscaler_api_client.py" line="10915" />
            <location filename="../zscaler_api_client.py" line="11043" />
            <location filename="../zscaler_api_client.py" line="11075" />
            <location filename="../zscaler_api_client.py" line="11774" />
            <location filename="../zscaler_api_client.py" line="11793" />
            <source>Warning</source>
            <translation>Avertissement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11043" />
            <source>Please enter a URL</source>
            <translation>Veuillez entrer une URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9821" />
            <location filename="../zscaler_api_client.py" line="9851" />
            <location filename="../zscaler_api_client.py" line="9876" />
            <location filename="../zscaler_api_client.py" line="9940" />
            <location filename="../zscaler_api_client.py" line="11158" />
            <location filename="../zscaler_api_client.py" line="11161" />
            <location filename="../zscaler_api_client.py" line="11188" />
            <source>Error</source>
            <translation>Erreur</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8538" />
            <source>ZIA · List users</source>
            <translation>ZIA · Liste des utilisateurs</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8538" />
            <source>List ZIA users with pagination</source>
            <translation>Liste des utilisateurs ZIA avec pagination</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8539" />
            <source>ZIA · Find URL categories</source>
            <translation>ZIA · Rechercher des catégories d'URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8539" />
            <source>Search ZIA URL categories for social media</source>
            <translation>Rechercher des catégories d'URL ZIA pour les médias sociaux</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8540" />
            <source>ZIA · Review firewall policies</source>
            <translation>ZIA · Examiner les politiques de pare-feu</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8540" />
            <source>List ZIA cloud firewall policies</source>
            <translation>Répertorier les politiques de pare-feu cloud ZIA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8541" />
            <source>ZPA · Application segments</source>
            <translation>ZPA · Segments d'application</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8541" />
            <source>List ZPA application segments</source>
            <translation>Répertorier les segments d'application ZPA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8542" />
            <source>ZPA · Connector inventory</source>
            <translation>ZPA · Inventaire des connecteurs</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8542" />
            <source>List ZPA connectors</source>
            <translation>Liste des connecteurs ZPA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8543" />
            <source>ZDX · Experience overview</source>
            <translation>ZDX · Aperçu de l'expérience</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8543" />
            <source>List ZDX devices and experience scores</source>
            <translation>Répertorier les appareils ZDX et les scores d'expérience</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8544" />
            <source>ZDX · Active alerts</source>
            <translation>ZDX · Alertes actives</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8544" />
            <source>List active ZDX alerts with pagination</source>
            <translation>Liste des alertes ZDX actives avec pagination</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8545" />
            <source>ZDX · Application monitoring</source>
            <translation>ZDX · Surveillance des applications</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8545" />
            <source>List monitored ZDX applications</source>
            <translation>Répertorier les applications ZDX surveillées</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8546" />
            <source>Client Connector · Devices</source>
            <translation>Connecteur client · Appareils</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8546" />
            <source>List Client Connector devices</source>
            <translation>Répertorier les périphériques Client Connector</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8547" />
            <source>ZIdentity · Users</source>
            <translation>ZIdentity · Utilisateurs</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8547" />
            <source>List ZIdentity users with pagination</source>
            <translation>Liste des utilisateurs ZIdentity avec pagination</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8548" />
            <source>ZIdentity · Groups</source>
            <translation>ZIdentité · Groupes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8548" />
            <source>List ZIdentity groups</source>
            <translation>Liste des groupes ZIdentity</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8549" />
            <source>AI Security · Workloads</source>
            <translation>Sécurité de l'IA · Charges de travail</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8549" />
            <source>List AI Security workloads</source>
            <translation>Répertorier les charges de travail de sécurité IA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8603" />
            <source>ZS API Client</source>
            <translation>Client API ZS</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8610" />
            <source>Explore APIs, review changes, and operate safely</source>
            <translation>Explorez les API, examinez les modifications et opérez en toute sécurité</translation>
        </message>
        <message>
            <source>1 · Environment</source>
            <translation type="vanished">1 · Environnement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8616" />
            <source>Select or create a tenant environment profile</source>
            <translation>Sélectionner ou créer un profil d'environnement de locataire</translation>
        </message>
        <message>
            <source>2 · Analyze</source>
            <translation type="vanished">2 · Analyser</translation>
        </message>
        <message>
            <source>Open dashboards, audits, policy diffs, and response analysis</source>
            <translation type="vanished">Tableaux de bord ouverts, audits, différences de politiques et analyse des réponses</translation>
        </message>
        <message>
            <source>3 · Change</source>
            <translation type="vanished">3 · Changement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8624" />
            <source>Open policy diff and policy-as-code export</source>
            <translation>Ouvrir la différence de politique et exporter la politique en tant que code</translation>
        </message>
        <message>
            <source>Operations Center</source>
            <translation type="vanished">Centre des opérations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8627" />
            <location filename="../zscaler_api_client.py" line="8641" />
            <source>PAC Workspace</source>
            <translation>PAC Workspace</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8628" />
            <source>Create, verify, map, and prepare PAC files (Ctrl+Shift+P)</source>
            <translation>Create, verify, map, and prepare PAC files (Ctrl+Shift+P)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8647" />
            <source>Settings</source>
            <translation>Paramètres</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8641" />
            <location filename="../zscaler_api_client.py" line="8659" />
            <source>API Explorer</source>
            <translation>Explorateur d'API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8614" />
            <source>Environment</source>
            <translation>Environment</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8619" />
            <location filename="../zscaler_api_client.py" line="8641" />
            <source>Monitor</source>
            <translation>Monitor</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8620" />
            <source>Open dashboards, alerts, audits, and response analysis</source>
            <translation>Open dashboards, alerts, audits, and response analysis</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8623" />
            <location filename="../zscaler_api_client.py" line="8641" />
            <source>Changes</source>
            <translation>Changes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8632" />
            <location filename="../zscaler_api_client.py" line="9624" />
            <source>Alerts</source>
            <translation>Alerts</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8633" />
            <source>Open local operational alerts</source>
            <translation>Open local operational alerts</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8636" />
            <source>Recent</source>
            <translation>Recent</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8637" />
            <source>Open redacted request history</source>
            <translation>Open redacted request history</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8641" />
            <location filename="../zscaler_api_client.py" line="11627" />
            <source>Favorites</source>
            <translation>Favorites</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8641" />
            <location filename="../zscaler_api_client.py" line="11653" />
            <source>Operations inbox</source>
            <translation>Operations inbox</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8643" />
            <source>Quick actions</source>
            <translation>Quick actions</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8644" />
            <source>Open common workspaces and actions</source>
            <translation>Open common workspaces and actions</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8662" />
            <location filename="../zscaler_api_client.py" line="9999" />
            <location filename="../zscaler_api_client.py" line="11630" />
            <source>Product</source>
            <translation>Produit</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8673" />
            <source>Authenticate with selected API (Ctrl+Shift+A)</source>
            <translation>Authentifier avec l'API sélectionnée (Ctrl+Shift+A)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8683" />
            <source>🔍 Filter endpoints...</source>
            <translation>🔍 Filtrer les points de terminaison...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8717" />
            <source>Request Builder</source>
            <translation>Générateur de requêtes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8745" />
            <source>Send request (Ctrl+Return)</source>
            <translation>Envoyer la demande (Ctrl+Retour)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8749" />
            <source>Cancel</source>
            <translation>Annuler</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8750" />
            <source>Stop before the next page or chain step; the current HTTP request is allowed to finish safely.</source>
            <translation>Arrêtez-vous avant la page suivante ou l'étape de la chaîne ; la requête HTTP actuelle peut se terminer en toute sécurité.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8754" />
            <source>Copy request as cURL command (Ctrl+Shift+C)</source>
            <translation>Copier la demande en tant que commande cURL (Ctrl+Shift+C)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8760" />
            <source>GraphQL request</source>
            <translation>Requête GraphQL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8761" />
            <source>Send the request body as a GraphQL query and preserve data, errors, and extensions.</source>
            <translation>Envoyez le corps de la requête sous forme de requête GraphQL et conservez les données, les erreurs et les extensions.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8765" />
            <source>Fetch all pages</source>
            <translation>Récupérer toutes les pages</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8766" />
            <source>Follow only the pagination parameters documented for the selected read operation.</source>
            <translation>Suivez uniquement les paramètres de pagination documentés pour l'opération de lecture sélectionnée.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8768" />
            <source>Page size:</source>
            <translation>Taille des pages :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8772" />
            <source>Maximum pages:</source>
            <translation>Pages maximales :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8780" />
            <source>Saved GraphQL query name</source>
            <translation>Nom de la requête GraphQL enregistré</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8784" />
            <source>Save query</source>
            <translation>Enregistrer la requête</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8787" />
            <source>Load query</source>
            <translation>Charger la requête</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8790" />
            <source>Rename query</source>
            <translation>Renommer la requête</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8793" />
            <source>Delete query</source>
            <translation>Supprimer la requête</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8796" />
            <source>Introspect schema</source>
            <translation>Schéma d'introspection</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8799" />
            <source>Load saved schema</source>
            <translation>Charger le schéma enregistré</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8805" />
            <source>Documented ZInsights query…</source>
            <translation>Requête ZInsights documentée…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8810" />
            <source>Load documented query</source>
            <translation>Charger une requête documentée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8813" />
            <source>Browse documented schema</source>
            <translation>Parcourir le schéma documenté</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8844" />
            <source>Body type:</source>
            <translation>Type de corps :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8846" />
            <source>JSON</source>
            <translation>JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8847" />
            <source>Raw text</source>
            <translation>Texte brut</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8848" />
            <source>Form URL encoded</source>
            <translation>URL du formulaire encodée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8849" />
            <location filename="../zscaler_api_client.py" line="11153" />
            <source>Multipart file upload</source>
            <translation>Téléchargement de fichiers en plusieurs parties</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8857" />
            <source>File field:</source>
            <translation>Champ du fichier :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8861" />
            <source>Upload file:</source>
            <translation>Télécharger le fichier :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8864" />
            <source>Select a local file; its path is never saved in history</source>
            <translation>Sélectionnez un fichier local ; son chemin n'est jamais enregistré dans l'histoire</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8866" />
            <source>Browse…</source>
            <translation>Parcourir…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8880" />
            <source>Extract typed variables from the selected GraphQL operation. Values are inserted into the JSON request body, never into the URL.</source>
            <translation>Extrayez les variables typées de l’opération GraphQL sélectionnée. Les valeurs sont insérées dans le corps de la requête JSON, jamais dans l'URL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8907" />
            <source>Type</source>
            <translation>Tapez</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8907" />
            <source>Required</source>
            <translation>Obligatoire</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8908" />
            <source>Default</source>
            <translation>Par défaut</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <source>JSON value</source>
            <translation>Valeur JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8886" />
            <source>Extract variables from query</source>
            <translation>Extraire les variables de la requête</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8887" />
            <location filename="../zscaler_api_client.py" line="10791" />
            <location filename="../zscaler_api_client.py" line="11807" />
            <source>No GraphQL variables extracted.</source>
            <translation>Aucune variable GraphQL extraite.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8888" />
            <location filename="../zscaler_api_client.py" line="11144" />
            <location filename="../zscaler_api_client.py" line="11194" />
            <source>GraphQL Variables</source>
            <translation>Variables GraphQL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8902" />
            <location filename="../zscaler_api_client.py" line="11812" />
            <source>Select a documented endpoint to inspect its request contract.</source>
            <translation>Sélectionnez un point de terminaison documenté pour inspecter son contrat de demande.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8907" />
            <source>Location</source>
            <translation>Emplacement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8907" />
            <location filename="../zscaler_api_client.py" line="11630" />
            <source>Name</source>
            <translation>Nom</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8908" />
            <source>Description</source>
            <translation>Descriptif</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8913" />
            <source>API Guide</source>
            <translation>Guide des API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8927" />
            <source>Dataset:</source>
            <translation>Ensemble de données :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8949" />
            <source>Open export</source>
            <translation>Ouvrir l'exportation</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8950" />
            <source>Compare drift</source>
            <translation>Comparer la dérive</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8970" />
            <source>Field</source>
            <translation>Champ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9096" />
            <source>Open response export…</source>
            <translation>Exportation de réponse ouverte…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9097" />
            <source>Compare response drift…</source>
            <translation>Comparez la dérive des réponses…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9154" />
            <source>PAC &amp;Workspace...</source>
            <translation>PAC et espace de travail...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9434" />
            <location filename="../zscaler_api_client.py" line="9448" />
            <source>Required value</source>
            <translation>Valeur requise</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9434" />
            <location filename="../zscaler_api_client.py" line="9448" />
            <source>Optional value</source>
            <translation>Valeur facultative</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9482" />
            <source>body template available</source>
            <translation>modèle de corps disponible</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9482" />
            <source>no body template</source>
            <translation>pas de modèle de corps</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9483" />
            <source>not listed</source>
            <translation>non répertorié</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9484" />
            <source>{count} documented parameter(s) · {body} · responses: {codes}. Templates are examples; review every value before sending.</source>
            <translation>{count} documented parameter(s) · {body} · responses: {codes}. Templates are examples; review every value before sending.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9488" />
            <source>Documented {mode} pagination is available as an explicit bounded option.</source>
            <translation>Documented {mode} pagination is available as an explicit bounded option.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9507" />
            <source>Documented {mode} pagination using {parameter}. Results retain every page and stop at the configured maximum.</source>
            <translation>Documented {mode} pagination using {parameter}. Results retain every page and stop at the configured maximum.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9519" />
            <source>The URL was edited manually. Select an endpoint again to attach its documented request contract.</source>
            <translation>L'URL a été modifiée manuellement. Sélectionnez à nouveau un point de terminaison pour joindre son contrat de demande documenté.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9617" />
            <source>Active environment: {name}</source>
            <translation>Active environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9624" />
            <source>Alerts ({count})</source>
            <translation>Alerts ({count})</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9636" />
            <source>The selected environment profile is unavailable.</source>
            <translation>Le profil d'environnement sélectionné n'est pas disponible.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9650" />
            <source>Environment profile active: {name}. Sessions and request data were cleared.</source>
            <translation>Environment profile active: {name}. Sessions and request data were cleared.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9694" />
            <source>Write request prepared</source>
            <translation>Demande d'écriture préparée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9695" />
            <source>The documented write template is ready. Review the API Guide, parameters, and body, then choose Send explicitly.</source>
            <translation>Le modèle d'écriture documenté est prêt. Consultez le guide de l'API, les paramètres et le corps, puis choisissez Envoyer explicitement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9989" />
            <source>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</source>
            <translation>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10144" />
            <source>No tabular response data is available to export.</source>
            <translation>Aucune donnée de réponse tabulaire n’est disponible pour l’exportation.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10294" />
            <location filename="../zscaler_api_client.py" line="10305" />
            <source>Open response export</source>
            <translation>Exportation de réponse ouverte</translation>
        </message>
        <message>
            <source>The response export is unavailable, is a symbolic link, or exceeds the configured transfer limit.</source>
            <translation type="vanished">L'exportation de la réponse n'est pas disponible, est un lien symbolique ou dépasse la limite de transfert configurée.</translation>
        </message>
        <message>
            <source>This is not a supported ZS API response exchange file.</source>
            <translation type="vanished">Il ne s'agit pas d'un fichier d'échange de réponses API ZS pris en charge.</translation>
        </message>
        <message>
            <source>The response exchange file is incomplete.</source>
            <translation type="vanished">Le fichier d'échange de réponses est incomplet.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10328" />
            <source>Response export opened locally; no API request was sent.</source>
            <translation>Exportation des réponses ouverte localement ; aucune demande API n'a été envoyée.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10333" />
            <location filename="../zscaler_api_client.py" line="10335" />
            <source>Response drift comparison</source>
            <translation>Comparaison de dérive de réponse</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10333" />
            <source>Binary responses cannot be structurally compared. Export and inspect the original file with an appropriate tool.</source>
            <translation>Les réponses binaires ne peuvent pas être comparées structurellement. Exportez et inspectez le fichier original avec un outil approprié.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10335" />
            <source>Send a request or open a response export before comparing drift.</source>
            <translation>Envoyez une requête ou ouvrez un export de réponse avant de comparer la dérive.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11039" />
            <location filename="../zscaler_api_client.py" line="11556" />
            <source>Read only</source>
            <translation>Lecture seule</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11039" />
            <location filename="../zscaler_api_client.py" line="11556" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>Le mode lecture seule bloque les demandes d’écriture. Modifiez le rôle local dans le Centre d’opérations pour continuer.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11064" />
            <source>Missing Path Variables</source>
            <translation>Variables de chemin manquantes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11065" />
            <source>Enter values for: {names}</source>
            <translation>Enter values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11075" />
            <source>Configure a base URL for the selected product before sending a relative API path.</source>
            <translation>Configurez une URL de base pour le produit sélectionné avant d'envoyer un chemin d'API relatif.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11129" />
            <source>Missing documented parameters</source>
            <translation>Paramètres documentés manquants</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11130" />
            <source>Enter required values for: {names}</source>
            <translation>Enter required values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11153" />
            <source>Select an available local file before sending.</source>
            <translation>Sélectionnez un fichier local disponible avant de l'envoyer.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11158" />
            <source>Multipart fields must be a JSON object: {error}</source>
            <translation>Multipart fields must be a JSON object: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11161" />
            <source>Multipart fields must be a JSON object.</source>
            <translation>Les champs multipart doivent être un objet JSON.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11200" />
            <source>Sending request...</source>
            <translation>Envoi de la requête...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11231" />
            <source>Pagination unavailable</source>
            <translation>Pagination indisponible</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11231" />
            <source>Select a documented paginated GET operation before fetching all pages.</source>
            <translation>Sélectionnez une opération GET paginée documentée avant de récupérer toutes les pages.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11249" />
            <source>Fetching page {page} of at most {maximum}…</source>
            <translation>Fetching page {page} of at most {maximum}…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11253" />
            <source>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</source>
            <translation>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11262" />
            <source>Cancellation requested; waiting for the current HTTP request to finish safely…</source>
            <translation>Annulation demandée ; en attendant que la requête HTTP actuelle se termine en toute sécurité…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11275" />
            <source>Request cancelled before completion</source>
            <translation>Demande annulée avant la fin</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11323" />
            <source>Safe read retries: {count}</source>
            <translation>Safe read retries: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11344" />
            <source>Binary response ready to save.
File: {name}
Type: {type}
Size: {size}</source>
            <translation>Binary response ready to save.
File: {name}
Type: {type}
Size: {size}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11384" />
            <source>Pagination complete: {pages} page(s), {records} record(s)</source>
            <translation>Pagination complete: {pages} page(s), {records} record(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11391" />
            <source>Pagination stopped before completion: {pages} page(s), {records} record(s)</source>
            <translation>Pagination stopped before completion: {pages} page(s), {records} record(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11419" />
            <source>ZDX authenticated successfully</source>
            <translation>Authentifié avec succès.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11423" />
            <source>ZCC authenticated successfully</source>
            <translation>Authentifié avec succès.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11427" />
            <source>ZIdentity authenticated successfully</source>
            <translation>ZIdentity authentifié avec succès</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11431" />
            <source>ZTW authenticated successfully</source>
            <translation>Authentifié avec succès.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11435" />
            <source>ZWA authenticated successfully</source>
            <translation>Authentifié avec succès.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11439" />
            <source>EASM authenticated successfully</source>
            <translation>Authentifié avec succès.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11443" />
            <source>OneAPI authenticated successfully</source>
            <translation>OneAPI authentifié avec succès</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11448" />
            <source>Authenticated successfully</source>
            <translation>Authentifié avec succès.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11548" />
            <source>Batch validation failed: </source>
            <translation>Échec de la validation par lots : </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11551" />
            <source>Select {api} before running this batch.</source>
            <translation>Select {api} before running this batch.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11559" />
            <source>Review complete. Send {count} request(s) to the active environment?</source>
            <translation>Review complete. Send {count} request(s) to the active environment?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11560" />
            <source>Confirm batch</source>
            <translation>Confirmer le lot</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11575" />
            <source>Sending batch request 0 of {count}...</source>
            <translation>Sending batch request 0 of {count}...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11576" />
            <source>Batch execution started: {count} request(s)</source>
            <translation>Batch execution started: {count} request(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11593" />
            <source>Sending batch request {completed} of {total}...</source>
            <translation>Sending batch request {completed} of {total}...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11603" />
            <location filename="../zscaler_api_client.py" line="11604" />
            <location filename="../zscaler_api_client.py" line="11605" />
            <source>Batch complete: {successful} succeeded, {failed} failed.</source>
            <translation>Batch complete: {successful} succeeded, {failed} failed.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8641" />
            <location filename="../zscaler_api_client.py" line="11672" />
            <source>Request History</source>
            <translation>Historique des demandes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11629" />
            <source>Favorites are local to the active environment and never include credentials or request bodies.</source>
            <translation>Favorites are local to the active environment and never include credentials or request bodies.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11638" />
            <source>Save favorite</source>
            <translation>Save favorite</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11638" />
            <source>Favorite name:</source>
            <translation>Favorite name:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11638" />
            <source>New request</source>
            <translation>New request</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11648" />
            <source>Save current request</source>
            <translation>Save current request</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11648" />
            <source>Load selected</source>
            <translation>Load selected</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11648" />
            <source>Remove favorite</source>
            <translation>Remove favorite</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11648" />
            <location filename="../zscaler_api_client.py" line="11665" />
            <source>Close</source>
            <translation>Close</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11654" />
            <source>Local items requiring attention. This inbox is scoped to the active environment and never sends changes.</source>
            <translation>Local items requiring attention. This inbox is scoped to the active environment and never sends changes.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11655" />
            <source>Priority</source>
            <translation>Priority</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11655" />
            <source>Source</source>
            <translation>Source</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11655" />
            <source>Details</source>
            <translation>Details</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11659" />
            <source>Alert</source>
            <translation>Alert</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11660" />
            <source>High</source>
            <translation>High</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11660" />
            <source>Failed request</source>
            <translation>Failed request</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11661" />
            <source>Info</source>
            <translation>Info</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11661" />
            <source>Scheduled report</source>
            <translation>Scheduled report</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11665" />
            <source>Open Alerts</source>
            <translation>Open Alerts</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11665" />
            <source>Open Recent</source>
            <translation>Open Recent</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11673" />
            <source>This request belongs to another environment. Activate that environment profile before loading it.</source>
            <translation>Cette requête appartient à un autre environnement. Activez ce profil d'environnement avant de le charger.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11686" />
            <location filename="../zscaler_api_client.py" line="11705" />
            <source>Multipart request loaded. Select the local file again before sending.</source>
            <translation>Requête en plusieurs parties chargée. Sélectionnez à nouveau le fichier local avant de l'envoyer.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11777" />
            <source>Masked cURL command copied to clipboard</source>
            <translation>Commande cURL masquée copiée dans le presse-papiers</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11782" />
            <source>Binary response</source>
            <translation>Réponse binaire</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11782" />
            <source>Binary response content is not copied to the clipboard. Use Export to save the original file.</source>
            <translation>Le contenu de la réponse binaire n'est pas copié dans le presse-papiers. Utilisez Exporter pour enregistrer le fichier original.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11791" />
            <source>Masked response copied to clipboard</source>
            <translation>Réponse masquée copiée dans le presse-papiers</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11936" />
            <source>The application needs to restart to apply the new language.

Restart now?</source>
            <translation>L'application doit redémarrer pour appliquer la nouvelle langue.

Redémarrer maintenant ?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12063" />
            <source>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Release:&lt;/b&gt; {name}&lt;/p&gt;{prerelease}&lt;p style='color: #666; font-size: 11px;'&gt;✓ Verified from github.com/{repo}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</source>
            <translation>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Release:&lt;/b&gt; {name}&lt;/p&gt;{prerelease}&lt;p style='color: #666; font-size: 11px;'&gt;✓ Verified from github.com/{repo}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</translation>
        </message>
        <message>
            <source>Success</source>
            <translation type="vanished">Succès</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11396" />
            <source>Request successful</source>
            <translation>Requête réussie</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11406" />
            <source>ZIA authenticated successfully</source>
            <translation>ZIA s'est authentifié avec succès</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11415" />
            <source>ZPA authenticated successfully</source>
            <translation>ZPA authentifié avec succès</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11481" />
            <location filename="../zscaler_api_client.py" line="11487" />
            <source>Request failed</source>
            <translation>Échec de la requête</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11548" />
            <location filename="../zscaler_api_client.py" line="11551" />
            <location filename="../zscaler_api_client.py" line="11605" />
            <source>Batch</source>
            <translation>Lot</translation>
        </message>
        <message>
            <source>Processing {count} items...</source>
            <translation type="vanished">Traitement de {count} éléments...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11707" />
            <source>Request loaded from history</source>
            <translation>Requête chargée à partir de l'historique</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11774" />
            <source>No URL to copy</source>
            <translation>Aucune URL à copier</translation>
        </message>
        <message>
            <source>cURL command copied to clipboard</source>
            <translation type="vanished">Commande cURL copiée dans le presse-papiers</translation>
        </message>
        <message>
            <source>Response copied to clipboard</source>
            <translation type="vanished">Réponse copiée dans le presse-papiers</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11793" />
            <source>No response to copy</source>
            <translation>Aucune réponse à la copie</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11829" />
            <source>Request cleared</source>
            <translation>Demande effacée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11842" />
            <location filename="../zscaler_api_client.py" line="11893" />
            <source>Missing Credentials</source>
            <translation>Informations d'identification manquantes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11843" />
            <source>Please configure ZIA credentials in Settings first.</source>
            <translation>Veuillez d'abord configurer les informations d'identification ZIA dans Paramètres.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11865" />
            <source>ZIA auth request prepared. Click Send to authenticate.</source>
            <translation>Demande d'authentification ZIA préparée. Cliquez sur Envoyer pour vous authentifier.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11894" />
            <source>Please configure ZPA credentials in Settings first.</source>
            <translation>Veuillez d'abord configurer les informations d'identification ZPA dans Paramètres.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11907" />
            <source>ZPA auth request prepared. Click Send to authenticate.</source>
            <translation>Demande d'authentification ZPA préparée. Cliquez sur Envoyer pour vous authentifier.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11912" />
            <source>All sessions cleared</source>
            <translation>Toutes les sessions effacées</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11935" />
            <source>Language Changed</source>
            <translation>Langue modifiée</translation>
        </message>
        <message>
            <source>Please restart the application to apply the new language.</source>
            <translation type="vanished">Veuillez redémarrer l'application pour appliquer la nouvelle langue.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11984" />
            <source>Checking for updates...</source>
            <translation>Recherche de mises à jour...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12057" />
            <source>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</source>
            <translation>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12061" />
            <source>Update Available</source>
            <translation>Mise à jour disponible</translation>
        </message>
        <message>
            <source>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</source>
            <translation type="vanished">&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12083" />
            <source>Update available: v{version}</source>
            <translation>Mise à jour disponible: v{version}</translation>
        </message>
        <message>
            <source>No Updates</source>
            <translation type="vanished">Pas de mises à jour</translation>
        </message>
        <message>
            <source>&lt;p&gt;You are running the latest version.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Version:&lt;/b&gt; {version}&lt;/p&gt;</source>
            <translation type="vanished">&lt;p&gt;You are running the latest version.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Version:&lt;/b&gt; {version}&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12086" />
            <source>You are up to date (v{version})</source>
            <translation>Vous êtes à jour (v{version})</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12091" />
            <source>Update Check Failed</source>
            <translation>Échec de la vérification</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12092" />
            <source>Could not check for updates:
{error}</source>
            <translation>Impossible de vérifier les mises à jour:
{error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12094" />
            <source>Update check failed</source>
            <translation>Échec de la vérification des mises à jour</translation>
        </message>
        <message>
            <source>&amp;About</source>
            <translation type="vanished">À &amp;propos</translation>
        </message>
        <message>
            <source>Zscaler API &amp;Documentation</source>
            <translation type="vanished">&amp;Documentation de l'API Zscaler</translation>
        </message>
        <message>
            <source>About ZS API Client</source>
            <translation type="vanished">À propos de ZS API Client</translation>
        </message>
        <message>
            <source>ZDX (Zscaler Digital Experience)</source>
            <translation type="vanished">ZDX (expérience numérique Zscaler)</translation>
        </message>
        <message>
            <source>ZCC (Client Connector)</source>
            <translation type="vanished">ZCC (connecteur client)</translation>
        </message>
        <message>
            <source>Key ID:</source>
            <translation type="vanished">ID de clé :</translation>
        </message>
        <message>
            <source>Key Secret:</source>
            <translation type="vanished">Secret de clé :</translation>
        </message>
        <message>
            <source>Welcome to ZS API Client</source>
            <translation type="vanished">Bienvenue dans ZS API Client</translation>
        </message>
        <message>
            <source>Supported APIs</source>
            <translation type="vanished">APIs prises en charge</translation>
        </message>
        <message>
            <source>Getting Started</source>
            <translation type="vanished">Prise en main</translation>
        </message>
        <message>
            <source>Tips for Advanced Users</source>
            <translation type="vanished">Conseils pour utilisateurs avancés</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9051" />
            <source>Documentation</source>
            <translation>Documentation</translation>
        </message>
        <message>
            <source>Show this dialog on startup</source>
            <translation type="vanished">Afficher cette boîte de dialogue au démarrage</translation>
        </message>
        <message>
            <source>Open Settings</source>
            <translation type="vanished">Ouvrir les paramètres</translation>
        </message>
        <message>
            <source>Get Started</source>
            <translation type="vanished">Commencer</translation>
        </message>
        <message>
            <source>Check for updates on startup:</source>
            <translation type="vanished">Vérifier les mises à jour au démarrage :</translation>
        </message>
    </context>
    <context>
        <name>OperationsDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="6199" />
            <source>Operations Center</source>
            <translation>Centre des opérations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Requests</source>
            <translation>Demandes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Success rate</source>
            <translation>Taux de réussite</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <location filename="../zscaler_api_client.py" line="7333" />
            <source>Audit integrity</source>
            <translation>Intégrité de l'audit</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Active environment</source>
            <translation>Environnement actif</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6234" />
            <source>Recent request outcomes</source>
            <translation>Résultats des demandes récentes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6239" />
            <location filename="../zscaler_api_client.py" line="6317" />
            <location filename="../zscaler_api_client.py" line="6321" />
            <location filename="../zscaler_api_client.py" line="6361" />
            <location filename="../zscaler_api_client.py" line="6417" />
            <location filename="../zscaler_api_client.py" line="6434" />
            <source>Time</source>
            <translation>Temps</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6239" />
            <source>Activity</source>
            <translation>Activité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6239" />
            <location filename="../zscaler_api_client.py" line="6299" />
            <location filename="../zscaler_api_client.py" line="6317" />
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="6450" />
            <location filename="../zscaler_api_client.py" line="6465" />
            <location filename="../zscaler_api_client.py" line="6487" />
            <location filename="../zscaler_api_client.py" line="6512" />
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Status</source>
            <translation>Statut</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6240" />
            <source>Recent activity</source>
            <translation>Activité récente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6243" />
            <source>Refresh dashboard</source>
            <translation>Actualiser le tableau de bord</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6247" />
            <source>Dashboard</source>
            <translation>Tableau de bord</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6250" />
            <source>Previous policy JSON</source>
            <translation>Politique précédente JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6251" />
            <source>Proposed policy JSON</source>
            <translation>Politique proposée JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6258" />
            <source>Compare policies</source>
            <translation>Comparez les politiques</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6260" />
            <source>Export policy as JSON</source>
            <translation>Politique d'exportation au format JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6261" />
            <source>Export policy as YAML</source>
            <translation>Politique d'exportation au format YAML</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6262" />
            <source>Run compliance checks</source>
            <translation>Effectuer des contrôles de conformité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <location filename="../zscaler_api_client.py" line="7655" />
            <source>Policy diff</source>
            <translation>Différence de politique</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6266" />
            <source>Rules JSON: [{"name": "Allow staff", "conditions": {"group": "staff"}, "action": "allow"}]</source>
            <translation>Rules JSON: [{"name": "Allow staff", "conditions": {"group": "staff"}, "action": "allow"}]</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6267" />
            <source>Request context JSON: {"group": "staff"}</source>
            <translation>Request context JSON: {"group": "staff"}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6272" />
            <source>Simulate policy (local only)</source>
            <translation>Simuler la stratégie (local uniquement)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6273" />
            <location filename="../zscaler_api_client.py" line="7703" />
            <source>Simulation</source>
            <translation>Simulations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6276" />
            <source>CSV data, e.g. name,email
Ada,ada@example.com</source>
            <translation>Données CSV, par ex. nom, email
Ada,ada@exemple.com</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6279" />
            <source>Required columns (comma separated)</source>
            <translation>Colonnes obligatoires (séparées par des virgules)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6281" />
            <source>Validate bulk import</source>
            <translation>Valider l'importation groupée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6282" />
            <source>Bulk operations</source>
            <translation>Opérations groupées</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6285" />
            <source>Administrator</source>
            <translation>Administrateur</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6285" />
            <source>Analyst</source>
            <translation>Analyste</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6285" />
            <location filename="../zscaler_api_client.py" line="7438" />
            <source>Read only</source>
            <translation>Lecture seule</translation>
        </message>
        <message>
            <source>Optional local automation script; never runs without approval</source>
            <translation type="vanished">Script d'automatisation local en option ; ne fonctionne jamais sans approbation</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Local role:</source>
            <translation>Rôle local :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Alert threshold (errors):</source>
            <translation>Seuil d'alerte (erreurs) :</translation>
        </message>
        <message>
            <source>Webhook endpoint (disabled until approved):</source>
            <translation type="vanished">Point de terminaison Webhook (désactivé jusqu'à approbation) :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Local automation:</source>
            <translation>Automatisation locale :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6293" />
            <source>Save governance settings</source>
            <translation>Enregistrer les paramètres de gouvernance</translation>
        </message>
        <message>
            <source>Read-only mode blocks write requests. Webhooks and local automation are saved only; this app will ask before any execution.</source>
            <translation type="vanished">Le mode lecture seule bloque les demandes d’écriture. Les webhooks et l'automatisation locale sont enregistrés uniquement ; cette application demandera avant toute exécution.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6295" />
            <location filename="../zscaler_api_client.py" line="7712" />
            <location filename="../zscaler_api_client.py" line="7715" />
            <location filename="../zscaler_api_client.py" line="7718" />
            <location filename="../zscaler_api_client.py" line="7726" />
            <source>Governance</source>
            <translation>Gouvernance</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6298" />
            <source>Official integrations are optional. Credentials remain in the system keychain and no command runs automatically.</source>
            <translation>Les intégrations officielles sont facultatives. Les informations d'identification restent dans le trousseau du système et aucune commande ne s'exécute automatiquement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6299" />
            <source>Integration</source>
            <translation>Intégration</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6299" />
            <source>Recommended use</source>
            <translation>Utilisation recommandée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6302" />
            <source>Check local integrations</source>
            <translation>Vérifier les intégrations locales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6303" />
            <source>Prepare Terraform import</source>
            <translation>Préparer l'importation Terraform</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6304" />
            <source>Prepare MCP connection</source>
            <translation>Préparer la connexion MCP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6305" />
            <source>Prepare SDK configuration</source>
            <translation>Préparer la configuration du SDK</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6306" />
            <source>Send masked webhook test</source>
            <translation>Envoyer un test de webhook masqué</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6308" />
            <source>Copy reviewed command</source>
            <translation>Copier la commande révisée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6318" />
            <location filename="../zscaler_api_client.py" line="7765" />
            <location filename="../zscaler_api_client.py" line="7785" />
            <source>Integrations</source>
            <translation>Intégrations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6321" />
            <source>Event</source>
            <translation>Événement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6317" />
            <location filename="../zscaler_api_client.py" line="6321" />
            <location filename="../zscaler_api_client.py" line="6334" />
            <source>Details</source>
            <translation>Détails</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6323" />
            <source>Refresh audit trail</source>
            <translation>Actualiser la piste d'audit</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6324" />
            <location filename="../zscaler_api_client.py" line="6519" />
            <source>Schedule report</source>
            <translation>Rapport de planification</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6325" />
            <source>Create redacted support bundle</source>
            <translation>Créer un package de support rédigé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6326" />
            <source>Audit &amp; automation</source>
            <translation>Audit et automatisation</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6329" />
            <source>Local security posture uses redacted request history and audit integrity. It is an operational signal, not a tenant security assessment.</source>
            <translation>La posture de sécurité locale utilise l’historique des demandes expurgé et l’intégrité de l’audit. Il s'agit d'un signal opérationnel et non d'une évaluation de la sécurité des locataires.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6257" />
            <location filename="../zscaler_api_client.py" line="6334" />
            <location filename="../zscaler_api_client.py" line="6342" />
            <location filename="../zscaler_api_client.py" line="6361" />
            <location filename="../zscaler_api_client.py" line="6373" />
            <location filename="../zscaler_api_client.py" line="6378" />
            <location filename="../zscaler_api_client.py" line="6399" />
            <location filename="../zscaler_api_client.py" line="6412" />
            <location filename="../zscaler_api_client.py" line="6413" />
            <location filename="../zscaler_api_client.py" line="6437" />
            <location filename="../zscaler_api_client.py" line="6487" />
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Severity</source>
            <translation>Gravité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6334" />
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Finding</source>
            <translation>Trouver</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6335" />
            <source>Refresh security posture</source>
            <translation>Actualiser la posture de sécurité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6336" />
            <source>Security posture</source>
            <translation>Posture de sécurité</translation>
        </message>
        <message>
            <source>Build a redacted local investigation timeline. Prepared chains never send API requests automatically.</source>
            <translation type="vanished">Créez un calendrier d’enquête locale expurgé. Les chaînes préparées n’envoient jamais automatiquement de requêtes API.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6351" />
            <source>Investigation:</source>
            <translation>Enquête :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6352" />
            <source>API failure investigation</source>
            <translation>Enquête sur les échecs de l'API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6352" />
            <source>Change activity review</source>
            <translation>Examen des activités de changement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6352" />
            <source>Slow response investigation</source>
            <translation>Enquête à réponse lente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6353" />
            <source>Prepare investigation chain</source>
            <translation>Préparer la chaîne d'enquête</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6361" />
            <location filename="../zscaler_api_client.py" line="6373" />
            <source>Source</source>
            <translation>Source</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6342" />
            <location filename="../zscaler_api_client.py" line="6361" />
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Evidence</source>
            <translation>Preuve</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6204" />
            <source>Data scope:</source>
            <translation>Portée des données :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6207" />
            <source>Active environment: {name}</source>
            <translation>Active environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6211" />
            <source>All environments (cross-tenant overview)</source>
            <translation>Tous les environnements (aperçu multi-locataires)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6213" />
            <source>Analytics are tenant-isolated by default. Cross-tenant scope is explicit and available in Advanced mode.</source>
            <translation>Les analyses sont isolées des locataires par défaut. La portée entre locataires est explicite et disponible en mode avancé.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Open alerts</source>
            <translation>Ouvrir les alertes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6237" />
            <source>Recent request latency (ms)</source>
            <translation>Latence des requêtes récentes (ms)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6239" />
            <location filename="../zscaler_api_client.py" line="6321" />
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Environment</source>
            <translation>Environnement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6244" />
            <source>Auto-refresh local signals</source>
            <translation>Actualisation automatique des signaux locaux</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6245" />
            <source>Every 30 seconds</source>
            <translation>Toutes les 30 secondes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6245" />
            <source>Every minute</source>
            <translation>Chaque minute</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6245" />
            <source>Every 5 minutes</source>
            <translation>Toutes les 5 minutes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6254" />
            <source>Policy rule overview</source>
            <translation>Présentation des règles de stratégie</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <location filename="../zscaler_api_client.py" line="6257" />
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Rule</source>
            <translation>Règle</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Action</source>
            <translation>Action</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <source>Conditions</source>
            <translation>Conditions</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <source>State</source>
            <translation>État</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6257" />
            <source>Best-practice finding</source>
            <translation>Recherche de bonnes pratiques</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Order</source>
            <translation>Commande</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Decision</source>
            <translation>Décision</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6289" />
            <source>Show webhook endpoint</source>
            <translation>Afficher le point de terminaison du webhook</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6291" />
            <source>Absolute path to a reviewed local Python automation</source>
            <translation>Chemin absolu vers une automatisation Python locale révisée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Webhook endpoint (stored in system keychain):</source>
            <translation>Point de terminaison du Webhook (stocké dans le trousseau du système) :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6294" />
            <source>Read-only mode blocks write requests and local automation. Every webhook or local automation execution requires explicit approval.</source>
            <translation>Le mode lecture seule bloque les demandes d’écriture et l’automatisation locale. Chaque webhook ou exécution d'automatisation locale nécessite une approbation explicite.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6307" />
            <source>Run reviewed local automation</source>
            <translation>Exécuter une automatisation locale révisée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6309" />
            <source>Send current masked alerts</source>
            <translation>Envoyer des alertes masquées actuelles</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6316" />
            <source>Webhook delivery history</source>
            <translation>Historique de diffusion des webhooks</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6317" />
            <source>Delivery</source>
            <translation>Livraison</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6339" />
            <source>Local alerts evaluate retained, redacted request history only. They do not monitor the tenant in real time or send data externally.</source>
            <translation>Les alertes locales évaluent uniquement l’historique des demandes conservé et expurgé. Ils ne surveillent pas le locataire en temps réel et n'envoient pas de données à l'extérieur.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6342" />
            <source>Alert</source>
            <translation>Alerte</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6342" />
            <source>Count</source>
            <translation>Compter</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6343" />
            <source>Refresh local alerts</source>
            <translation>Actualiser les alertes locales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6344" />
            <source>Copy masked alert summary</source>
            <translation>Copier le résumé des alertes masquées</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6345" />
            <source>Export alerts as JSON</source>
            <translation>Exporter les alertes au format JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6346" />
            <source>Export alerts as Markdown</source>
            <translation>Exporter les alertes en tant que Markdown</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6347" />
            <source>Alert Center</source>
            <translation>Centre d'alerte</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6360" />
            <source>Security investigation evidence map</source>
            <translation>Carte des preuves des enquêtes de sécurité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6381" />
            <source>Refresh investigation</source>
            <translation>Actualiser l'enquête</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6382" />
            <location filename="../zscaler_api_client.py" line="6856" />
            <source>Export incident evidence</source>
            <translation>Exporter les preuves d'incident</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6384" />
            <source>Incident investigation</source>
            <translation>Enquête sur les incidents</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6461" />
            <source>Create a local review from Policy diff. Approval records intent only; no policy, Terraform, or Git change is applied automatically.</source>
            <translation>Créez un avis local à partir de Policy diff. L'approbation enregistre uniquement l'intention ; aucune modification de politique, Terraform ou Git n’est appliquée automatiquement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Change ticket or reference</source>
            <translation>Changer de billet ou de référence</translation>
        </message>
        <message>
            <source>Reviewer name</source>
            <translation type="vanished">Nom de l'évaluateur</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Reference:</source>
            <translation>Référence :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Reviewer:</source>
            <translation>Réviseur :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6467" />
            <source>Prepare change review</source>
            <translation>Préparer la révision des modifications</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6468" />
            <source>Record local approval</source>
            <translation>Enregistrer l’approbation locale</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6469" />
            <location filename="../zscaler_api_client.py" line="7162" />
            <source>Export Git review</source>
            <translation>Exporter la revue Git</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6470" />
            <location filename="../zscaler_api_client.py" line="7158" />
            <source>Export rollback plan</source>
            <translation>Plan de restauration des exportations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <location filename="../zscaler_api_client.py" line="7122" />
            <location filename="../zscaler_api_client.py" line="7144" />
            <location filename="../zscaler_api_client.py" line="7147" />
            <location filename="../zscaler_api_client.py" line="7156" />
            <source>Change control</source>
            <translation>Changer le contrôle</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6499" />
            <source>Generate local, redacted reports for leadership, SOC, or operations. Reports contain no credentials and are not sent automatically.</source>
            <translation>Générez des rapports locaux rédigés pour la direction, le SOC ou les opérations. Les rapports ne contiennent aucune information d'identification et ne sont pas envoyés automatiquement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6500" />
            <source>Report type:</source>
            <translation>Type de rapport :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6501" />
            <location filename="../zscaler_api_client.py" line="7299" />
            <location filename="../zscaler_api_client.py" line="7322" />
            <location filename="../zscaler_api_client.py" line="7929" />
            <location filename="../zscaler_api_client.py" line="8030" />
            <source>CISO security summary</source>
            <translation>Résumé de la sécurité du RSSI</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6501" />
            <location filename="../zscaler_api_client.py" line="7299" />
            <location filename="../zscaler_api_client.py" line="7322" />
            <location filename="../zscaler_api_client.py" line="7929" />
            <source>SOC investigation summary</source>
            <translation>Résumé de l'enquête SOC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6501" />
            <location filename="../zscaler_api_client.py" line="7299" />
            <location filename="../zscaler_api_client.py" line="7322" />
            <location filename="../zscaler_api_client.py" line="7929" />
            <source>Operations health summary</source>
            <translation>Résumé de l’état des opérations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6502" />
            <source>Generate report</source>
            <translation>Générer un rapport</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6504" />
            <source>Security posture report artwork</source>
            <translation>Illustration du rapport sur la posture de sécurité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6507" />
            <location filename="../zscaler_api_client.py" line="7365" />
            <source>Export report as Markdown</source>
            <translation>Exporter le rapport en tant que Markdown</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6508" />
            <location filename="../zscaler_api_client.py" line="7359" />
            <source>Export report as JSON</source>
            <translation>Exporter le rapport au format JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6509" />
            <location filename="../zscaler_api_client.py" line="7362" />
            <source>Export visual report as HTML</source>
            <translation>Exporter le rapport visuel au format HTML</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6510" />
            <source>Scheduled reports</source>
            <translation>Rapports planifiés</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Name</source>
            <translation>Nom</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Type</source>
            <translation>Tapez</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Cadence</source>
            <translation>Cadence</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Next run</source>
            <translation>Prochaine exécution</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Mode</source>
            <translation>Mode</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6520" />
            <source>Run selected now</source>
            <translation>Exécuter sélectionné maintenant</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6521" />
            <source>Enable or pause</source>
            <translation>Activer ou mettre en pause</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6522" />
            <source>Remove schedule</source>
            <translation>Supprimer le planning</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6523" />
            <source>Refresh schedules</source>
            <translation>Actualiser les plannings</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Reports</source>
            <translation>Rapports</translation>
        </message>
        <message>
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and every run requires approval.</source>
            <translation type="vanished">Exécutez une séquence révisée sur l’environnement authentifié actif. Les chaînes sont limitées à 20 étapes, restent sur l'hôte de produit sélectionné et chaque exécution nécessite une approbation.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6529" />
            <source>Chain JSON</source>
            <translation>Chaîne JSON</translation>
        </message>
        <message>
            <source>A JSON list of API requests. Relative paths use the active product host.</source>
            <translation type="vanished">Une liste JSON de requêtes API. Les chemins relatifs utilisent l'hôte de produit actif.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6537" />
            <source>Stop after the first failed step</source>
            <translation>Arrêtez-vous après la première étape échouée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6538" />
            <source>Validate chain</source>
            <translation>Valider la chaîne</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6539" />
            <location filename="../zscaler_api_client.py" line="7444" />
            <source>Run approved chain</source>
            <translation>Exécuter une chaîne approuvée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6540" />
            <source>Cancel chain</source>
            <translation>Annuler la chaîne</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6541" />
            <location filename="../zscaler_api_client.py" line="7516" />
            <source>Export masked chain results</source>
            <translation>Exporter les résultats de la chaîne masquée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6542" />
            <location filename="../zscaler_api_client.py" line="7434" />
            <location filename="../zscaler_api_client.py" line="7440" />
            <location filename="../zscaler_api_client.py" line="7511" />
            <location filename="../zscaler_api_client.py" line="7515" />
            <source>API chains</source>
            <translation>Chaînes d'API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6545" />
            <source>Build a local digital twin of policy order. It explains decisions, highlights overlap and shadowing, estimates change blast radius, and never applies a policy.</source>
            <translation>Construisez un jumeau numérique local de l’ordre politique. Il explique les décisions, met en évidence les chevauchements et les ombres, estime les changements de rayon d'explosion et n'applique jamais de politique.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6547" />
            <source>Policy rules JSON or an object containing a rules list</source>
            <translation>Règles de stratégie JSON ou un objet contenant une liste de règles</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6548" />
            <source>Analyze policy twin</source>
            <translation>Analyser le jumeau de politique</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6549" />
            <location filename="../zscaler_api_client.py" line="7600" />
            <source>Export twin evidence</source>
            <translation>Exporter des preuves de jumeaux</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6550" />
            <source>Load proposed policy</source>
            <translation>Charger la stratégie proposée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6551" />
            <source>Test context:</source>
            <translation>Contexte du test :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6551" />
            <source>Request context JSON</source>
            <translation>Contexte de requête JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6552" />
            <source>Explain decision</source>
            <translation>Expliquer la décision</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Rules</source>
            <translation>Règles</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Conflicts</source>
            <translation>Conflits</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Shadowed</source>
            <translation>Ombré</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Blast radius</source>
            <translation>Rayon de souffle</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6558" />
            <source>Policy order and conflict graph</source>
            <translation>Ordre des politiques et graphique des conflits</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Earlier rule</source>
            <translation>Règle antérieure</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Later rule</source>
            <translation>Règle ultérieure</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <location filename="../zscaler_api_client.py" line="6378" />
            <location filename="../zscaler_api_client.py" line="6399" />
            <location filename="../zscaler_api_client.py" line="6413" />
            <location filename="../zscaler_api_client.py" line="6437" />
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Explanation</source>
            <translation>Explication</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6236" />
            <location filename="../zscaler_api_client.py" line="6389" />
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Latency</source>
            <translation>Latence</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6350" />
            <source>Correlate retained local activity with every object in the current masked REST or GraphQL response. Paths are investigation hypotheses, never proof of compromise, and prepared chains never run automatically.</source>
            <translation>Corrélez l’activité locale conservée avec chaque objet dans la réponse REST ou GraphQL masquée actuelle. Les chemins sont des hypothèses d’investigation, jamais une preuve de compromission, et les chaînes préparées ne fonctionnent jamais automatiquement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6354" />
            <source>Include current API/GraphQL response</source>
            <translation>Inclure la réponse API/GraphQL actuelle</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6355" />
            <source>Correlate entities</source>
            <translation>Corréler les entités</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6362" />
            <source>Evidence timeline</source>
            <translation>Chronologie des preuves</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>Entities</source>
            <translation>Entités</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>Relationships</source>
            <translation>Relations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>Potential paths</source>
            <translation>Chemins potentiels</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>High-risk entities</source>
            <translation>Entités à haut risque</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6370" />
            <source>Filter entities:</source>
            <translation>Filtrer les entités :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6370" />
            <source>Name, type, risk, or evidence source</source>
            <translation>Nom, type, risque ou source de preuves</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6371" />
            <source>SOC entity and potential attack-path graph</source>
            <translation>Entité SOC et graphique du chemin d'attaque potentiel</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6372" />
            <location filename="../zscaler_api_client.py" line="6802" />
            <source>Select an entity to inspect its local evidence.</source>
            <translation>Sélectionnez une entité pour inspecter ses preuves locales.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <source>Target</source>
            <translation>Cible</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <source>Hops</source>
            <translation>Houblon</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6374" />
            <source>Entity graph</source>
            <translation>Graphique d'entité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6377" />
            <source>Explainable signals are derived only from retained local evidence and the selected response. Validate them against authoritative product telemetry.</source>
            <translation>Les signaux explicables sont dérivés uniquement des preuves locales retenues et de la réponse sélectionnée. Validez-les par rapport à la télémétrie des produits faisant autorité.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6378" />
            <source>Signal</source>
            <translation>Signal</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6378" />
            <source>Entity</source>
            <translation>Entité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>Correlated signals</source>
            <translation>Signaux corrélés</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6383" />
            <location filename="../zscaler_api_client.py" line="6865" />
            <source>Export entity graph</source>
            <translation>Exporter le graphique d'entité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <source>Trace observed digital experience from user and device through network and service edge to the application. The parser consumes the complete current REST or GraphQL response, marks missing stages explicitly, and never queries the tenant automatically.</source>
            <translation>Suivez l’expérience numérique observée depuis l’utilisateur et l’appareil jusqu’à l’application en passant par le réseau et le service. L'analyseur consomme la réponse REST ou GraphQL actuelle complète, marque explicitement les étapes manquantes et n'interroge jamais automatiquement le locataire.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6389" />
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Experience score</source>
            <translation>Score d'expérience</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6389" />
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Packet loss</source>
            <translation>Perte de paquets</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6389" />
            <source>Journey issues</source>
            <translation>Problèmes de voyage</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6393" />
            <source>Observed user-to-application experience journey</source>
            <translation>Parcours d’expérience utilisateur-application observé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6396" />
            <source>Trend metric:</source>
            <translation>Métrique de tendance :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Observed value</source>
            <translation>Valeur observée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6399" />
            <source>Stage</source>
            <translation>Scène</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6399" />
            <source>Metric</source>
            <translation>Métrique</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6401" />
            <source>Analyze current experience response</source>
            <translation>Analyser la réponse de l'expérience actuelle</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6402" />
            <location filename="../zscaler_api_client.py" line="6930" />
            <source>Export masked journey</source>
            <translation>Exporter le parcours masqué</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6403" />
            <source>Experience journey</source>
            <translation>Expérience de voyage</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6421" />
            <source>Build and test explainable detections against retained local request history. Rules use a bounded declarative grammar—no Python, eval, tenant writes, network calls, or automatic remediation.</source>
            <translation>Créez et testez des détections explicables par rapport à l’historique des requêtes locales conservé. Les règles utilisent une grammaire déclarative limitée : pas de Python, d'évaluation, d'écriture de locataire, d'appel réseau ou de correction automatique.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6422" />
            <source>Template:</source>
            <translation>Modèle :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Server errors</source>
            <translation>Erreurs de serveur</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Rate-limit responses</source>
            <translation>Réponses à limite de débit</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>High request latency</source>
            <translation>Latence de requête élevée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Write activity</source>
            <translation>Activité d'écriture</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Authentication failures</source>
            <translation>Échecs d'authentification</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Anomaly sensitivity:</source>
            <translation>Sensibilité aux anomalies :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Relaxed</source>
            <translation>Détendu</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Balanced</source>
            <translation>Équilibré</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Sensitive</source>
            <translation>Sensible</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6427" />
            <source>Declarative detection rule JSON</source>
            <translation>Règle de détection déclarative JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6428" />
            <source>Validate rule</source>
            <translation>Valider la règle</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6429" />
            <source>Run local detection</source>
            <translation>Exécuter une détection locale</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6430" />
            <source>Analyze adaptive anomalies</source>
            <translation>Analyser les anomalies adaptatives</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6431" />
            <location filename="../zscaler_api_client.py" line="7040" />
            <source>Export masked detection evidence</source>
            <translation>Exporter des preuves de détection masquées</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="6457" />
            <source>URL</source>
            <translation>URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6437" />
            <source>Endpoint</source>
            <translation>Point de terminaison</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6437" />
            <source>Observed</source>
            <translation>Observé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6438" />
            <source>Detection lab</source>
            <translation>Laboratoire de détection</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6475" />
            <source>Continuously evaluate a transparent local evidence baseline. Framework mappings are navigational aids—not certification—and no tenant query or remediation runs automatically.</source>
            <translation>Évaluez en permanence une base de données locales transparente. Les mappages de framework sont des aides à la navigation (et non une certification) et aucune requête ou correction de locataire ne s'exécute automatiquement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6476" />
            <source>Framework view:</source>
            <translation>Vue du cadre :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6477" />
            <source>All local controls</source>
            <translation>Tous les contrôles locaux</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6477" />
            <source>NIST CSF 2.0 functions</source>
            <translation>Fonctions NIST CSF 2.0</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6477" />
            <source>CISA Zero Trust pillars</source>
            <translation>Piliers CISA Zero Trust</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6478" />
            <source>Include proposed policy from Policy diff</source>
            <translation>Inclure la stratégie proposée à partir de la différence de stratégie</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6479" />
            <source>Evaluate now</source>
            <translation>Évaluez maintenant</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7334" />
            <source>Assurance score</source>
            <translation>Score d'assurance</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Passed</source>
            <translation>Réussi</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7232" />
            <source>Not evaluated</source>
            <translation>Non évalué</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <source>Evidence coverage</source>
            <translation>Couverture des preuves</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Control</source>
            <translation>Contrôle</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Control objective</source>
            <translation>Objectif du contrôle</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Framework mapping</source>
            <translation>Cartographie du cadre</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Recommendation</source>
            <translation>Recommandation</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6488" />
            <source>Leadership narrative</source>
            <translation>Récit de leadership</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6457" />
            <location filename="../zscaler_api_client.py" line="6490" />
            <source>Score</source>
            <translation>Score</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6310" />
            <source>JSON Lines (SIEM/SOAR)</source>
            <translation>Lignes JSON (SIEM/SOAR)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6311" />
            <location filename="../zscaler_api_client.py" line="7772" />
            <source>Export masked security events</source>
            <translation>Exporter les événements de sécurité masqués</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6312" />
            <location filename="../zscaler_api_client.py" line="7778" />
            <source>Export read-only MCP manifest</source>
            <translation>Exporter le manifeste MCP en lecture seule</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6313" />
            <location filename="../zscaler_api_client.py" line="7786" />
            <source>Export Terraform review handoff</source>
            <translation>Transfert de la révision d'exportation de Terraform</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6406" />
            <source>Inspect the complete current REST or GraphQL response for explicit internet exposure, vulnerability severity and broad or write-capable access. Findings are local hypotheses and deception suggestions are never deployed automatically.</source>
            <translation>Inspectez la réponse REST ou GraphQL actuelle complète pour détecter une exposition Internet explicite, la gravité de la vulnérabilité et un accès large ou capable d'écrire. Les résultats sont des hypothèses locales et les suggestions de tromperie ne sont jamais déployées automatiquement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Exposure signals</source>
            <translation>Signaux d'exposition</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>High-risk assets</source>
            <translation>Actifs à haut risque</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Access findings</source>
            <translation>Accéder aux résultats</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Broad privileges</source>
            <translation>De larges privilèges</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6412" />
            <source>Asset</source>
            <translation>Actif</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6412" />
            <source>Risk score</source>
            <translation>Score de risque</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6412" />
            <source>Observed factors</source>
            <translation>Facteurs observés</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6413" />
            <source>Subject</source>
            <translation>Sujet</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6413" />
            <source>Permission field</source>
            <translation>Champ d'autorisation</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6414" />
            <source>Defensive deception opportunities</source>
            <translation>Opportunités de tromperie défensive</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>Analyze current exposure and access</source>
            <translation>Analyser l’exposition et l’accès actuels</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <location filename="../zscaler_api_client.py" line="6963" />
            <source>Export masked exposure evidence</source>
            <translation>Exporter des preuves d'exposition masquée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <location filename="../zscaler_api_client.py" line="6981" />
            <location filename="../zscaler_api_client.py" line="6983" />
            <source>Investigation notebook</source>
            <translation>Carnet d'enquête</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <source>Note title</source>
            <translation>Titre de la note</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <source>Comma-separated tags</source>
            <translation>Balises séparées par des virgules</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <source>Masked investigation observations, decisions and follow-up</source>
            <translation>Observations, décisions et suivi d'enquête masquée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Save local note</source>
            <translation>Enregistrer la note locale</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <location filename="../zscaler_api_client.py" line="6988" />
            <source>Export masked notebook</source>
            <translation>Exporter le bloc-notes masqué</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Title</source>
            <translation>Titre</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Tags</source>
            <translation>Balises</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Preview</source>
            <translation>Aperçu</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6418" />
            <source>Exposure &amp; access</source>
            <translation>Exposition et accès</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6442" />
            <source>Use guided, locally tracked response and recovery checklists. A completed step records only operator intent in the local audit trail; it never changes a tenant or closes an authoritative incident.</source>
            <translation>Utilisez des listes de contrôle de réponse et de récupération guidées et suivies localement. Une étape terminée enregistre uniquement l'intention de l'opérateur dans la piste d'audit locale ; il ne change jamais de locataire ni ne clôture un incident faisant autorité.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6443" />
            <source>Playbook:</source>
            <translation>Livre de jeu :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>API/service disruption</source>
            <translation>Interruption des API/services</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>High-risk policy change</source>
            <translation>Un changement de politique à haut risque</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>Digital experience degradation</source>
            <translation>Dégradation de l'expérience numérique</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>Possible credential exposure</source>
            <translation>Exposition possible des titres de compétences</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>Ransomware containment support</source>
            <translation>Prise en charge du confinement des ransomwares</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6447" />
            <source>Mark selected step complete</source>
            <translation>Marquer l'étape sélectionnée comme terminée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <location filename="../zscaler_api_client.py" line="7082" />
            <source>Export masked playbook evidence</source>
            <translation>Exporter les preuves masquées du playbook</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <source>Guidance</source>
            <translation>Conseils</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <source>Local evidence</source>
            <translation>Preuve locale</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6451" />
            <source>Smart API planner (review only)</source>
            <translation>Planificateur d'API intelligent (révision uniquement)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <source>Describe a goal to rank documented Automation Hub operations deterministically. Read operations are preferred; tenant values are never guessed and nothing runs automatically.</source>
            <translation>Décrivez un objectif visant à classer les opérations documentées d'Automation Hub de manière déterministe. Les opérations de lecture sont préférées ; les valeurs des locataires ne sont jamais devinées et rien ne s'exécute automatiquement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6453" />
            <source>Example: investigate slow ZDX application experience</source>
            <translation>Exemple : enquêter sur l'expérience lente de l'application ZDX</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6454" />
            <source>Plan documented operations</source>
            <translation>Planifier les opérations documentées</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6455" />
            <source>Copy safe reads to API Chains</source>
            <translation>Copier les lectures sécurisées dans les chaînes API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6457" />
            <source>Product</source>
            <translation>Produit</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6457" />
            <source>Operation</source>
            <translation>Fonctionnement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6458" />
            <location filename="../zscaler_api_client.py" line="7074" />
            <source>Response playbooks</source>
            <translation>Manuels de réponse</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Change owner</source>
            <translation>Changer de propriétaire</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Independent reviewer</source>
            <translation>Examinateur indépendant</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Owner:</source>
            <translation>Propriétaire :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6463" />
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Maintenance window confirmed</source>
            <translation>Fenêtre de maintenance confirmée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6463" />
            <source>Local simulation reviewed</source>
            <translation>Simulation locale revue</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6463" />
            <source>Rollback prepared</source>
            <translation>Restauration préparée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6465" />
            <source>Gate</source>
            <translation>Porte</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6465" />
            <source>Required</source>
            <translation>Obligatoire</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6471" />
            <location filename="../zscaler_api_client.py" line="7169" />
            <location filename="../zscaler_api_client.py" line="7173" />
            <location filename="../zscaler_api_client.py" line="7174" />
            <source>Verify rollback artifact</source>
            <translation>Vérifier l'artefact de restauration</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6491" />
            <source>Local baseline:</source>
            <translation>Base de référence locale :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6492" />
            <source>Save assessment baseline</source>
            <translation>Enregistrer la référence de l'évaluation</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6493" />
            <location filename="../zscaler_api_client.py" line="7272" />
            <source>Export signed evidence</source>
            <translation>Exporter des preuves signées</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6494" />
            <location filename="../zscaler_api_client.py" line="7279" />
            <source>Verify signed evidence</source>
            <translation>Vérifier les preuves signées</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6496" />
            <location filename="../zscaler_api_client.py" line="7203" />
            <location filename="../zscaler_api_client.py" line="7259" />
            <source>Continuous assurance</source>
            <translation>Assurance continue</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6561" />
            <location filename="../zscaler_api_client.py" line="7620" />
            <location filename="../zscaler_api_client.py" line="7624" />
            <location filename="../zscaler_api_client.py" line="7626" />
            <location filename="../zscaler_api_client.py" line="7638" />
            <source>Policy time travel</source>
            <translation>Voyage dans le temps</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6563" />
            <source>Save snapshot</source>
            <translation>Enregistrer un instantané</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6564" />
            <source>Use as baseline</source>
            <translation>Utiliser comme référence</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6565" />
            <source>Load snapshot</source>
            <translation>Charger un instantané</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6566" />
            <source>Delete snapshot</source>
            <translation>Supprimer l'instantané</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6568" />
            <location filename="../zscaler_api_client.py" line="7555" />
            <location filename="../zscaler_api_client.py" line="7590" />
            <location filename="../zscaler_api_client.py" line="7615" />
            <source>Policy twin</source>
            <translation>Jumeau politique</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6610" />
            <source>All environments</source>
            <translation>Tous les environnements</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6626" />
            <source>Showing local evidence for: {name}</source>
            <translation>Showing local evidence for: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6628" />
            <source>Cross-tenant overview is active. Exports and integrations will include all local environments.</source>
            <translation>La vue d’ensemble entre locataires est active. Les exportations et les intégrations incluront tous les environnements locaux.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6634" />
            <location filename="../zscaler_api_client.py" line="6998" />
            <location filename="../zscaler_api_client.py" line="7404" />
            <source>Invalid JSON: </source>
            <translation>JSON invalide : </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6654" />
            <source>Audit chain is valid</source>
            <translation>La chaîne d'audit est valide</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6654" />
            <source>Audit chain needs review</source>
            <translation>La chaîne d’audit doit être revue</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6660" />
            <source>Success</source>
            <translation>Succès</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6660" />
            <source>Other</source>
            <translation>Autre</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6674" />
            <location filename="../zscaler_api_client.py" line="7300" />
            <source>Posture score: {score}/100</source>
            <translation>Posture score: {score}/100</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6676" />
            <location filename="../zscaler_api_client.py" line="6707" />
            <location filename="../zscaler_api_client.py" line="6774" />
            <location filename="../zscaler_api_client.py" line="7233" />
            <location filename="../zscaler_api_client.py" line="7314" />
            <location filename="../zscaler_api_client.py" line="7666" />
            <source>Critical</source>
            <translation>Critique</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6676" />
            <location filename="../zscaler_api_client.py" line="6707" />
            <location filename="../zscaler_api_client.py" line="6774" />
            <location filename="../zscaler_api_client.py" line="6838" />
            <location filename="../zscaler_api_client.py" line="7233" />
            <location filename="../zscaler_api_client.py" line="7314" />
            <location filename="../zscaler_api_client.py" line="7572" />
            <location filename="../zscaler_api_client.py" line="7666" />
            <source>High</source>
            <translation>Élevé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6676" />
            <location filename="../zscaler_api_client.py" line="6707" />
            <location filename="../zscaler_api_client.py" line="6774" />
            <location filename="../zscaler_api_client.py" line="6838" />
            <location filename="../zscaler_api_client.py" line="7233" />
            <location filename="../zscaler_api_client.py" line="7314" />
            <location filename="../zscaler_api_client.py" line="7572" />
            <location filename="../zscaler_api_client.py" line="7666" />
            <source>Medium</source>
            <translation>Moyen</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6676" />
            <location filename="../zscaler_api_client.py" line="6707" />
            <location filename="../zscaler_api_client.py" line="6774" />
            <location filename="../zscaler_api_client.py" line="7233" />
            <location filename="../zscaler_api_client.py" line="7314" />
            <location filename="../zscaler_api_client.py" line="7572" />
            <location filename="../zscaler_api_client.py" line="7666" />
            <source>Low</source>
            <translation>Faible</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6676" />
            <location filename="../zscaler_api_client.py" line="6838" />
            <location filename="../zscaler_api_client.py" line="7314" />
            <location filename="../zscaler_api_client.py" line="7572" />
            <location filename="../zscaler_api_client.py" line="7666" />
            <source>Info</source>
            <translation>Informations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6680" />
            <source>Audit integrity needs review</source>
            <translation>L’intégrité de l’audit doit être revue</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6680" />
            <source>The local audit chain did not verify.</source>
            <translation>La chaîne d'audit locale n'a pas vérifié.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6681" />
            <source>Repeated API failures</source>
            <translation>Échecs répétés de l'API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6681" />
            <source>{count} failed requests are in local history.</source>
            <translation>{count} failed requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6682" />
            <source>API failures observed</source>
            <translation>Pannes d'API observées</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6682" />
            <source>{count} request(s) need review.</source>
            <translation>{count} request(s) need review.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6683" />
            <source>Change activity burst</source>
            <translation>Modifier l'activité en rafale</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6683" />
            <source>{count} write requests are in local history.</source>
            <translation>{count} write requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6684" />
            <source>Slow API responses</source>
            <translation>Réponses API lentes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6684" />
            <source>{count} request(s) took ten seconds or more.</source>
            <translation>{count} request(s) took ten seconds or more.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6685" />
            <source>No local telemetry yet</source>
            <translation>Pas encore de télémétrie locale</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6685" />
            <source>Send or import redacted requests to establish a local baseline.</source>
            <translation>Envoyez ou importez des demandes rédigées pour établir une référence locale.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6706" />
            <source>{count} local alert(s) · error threshold: {threshold}</source>
            <translation>{count} local alert(s) · error threshold: {threshold}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6712" />
            <source>The local audit chain needs review.</source>
            <translation>La chaîne d’audit locale doit être revue.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6713" />
            <source>Local failed requests reached the configured threshold.</source>
            <translation>Les demandes locales ayant échoué ont atteint le seuil configuré.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6714" />
            <source>API rate limiting was observed in local history.</source>
            <translation>Une limitation du débit de l’API a été observée dans l’histoire locale.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6715" />
            <source>A response reported no remaining API rate-limit capacity.</source>
            <translation>Une réponse n’a signalé aucune capacité restante de limite de débit API.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6716" />
            <source>The latest request failed after successful requests to the same endpoint.</source>
            <translation>La dernière requête a échoué après des requêtes réussies vers le même point de terminaison.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6717" />
            <source>The latest endpoint response was much slower than its local baseline.</source>
            <translation>La dernière réponse du point final a été beaucoup plus lente que sa référence locale.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6718" />
            <source>Three or more local requests took ten seconds or more.</source>
            <translation>Trois requêtes locales ou plus ont pris dix secondes ou plus.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6736" />
            <source>Local alert summary</source>
            <translation>Résumé des alertes locales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6736" />
            <source>Error threshold: {threshold}</source>
            <translation>Error threshold: {threshold}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6736" />
            <location filename="../zscaler_api_client.py" line="7300" />
            <location filename="../zscaler_api_client.py" line="7828" />
            <location filename="../zscaler_api_client.py" line="7889" />
            <source>Data scope: {name}</source>
            <translation>Data scope: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6738" />
            <source>No local alerts.</source>
            <translation>Aucune alerte locale.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6740" />
            <source>Count: {count}</source>
            <translation>Count: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6745" />
            <source>Export local alerts</source>
            <translation>Exporter les alertes locales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6774" />
            <source>Normal</source>
            <translation>Normale</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6779" />
            <source>Observed relationship chain across local evidence; validate before treating it as an exploitable attack path.</source>
            <translation>Chaîne de relations observée à travers les preuves locales ; validez avant de le traiter comme un chemin d’attaque exploitable.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6785" />
            <source>Endpoint failure evidence</source>
            <translation>Preuve de défaillance du point de terminaison</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6785" />
            <source>Relationship concentration</source>
            <translation>Concentration des relations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6785" />
            <source>Security indicator observed</source>
            <translation>Indicateur de sécurité observé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6787" />
            <source>The endpoint has locally retained server or network failure evidence.</source>
            <translation>Le point de terminaison dispose de preuves de défaillance du serveur ou du réseau conservées localement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6788" />
            <source>The entity is connected to an unusually broad set of locally observed relationships.</source>
            <translation>L’entité est connectée à un ensemble inhabituellement large de relations observées localement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6789" />
            <source>A threat, exposure, vulnerability, or indicator-like object was present in the response.</source>
            <translation>Une menace, une exposition, une vulnérabilité ou un objet de type indicateur était présent dans la réponse.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6798" />
            <source>The graph reached its local safety limit; use the filter or export the evidence for complete review.</source>
            <translation>Le graphique a atteint sa limite de sécurité locale ; utilisez le filtre ou exportez les preuves pour un examen complet.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6800" />
            <source>No correlatable entities are available in the selected local scope.</source>
            <translation>Aucune entité corrélable n'est disponible dans la portée locale sélectionnée.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6822" />
            <source>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</source>
            <translation>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6841" />
            <source>Request</source>
            <translation>Demande</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6841" />
            <source>Audit</source>
            <translation>Vérification</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6847" />
            <source>1. Review failed requests in the local timeline.
2. Select the matching product and endpoint in API Explorer.
3. Run the read-only status or list operation.
4. Compare the masked response with the audit trail.
5. Export evidence or open a change review; no remediation is sent automatically.</source>
            <translation>1. Examinez les demandes ayant échoué dans la chronologie locale.
2. Sélectionnez le produit et le point de terminaison correspondants dans API Explorer.
3. Exécutez l'opération d'état ou de liste en lecture seule.
4. Comparez la réponse masquée avec la piste d'audit.
5. Exportez des preuves ou ouvrez une révision des modifications ; aucune remédiation n’est envoyée automatiquement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6848" />
            <source>1. Review recent write requests and audit events.
2. Export or load the current policy object.
3. Use Policy diff and local simulation.
4. Run compliance checks.
5. Prepare a reviewed Terraform or Git change; no apply is sent automatically.</source>
            <translation>1. Examinez les demandes d’écriture et les événements d’audit récents.
2. Exportez ou chargez l'objet de stratégie actuel.
3. Utilisez la différence de politique et la simulation locale.
4. Exécutez des contrôles de conformité.
5. Préparez une modification Terraform ou Git révisée ; aucune candidature n’est envoyée automatiquement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6849" />
            <source>1. Identify slow requests in the local timeline.
2. Review response status, duration, and rate-limit headers.
3. Query the relevant ZDX or product status endpoint.
4. Compare against recent requests.
5. Export the masked incident evidence for escalation.</source>
            <translation>1. Identifiez les demandes lentes dans la chronologie locale.
2. Vérifiez l'état de la réponse, la durée et les en-têtes de limite de débit.
3. Recherchez le point de terminaison ZDX ou l'état du produit concerné.
4. Comparez avec les demandes récentes.
5. Exportez les preuves d'incident masquées pour escalade.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6898" />
            <source>{value:g} ms</source>
            <translation>{value:g} ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>User</source>
            <translation>Utilisateur</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Device</source>
            <translation>Appareil</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Network</source>
            <translation>Réseau</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Service edge</source>
            <translation>Bord de service</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Application</source>
            <translation>Demande</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Device score</source>
            <translation>Score de l'appareil</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Application score</source>
            <translation>Note de candidature</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Service-edge score</source>
            <translation>Score de service</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Jitter</source>
            <translation>Gigue</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>DNS time</source>
            <translation>Heure DNS</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>TCP connect time</source>
            <translation>Temps de connexion TCP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Page fetch time</source>
            <translation>Temps de récupération de la page</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Availability</source>
            <translation>Disponibilité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>CPU</source>
            <translation>Processeur</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Memory</source>
            <translation>Mémoire</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Overall experience score is below 70</source>
            <translation>Le score d'expérience global est inférieur à 70</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Device score is below 70</source>
            <translation>Le score de l'appareil est inférieur à 70</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Application score is below 70</source>
            <translation>Le score de candidature est inférieur à 70</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Service-edge score is below 70</source>
            <translation>Le score de service-edge est inférieur à 70</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed latency exceeds 250 ms</source>
            <translation>La latence observée dépasse 250 ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed packet loss exceeds 2%</source>
            <translation>La perte de paquets observée dépasse 2 %</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed jitter exceeds 40 ms</source>
            <translation>La gigue observée dépasse 40 ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed availability is below 99%</source>
            <translation>La disponibilité observée est inférieure à 99%</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6918" />
            <source>Schema-tolerant local interpretation of observed API fields. Thresholds are transparent operational hints, not Zscaler health verdicts or SLA determinations.</source>
            <translation>Interprétation locale tolérante aux schémas des champs d'API observés. Les seuils sont des indications opérationnelles transparentes, et non des verdicts de santé Zscaler ou des déterminations SLA.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6919" />
            <source>No current API or GraphQL response is available. Run or import a ZDX/OneAPI query, then analyze again.</source>
            <translation>Aucune réponse API ou GraphQL actuelle n’est disponible. Exécutez ou importez une requête ZDX/OneAPI, puis analysez à nouveau.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6919" />
            <source>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</source>
            <translation>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6953" />
            <source>Explicit broad or write-capable access observed; validate least privilege and assignment context.</source>
            <translation>Accès explicite large ou capable d’écriture observé ; valider le moindre privilège et le contexte d’affectation.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6958" />
            <source>Consider a monitored decoy resource near exposed paths</source>
            <translation>Envisagez une ressource leurre surveillée à proximité des chemins exposés</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6958" />
            <source>Consider a non-production canary permission for privileged-path monitoring</source>
            <translation>Envisagez une autorisation Canary hors production pour la surveillance des chemins privilégiés</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6958" />
            <source>Maintain an exposure and least-privilege baseline</source>
            <translation>Maintenir une base d’exposition et de moindre privilège</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6981" />
            <source>Select one environment before saving an investigation note.</source>
            <translation>Sélectionnez un environnement avant d’enregistrer une note d’enquête.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7006" />
            <source>Rule is valid and can be evaluated locally.</source>
            <translation>La règle est valide et peut être évaluée localement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7006" />
            <source>Rule validation failed: {errors}</source>
            <translation>Rule validation failed: {errors}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7019" />
            <source>Matched events where {mode} of {conditions} declarative condition(s) were true.</source>
            <translation>Matched events where {mode} of {conditions} declarative condition(s) were true.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7020" />
            <source>Examined {examined} local event(s); {matched} matched. {explanation}</source>
            <translation>Examined {examined} local event(s); {matched} matched. {explanation}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7033" />
            <source>Endpoint {number} current</source>
            <translation>Endpoint {number} current</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7033" />
            <source>Endpoint {number} threshold</source>
            <translation>Endpoint {number} threshold</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7034" />
            <source>Median absolute deviation (MAD), scaled by 1.4826 with a 10%/10 ms noise floor</source>
            <translation>Écart médian absolu (MAD), mis à l'échelle par 1,4826 avec un bruit de fond de 10 %/10 ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7035" />
            <source>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</source>
            <translation>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Confirm scope from retained failures</source>
            <translation>Confirmer la portée des échecs conservés</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Check rate-limit and service-health evidence</source>
            <translation>Vérifiez la limite de débit et les preuves de santé du service</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Collect read-only product status</source>
            <translation>Collecter l'état du produit en lecture seule</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Correlate affected entities</source>
            <translation>Corréler les entités concernées</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Export masked incident evidence</source>
            <translation>Exporter des preuves d'incidents masqués</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Record closure decision</source>
            <translation>Décision de clôture du dossier</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Capture current policy baseline</source>
            <translation>Capturer la ligne de base de la politique actuelle</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Run policy diff and best-practice checks</source>
            <translation>Exécuter des vérifications des différences de politique et des meilleures pratiques</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Run Policy Twin and decision simulation</source>
            <translation>Exécuter Policy Twin et simulation de décision</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Prepare rollback artifact</source>
            <translation>Préparer l'artefact de restauration</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Record independent review</source>
            <translation>Enregistrer un examen indépendant</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Export change package</source>
            <translation>Exporter le package de modifications</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Identify affected user and application scope</source>
            <translation>Identifier l'utilisateur concerné et la portée de l'application</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Inspect device metrics</source>
            <translation>Inspecter les métriques de l'appareil</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Inspect network latency, loss and jitter</source>
            <translation>Inspecter la latence, la perte et la gigue du réseau</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Inspect service-edge path</source>
            <translation>Inspecter le chemin de bord du service</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Compare application response</source>
            <translation>Comparer la réponse de l'application</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Export masked journey evidence</source>
            <translation>Exporter les preuves de voyage masqué</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Stop copying or exporting raw material</source>
            <translation>Arrêtez de copier ou d’exporter des matières premières</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Rotate the affected credential outside this client</source>
            <translation>Faire pivoter les informations d'identification concernées en dehors de ce client</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Clear in-memory sessions</source>
            <translation>Effacer les sessions en mémoire</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Review masked audit evidence</source>
            <translation>Examiner les éléments probants masqués</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Validate least-privilege access</source>
            <translation>Valider l'accès avec le moindre privilège</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Record containment and recovery</source>
            <translation>Record de confinement et de récupération</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Validate the alert in authoritative security tooling</source>
            <translation>Valider l'alerte dans des outils de sécurité faisant autorité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Identify users, devices and applications</source>
            <translation>Identifier les utilisateurs, les appareils et les applications</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Preserve masked evidence</source>
            <translation>Préserver les preuves masquées</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Prepare containment changes for independent approval</source>
            <translation>Préparer les modifications de confinement pour approbation indépendante</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Track recovery prerequisites</source>
            <translation>Suivre les conditions préalables à la récupération</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Record lessons learned</source>
            <translation>Enregistrer les leçons apprises</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7062" />
            <source>Complete</source>
            <translation>Terminé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7062" />
            <source>Pending</source>
            <translation>En attente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7063" />
            <source>Recorded in local audit trail</source>
            <translation>Enregistré dans la piste d'audit locale</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7063" />
            <source>No completion evidence</source>
            <translation>Aucune preuve d'achèvement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7074" />
            <source>Select a playbook step first.</source>
            <translation>Sélectionnez d’abord une étape du playbook.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7078" />
            <source>Mark step complete</source>
            <translation>Marquer l'étape comme terminée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7078" />
            <source>Record this step as completed in the local audit trail? This does not perform the action or update an authoritative incident.</source>
            <translation>Enregistrer cette étape comme terminée dans la piste d'audit locale ? Cela n’effectue pas l’action ni ne met à jour un incident faisant autorité.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7089" />
            <source>Describe an administrative or investigation goal first.</source>
            <translation>Décrivez d’abord un objectif administratif ou d’enquête.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7098" />
            <source>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</source>
            <translation>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Smart API planner</source>
            <translation>Planificateur d'API intelligent</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Create a plan with at least one read operation first.</source>
            <translation>Créez d'abord un plan avec au moins une opération de lecture.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7106" />
            <source>Planner output copied for review. Validate the chain, supply required path values, and approve it separately before execution.</source>
            <translation>Sortie du planificateur copiée pour révision. Validez la chaîne, fournissez les valeurs de chemin requises et approuvez-la séparément avant l'exécution.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Review policy diff</source>
            <translation>Examiner les différences avec les règles</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Run local simulation</source>
            <translation>Exécuter une simulation locale</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Record reviewer approval</source>
            <translation>Approbation du réviseur de dossiers</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Export Git/Terraform review</source>
            <translation>Examen de l'exportation de Git/Terraform</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Apply outside this client only after approval</source>
            <translation>Postuler en dehors de ce client seulement après approbation</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7128" />
            <source>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</source>
            <translation>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Change reference recorded</source>
            <translation>Changement de référence enregistré</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Change owner recorded</source>
            <translation>Changement de propriétaire enregistré</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Independent reviewer recorded</source>
            <translation>Un évaluateur indépendant enregistré</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Local policy simulation reviewed</source>
            <translation>La simulation des politiques locales revue</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Rollback artifact prepared</source>
            <translation>Artefact de restauration préparé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Local approval recorded</source>
            <translation>Approbation locale enregistrée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Yes</source>
            <translation>Oui</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>No</source>
            <translation>Non</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Blocked</source>
            <translation>Bloqué</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Optional</source>
            <translation>Facultatif</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7147" />
            <source>Enter a reviewer before recording approval.</source>
            <translation>Entrez un réviseur avant d’enregistrer l’approbation.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7149" />
            <source>Local approval recorded. External apply remains disabled.</source>
            <translation>Approbation locale enregistrée. L'application externe reste désactivée.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7173" />
            <source>Rollback artifact integrity verified. This does not authorize applying it.</source>
            <translation>Intégrité des artefacts de restauration vérifiée. Cela n'autorise pas son application.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7174" />
            <source>Rollback verification failed: {reason}</source>
            <translation>Rollback verification failed: {reason}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7184" />
            <source>No comparison baseline</source>
            <translation>Aucune référence de comparaison</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7189" />
            <source>{time} · score {score}/100</source>
            <translation>{time} · score {score}/100</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7212" />
            <source>Audit evidence integrity</source>
            <translation>Intégrité des éléments probants</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7212" />
            <source>Review and restore the local hash-linked audit trail.</source>
            <translation>Examinez et restaurez la piste d’audit locale liée au hachage.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7213" />
            <source>Operational evidence available</source>
            <translation>Preuves opérationnelles disponibles</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7213" />
            <source>Collect or import masked read-only evidence for the selected environment.</source>
            <translation>Collectez ou importez des preuves masquées en lecture seule pour l’environnement sélectionné.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7214" />
            <source>API health and anomaly monitoring</source>
            <translation>Surveillance de la santé et des anomalies des API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7214" />
            <source>Investigate repeated failures, latency regressions, and rate limiting.</source>
            <translation>Examinez les échecs répétés, les régressions de latence et les limitations de débit.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7215" />
            <source>Least-privilege policy baseline</source>
            <translation>Base de référence de la politique de moindre privilège</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7215" />
            <source>Constrain unconditional allow rules and validate order in Policy Twin.</source>
            <translation>Contraindre les règles d’autorisation inconditionnelle et valider l’ordre dans Policy Twin.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7216" />
            <source>Reviewed write activity</source>
            <translation>Activité d'écriture révisée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7216" />
            <source>Require a recorded review and rollback artifact for write activity.</source>
            <translation>Exiger un artefact de révision et d’annulation enregistré pour l’activité d’écriture.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7217" />
            <source>Incident evidence readiness</source>
            <translation>Préparation des preuves d'incident</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7217" />
            <source>Prepare and export masked investigation evidence for unresolved failures.</source>
            <translation>Préparez et exportez des preuves d’enquête masquées pour les échecs non résolus.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7218" />
            <source>Recovery evidence available</source>
            <translation>Preuve de récupération disponible</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7218" />
            <source>Save a policy snapshot or reviewed rollback artifact before change.</source>
            <translation>Enregistrez un instantané de stratégie ou un artefact de restauration examiné avant toute modification.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7232" />
            <source>Pass</source>
            <translation>Passer</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7232" />
            <source>Fail</source>
            <translation>Échec</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7245" />
            <location filename="../zscaler_api_client.py" line="7302" />
            <location filename="../zscaler_api_client.py" line="7348" />
            <source>Local assurance requires attention</source>
            <translation>L’assurance locale nécessite une attention particulière</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7245" />
            <location filename="../zscaler_api_client.py" line="7302" />
            <location filename="../zscaler_api_client.py" line="7348" />
            <source>No failing controls in the evaluated local scope</source>
            <translation>Aucun contrôle défaillant dans le périmètre local évalué</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7246" />
            <location filename="../zscaler_api_client.py" line="7303" />
            <location filename="../zscaler_api_client.py" line="7349" />
            <source>{passed} evaluated control(s) passed and {failed} failed.</source>
            <translation>{passed} evaluated control(s) passed and {failed} failed.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7246" />
            <location filename="../zscaler_api_client.py" line="7349" />
            <source>Evidence coverage is {coverage}% and local posture is {posture}/100.</source>
            <translation>Evidence coverage is {coverage}% and local posture is {posture}/100.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7247" />
            <location filename="../zscaler_api_client.py" line="7350" />
            <source>The assurance score changed by {delta:+d} points versus the selected baseline.</source>
            <translation>The assurance score changed by {delta:+d} points versus the selected baseline.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7248" />
            <source>Prioritized actions</source>
            <translation>Actions prioritaires</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7251" />
            <source>Local evidence limitation: validate results against authoritative tenant and governance records.</source>
            <translation>Limitation des preuves locales : validez les résultats par rapport aux dossiers de locataires et de gouvernance faisant autorité.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7255" />
            <source>Now</source>
            <translation>Maintenant</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7256" />
            <source>Assessment {identifier} · {frameworks} · local evidence only, not certification.</source>
            <translation>Assessment {identifier} · {frameworks} · local evidence only, not certification.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7259" />
            <source>Select one environment before saving an assurance baseline.</source>
            <translation>Sélectionnez un environnement avant d’enregistrer une référence d’assurance.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7269" />
            <location filename="../zscaler_api_client.py" line="7271" />
            <location filename="../zscaler_api_client.py" line="7288" />
            <location filename="../zscaler_api_client.py" line="7290" />
            <source>Signed evidence</source>
            <translation>Preuve signée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7269" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>Le trousseau du système n'a pas pu stocker la clé de signature des preuves.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7271" />
            <source>The protected evidence signing key is invalid. Rotate it in Settings before signing.</source>
            <translation>La clé de signature des preuves protégées n’est pas valide. Faites-le pivoter dans les paramètres avant de signer.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7275" />
            <source>Signed evidence exported · public-key fingerprint {fingerprint}</source>
            <translation>Signed evidence exported · public-key fingerprint {fingerprint}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7287" />
            <source>Signature verified. Payload digest {digest}; public-key fingerprint {fingerprint}.</source>
            <translation>Signature verified. Payload digest {digest}; public-key fingerprint {fingerprint}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7290" />
            <source>Signature verification failed: {reason}</source>
            <translation>Signature verification failed: {reason}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7300" />
            <source>Assurance score: {score}/100 · evidence coverage {coverage}%</source>
            <translation>Assurance score: {score}/100 · evidence coverage {coverage}%</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7302" />
            <source>Executive assurance narrative</source>
            <translation>Récit de l’assurance des dirigeants</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7330" />
            <source>Posture score</source>
            <translation>Score de posture</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7331" />
            <source>Local requests</source>
            <translation>Demandes locales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7332" />
            <source>Failed requests</source>
            <translation>Demandes ayant échoué</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7461" />
            <source>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</source>
            <translation>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7467" />
            <source>Cancellation requested; the current HTTP request will finish and no new chain step will start.</source>
            <translation>Annulation demandée ; la requête HTTP en cours se terminera et aucune nouvelle étape de la chaîne ne démarrera.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7017" />
            <location filename="../zscaler_api_client.py" line="7491" />
            <source>{duration} ms</source>
            <translation>{duration} ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7508" />
            <source>The chain was cancelled before all steps started; completed results were retained.</source>
            <translation>La chaîne a été annulée avant le début de toutes les étapes ; les résultats complétés ont été conservés.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7515" />
            <source>Run a chain before exporting its masked results.</source>
            <translation>Exécutez une chaîne avant d’exporter ses résultats masqués.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7539" />
            <source>No baseline (analyze current policy only)</source>
            <translation>Aucune référence (analyser la politique actuelle uniquement)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Unconditional allow</source>
            <translation>Autorisation inconditionnelle</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Shadowed conflict</source>
            <translation>Conflit obscur</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Redundant shadow</source>
            <translation>Ombre redondante</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Overlapping actions</source>
            <translation>Actions superposées</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Duplicate rule name</source>
            <translation>Nom de règle en double</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7567" />
            <source>An unconditional allow rule can expose every later matching scope.</source>
            <translation>Une règle d'autorisation inconditionnelle peut exposer chaque étendue correspondante ultérieure.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7568" />
            <source>The later rule can never decide because an earlier rule covers all of its matches.</source>
            <translation>La règle la plus récente ne peut jamais décider car une règle antérieure couvre toutes ses correspondances.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7569" />
            <source>The rules can match the same context but have different actions; order decides the outcome.</source>
            <translation>Les règles peuvent correspondre au même contexte mais avoir des actions différentes ; l’ordre décide du résultat.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7570" />
            <source>Duplicate rule names make reviews, evidence, and rollback ambiguous.</source>
            <translation>Les noms de règles en double rendent les révisions, les preuves et les restaurations ambiguës.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7579" />
            <source>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</source>
            <translation>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7586" />
            <source>Request context must be a JSON object.</source>
            <translation>Le contexte de la requête doit être un objet JSON.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7592" />
            <source>Decision: {action}. Rule “{name}” matched after evaluating {count} rule(s).</source>
            <translation>Decision: {action}. Rule “{name}” matched after evaluating {count} rule(s).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7594" />
            <source>Decision: no match after evaluating {count} rule(s).</source>
            <translation>Decision: no match after evaluating {count} rule(s).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7620" />
            <source>Select one environment before saving a policy snapshot.</source>
            <translation>Sélectionnez un environnement avant d’enregistrer un instantané de stratégie.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7626" />
            <source>Policy snapshots are limited to 2 MB.</source>
            <translation>Les instantanés de stratégie sont limités à 2 Mo.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7627" />
            <source>Save policy snapshot</source>
            <translation>Enregistrer l'instantané de la stratégie</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7627" />
            <source>Snapshot name:</source>
            <translation>Nom de l'instantané :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7638" />
            <source>Select a saved policy snapshot first.</source>
            <translation>Sélectionnez d’abord un instantané de stratégie enregistré.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7644" />
            <source>Delete policy snapshot</source>
            <translation>Supprimer l'instantané de la stratégie</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7644" />
            <source>Delete the selected local policy snapshot?</source>
            <translation>Supprimer l'instantané de stratégie locale sélectionné ?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7715" />
            <source>Local automation must be an existing absolute path to a non-symlinked .py file no larger than 1 MiB.</source>
            <translation>L'automatisation locale doit être un chemin absolu existant vers un fichier .py sans lien symbolique ne dépassant pas 1 Mio.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7718" />
            <location filename="../zscaler_api_client.py" line="7882" />
            <source>Webhook endpoints must use HTTPS (or local HTTP) and must not contain credentials in the URL.</source>
            <translation>Les points de terminaison du webhook doivent utiliser HTTPS (ou HTTP local) et ne doivent pas contenir d'informations d'identification dans l'URL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7722" />
            <source>Secure storage</source>
            <translation>Stockage sécurisé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7722" />
            <source>The system keychain could not save the webhook endpoint. Check the keychain service and try again.</source>
            <translation>Le trousseau système n’a pas pu enregistrer le point de terminaison du webhook. Vérifiez le service de trousseau et réessayez.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7738" />
            <source>Connectivity test</source>
            <translation>Test de connectivité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7738" />
            <source>Alert snapshot</source>
            <translation>Instantané d'alerte</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7739" />
            <source>Started</source>
            <translation>Commencé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7499" />
            <location filename="../zscaler_api_client.py" line="7739" />
            <source>Succeeded</source>
            <translation>Réussi</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6528" />
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</source>
            <translation>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>A JSON list of API requests. Relative paths use the active product host; references can use only completed step IDs.</source>
            <translation>Une liste JSON de requêtes API. Les chemins relatifs utilisent l'hôte de produit actif ; les références ne peuvent utiliser que les ID d’étape terminés.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Step</source>
            <translation>Étape</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="6457" />
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Method</source>
            <translation>Méthode</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Records</source>
            <translation>Enregistrements</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Duration</source>
            <translation>Durée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7499" />
            <location filename="../zscaler_api_client.py" line="7739" />
            <source>Failed</source>
            <translation>Échec</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7772" />
            <source>All files (*)</source>
            <translation>Tous les fichiers (*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7775" />
            <source>Exported {count} masked local event(s) as {format}. No data was sent automatically.</source>
            <translation>Exported {count} masked local event(s) as {format}. No data was sent automatically.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7791" />
            <source>Created a non-executable Terraform review handoff. Run terraformer and terraform plan only after independent review; this client never applies it.</source>
            <translation>Création d'un transfert de révision Terraform non exécutable. Exécutez le terraformer et le plan terraform uniquement après un examen indépendant ; ce client ne l'applique jamais.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7817" />
            <location filename="../zscaler_api_client.py" line="7820" />
            <location filename="../zscaler_api_client.py" line="7822" />
            <location filename="../zscaler_api_client.py" line="7827" />
            <location filename="../zscaler_api_client.py" line="7856" />
            <location filename="../zscaler_api_client.py" line="7866" />
            <location filename="../zscaler_api_client.py" line="7871" />
            <source>Local automation</source>
            <translation>Automatisation locale</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7817" />
            <source>Read-only mode blocks local automation.</source>
            <translation>Le mode lecture seule bloque l'automatisation locale.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7820" />
            <source>Configure a valid local Python automation in Governance first.</source>
            <translation>Configurez d’abord une automatisation Python locale valide dans Governance.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7822" />
            <source>Local automation is already running.</source>
            <translation>L'automatisation locale est déjà en cours.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7828" />
            <source>Run the reviewed Python file with masked local posture and alert data? The process receives no API credentials.</source>
            <translation>Exécuter le fichier Python examiné avec une posture locale masquée et des données d'alerte ? Le processus ne reçoit aucune information d'identification API.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7856" />
            <source>Local automation exceeded the 15-second limit and was stopped.</source>
            <translation>L'automatisation locale a dépassé la limite de 15 secondes et a été arrêtée.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7866" />
            <source>Local automation completed with exit code {code}.</source>
            <translation>Local automation completed with exit code {code}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7871" />
            <source>Local automation failed to start.</source>
            <translation>L'automatisation locale n'a pas pu démarrer.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7877" />
            <source>Send the current masked local alert snapshot to the configured webhook endpoint?</source>
            <translation>Envoyer l'instantané d'alerte locale masquée actuel au point de terminaison du webhook configuré ?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7883" />
            <location filename="../zscaler_api_client.py" line="7885" />
            <location filename="../zscaler_api_client.py" line="7889" />
            <location filename="../zscaler_api_client.py" line="7909" />
            <location filename="../zscaler_api_client.py" line="7916" />
            <source>Webhook delivery</source>
            <translation>Livraison de webhooks</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7885" />
            <source>A webhook delivery is already running.</source>
            <translation>Une livraison de webhook est déjà en cours.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7909" />
            <source>Masked webhook delivery succeeded (HTTP {status}).</source>
            <translation>Masked webhook delivery succeeded (HTTP {status}).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7916" />
            <source>Masked webhook delivery failed: {error}</source>
            <translation>Masked webhook delivery failed: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7945" />
            <source>Background</source>
            <translation>Contexte</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7945" />
            <source>App only</source>
            <translation>Application uniquement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7946" />
            <source>Paused</source>
            <translation>En pause</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7958" />
            <source>Select a scheduled report first.</source>
            <translation>Sélectionnez d'abord un rapport planifié.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7976" />
            <source>The scheduled report was generated locally.</source>
            <translation>Le rapport planifié a été généré localement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7978" />
            <source>The scheduled report could not be generated. Check its output folder and the audit trail.</source>
            <translation>Le rapport planifié n'a pas pu être généré. Vérifiez son dossier de sortie et la piste d'audit.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7992" />
            <source>The operating-system schedule could not be updated. No state was changed.</source>
            <translation>La planification du système d'exploitation n'a pas pu être mise à jour. Aucun état n'a été modifié.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8008" />
            <source>The report is paused and cannot generate output, but the operating-system job cleanup needs manual review.</source>
            <translation>Le rapport est suspendu et ne peut pas générer de sortie, mais le nettoyage de la tâche du système d'exploitation nécessite une révision manuelle.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8014" />
            <source>Remove the selected scheduled report?</source>
            <translation>Supprimer le rapport planifié sélectionné ?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8027" />
            <source>The report was removed, but the operating-system job could not be removed. It can no longer generate a report because its schedule ID is no longer active.</source>
            <translation>Le rapport a été supprimé, mais la tâche du système d'exploitation n'a pas pu être supprimée. Il ne peut plus générer de rapport car son ID de planification n'est plus actif.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8030" />
            <source>Report name:</source>
            <translation>Nom du rapport :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8043" />
            <source>Run this report even when ZS API Client is closed? This creates a user-level operating-system schedule and requires no administrator privileges.</source>
            <translation>Exécuter ce rapport même lorsque le client API ZS est fermé ? Cela crée une planification du système d'exploitation au niveau de l'utilisateur et ne nécessite aucun privilège d'administrateur.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8057" />
            <source>The operating-system schedule could not be created. The report was not scheduled.</source>
            <translation>La planification du système d'exploitation n'a pas pu être créée. Le reportage n'était pas programmé.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8065" />
            <source>Scheduled report saved. It will run in the background even when the application is closed.</source>
            <translation>Rapport planifié enregistré. Il fonctionnera en arrière-plan même lorsque l'application est fermée.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8065" />
            <source>Scheduled report saved. It will run locally while the application is open.</source>
            <translation>Rapport planifié enregistré. Il s'exécutera localement pendant que l'application est ouverte.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7930" />
            <location filename="../zscaler_api_client.py" line="8033" />
            <source>Hourly</source>
            <translation>Horaire</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7930" />
            <location filename="../zscaler_api_client.py" line="8033" />
            <source>Daily</source>
            <translation>Quotidiennement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7930" />
            <location filename="../zscaler_api_client.py" line="8033" />
            <source>Weekly</source>
            <translation>Hebdomadaire</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8034" />
            <source>Report cadence:</source>
            <translation>Cadence des rapports :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8037" />
            <source>Choose report output folder</source>
            <translation>Choisir le dossier de sortie du rapport</translation>
        </message>
        <message>
            <source>Scheduled report saved. Reports run locally while the application is open.</source>
            <translation type="vanished">Rapport planifié enregistré. Les rapports sont exécutés localement lorsque l'application est ouverte.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6736" />
            <location filename="../zscaler_api_client.py" line="7300" />
            <source>Local requests: {count}</source>
            <translation>Local requests: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6736" />
            <location filename="../zscaler_api_client.py" line="7300" />
            <source>Failed requests: {count}</source>
            <translation>Failed requests: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7300" />
            <source>Audit integrity: {status}</source>
            <translation>Audit integrity: {status}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7300" />
            <location filename="../zscaler_api_client.py" line="7333" />
            <source>Valid</source>
            <translation>Valide</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7300" />
            <location filename="../zscaler_api_client.py" line="7333" />
            <source>Needs review</source>
            <translation>Besoin d'un examen</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7300" />
            <source>Incident signals</source>
            <translation>Signaux d'incident</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Executive actions</source>
            <translation>Actions exécutives</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Review high-risk findings and approval records.</source>
            <translation>Examinez les résultats à haut risque et les dossiers d’approbation.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Use the Security Posture and Change Control workspaces for evidence.</source>
            <translation>Utilisez les espaces de travail Posture de sécurité et Contrôle des modifications comme preuve.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7306" />
            <source>SOC next steps</source>
            <translation>Prochaines étapes du SOC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7306" />
            <source>Use Incident Investigation to prepare a review chain.</source>
            <translation>Utilisez l’enquête sur les incidents pour préparer une chaîne de révision.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7306" />
            <source>Export masked evidence before escalation.</source>
            <translation>Exportez les preuves masquées avant l’escalade.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7308" />
            <source>Operations next steps</source>
            <translation>Prochaines étapes des opérations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7308" />
            <source>Review slow responses and API failures.</source>
            <translation>Examinez les réponses lentes et les échecs de l'API.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7308" />
            <source>Confirm rate limits and service health with read-only queries.</source>
            <translation>Confirmez les limites de débit et l’état du service avec des requêtes en lecture seule.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7408" />
            <source>Configure a host for the active product before running a chain.</source>
            <translation>Configurez un hôte pour le produit actif avant d'exécuter une chaîne.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7418" />
            <source>Each chain step must stay on the active product host.</source>
            <translation>Chaque étape de la chaîne doit rester sur l'hôte de produit actif.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7434" />
            <source>Fix the chain validation errors before running it.</source>
            <translation>Corrigez les erreurs de validation de la chaîne avant de l'exécuter.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7438" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>Le mode lecture seule bloque les demandes d’écriture. Modifiez le rôle local dans le Centre d’opérations pour continuer.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7440" />
            <source>Authenticate the active product before running a chain.</source>
            <translation>Authentifiez le produit actif avant d'exécuter une chaîne.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7441" />
            <source>Run {count} API step(s) sequentially against the active environment?</source>
            <translation>Run {count} API step(s) sequentially against the active environment?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7443" />
            <source>The chain contains write operations; review and approve before continuing.</source>
            <translation>La chaîne contient des opérations d'écriture ; examiner et approuver avant de continuer.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7458" />
            <source>Running API chain step {completed} of {total}...</source>
            <translation>Running API chain step {completed} of {total}...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7506" />
            <source>API chain completed: {successful} succeeded, {failed} failed.</source>
            <translation>API chain completed: {successful} succeeded, {failed} failed.</translation>
        </message>
        <message>
            <source>Metrics are local and contain no credentials.</source>
            <translation type="vanished">Les métriques sont locales et ne contiennent aucune information d'identification.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7678" />
            <source>Policy export</source>
            <translation>Exportation de règles</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7679" />
            <source>Export policy</source>
            <translation>Politique d'exportation</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7688" />
            <source>Compliance</source>
            <translation>Conformité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7712" />
            <source>Alert threshold must be a positive integer.</source>
            <translation>Le seuil d'alerte doit être un entier positif.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7726" />
            <source>Governance settings saved.</source>
            <translation>Paramètres de gouvernance enregistrés.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7730" />
            <source>Use OneAPI or legacy clients locally</source>
            <translation>Utilisez OneAPI ou des clients existants localement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7730" />
            <source>AI-assisted, tool-scoped exploration</source>
            <translation>Exploration assistée par l'IA et à l'échelle des outils</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7730" />
            <source>Export existing ZIA/ZPA configuration to Terraform</source>
            <translation>Exporter la configuration ZIA/ZPA existante vers Terraform</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7733" />
            <source>Available</source>
            <translation>Disponible</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7733" />
            <source>Not installed</source>
            <translation>Non installé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7765" />
            <source>Prepare an integration first.</source>
            <translation>Préparez d’abord une intégration.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6730" />
            <location filename="../zscaler_api_client.py" line="7768" />
            <source>Copied to clipboard</source>
            <translation>Copié dans le presse-papiers</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7510" />
            <source>The chain stopped after the first failed step.</source>
            <translation>La chaîne s'est arrêtée après l'échec du premier pas.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7662" />
            <location filename="../zscaler_api_client.py" line="7946" />
            <source>Enabled</source>
            <translation>Activé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7662" />
            <source>Disabled</source>
            <translation>Désactivé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7668" />
            <source>Allow rule has no conditions</source>
            <translation>La règle d'autorisation n'a aucune condition</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7668" />
            <source>Rule is disabled</source>
            <translation>La règle est désactivée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7669" />
            <source>Rule name is duplicated</source>
            <translation>Le nom de la règle est dupliqué</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7669" />
            <source>Rule action is unspecified</source>
            <translation>L'action de la règle n'est pas spécifiée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7698" />
            <source>Rules evaluated</source>
            <translation>Règles évaluées</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7698" />
            <source>Matched rule</source>
            <translation>Règle correspondante</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>Matched</source>
            <translation>Correspondant</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>Not matched</source>
            <translation>Ne correspond pas</translation>
        </message>
        <message>
            <source>Webhook test</source>
            <translation type="vanished">Test de webhook</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7882" />
            <source>Configure a webhook endpoint in Governance first.</source>
            <translation>Configurez d’abord un point de terminaison webhook dans Governance.</translation>
        </message>
        <message>
            <source>Webhook endpoints must use HTTPS unless they are local.</source>
            <translation type="vanished">Les points de terminaison du webhook doivent utiliser HTTPS, sauf s'ils sont locaux.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7874" />
            <source>Send a masked connectivity test to the configured webhook endpoint?</source>
            <translation>Envoyer un test de connectivité masqué au point de terminaison du webhook configuré ?</translation>
        </message>
        <message>
            <source>Masked webhook test succeeded (HTTP {status}).</source>
            <translation type="vanished">Masked webhook test succeeded (HTTP {status}).</translation>
        </message>
        <message>
            <source>Masked webhook test failed: {error}</source>
            <translation type="vanished">Masked webhook test failed: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7958" />
            <location filename="../zscaler_api_client.py" line="7976" />
            <location filename="../zscaler_api_client.py" line="7978" />
            <location filename="../zscaler_api_client.py" line="7992" />
            <location filename="../zscaler_api_client.py" line="8008" />
            <location filename="../zscaler_api_client.py" line="8014" />
            <location filename="../zscaler_api_client.py" line="8027" />
            <location filename="../zscaler_api_client.py" line="8030" />
            <location filename="../zscaler_api_client.py" line="8034" />
            <location filename="../zscaler_api_client.py" line="8043" />
            <location filename="../zscaler_api_client.py" line="8057" />
            <location filename="../zscaler_api_client.py" line="8066" />
            <source>Scheduled report</source>
            <translation>Rapport planifié</translation>
        </message>
        <message>
            <source>Report name and cadence:</source>
            <translation type="vanished">Nom et cadence du rapport :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8069" />
            <source>Save support bundle</source>
            <translation>Enregistrer le pack de support</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8074" />
            <source>Support bundle</source>
            <translation>Offre groupée d'assistance</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8074" />
            <source>A redacted support bundle was created.</source>
            <translation>Un ensemble de support rédigé a été créé.</translation>
        </message>
    </context>
    <context>
        <name>PacWorkspaceDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="8141" />
            <location filename="../zscaler_api_client.py" line="8466" />
            <source>PAC Workspace</source>
            <translation>Espace de travail PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8145" />
            <source>Create and verify PAC files locally. API operations are prepared in the request editor and are never sent or deployed automatically.</source>
            <translation>Créez et vérifiez les fichiers PAC localement. Les opérations API sont préparées dans l'éditeur de requêtes et ne sont jamais envoyées ou déployées automatiquement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8150" />
            <source>PAC experience:</source>
            <translation>Expérience PAC :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8152" />
            <source>Guided (recommended)</source>
            <translation>Guidé (recommandé)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8153" />
            <source>Advanced</source>
            <translation>Avancé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8170" />
            <source>PAC name:</source>
            <translation>Nom du CAP :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8171" />
            <source>Change note:</source>
            <translation>Remarque sur le changement :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8172" />
            <source>Hosted PAC URL (optional for ZCC):</source>
            <translation>URL du PAC hébergé (facultatif pour ZCC) :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8173" />
            <source>Existing ZIA PAC ID (for lifecycle actions):</source>
            <translation>ID ZIA PAC existant (pour les actions de cycle de vie) :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8174" />
            <source>ZIA PAC version:</source>
            <translation>Version ZIAPAC :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8175" />
            <source>ZIA version action:</source>
            <translation>Action de version ZIA :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8182" />
            <source>Start with a safe baseline. Enter only internal destinations that must bypass Zscaler; all other traffic uses the selected gateway and failover.</source>
            <translation>Commencez avec une base de référence sûre. Entrez uniquement les destinations internes qui doivent contourner Zscaler ; tout le reste du trafic utilise la passerelle et le basculement sélectionnés.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8190" />
            <source>Direct-bypass host patterns (one per line):</source>
            <translation>Modèles d'hôte à contournement direct (un par ligne) :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8191" />
            <source>Primary gateway:</source>
            <translation>Passerelle principale :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8192" />
            <source>Secondary gateway:</source>
            <translation>Passerelle secondaire :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8195" />
            <source>Create guided PAC</source>
            <translation>Créer un PAC guidé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8196" />
            <source>Load safe example</source>
            <translation>Exemple de chargement sécurisé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8199" />
            <source>Generated PAC preview (read-only):</source>
            <translation>Generated PAC preview (read-only):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8206" />
            <source>Guided setup</source>
            <translation>Configuration guidée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8208" />
            <source>PAC JavaScript — include FindProxyForURL(url, host). Variables use ${NAME}.</source>
            <translation>PAC JavaScript — include FindProxyForURL(url, host). Variables use ${NAME}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8213" />
            <source>Color guide: blue = PAC structure, amber = DIRECT bypass, green = proxy route, purple = variable, cyan = Zscaler endpoint, orange = IP/network, red = performance-sensitive DNS helper.</source>
            <translation>Color guide: blue = PAC structure, amber = DIRECT bypass, green = proxy route, purple = variable, cyan = Zscaler endpoint, orange = IP/network, red = performance-sensitive DNS helper.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8217" />
            <source>Load PAC…</source>
            <translation>Charger PAC…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8218" />
            <source>Save PAC…</source>
            <translation>Enregistrer le PAC…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8219" />
            <source>Save local draft</source>
            <translation>Enregistrer le brouillon local</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8222" />
            <source>Author</source>
            <translation>Auteur</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8225" />
            <source>Variables (JSON). Standard Zscaler names: </source>
            <translation>Variables (JSON). Noms Zscaler standard : </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8229" />
            <source>Test URL:</source>
            <translation>URL de test :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8231" />
            <source>Apply variables</source>
            <translation>Appliquer des variables</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8232" />
            <source>Run static verification</source>
            <translation>Exécuter une vérification statique</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8233" />
            <source>Preview decision</source>
            <translation>Aperçu de la décision</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8236" />
            <source>Verify</source>
            <translation>Vérifier</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8239" />
            <source>PAC reference and review help. The verifier never executes JavaScript; validate in ZIA and test a pilot group before deployment.</source>
            <translation>Aide à la référence et à la révision du PAC. Le vérificateur n'exécute jamais JavaScript ; valider dans ZIA et tester un groupe pilote avant déploiement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8240" />
            <source>Variable or function</source>
            <translation>Variable ou fonction</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8240" />
            <source>Purpose / guidance</source>
            <translation>Objectif/orientation</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8248" />
            <source>Roll out in stages: validate, test representative URLs, stage to a small pilot group, then deploy. Prefer host-pattern checks; avoid DNS helpers in Client Connector PAC files where possible.</source>
            <translation>Déployez par étapes : validez, testez les URL représentatives, passez à un petit groupe pilote, puis déployez. Préférez les vérifications de modèle d’hôte ; évitez les assistants DNS dans les fichiers PAC du connecteur client lorsque cela est possible.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8250" />
            <source>Help and reference</source>
            <translation>Aide et référence</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8253" />
            <source>Map supplied ZIA PAC metadata to ZCC forwarding-profile actions. Matches use hosted PAC URLs or an inline PAC content fingerprint; names alone are never treated as a match.</source>
            <translation>Mapper les métadonnées ZIA PAC fournies aux actions de profil de transfert ZCC. Les correspondances utilisent des URL PAC hébergées ou une empreinte digitale de contenu PAC en ligne ; les noms seuls ne sont jamais traités comme une correspondance.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8256" />
            <source>ZIA PAC list JSON</source>
            <translation>Liste ZIA PAC JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8258" />
            <source>ZCC forwarding-profile list JSON</source>
            <translation>Liste de profils de transfert ZCC JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8262" />
            <source>Build PAC mappings</source>
            <translation>Créer des mappages PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8263" />
            <location filename="../zscaler_api_client.py" line="8298" />
            <source>Prepare ZIA PAC list</source>
            <translation>Préparer la liste ZIA PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8264" />
            <location filename="../zscaler_api_client.py" line="8290" />
            <source>Prepare ZCC profile list</source>
            <translation>Préparer la liste de profils ZCC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>ZCC profile</source>
            <translation>Profil ZCC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>Action / network</source>
            <translation>Actions/réseau</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>PAC type</source>
            <translation>Type de CAP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>PAC reference</source>
            <translation>Référence PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>ZIA status</source>
            <translation>Statut ZIA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>Mapping result</source>
            <translation>Résultat du mappage</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>Profile ID</source>
            <translation>Identifiant du profil</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8270" />
            <location filename="../zscaler_api_client.py" line="8379" />
            <source>PAC mappings</source>
            <translation>Mappages PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8273" />
            <source>Search the bundled Zscaler Configuration Center index of Cloud Enforcement Node ranges, proxy/VPN hostnames, GRE and extranet virtual IP addresses. The PAC editor shows a help balloon when a line references an indexed endpoint.</source>
            <translation>Recherchez dans l'index fourni du centre de configuration Zscaler les plages de nœuds Cloud Enforcement, les noms d'hôtes proxy/VPN, les adresses IP virtuelles GRE et extranet. L'éditeur PAC affiche une bulle d'aide lorsqu'une ligne fait référence à un point de terminaison indexé.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8277" />
            <source>Search city, CIDR, hostname, GRE or VPN address</source>
            <translation>Rechercher une ville, un CIDR, un nom d'hôte, une adresse GRE ou VPN</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8278" />
            <source>Search data centers</source>
            <translation>Rechercher des centres de données</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Continent</source>
            <translation>Continent</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Data center</source>
            <translation>Centre de données</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>CIDR range</source>
            <translation>Plage CIDR</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Proxy hostname</source>
            <translation>Nom d'hôte du proxy</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>VPN hostname</source>
            <translation>Nom d'hôte VPN</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>GRE VIP</source>
            <translation>GRE VIP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Extranet VIP</source>
            <translation>Extranet VIP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Coordinates</source>
            <translation>Coordonnées</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8284" />
            <source>Zscaler data centers</source>
            <translation>Centres de données Zscaler</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8287" />
            <source>Paste a forwarding profile returned by ZCC, or first prepare the profile-list request. Existing profile fields are preserved when PAC fields are updated.</source>
            <translation>Collez un profil de transfert renvoyé par ZCC ou préparez d'abord la demande de liste de profils. Les champs de profil existants sont conservés lorsque les champs PAC sont mis à jour.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8291" />
            <source>Prepare ZCC update</source>
            <translation>Préparer la mise à jour ZCC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8293" />
            <source>ZCC / Mobile Portal</source>
            <translation>ZCC / Portail mobile</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8296" />
            <source>Prepare ZIA validation</source>
            <translation>Préparer la validation ZIA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8297" />
            <source>Prepare ZIA hosted PAC upload</source>
            <translation>Préparer le téléchargement du PAC hébergé par ZIA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8299" />
            <source>Prepare ZIA version action</source>
            <translation>Préparer l'action de version ZIA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8300" />
            <source>Close</source>
            <translation>Fermer</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8319" />
            <source>Guided mode creates a minimal, reviewable PAC. Switch to Advanced to edit JavaScript, update ZCC profiles, or prepare ZIA lifecycle actions.</source>
            <translation>Le mode guidé crée un PAC minimal et révisable. Passez à Avancé pour modifier JavaScript, mettre à jour les profils ZCC ou préparer les actions du cycle de vie ZIA.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8320" />
            <source>Advanced mode exposes the PAC editor, ZCC profile patching, and ZIA version lifecycle actions. Every write remains explicit.</source>
            <translation>Le mode avancé expose l'éditeur PAC, les correctifs du profil ZCC et les actions du cycle de vie de la version ZIA. Chaque écriture reste explicite.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8331" />
            <source>Primary Zscaler gateway.</source>
            <translation>Primary Zscaler gateway.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8331" />
            <source>Secondary Zscaler gateway.</source>
            <translation>Secondary Zscaler gateway.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8332" />
            <source>Primary gateway with failover support.</source>
            <translation>Primary gateway with failover support.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8332" />
            <source>Secondary gateway with failover support.</source>
            <translation>Secondary gateway with failover support.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8333" />
            <source>Optional local deployment label.</source>
            <translation>Optional local deployment label.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8333" />
            <source>Zscaler cloud name.</source>
            <translation>Zscaler cloud name.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8334" />
            <source>Primary gateway for an explicit subcloud.</source>
            <translation>Primary gateway for an explicit subcloud.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8335" />
            <source>Secondary gateway for an explicit subcloud.</source>
            <translation>Secondary gateway for an explicit subcloud.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8338" />
            <source>Required PAC entry point; returns DIRECT, PROXY, or SOCKS.</source>
            <translation>Required PAC entry point; returns DIRECT, PROXY, or SOCKS.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8339" />
            <source>Matches a host without a DNS suffix.</source>
            <translation>Matches a host without a DNS suffix.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8340" />
            <source>Matches a DNS suffix.</source>
            <translation>Matches a DNS suffix.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8341" />
            <source>Matches a local host or fully qualified name.</source>
            <translation>Matches a local host or fully qualified name.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8342" />
            <source>Matches wildcard patterns such as *.example.com.</source>
            <translation>Matches wildcard patterns such as *.example.com.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8343" />
            <source>Counts DNS labels in a host name.</source>
            <translation>Counts DNS labels in a host name.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8344" />
            <source>Matches a weekday range.</source>
            <translation>Matches a weekday range.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8344" />
            <source>Matches a date range.</source>
            <translation>Matches a date range.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8345" />
            <source>Matches a time range.</source>
            <translation>Matches a time range.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8346" />
            <source>Resolves DNS; avoid in Client Connector PAC files unless required.</source>
            <translation>Resolves DNS; avoid in Client Connector PAC files unless required.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8347" />
            <source>Tests DNS resolution; avoid in Client Connector PAC files unless required.</source>
            <translation>Tests DNS resolution; avoid in Client Connector PAC files unless required.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8348" />
            <source>Tests a network; avoid in Client Connector PAC files unless required.</source>
            <translation>Tests a network; avoid in Client Connector PAC files unless required.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8357" />
            <source>Fix the guided input to generate a PAC preview: </source>
            <translation>Fix the guided input to generate a PAC preview: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8367" />
            <source>Guided PAC</source>
            <translation>CAP guidé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8371" />
            <source>Guided PAC created. Review the verification findings, test a URL, then prepare ZIA validation.</source>
            <translation>PAC guidé créé. Examinez les résultats de la vérification, testez une URL, puis préparez la validation ZIA.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8379" />
            <source>Both mapping inputs must be valid JSON: </source>
            <translation>Les deux entrées de mappage doivent être un JSON valide : </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8388" />
            <source>Mapped actions: {total}; confirmed mappings: {matched}; unresolved hosted URLs: {unresolved}.</source>
            <translation>Mapped actions: {total}; confirmed mappings: {matched}; unresolved hosted URLs: {unresolved}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8409" />
            <source>{matches} matching endpoint records from {total} indexed Zscaler data-center records. Source: {source}</source>
            <translation>{matches} matching endpoint records from {total} indexed Zscaler data-center records. Source: {source}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8418" />
            <location filename="../zscaler_api_client.py" line="8420" />
            <location filename="../zscaler_api_client.py" line="8447" />
            <source>PAC variables</source>
            <translation>Variables PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8418" />
            <source>Variables must be valid JSON: </source>
            <translation>Les variables doivent être du JSON valide : </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8420" />
            <source>Variables must be a JSON object with text or numeric values.</source>
            <translation>Les variables doivent être un objet JSON avec du texte ou des valeurs numériques.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8429" />
            <source>none</source>
            <translation>aucun</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8430" />
            <source>Detected variables: </source>
            <translation>Variables détectées : </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8434" />
            <source>Improvement tips:</source>
            <translation>Conseils d'amélioration :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8446" />
            <source>Variables applied.</source>
            <translation>Variables appliquées.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8446" />
            <source>Variables applied; missing values were retained: </source>
            <translation>Variables appliquées ; les valeurs manquantes ont été retenues : </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8451" />
            <source>Preview</source>
            <translation>Aperçu</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8466" />
            <source>PAC draft saved locally.</source>
            <translation>Brouillon PAC enregistré localement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8469" />
            <location filename="../zscaler_api_client.py" line="8474" />
            <source>Load PAC</source>
            <translation>Charger le PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8477" />
            <location filename="../zscaler_api_client.py" line="8482" />
            <source>Save PAC</source>
            <translation>Enregistrer le PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8490" />
            <source>PAC request prepared</source>
            <translation>Demande de PAC préparée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8490" />
            <source>The request was placed in the main editor. Review it and explicitly select Send Request; no deployment action has been performed.</source>
            <translation>La demande a été placée dans l'éditeur principal. Examinez-le et sélectionnez explicitement Envoyer la demande ; aucune action de déploiement n'a été effectuée.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8495" />
            <source>PAC verification</source>
            <translation>Vérification PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8495" />
            <source>Resolve PAC errors before preparing an API write.</source>
            <translation>Résolvez les erreurs PAC avant de préparer une écriture API.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8511" />
            <source>ZIA PAC lifecycle</source>
            <translation>Cycle de vie du ZIA PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8511" />
            <source>Enter a numeric PAC ID and version before preparing a lifecycle action.</source>
            <translation>Entrez un ID PAC numérique et une version avant de préparer une action de cycle de vie.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8525" />
            <location filename="../zscaler_api_client.py" line="8527" />
            <source>ZCC forwarding profile</source>
            <translation>Profil de transfert ZCC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8525" />
            <source>Profile must be valid JSON: </source>
            <translation>Le profil doit être un JSON valide : </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8527" />
            <source>Paste one ZCC forwarding profile object with its id before preparing an update.</source>
            <translation>Collez un objet de profil de transfert ZCC avec son identifiant avant de préparer une mise à jour.</translation>
        </message>
    </context>
    <context>
        <name>PolicyTwinGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3884" />
            <source>{count} condition(s)</source>
            <translation>{count} condition(s)</translation>
        </message>
    </context>
    <context>
        <name>ResponseComparisonDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="6084" />
            <location filename="../zscaler_api_client.py" line="6144" />
            <source>Response drift comparison</source>
            <translation>Comparaison de dérive de réponse</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6086" />
            <source>Compare the active masked response with a local ZS API Exchange baseline. Matching records are aligned by id, UUID, resourceId, key, or name. No API request is sent.</source>
            <translation>Comparez la réponse masquée active avec une référence locale ZS API Exchange. Les enregistrements correspondants sont alignés par identifiant, UUID, resourceId, clé ou nom. Aucune requête API n'est envoyée.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6089" />
            <source>Baseline:</source>
            <translation>Base de référence :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6090" />
            <source>Choose a masked response exchange file</source>
            <translation>Choisir un fichier d'échange de réponses masqué</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6091" />
            <source>Open baseline…</source>
            <translation>Base de référence ouverte…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6094" />
            <source>Ignore volatile fields:</source>
            <translation>Ignorer les champs volatiles :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6096" />
            <source>Comma-separated field names ignored at every JSON depth. Secrets are always masked independently.</source>
            <translation>Noms de champs séparés par des virgules ignorés à chaque profondeur JSON. Les secrets sont toujours masqués indépendamment.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6097" />
            <source>Compare responses</source>
            <translation>Comparez les réponses</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6099" />
            <source>Open a baseline to calculate drift.</source>
            <translation>Ouvrez une ligne de base pour calculer la dérive.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Impact</source>
            <translation>Impact</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Change</source>
            <translation>Changement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>JSON path</source>
            <translation>Chemin JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Identity</source>
            <translation>Identité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Baseline value</source>
            <translation>Valeur de référence</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Current value</source>
            <translation>Valeur actuelle</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6106" />
            <source>Export masked drift…</source>
            <translation>Exporter la dérive masquée…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6107" />
            <source>Close</source>
            <translation>Fermer</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6116" />
            <location filename="../zscaler_api_client.py" line="6121" />
            <source>Open response baseline</source>
            <translation>Base de référence de réponse ouverte</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6144" />
            <source>Open a baseline response exchange first.</source>
            <translation>Ouvrez d’abord un échange de réponses de base.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6151" />
            <source>No drift found in the compared scope.</source>
            <translation>Aucune dérive trouvée dans le périmètre comparé.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6153" />
            <source>{total} change(s): {added} added, {removed} removed, {changed} changed · {high} high-impact</source>
            <translation>{total} change(s): {added} added, {removed} removed, {changed} changed · {high} high-impact</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6156" />
            <source>Result truncated at {maximum} changes</source>
            <translation>Result truncated at {maximum} changes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6157" />
            <source>Baseline {baseline} · current {current}</source>
            <translation>Baseline {baseline} · current {current}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6158" />
            <source>Added</source>
            <translation>Ajouté</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6158" />
            <source>Removed</source>
            <translation>Supprimé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6158" />
            <source>Changed</source>
            <translation>Changé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6158" />
            <source>High impact</source>
            <translation>Fort impact</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6174" />
            <source>Export masked drift</source>
            <translation>Exporter la dérive masquée</translation>
        </message>
    </context>
    <context>
        <name>SettingsDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4639" />
            <source>Settings</source>
            <translation>Paramètres</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4665" />
            <source>ZIA (Zscaler Internet Access)</source>
            <translation>ZIA (accès Internet Zscaler)</translation>
        </message>
        <message>
            <source>Cloud:</source>
            <translation type="vanished">Cloud :</translation>
        </message>
        <message>
            <source>API Key:</source>
            <translation type="vanished">Clé API :</translation>
        </message>
        <message>
            <source>Username:</source>
            <translation type="vanished">Nom d'utilisateur :</translation>
        </message>
        <message>
            <source>Password:</source>
            <translation type="vanished">Mot de passe :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4699" />
            <source>ZPA (Zscaler Private Access)</source>
            <translation>ZPA (accès privé Zscaler)</translation>
        </message>
        <message>
            <source>Client ID:</source>
            <translation type="vanished">ID client :</translation>
        </message>
        <message>
            <source>Client Secret:</source>
            <translation type="vanished">Secret client :</translation>
        </message>
        <message>
            <source>Customer ID:</source>
            <translation type="vanished">ID client :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4731" />
            <source>ZDX (Zscaler Digital Experience)</source>
            <translation>ZDX (expérience numérique Zscaler)</translation>
        </message>
        <message>
            <source>Key ID:</source>
            <translation type="vanished">ID de clé :</translation>
        </message>
        <message>
            <source>Key Secret:</source>
            <translation type="vanished">Secret de clé :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4765" />
            <source>ZCC (Client Connector)</source>
            <translation>ZCC (connecteur client)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4830" />
            <source>ZIdentity (Identity &amp; Access)</source>
            <translation>ZIdentity (Identité et accès)</translation>
        </message>
        <message>
            <source>Vanity Domain:</source>
            <translation type="vanished">Domaine personnalisé :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4857" />
            <source>ZTW (Zero Trust Workloads)</source>
            <translation>ZTW (charges de travail Zero Trust)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4884" />
            <source>ZWA (Workflow Automation)</source>
            <translation>ZWA (automatisation du flux de travail)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4911" />
            <source>EASM (Attack Surface Management)</source>
            <translation>EASM (gestion de la surface d'attaque)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4943" />
            <location filename="../zscaler_api_client.py" line="5221" />
            <source>Credentials</source>
            <translation>Identifiants</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4950" />
            <source>Network</source>
            <translation>Réseau</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4958" />
            <source>Request Timeout (seconds):</source>
            <translation>Délai d'attente (secondes) :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4671" />
            <location filename="../zscaler_api_client.py" line="4705" />
            <location filename="../zscaler_api_client.py" line="4737" />
            <location filename="../zscaler_api_client.py" line="4771" />
            <location filename="../zscaler_api_client.py" line="4799" />
            <location filename="../zscaler_api_client.py" line="4836" />
            <location filename="../zscaler_api_client.py" line="4863" />
            <location filename="../zscaler_api_client.py" line="4890" />
            <location filename="../zscaler_api_client.py" line="4917" />
            <location filename="../zscaler_api_client.py" line="4966" />
            <location filename="../zscaler_api_client.py" line="4982" />
            <location filename="../zscaler_api_client.py" line="5030" />
            <location filename="../zscaler_api_client.py" line="5036" />
            <location filename="../zscaler_api_client.py" line="5054" />
            <location filename="../zscaler_api_client.py" line="5078" />
            <source>Enabled</source>
            <translation>Activé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4793" />
            <source>OneAPI (Unified v3 Framework)</source>
            <translation>OneAPI (cadre unifié v3)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4966" />
            <location filename="../zscaler_api_client.py" line="4982" />
            <location filename="../zscaler_api_client.py" line="5030" />
            <location filename="../zscaler_api_client.py" line="5036" />
            <location filename="../zscaler_api_client.py" line="5054" />
            <location filename="../zscaler_api_client.py" line="5078" />
            <source>Disabled</source>
            <translation>Désactivé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4983" />
            <source>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</source>
            <translation>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4988" />
            <source>SSL Verification:</source>
            <translation>Vérification SSL :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4993" />
            <source>Proxy</source>
            <translation>Procuration</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4999" />
            <source>No Proxy</source>
            <translation>Pas de proxy</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4999" />
            <source>System Proxy</source>
            <translation>Proxy système</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4999" />
            <source>Manual</source>
            <translation>Manuel</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5001" />
            <source>Proxy Mode:</source>
            <translation>Mode proxy :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5005" />
            <source>Proxy Host:</source>
            <translation>Hôte proxy :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5010" />
            <source>Proxy Port:</source>
            <translation>Port proxy :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5013" />
            <location filename="../zscaler_api_client.py" line="5018" />
            <source>Optional</source>
            <translation>Optionnel</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5014" />
            <source>Proxy Username:</source>
            <translation>Utilisateur proxy :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5019" />
            <source>Proxy Password:</source>
            <translation>Mot de passe proxy :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5024" />
            <source>Behavior</source>
            <translation>Comportement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5031" />
            <source>Auto-authenticate on startup:</source>
            <translation>Auto-authentification au démarrage :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5037" />
            <source>Save request history:</source>
            <translation>Sauvegarder l'historique :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5043" />
            <source>History limit:</source>
            <translation>Limite d'historique :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5049" />
            <source>Default API:</source>
            <translation>API par défaut :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5055" />
            <source>Check for updates on startup:</source>
            <translation>Vérifier les mises à jour au démarrage :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4646" />
            <location filename="../zscaler_api_client.py" line="5060" />
            <source>Advanced</source>
            <translation>Avancé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4645" />
            <source>Basic</source>
            <translation>De base</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4648" />
            <source>Interface mode:</source>
            <translation>Mode d'interface :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4755" />
            <source>API version:</source>
            <translation>Version API :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4963" />
            <source>Maximum upload/download (MB):</source>
            <translation>Téléchargement/téléchargement maximum (Mo) :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4967" />
            <source>Retry only GET, HEAD, and OPTIONS after transient network errors or HTTP 408, 429, 502, 503, and 504. Write requests are never retried automatically.</source>
            <translation>Réessayez uniquement GET, HEAD et OPTIONS après des erreurs réseau passagères ou HTTP 408, 429, 502, 503 et 504. Les demandes d'écriture ne sont jamais réessayées automatiquement.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4968" />
            <source>Retry safe reads:</source>
            <translation>Réessayez les lectures sécurisées :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4972" />
            <source>Maximum read retries:</source>
            <translation>Nombre maximal de tentatives de lecture :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4976" />
            <source>Maximum seconds to honor from Retry-After; shorter exponential backoff is used when the server omits it.</source>
            <translation>Nombre maximum de secondes à honorer après une nouvelle tentative ; un intervalle exponentiel plus court est utilisé lorsque le serveur l'omet.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4977" />
            <source>Maximum retry wait (seconds):</source>
            <translation>Attente maximale de nouvelle tentative (secondes) :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5066" />
            <source>Response Display</source>
            <translation>Affichage de la réponse</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5073" />
            <source>JSON Indentation:</source>
            <translation>Indentation JSON :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5079" />
            <source>Word Wrap:</source>
            <translation>Retour à la ligne :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5085" />
            <source>Font Size:</source>
            <translation>Taille de police :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5090" />
            <source>Light</source>
            <translation>Clair</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5090" />
            <source>Dark</source>
            <translation>Sombre</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5090" />
            <source>System</source>
            <translation>Système</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5091" />
            <source>Theme:</source>
            <translation>Thème :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5096" />
            <source>Display</source>
            <translation>Affichage</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5101" />
            <location filename="../zscaler_api_client.py" line="5136" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <location filename="../zscaler_api_client.py" line="5221" />
            <source>Privacy</source>
            <translation>Confidentialité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5104" />
            <source>Secrets only (identifiers visible)</source>
            <translation>Secrets uniquement (identifiants visibles)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5105" />
            <source>Obfuscate exports and external integrations (recommended)</source>
            <translation>Masquer les exportations et les intégrations externes (recommandé)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5106" />
            <source>Obfuscate exports, integrations, and on-screen data</source>
            <translation>Masquer les exportations, les intégrations et les données à l'écran</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5108" />
            <source>Identifier obfuscation:</source>
            <translation>Obscurcissement de l'identifiant :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5109" />
            <source>Credentials and authentication material are always masked. Identifier pseudonyms are stable until the local pseudonym key is rotated; no original-to-pseudonym mapping is stored.</source>
            <translation>Les informations d’identification et le matériel d’authentification sont toujours masqués. Les pseudonymes d'identification sont stables jusqu'à ce que la clé de pseudonyme locale soit alternée ; aucun mappage original-pseudonyme n'est stocké.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5111" />
            <source>Usernames, display names, and email addresses</source>
            <translation>Noms d'utilisateur, noms d'affichage et adresses e-mail</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5112" />
            <source>IPv4 and IPv6 addresses</source>
            <translation>Adresses IPv4 et IPv6</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5113" />
            <source>Hostnames, domains, and URL hosts</source>
            <translation>Noms d'hôte, domaines et hôtes d'URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5114" />
            <source>Tenant, customer, organization, and environment names</source>
            <translation>Noms du locataire, du client, de l’organisation et de l’environnement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5115" />
            <source>Object IDs, UUIDs, GUIDs, and client identifiers</source>
            <translation>ID d'objet, UUID, GUID et identifiants client</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5116" />
            <source>Policy, application, group, location, and resource names</source>
            <translation>Noms de stratégie, d'application, de groupe, d'emplacement et de ressource</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5123" />
            <source>Rotate local pseudonym key</source>
            <translation>Faire pivoter la clé de pseudonyme locale</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5124" />
            <source>Creates new pseudonyms for future views and exports. Existing files are not modified.</source>
            <translation>Crée de nouveaux pseudonymes pour les vues et exportations futures. Les fichiers existants ne sont pas modifiés.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5127" />
            <location filename="../zscaler_api_client.py" line="5252" />
            <location filename="../zscaler_api_client.py" line="5258" />
            <source>Rotate evidence signing key</source>
            <translation>Rotation de la clé de signature des preuves</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5128" />
            <source>Creates a new Ed25519 key in the system keychain. Existing signed packages remain verifiable with their embedded public keys.</source>
            <translation>Crée une nouvelle clé Ed25519 dans le trousseau système. Les packages signés existants restent vérifiables grâce à leurs clés publiques intégrées.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5131" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <source>Obfuscation preview</source>
            <translation>Aperçu de l'obscurcissement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5133" />
            <source>Preview of exported or externally shared data using synthetic examples:</source>
            <translation>Aperçu des données exportées ou partagées en externe à l'aide d'exemples synthétiques :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5141" />
            <location filename="../zscaler_api_client.py" line="5183" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <location filename="../zscaler_api_client.py" line="5221" />
            <source>Language</source>
            <translation>Langue</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5144" />
            <source>System default</source>
            <translation>Valeur par défaut du système</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5147" />
            <source>Application language:</source>
            <translation>Langue de candidature :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5148" />
            <source>System default follows your operating system language. Restart after saving to apply a change.</source>
            <translation>La valeur par défaut du système suit la langue de votre système d'exploitation. Redémarrez après avoir enregistré pour appliquer une modification.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5151" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <source>AI / LLM</source>
            <translation>IA / LLM</translation>
        </message>
        <message>
            <source>Local catalog assistant</source>
            <translation type="vanished">Assistante catalogue local</translation>
        </message>
        <message>
            <source>OpenAI-compatible cloud</source>
            <translation type="vanished">Cloud compatible OpenAI</translation>
        </message>
        <message>
            <source>Local OpenAI-compatible server</source>
            <translation type="vanished">Serveur local compatible OpenAI</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5157" />
            <source>AI provider:</source>
            <translation>Fournisseur d'IA :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5160" />
            <source>AI endpoint:</source>
            <translation>Point de terminaison de l'IA :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5162" />
            <source>Select a provider to prefill a recommended model</source>
            <translation>Select a provider to prefill a recommended model</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5163" />
            <source>Model:</source>
            <translation>Modèle :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5166" />
            <source>Stored securely in your system keychain</source>
            <translation>Stocké en toute sécurité dans le trousseau de votre système</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5167" />
            <source>API key:</source>
            <translation>Clé API :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5168" />
            <source>Allow this app to send the masked question and catalog metadata to an external AI service</source>
            <translation>Autoriser cette application à envoyer la question masquée et les métadonnées du catalogue à un service d'IA externe</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5171" />
            <source>Clear AI key</source>
            <translation>Effacer la clé AI</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5174" />
            <source>Test AI connection</source>
            <translation>Tester la connexion IA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5178" />
            <source>Provider profiles prefill public endpoints and recommended models. Review model availability, pricing, and your organization’s data policy before enabling an external service.</source>
            <translation>Provider profiles prefill public endpoints and recommended models. Review model availability, pricing, and your organization’s data policy before enabling an external service.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5240" />
            <location filename="../zscaler_api_client.py" line="5249" />
            <source>Rotate pseudonym key</source>
            <translation>Rotation de la clé du pseudonyme</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5241" />
            <source>Rotate the local pseudonym key? Future pseudonyms will change and will no longer correlate with previous exports.</source>
            <translation>Faire pivoter la clé du pseudonyme local ? Les futurs pseudonymes changeront et ne seront plus en corrélation avec les exportations précédentes.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5249" />
            <source>The local pseudonym key was rotated. No credentials or source identifiers were stored.</source>
            <translation>La clé du pseudonyme local a été alternée. Aucune information d'identification ou identifiant de source n'a été stockée.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5252" />
            <source>Create a new local evidence signing identity? Existing signed packages remain verifiable, but future packages will have a different public-key fingerprint.</source>
            <translation>Créer une nouvelle identité locale de signature de preuves ? Les packages signés existants restent vérifiables, mais les futurs packages auront une empreinte de clé publique différente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5255" />
            <source>Signed evidence</source>
            <translation>Preuve signée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5255" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>Le trousseau du système n'a pas pu stocker la clé de signature des preuves.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5258" />
            <source>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</source>
            <translation>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5264" />
            <source>Restore Defaults</source>
            <translation>Restaurer les paramètres par défaut</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5265" />
            <source>This will reset all advanced settings to defaults. Continue?</source>
            <translation>Cela réinitialisera tous les paramètres avancés aux valeurs par défaut. Continuer?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5387" />
            <source>Configured securely in your system keychain</source>
            <translation>Configuré en toute sécurité dans le trousseau de votre système</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5394" />
            <source>AI key cleared</source>
            <translation>Clé IA effacée</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5410" />
            <location filename="../zscaler_api_client.py" line="5413" />
            <location filename="../zscaler_api_client.py" line="5424" />
            <location filename="../zscaler_api_client.py" line="5425" />
            <source>AI connection</source>
            <translation>Connexion IA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5410" />
            <source>Local catalog assistant is ready.</source>
            <translation>L'assistant de catalogue local est prêt.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5413" />
            <source>Enter an AI endpoint first.</source>
            <translation>Entrez d’abord un point de terminaison IA.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5422" />
            <source>AI connection succeeded.</source>
            <translation>La connexion IA a réussi.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5425" />
            <source>AI connection failed: {error}</source>
            <translation>AI connection failed: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5439" />
            <source>ZIA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZIA Cloud : suppression du préfixe d'URL (uniquement le nom d'hôte est requis)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5446" />
            <source>ZPA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZPA Cloud : préfixe d'URL supprimé (uniquement le nom d'hôte est requis)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5452" />
            <source>{product} Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>{product} Cloud: Removed URL prefix (only hostname needed)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5457" />
            <source>ZPA: Customer ID is empty — required for most ZPA endpoints</source>
            <translation>ZPA : l'ID client est vide – requis pour la plupart des points de terminaison ZPA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5459" />
            <source>ZPA: Customer ID should be numeric (got '{value}')</source>
            <translation>ZPA: Customer ID should be numeric (got '{value}')</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5467" />
            <source>OneAPI: Removed URL prefix from vanity domain</source>
            <translation>OneAPI : suppression du préfixe d'URL du domaine personnalisé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5471" />
            <source>OneAPI: Removed .zslogin.net suffix — only the prefix is needed (e.g. 'acme')</source>
            <translation>OneAPI : suppression du suffixe .zslogin.net — seul le préfixe est nécessaire (par exemple « acme »)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5473" />
            <source>OneAPI: Vanity domain usually has no dots (e.g. 'acme', not '{value}')</source>
            <translation>OneAPI: Vanity domain usually has no dots (e.g. 'acme', not '{value}')</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5479" />
            <source>OneAPI: Cloud should be empty (production) or a simple name like 'beta'/'alpha'. Got '{value}' — this looks like a full domain. Leave empty for production.</source>
            <translation>OneAPI: Cloud should be empty (production) or a simple name like 'beta'/'alpha'. Got '{value}' — this looks like a full domain. Leave empty for production.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5487" />
            <source>OneAPI: Customer ID should be numeric (got '{value}')</source>
            <translation>OneAPI: Customer ID should be numeric (got '{value}')</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5495" />
            <source>ZIdentity: Removed URL prefix from domain</source>
            <translation>ZIdentity : préfixe d'URL supprimé du domaine</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5499" />
            <source>ZIA is enabled but Cloud is empty</source>
            <translation>ZIA est activé mais Cloud est vide</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5501" />
            <source>ZCC is enabled but Cloud host is empty</source>
            <translation>ZCC est activé mais l'hôte Cloud est vide</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5503" />
            <source>OneAPI is enabled but Vanity Domain is empty</source>
            <translation>OneAPI est activé mais Vanity Domain est vide</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5505" />
            <source>OneAPI is enabled but Client ID is empty</source>
            <translation>OneAPI est activé mais l'ID client est vide</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5520" />
            <source>Settings Validation</source>
            <translation>Validation des paramètres</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5521" />
            <source>Some settings were adjusted or may need attention:</source>
            <translation>Certains paramètres ont été modifiés ou peuvent nécessiter une attention :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5525" />
            <source>Save Anyway</source>
            <translation>Enregistrer quand même</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5526" />
            <source>Go Back</source>
            <translation>Retourner</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5551" />
            <source>Secure storage</source>
            <translation>Stockage sécurisé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5551" />
            <source>The system keychain could not save one or more secrets. No secret changes were applied.</source>
            <translation>Le trousseau système n’a pas pu enregistrer un ou plusieurs secrets. Aucune modification secrète n'a été appliquée.</translation>
        </message>
    </context>
    <context>
        <name>SetupWizard</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4185" />
            <source>Getting Started Wizard</source>
            <translation>Assistant de démarrage</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4204" />
            <source>Back</source>
            <translation>Retour</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4208" />
            <source>Open full settings</source>
            <translation>Ouvrir les paramètres complets</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4211" />
            <location filename="../zscaler_api_client.py" line="4334" />
            <source>Continue</source>
            <translation>Continuer</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4222" />
            <source>Abstract zero trust security network</source>
            <translation>Réseau de sécurité abstrait zéro confiance</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4224" />
            <source>&lt;h1&gt;Welcome to ZS API Client&lt;/h1&gt;</source>
            <translation>&lt;h1&gt;Welcome to ZS API Client&lt;/h1&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4227" />
            <source>&lt;p&gt;This guide sets up secure OneAPI access and prepares common requests. Credentials are stored in your system keychain; you can change any setting later.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Recommended:&lt;/b&gt; use OneAPI for a unified token across supported Zscaler services.&lt;/p&gt;</source>
            <translation>&lt;p&gt;This guide sets up secure OneAPI access and prepares common requests. Credentials are stored in your system keychain; you can change any setting later.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Recommended:&lt;/b&gt; use OneAPI for a unified token across supported Zscaler services.&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4235" />
            <source>Basic</source>
            <translation>De base</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4236" />
            <source>Advanced</source>
            <translation>Avancé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4238" />
            <source>Setup mode:</source>
            <translation>Mode de configuration :</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4246" />
            <source>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4247" />
            <source>Create an API client with the required roles in ZIdentity, then enter its details below.</source>
            <translation>Créez un client API avec les rôles requis dans ZIdentity, puis saisissez ses détails ci-dessous.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4253" />
            <source>Vanity domain</source>
            <translation>Domaine de vanité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4255" />
            <source>Client ID</source>
            <translation>Identifiant client</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4258" />
            <source>Client secret</source>
            <translation>Secret client</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4260" />
            <source>Leave empty for production; use beta or alpha when applicable</source>
            <translation>Laisser vide pour la production ; utiliser la version bêta ou alpha le cas échéant</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4261" />
            <source>Cloud</source>
            <translation>Nuage</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4263" />
            <source>Optional; required for many ZPA requests</source>
            <translation>Facultatif ; requis pour de nombreuses demandes ZPA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4264" />
            <source>ZPA customer ID</source>
            <translation>Numéro client ZPA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4294" />
            <source>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4295" />
            <source>Choose a common operation. The wizard will load it into the request builder with required path variables highlighted.</source>
            <translation>Choisissez une opération courante. L'assistant le chargera dans le générateur de requêtes avec les variables de chemin requises mises en surbrillance.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4353" />
            <source>Secure storage</source>
            <translation>Stockage sécurisé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4353" />
            <source>The system keychain could not save the secret. Check the keychain service and try again.</source>
            <translation>Le trousseau système n’a pas pu enregistrer le secret. Vérifiez le service de trousseau et réessayez.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4285" />
            <location filename="../zscaler_api_client.py" line="4299" />
            <source>Just explore the API catalog</source>
            <translation>Explorez simplement le catalogue API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4166" />
            <source>ZIA · List users</source>
            <translation>ZIA · Liste des utilisateurs</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4167" />
            <source>ZIA · List URL categories</source>
            <translation>ZIA · Liste des catégories d'URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4168" />
            <source>ZIA · Check activation status</source>
            <translation>ZIA · Vérifier l'état d'activation</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4169" />
            <source>ZIA · List cloud firewall policies</source>
            <translation>ZIA · Répertorier les politiques de pare-feu cloud</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4170" />
            <source>ZPA · List application segments</source>
            <translation>ZPA · Liste des segments d'application</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4171" />
            <source>ZPA · List segment groups</source>
            <translation>ZPA · Liste des groupes de segments</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4172" />
            <source>ZPA · List connectors</source>
            <translation>ZPA · Liste des connecteurs</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4173" />
            <source>ZDX · List devices and experience scores</source>
            <translation>ZDX · Répertorier les appareils et les scores d'expérience</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4174" />
            <source>ZDX · List active alerts</source>
            <translation>ZDX · Liste des alertes actives</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4175" />
            <source>ZDX · List monitored applications</source>
            <translation>ZDX · Liste des applications surveillées</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4176" />
            <source>Client Connector · List devices</source>
            <translation>Connecteur client · Liste des appareils</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4177" />
            <source>ZIdentity · List users</source>
            <translation>ZIdentity · Liste des utilisateurs</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4178" />
            <source>ZIdentity · List groups</source>
            <translation>ZIdentity · Liste des groupes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4179" />
            <source>AI Security · List workloads</source>
            <translation>Sécurité IA · Répertorier les charges de travail</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4303" />
            <source>Authenticate immediately after finishing</source>
            <translation>Authentifiez-vous immédiatement après avoir terminé</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4312" />
            <source>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4314" />
            <source>The API Explorer contains the complete bundled catalog. Use the Documentation tab for endpoint details, the Console tab for request activity, and Request History to replay safe, redacted requests.</source>
            <translation>L'API Explorer contient le catalogue groupé complet. Utilisez l'onglet Documentation pour les détails du point de terminaison, l'onglet Console pour l'activité des demandes et l'historique des demandes pour relire les demandes sécurisées et expurgées.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4332" />
            <source>Step {current} of {total}</source>
            <translation>Step {current} of {total}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4334" />
            <source>Finish</source>
            <translation>Terminer</translation>
        </message>
    </context>
    <context>
        <name>SocEntityGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Identity</source>
            <translation>Identité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Address</source>
            <translation>Adresse</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Device</source>
            <translation>Appareil</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Application</source>
            <translation>Demande</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Policy</source>
            <translation>Politique</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Service</source>
            <translation>Service</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Endpoint</source>
            <translation>Point de terminaison</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Infrastructure</source>
            <translation>Infrastructures</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Indicator</source>
            <translation>Indicateur</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Activity</source>
            <translation>Activité</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Environment</source>
            <translation>Environnement</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Resource</source>
            <translation>Ressource</translation>
        </message>
    </context>
    <context>
        <name>SplashScreen</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4408" />
            <source>Loading...</source>
            <translation>Chargement...</translation>
        </message>
    </context>
    <context>
        <name>WelcomeDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4010" />
            <source>Welcome to ZS API Client</source>
            <translation>Bienvenue dans ZS API Client</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4022" />
            <source>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</source>
            <translation>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4035" />
            <source>Supported APIs</source>
            <translation>APIs prises en charge</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4038" />
            <source>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</source>
            <translation>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4054" />
            <source>Getting Started</source>
            <translation>Prise en main</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4057" />
            <source>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</source>
            <translation>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4070" />
            <source>Tips for Advanced Users</source>
            <translation>Conseils pour utilisateurs avancés</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4073" />
            <source>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4087" />
            <source>Documentation</source>
            <translation>Documentation</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4108" />
            <source>Show this dialog on startup</source>
            <translation>Afficher cette boîte de dialogue au démarrage</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4116" />
            <source>Open Settings</source>
            <translation>Ouvrir les paramètres</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4120" />
            <source>Get Started</source>
            <translation>Commencer</translation>
        </message>
    </context>
    <context>
        <name>owner</name>
        <message>
            <location filename="../zscaler_api_client.py" line="444" />
            <source>Default</source>
            <translation>Par défaut</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="657" />
            <source>The response export is unavailable, is a symbolic link, or exceeds the configured transfer limit.</source>
            <translation>L'exportation de la réponse n'est pas disponible, est un lien symbolique ou dépasse la limite de transfert configurée.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="658" />
            <source>The response export is not valid UTF-8 JSON.</source>
            <translation>L’exportation de la réponse n’est pas un JSON UTF-8 valide.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="659" />
            <source>This is not a supported ZS API response exchange file.</source>
            <translation>Il ne s'agit pas d'un fichier d'échange de réponses API ZS pris en charge.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="660" />
            <source>The response exchange file is incomplete.</source>
            <translation>Le fichier d'échange de réponses est incomplet.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="662" />
            <source>The response exchange file could not be opened.</source>
            <translation>Le fichier d'échange de réponses n'a pas pu être ouvert.</translation>
        </message>
    </context>
    <context>
        <name>window</name>
        <message>
            <location filename="../zscaler_api_client.py" line="12246" />
            <source>Automatic Update Check</source>
            <translation>Activer la vérification automatique de mise à jour</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12248" />
            <source>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</source>
            <translation>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</translation>
        </message>
    </context>
</TS>