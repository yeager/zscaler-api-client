<?xml version='1.0' encoding='utf-8'?>
<TS version="2.1" language="es">
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
            <location filename="../zscaler_api_client.py" line="4443" />
            <source>About ZS API Client</source>
            <translation>Acerca de ZS API Client</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4469" />
            <source>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</source>
            <translation>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4502" />
            <source>Disclaimer</source>
            <translation>Descargo de responsabilidad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4505" />
            <source>&lt;p style='color: #666;'&gt;This software is &lt;b&gt;not affiliated with, endorsed by, or supported by Zscaler, Inc.&lt;/b&gt; in any way. This is an independent community project.&lt;/p&gt;&lt;p style='color: #666;'&gt;Zscaler® is a registered trademark of Zscaler, Inc. All product names, logos, and brands are property of their respective owners.&lt;/p&gt;&lt;p style='color: #666;'&gt;&lt;b&gt;NO WARRANTY:&lt;/b&gt; This software is provided "as is" without warranty of any kind. Use at your own risk. The author is not responsible for any damage or data loss resulting from the use of this software.&lt;/p&gt;&lt;p style='color: #666;'&gt;&lt;b&gt;NO SUPPORT:&lt;/b&gt; For Zscaler product support, please contact Zscaler directly through official channels.&lt;/p&gt;</source>
            <translation>&lt;p style='color: #666;'&gt;This software is &lt;b&gt;not affiliated with, endorsed by, or supported by Zscaler, Inc.&lt;/b&gt; in any way. This is an independent community project.&lt;/p&gt;&lt;p style='color: #666;'&gt;Zscaler® is a registered trademark of Zscaler, Inc. All product names, logos, and brands are property of their respective owners.&lt;/p&gt;&lt;p style='color: #666;'&gt;&lt;b&gt;NO WARRANTY:&lt;/b&gt; This software is provided "as is" without warranty of any kind. Use at your own risk. The author is not responsible for any damage or data loss resulting from the use of this software.&lt;/p&gt;&lt;p style='color: #666;'&gt;&lt;b&gt;NO SUPPORT:&lt;/b&gt; For Zscaler product support, please contact Zscaler directly through official channels.&lt;/p&gt;</translation>
        </message>
    </context>
    <context>
        <name>BatchDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5729" />
            <source>Batch Operations</source>
            <translation>Operaciones por lotes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5736" />
            <source>Import a CSV file to perform batch operations. The CSV should have columns matching the API parameters.</source>
            <translation>Importe un archivo CSV para realizar operaciones por lotes. El CSV debe tener columnas que coincidan con los parámetros de la API.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5745" />
            <source>Select CSV file...</source>
            <translation>Seleccionar archivo CSV...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5748" />
            <source>Browse...</source>
            <translation>Examinar...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5760" />
            <source>Operation:</source>
            <translation>Operación:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5764" />
            <source>Create Users (ZIA)</source>
            <translation>Crear usuarios (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5765" />
            <source>Update Users (ZIA)</source>
            <translation>Actualizar usuarios (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5766" />
            <source>Delete Users (ZIA)</source>
            <translation>Eliminar usuarios (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5767" />
            <source>Create Locations (ZIA)</source>
            <translation>Crear ubicaciones (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5768" />
            <source>URL Lookup (ZIA)</source>
            <translation>Búsqueda de URL (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5769" />
            <source>Create App Segments (ZPA)</source>
            <translation>Crear segmentos de aplicación (ZPA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5795" />
            <source>Select CSV File</source>
            <translation>Seleccionar archivo CSV</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5825" />
            <source>Error</source>
            <translation>error</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5834" />
            <source>Validated: {count} requests are ready for review.</source>
            <translation>Validated: {count} requests are ready for review.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5836" />
            <source>Batch validation failed. Required CSV columns: {columns}</source>
            <translation>Batch validation failed. Required CSV columns: {columns}</translation>
        </message>
    </context>
    <context>
        <name>ChangelogDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4548" />
            <source>What's New</source>
            <translation>Novedades</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4555" />
            <source>&lt;h2&gt;🎉 Updated to version {version}&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;🎉 Updated to version {version}&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4560" />
            <source>&lt;p style='color: #666;'&gt;Updated from version {prev}&lt;/p&gt;</source>
            <translation>&lt;p style='color: #666;'&gt;Updated from version {prev}&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4576" />
            <source>Don't show this after future updates</source>
            <translation>No mostrar esto después de futuras actualizaciones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4597" />
            <source>*Changelog not found*</source>
            <translation>*Registro de cambios no encontrado*</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4618" />
            <source>*Could not load changelog: {error}*</source>
            <translation>*No se ha podido cargar el registro de cambios: {error}*</translation>
        </message>
    </context>
    <context>
        <name>EnvironmentProfilesDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5972" />
            <location filename="../zscaler_api_client.py" line="6015" />
            <location filename="../zscaler_api_client.py" line="6018" />
            <location filename="../zscaler_api_client.py" line="6026" />
            <source>Environment profiles</source>
            <translation>Perfiles ambientales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5974" />
            <source>Each environment keeps separate tenant hosts, client identifiers, enabled products, and keychain credentials. Creating a profile copies only non-secret configuration. Activating a profile clears every in-memory API session.</source>
            <translation>Cada entorno mantiene hosts de inquilinos, identificadores de cliente, productos habilitados y credenciales de llavero independientes. La creación de un perfil copia solo la configuración no secreta. La activación de un perfil borra todas las sesiones de API en memoria.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5975" />
            <source>Active</source>
            <translation>Activo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5975" />
            <source>Name</source>
            <translation>Nombre</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5975" />
            <source>Default API</source>
            <translation>API predeterminada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5975" />
            <source>Configured host</source>
            <translation>Host configurado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5975" />
            <source>Keychain secrets</source>
            <translation>Secretos del llavero</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5978" />
            <location filename="../zscaler_api_client.py" line="6011" />
            <source>Create profile</source>
            <translation>Crear perfil</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5979" />
            <location filename="../zscaler_api_client.py" line="6023" />
            <source>Rename profile</source>
            <translation>Cambiar nombre de perfil</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5980" />
            <location filename="../zscaler_api_client.py" line="6034" />
            <location filename="../zscaler_api_client.py" line="6035" />
            <source>Delete profile</source>
            <translation>Eliminar perfil</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5981" />
            <source>Activate profile</source>
            <translation>Activar perfil</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5982" />
            <source>Close</source>
            <translation>Cerrar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5998" />
            <source>{count} configured</source>
            <translation>{count} configured</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6011" />
            <location filename="../zscaler_api_client.py" line="6023" />
            <source>Profile name:</source>
            <translation>Nombre del perfil:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6015" />
            <location filename="../zscaler_api_client.py" line="6026" />
            <source>Enter a unique profile name without path separators (maximum 60 characters).</source>
            <translation>Ingrese un nombre de perfil único sin separadores de ruta (máximo 60 caracteres).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6018" />
            <source>The profile was created with non-secret settings only. Open Settings after activation to add its keychain credentials.</source>
            <translation>El perfil se creó únicamente con configuraciones no secretas. Abra Configuración después de la activación para agregar sus credenciales de llavero.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6034" />
            <source>The default or active profile cannot be deleted. Activate another profile first.</source>
            <translation>El perfil predeterminado o activo no se puede eliminar. Active otro perfil primero.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6035" />
            <source>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</source>
            <translation>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6037" />
            <source>Secure storage</source>
            <translation>Almacenamiento seguro</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6037" />
            <source>The profile could not be deleted because its keychain credentials could not be removed.</source>
            <translation>No se pudo eliminar el perfil porque no se pudieron eliminar sus credenciales de llavero.</translation>
        </message>
    </context>
    <context>
        <name>ErrorCodesDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5666" />
            <source>API Error Codes Reference</source>
            <translation>Referencia de códigos de error de API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5672" />
            <source>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5675" />
            <source>Common error codes and their meanings for each API.</source>
            <translation>Códigos de error comunes y sus significados para cada API.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5688" />
            <source>Code</source>
            <translation>Código</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5688" />
            <source>Name</source>
            <translation>Nombre</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5688" />
            <source>Description</source>
            <translation>Descripción</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5708" />
            <source>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5719" />
            <source>Close</source>
            <translation>Cerrar</translation>
        </message>
    </context>
    <context>
        <name>ExperienceJourneyGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3969" />
            <source>No journey telemetry in the current response</source>
            <translation>No hay telemetría de viaje en la respuesta actual</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3988" />
            <source>No observed data</source>
            <translation>No hay datos observados</translation>
        </message>
    </context>
    <context>
        <name>HighPerformanceLineChart</name>
        <message>
            <source>Latency</source>
            <translation type="vanished">Latencia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3800" />
            <source>Value</source>
            <translation>Valor</translation>
        </message>
    </context>
    <context>
        <name>HistoryDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5846" />
            <source>Request History</source>
            <translation>Historial de solicitudes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5855" />
            <source>Search:</source>
            <translation>Buscar:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5857" />
            <source>Filter by URL or method...</source>
            <translation>Filtrar por URL o método...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5862" />
            <source>Current environment: {name}</source>
            <translation>Current environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5863" />
            <source>All environments</source>
            <translation>Todos los ambientes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5867" />
            <location filename="../zscaler_api_client.py" line="5944" />
            <source>Clear History</source>
            <translation>Borrar historial</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5876" />
            <source>Time</source>
            <translation>Hora</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5876" />
            <source>Method</source>
            <translation>Método</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5876" />
            <source>URL</source>
            <translation>URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5876" />
            <source>Environment</source>
            <translation>Medio ambiente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5877" />
            <source>Status</source>
            <translation>Estado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5877" />
            <source>Duration</source>
            <translation>Duración</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5889" />
            <source>Load Request</source>
            <translation>Cargar solicitud</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5893" />
            <source>Close</source>
            <translation>Cerrar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5917" />
            <source>Default</source>
            <translation>Predeterminado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5945" />
            <source>Are you sure you want to clear all request history?</source>
            <translation>¿Está seguro de que desea borrar todo el historial de solicitudes?</translation>
        </message>
    </context>
    <context>
        <name>MainWindow</name>
        <message>
            <source>API:</source>
            <translation type="vanished">API:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8643" />
            <source>Auth</source>
            <translation>autenticación</translation>
        </message>
        <message>
            <source>Authenticate with selected API</source>
            <translation type="vanished">Autenticar con API seleccionada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8665" />
            <source>Endpoints</source>
            <translation>Puntos finales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8671" />
            <source>Output</source>
            <translation>Salida</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8677" />
            <source>Authentication status, requests, and audit info...</source>
            <translation>Estado de autenticación, solicitudes e información de auditoría...</translation>
        </message>
        <message>
            <source>Request</source>
            <translation type="vanished">Solicitud</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8711" />
            <source>Enter URL or select endpoint...</source>
            <translation>Ingrese URL o seleccione punto final...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8715" />
            <source>Send</source>
            <translation>Enviar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8724" />
            <source>cURL</source>
            <translation>rizo</translation>
        </message>
        <message>
            <source>Copy request as cURL command</source>
            <translation type="vanished">Copiar solicitud como comando cURL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8797" />
            <location filename="../zscaler_api_client.py" line="8806" />
            <source>Key</source>
            <translation>Clave</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8797" />
            <location filename="../zscaler_api_client.py" line="8806" />
            <location filename="../zscaler_api_client.py" line="8866" />
            <location filename="../zscaler_api_client.py" line="8941" />
            <source>Value</source>
            <translation>Valor</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8800" />
            <source>Params</source>
            <translation>Parámetros</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8809" />
            <location filename="../zscaler_api_client.py" line="8934" />
            <source>Headers</source>
            <translation>Encabezados</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8842" />
            <location filename="../zscaler_api_client.py" line="10677" />
            <source>Request body (JSON)...</source>
            <translation>Cuerpo de solicitud (JSON)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8846" />
            <location filename="../zscaler_api_client.py" line="8933" />
            <source>Body</source>
            <translation>Cuerpo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8853" />
            <location filename="../zscaler_api_client.py" line="8866" />
            <source>Variable</source>
            <translation>variable</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8869" />
            <source>Path Variables</source>
            <translation>Variables de ruta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8891" />
            <location filename="../zscaler_api_client.py" line="10582" />
            <source>Response</source>
            <translation>Respuesta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8906" />
            <source>Pretty</source>
            <translation>bonita</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8909" />
            <source>Toggle pretty-print JSON (Ctrl+P)</source>
            <translation>Alternar JSON de impresión bonita (Ctrl+P)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8914" />
            <location filename="../zscaler_api_client.py" line="10089" />
            <location filename="../zscaler_api_client.py" line="10108" />
            <location filename="../zscaler_api_client.py" line="10113" />
            <location filename="../zscaler_api_client.py" line="10121" />
            <source>Export response</source>
            <translation>Exportar respuesta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8917" />
            <source>Preview export</source>
            <translation>Vista previa de exportación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8937" />
            <source>Table</source>
            <translation>mesa</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8939" />
            <source>Chart</source>
            <translation>Gráfico</translation>
        </message>
        <message>
            <source>JSON structure</source>
            <translation type="vanished">estructura JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8943" />
            <source>Tree</source>
            <translation>árbol</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8946" />
            <source>Heatmap</source>
            <translation>Mapa de calor</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8949" />
            <source>Topology</source>
            <translation>Topología</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8953" />
            <source>Schema</source>
            <translation>esquema</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8958" />
            <location filename="../zscaler_api_client.py" line="9024" />
            <source>AI Assistant</source>
            <translation>Asistente de IA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8961" />
            <source>Ask a OneAPI question, e.g. list ZPA application segments</source>
            <translation>Haga una pregunta sobre OneAPI, p. enumerar segmentos de aplicaciones ZPA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8965" />
            <source>Choose a guided AI example…</source>
            <translation>Elija un ejemplo de IA guiada...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8971" />
            <source>Find API request</source>
            <translation>Buscar solicitud de API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8974" />
            <source>Run selected request</source>
            <translation>Ejecutar solicitud seleccionada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8977" />
            <source>Export result</source>
            <translation>Resultado de exportación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8981" />
            <location filename="../zscaler_api_client.py" line="11791" />
            <source>Ask in plain language. Sensitive values are masked before display or export.</source>
            <translation>Pregunta en lenguaje sencillo. Los valores sensibles se enmascaran antes de mostrarlos o exportarlos.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8987" />
            <source>AI request preview appears here before execution.</source>
            <translation>La vista previa de la solicitud de IA aparece aquí antes de la ejecución.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8993" />
            <source>Bar chart</source>
            <translation>gráfico de barras</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8994" />
            <source>Line chart</source>
            <translation>gráfico de líneas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8995" />
            <source>Pie chart</source>
            <translation>gráfico circular</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9004" />
            <source>Help</source>
            <translation>Ayuda</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9023" />
            <source>Console</source>
            <translation>Consola</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9040" />
            <source>Ready</source>
            <translation>Listo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9049" />
            <source>&amp;File</source>
            <translation>&amp;Archivo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9051" />
            <source>&amp;Settings...</source>
            <translation>&amp;Configuración...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9056" />
            <source>&amp;Batch Operations...</source>
            <translation>Operaciones por &amp;lotes...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9063" />
            <source>Request &amp;History...</source>
            <translation>Solicitud e historial...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9072" />
            <source>&amp;Quit</source>
            <translation>&amp;Salir</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9078" />
            <source>&amp;Edit</source>
            <translation>&amp;Editar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9080" />
            <source>Copy as c&amp;URL</source>
            <translation>Copiar como c&amp;URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9085" />
            <source>Copy &amp;Response</source>
            <translation>Copiar y responder</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9092" />
            <source>C&amp;lear Request</source>
            <translation>Solicitud de limpieza y borrado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9097" />
            <source>&amp;Request</source>
            <translation>&amp;Solicitud</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9099" />
            <source>&amp;Send Request</source>
            <translation>&amp;Enviar solicitud</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9106" />
            <source>Authenticate &amp;ZIA</source>
            <translation>Autenticar &amp;ZIA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9110" />
            <source>Authenticate Z&amp;PA</source>
            <translation>Autenticar Z&amp;PA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9116" />
            <source>&amp;Logout All Sessions</source>
            <translation>&amp;Cerrar sesión en todas las sesiones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9120" />
            <source>&amp;Operations</source>
            <translation>&amp;Operaciones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9121" />
            <source>Operations &amp;Center...</source>
            <translation>Centro y operaciones...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9129" />
            <source>Environment &amp;Profiles...</source>
            <translation>Entorno y perfiles...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9134" />
            <source>&amp;Language</source>
            <translation>&amp;Idioma</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9143" />
            <source>&amp;Help</source>
            <translation>A&amp;yuda</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9145" />
            <source>&amp;Welcome Guide...</source>
            <translation>Guía de &amp;bienvenida...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9149" />
            <source>&amp;About...</source>
            <translation>&amp;Acerca de...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9154" />
            <source>About &amp;Qt...</source>
            <translation>Acerca de &amp; Qt</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9161" />
            <source>ZIA API &amp;Documentation</source>
            <translation>API y documentación de ZIA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9165" />
            <source>ZPA API D&amp;ocumentation</source>
            <translation>Documentación API ZPA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9169" />
            <source>Zscaler API &amp;Portal</source>
            <translation>Portal y API de Zscaler</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9173" />
            <source>API &amp;Error Codes...</source>
            <translation>API y códigos de error...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9179" />
            <source>Check for &amp;Updates...</source>
            <translation>Buscar &amp;actualizaciones...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9249" />
            <source>{count} operations · {groups} groups</source>
            <translation>{count} operations · {groups} groups</translation>
        </message>
        <message>
            <source>Create new profile…</source>
            <translation type="vanished">Crear nuevo perfil…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9607" />
            <source>Environment profiles</source>
            <translation>Perfiles ambientales</translation>
        </message>
        <message>
            <source>Profile:</source>
            <translation type="vanished">Perfil:</translation>
        </message>
        <message>
            <source>New profile name:</source>
            <translation type="vanished">Nuevo nombre de perfil:</translation>
        </message>
        <message>
            <source>Environment profile active: </source>
            <translation type="vanished">Perfil de entorno activo: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9654" />
            <source>{count} matching operations</source>
            <translation>{count} matching operations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9654" />
            <source>{count} operations</source>
            <translation>{count} operations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9691" />
            <source>Guided example loaded. Find the API request, review the preview, then choose whether to run it.</source>
            <translation>Ejemplo guiado cargado. Busque la solicitud de API, revise la vista previa y luego elija si desea ejecutarla.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9793" />
            <source>ZIA credentials not configured. Please go to Settings.</source>
            <translation>Credenciales ZIA no configuradas. Vaya a Configuración.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9822" />
            <source>ZCC credentials not configured. Please go to Settings.</source>
            <translation>Credenciales ZCC no configuradas. Vaya a Configuración.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9848" />
            <source>{api_type} credentials not configured. Please go to Settings.</source>
            <translation>{api_type} credentials not configured. Please go to Settings.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9912" />
            <source>OneAPI credentials not configured. Please go to Settings.</source>
            <translation>Credenciales de OneAPI no configuradas. Vaya a Configuración.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9953" />
            <source>No matching API operation was found. Try product and resource names.</source>
            <translation>No se encontró ninguna operación API coincidente. Pruebe los nombres de productos y recursos.</translation>
        </message>
        <message>
            <source>Suggested request: {method} {name}. Review path variables before running.</source>
            <translation type="vanished">Suggested request: {method} {name}. Review path variables before running.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9970" />
            <source>Operation</source>
            <translation>Operación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9970" />
            <location filename="../zscaler_api_client.py" line="11594" />
            <source>Method</source>
            <translation>Método</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9970" />
            <location filename="../zscaler_api_client.py" line="11594" />
            <source>URL</source>
            <translation>URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10004" />
            <source>Ask the AI assistant for a request first.</source>
            <translation>Primero, pídale una solicitud al asistente de IA.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10007" />
            <source>Review AI request</source>
            <translation>Revisar la solicitud de IA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10008" />
            <source>Review the URL, path variables, and parameters in the preview before sending. Send this request now?</source>
            <translation>Revise la URL, las variables de ruta y los parámetros en la vista previa antes de enviar. ¿Enviar esta solicitud ahora?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10031" />
            <location filename="../zscaler_api_client.py" line="10036" />
            <source>Asking configured LLM…</source>
            <translation>Preguntando LLM configurado...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10034" />
            <source>LLM unavailable; using the local catalog assistant.</source>
            <translation>LLM no disponible; utilizando el asistente de catálogo local.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10045" />
            <source>Configure an AI endpoint and model in Settings.</source>
            <translation>Configure un punto final y un modelo de IA en Configuración.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10049" />
            <source>AI endpoint must use HTTP or HTTPS.</source>
            <translation>El punto final de IA debe utilizar HTTP o HTTPS.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10051" />
            <source>External AI is disabled. Enable it explicitly in Settings.</source>
            <translation>La IA externa está desactivada. Habilítelo explícitamente en Configuración.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10053" />
            <source>External AI endpoints must use HTTPS.</source>
            <translation>Los puntos finales de IA externos deben utilizar HTTPS.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10055" />
            <source>AI question is too long (maximum 2000 characters).</source>
            <translation>La pregunta de IA es demasiado larga (máximo 2000 caracteres).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10077" />
            <location filename="../zscaler_api_client.py" line="10083" />
            <source>Save binary response</source>
            <translation>Guardar respuesta binaria</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10078" />
            <source>Binary content cannot be inspected or obfuscated as text. Save the original response only if you trust this endpoint and destination?</source>
            <translation>El contenido binario no se puede inspeccionar ni ofuscar como texto. ¿Guardar la respuesta original solo si confía en este punto final y destino?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10083" />
            <source>All files (*)</source>
            <translation>Todos los archivos (*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10086" />
            <source>Original binary response saved</source>
            <translation>Respuesta binaria original guardada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10135" />
            <source>Masked response exported</source>
            <translation>Respuesta enmascarada exportada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10241" />
            <source>Binary content is not included in this preview.</source>
            <translation>El contenido binario no está incluido en esta vista previa.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10243" />
            <location filename="../zscaler_api_client.py" line="10249" />
            <source>Export preview</source>
            <translation>Vista previa de exportación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10244" />
            <source>Original binary export requires a separate confirmation.</source>
            <translation>La exportación binaria original requiere una confirmación por separado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10250" />
            <source>Sensitive fields are masked in every export.</source>
            <translation>Los campos sensibles están enmascarados en cada exportación.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10304" />
            <location filename="../zscaler_api_client.py" line="10313" />
            <location filename="../zscaler_api_client.py" line="10321" />
            <source>Export AI result</source>
            <translation>Exportar resultado de IA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10113" />
            <location filename="../zscaler_api_client.py" line="10121" />
            <location filename="../zscaler_api_client.py" line="10313" />
            <location filename="../zscaler_api_client.py" line="10321" />
            <source>No chart data is available to export.</source>
            <translation>No hay datos de gráficos disponibles para exportar.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10330" />
            <source>AI result exported</source>
            <translation>Resultado de IA exportado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10589" />
            <source>No tabular datasets</source>
            <translation>Sin conjuntos de datos tabulares</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10598" />
            <source>Nodes</source>
            <translation>Nodos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10598" />
            <source>Connections</source>
            <translation>Conexiones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10600" />
            <source>No nodes or connections were found in this response.</source>
            <translation>No se encontraron nodos ni conexiones en esta respuesta.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10661" />
            <source>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</source>
            <translation>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10678" />
            <source>Raw request body...</source>
            <translation>Cuerpo de solicitud sin procesar...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10679" />
            <source>Form fields as JSON or an encoded key=value string...</source>
            <translation>Campos de formulario como JSON o una cadena clave = valor codificada...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10680" />
            <source>Optional multipart fields as a JSON object...</source>
            <translation>Campos multiparte opcionales como un objeto JSON...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10686" />
            <source>Select upload file</source>
            <translation>Seleccione cargar archivo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9445" />
            <location filename="../zscaler_api_client.py" line="10735" />
            <source>Yes</source>
            <translation>si</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9445" />
            <location filename="../zscaler_api_client.py" line="10735" />
            <source>No</source>
            <translation>No</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10753" />
            <source>{count} variable(s) extracted · {missing} required value(s) missing</source>
            <translation>{count} variable(s) extracted · {missing} required value(s) missing</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10760" />
            <location filename="../zscaler_api_client.py" line="11108" />
            <source>GraphQL body must be a JSON object containing a query string.</source>
            <translation>El cuerpo de GraphQL debe ser un objeto JSON que contenga una cadena de consulta.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10764" />
            <source>Choose operationName because the document contains multiple GraphQL operations.</source>
            <translation>Elija OperationName porque el documento contiene varias operaciones GraphQL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10766" />
            <source>GraphQL operationName does not match a named operation in the query.</source>
            <translation>El nombre de operación de GraphQL no coincide con una operación con nombre en la consulta.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10777" />
            <source>Variable ${name} is required.</source>
            <translation>Variable ${name} is required.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10781" />
            <source>Variable ${name} must be valid for type {type}.</source>
            <translation>Variable ${name} must be valid for type {type}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10788" />
            <source>Remove undeclared GraphQL variables: {names}</source>
            <translation>Remove undeclared GraphQL variables: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10812" />
            <location filename="../zscaler_api_client.py" line="10832" />
            <source>Documented GraphQL schema</source>
            <translation>Esquema GraphQL documentado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10813" />
            <source>The current Automation Hub page has no executable query example. Open its documentation or use schema introspection.</source>
            <translation>La página actual de Automation Hub no tiene ningún ejemplo de consulta ejecutable. Abra su documentación o utilice la introspección de esquemas.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10827" />
            <source>Loaded documented ZInsights query. Review time ranges, filters, and fields before sending.</source>
            <translation>Consulta de ZInsights cargada y documentada. Revise rangos de tiempo, filtros y campos antes de enviar.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10863" />
            <source>Enter a name before saving the GraphQL query.</source>
            <translation>Ingrese un nombre antes de guardar la consulta GraphQL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10867" />
            <location filename="../zscaler_api_client.py" line="10908" />
            <location filename="../zscaler_api_client.py" line="10921" />
            <location filename="../zscaler_api_client.py" line="10940" />
            <source>Secure storage</source>
            <translation>Almacenamiento seguro</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10867" />
            <source>The system keychain could not save the GraphQL query.</source>
            <translation>El llavero del sistema no pudo guardar la consulta GraphQL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10873" />
            <source>GraphQL query saved securely</source>
            <translation>Consulta GraphQL guardada de forma segura</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10879" />
            <source>Saved GraphQL query is unavailable.</source>
            <translation>La consulta GraphQL guardada no está disponible.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10908" />
            <source>The system keychain could not rename the GraphQL query.</source>
            <translation>El llavero del sistema no pudo cambiar el nombre de la consulta GraphQL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10921" />
            <source>The system keychain could not delete the GraphQL query.</source>
            <translation>El llavero del sistema no pudo eliminar la consulta GraphQL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10932" />
            <source>GraphQL introspection query prepared. Review the endpoint before sending.</source>
            <translation>Consulta de introspección GraphQL preparada. Revise el punto final antes de enviar.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10940" />
            <source>The system keychain could not save the GraphQL schema.</source>
            <translation>El llavero del sistema no pudo guardar el esquema GraphQL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10942" />
            <source>GraphQL schema saved securely</source>
            <translation>Esquema GraphQL guardado de forma segura</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8951" />
            <location filename="../zscaler_api_client.py" line="10947" />
            <source>GraphQL schema</source>
            <translation>Esquema GraphQL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10947" />
            <source>No saved introspection result exists for this endpoint.</source>
            <translation>No existe ningún resultado de introspección guardado para este punto final.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10988" />
            <source>{count} GraphQL errors</source>
            <translation>{count} GraphQL errors</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10990" />
            <source>extensions included</source>
            <translation>extensiones incluidas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10004" />
            <location filename="../zscaler_api_client.py" line="10863" />
            <location filename="../zscaler_api_client.py" line="10879" />
            <location filename="../zscaler_api_client.py" line="11007" />
            <location filename="../zscaler_api_client.py" line="11039" />
            <location filename="../zscaler_api_client.py" line="11738" />
            <location filename="../zscaler_api_client.py" line="11757" />
            <source>Warning</source>
            <translation>Advertencia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11007" />
            <source>Please enter a URL</source>
            <translation>Por favor ingrese una URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9792" />
            <location filename="../zscaler_api_client.py" line="9822" />
            <location filename="../zscaler_api_client.py" line="9847" />
            <location filename="../zscaler_api_client.py" line="9911" />
            <location filename="../zscaler_api_client.py" line="11122" />
            <location filename="../zscaler_api_client.py" line="11125" />
            <location filename="../zscaler_api_client.py" line="11152" />
            <source>Error</source>
            <translation>error</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8509" />
            <source>ZIA · List users</source>
            <translation>ZIA · Listar usuarios</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8509" />
            <source>List ZIA users with pagination</source>
            <translation>Listar usuarios de ZIA con paginación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8510" />
            <source>ZIA · Find URL categories</source>
            <translation>ZIA · Buscar categorías de URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8510" />
            <source>Search ZIA URL categories for social media</source>
            <translation>Busque categorías de URL de ZIA para redes sociales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8511" />
            <source>ZIA · Review firewall policies</source>
            <translation>ZIA · Revisar políticas de firewall</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8511" />
            <source>List ZIA cloud firewall policies</source>
            <translation>Listar las políticas de firewall en la nube de ZIA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8512" />
            <source>ZPA · Application segments</source>
            <translation>ZPA · Segmentos de aplicación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8512" />
            <source>List ZPA application segments</source>
            <translation>Listar segmentos de aplicaciones ZPA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8513" />
            <source>ZPA · Connector inventory</source>
            <translation>ZPA · Inventario de conectores</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8513" />
            <source>List ZPA connectors</source>
            <translation>Listar conectores ZPA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8514" />
            <source>ZDX · Experience overview</source>
            <translation>ZDX · Descripción general de la experiencia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8514" />
            <source>List ZDX devices and experience scores</source>
            <translation>Enumere los dispositivos ZDX y las puntuaciones de experiencia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8515" />
            <source>ZDX · Active alerts</source>
            <translation>ZDX · Alertas activas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8515" />
            <source>List active ZDX alerts with pagination</source>
            <translation>Listar alertas ZDX activas con paginación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8516" />
            <source>ZDX · Application monitoring</source>
            <translation>ZDX · Monitoreo de aplicaciones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8516" />
            <source>List monitored ZDX applications</source>
            <translation>Lista de aplicaciones ZDX monitoreadas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8517" />
            <source>Client Connector · Devices</source>
            <translation>Conector de cliente · Dispositivos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8517" />
            <source>List Client Connector devices</source>
            <translation>Listar dispositivos de conector de cliente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8518" />
            <source>ZIdentity · Users</source>
            <translation>ZIdentidad · Usuarios</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8518" />
            <source>List ZIdentity users with pagination</source>
            <translation>Listar usuarios de ZIdentity con paginación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8519" />
            <source>ZIdentity · Groups</source>
            <translation>ZIdentidad · Grupos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8519" />
            <source>List ZIdentity groups</source>
            <translation>Listar grupos de ZIdentity</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8520" />
            <source>AI Security · Workloads</source>
            <translation>Seguridad de IA · Cargas de trabajo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8520" />
            <source>List AI Security workloads</source>
            <translation>Enumerar cargas de trabajo de seguridad de IA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8574" />
            <source>ZS API Client</source>
            <translation>Cliente API ZS</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8581" />
            <source>Explore APIs, review changes, and operate safely</source>
            <translation>Explore las API, revise los cambios y opere de forma segura</translation>
        </message>
        <message>
            <source>1 · Environment</source>
            <translation type="vanished">1 · Medio ambiente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8587" />
            <source>Select or create a tenant environment profile</source>
            <translation>Seleccionar o crear un perfil de entorno de inquilino</translation>
        </message>
        <message>
            <source>2 · Analyze</source>
            <translation type="vanished">2 · Analizar</translation>
        </message>
        <message>
            <source>Open dashboards, audits, policy diffs, and response analysis</source>
            <translation type="vanished">Paneles abiertos, auditorías, diferencias de políticas y análisis de respuestas</translation>
        </message>
        <message>
            <source>3 · Change</source>
            <translation type="vanished">3 · Cambiar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8595" />
            <source>Open policy diff and policy-as-code export</source>
            <translation>Abrir diferenciación de políticas y exportación de políticas como código</translation>
        </message>
        <message>
            <source>Operations Center</source>
            <translation type="vanished">Centro de Operaciones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8598" />
            <location filename="../zscaler_api_client.py" line="8612" />
            <source>PAC Workspace</source>
            <translation>PAC Workspace</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8599" />
            <source>Create, verify, map, and prepare PAC files (Ctrl+Shift+P)</source>
            <translation>Create, verify, map, and prepare PAC files (Ctrl+Shift+P)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8618" />
            <source>Settings</source>
            <translation>Configuración</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8612" />
            <location filename="../zscaler_api_client.py" line="8630" />
            <source>API Explorer</source>
            <translation>Explorador de API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8585" />
            <source>Environment</source>
            <translation>Environment</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8590" />
            <location filename="../zscaler_api_client.py" line="8612" />
            <source>Monitor</source>
            <translation>Monitor</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8591" />
            <source>Open dashboards, alerts, audits, and response analysis</source>
            <translation>Open dashboards, alerts, audits, and response analysis</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8594" />
            <location filename="../zscaler_api_client.py" line="8612" />
            <source>Changes</source>
            <translation>Changes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8603" />
            <location filename="../zscaler_api_client.py" line="9595" />
            <source>Alerts</source>
            <translation>Alerts</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8604" />
            <source>Open local operational alerts</source>
            <translation>Open local operational alerts</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8607" />
            <source>Recent</source>
            <translation>Recent</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8608" />
            <source>Open redacted request history</source>
            <translation>Open redacted request history</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8612" />
            <location filename="../zscaler_api_client.py" line="11591" />
            <source>Favorites</source>
            <translation>Favorites</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8612" />
            <location filename="../zscaler_api_client.py" line="11617" />
            <source>Operations inbox</source>
            <translation>Operations inbox</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8614" />
            <source>Quick actions</source>
            <translation>Quick actions</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8615" />
            <source>Open common workspaces and actions</source>
            <translation>Open common workspaces and actions</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8633" />
            <location filename="../zscaler_api_client.py" line="9970" />
            <location filename="../zscaler_api_client.py" line="11594" />
            <source>Product</source>
            <translation>Producto</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8644" />
            <source>Authenticate with selected API (Ctrl+Shift+A)</source>
            <translation>Autenticar con la API seleccionada (Ctrl+Shift+A)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8654" />
            <source>🔍 Filter endpoints...</source>
            <translation>🔍 Filtrar puntos finales...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8688" />
            <source>Request Builder</source>
            <translation>Generador de solicitudes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8716" />
            <source>Send request (Ctrl+Return)</source>
            <translation>Enviar solicitud (Ctrl+Retorno)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8720" />
            <source>Cancel</source>
            <translation>Cancelar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8721" />
            <source>Stop before the next page or chain step; the current HTTP request is allowed to finish safely.</source>
            <translation>Deténgase antes de la siguiente página o paso de cadena; la solicitud HTTP actual puede finalizar de forma segura.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8725" />
            <source>Copy request as cURL command (Ctrl+Shift+C)</source>
            <translation>Copiar solicitud como comando cURL (Ctrl+Shift+C)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8731" />
            <source>GraphQL request</source>
            <translation>Solicitud GraphQL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8732" />
            <source>Send the request body as a GraphQL query and preserve data, errors, and extensions.</source>
            <translation>Envíe el cuerpo de la solicitud como una consulta GraphQL y conserve datos, errores y extensiones.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8736" />
            <source>Fetch all pages</source>
            <translation>Obtener todas las páginas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8737" />
            <source>Follow only the pagination parameters documented for the selected read operation.</source>
            <translation>Siga únicamente los parámetros de paginación documentados para la operación de lectura seleccionada.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8739" />
            <source>Page size:</source>
            <translation>Tamaño de página:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8743" />
            <source>Maximum pages:</source>
            <translation>Páginas máximas:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8751" />
            <source>Saved GraphQL query name</source>
            <translation>Nombre de consulta GraphQL guardado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8755" />
            <source>Save query</source>
            <translation>Guardar consulta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8758" />
            <source>Load query</source>
            <translation>Cargar consulta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8761" />
            <source>Rename query</source>
            <translation>Cambiar nombre de consulta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8764" />
            <source>Delete query</source>
            <translation>Eliminar consulta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8767" />
            <source>Introspect schema</source>
            <translation>Esquema de introspección</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8770" />
            <source>Load saved schema</source>
            <translation>Cargar esquema guardado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8776" />
            <source>Documented ZInsights query…</source>
            <translation>Consulta documentada de ZInsights...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8781" />
            <source>Load documented query</source>
            <translation>Cargar consulta documentada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8784" />
            <source>Browse documented schema</source>
            <translation>Explorar esquema documentado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8815" />
            <source>Body type:</source>
            <translation>Tipo de cuerpo:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8817" />
            <source>JSON</source>
            <translation>JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8818" />
            <source>Raw text</source>
            <translation>Texto sin formato</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8819" />
            <source>Form URL encoded</source>
            <translation>URL del formulario codificada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8820" />
            <location filename="../zscaler_api_client.py" line="11117" />
            <source>Multipart file upload</source>
            <translation>Carga de archivos multiparte</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8828" />
            <source>File field:</source>
            <translation>Campo de archivo:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8832" />
            <source>Upload file:</source>
            <translation>Subir archivo:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8835" />
            <source>Select a local file; its path is never saved in history</source>
            <translation>Seleccione un archivo local; su camino nunca se guarda en la historia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8837" />
            <source>Browse…</source>
            <translation>Explorar…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8851" />
            <source>Extract typed variables from the selected GraphQL operation. Values are inserted into the JSON request body, never into the URL.</source>
            <translation>Extraiga variables escritas de la operación GraphQL seleccionada. Los valores se insertan en el cuerpo de la solicitud JSON, nunca en la URL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8853" />
            <location filename="../zscaler_api_client.py" line="8878" />
            <source>Type</source>
            <translation>Tipo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8853" />
            <location filename="../zscaler_api_client.py" line="8878" />
            <source>Required</source>
            <translation>Requerido</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8853" />
            <location filename="../zscaler_api_client.py" line="8879" />
            <source>Default</source>
            <translation>Predeterminado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8853" />
            <source>JSON value</source>
            <translation>valor JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8857" />
            <source>Extract variables from query</source>
            <translation>Extraer variables de la consulta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8858" />
            <location filename="../zscaler_api_client.py" line="10755" />
            <location filename="../zscaler_api_client.py" line="11771" />
            <source>No GraphQL variables extracted.</source>
            <translation>No se extrajeron variables GraphQL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8859" />
            <location filename="../zscaler_api_client.py" line="11108" />
            <location filename="../zscaler_api_client.py" line="11158" />
            <source>GraphQL Variables</source>
            <translation>Variables GraphQL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8873" />
            <location filename="../zscaler_api_client.py" line="11776" />
            <source>Select a documented endpoint to inspect its request contract.</source>
            <translation>Seleccione un punto final documentado para inspeccionar su contrato de solicitud.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8878" />
            <source>Location</source>
            <translation>Ubicación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8878" />
            <location filename="../zscaler_api_client.py" line="11594" />
            <source>Name</source>
            <translation>Nombre</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8879" />
            <source>Description</source>
            <translation>Descripción</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8884" />
            <source>API Guide</source>
            <translation>Guía API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8898" />
            <source>Dataset:</source>
            <translation>Conjunto de datos:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8920" />
            <source>Open export</source>
            <translation>Abrir exportación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8921" />
            <source>Compare drift</source>
            <translation>Comparar deriva</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8941" />
            <source>Field</source>
            <translation>campo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9067" />
            <source>Open response export…</source>
            <translation>Abrir exportación de respuesta...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9068" />
            <source>Compare response drift…</source>
            <translation>Comparar la deriva de respuesta...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9125" />
            <source>PAC &amp;Workspace...</source>
            <translation>PAC y espacio de trabajo...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9405" />
            <location filename="../zscaler_api_client.py" line="9419" />
            <source>Required value</source>
            <translation>Valor requerido</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9405" />
            <location filename="../zscaler_api_client.py" line="9419" />
            <source>Optional value</source>
            <translation>Valor opcional</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9453" />
            <source>body template available</source>
            <translation>plantilla de cuerpo disponible</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9453" />
            <source>no body template</source>
            <translation>sin plantilla de cuerpo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9454" />
            <source>not listed</source>
            <translation>no listado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9455" />
            <source>{count} documented parameter(s) · {body} · responses: {codes}. Templates are examples; review every value before sending.</source>
            <translation>{count} documented parameter(s) · {body} · responses: {codes}. Templates are examples; review every value before sending.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9459" />
            <source>Documented {mode} pagination is available as an explicit bounded option.</source>
            <translation>Documented {mode} pagination is available as an explicit bounded option.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9478" />
            <source>Documented {mode} pagination using {parameter}. Results retain every page and stop at the configured maximum.</source>
            <translation>Documented {mode} pagination using {parameter}. Results retain every page and stop at the configured maximum.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9490" />
            <source>The URL was edited manually. Select an endpoint again to attach its documented request contract.</source>
            <translation>La URL se editó manualmente. Seleccione un punto final nuevamente para adjuntar su contrato de solicitud documentado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9588" />
            <source>Active environment: {name}</source>
            <translation>Active environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9595" />
            <source>Alerts ({count})</source>
            <translation>Alerts ({count})</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9607" />
            <source>The selected environment profile is unavailable.</source>
            <translation>El perfil de entorno seleccionado no está disponible.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9621" />
            <source>Environment profile active: {name}. Sessions and request data were cleared.</source>
            <translation>Environment profile active: {name}. Sessions and request data were cleared.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9665" />
            <source>Write request prepared</source>
            <translation>Escribir solicitud preparada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9666" />
            <source>The documented write template is ready. Review the API Guide, parameters, and body, then choose Send explicitly.</source>
            <translation>La plantilla de escritura documentada está lista. Revise la Guía API, los parámetros y el cuerpo, luego elija Enviar explícitamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9960" />
            <source>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</source>
            <translation>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10108" />
            <source>No tabular response data is available to export.</source>
            <translation>No hay datos de respuesta tabulares disponibles para exportar.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10258" />
            <location filename="../zscaler_api_client.py" line="10269" />
            <source>Open response export</source>
            <translation>Exportación de respuesta abierta</translation>
        </message>
        <message>
            <source>The response export is unavailable, is a symbolic link, or exceeds the configured transfer limit.</source>
            <translation type="vanished">La exportación de respuesta no está disponible, es un enlace simbólico o excede el límite de transferencia configurado.</translation>
        </message>
        <message>
            <source>This is not a supported ZS API response exchange file.</source>
            <translation type="vanished">Este no es un archivo de intercambio de respuestas API de ZS compatible.</translation>
        </message>
        <message>
            <source>The response exchange file is incomplete.</source>
            <translation type="vanished">El archivo de intercambio de respuestas está incompleto.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10292" />
            <source>Response export opened locally; no API request was sent.</source>
            <translation>La exportación de respuesta se abrió localmente; no se envió ninguna solicitud de API.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10297" />
            <location filename="../zscaler_api_client.py" line="10299" />
            <source>Response drift comparison</source>
            <translation>Comparación de deriva de respuesta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10297" />
            <source>Binary responses cannot be structurally compared. Export and inspect the original file with an appropriate tool.</source>
            <translation>Las respuestas binarias no se pueden comparar estructuralmente. Exporte e inspeccione el archivo original con una herramienta adecuada.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10299" />
            <source>Send a request or open a response export before comparing drift.</source>
            <translation>Envíe una solicitud o abra una exportación de respuesta antes de comparar la deriva.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11003" />
            <location filename="../zscaler_api_client.py" line="11520" />
            <source>Read only</source>
            <translation>Sólo lectura</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11003" />
            <location filename="../zscaler_api_client.py" line="11520" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>El modo de solo lectura bloquea las solicitudes de escritura. Cambie el rol local en el Centro de operaciones para continuar.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11028" />
            <source>Missing Path Variables</source>
            <translation>Variables de ruta faltantes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11029" />
            <source>Enter values for: {names}</source>
            <translation>Enter values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11039" />
            <source>Configure a base URL for the selected product before sending a relative API path.</source>
            <translation>Configure una URL base para el producto seleccionado antes de enviar una ruta API relativa.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11093" />
            <source>Missing documented parameters</source>
            <translation>Parámetros documentados faltantes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11094" />
            <source>Enter required values for: {names}</source>
            <translation>Enter required values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11117" />
            <source>Select an available local file before sending.</source>
            <translation>Seleccione un archivo local disponible antes de enviarlo.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11122" />
            <source>Multipart fields must be a JSON object: {error}</source>
            <translation>Multipart fields must be a JSON object: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11125" />
            <source>Multipart fields must be a JSON object.</source>
            <translation>Los campos de varias partes deben ser un objeto JSON.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11164" />
            <source>Sending request...</source>
            <translation>Enviando solicitud...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11195" />
            <source>Pagination unavailable</source>
            <translation>Paginación no disponible</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11195" />
            <source>Select a documented paginated GET operation before fetching all pages.</source>
            <translation>Seleccione una operación GET paginada documentada antes de recuperar todas las páginas.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11213" />
            <source>Fetching page {page} of at most {maximum}…</source>
            <translation>Fetching page {page} of at most {maximum}…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11217" />
            <source>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</source>
            <translation>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11226" />
            <source>Cancellation requested; waiting for the current HTTP request to finish safely…</source>
            <translation>Cancelación solicitada; esperando a que la solicitud HTTP actual finalice de forma segura...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11239" />
            <source>Request cancelled before completion</source>
            <translation>Solicitud cancelada antes de completarse</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11287" />
            <source>Safe read retries: {count}</source>
            <translation>Safe read retries: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11308" />
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
            <location filename="../zscaler_api_client.py" line="11348" />
            <source>Pagination complete: {pages} page(s), {records} record(s)</source>
            <translation>Pagination complete: {pages} page(s), {records} record(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11355" />
            <source>Pagination stopped before completion: {pages} page(s), {records} record(s)</source>
            <translation>Pagination stopped before completion: {pages} page(s), {records} record(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11383" />
            <source>ZDX authenticated successfully</source>
            <translation>ZDX autenticado correctamente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11387" />
            <source>ZCC authenticated successfully</source>
            <translation>ZCC autenticado correctamente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11391" />
            <source>ZIdentity authenticated successfully</source>
            <translation>ZIdentity autenticado correctamente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11395" />
            <source>ZTW authenticated successfully</source>
            <translation>ZTW autenticado correctamente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11399" />
            <source>ZWA authenticated successfully</source>
            <translation>ZWA autenticado correctamente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11403" />
            <source>EASM authenticated successfully</source>
            <translation>EASM autenticado correctamente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11407" />
            <source>OneAPI authenticated successfully</source>
            <translation>OneAPI autenticada exitosamente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11412" />
            <source>Authenticated successfully</source>
            <translation>Autenticado correctamente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11512" />
            <source>Batch validation failed: </source>
            <translation>La validación por lotes falló: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11515" />
            <source>Select {api} before running this batch.</source>
            <translation>Select {api} before running this batch.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11523" />
            <source>Review complete. Send {count} request(s) to the active environment?</source>
            <translation>Review complete. Send {count} request(s) to the active environment?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11524" />
            <source>Confirm batch</source>
            <translation>Confirmar lote</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11539" />
            <source>Sending batch request 0 of {count}...</source>
            <translation>Sending batch request 0 of {count}...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11540" />
            <source>Batch execution started: {count} request(s)</source>
            <translation>Batch execution started: {count} request(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11557" />
            <source>Sending batch request {completed} of {total}...</source>
            <translation>Sending batch request {completed} of {total}...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11567" />
            <location filename="../zscaler_api_client.py" line="11568" />
            <location filename="../zscaler_api_client.py" line="11569" />
            <source>Batch complete: {successful} succeeded, {failed} failed.</source>
            <translation>Batch complete: {successful} succeeded, {failed} failed.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8612" />
            <location filename="../zscaler_api_client.py" line="11636" />
            <source>Request History</source>
            <translation>Historial de solicitudes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11593" />
            <source>Favorites are local to the active environment and never include credentials or request bodies.</source>
            <translation>Favorites are local to the active environment and never include credentials or request bodies.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11602" />
            <source>Save favorite</source>
            <translation>Save favorite</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11602" />
            <source>Favorite name:</source>
            <translation>Favorite name:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11602" />
            <source>New request</source>
            <translation>New request</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11612" />
            <source>Save current request</source>
            <translation>Save current request</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11612" />
            <source>Load selected</source>
            <translation>Load selected</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11612" />
            <source>Remove favorite</source>
            <translation>Remove favorite</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11612" />
            <location filename="../zscaler_api_client.py" line="11629" />
            <source>Close</source>
            <translation>Close</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11618" />
            <source>Local items requiring attention. This inbox is scoped to the active environment and never sends changes.</source>
            <translation>Local items requiring attention. This inbox is scoped to the active environment and never sends changes.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11619" />
            <source>Priority</source>
            <translation>Priority</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11619" />
            <source>Source</source>
            <translation>Source</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11619" />
            <source>Details</source>
            <translation>Details</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11623" />
            <source>Alert</source>
            <translation>Alert</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11624" />
            <source>High</source>
            <translation>High</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11624" />
            <source>Failed request</source>
            <translation>Failed request</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11625" />
            <source>Info</source>
            <translation>Info</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11625" />
            <source>Scheduled report</source>
            <translation>Scheduled report</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11629" />
            <source>Open Alerts</source>
            <translation>Open Alerts</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11629" />
            <source>Open Recent</source>
            <translation>Open Recent</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11637" />
            <source>This request belongs to another environment. Activate that environment profile before loading it.</source>
            <translation>Esta solicitud pertenece a otro entorno. Active ese perfil de entorno antes de cargarlo.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11650" />
            <location filename="../zscaler_api_client.py" line="11669" />
            <source>Multipart request loaded. Select the local file again before sending.</source>
            <translation>Solicitud multiparte cargada. Seleccione el archivo local nuevamente antes de enviarlo.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11741" />
            <source>Masked cURL command copied to clipboard</source>
            <translation>Comando cURL enmascarado copiado al portapapeles</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11746" />
            <source>Binary response</source>
            <translation>respuesta binaria</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11746" />
            <source>Binary response content is not copied to the clipboard. Use Export to save the original file.</source>
            <translation>El contenido de la respuesta binaria no se copia al portapapeles. Utilice Exportar para guardar el archivo original.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11755" />
            <source>Masked response copied to clipboard</source>
            <translation>Respuesta enmascarada copiada al portapapeles</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11900" />
            <source>The application needs to restart to apply the new language.

Restart now?</source>
            <translation>La aplicación necesita reiniciarse para aplicar el nuevo idioma.

¿Reiniciar ahora?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12027" />
            <source>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Release:&lt;/b&gt; {name}&lt;/p&gt;{prerelease}&lt;p style='color: #666; font-size: 11px;'&gt;✓ Verified from github.com/{repo}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</source>
            <translation>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Release:&lt;/b&gt; {name}&lt;/p&gt;{prerelease}&lt;p style='color: #666; font-size: 11px;'&gt;✓ Verified from github.com/{repo}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</translation>
        </message>
        <message>
            <source>Success</source>
            <translation type="vanished">Éxito</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11360" />
            <source>Request successful</source>
            <translation>Solicitud exitosa</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11370" />
            <source>ZIA authenticated successfully</source>
            <translation>ZIA autenticado exitosamente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11379" />
            <source>ZPA authenticated successfully</source>
            <translation>ZPA autenticado exitosamente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11445" />
            <location filename="../zscaler_api_client.py" line="11451" />
            <source>Request failed</source>
            <translation>Solicitud fallida</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11512" />
            <location filename="../zscaler_api_client.py" line="11515" />
            <location filename="../zscaler_api_client.py" line="11569" />
            <source>Batch</source>
            <translation>Lote</translation>
        </message>
        <message>
            <source>Processing {count} items...</source>
            <translation type="vanished">Procesando {count} elementos...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11671" />
            <source>Request loaded from history</source>
            <translation>Solicitud cargada desde el historial</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11738" />
            <source>No URL to copy</source>
            <translation>No hay URL para copiar</translation>
        </message>
        <message>
            <source>cURL command copied to clipboard</source>
            <translation type="vanished">Comando cURL copiado al portapapeles</translation>
        </message>
        <message>
            <source>Response copied to clipboard</source>
            <translation type="vanished">Respuesta copiada al portapapeles</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11757" />
            <source>No response to copy</source>
            <translation>No hay respuesta a la copia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11793" />
            <source>Request cleared</source>
            <translation>Solicitud borrada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11806" />
            <location filename="../zscaler_api_client.py" line="11857" />
            <source>Missing Credentials</source>
            <translation>Credenciales faltantes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11807" />
            <source>Please configure ZIA credentials in Settings first.</source>
            <translation>Primero configure las credenciales de ZIA en Configuración.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11829" />
            <source>ZIA auth request prepared. Click Send to authenticate.</source>
            <translation>Solicitud de autenticación ZIA preparada. Haga clic en Enviar para autenticarse.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11858" />
            <source>Please configure ZPA credentials in Settings first.</source>
            <translation>Primero configure las credenciales ZPA en Configuración.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11871" />
            <source>ZPA auth request prepared. Click Send to authenticate.</source>
            <translation>Solicitud de autenticación ZPA preparada. Haga clic en Enviar para autenticarse.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11876" />
            <source>All sessions cleared</source>
            <translation>Todas las sesiones borradas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11899" />
            <source>Language Changed</source>
            <translation>Idioma cambiado</translation>
        </message>
        <message>
            <source>Please restart the application to apply the new language.</source>
            <translation type="vanished">Por favor reinicie la aplicación para aplicar el nuevo idioma.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11948" />
            <source>Checking for updates...</source>
            <translation>Buscando actualizaciones...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12021" />
            <source>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</source>
            <translation>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12025" />
            <source>Update Available</source>
            <translation>Actualización disponible</translation>
        </message>
        <message>
            <source>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</source>
            <translation type="vanished">&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12047" />
            <source>Update available: v{version}</source>
            <translation>Actualización disponible: v{version}</translation>
        </message>
        <message>
            <source>No Updates</source>
            <translation type="vanished">Sin actualizaciones</translation>
        </message>
        <message>
            <source>&lt;p&gt;You are running the latest version.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Version:&lt;/b&gt; {version}&lt;/p&gt;</source>
            <translation type="vanished">&lt;p&gt;You are running the latest version.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Version:&lt;/b&gt; {version}&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12050" />
            <source>You are up to date (v{version})</source>
            <translation>Estás actualizado (v{version})</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12055" />
            <source>Update Check Failed</source>
            <translation>Error al buscar actualizaciones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12056" />
            <source>Could not check for updates:
{error}</source>
            <translation>No se pudo buscar actualizaciones:
{error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12058" />
            <source>Update check failed</source>
            <translation>Error al verificar actualizaciones</translation>
        </message>
        <message>
            <source>&amp;About</source>
            <translation type="vanished">&amp;Acerca de</translation>
        </message>
        <message>
            <source>Zscaler API &amp;Documentation</source>
            <translation type="vanished">&amp;Documentación de API Zscaler</translation>
        </message>
        <message>
            <source>About ZS API Client</source>
            <translation type="vanished">Acerca de ZS API Client</translation>
        </message>
        <message>
            <source>ZDX (Zscaler Digital Experience)</source>
            <translation type="vanished">ZDX (Experiencia digital Zscaler)</translation>
        </message>
        <message>
            <source>ZCC (Client Connector)</source>
            <translation type="vanished">ZCC (conector de cliente)</translation>
        </message>
        <message>
            <source>Key ID:</source>
            <translation type="vanished">ID de clave:</translation>
        </message>
        <message>
            <source>Key Secret:</source>
            <translation type="vanished">Secreto de clave:</translation>
        </message>
        <message>
            <source>Welcome to ZS API Client</source>
            <translation type="vanished">Bienvenido a ZS API Client</translation>
        </message>
        <message>
            <source>Supported APIs</source>
            <translation type="vanished">APIs compatibles</translation>
        </message>
        <message>
            <source>Getting Started</source>
            <translation type="vanished">Primeros pasos</translation>
        </message>
        <message>
            <source>Tips for Advanced Users</source>
            <translation type="vanished">Consejos para usuarios avanzados</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9022" />
            <source>Documentation</source>
            <translation>Documentación</translation>
        </message>
        <message>
            <source>Show this dialog on startup</source>
            <translation type="vanished">Mostrar este diálogo al iniciar</translation>
        </message>
        <message>
            <source>Open Settings</source>
            <translation type="vanished">Abrir configuración</translation>
        </message>
        <message>
            <source>Get Started</source>
            <translation type="vanished">Comenzar</translation>
        </message>
        <message>
            <source>Check for updates on startup:</source>
            <translation type="vanished">Buscar actualizaciones al iniciar:</translation>
        </message>
    </context>
    <context>
        <name>OperationsDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="6170" />
            <source>Operations Center</source>
            <translation>Centro de Operaciones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6193" />
            <source>Requests</source>
            <translation>Solicitudes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6193" />
            <source>Success rate</source>
            <translation>Tasa de éxito</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6193" />
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Audit integrity</source>
            <translation>Integridad de la auditoría</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6193" />
            <source>Active environment</source>
            <translation>Entorno activo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6205" />
            <source>Recent request outcomes</source>
            <translation>Resultados de solicitudes recientes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6210" />
            <location filename="../zscaler_api_client.py" line="6288" />
            <location filename="../zscaler_api_client.py" line="6292" />
            <location filename="../zscaler_api_client.py" line="6332" />
            <location filename="../zscaler_api_client.py" line="6388" />
            <location filename="../zscaler_api_client.py" line="6405" />
            <source>Time</source>
            <translation>tiempo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6210" />
            <source>Activity</source>
            <translation>Actividad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6210" />
            <location filename="../zscaler_api_client.py" line="6270" />
            <location filename="../zscaler_api_client.py" line="6288" />
            <location filename="../zscaler_api_client.py" line="6405" />
            <location filename="../zscaler_api_client.py" line="6421" />
            <location filename="../zscaler_api_client.py" line="6436" />
            <location filename="../zscaler_api_client.py" line="6458" />
            <location filename="../zscaler_api_client.py" line="6483" />
            <location filename="../zscaler_api_client.py" line="6505" />
            <source>Status</source>
            <translation>Estado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6211" />
            <source>Recent activity</source>
            <translation>Actividad reciente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6214" />
            <source>Refresh dashboard</source>
            <translation>Actualizar panel</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6218" />
            <source>Dashboard</source>
            <translation>Panel de control</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6221" />
            <source>Previous policy JSON</source>
            <translation>Política anterior JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Proposed policy JSON</source>
            <translation>Política propuesta JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6229" />
            <source>Compare policies</source>
            <translation>Comparar pólizas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6231" />
            <source>Export policy as JSON</source>
            <translation>Política de exportación como JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6232" />
            <source>Export policy as YAML</source>
            <translation>Política de exportación como YAML</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6233" />
            <source>Run compliance checks</source>
            <translation>Ejecutar controles de cumplimiento</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6234" />
            <location filename="../zscaler_api_client.py" line="7626" />
            <source>Policy diff</source>
            <translation>Diferencia de política</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6237" />
            <source>Rules JSON: [{"name": "Allow staff", "conditions": {"group": "staff"}, "action": "allow"}]</source>
            <translation>Rules JSON: [{"name": "Allow staff", "conditions": {"group": "staff"}, "action": "allow"}]</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6238" />
            <source>Request context JSON: {"group": "staff"}</source>
            <translation>Request context JSON: {"group": "staff"}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6243" />
            <source>Simulate policy (local only)</source>
            <translation>Simular política (solo local)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6244" />
            <location filename="../zscaler_api_client.py" line="7674" />
            <source>Simulation</source>
            <translation>Simulación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6247" />
            <source>CSV data, e.g. name,email
Ada,ada@example.com</source>
            <translation>Datos CSV, p. nombre, correo electrónico
Ada,ada@ejemplo.com</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6250" />
            <source>Required columns (comma separated)</source>
            <translation>Columnas obligatorias (separadas por comas)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6252" />
            <source>Validate bulk import</source>
            <translation>Validar importación masiva</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6253" />
            <source>Bulk operations</source>
            <translation>Operaciones masivas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <source>Administrator</source>
            <translation>Administrador</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <source>Analyst</source>
            <translation>analista</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <location filename="../zscaler_api_client.py" line="7409" />
            <source>Read only</source>
            <translation>Sólo lectura</translation>
        </message>
        <message>
            <source>Optional local automation script; never runs without approval</source>
            <translation type="vanished">Script de automatización local opcional; nunca se ejecuta sin aprobación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <source>Local role:</source>
            <translation>Rol local:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <source>Alert threshold (errors):</source>
            <translation>Umbral de alerta (errores):</translation>
        </message>
        <message>
            <source>Webhook endpoint (disabled until approved):</source>
            <translation type="vanished">Punto final de webhook (deshabilitado hasta que se apruebe):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <source>Local automation:</source>
            <translation>Automatización local:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6264" />
            <source>Save governance settings</source>
            <translation>Guardar configuración de gobierno</translation>
        </message>
        <message>
            <source>Read-only mode blocks write requests. Webhooks and local automation are saved only; this app will ask before any execution.</source>
            <translation type="vanished">El modo de solo lectura bloquea las solicitudes de escritura. Los webhooks y la automatización local solo se guardan; Esta aplicación preguntará antes de cualquier ejecución.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6266" />
            <location filename="../zscaler_api_client.py" line="7683" />
            <location filename="../zscaler_api_client.py" line="7686" />
            <location filename="../zscaler_api_client.py" line="7689" />
            <location filename="../zscaler_api_client.py" line="7697" />
            <source>Governance</source>
            <translation>Gobernanza</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6269" />
            <source>Official integrations are optional. Credentials remain in the system keychain and no command runs automatically.</source>
            <translation>Las integraciones oficiales son opcionales. Las credenciales permanecen en el llavero del sistema y ningún comando se ejecuta automáticamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6270" />
            <source>Integration</source>
            <translation>Integración</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6270" />
            <source>Recommended use</source>
            <translation>Uso recomendado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6273" />
            <source>Check local integrations</source>
            <translation>Consulta integraciones locales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6274" />
            <source>Prepare Terraform import</source>
            <translation>Preparar la importación de Terraform</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6275" />
            <source>Prepare MCP connection</source>
            <translation>Preparar la conexión MCP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6276" />
            <source>Prepare SDK configuration</source>
            <translation>Preparar la configuración del SDK</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6277" />
            <source>Send masked webhook test</source>
            <translation>Enviar prueba de webhook enmascarado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6279" />
            <source>Copy reviewed command</source>
            <translation>Copiar comando revisado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6289" />
            <location filename="../zscaler_api_client.py" line="7736" />
            <location filename="../zscaler_api_client.py" line="7756" />
            <source>Integrations</source>
            <translation>Integraciones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Event</source>
            <translation>Evento</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6288" />
            <location filename="../zscaler_api_client.py" line="6292" />
            <location filename="../zscaler_api_client.py" line="6305" />
            <source>Details</source>
            <translation>Detalles</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6294" />
            <source>Refresh audit trail</source>
            <translation>Actualizar pista de auditoría</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6295" />
            <location filename="../zscaler_api_client.py" line="6490" />
            <source>Schedule report</source>
            <translation>Informe de programación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6296" />
            <source>Create redacted support bundle</source>
            <translation>Crear paquete de soporte redactado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6297" />
            <source>Audit &amp; automation</source>
            <translation>Auditoría y automatización</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6300" />
            <source>Local security posture uses redacted request history and audit integrity. It is an operational signal, not a tenant security assessment.</source>
            <translation>La postura de seguridad local utiliza un historial de solicitudes redactado y una integridad de auditoría. Es una señal operativa, no una evaluación de seguridad del inquilino.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6228" />
            <location filename="../zscaler_api_client.py" line="6305" />
            <location filename="../zscaler_api_client.py" line="6313" />
            <location filename="../zscaler_api_client.py" line="6332" />
            <location filename="../zscaler_api_client.py" line="6344" />
            <location filename="../zscaler_api_client.py" line="6349" />
            <location filename="../zscaler_api_client.py" line="6370" />
            <location filename="../zscaler_api_client.py" line="6383" />
            <location filename="../zscaler_api_client.py" line="6384" />
            <location filename="../zscaler_api_client.py" line="6408" />
            <location filename="../zscaler_api_client.py" line="6458" />
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>Severity</source>
            <translation>Gravedad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6305" />
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>Finding</source>
            <translation>Encontrar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6306" />
            <source>Refresh security posture</source>
            <translation>Actualizar la postura de seguridad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6307" />
            <source>Security posture</source>
            <translation>Postura de seguridad</translation>
        </message>
        <message>
            <source>Build a redacted local investigation timeline. Prepared chains never send API requests automatically.</source>
            <translation type="vanished">Cree un cronograma de investigación local redactado. Las cadenas preparadas nunca envían solicitudes API automáticamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6322" />
            <source>Investigation:</source>
            <translation>Investigación:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6323" />
            <source>API failure investigation</source>
            <translation>Investigación de fallas de API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6323" />
            <source>Change activity review</source>
            <translation>Cambiar revisión de actividad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6323" />
            <source>Slow response investigation</source>
            <translation>Investigación de respuesta lenta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6324" />
            <source>Prepare investigation chain</source>
            <translation>Preparar cadena de investigación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6332" />
            <location filename="../zscaler_api_client.py" line="6344" />
            <source>Source</source>
            <translation>Fuente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6313" />
            <location filename="../zscaler_api_client.py" line="6332" />
            <location filename="../zscaler_api_client.py" line="6458" />
            <source>Evidence</source>
            <translation>evidencia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6175" />
            <source>Data scope:</source>
            <translation>Alcance de los datos:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6178" />
            <source>Active environment: {name}</source>
            <translation>Active environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6182" />
            <source>All environments (cross-tenant overview)</source>
            <translation>Todos los entornos (descripción general entre inquilinos)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6184" />
            <source>Analytics are tenant-isolated by default. Cross-tenant scope is explicit and available in Advanced mode.</source>
            <translation>Los análisis están aislados de inquilinos de forma predeterminada. El alcance entre inquilinos es explícito y está disponible en el modo Avanzado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6193" />
            <source>Open alerts</source>
            <translation>Alertas abiertas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6208" />
            <source>Recent request latency (ms)</source>
            <translation>Latencia de solicitud reciente (ms)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6210" />
            <location filename="../zscaler_api_client.py" line="6292" />
            <location filename="../zscaler_api_client.py" line="6405" />
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Environment</source>
            <translation>Medio ambiente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6215" />
            <source>Auto-refresh local signals</source>
            <translation>Actualizar señales locales automáticamente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6216" />
            <source>Every 30 seconds</source>
            <translation>Cada 30 segundos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6216" />
            <source>Every minute</source>
            <translation>cada minuto</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6216" />
            <source>Every 5 minutes</source>
            <translation>Cada 5 minutos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6225" />
            <source>Policy rule overview</source>
            <translation>Descripción general de las reglas de política</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6227" />
            <location filename="../zscaler_api_client.py" line="6228" />
            <location filename="../zscaler_api_client.py" line="6242" />
            <source>Rule</source>
            <translation>regla</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6227" />
            <location filename="../zscaler_api_client.py" line="6242" />
            <source>Action</source>
            <translation>acción</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6227" />
            <source>Conditions</source>
            <translation>Condiciones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6227" />
            <source>State</source>
            <translation>Estado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6228" />
            <source>Best-practice finding</source>
            <translation>Búsqueda de mejores prácticas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6242" />
            <source>Order</source>
            <translation>Orden</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6242" />
            <source>Decision</source>
            <translation>decisión</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6260" />
            <source>Show webhook endpoint</source>
            <translation>Mostrar punto final de webhook</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6262" />
            <source>Absolute path to a reviewed local Python automation</source>
            <translation>Camino absoluto hacia una automatización Python local revisada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <source>Webhook endpoint (stored in system keychain):</source>
            <translation>Punto final del webhook (almacenado en el llavero del sistema):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6265" />
            <source>Read-only mode blocks write requests and local automation. Every webhook or local automation execution requires explicit approval.</source>
            <translation>El modo de solo lectura bloquea solicitudes de escritura y automatización local. Cada ejecución de webhook o automatización local requiere aprobación explícita.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6278" />
            <source>Run reviewed local automation</source>
            <translation>Ejecute la automatización local revisada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6280" />
            <source>Send current masked alerts</source>
            <translation>Enviar alertas enmascaradas actuales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6287" />
            <source>Webhook delivery history</source>
            <translation>Historial de entrega de webhooks</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6288" />
            <source>Delivery</source>
            <translation>Entrega</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6310" />
            <source>Local alerts evaluate retained, redacted request history only. They do not monitor the tenant in real time or send data externally.</source>
            <translation>Las alertas locales evalúan únicamente el historial de solicitudes retenidas y redactadas. No monitorean al inquilino en tiempo real ni envían datos externamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6313" />
            <source>Alert</source>
            <translation>Alerta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6313" />
            <source>Count</source>
            <translation>contar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6314" />
            <source>Refresh local alerts</source>
            <translation>Actualizar alertas locales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6315" />
            <source>Copy masked alert summary</source>
            <translation>Copiar resumen de alerta enmascarado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6316" />
            <source>Export alerts as JSON</source>
            <translation>Exportar alertas como JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6317" />
            <source>Export alerts as Markdown</source>
            <translation>Exportar alertas como Markdown</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6318" />
            <source>Alert Center</source>
            <translation>Centro de alertas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6331" />
            <source>Security investigation evidence map</source>
            <translation>Mapa de evidencia de investigación de seguridad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6352" />
            <source>Refresh investigation</source>
            <translation>Actualizar investigación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6353" />
            <location filename="../zscaler_api_client.py" line="6827" />
            <source>Export incident evidence</source>
            <translation>Exportar evidencia de incidentes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6355" />
            <source>Incident investigation</source>
            <translation>Investigación de incidentes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6432" />
            <source>Create a local review from Policy diff. Approval records intent only; no policy, Terraform, or Git change is applied automatically.</source>
            <translation>Cree una revisión local a partir de la diferencia de política. La aprobación registra únicamente la intención; no se aplica automáticamente ningún cambio de política, Terraform o Git.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Change ticket or reference</source>
            <translation>Cambiar billete o referencia</translation>
        </message>
        <message>
            <source>Reviewer name</source>
            <translation type="vanished">Nombre del revisor</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Reference:</source>
            <translation>Referencia:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Reviewer:</source>
            <translation>Revisor:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6438" />
            <source>Prepare change review</source>
            <translation>Preparar revisión de cambios</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6439" />
            <source>Record local approval</source>
            <translation>Registro de aprobación local</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6440" />
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Export Git review</source>
            <translation>Exportar revisión de Git</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6441" />
            <location filename="../zscaler_api_client.py" line="7129" />
            <source>Export rollback plan</source>
            <translation>Plan de reversión de exportaciones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6443" />
            <location filename="../zscaler_api_client.py" line="7093" />
            <location filename="../zscaler_api_client.py" line="7115" />
            <location filename="../zscaler_api_client.py" line="7118" />
            <location filename="../zscaler_api_client.py" line="7127" />
            <source>Change control</source>
            <translation>control de cambios</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6470" />
            <source>Generate local, redacted reports for leadership, SOC, or operations. Reports contain no credentials and are not sent automatically.</source>
            <translation>Genere informes locales redactados para liderazgo, SOC u operaciones. Los informes no contienen credenciales y no se envían automáticamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6471" />
            <source>Report type:</source>
            <translation>Tipo de informe:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <location filename="../zscaler_api_client.py" line="7270" />
            <location filename="../zscaler_api_client.py" line="7293" />
            <location filename="../zscaler_api_client.py" line="7900" />
            <location filename="../zscaler_api_client.py" line="8001" />
            <source>CISO security summary</source>
            <translation>Resumen de seguridad del CISO</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <location filename="../zscaler_api_client.py" line="7270" />
            <location filename="../zscaler_api_client.py" line="7293" />
            <location filename="../zscaler_api_client.py" line="7900" />
            <source>SOC investigation summary</source>
            <translation>Resumen de la investigación del SOC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <location filename="../zscaler_api_client.py" line="7270" />
            <location filename="../zscaler_api_client.py" line="7293" />
            <location filename="../zscaler_api_client.py" line="7900" />
            <source>Operations health summary</source>
            <translation>Resumen de estado de las operaciones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6473" />
            <source>Generate report</source>
            <translation>Generar informe</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6475" />
            <source>Security posture report artwork</source>
            <translation>Ilustraciones del informe de postura de seguridad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6478" />
            <location filename="../zscaler_api_client.py" line="7336" />
            <source>Export report as Markdown</source>
            <translation>Exportar informe como Markdown</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6479" />
            <location filename="../zscaler_api_client.py" line="7330" />
            <source>Export report as JSON</source>
            <translation>Exportar informe como JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6480" />
            <location filename="../zscaler_api_client.py" line="7333" />
            <source>Export visual report as HTML</source>
            <translation>Exportar informe visual como HTML</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <source>Scheduled reports</source>
            <translation>Informes programados</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Name</source>
            <translation>Nombre</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Type</source>
            <translation>Tipo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Cadence</source>
            <translation>cadencia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Next run</source>
            <translation>Próxima ejecución</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Mode</source>
            <translation>Modo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6491" />
            <source>Run selected now</source>
            <translation>Ejecutar seleccionado ahora</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6492" />
            <source>Enable or pause</source>
            <translation>Habilitar o pausar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6493" />
            <source>Remove schedule</source>
            <translation>Eliminar horario</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6494" />
            <source>Refresh schedules</source>
            <translation>Actualizar horarios</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6496" />
            <source>Reports</source>
            <translation>Informes</translation>
        </message>
        <message>
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and every run requires approval.</source>
            <translation type="vanished">Ejecute una secuencia revisada en el entorno autenticado activo. Las cadenas están limitadas a 20 pasos, permanecen en el host del producto seleccionado y cada ejecución requiere aprobación.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6500" />
            <source>Chain JSON</source>
            <translation>Cadena JSON</translation>
        </message>
        <message>
            <source>A JSON list of API requests. Relative paths use the active product host.</source>
            <translation type="vanished">Una lista JSON de solicitudes de API. Las rutas relativas utilizan el host del producto activo.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6508" />
            <source>Stop after the first failed step</source>
            <translation>Deténgase después del primer paso fallido</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6509" />
            <source>Validate chain</source>
            <translation>Validar cadena</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6510" />
            <location filename="../zscaler_api_client.py" line="7415" />
            <source>Run approved chain</source>
            <translation>Ejecutar cadena aprobada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6511" />
            <source>Cancel chain</source>
            <translation>Cancelar cadena</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <location filename="../zscaler_api_client.py" line="7487" />
            <source>Export masked chain results</source>
            <translation>Exportar resultados de la cadena enmascarada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6513" />
            <location filename="../zscaler_api_client.py" line="7405" />
            <location filename="../zscaler_api_client.py" line="7411" />
            <location filename="../zscaler_api_client.py" line="7482" />
            <location filename="../zscaler_api_client.py" line="7486" />
            <source>API chains</source>
            <translation>Cadenas API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6516" />
            <source>Build a local digital twin of policy order. It explains decisions, highlights overlap and shadowing, estimates change blast radius, and never applies a policy.</source>
            <translation>Construir un gemelo digital local del orden político. Explica decisiones, resalta superposiciones y sombras, estima cambios en el radio de explosión y nunca aplica una política.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6518" />
            <source>Policy rules JSON or an object containing a rules list</source>
            <translation>Reglas de política JSON o un objeto que contiene una lista de reglas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6519" />
            <source>Analyze policy twin</source>
            <translation>Analizar la política gemela</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6520" />
            <location filename="../zscaler_api_client.py" line="7571" />
            <source>Export twin evidence</source>
            <translation>Exportar evidencia gemela</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6521" />
            <source>Load proposed policy</source>
            <translation>Cargar política propuesta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6522" />
            <source>Test context:</source>
            <translation>Contexto de prueba:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6522" />
            <source>Request context JSON</source>
            <translation>Solicitar contexto JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6523" />
            <source>Explain decision</source>
            <translation>Explicar la decisión</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Rules</source>
            <translation>Reglas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Conflicts</source>
            <translation>Conflictos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Shadowed</source>
            <translation>sombreado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Blast radius</source>
            <translation>Radio de explosión</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6529" />
            <source>Policy order and conflict graph</source>
            <translation>Orden de políticas y gráfico de conflictos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>Earlier rule</source>
            <translation>regla anterior</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>Later rule</source>
            <translation>Regla posterior</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6344" />
            <location filename="../zscaler_api_client.py" line="6349" />
            <location filename="../zscaler_api_client.py" line="6370" />
            <location filename="../zscaler_api_client.py" line="6384" />
            <location filename="../zscaler_api_client.py" line="6408" />
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>Explanation</source>
            <translation>Explicación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6207" />
            <location filename="../zscaler_api_client.py" line="6360" />
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Latency</source>
            <translation>Latencia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6321" />
            <source>Correlate retained local activity with every object in the current masked REST or GraphQL response. Paths are investigation hypotheses, never proof of compromise, and prepared chains never run automatically.</source>
            <translation>Correlacione la actividad local retenida con cada objeto en la respuesta REST o GraphQL enmascarada actual. Los caminos son hipótesis de investigación, nunca pruebas de compromiso, y las cadenas preparadas nunca se ejecutan automáticamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6325" />
            <source>Include current API/GraphQL response</source>
            <translation>Incluir la respuesta API/GraphQL actual</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6326" />
            <source>Correlate entities</source>
            <translation>Correlacionar entidades</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6333" />
            <source>Evidence timeline</source>
            <translation>Cronología de la evidencia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6337" />
            <source>Entities</source>
            <translation>Entidades</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6337" />
            <source>Relationships</source>
            <translation>Relaciones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6337" />
            <source>Potential paths</source>
            <translation>Caminos potenciales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6337" />
            <source>High-risk entities</source>
            <translation>Entidades de alto riesgo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6341" />
            <source>Filter entities:</source>
            <translation>Filtrar entidades:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6341" />
            <source>Name, type, risk, or evidence source</source>
            <translation>Nombre, tipo, riesgo o fuente de evidencia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6342" />
            <source>SOC entity and potential attack-path graph</source>
            <translation>Entidad SOC y gráfico de ruta de ataque potencial</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6343" />
            <location filename="../zscaler_api_client.py" line="6773" />
            <source>Select an entity to inspect its local evidence.</source>
            <translation>Seleccione una entidad para inspeccionar su evidencia local.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6344" />
            <source>Target</source>
            <translation>Objetivo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6344" />
            <source>Hops</source>
            <translation>Lúpulo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6345" />
            <source>Entity graph</source>
            <translation>Gráfico de entidad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6348" />
            <source>Explainable signals are derived only from retained local evidence and the selected response. Validate them against authoritative product telemetry.</source>
            <translation>Las señales explicables se derivan únicamente de la evidencia local retenida y de la respuesta seleccionada. Valídelos con la telemetría autorizada del producto.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6349" />
            <source>Signal</source>
            <translation>señal</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6349" />
            <source>Entity</source>
            <translation>entidad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6350" />
            <source>Correlated signals</source>
            <translation>Señales correlacionadas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6354" />
            <location filename="../zscaler_api_client.py" line="6836" />
            <source>Export entity graph</source>
            <translation>Exportar gráfico de entidades</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6358" />
            <source>Trace observed digital experience from user and device through network and service edge to the application. The parser consumes the complete current REST or GraphQL response, marks missing stages explicitly, and never queries the tenant automatically.</source>
            <translation>Trace la experiencia digital observada desde el usuario y el dispositivo a través de la red y el borde del servicio hasta la aplicación. El analizador consume la respuesta REST o GraphQL actual completa, marca explícitamente las etapas faltantes y nunca consulta al inquilino automáticamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6360" />
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Experience score</source>
            <translation>Puntuación de experiencia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6360" />
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Packet loss</source>
            <translation>pérdida de paquetes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6360" />
            <source>Journey issues</source>
            <translation>Problemas de viaje</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6364" />
            <source>Observed user-to-application experience journey</source>
            <translation>Viaje observado de la experiencia del usuario a la aplicación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6367" />
            <source>Trend metric:</source>
            <translation>Métrica de tendencia:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6368" />
            <source>Observed value</source>
            <translation>Valor observado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6370" />
            <source>Stage</source>
            <translation>etapa</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6370" />
            <source>Metric</source>
            <translation>Métrica</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6372" />
            <source>Analyze current experience response</source>
            <translation>Analizar la respuesta a la experiencia actual</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <location filename="../zscaler_api_client.py" line="6901" />
            <source>Export masked journey</source>
            <translation>Exportar viaje enmascarado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6374" />
            <source>Experience journey</source>
            <translation>Viaje de experiencia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6392" />
            <source>Build and test explainable detections against retained local request history. Rules use a bounded declarative grammar—no Python, eval, tenant writes, network calls, or automatic remediation.</source>
            <translation>Cree y pruebe detecciones explicables comparándolas con el historial de solicitudes locales retenido. Las reglas utilizan una gramática declarativa limitada: sin Python, evaluación, escrituras de inquilinos, llamadas de red ni corrección automática.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6393" />
            <source>Template:</source>
            <translation>Plantilla:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <source>Server errors</source>
            <translation>Errores del servidor</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <source>Rate-limit responses</source>
            <translation>Respuestas de límite de velocidad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <source>High request latency</source>
            <translation>Alta latencia de solicitud</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <source>Write activity</source>
            <translation>Escribir actividad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <source>Authentication failures</source>
            <translation>Fallos de autenticación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Anomaly sensitivity:</source>
            <translation>Sensibilidad a anomalías:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Relaxed</source>
            <translation>Relajado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Balanced</source>
            <translation>equilibrado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Sensitive</source>
            <translation>sensible</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6398" />
            <source>Declarative detection rule JSON</source>
            <translation>Regla de detección declarativa JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6399" />
            <source>Validate rule</source>
            <translation>Validar regla</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6400" />
            <source>Run local detection</source>
            <translation>Ejecutar detección local</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6401" />
            <source>Analyze adaptive anomalies</source>
            <translation>Analizar anomalías adaptativas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6402" />
            <location filename="../zscaler_api_client.py" line="7011" />
            <source>Export masked detection evidence</source>
            <translation>Exportar evidencia de detección enmascarada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6405" />
            <location filename="../zscaler_api_client.py" line="6428" />
            <source>URL</source>
            <translation>URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Endpoint</source>
            <translation>Punto final</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Observed</source>
            <translation>Observado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6409" />
            <source>Detection lab</source>
            <translation>Laboratorio de detección</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6446" />
            <source>Continuously evaluate a transparent local evidence baseline. Framework mappings are navigational aids—not certification—and no tenant query or remediation runs automatically.</source>
            <translation>Evaluar continuamente una línea base de evidencia local transparente. Las asignaciones de marcos son ayudas para la navegación, no certificación, y ninguna consulta o corrección de inquilinos se ejecuta automáticamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6447" />
            <source>Framework view:</source>
            <translation>Vista del marco:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <source>All local controls</source>
            <translation>Todos los controles locales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <source>NIST CSF 2.0 functions</source>
            <translation>Funciones NIST CSF 2.0</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <source>CISA Zero Trust pillars</source>
            <translation>Pilares de CISA Zero Trust</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6449" />
            <source>Include proposed policy from Policy diff</source>
            <translation>Incluir la política propuesta de Policy diff</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <source>Evaluate now</source>
            <translation>Evaluar ahora</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <location filename="../zscaler_api_client.py" line="7305" />
            <source>Assurance score</source>
            <translation>Puntuación de aseguramiento</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Passed</source>
            <translation>Aprobado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <location filename="../zscaler_api_client.py" line="7203" />
            <source>Not evaluated</source>
            <translation>No evaluado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <source>Evidence coverage</source>
            <translation>Cobertura de evidencia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6458" />
            <source>Control</source>
            <translation>controlar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6458" />
            <source>Control objective</source>
            <translation>Objetivo de control</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6458" />
            <source>Framework mapping</source>
            <translation>Mapeo del marco</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6458" />
            <source>Recommendation</source>
            <translation>Recomendación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6459" />
            <source>Leadership narrative</source>
            <translation>Narrativa de liderazgo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6428" />
            <location filename="../zscaler_api_client.py" line="6461" />
            <source>Score</source>
            <translation>Puntuación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6281" />
            <source>JSON Lines (SIEM/SOAR)</source>
            <translation>Líneas JSON (SIEM/SOAR)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6282" />
            <location filename="../zscaler_api_client.py" line="7743" />
            <source>Export masked security events</source>
            <translation>Exportar eventos de seguridad enmascarados</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6283" />
            <location filename="../zscaler_api_client.py" line="7749" />
            <source>Export read-only MCP manifest</source>
            <translation>Exportar manifiesto MCP de solo lectura</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6284" />
            <location filename="../zscaler_api_client.py" line="7757" />
            <source>Export Terraform review handoff</source>
            <translation>Transferencia de revisión de exportación de Terraform</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6377" />
            <source>Inspect the complete current REST or GraphQL response for explicit internet exposure, vulnerability severity and broad or write-capable access. Findings are local hypotheses and deception suggestions are never deployed automatically.</source>
            <translation>Inspeccione la respuesta REST o GraphQL actual completa para detectar exposición explícita a Internet, gravedad de la vulnerabilidad y acceso amplio o con capacidad de escritura. Los hallazgos son hipótesis locales y las sugerencias de engaño nunca se implementan automáticamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>Exposure signals</source>
            <translation>Señales de exposición</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>High-risk assets</source>
            <translation>Activos de alto riesgo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>Access findings</source>
            <translation>Acceder a los resultados</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>Broad privileges</source>
            <translation>Amplios privilegios</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6383" />
            <source>Asset</source>
            <translation>Activo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6383" />
            <source>Risk score</source>
            <translation>Puntuación de riesgo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6383" />
            <source>Observed factors</source>
            <translation>Factores observados</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6384" />
            <source>Subject</source>
            <translation>Asunto</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6384" />
            <source>Permission field</source>
            <translation>campo de permiso</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6385" />
            <source>Defensive deception opportunities</source>
            <translation>Oportunidades de engaño defensivo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6386" />
            <source>Analyze current exposure and access</source>
            <translation>Analizar la exposición y el acceso actuales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6386" />
            <location filename="../zscaler_api_client.py" line="6934" />
            <source>Export masked exposure evidence</source>
            <translation>Exportar evidencia de exposición enmascarada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <location filename="../zscaler_api_client.py" line="6952" />
            <location filename="../zscaler_api_client.py" line="6954" />
            <source>Investigation notebook</source>
            <translation>cuaderno de investigacion</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <source>Note title</source>
            <translation>Título de la nota</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <source>Comma-separated tags</source>
            <translation>Etiquetas separadas por comas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <source>Masked investigation observations, decisions and follow-up</source>
            <translation>Observaciones, decisiones y seguimiento de la investigación enmascarada.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>Save local note</source>
            <translation>Guardar nota local</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <location filename="../zscaler_api_client.py" line="6959" />
            <source>Export masked notebook</source>
            <translation>Exportar cuaderno enmascarado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>Title</source>
            <translation>Título</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>Tags</source>
            <translation>Etiquetas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>Preview</source>
            <translation>Vista previa</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6389" />
            <source>Exposure &amp; access</source>
            <translation>Exposición y acceso</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6413" />
            <source>Use guided, locally tracked response and recovery checklists. A completed step records only operator intent in the local audit trail; it never changes a tenant or closes an authoritative incident.</source>
            <translation>Utilice listas de verificación de recuperación y respuesta guiadas y con seguimiento local. Un paso completado registra sólo la intención del operador en el registro de auditoría local; nunca cambia a un inquilino ni cierra un incidente autorizado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6414" />
            <source>Playbook:</source>
            <translation>Libro de jugadas:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>API/service disruption</source>
            <translation>Interrupción de API/servicio</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>High-risk policy change</source>
            <translation>Cambio de política de alto riesgo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>Digital experience degradation</source>
            <translation>Degradación de la experiencia digital</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>Possible credential exposure</source>
            <translation>Posible exposición de credenciales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>Ransomware containment support</source>
            <translation>Soporte de contención de ransomware</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6418" />
            <source>Mark selected step complete</source>
            <translation>Marcar el paso seleccionado como completo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6419" />
            <location filename="../zscaler_api_client.py" line="7053" />
            <source>Export masked playbook evidence</source>
            <translation>Exportar evidencia del libro de jugadas enmascarada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6421" />
            <source>Guidance</source>
            <translation>Orientación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6421" />
            <source>Local evidence</source>
            <translation>evidencia local</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6422" />
            <source>Smart API planner (review only)</source>
            <translation>Planificador de API inteligente (solo revisión)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Describe a goal to rank documented Automation Hub operations deterministically. Read operations are preferred; tenant values are never guessed and nothing runs automatically.</source>
            <translation>Describa un objetivo para clasificar de manera determinista las operaciones documentadas de Automation Hub. Se prefieren las operaciones de lectura; Los valores de los inquilinos nunca se adivinan y nada se ejecuta automáticamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6424" />
            <source>Example: investigate slow ZDX application experience</source>
            <translation>Ejemplo: investigar la experiencia lenta de la aplicación ZDX</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6425" />
            <source>Plan documented operations</source>
            <translation>Planificar operaciones documentadas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Copy safe reads to API Chains</source>
            <translation>Copie lecturas seguras en cadenas API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6428" />
            <source>Product</source>
            <translation>Producto</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6428" />
            <source>Operation</source>
            <translation>Operación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6429" />
            <location filename="../zscaler_api_client.py" line="7045" />
            <source>Response playbooks</source>
            <translation>Manuales de respuesta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Change owner</source>
            <translation>Cambiar propietario</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Independent reviewer</source>
            <translation>Revisor independiente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Owner:</source>
            <translation>Propietario:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Maintenance window confirmed</source>
            <translation>Ventana de mantenimiento confirmada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <source>Local simulation reviewed</source>
            <translation>Simulación local revisada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <source>Rollback prepared</source>
            <translation>Reversión preparada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6436" />
            <source>Gate</source>
            <translation>Puerta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6436" />
            <source>Required</source>
            <translation>Requerido</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6442" />
            <location filename="../zscaler_api_client.py" line="7140" />
            <location filename="../zscaler_api_client.py" line="7144" />
            <location filename="../zscaler_api_client.py" line="7145" />
            <source>Verify rollback artifact</source>
            <translation>Verificar artefacto de reversión</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Local baseline:</source>
            <translation>Línea de base local:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6463" />
            <source>Save assessment baseline</source>
            <translation>Guardar línea base de evaluación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6464" />
            <location filename="../zscaler_api_client.py" line="7243" />
            <source>Export signed evidence</source>
            <translation>Exportar evidencia firmada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6465" />
            <location filename="../zscaler_api_client.py" line="7250" />
            <source>Verify signed evidence</source>
            <translation>Verificar evidencia firmada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6467" />
            <location filename="../zscaler_api_client.py" line="7174" />
            <location filename="../zscaler_api_client.py" line="7230" />
            <source>Continuous assurance</source>
            <translation>Aseguramiento continuo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6532" />
            <location filename="../zscaler_api_client.py" line="7591" />
            <location filename="../zscaler_api_client.py" line="7595" />
            <location filename="../zscaler_api_client.py" line="7597" />
            <location filename="../zscaler_api_client.py" line="7609" />
            <source>Policy time travel</source>
            <translation>Política de viajes en el tiempo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Save snapshot</source>
            <translation>Guardar instantánea</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6535" />
            <source>Use as baseline</source>
            <translation>Usar como línea de base</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6536" />
            <source>Load snapshot</source>
            <translation>Cargar instantánea</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6537" />
            <source>Delete snapshot</source>
            <translation>Eliminar instantánea</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6539" />
            <location filename="../zscaler_api_client.py" line="7526" />
            <location filename="../zscaler_api_client.py" line="7561" />
            <location filename="../zscaler_api_client.py" line="7586" />
            <source>Policy twin</source>
            <translation>Política gemela</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6581" />
            <source>All environments</source>
            <translation>Todos los ambientes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6597" />
            <source>Showing local evidence for: {name}</source>
            <translation>Showing local evidence for: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6599" />
            <source>Cross-tenant overview is active. Exports and integrations will include all local environments.</source>
            <translation>La descripción general entre inquilinos está activa. Las exportaciones e integraciones incluirán todos los entornos locales.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6605" />
            <location filename="../zscaler_api_client.py" line="6969" />
            <location filename="../zscaler_api_client.py" line="7375" />
            <source>Invalid JSON: </source>
            <translation>JSON no válido: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6625" />
            <source>Audit chain is valid</source>
            <translation>La cadena de auditoría es válida</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6625" />
            <source>Audit chain needs review</source>
            <translation>La cadena de auditoría necesita revisión</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6631" />
            <source>Success</source>
            <translation>Éxito</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6631" />
            <source>Other</source>
            <translation>Otro</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6645" />
            <location filename="../zscaler_api_client.py" line="7271" />
            <source>Posture score: {score}/100</source>
            <translation>Posture score: {score}/100</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6647" />
            <location filename="../zscaler_api_client.py" line="6678" />
            <location filename="../zscaler_api_client.py" line="6745" />
            <location filename="../zscaler_api_client.py" line="7204" />
            <location filename="../zscaler_api_client.py" line="7285" />
            <location filename="../zscaler_api_client.py" line="7637" />
            <source>Critical</source>
            <translation>Crítico</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6647" />
            <location filename="../zscaler_api_client.py" line="6678" />
            <location filename="../zscaler_api_client.py" line="6745" />
            <location filename="../zscaler_api_client.py" line="6809" />
            <location filename="../zscaler_api_client.py" line="7204" />
            <location filename="../zscaler_api_client.py" line="7285" />
            <location filename="../zscaler_api_client.py" line="7543" />
            <location filename="../zscaler_api_client.py" line="7637" />
            <source>High</source>
            <translation>Alto</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6647" />
            <location filename="../zscaler_api_client.py" line="6678" />
            <location filename="../zscaler_api_client.py" line="6745" />
            <location filename="../zscaler_api_client.py" line="6809" />
            <location filename="../zscaler_api_client.py" line="7204" />
            <location filename="../zscaler_api_client.py" line="7285" />
            <location filename="../zscaler_api_client.py" line="7543" />
            <location filename="../zscaler_api_client.py" line="7637" />
            <source>Medium</source>
            <translation>Medio</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6647" />
            <location filename="../zscaler_api_client.py" line="6678" />
            <location filename="../zscaler_api_client.py" line="6745" />
            <location filename="../zscaler_api_client.py" line="7204" />
            <location filename="../zscaler_api_client.py" line="7285" />
            <location filename="../zscaler_api_client.py" line="7543" />
            <location filename="../zscaler_api_client.py" line="7637" />
            <source>Low</source>
            <translation>Bajo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6647" />
            <location filename="../zscaler_api_client.py" line="6809" />
            <location filename="../zscaler_api_client.py" line="7285" />
            <location filename="../zscaler_api_client.py" line="7543" />
            <location filename="../zscaler_api_client.py" line="7637" />
            <source>Info</source>
            <translation>Información</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6651" />
            <source>Audit integrity needs review</source>
            <translation>La integridad de la auditoría necesita revisión</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6651" />
            <source>The local audit chain did not verify.</source>
            <translation>La cadena de auditoría local no verificó.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6652" />
            <source>Repeated API failures</source>
            <translation>Fallos repetidos de API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6652" />
            <source>{count} failed requests are in local history.</source>
            <translation>{count} failed requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6653" />
            <source>API failures observed</source>
            <translation>Fallos de API observados</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6653" />
            <source>{count} request(s) need review.</source>
            <translation>{count} request(s) need review.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6654" />
            <source>Change activity burst</source>
            <translation>Explosión de actividad de cambio</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6654" />
            <source>{count} write requests are in local history.</source>
            <translation>{count} write requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6655" />
            <source>Slow API responses</source>
            <translation>Respuestas API lentas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6655" />
            <source>{count} request(s) took ten seconds or more.</source>
            <translation>{count} request(s) took ten seconds or more.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6656" />
            <source>No local telemetry yet</source>
            <translation>Aún no hay telemetría local</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6656" />
            <source>Send or import redacted requests to establish a local baseline.</source>
            <translation>Envíe o importe solicitudes redactadas para establecer una línea de base local.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6677" />
            <source>{count} local alert(s) · error threshold: {threshold}</source>
            <translation>{count} local alert(s) · error threshold: {threshold}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6683" />
            <source>The local audit chain needs review.</source>
            <translation>La cadena de auditoría local necesita revisión.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6684" />
            <source>Local failed requests reached the configured threshold.</source>
            <translation>Las solicitudes fallidas locales alcanzaron el umbral configurado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6685" />
            <source>API rate limiting was observed in local history.</source>
            <translation>La limitación de la tasa API se observó en la historia local.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6686" />
            <source>A response reported no remaining API rate-limit capacity.</source>
            <translation>Una respuesta informó que no quedaba capacidad límite de velocidad API.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6687" />
            <source>The latest request failed after successful requests to the same endpoint.</source>
            <translation>La última solicitud falló después de solicitudes exitosas al mismo punto final.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6688" />
            <source>The latest endpoint response was much slower than its local baseline.</source>
            <translation>La última respuesta del endpoint fue mucho más lenta que su punto de referencia local.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6689" />
            <source>Three or more local requests took ten seconds or more.</source>
            <translation>Tres o más solicitudes locales tardaron diez segundos o más.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6707" />
            <source>Local alert summary</source>
            <translation>Resumen de alerta local</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6707" />
            <source>Error threshold: {threshold}</source>
            <translation>Error threshold: {threshold}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6707" />
            <location filename="../zscaler_api_client.py" line="7271" />
            <location filename="../zscaler_api_client.py" line="7799" />
            <location filename="../zscaler_api_client.py" line="7860" />
            <source>Data scope: {name}</source>
            <translation>Data scope: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6709" />
            <source>No local alerts.</source>
            <translation>Sin alertas locales.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6711" />
            <source>Count: {count}</source>
            <translation>Count: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6716" />
            <source>Export local alerts</source>
            <translation>Exportar alertas locales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6745" />
            <source>Normal</source>
            <translation>normales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6750" />
            <source>Observed relationship chain across local evidence; validate before treating it as an exploitable attack path.</source>
            <translation>Cadena de relaciones observada a través de la evidencia local; validar antes de tratarlo como una ruta de ataque explotable.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6756" />
            <source>Endpoint failure evidence</source>
            <translation>Evidencia de falla del endpoint</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6756" />
            <source>Relationship concentration</source>
            <translation>Concentración de relaciones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6756" />
            <source>Security indicator observed</source>
            <translation>Indicador de seguridad observado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6758" />
            <source>The endpoint has locally retained server or network failure evidence.</source>
            <translation>El punto final tiene evidencia de falla de red o servidor retenido localmente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6759" />
            <source>The entity is connected to an unusually broad set of locally observed relationships.</source>
            <translation>La entidad está conectada a un conjunto inusualmente amplio de relaciones observadas localmente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6760" />
            <source>A threat, exposure, vulnerability, or indicator-like object was present in the response.</source>
            <translation>Una amenaza, exposición, vulnerabilidad u objeto similar a un indicador estuvo presente en la respuesta.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6769" />
            <source>The graph reached its local safety limit; use the filter or export the evidence for complete review.</source>
            <translation>El gráfico alcanzó su límite de seguridad local; use el filtro o exporte la evidencia para una revisión completa.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6771" />
            <source>No correlatable entities are available in the selected local scope.</source>
            <translation>No hay entidades correlacionables disponibles en el ámbito local seleccionado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6793" />
            <source>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</source>
            <translation>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6812" />
            <source>Request</source>
            <translation>Solicitar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6812" />
            <source>Audit</source>
            <translation>Auditoría</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6818" />
            <source>1. Review failed requests in the local timeline.
2. Select the matching product and endpoint in API Explorer.
3. Run the read-only status or list operation.
4. Compare the masked response with the audit trail.
5. Export evidence or open a change review; no remediation is sent automatically.</source>
            <translation>1. Revisar las solicitudes fallidas en el cronograma local.
2. Seleccione el producto y el punto final coincidentes en API Explorer.
3. Ejecute la operación de lista o estado de solo lectura.
4. Compare la respuesta enmascarada con la pista de auditoría.
5. Exportar evidencia o abrir una revisión de cambios; no se envía ninguna corrección automáticamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6819" />
            <source>1. Review recent write requests and audit events.
2. Export or load the current policy object.
3. Use Policy diff and local simulation.
4. Run compliance checks.
5. Prepare a reviewed Terraform or Git change; no apply is sent automatically.</source>
            <translation>1. Revise las solicitudes de escritura recientes y los eventos de auditoría.
2. Exporte o cargue el objeto de política actual.
3. Utilice la diferenciación de políticas y la simulación local.
4. Ejecute verificaciones de cumplimiento.
5. Prepare un cambio revisado de Terraform o Git; ninguna solicitud se envía automáticamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6820" />
            <source>1. Identify slow requests in the local timeline.
2. Review response status, duration, and rate-limit headers.
3. Query the relevant ZDX or product status endpoint.
4. Compare against recent requests.
5. Export the masked incident evidence for escalation.</source>
            <translation>1. Identifique solicitudes lentas en la línea de tiempo local.
2. Revise el estado de la respuesta, la duración y los encabezados de límite de velocidad.
3. Consulte el ZDX relevante o el punto final de estado del producto.
4. Compare con solicitudes recientes.
5. Exporte la evidencia del incidente enmascarado para escalarlo.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6869" />
            <source>{value:g} ms</source>
            <translation>{value:g} ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6875" />
            <source>User</source>
            <translation>Usuario</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6875" />
            <source>Device</source>
            <translation>Dispositivo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6875" />
            <source>Network</source>
            <translation>Red</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6875" />
            <source>Service edge</source>
            <translation>Ventaja del servicio</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6875" />
            <source>Application</source>
            <translation>Solicitud</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Device score</source>
            <translation>Puntuación del dispositivo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Application score</source>
            <translation>Puntuación de la aplicación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Service-edge score</source>
            <translation>Puntuación de borde de servicio</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Jitter</source>
            <translation>nerviosismo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>DNS time</source>
            <translation>hora DNS</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>TCP connect time</source>
            <translation>tiempo de conexión TCP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Page fetch time</source>
            <translation>Tiempo de búsqueda de página</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Availability</source>
            <translation>Disponibilidad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>CPU</source>
            <translation>CPU</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Memory</source>
            <translation>Memoria</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Overall experience score is below 70</source>
            <translation>La puntuación general de la experiencia es inferior a 70</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Device score is below 70</source>
            <translation>La puntuación del dispositivo está por debajo de 70</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Application score is below 70</source>
            <translation>La puntuación de la solicitud es inferior a 70</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Service-edge score is below 70</source>
            <translation>La puntuación del borde del servicio está por debajo de 70</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Observed latency exceeds 250 ms</source>
            <translation>La latencia observada supera los 250 ms.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Observed packet loss exceeds 2%</source>
            <translation>La pérdida de paquetes observada supera el 2%</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Observed jitter exceeds 40 ms</source>
            <translation>La fluctuación observada supera los 40 ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Observed availability is below 99%</source>
            <translation>La disponibilidad observada está por debajo del 99%</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6889" />
            <source>Schema-tolerant local interpretation of observed API fields. Thresholds are transparent operational hints, not Zscaler health verdicts or SLA determinations.</source>
            <translation>Interpretación local tolerante a los esquemas de los campos API observados. Los umbrales son sugerencias operativas transparentes, no veredictos de estado de Zscaler ni determinaciones de SLA.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6890" />
            <source>No current API or GraphQL response is available. Run or import a ZDX/OneAPI query, then analyze again.</source>
            <translation>No hay ninguna respuesta API o GraphQL disponible actualmente. Ejecute o importe una consulta ZDX/OneAPI y luego analícela nuevamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6890" />
            <source>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</source>
            <translation>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6924" />
            <source>Explicit broad or write-capable access observed; validate least privilege and assignment context.</source>
            <translation>Se observa acceso explícito, amplio o con capacidad de escritura; validar el privilegio mínimo y el contexto de asignación.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6929" />
            <source>Consider a monitored decoy resource near exposed paths</source>
            <translation>Considere un recurso señuelo monitoreado cerca de caminos expuestos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6929" />
            <source>Consider a non-production canary permission for privileged-path monitoring</source>
            <translation>Considere un permiso canary que no sea de producción para el monitoreo de rutas privilegiadas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6929" />
            <source>Maintain an exposure and least-privilege baseline</source>
            <translation>Mantener una línea base de exposición y privilegios mínimos.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6952" />
            <source>Select one environment before saving an investigation note.</source>
            <translation>Seleccione un entorno antes de guardar una nota de investigación.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6977" />
            <source>Rule is valid and can be evaluated locally.</source>
            <translation>La regla es válida y se puede evaluar localmente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6977" />
            <source>Rule validation failed: {errors}</source>
            <translation>Rule validation failed: {errors}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6990" />
            <source>Matched events where {mode} of {conditions} declarative condition(s) were true.</source>
            <translation>Matched events where {mode} of {conditions} declarative condition(s) were true.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6991" />
            <source>Examined {examined} local event(s); {matched} matched. {explanation}</source>
            <translation>Examined {examined} local event(s); {matched} matched. {explanation}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7004" />
            <source>Endpoint {number} current</source>
            <translation>Endpoint {number} current</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7004" />
            <source>Endpoint {number} threshold</source>
            <translation>Endpoint {number} threshold</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7005" />
            <source>Median absolute deviation (MAD), scaled by 1.4826 with a 10%/10 ms noise floor</source>
            <translation>Desviación absoluta media (MAD), escalada en 1,4826 con un nivel de ruido mínimo del 10 %/10 ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7006" />
            <source>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</source>
            <translation>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Confirm scope from retained failures</source>
            <translation>Confirmar el alcance de las fallas retenidas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Check rate-limit and service-health evidence</source>
            <translation>Verifique el límite de tarifa y la evidencia de estado del servicio</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Collect read-only product status</source>
            <translation>Recopilar el estado del producto de solo lectura</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Correlate affected entities</source>
            <translation>Correlacionar entidades afectadas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Export masked incident evidence</source>
            <translation>Exportar evidencia de incidentes enmascarados</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Record closure decision</source>
            <translation>Decisión de cierre récord</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Capture current policy baseline</source>
            <translation>Capture la línea de base de la política actual</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Run policy diff and best-practice checks</source>
            <translation>Ejecute diferencias de políticas y verificaciones de mejores prácticas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Run Policy Twin and decision simulation</source>
            <translation>Ejecute Policy Twin y simulación de decisiones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Prepare rollback artifact</source>
            <translation>Preparar artefacto de reversión</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Record independent review</source>
            <translation>Registro de revisión independiente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Export change package</source>
            <translation>Exportar paquete de cambios</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Identify affected user and application scope</source>
            <translation>Identificar el usuario afectado y el alcance de la aplicación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Inspect device metrics</source>
            <translation>Inspeccionar las métricas del dispositivo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Inspect network latency, loss and jitter</source>
            <translation>Inspeccionar la latencia, pérdida y fluctuación de la red</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Inspect service-edge path</source>
            <translation>Inspeccionar la ruta del borde del servicio</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Compare application response</source>
            <translation>Comparar la respuesta de la aplicación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Export masked journey evidence</source>
            <translation>Exportar pruebas de viaje enmascaradas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Stop copying or exporting raw material</source>
            <translation>Deja de copiar o exportar materia prima</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Rotate the affected credential outside this client</source>
            <translation>Rotar la credencial afectada fuera de este cliente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Clear in-memory sessions</source>
            <translation>Borrar sesiones en memoria</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Review masked audit evidence</source>
            <translation>Revisar evidencia de auditoría enmascarada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Validate least-privilege access</source>
            <translation>Validar el acceso con privilegios mínimos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Record containment and recovery</source>
            <translation>Contención y recuperación de registros</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Validate the alert in authoritative security tooling</source>
            <translation>Validar la alerta en herramientas de seguridad autorizadas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Identify users, devices and applications</source>
            <translation>Identificar usuarios, dispositivos y aplicaciones.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Preserve masked evidence</source>
            <translation>Preservar evidencia enmascarada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Prepare containment changes for independent approval</source>
            <translation>Preparar cambios de contención para aprobación independiente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Track recovery prerequisites</source>
            <translation>Seguimiento de los requisitos previos de recuperación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Record lessons learned</source>
            <translation>Registrar las lecciones aprendidas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7033" />
            <source>Complete</source>
            <translation>completo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7033" />
            <source>Pending</source>
            <translation>Pendiente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7034" />
            <source>Recorded in local audit trail</source>
            <translation>Registrado en el registro de auditoría local</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7034" />
            <source>No completion evidence</source>
            <translation>No hay evidencia de finalización</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7045" />
            <source>Select a playbook step first.</source>
            <translation>Primero seleccione un paso del libro de jugadas.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7049" />
            <source>Mark step complete</source>
            <translation>Marcar paso completo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7049" />
            <source>Record this step as completed in the local audit trail? This does not perform the action or update an authoritative incident.</source>
            <translation>¿Registrar este paso como completado en el registro de auditoría local? Esto no realiza la acción ni actualiza un incidente autorizado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7060" />
            <source>Describe an administrative or investigation goal first.</source>
            <translation>Describa primero un objetivo administrativo o de investigación.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7069" />
            <source>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</source>
            <translation>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7075" />
            <source>Smart API planner</source>
            <translation>Planificador de API inteligente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7075" />
            <source>Create a plan with at least one read operation first.</source>
            <translation>Cree un plan con al menos una operación de lectura primero.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7077" />
            <source>Planner output copied for review. Validate the chain, supply required path values, and approve it separately before execution.</source>
            <translation>Salida del planificador copiada para su revisión. Valide la cadena, proporcione los valores de ruta requeridos y apruebe por separado antes de la ejecución.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Review policy diff</source>
            <translation>Revisar la diferencia de política</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Run local simulation</source>
            <translation>Ejecutar simulación local</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Record reviewer approval</source>
            <translation>Aprobación del revisor de registros</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Export Git/Terraform review</source>
            <translation>Exportar revisión de Git/Terraform</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Apply outside this client only after approval</source>
            <translation>Aplicar fuera de este cliente solo después de la aprobación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7099" />
            <source>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</source>
            <translation>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Change reference recorded</source>
            <translation>Cambiar referencia registrada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Change owner recorded</source>
            <translation>Cambio de propietario registrado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Independent reviewer recorded</source>
            <translation>Revisor independiente registrado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Local policy simulation reviewed</source>
            <translation>Revisión de simulación de políticas locales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Rollback artifact prepared</source>
            <translation>Artefacto de reversión preparado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Local approval recorded</source>
            <translation>Aprobación local registrada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Yes</source>
            <translation>si</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>No</source>
            <translation>No</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Blocked</source>
            <translation>Bloqueado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Optional</source>
            <translation>Opcional</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7118" />
            <source>Enter a reviewer before recording approval.</source>
            <translation>Ingrese un revisor antes de registrar la aprobación.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7120" />
            <source>Local approval recorded. External apply remains disabled.</source>
            <translation>Aprobación local registrada. La aplicación externa permanece deshabilitada.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7144" />
            <source>Rollback artifact integrity verified. This does not authorize applying it.</source>
            <translation>Integridad del artefacto de reversión verificada. Esto no autoriza a aplicarlo.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7145" />
            <source>Rollback verification failed: {reason}</source>
            <translation>Rollback verification failed: {reason}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7155" />
            <source>No comparison baseline</source>
            <translation>Sin línea de base de comparación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7160" />
            <source>{time} · score {score}/100</source>
            <translation>{time} · score {score}/100</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7183" />
            <source>Audit evidence integrity</source>
            <translation>Integridad de la evidencia de auditoría</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7183" />
            <source>Review and restore the local hash-linked audit trail.</source>
            <translation>Revise y restaure la pista de auditoría local vinculada a hash.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7184" />
            <source>Operational evidence available</source>
            <translation>Evidencia operativa disponible</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7184" />
            <source>Collect or import masked read-only evidence for the selected environment.</source>
            <translation>Recopile o importe evidencia enmascarada de solo lectura para el entorno seleccionado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7185" />
            <source>API health and anomaly monitoring</source>
            <translation>Monitoreo de anomalías y salud de API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7185" />
            <source>Investigate repeated failures, latency regressions, and rate limiting.</source>
            <translation>Investigue fallas repetidas, regresiones de latencia y limitación de velocidad.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7186" />
            <source>Least-privilege policy baseline</source>
            <translation>Línea de base de la política de mínimos privilegios</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7186" />
            <source>Constrain unconditional allow rules and validate order in Policy Twin.</source>
            <translation>Restrinja las reglas de permiso incondicionales y valide el orden en Policy Twin.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7187" />
            <source>Reviewed write activity</source>
            <translation>Actividad de escritura revisada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7187" />
            <source>Require a recorded review and rollback artifact for write activity.</source>
            <translation>Requerir una revisión grabada y un artefacto de reversión para la actividad de escritura.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7188" />
            <source>Incident evidence readiness</source>
            <translation>Preparación de evidencia de incidentes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7188" />
            <source>Prepare and export masked investigation evidence for unresolved failures.</source>
            <translation>Prepare y exporte evidencia de investigación enmascarada para fallas no resueltas.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7189" />
            <source>Recovery evidence available</source>
            <translation>Evidencia de recuperación disponible</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7189" />
            <source>Save a policy snapshot or reviewed rollback artifact before change.</source>
            <translation>Guarde una instantánea de la política o un artefacto de reversión revisado antes del cambio.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7203" />
            <source>Pass</source>
            <translation>Pase</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7203" />
            <source>Fail</source>
            <translation>fallar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7216" />
            <location filename="../zscaler_api_client.py" line="7273" />
            <location filename="../zscaler_api_client.py" line="7319" />
            <source>Local assurance requires attention</source>
            <translation>El aseguramiento local requiere atención</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7216" />
            <location filename="../zscaler_api_client.py" line="7273" />
            <location filename="../zscaler_api_client.py" line="7319" />
            <source>No failing controls in the evaluated local scope</source>
            <translation>No hay controles fallidos en el ámbito local evaluado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7217" />
            <location filename="../zscaler_api_client.py" line="7274" />
            <location filename="../zscaler_api_client.py" line="7320" />
            <source>{passed} evaluated control(s) passed and {failed} failed.</source>
            <translation>{passed} evaluated control(s) passed and {failed} failed.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7217" />
            <location filename="../zscaler_api_client.py" line="7320" />
            <source>Evidence coverage is {coverage}% and local posture is {posture}/100.</source>
            <translation>Evidence coverage is {coverage}% and local posture is {posture}/100.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7218" />
            <location filename="../zscaler_api_client.py" line="7321" />
            <source>The assurance score changed by {delta:+d} points versus the selected baseline.</source>
            <translation>The assurance score changed by {delta:+d} points versus the selected baseline.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7219" />
            <source>Prioritized actions</source>
            <translation>Acciones priorizadas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7222" />
            <source>Local evidence limitation: validate results against authoritative tenant and governance records.</source>
            <translation>Limitación de la evidencia local: valide los resultados con registros autorizados de inquilinos y de gobernanza.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7226" />
            <source>Now</source>
            <translation>ahora</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7227" />
            <source>Assessment {identifier} · {frameworks} · local evidence only, not certification.</source>
            <translation>Assessment {identifier} · {frameworks} · local evidence only, not certification.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7230" />
            <source>Select one environment before saving an assurance baseline.</source>
            <translation>Seleccione un entorno antes de guardar una línea base de aseguramiento.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7240" />
            <location filename="../zscaler_api_client.py" line="7242" />
            <location filename="../zscaler_api_client.py" line="7259" />
            <location filename="../zscaler_api_client.py" line="7261" />
            <source>Signed evidence</source>
            <translation>evidencia firmada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7240" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>El llavero del sistema no pudo almacenar la clave de firma de pruebas.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7242" />
            <source>The protected evidence signing key is invalid. Rotate it in Settings before signing.</source>
            <translation>La clave de firma de pruebas protegidas no es válida. Gírelo en Configuración antes de firmar.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7246" />
            <source>Signed evidence exported · public-key fingerprint {fingerprint}</source>
            <translation>Signed evidence exported · public-key fingerprint {fingerprint}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7258" />
            <source>Signature verified. Payload digest {digest}; public-key fingerprint {fingerprint}.</source>
            <translation>Signature verified. Payload digest {digest}; public-key fingerprint {fingerprint}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7261" />
            <source>Signature verification failed: {reason}</source>
            <translation>Signature verification failed: {reason}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7271" />
            <source>Assurance score: {score}/100 · evidence coverage {coverage}%</source>
            <translation>Assurance score: {score}/100 · evidence coverage {coverage}%</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7273" />
            <source>Executive assurance narrative</source>
            <translation>Narrativa de garantía ejecutiva</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7301" />
            <source>Posture score</source>
            <translation>Puntuación de postura</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7302" />
            <source>Local requests</source>
            <translation>Solicitudes locales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7303" />
            <source>Failed requests</source>
            <translation>Solicitudes fallidas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7432" />
            <source>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</source>
            <translation>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7438" />
            <source>Cancellation requested; the current HTTP request will finish and no new chain step will start.</source>
            <translation>Cancelación solicitada; la solicitud HTTP actual finalizará y no se iniciará ningún nuevo paso de la cadena.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6988" />
            <location filename="../zscaler_api_client.py" line="7462" />
            <source>{duration} ms</source>
            <translation>{duration} ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7479" />
            <source>The chain was cancelled before all steps started; completed results were retained.</source>
            <translation>La cadena se canceló antes de que comenzaran todos los pasos; se conservaron los resultados completos.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7486" />
            <source>Run a chain before exporting its masked results.</source>
            <translation>Ejecute una cadena antes de exportar sus resultados enmascarados.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7510" />
            <source>No baseline (analyze current policy only)</source>
            <translation>Sin línea de base (analizar solo la política actual)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7536" />
            <source>Unconditional allow</source>
            <translation>permiso incondicional</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7536" />
            <source>Shadowed conflict</source>
            <translation>Conflicto en la sombra</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7536" />
            <source>Redundant shadow</source>
            <translation>Sombra redundante</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7536" />
            <source>Overlapping actions</source>
            <translation>Acciones superpuestas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7536" />
            <source>Duplicate rule name</source>
            <translation>Nombre de regla duplicado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7538" />
            <source>An unconditional allow rule can expose every later matching scope.</source>
            <translation>Una regla de permiso incondicional puede exponer todos los ámbitos coincidentes posteriores.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7539" />
            <source>The later rule can never decide because an earlier rule covers all of its matches.</source>
            <translation>La regla posterior nunca puede decidir porque una regla anterior cubre todas sus coincidencias.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7540" />
            <source>The rules can match the same context but have different actions; order decides the outcome.</source>
            <translation>Las reglas pueden coincidir con el mismo contexto pero tener acciones diferentes; el orden decide el resultado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7541" />
            <source>Duplicate rule names make reviews, evidence, and rollback ambiguous.</source>
            <translation>Los nombres de reglas duplicados hacen que las revisiones, las pruebas y las reversiones sean ambiguas.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7550" />
            <source>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</source>
            <translation>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7557" />
            <source>Request context must be a JSON object.</source>
            <translation>El contexto de la solicitud debe ser un objeto JSON.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7563" />
            <source>Decision: {action}. Rule “{name}” matched after evaluating {count} rule(s).</source>
            <translation>Decision: {action}. Rule “{name}” matched after evaluating {count} rule(s).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Decision: no match after evaluating {count} rule(s).</source>
            <translation>Decision: no match after evaluating {count} rule(s).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7591" />
            <source>Select one environment before saving a policy snapshot.</source>
            <translation>Seleccione un entorno antes de guardar una instantánea de política.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7597" />
            <source>Policy snapshots are limited to 2 MB.</source>
            <translation>Las instantáneas de políticas están limitadas a 2 MB.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7598" />
            <source>Save policy snapshot</source>
            <translation>Guardar instantánea de la política</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7598" />
            <source>Snapshot name:</source>
            <translation>Nombre de la instantánea:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7609" />
            <source>Select a saved policy snapshot first.</source>
            <translation>Primero seleccione una instantánea de política guardada.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7615" />
            <source>Delete policy snapshot</source>
            <translation>Eliminar instantánea de política</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7615" />
            <source>Delete the selected local policy snapshot?</source>
            <translation>¿Eliminar la instantánea de la política local seleccionada?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7686" />
            <source>Local automation must be an existing absolute path to a non-symlinked .py file no larger than 1 MiB.</source>
            <translation>La automatización local debe ser una ruta absoluta existente a un archivo .py sin enlace simbólico que no supere 1 MiB.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7689" />
            <location filename="../zscaler_api_client.py" line="7853" />
            <source>Webhook endpoints must use HTTPS (or local HTTP) and must not contain credentials in the URL.</source>
            <translation>Los puntos finales de webhook deben utilizar HTTPS (o HTTP local) y no deben contener credenciales en la URL.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7693" />
            <source>Secure storage</source>
            <translation>Almacenamiento seguro</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7693" />
            <source>The system keychain could not save the webhook endpoint. Check the keychain service and try again.</source>
            <translation>El llavero del sistema no pudo guardar el punto final del webhook. Verifique el servicio de llavero e inténtelo nuevamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7709" />
            <source>Connectivity test</source>
            <translation>Prueba de conectividad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7709" />
            <source>Alert snapshot</source>
            <translation>Instantánea de alerta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7710" />
            <source>Started</source>
            <translation>iniciado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7470" />
            <location filename="../zscaler_api_client.py" line="7710" />
            <source>Succeeded</source>
            <translation>Tuvo éxito</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6499" />
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</source>
            <translation>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6502" />
            <source>A JSON list of API requests. Relative paths use the active product host; references can use only completed step IDs.</source>
            <translation>Una lista JSON de solicitudes de API. Las rutas relativas utilizan el host del producto activo; las referencias solo pueden utilizar ID de pasos completados.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6421" />
            <location filename="../zscaler_api_client.py" line="6505" />
            <source>Step</source>
            <translation>paso</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6405" />
            <location filename="../zscaler_api_client.py" line="6428" />
            <location filename="../zscaler_api_client.py" line="6505" />
            <source>Method</source>
            <translation>Método</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6505" />
            <source>Records</source>
            <translation>Registros</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6405" />
            <location filename="../zscaler_api_client.py" line="6505" />
            <source>Duration</source>
            <translation>Duración</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <location filename="../zscaler_api_client.py" line="7470" />
            <location filename="../zscaler_api_client.py" line="7710" />
            <source>Failed</source>
            <translation>Fallido</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7743" />
            <source>All files (*)</source>
            <translation>Todos los archivos (*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7746" />
            <source>Exported {count} masked local event(s) as {format}. No data was sent automatically.</source>
            <translation>Exported {count} masked local event(s) as {format}. No data was sent automatically.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7762" />
            <source>Created a non-executable Terraform review handoff. Run terraformer and terraform plan only after independent review; this client never applies it.</source>
            <translation>Creó una transferencia de revisión de Terraform no ejecutable. Ejecute terraformer y terraform plan solo después de una revisión independiente; este cliente nunca lo aplica.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7788" />
            <location filename="../zscaler_api_client.py" line="7791" />
            <location filename="../zscaler_api_client.py" line="7793" />
            <location filename="../zscaler_api_client.py" line="7798" />
            <location filename="../zscaler_api_client.py" line="7827" />
            <location filename="../zscaler_api_client.py" line="7837" />
            <location filename="../zscaler_api_client.py" line="7842" />
            <source>Local automation</source>
            <translation>Automatización local</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7788" />
            <source>Read-only mode blocks local automation.</source>
            <translation>El modo de solo lectura bloquea la automatización local.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7791" />
            <source>Configure a valid local Python automation in Governance first.</source>
            <translation>Primero configure una automatización Python local válida en Gobernanza.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7793" />
            <source>Local automation is already running.</source>
            <translation>La automatización local ya está en marcha.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7799" />
            <source>Run the reviewed Python file with masked local posture and alert data? The process receives no API credentials.</source>
            <translation>¿Ejecutar el archivo Python revisado con postura local enmascarada y datos de alerta? El proceso no recibe credenciales API.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7827" />
            <source>Local automation exceeded the 15-second limit and was stopped.</source>
            <translation>La automatización local superó el límite de 15 segundos y se detuvo.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7837" />
            <source>Local automation completed with exit code {code}.</source>
            <translation>Local automation completed with exit code {code}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7842" />
            <source>Local automation failed to start.</source>
            <translation>La automatización local no pudo iniciarse.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7848" />
            <source>Send the current masked local alert snapshot to the configured webhook endpoint?</source>
            <translation>¿Enviar la instantánea de alerta local enmascarada actual al punto final del webhook configurado?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7854" />
            <location filename="../zscaler_api_client.py" line="7856" />
            <location filename="../zscaler_api_client.py" line="7860" />
            <location filename="../zscaler_api_client.py" line="7880" />
            <location filename="../zscaler_api_client.py" line="7887" />
            <source>Webhook delivery</source>
            <translation>Entrega de webhook</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7856" />
            <source>A webhook delivery is already running.</source>
            <translation>Ya se está ejecutando una entrega de webhook.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7880" />
            <source>Masked webhook delivery succeeded (HTTP {status}).</source>
            <translation>Masked webhook delivery succeeded (HTTP {status}).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7887" />
            <source>Masked webhook delivery failed: {error}</source>
            <translation>Masked webhook delivery failed: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7916" />
            <source>Background</source>
            <translation>Antecedentes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7916" />
            <source>App only</source>
            <translation>Solo aplicación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7917" />
            <source>Paused</source>
            <translation>En pausa</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7929" />
            <source>Select a scheduled report first.</source>
            <translation>Seleccione primero un informe programado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7947" />
            <source>The scheduled report was generated locally.</source>
            <translation>El informe programado se generó localmente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7949" />
            <source>The scheduled report could not be generated. Check its output folder and the audit trail.</source>
            <translation>No se pudo generar el informe programado. Verifique su carpeta de salida y el registro de auditoría.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7963" />
            <source>The operating-system schedule could not be updated. No state was changed.</source>
            <translation>No se pudo actualizar la programación del sistema operativo. No se cambió ningún estado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7979" />
            <source>The report is paused and cannot generate output, but the operating-system job cleanup needs manual review.</source>
            <translation>El informe está en pausa y no puede generar resultados, pero el trabajo de limpieza del sistema operativo necesita una revisión manual.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7985" />
            <source>Remove the selected scheduled report?</source>
            <translation>¿Eliminar el informe programado seleccionado?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7998" />
            <source>The report was removed, but the operating-system job could not be removed. It can no longer generate a report because its schedule ID is no longer active.</source>
            <translation>El informe se eliminó, pero no se pudo eliminar el trabajo del sistema operativo. Ya no puede generar un informe porque su ID de programación ya no está activo.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8001" />
            <source>Report name:</source>
            <translation>Nombre del informe:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8014" />
            <source>Run this report even when ZS API Client is closed? This creates a user-level operating-system schedule and requires no administrator privileges.</source>
            <translation>¿Ejecutar este informe incluso cuando el cliente API ZS esté cerrado? Esto crea una programación del sistema operativo a nivel de usuario y no requiere privilegios de administrador.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8028" />
            <source>The operating-system schedule could not be created. The report was not scheduled.</source>
            <translation>No se pudo crear la programación del sistema operativo. El informe no estaba programado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8036" />
            <source>Scheduled report saved. It will run in the background even when the application is closed.</source>
            <translation>Informe programado guardado. Se ejecutará en segundo plano incluso cuando la aplicación esté cerrada.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8036" />
            <source>Scheduled report saved. It will run locally while the application is open.</source>
            <translation>Informe programado guardado. Se ejecutará localmente mientras la aplicación esté abierta.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7901" />
            <location filename="../zscaler_api_client.py" line="8004" />
            <source>Hourly</source>
            <translation>Por hora</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7901" />
            <location filename="../zscaler_api_client.py" line="8004" />
            <source>Daily</source>
            <translation>Diariamente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7901" />
            <location filename="../zscaler_api_client.py" line="8004" />
            <source>Weekly</source>
            <translation>Semanal</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8005" />
            <source>Report cadence:</source>
            <translation>Cadencia del informe:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8008" />
            <source>Choose report output folder</source>
            <translation>Elija la carpeta de salida del informe</translation>
        </message>
        <message>
            <source>Scheduled report saved. Reports run locally while the application is open.</source>
            <translation type="vanished">Informe programado guardado. Los informes se ejecutan localmente mientras la aplicación está abierta.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6707" />
            <location filename="../zscaler_api_client.py" line="7271" />
            <source>Local requests: {count}</source>
            <translation>Local requests: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6707" />
            <location filename="../zscaler_api_client.py" line="7271" />
            <source>Failed requests: {count}</source>
            <translation>Failed requests: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7271" />
            <source>Audit integrity: {status}</source>
            <translation>Audit integrity: {status}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7271" />
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Valid</source>
            <translation>Válido</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7271" />
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Needs review</source>
            <translation>Necesita revisión</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7271" />
            <source>Incident signals</source>
            <translation>Señales de incidentes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7275" />
            <source>Executive actions</source>
            <translation>Acciones ejecutivas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7275" />
            <source>Review high-risk findings and approval records.</source>
            <translation>Revisar los hallazgos de alto riesgo y los registros de aprobación.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7275" />
            <source>Use the Security Posture and Change Control workspaces for evidence.</source>
            <translation>Utilice los espacios de trabajo Postura de seguridad y Control de cambios como evidencia.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7277" />
            <source>SOC next steps</source>
            <translation>Próximos pasos del SOC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7277" />
            <source>Use Incident Investigation to prepare a review chain.</source>
            <translation>Utilice la investigación de incidentes para preparar una cadena de revisión.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7277" />
            <source>Export masked evidence before escalation.</source>
            <translation>Exportar evidencia enmascarada antes de la escalada.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7279" />
            <source>Operations next steps</source>
            <translation>Operaciones próximos pasos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7279" />
            <source>Review slow responses and API failures.</source>
            <translation>Revise las respuestas lentas y las fallas de API.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7279" />
            <source>Confirm rate limits and service health with read-only queries.</source>
            <translation>Confirme los límites de tarifas y el estado del servicio con consultas de solo lectura.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7379" />
            <source>Configure a host for the active product before running a chain.</source>
            <translation>Configure un host para el producto activo antes de ejecutar una cadena.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7389" />
            <source>Each chain step must stay on the active product host.</source>
            <translation>Cada paso de la cadena debe permanecer en el host del producto activo.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7405" />
            <source>Fix the chain validation errors before running it.</source>
            <translation>Corrija los errores de validación de la cadena antes de ejecutarla.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7409" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>El modo de solo lectura bloquea las solicitudes de escritura. Cambie el rol local en el Centro de operaciones para continuar.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7411" />
            <source>Authenticate the active product before running a chain.</source>
            <translation>Autenticar el producto activo antes de ejecutar una cadena.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7412" />
            <source>Run {count} API step(s) sequentially against the active environment?</source>
            <translation>Run {count} API step(s) sequentially against the active environment?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7414" />
            <source>The chain contains write operations; review and approve before continuing.</source>
            <translation>La cadena contiene operaciones de escritura; revisar y aprobar antes de continuar.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7429" />
            <source>Running API chain step {completed} of {total}...</source>
            <translation>Running API chain step {completed} of {total}...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7477" />
            <source>API chain completed: {successful} succeeded, {failed} failed.</source>
            <translation>API chain completed: {successful} succeeded, {failed} failed.</translation>
        </message>
        <message>
            <source>Metrics are local and contain no credentials.</source>
            <translation type="vanished">Las métricas son locales y no contienen credenciales.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7649" />
            <source>Policy export</source>
            <translation>Exportación de políticas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7650" />
            <source>Export policy</source>
            <translation>Política de exportación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7659" />
            <source>Compliance</source>
            <translation>Cumplimiento</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7683" />
            <source>Alert threshold must be a positive integer.</source>
            <translation>El umbral de alerta debe ser un número entero positivo.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7697" />
            <source>Governance settings saved.</source>
            <translation>Se guardaron los ajustes de gobernanza.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>Use OneAPI or legacy clients locally</source>
            <translation>Utilice OneAPI o clientes heredados localmente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>AI-assisted, tool-scoped exploration</source>
            <translation>Exploración basada en herramientas asistida por IA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>Export existing ZIA/ZPA configuration to Terraform</source>
            <translation>Exportar la configuración ZIA/ZPA existente a Terraform</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7704" />
            <source>Available</source>
            <translation>Disponible</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7704" />
            <source>Not installed</source>
            <translation>No instalado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7736" />
            <source>Prepare an integration first.</source>
            <translation>Prepare una integración primero.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6701" />
            <location filename="../zscaler_api_client.py" line="7739" />
            <source>Copied to clipboard</source>
            <translation>Copiado al portapapeles</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7481" />
            <source>The chain stopped after the first failed step.</source>
            <translation>La cadena se detuvo tras el primer paso fallido.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7633" />
            <location filename="../zscaler_api_client.py" line="7917" />
            <source>Enabled</source>
            <translation>Habilitado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7633" />
            <source>Disabled</source>
            <translation>Discapacitado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7639" />
            <source>Allow rule has no conditions</source>
            <translation>Permitir regla no tiene condiciones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7639" />
            <source>Rule is disabled</source>
            <translation>La regla está deshabilitada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7640" />
            <source>Rule name is duplicated</source>
            <translation>El nombre de la regla está duplicado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7640" />
            <source>Rule action is unspecified</source>
            <translation>La acción de la regla no está especificada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7669" />
            <source>Rules evaluated</source>
            <translation>Reglas evaluadas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7669" />
            <source>Matched rule</source>
            <translation>regla coincidente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7672" />
            <source>Matched</source>
            <translation>emparejado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7672" />
            <source>Not matched</source>
            <translation>No coincidente</translation>
        </message>
        <message>
            <source>Webhook test</source>
            <translation type="vanished">prueba de webhook</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7853" />
            <source>Configure a webhook endpoint in Governance first.</source>
            <translation>Primero configure un punto final de webhook en Gobernanza.</translation>
        </message>
        <message>
            <source>Webhook endpoints must use HTTPS unless they are local.</source>
            <translation type="vanished">Los puntos finales de webhook deben utilizar HTTPS a menos que sean locales.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7845" />
            <source>Send a masked connectivity test to the configured webhook endpoint?</source>
            <translation>¿Enviar una prueba de conectividad enmascarada al punto final del webhook configurado?</translation>
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
            <location filename="../zscaler_api_client.py" line="7929" />
            <location filename="../zscaler_api_client.py" line="7947" />
            <location filename="../zscaler_api_client.py" line="7949" />
            <location filename="../zscaler_api_client.py" line="7963" />
            <location filename="../zscaler_api_client.py" line="7979" />
            <location filename="../zscaler_api_client.py" line="7985" />
            <location filename="../zscaler_api_client.py" line="7998" />
            <location filename="../zscaler_api_client.py" line="8001" />
            <location filename="../zscaler_api_client.py" line="8005" />
            <location filename="../zscaler_api_client.py" line="8014" />
            <location filename="../zscaler_api_client.py" line="8028" />
            <location filename="../zscaler_api_client.py" line="8037" />
            <source>Scheduled report</source>
            <translation>Informe programado</translation>
        </message>
        <message>
            <source>Report name and cadence:</source>
            <translation type="vanished">Nombre y cadencia del informe:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8040" />
            <source>Save support bundle</source>
            <translation>Guardar paquete de soporte</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8045" />
            <source>Support bundle</source>
            <translation>Paquete de soporte</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8045" />
            <source>A redacted support bundle was created.</source>
            <translation>Se creó un paquete de soporte redactado.</translation>
        </message>
    </context>
    <context>
        <name>PacWorkspaceDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="8112" />
            <location filename="../zscaler_api_client.py" line="8437" />
            <source>PAC Workspace</source>
            <translation>Espacio de trabajo del PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8116" />
            <source>Create and verify PAC files locally. API operations are prepared in the request editor and are never sent or deployed automatically.</source>
            <translation>Cree y verifique archivos PAC localmente. Las operaciones API se preparan en el editor de solicitudes y nunca se envían ni implementan automáticamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8121" />
            <source>PAC experience:</source>
            <translation>Experiencia PAC:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8123" />
            <source>Guided (recommended)</source>
            <translation>Guiado (recomendado)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8124" />
            <source>Advanced</source>
            <translation>Avanzado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8141" />
            <source>PAC name:</source>
            <translation>Nombre del PAC:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8142" />
            <source>Change note:</source>
            <translation>Nota de cambio:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8143" />
            <source>Hosted PAC URL (optional for ZCC):</source>
            <translation>URL de PAC alojada (opcional para ZCC):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8144" />
            <source>Existing ZIA PAC ID (for lifecycle actions):</source>
            <translation>ID ZIA PAC existente (para acciones de ciclo de vida):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8145" />
            <source>ZIA PAC version:</source>
            <translation>Versión ZIA PAC:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8146" />
            <source>ZIA version action:</source>
            <translation>Acción de versión ZIA:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8153" />
            <source>Start with a safe baseline. Enter only internal destinations that must bypass Zscaler; all other traffic uses the selected gateway and failover.</source>
            <translation>Comience con una base segura. Ingrese solo destinos internos que deban omitir Zscaler; el resto del tráfico utiliza la puerta de enlace seleccionada y la conmutación por error.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8161" />
            <source>Direct-bypass host patterns (one per line):</source>
            <translation>Patrones de host de derivación directa (uno por línea):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8162" />
            <source>Primary gateway:</source>
            <translation>Puerta de enlace principal:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8163" />
            <source>Secondary gateway:</source>
            <translation>Puerta de enlace secundaria:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8166" />
            <source>Create guided PAC</source>
            <translation>Crear PAC guiado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8167" />
            <source>Load safe example</source>
            <translation>Cargar ejemplo seguro</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8170" />
            <source>Generated PAC preview (read-only):</source>
            <translation>Generated PAC preview (read-only):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8177" />
            <source>Guided setup</source>
            <translation>Configuración guiada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8179" />
            <source>PAC JavaScript — include FindProxyForURL(url, host). Variables use ${NAME}.</source>
            <translation>PAC JavaScript — include FindProxyForURL(url, host). Variables use ${NAME}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8184" />
            <source>Color guide: blue = PAC structure, amber = DIRECT bypass, green = proxy route, purple = variable, cyan = Zscaler endpoint, orange = IP/network, red = performance-sensitive DNS helper.</source>
            <translation>Color guide: blue = PAC structure, amber = DIRECT bypass, green = proxy route, purple = variable, cyan = Zscaler endpoint, orange = IP/network, red = performance-sensitive DNS helper.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8188" />
            <source>Load PAC…</source>
            <translation>Cargar PAC...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8189" />
            <source>Save PAC…</source>
            <translation>Salva a PAC...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8190" />
            <source>Save local draft</source>
            <translation>Guardar borrador local</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8193" />
            <source>Author</source>
            <translation>Autor</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8196" />
            <source>Variables (JSON). Standard Zscaler names: </source>
            <translation>Variables (JSON). Nombres estándar de Zscaler: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8200" />
            <source>Test URL:</source>
            <translation>URL de prueba:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8202" />
            <source>Apply variables</source>
            <translation>Aplicar variables</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8203" />
            <source>Run static verification</source>
            <translation>Ejecutar verificación estática</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8204" />
            <source>Preview decision</source>
            <translation>Vista previa de la decisión</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8207" />
            <source>Verify</source>
            <translation>verificar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8210" />
            <source>PAC reference and review help. The verifier never executes JavaScript; validate in ZIA and test a pilot group before deployment.</source>
            <translation>Ayuda de revisión y referencia de PAC. El verificador nunca ejecuta JavaScript; validar en ZIA y probar un grupo piloto antes del despliegue.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8211" />
            <source>Variable or function</source>
            <translation>Variable o función</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8211" />
            <source>Purpose / guidance</source>
            <translation>Propósito/orientación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8219" />
            <source>Roll out in stages: validate, test representative URLs, stage to a small pilot group, then deploy. Prefer host-pattern checks; avoid DNS helpers in Client Connector PAC files where possible.</source>
            <translation>Implemente en etapas: valide, pruebe las URL representativas, realice la etapa en un pequeño grupo piloto y luego implemente. Prefiere verificaciones de patrones de host; Evite los asistentes de DNS en los archivos PAC de Client Connector siempre que sea posible.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8221" />
            <source>Help and reference</source>
            <translation>Ayuda y referencia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8224" />
            <source>Map supplied ZIA PAC metadata to ZCC forwarding-profile actions. Matches use hosted PAC URLs or an inline PAC content fingerprint; names alone are never treated as a match.</source>
            <translation>Map proporcionó metadatos de ZIA PAC a las acciones de perfil de reenvío de ZCC. Las coincidencias utilizan URL de PAC alojadas o una huella digital de contenido de PAC en línea; Los nombres por sí solos nunca se tratan como coincidencias.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8227" />
            <source>ZIA PAC list JSON</source>
            <translation>Lista JSON de ZIA PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8229" />
            <source>ZCC forwarding-profile list JSON</source>
            <translation>Lista de perfiles de reenvío ZCC JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8233" />
            <source>Build PAC mappings</source>
            <translation>Crear asignaciones de PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8234" />
            <location filename="../zscaler_api_client.py" line="8269" />
            <source>Prepare ZIA PAC list</source>
            <translation>Preparar lista ZIA PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8235" />
            <location filename="../zscaler_api_client.py" line="8261" />
            <source>Prepare ZCC profile list</source>
            <translation>Preparar lista de perfiles ZCC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>ZCC profile</source>
            <translation>Perfil ZCC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>Action / network</source>
            <translation>Acción / red</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>PAC type</source>
            <translation>tipo de PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>PAC reference</source>
            <translation>referencia PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>ZIA status</source>
            <translation>estado ZIA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>Mapping result</source>
            <translation>Resultado del mapeo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>Profile ID</source>
            <translation>ID de perfil</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8241" />
            <location filename="../zscaler_api_client.py" line="8350" />
            <source>PAC mappings</source>
            <translation>Mapeos de PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8244" />
            <source>Search the bundled Zscaler Configuration Center index of Cloud Enforcement Node ranges, proxy/VPN hostnames, GRE and extranet virtual IP addresses. The PAC editor shows a help balloon when a line references an indexed endpoint.</source>
            <translation>Busque en el índice incluido del Centro de configuración de Zscaler de rangos de nodos de cumplimiento de la nube, nombres de host de proxy/VPN, direcciones IP virtuales de GRE y extranet. El editor PAC muestra un globo de ayuda cuando una línea hace referencia a un punto final indexado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8248" />
            <source>Search city, CIDR, hostname, GRE or VPN address</source>
            <translation>Buscar ciudad, CIDR, nombre de host, dirección GRE o VPN</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8249" />
            <source>Search data centers</source>
            <translation>Buscar centros de datos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>Continent</source>
            <translation>Continente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>Data center</source>
            <translation>centro de datos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>CIDR range</source>
            <translation>rango CIDR</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>Proxy hostname</source>
            <translation>Nombre de host proxy</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>VPN hostname</source>
            <translation>nombre de host VPN</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>GRE VIP</source>
            <translation>GRE VIP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>Extranet VIP</source>
            <translation>Extranet VIP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>Coordinates</source>
            <translation>Coordenadas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8255" />
            <source>Zscaler data centers</source>
            <translation>Centros de datos Zscaler</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8258" />
            <source>Paste a forwarding profile returned by ZCC, or first prepare the profile-list request. Existing profile fields are preserved when PAC fields are updated.</source>
            <translation>Pegue un perfil de reenvío devuelto por ZCC o prepare primero la solicitud de lista de perfiles. Los campos de perfil existentes se conservan cuando se actualizan los campos de PAC.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8262" />
            <source>Prepare ZCC update</source>
            <translation>Preparar la actualización de ZCC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8264" />
            <source>ZCC / Mobile Portal</source>
            <translation>ZCC / Portal Móvil</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>Prepare ZIA validation</source>
            <translation>Preparar la validación ZIA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8268" />
            <source>Prepare ZIA hosted PAC upload</source>
            <translation>Prepare la carga del PAC alojado en ZIA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8270" />
            <source>Prepare ZIA version action</source>
            <translation>Preparar la acción de versión ZIA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8271" />
            <source>Close</source>
            <translation>Cerrar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8290" />
            <source>Guided mode creates a minimal, reviewable PAC. Switch to Advanced to edit JavaScript, update ZCC profiles, or prepare ZIA lifecycle actions.</source>
            <translation>El modo guiado crea un PAC mínimo y revisable. Cambie a Avanzado para editar JavaScript, actualizar perfiles ZCC o preparar acciones del ciclo de vida de ZIA.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8291" />
            <source>Advanced mode exposes the PAC editor, ZCC profile patching, and ZIA version lifecycle actions. Every write remains explicit.</source>
            <translation>El modo avanzado expone el editor PAC, la aplicación de parches al perfil ZCC y las acciones del ciclo de vida de la versión ZIA. Cada escritura sigue siendo explícita.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8302" />
            <source>Primary Zscaler gateway.</source>
            <translation>Primary Zscaler gateway.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8302" />
            <source>Secondary Zscaler gateway.</source>
            <translation>Secondary Zscaler gateway.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8303" />
            <source>Primary gateway with failover support.</source>
            <translation>Primary gateway with failover support.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8303" />
            <source>Secondary gateway with failover support.</source>
            <translation>Secondary gateway with failover support.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8304" />
            <source>Optional local deployment label.</source>
            <translation>Optional local deployment label.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8304" />
            <source>Zscaler cloud name.</source>
            <translation>Zscaler cloud name.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8305" />
            <source>Primary gateway for an explicit subcloud.</source>
            <translation>Primary gateway for an explicit subcloud.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8306" />
            <source>Secondary gateway for an explicit subcloud.</source>
            <translation>Secondary gateway for an explicit subcloud.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8309" />
            <source>Required PAC entry point; returns DIRECT, PROXY, or SOCKS.</source>
            <translation>Required PAC entry point; returns DIRECT, PROXY, or SOCKS.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8310" />
            <source>Matches a host without a DNS suffix.</source>
            <translation>Matches a host without a DNS suffix.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8311" />
            <source>Matches a DNS suffix.</source>
            <translation>Matches a DNS suffix.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8312" />
            <source>Matches a local host or fully qualified name.</source>
            <translation>Matches a local host or fully qualified name.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8313" />
            <source>Matches wildcard patterns such as *.example.com.</source>
            <translation>Matches wildcard patterns such as *.example.com.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8314" />
            <source>Counts DNS labels in a host name.</source>
            <translation>Counts DNS labels in a host name.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8315" />
            <source>Matches a weekday range.</source>
            <translation>Matches a weekday range.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8315" />
            <source>Matches a date range.</source>
            <translation>Matches a date range.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8316" />
            <source>Matches a time range.</source>
            <translation>Matches a time range.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8317" />
            <source>Resolves DNS; avoid in Client Connector PAC files unless required.</source>
            <translation>Resolves DNS; avoid in Client Connector PAC files unless required.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8318" />
            <source>Tests DNS resolution; avoid in Client Connector PAC files unless required.</source>
            <translation>Tests DNS resolution; avoid in Client Connector PAC files unless required.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8319" />
            <source>Tests a network; avoid in Client Connector PAC files unless required.</source>
            <translation>Tests a network; avoid in Client Connector PAC files unless required.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8328" />
            <source>Fix the guided input to generate a PAC preview: </source>
            <translation>Fix the guided input to generate a PAC preview: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8338" />
            <source>Guided PAC</source>
            <translation>PAC guiado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8342" />
            <source>Guided PAC created. Review the verification findings, test a URL, then prepare ZIA validation.</source>
            <translation>PAC guiado creado. Revise los resultados de la verificación, pruebe una URL y luego prepare la validación ZIA.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8350" />
            <source>Both mapping inputs must be valid JSON: </source>
            <translation>Ambas entradas de mapeo deben ser JSON válido: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8359" />
            <source>Mapped actions: {total}; confirmed mappings: {matched}; unresolved hosted URLs: {unresolved}.</source>
            <translation>Mapped actions: {total}; confirmed mappings: {matched}; unresolved hosted URLs: {unresolved}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8380" />
            <source>{matches} matching endpoint records from {total} indexed Zscaler data-center records. Source: {source}</source>
            <translation>{matches} matching endpoint records from {total} indexed Zscaler data-center records. Source: {source}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8389" />
            <location filename="../zscaler_api_client.py" line="8391" />
            <location filename="../zscaler_api_client.py" line="8418" />
            <source>PAC variables</source>
            <translation>variables de la PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8389" />
            <source>Variables must be valid JSON: </source>
            <translation>Las variables deben ser JSON válido: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8391" />
            <source>Variables must be a JSON object with text or numeric values.</source>
            <translation>Las variables deben ser un objeto JSON con texto o valores numéricos.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8400" />
            <source>none</source>
            <translation>ninguno</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8401" />
            <source>Detected variables: </source>
            <translation>Variables detectadas: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8405" />
            <source>Improvement tips:</source>
            <translation>Consejos de mejora:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8417" />
            <source>Variables applied.</source>
            <translation>Variables aplicadas.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8417" />
            <source>Variables applied; missing values were retained: </source>
            <translation>Variables aplicadas; Se mantuvieron los valores faltantes: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8422" />
            <source>Preview</source>
            <translation>Vista previa</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8437" />
            <source>PAC draft saved locally.</source>
            <translation>Borrador de PAC guardado localmente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8440" />
            <location filename="../zscaler_api_client.py" line="8445" />
            <source>Load PAC</source>
            <translation>Cargar PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8448" />
            <location filename="../zscaler_api_client.py" line="8453" />
            <source>Save PAC</source>
            <translation>Guardar PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8461" />
            <source>PAC request prepared</source>
            <translation>Solicitud de PAC preparada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8461" />
            <source>The request was placed in the main editor. Review it and explicitly select Send Request; no deployment action has been performed.</source>
            <translation>La solicitud se realizó en el editor principal. Revíselo y seleccione explícitamente Enviar solicitud; no se ha realizado ninguna acción de implementación.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8466" />
            <source>PAC verification</source>
            <translation>verificación de PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8466" />
            <source>Resolve PAC errors before preparing an API write.</source>
            <translation>Resuelva los errores de PAC antes de preparar una escritura de API.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8482" />
            <source>ZIA PAC lifecycle</source>
            <translation>Ciclo de vida del ZIA PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8482" />
            <source>Enter a numeric PAC ID and version before preparing a lifecycle action.</source>
            <translation>Introduzca un ID y una versión de PAC numéricos antes de preparar una acción del ciclo de vida.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8496" />
            <location filename="../zscaler_api_client.py" line="8498" />
            <source>ZCC forwarding profile</source>
            <translation>Perfil de reenvío ZCC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8496" />
            <source>Profile must be valid JSON: </source>
            <translation>El perfil debe ser JSON válido: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8498" />
            <source>Paste one ZCC forwarding profile object with its id before preparing an update.</source>
            <translation>Pegue un objeto de perfil de reenvío ZCC con su identificación antes de preparar una actualización.</translation>
        </message>
    </context>
    <context>
        <name>PolicyTwinGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3871" />
            <source>{count} condition(s)</source>
            <translation>{count} condition(s)</translation>
        </message>
    </context>
    <context>
        <name>ResponseComparisonDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="6055" />
            <location filename="../zscaler_api_client.py" line="6115" />
            <source>Response drift comparison</source>
            <translation>Comparación de deriva de respuesta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6057" />
            <source>Compare the active masked response with a local ZS API Exchange baseline. Matching records are aligned by id, UUID, resourceId, key, or name. No API request is sent.</source>
            <translation>Compare la respuesta enmascarada activa con una línea base de ZS API Exchange local. Los registros coincidentes se alinean por ID, UUID, ResourceId, clave o nombre. No se envía ninguna solicitud de API.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6060" />
            <source>Baseline:</source>
            <translation>Línea de base:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6061" />
            <source>Choose a masked response exchange file</source>
            <translation>Elija un archivo de intercambio de respuestas enmascaradas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6062" />
            <source>Open baseline…</source>
            <translation>Abrir línea de base...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6065" />
            <source>Ignore volatile fields:</source>
            <translation>Ignorar campos volátiles:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6067" />
            <source>Comma-separated field names ignored at every JSON depth. Secrets are always masked independently.</source>
            <translation>Los nombres de campos separados por comas se ignoran en cada profundidad JSON. Los secretos siempre se enmascaran por sí solos.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6068" />
            <source>Compare responses</source>
            <translation>Comparar respuestas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6070" />
            <source>Open a baseline to calculate drift.</source>
            <translation>Abra una línea base para calcular la deriva.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>Impact</source>
            <translation>Impacto</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>Change</source>
            <translation>Cambiar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>JSON path</source>
            <translation>ruta JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>Identity</source>
            <translation>Identidad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>Baseline value</source>
            <translation>Valor de referencia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>Current value</source>
            <translation>Valor actual</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6077" />
            <source>Export masked drift…</source>
            <translation>Exportar deriva enmascarada...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6078" />
            <source>Close</source>
            <translation>Cerrar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6087" />
            <location filename="../zscaler_api_client.py" line="6092" />
            <source>Open response baseline</source>
            <translation>Línea base de respuesta abierta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6115" />
            <source>Open a baseline response exchange first.</source>
            <translation>Primero abra un intercambio de respuestas de referencia.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6122" />
            <source>No drift found in the compared scope.</source>
            <translation>No se encontró ninguna desviación en el alcance comparado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6124" />
            <source>{total} change(s): {added} added, {removed} removed, {changed} changed · {high} high-impact</source>
            <translation>{total} change(s): {added} added, {removed} removed, {changed} changed · {high} high-impact</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6127" />
            <source>Result truncated at {maximum} changes</source>
            <translation>Result truncated at {maximum} changes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6128" />
            <source>Baseline {baseline} · current {current}</source>
            <translation>Baseline {baseline} · current {current}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6129" />
            <source>Added</source>
            <translation>Añadido</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6129" />
            <source>Removed</source>
            <translation>Eliminado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6129" />
            <source>Changed</source>
            <translation>cambiado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6129" />
            <source>High impact</source>
            <translation>Alto impacto</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6145" />
            <source>Export masked drift</source>
            <translation>Exportar deriva enmascarada</translation>
        </message>
    </context>
    <context>
        <name>SettingsDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4626" />
            <source>Settings</source>
            <translation>Configuración</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4652" />
            <source>ZIA (Zscaler Internet Access)</source>
            <translation>ZIA (Acceso a Internet Zscaler)</translation>
        </message>
        <message>
            <source>Cloud:</source>
            <translation type="vanished">Nube:</translation>
        </message>
        <message>
            <source>API Key:</source>
            <translation type="vanished">Clave API:</translation>
        </message>
        <message>
            <source>Username:</source>
            <translation type="vanished">Usuario:</translation>
        </message>
        <message>
            <source>Password:</source>
            <translation type="vanished">Contraseña:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4686" />
            <source>ZPA (Zscaler Private Access)</source>
            <translation>ZPA (Acceso privado a Zscaler)</translation>
        </message>
        <message>
            <source>Client ID:</source>
            <translation type="vanished">ID de cliente:</translation>
        </message>
        <message>
            <source>Client Secret:</source>
            <translation type="vanished">Secreto de cliente:</translation>
        </message>
        <message>
            <source>Customer ID:</source>
            <translation type="vanished">ID de cliente:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4718" />
            <source>ZDX (Zscaler Digital Experience)</source>
            <translation>ZDX (Experiencia digital Zscaler)</translation>
        </message>
        <message>
            <source>Key ID:</source>
            <translation type="vanished">ID de clave:</translation>
        </message>
        <message>
            <source>Key Secret:</source>
            <translation type="vanished">Secreto de clave:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4752" />
            <source>ZCC (Client Connector)</source>
            <translation>ZCC (conector de cliente)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4817" />
            <source>ZIdentity (Identity &amp; Access)</source>
            <translation>ZIdentity (Identidad y acceso)</translation>
        </message>
        <message>
            <source>Vanity Domain:</source>
            <translation type="vanished">Dominio personalizado:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4844" />
            <source>ZTW (Zero Trust Workloads)</source>
            <translation>ZTW (cargas de trabajo de confianza cero)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4871" />
            <source>ZWA (Workflow Automation)</source>
            <translation>ZWA (Automatización del flujo de trabajo)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4898" />
            <source>EASM (Attack Surface Management)</source>
            <translation>EASM (Gestión de la superficie de ataque)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4930" />
            <location filename="../zscaler_api_client.py" line="5205" />
            <source>Credentials</source>
            <translation>Credenciales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4937" />
            <source>Network</source>
            <translation>Red</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4945" />
            <source>Request Timeout (seconds):</source>
            <translation>Tiempo de espera (segundos):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4658" />
            <location filename="../zscaler_api_client.py" line="4692" />
            <location filename="../zscaler_api_client.py" line="4724" />
            <location filename="../zscaler_api_client.py" line="4758" />
            <location filename="../zscaler_api_client.py" line="4786" />
            <location filename="../zscaler_api_client.py" line="4823" />
            <location filename="../zscaler_api_client.py" line="4850" />
            <location filename="../zscaler_api_client.py" line="4877" />
            <location filename="../zscaler_api_client.py" line="4904" />
            <location filename="../zscaler_api_client.py" line="4953" />
            <location filename="../zscaler_api_client.py" line="4969" />
            <location filename="../zscaler_api_client.py" line="5017" />
            <location filename="../zscaler_api_client.py" line="5023" />
            <location filename="../zscaler_api_client.py" line="5041" />
            <location filename="../zscaler_api_client.py" line="5065" />
            <source>Enabled</source>
            <translation>Activado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4780" />
            <source>OneAPI (Unified v3 Framework)</source>
            <translation>OneAPI (Marco unificado v3)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4953" />
            <location filename="../zscaler_api_client.py" line="4969" />
            <location filename="../zscaler_api_client.py" line="5017" />
            <location filename="../zscaler_api_client.py" line="5023" />
            <location filename="../zscaler_api_client.py" line="5041" />
            <location filename="../zscaler_api_client.py" line="5065" />
            <source>Disabled</source>
            <translation>Desactivado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4970" />
            <source>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</source>
            <translation>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4975" />
            <source>SSL Verification:</source>
            <translation>Verificación SSL:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4980" />
            <source>Proxy</source>
            <translation>apoderado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4986" />
            <source>No Proxy</source>
            <translation>Sin proxy</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4986" />
            <source>System Proxy</source>
            <translation>Proxy del sistema</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4986" />
            <source>Manual</source>
            <translation>manuales</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4988" />
            <source>Proxy Mode:</source>
            <translation>Modo proxy:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4992" />
            <source>Proxy Host:</source>
            <translation>Host del proxy:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4997" />
            <source>Proxy Port:</source>
            <translation>Puerto del proxy:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5000" />
            <location filename="../zscaler_api_client.py" line="5005" />
            <source>Optional</source>
            <translation>Opcional</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5001" />
            <source>Proxy Username:</source>
            <translation>Usuario del proxy:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5006" />
            <source>Proxy Password:</source>
            <translation>Contraseña del proxy:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5011" />
            <source>Behavior</source>
            <translation>Comportamiento</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5018" />
            <source>Auto-authenticate on startup:</source>
            <translation>Auto-autenticar al iniciar:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5024" />
            <source>Save request history:</source>
            <translation>Guardar historial:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5030" />
            <source>History limit:</source>
            <translation>Límite de historial:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5036" />
            <source>Default API:</source>
            <translation>API predeterminada:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5042" />
            <source>Check for updates on startup:</source>
            <translation>Buscar actualizaciones al iniciar:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4633" />
            <location filename="../zscaler_api_client.py" line="5047" />
            <source>Advanced</source>
            <translation>Avanzado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4632" />
            <source>Basic</source>
            <translation>Básico</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4635" />
            <source>Interface mode:</source>
            <translation>Modo de interfaz:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4742" />
            <source>API version:</source>
            <translation>Versión API:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4950" />
            <source>Maximum upload/download (MB):</source>
            <translation>Carga/descarga máxima (MB):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4954" />
            <source>Retry only GET, HEAD, and OPTIONS after transient network errors or HTTP 408, 429, 502, 503, and 504. Write requests are never retried automatically.</source>
            <translation>Reintente solo GET, HEAD y OPTIONS después de errores de red transitorios o HTTP 408, 429, 502, 503 y 504. Las solicitudes de escritura nunca se reintentan automáticamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4955" />
            <source>Retry safe reads:</source>
            <translation>Reintentar lecturas seguras:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4959" />
            <source>Maximum read retries:</source>
            <translation>Reintentos de lectura máximos:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4963" />
            <source>Maximum seconds to honor from Retry-After; shorter exponential backoff is used when the server omits it.</source>
            <translation>Segundos máximos para honrar desde Reintentar después; Se utiliza un retroceso exponencial más corto cuando el servidor lo omite.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4964" />
            <source>Maximum retry wait (seconds):</source>
            <translation>Espera máxima de reintento (segundos):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5053" />
            <source>Response Display</source>
            <translation>Visualización de respuesta</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5060" />
            <source>JSON Indentation:</source>
            <translation>Sangría JSON:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5066" />
            <source>Word Wrap:</source>
            <translation>Ajuste de línea:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5072" />
            <source>Font Size:</source>
            <translation>Tamaño de fuente:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5077" />
            <source>Light</source>
            <translation>Claro</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5077" />
            <source>Dark</source>
            <translation>Oscuro</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5077" />
            <source>System</source>
            <translation>Sistema</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5078" />
            <source>Theme:</source>
            <translation>Tema:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5083" />
            <source>Display</source>
            <translation>Visualización</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5088" />
            <location filename="../zscaler_api_client.py" line="5123" />
            <location filename="../zscaler_api_client.py" line="5200" />
            <location filename="../zscaler_api_client.py" line="5205" />
            <source>Privacy</source>
            <translation>Privacidad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5091" />
            <source>Secrets only (identifiers visible)</source>
            <translation>Solo secretos (identificadores visibles)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5092" />
            <source>Obfuscate exports and external integrations (recommended)</source>
            <translation>Ofuscar exportaciones e integraciones externas (recomendado)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5093" />
            <source>Obfuscate exports, integrations, and on-screen data</source>
            <translation>Ofuscar exportaciones, integraciones y datos en pantalla</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5095" />
            <source>Identifier obfuscation:</source>
            <translation>Ofuscación del identificador:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5096" />
            <source>Credentials and authentication material are always masked. Identifier pseudonyms are stable until the local pseudonym key is rotated; no original-to-pseudonym mapping is stored.</source>
            <translation>Las credenciales y el material de autenticación siempre están enmascarados. Los seudónimos de los identificadores son estables hasta que se rota la clave del seudónimo local; no se almacena ninguna asignación de original a seudónimo.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5098" />
            <source>Usernames, display names, and email addresses</source>
            <translation>Nombres de usuario, nombres para mostrar y direcciones de correo electrónico</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5099" />
            <source>IPv4 and IPv6 addresses</source>
            <translation>Direcciones IPv4 e IPv6</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5100" />
            <source>Hostnames, domains, and URL hosts</source>
            <translation>Nombres de host, dominios y hosts de URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5101" />
            <source>Tenant, customer, organization, and environment names</source>
            <translation>Nombres de inquilinos, clientes, organizaciones y entornos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5102" />
            <source>Object IDs, UUIDs, GUIDs, and client identifiers</source>
            <translation>ID de objeto, UUID, GUID e identificadores de cliente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5103" />
            <source>Policy, application, group, location, and resource names</source>
            <translation>Nombres de políticas, aplicaciones, grupos, ubicaciones y recursos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5110" />
            <source>Rotate local pseudonym key</source>
            <translation>Rotar clave de seudónimo local</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5111" />
            <source>Creates new pseudonyms for future views and exports. Existing files are not modified.</source>
            <translation>Crea nuevos seudónimos para futuras vistas y exportaciones. Los archivos existentes no se modifican.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5114" />
            <location filename="../zscaler_api_client.py" line="5236" />
            <location filename="../zscaler_api_client.py" line="5242" />
            <source>Rotate evidence signing key</source>
            <translation>Rotar la clave de firma de pruebas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5115" />
            <source>Creates a new Ed25519 key in the system keychain. Existing signed packages remain verifiable with their embedded public keys.</source>
            <translation>Crea una nueva clave Ed25519 en el llavero del sistema. Los paquetes firmados existentes siguen siendo verificables con sus claves públicas integradas.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5118" />
            <location filename="../zscaler_api_client.py" line="5200" />
            <source>Obfuscation preview</source>
            <translation>Vista previa de ofuscación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5120" />
            <source>Preview of exported or externally shared data using synthetic examples:</source>
            <translation>Vista previa de datos exportados o compartidos externamente mediante ejemplos sintéticos:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5128" />
            <location filename="../zscaler_api_client.py" line="5167" />
            <location filename="../zscaler_api_client.py" line="5200" />
            <location filename="../zscaler_api_client.py" line="5205" />
            <source>Language</source>
            <translation>Idioma</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5131" />
            <source>System default</source>
            <translation>Valor predeterminado del sistema</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5134" />
            <source>Application language:</source>
            <translation>Idioma de aplicación:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5135" />
            <source>System default follows your operating system language. Restart after saving to apply a change.</source>
            <translation>La configuración predeterminada del sistema sigue el idioma de su sistema operativo. Reinicie después de guardar para aplicar un cambio.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5138" />
            <location filename="../zscaler_api_client.py" line="5200" />
            <source>AI / LLM</source>
            <translation>IA / Máster en Derecho</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5141" />
            <source>Local catalog assistant</source>
            <translation>Asistente de catalogo local</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5142" />
            <source>OpenAI-compatible cloud</source>
            <translation>Nube compatible con OpenAI</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5143" />
            <source>Local OpenAI-compatible server</source>
            <translation>Servidor local compatible con OpenAI</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5144" />
            <source>AI provider:</source>
            <translation>Proveedor de IA:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5147" />
            <source>AI endpoint:</source>
            <translation>Punto final de IA:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5149" />
            <source>Model:</source>
            <translation>Modelo:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5152" />
            <source>Stored securely in your system keychain</source>
            <translation>Almacenado de forma segura en el llavero de su sistema</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5153" />
            <source>API key:</source>
            <translation>Clave API:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5154" />
            <source>Allow this app to send the masked question and catalog metadata to an external AI service</source>
            <translation>Permita que esta aplicación envíe la pregunta enmascarada y los metadatos del catálogo a un servicio de inteligencia artificial externo.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5157" />
            <source>Clear AI key</source>
            <translation>Borrar clave AI</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5160" />
            <source>Test AI connection</source>
            <translation>Probar la conexión de IA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5224" />
            <location filename="../zscaler_api_client.py" line="5233" />
            <source>Rotate pseudonym key</source>
            <translation>Girar clave de seudónimo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5225" />
            <source>Rotate the local pseudonym key? Future pseudonyms will change and will no longer correlate with previous exports.</source>
            <translation>¿Girar la clave del seudónimo local? Los seudónimos futuros cambiarán y ya no se correlacionarán con exportaciones anteriores.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5233" />
            <source>The local pseudonym key was rotated. No credentials or source identifiers were stored.</source>
            <translation>Se rotó la clave del seudónimo local. No se almacenaron credenciales ni identificadores de fuente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5236" />
            <source>Create a new local evidence signing identity? Existing signed packages remain verifiable, but future packages will have a different public-key fingerprint.</source>
            <translation>¿Crear una nueva identidad de firma de evidencia local? Los paquetes firmados existentes siguen siendo verificables, pero los paquetes futuros tendrán una huella digital de clave pública diferente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5239" />
            <source>Signed evidence</source>
            <translation>evidencia firmada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5239" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>El llavero del sistema no pudo almacenar la clave de firma de pruebas.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5242" />
            <source>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</source>
            <translation>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5248" />
            <source>Restore Defaults</source>
            <translation>Restaurar valores predeterminados</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5249" />
            <source>This will reset all advanced settings to defaults. Continue?</source>
            <translation>Esto restablecerá todas las configuraciones avanzadas a los valores predeterminados. ¿Continuar?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5371" />
            <source>Configured securely in your system keychain</source>
            <translation>Configurado de forma segura en el llavero de su sistema</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5378" />
            <source>AI key cleared</source>
            <translation>Clave AI borrada</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5384" />
            <location filename="../zscaler_api_client.py" line="5387" />
            <location filename="../zscaler_api_client.py" line="5395" />
            <location filename="../zscaler_api_client.py" line="5396" />
            <source>AI connection</source>
            <translation>Conexión de IA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5384" />
            <source>Local catalog assistant is ready.</source>
            <translation>El asistente del catálogo local está listo.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5387" />
            <source>Enter an AI endpoint first.</source>
            <translation>Primero ingrese un punto final de IA.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5393" />
            <source>AI connection succeeded.</source>
            <translation>La conexión de IA se realizó correctamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5396" />
            <source>AI connection failed: {error}</source>
            <translation>AI connection failed: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5410" />
            <source>ZIA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZIA Cloud: prefijo de URL eliminado (solo se necesita el nombre de host)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5417" />
            <source>ZPA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZPA Cloud: prefijo de URL eliminado (solo se necesita el nombre de host)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5423" />
            <source>{product} Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>{product} Cloud: Removed URL prefix (only hostname needed)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5428" />
            <source>ZPA: Customer ID is empty — required for most ZPA endpoints</source>
            <translation>ZPA: el ID de cliente está vacío; se requiere para la mayoría de los puntos finales ZPA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5430" />
            <source>ZPA: Customer ID should be numeric (got '{value}')</source>
            <translation>ZPA: Customer ID should be numeric (got '{value}')</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5438" />
            <source>OneAPI: Removed URL prefix from vanity domain</source>
            <translation>OneAPI: Se eliminó el prefijo de URL del dominio personalizado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5442" />
            <source>OneAPI: Removed .zslogin.net suffix — only the prefix is needed (e.g. 'acme')</source>
            <translation>OneAPI: se eliminó el sufijo .zslogin.net; solo se necesita el prefijo (por ejemplo, 'acme')</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5444" />
            <source>OneAPI: Vanity domain usually has no dots (e.g. 'acme', not '{value}')</source>
            <translation>OneAPI: Vanity domain usually has no dots (e.g. 'acme', not '{value}')</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5450" />
            <source>OneAPI: Cloud should be empty (production) or a simple name like 'beta'/'alpha'. Got '{value}' — this looks like a full domain. Leave empty for production.</source>
            <translation>OneAPI: Cloud should be empty (production) or a simple name like 'beta'/'alpha'. Got '{value}' — this looks like a full domain. Leave empty for production.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5458" />
            <source>OneAPI: Customer ID should be numeric (got '{value}')</source>
            <translation>OneAPI: Customer ID should be numeric (got '{value}')</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5466" />
            <source>ZIdentity: Removed URL prefix from domain</source>
            <translation>ZIdentity: Se eliminó el prefijo de URL del dominio</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5470" />
            <source>ZIA is enabled but Cloud is empty</source>
            <translation>ZIA está habilitado pero la nube está vacía</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5472" />
            <source>ZCC is enabled but Cloud host is empty</source>
            <translation>ZCC está habilitado pero el host de la nube está vacío</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5474" />
            <source>OneAPI is enabled but Vanity Domain is empty</source>
            <translation>OneAPI está habilitado pero Vanity Domain está vacío</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5476" />
            <source>OneAPI is enabled but Client ID is empty</source>
            <translation>OneAPI está habilitada pero el ID de cliente está vacío</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5491" />
            <source>Settings Validation</source>
            <translation>Validación de configuración</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5492" />
            <source>Some settings were adjusted or may need attention:</source>
            <translation>Algunas configuraciones se ajustaron o pueden necesitar atención:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5496" />
            <source>Save Anyway</source>
            <translation>Guardar de todos modos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5497" />
            <source>Go Back</source>
            <translation>Volver</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5522" />
            <source>Secure storage</source>
            <translation>Almacenamiento seguro</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5522" />
            <source>The system keychain could not save one or more secrets. No secret changes were applied.</source>
            <translation>El llavero del sistema no pudo guardar uno o más secretos. No se aplicaron cambios secretos.</translation>
        </message>
    </context>
    <context>
        <name>SetupWizard</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4172" />
            <source>Getting Started Wizard</source>
            <translation>Asistente de introducción</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4191" />
            <source>Back</source>
            <translation>Atrás</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4195" />
            <source>Open full settings</source>
            <translation>Abrir configuración completa</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4198" />
            <location filename="../zscaler_api_client.py" line="4321" />
            <source>Continue</source>
            <translation>Continuar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4209" />
            <source>Abstract zero trust security network</source>
            <translation>Red de seguridad abstracta de confianza cero</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4211" />
            <source>&lt;h1&gt;Welcome to ZS API Client&lt;/h1&gt;</source>
            <translation>&lt;h1&gt;Welcome to ZS API Client&lt;/h1&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4214" />
            <source>&lt;p&gt;This guide sets up secure OneAPI access and prepares common requests. Credentials are stored in your system keychain; you can change any setting later.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Recommended:&lt;/b&gt; use OneAPI for a unified token across supported Zscaler services.&lt;/p&gt;</source>
            <translation>&lt;p&gt;This guide sets up secure OneAPI access and prepares common requests. Credentials are stored in your system keychain; you can change any setting later.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Recommended:&lt;/b&gt; use OneAPI for a unified token across supported Zscaler services.&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4222" />
            <source>Basic</source>
            <translation>Básico</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4223" />
            <source>Advanced</source>
            <translation>Avanzado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4225" />
            <source>Setup mode:</source>
            <translation>Modo de configuración:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4233" />
            <source>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4234" />
            <source>Create an API client with the required roles in ZIdentity, then enter its details below.</source>
            <translation>Cree un cliente API con los roles requeridos en ZIdentity, luego ingrese sus detalles a continuación.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4240" />
            <source>Vanity domain</source>
            <translation>Dominio de vanidad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4242" />
            <source>Client ID</source>
            <translation>ID de cliente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4245" />
            <source>Client secret</source>
            <translation>secreto del cliente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4247" />
            <source>Leave empty for production; use beta or alpha when applicable</source>
            <translation>Dejar vacío para producción; use beta o alfa cuando corresponda</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4248" />
            <source>Cloud</source>
            <translation>nube</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4250" />
            <source>Optional; required for many ZPA requests</source>
            <translation>Opcional; requerido para muchas solicitudes ZPA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4251" />
            <source>ZPA customer ID</source>
            <translation>ID de cliente ZPA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4281" />
            <source>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4282" />
            <source>Choose a common operation. The wizard will load it into the request builder with required path variables highlighted.</source>
            <translation>Elija una operación común. El asistente lo cargará en el generador de solicitudes con las variables de ruta requeridas resaltadas.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4340" />
            <source>Secure storage</source>
            <translation>Almacenamiento seguro</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4340" />
            <source>The system keychain could not save the secret. Check the keychain service and try again.</source>
            <translation>El llavero del sistema no pudo guardar el secreto. Verifique el servicio de llavero e inténtelo nuevamente.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4272" />
            <location filename="../zscaler_api_client.py" line="4286" />
            <source>Just explore the API catalog</source>
            <translation>Simplemente explore el catálogo de API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4153" />
            <source>ZIA · List users</source>
            <translation>ZIA · Listar usuarios</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4154" />
            <source>ZIA · List URL categories</source>
            <translation>ZIA · Listar categorías de URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4155" />
            <source>ZIA · Check activation status</source>
            <translation>ZIA · Consultar estado de activación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4156" />
            <source>ZIA · List cloud firewall policies</source>
            <translation>ZIA · Listar políticas de firewall en la nube</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4157" />
            <source>ZPA · List application segments</source>
            <translation>ZPA · Listar segmentos de aplicaciones</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4158" />
            <source>ZPA · List segment groups</source>
            <translation>ZPA · Listar grupos de segmentos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4159" />
            <source>ZPA · List connectors</source>
            <translation>ZPA · Listado de conectores</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4160" />
            <source>ZDX · List devices and experience scores</source>
            <translation>ZDX · Listar dispositivos y puntuaciones de experiencia</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4161" />
            <source>ZDX · List active alerts</source>
            <translation>ZDX · Listar alertas activas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4162" />
            <source>ZDX · List monitored applications</source>
            <translation>ZDX · Lista de aplicaciones monitoreadas</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4163" />
            <source>Client Connector · List devices</source>
            <translation>Conector de cliente · Listar dispositivos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4164" />
            <source>ZIdentity · List users</source>
            <translation>ZIdentity · Listar usuarios</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4165" />
            <source>ZIdentity · List groups</source>
            <translation>ZIdentity · Listar grupos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4166" />
            <source>AI Security · List workloads</source>
            <translation>Seguridad de IA · Listar cargas de trabajo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4290" />
            <source>Authenticate immediately after finishing</source>
            <translation>Autenticar inmediatamente después de terminar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4299" />
            <source>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4301" />
            <source>The API Explorer contains the complete bundled catalog. Use the Documentation tab for endpoint details, the Console tab for request activity, and Request History to replay safe, redacted requests.</source>
            <translation>API Explorer contiene el catálogo completo incluido. Utilice la pestaña Documentación para obtener detalles del punto final, la pestaña Consola para ver la actividad de solicitudes y el Historial de solicitudes para reproducir solicitudes censuradas y seguras.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4319" />
            <source>Step {current} of {total}</source>
            <translation>Step {current} of {total}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4321" />
            <source>Finish</source>
            <translation>terminar</translation>
        </message>
    </context>
    <context>
        <name>SocEntityGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Identity</source>
            <translation>Identidad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Address</source>
            <translation>Dirección</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Device</source>
            <translation>Dispositivo</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Application</source>
            <translation>Solicitud</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Policy</source>
            <translation>Política</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Service</source>
            <translation>Servicio</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Endpoint</source>
            <translation>Punto final</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Infrastructure</source>
            <translation>Infraestructura</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Indicator</source>
            <translation>Indicador</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Activity</source>
            <translation>Actividad</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Environment</source>
            <translation>Medio ambiente</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Resource</source>
            <translation>Recurso</translation>
        </message>
    </context>
    <context>
        <name>SplashScreen</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4395" />
            <source>Loading...</source>
            <translation>Cargando...</translation>
        </message>
    </context>
    <context>
        <name>WelcomeDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3997" />
            <source>Welcome to ZS API Client</source>
            <translation>Bienvenido a ZS API Client</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4009" />
            <source>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</source>
            <translation>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4022" />
            <source>Supported APIs</source>
            <translation>APIs compatibles</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4025" />
            <source>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</source>
            <translation>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4041" />
            <source>Getting Started</source>
            <translation>Primeros pasos</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4044" />
            <source>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</source>
            <translation>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4057" />
            <source>Tips for Advanced Users</source>
            <translation>Consejos para usuarios avanzados</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4060" />
            <source>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4074" />
            <source>Documentation</source>
            <translation>Documentación</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4095" />
            <source>Show this dialog on startup</source>
            <translation>Mostrar este diálogo al iniciar</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4103" />
            <source>Open Settings</source>
            <translation>Abrir configuración</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4107" />
            <source>Get Started</source>
            <translation>Comenzar</translation>
        </message>
    </context>
    <context>
        <name>owner</name>
        <message>
            <location filename="../zscaler_api_client.py" line="431" />
            <source>Default</source>
            <translation>Predeterminado</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="644" />
            <source>The response export is unavailable, is a symbolic link, or exceeds the configured transfer limit.</source>
            <translation>La exportación de respuesta no está disponible, es un enlace simbólico o excede el límite de transferencia configurado.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="645" />
            <source>The response export is not valid UTF-8 JSON.</source>
            <translation>La exportación de respuesta no es UTF-8 JSON válido.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="646" />
            <source>This is not a supported ZS API response exchange file.</source>
            <translation>Este no es un archivo de intercambio de respuestas API de ZS compatible.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="647" />
            <source>The response exchange file is incomplete.</source>
            <translation>El archivo de intercambio de respuestas está incompleto.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="649" />
            <source>The response exchange file could not be opened.</source>
            <translation>No se pudo abrir el archivo de intercambio de respuestas.</translation>
        </message>
    </context>
    <context>
        <name>window</name>
        <message>
            <location filename="../zscaler_api_client.py" line="12210" />
            <source>Automatic Update Check</source>
            <translation>Comprobación de actualización automática</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12212" />
            <source>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</source>
            <translation>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</translation>
        </message>
    </context>
</TS>