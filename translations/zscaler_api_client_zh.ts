<?xml version='1.0' encoding='utf-8'?>
<TS version="2.1" language="zh-CN">
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
            <translation>关于 ZS API Client</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4482" />
            <source>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</source>
            <translation>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4515" />
            <source>Disclaimer</source>
            <translation>免责声明</translation>
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
            <translation>批量操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5765" />
            <source>Import a CSV file to perform batch operations. The CSV should have columns matching the API parameters.</source>
            <translation>导入CSV文件以执行批量操作。CSV应具有与API参数匹配的列。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5774" />
            <source>Select CSV file...</source>
            <translation>选择CSV文件...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5777" />
            <source>Browse...</source>
            <translation>浏览...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5789" />
            <source>Operation:</source>
            <translation>操作:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5793" />
            <source>Create Users (ZIA)</source>
            <translation>创建用户 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5794" />
            <source>Update Users (ZIA)</source>
            <translation>更新用户 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5795" />
            <source>Delete Users (ZIA)</source>
            <translation>删除用户 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5796" />
            <source>Create Locations (ZIA)</source>
            <translation>创建位置 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5797" />
            <source>URL Lookup (ZIA)</source>
            <translation>URL查询 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5798" />
            <source>Create App Segments (ZPA)</source>
            <translation>创建应用程序段 (ZPA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5824" />
            <source>Select CSV File</source>
            <translation>选择CSV文件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5854" />
            <source>Error</source>
            <translation>错误</translation>
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
            <translation>新功能</translation>
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
            <translation>以后更新时不要显示此内容</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4610" />
            <source>*Changelog not found*</source>
            <translation>*未找到更新日志*</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4631" />
            <source>*Could not load changelog: {error}*</source>
            <translation>*无法加载更新日志： {error} *</translation>
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
            <translation>环境概况</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6003" />
            <source>Each environment keeps separate tenant hosts, client identifiers, enabled products, and keychain credentials. Creating a profile copies only non-secret configuration. Activating a profile clears every in-memory API session.</source>
            <translation>每个环境都保留单独的租户主机、客户端标识符、启用的产品和钥匙串凭据。创建配置文件仅复制非秘密配置。激活配置文件会清除每个内存中的 API 会话。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Active</source>
            <translation>活跃</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Name</source>
            <translation>名称</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Default API</source>
            <translation>默认API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Configured host</source>
            <translation>配置主机</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Keychain secrets</source>
            <translation>钥匙扣的秘密</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6007" />
            <location filename="../zscaler_api_client.py" line="6040" />
            <source>Create profile</source>
            <translation>创建个人资料</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6008" />
            <location filename="../zscaler_api_client.py" line="6052" />
            <source>Rename profile</source>
            <translation>重命名个人资料</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6009" />
            <location filename="../zscaler_api_client.py" line="6063" />
            <location filename="../zscaler_api_client.py" line="6064" />
            <source>Delete profile</source>
            <translation>删除个人资料</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6010" />
            <source>Activate profile</source>
            <translation>激活个人资料</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6011" />
            <source>Close</source>
            <translation>关闭</translation>
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
            <translation>个人资料名称：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6044" />
            <location filename="../zscaler_api_client.py" line="6055" />
            <source>Enter a unique profile name without path separators (maximum 60 characters).</source>
            <translation>输入不带路径分隔符的唯一配置文件名称（最多 60 个字符）。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6047" />
            <source>The profile was created with non-secret settings only. Open Settings after activation to add its keychain credentials.</source>
            <translation>该配置文件仅使用非秘密设置创建。激活后打开“设置”以添加其钥匙串凭据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6063" />
            <source>The default or active profile cannot be deleted. Activate another profile first.</source>
            <translation>无法删除默认或活动的配置文件。首先激活另一个配置文件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6064" />
            <source>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</source>
            <translation>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6066" />
            <source>Secure storage</source>
            <translation>安全存储</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6066" />
            <source>The profile could not be deleted because its keychain credentials could not be removed.</source>
            <translation>无法删除该配置文件，因为无法删除其钥匙串凭据。</translation>
        </message>
    </context>
    <context>
        <name>ErrorCodesDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5695" />
            <source>API Error Codes Reference</source>
            <translation>API错误码参考</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5701" />
            <source>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5704" />
            <source>Common error codes and their meanings for each API.</source>
            <translation>每个 API 的常见错误代码及其含义。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5717" />
            <source>Code</source>
            <translation>代码</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5717" />
            <source>Name</source>
            <translation>名称</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5717" />
            <source>Description</source>
            <translation>描述</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5737" />
            <source>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5748" />
            <source>Close</source>
            <translation>关闭</translation>
        </message>
    </context>
    <context>
        <name>ExperienceJourneyGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3982" />
            <source>No journey telemetry in the current response</source>
            <translation>当前响应中没有旅程遥测</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4001" />
            <source>No observed data</source>
            <translation>无观测数据</translation>
        </message>
    </context>
    <context>
        <name>HighPerformanceLineChart</name>
        <message>
            <source>Latency</source>
            <translation type="vanished">延迟</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3813" />
            <source>Value</source>
            <translation>价值</translation>
        </message>
    </context>
    <context>
        <name>HistoryDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5875" />
            <source>Request History</source>
            <translation>请求历史</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5884" />
            <source>Search:</source>
            <translation>搜索:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5886" />
            <source>Filter by URL or method...</source>
            <translation>按 URL 或方法过滤...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5891" />
            <source>Current environment: {name}</source>
            <translation>Current environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5892" />
            <source>All environments</source>
            <translation>所有环境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5896" />
            <location filename="../zscaler_api_client.py" line="5973" />
            <source>Clear History</source>
            <translation>清除历史</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>Time</source>
            <translation>时间</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>Method</source>
            <translation>方法</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>URL</source>
            <translation>网址</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>Environment</source>
            <translation>环境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5906" />
            <source>Status</source>
            <translation>状态</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5906" />
            <source>Duration</source>
            <translation>持续时间</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5918" />
            <source>Load Request</source>
            <translation>加载请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5922" />
            <source>Close</source>
            <translation>关闭</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5946" />
            <source>Default</source>
            <translation>默认</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5974" />
            <source>Are you sure you want to clear all request history?</source>
            <translation>您确定要清除所有请求历史记录吗？</translation>
        </message>
    </context>
    <context>
        <name>MainWindow</name>
        <message>
            <source>API:</source>
            <translation type="vanished">应用程序编程接口：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8672" />
            <source>Auth</source>
            <translation>授权</translation>
        </message>
        <message>
            <source>Authenticate with selected API</source>
            <translation type="vanished">使用选定的 API 进行身份验证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8694" />
            <source>Endpoints</source>
            <translation>端点</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8700" />
            <source>Output</source>
            <translation>输出</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8706" />
            <source>Authentication status, requests, and audit info...</source>
            <translation>身份验证状态、请求和审核信息...</translation>
        </message>
        <message>
            <source>Request</source>
            <translation type="vanished">请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8740" />
            <source>Enter URL or select endpoint...</source>
            <translation>输入URL或选择端点...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8744" />
            <source>Send</source>
            <translation>发送</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8753" />
            <source>cURL</source>
            <translation>卷曲</translation>
        </message>
        <message>
            <source>Copy request as cURL command</source>
            <translation type="vanished">将请求复制为cURL命令</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8826" />
            <location filename="../zscaler_api_client.py" line="8835" />
            <source>Key</source>
            <translation>键</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8826" />
            <location filename="../zscaler_api_client.py" line="8835" />
            <location filename="../zscaler_api_client.py" line="8895" />
            <location filename="../zscaler_api_client.py" line="8970" />
            <source>Value</source>
            <translation>值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8829" />
            <source>Params</source>
            <translation>参数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8838" />
            <location filename="../zscaler_api_client.py" line="8963" />
            <source>Headers</source>
            <translation>头部</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8871" />
            <location filename="../zscaler_api_client.py" line="10713" />
            <source>Request body (JSON)...</source>
            <translation>请求正文 (JSON)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8875" />
            <location filename="../zscaler_api_client.py" line="8962" />
            <source>Body</source>
            <translation>正文</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8895" />
            <source>Variable</source>
            <translation>变量</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8898" />
            <source>Path Variables</source>
            <translation>路径变量</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8920" />
            <location filename="../zscaler_api_client.py" line="10618" />
            <source>Response</source>
            <translation>响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8935" />
            <source>Pretty</source>
            <translation>漂亮</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8938" />
            <source>Toggle pretty-print JSON (Ctrl+P)</source>
            <translation>切换漂亮打印 JSON (Ctrl+P)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8943" />
            <location filename="../zscaler_api_client.py" line="10125" />
            <location filename="../zscaler_api_client.py" line="10144" />
            <location filename="../zscaler_api_client.py" line="10149" />
            <location filename="../zscaler_api_client.py" line="10157" />
            <source>Export response</source>
            <translation>出口响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8946" />
            <source>Preview export</source>
            <translation>预览导出</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8966" />
            <source>Table</source>
            <translation>表</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8968" />
            <source>Chart</source>
            <translation>图表</translation>
        </message>
        <message>
            <source>JSON structure</source>
            <translation type="vanished">JSON结构</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8972" />
            <source>Tree</source>
            <translation>树</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8975" />
            <source>Heatmap</source>
            <translation>热图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8978" />
            <source>Topology</source>
            <translation>拓扑结构</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8982" />
            <source>Schema</source>
            <translation>模式</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8987" />
            <location filename="../zscaler_api_client.py" line="9053" />
            <source>AI Assistant</source>
            <translation>人工智能助手</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8990" />
            <source>Ask a OneAPI question, e.g. list ZPA application segments</source>
            <translation>询问 OneAPI 问题，例如列出 ZPA 应用程序段</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8994" />
            <source>Choose a guided AI example…</source>
            <translation>选择一个引导式 AI 示例...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9000" />
            <source>Find API request</source>
            <translation>查找API请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9003" />
            <source>Run selected request</source>
            <translation>运行选定的请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9006" />
            <source>Export result</source>
            <translation>导出结果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9010" />
            <location filename="../zscaler_api_client.py" line="11827" />
            <source>Ask in plain language. Sensitive values are masked before display or export.</source>
            <translation>用通俗易懂的语言询问。敏感值在显示或导出之前被屏蔽。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9016" />
            <source>AI request preview appears here before execution.</source>
            <translation>AI 请求在执行前预览会出现在此处。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9022" />
            <source>Bar chart</source>
            <translation>条形图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9023" />
            <source>Line chart</source>
            <translation>折线图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9024" />
            <source>Pie chart</source>
            <translation>饼图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9033" />
            <source>Help</source>
            <translation>帮助</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9052" />
            <source>Console</source>
            <translation>控制台</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9069" />
            <source>Ready</source>
            <translation>就绪</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9078" />
            <source>&amp;File</source>
            <translation>文件(&amp;F)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9080" />
            <source>&amp;Settings...</source>
            <translation>设置(&amp;S)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9085" />
            <source>&amp;Batch Operations...</source>
            <translation>批量操作(&amp;B)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9092" />
            <source>Request &amp;History...</source>
            <translation>请求&amp;历史记录...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9101" />
            <source>&amp;Quit</source>
            <translation>退出(&amp;Q)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9107" />
            <source>&amp;Edit</source>
            <translation>编辑(&amp;E)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9109" />
            <source>Copy as c&amp;URL</source>
            <translation>复制为 c&amp;URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9114" />
            <source>Copy &amp;Response</source>
            <translation>复制并回复</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9121" />
            <source>C&amp;lear Request</source>
            <translation>清除请求(&amp;L)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9126" />
            <source>&amp;Request</source>
            <translation>请求(&amp;R)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9128" />
            <source>&amp;Send Request</source>
            <translation>发送请求(&amp;S)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9135" />
            <source>Authenticate &amp;ZIA</source>
            <translation>验证&amp;ZIA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9139" />
            <source>Authenticate Z&amp;PA</source>
            <translation>验证 Z&amp;PA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9145" />
            <source>&amp;Logout All Sessions</source>
            <translation>注销所有会话(&amp;L)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9149" />
            <source>&amp;Operations</source>
            <translation>操作(&amp;O)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9150" />
            <source>Operations &amp;Center...</source>
            <translation>运营中心...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9158" />
            <source>Environment &amp;Profiles...</source>
            <translation>环境及简介...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9163" />
            <source>&amp;Language</source>
            <translation>语言(&amp;L)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9172" />
            <source>&amp;Help</source>
            <translation>帮助(&amp;H)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9174" />
            <source>&amp;Welcome Guide...</source>
            <translation>欢迎指南(&amp;W)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9178" />
            <source>&amp;About...</source>
            <translation>关于(&amp;A)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9183" />
            <source>About &amp;Qt...</source>
            <translation>关于 &amp; Qt</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9190" />
            <source>ZIA API &amp;Documentation</source>
            <translation>ZIA API 和文档</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9194" />
            <source>ZPA API D&amp;ocumentation</source>
            <translation>ZPA API 文档(&amp;O)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9198" />
            <source>Zscaler API &amp;Portal</source>
            <translation>Zscaler API 和门户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9202" />
            <source>API &amp;Error Codes...</source>
            <translation>API 错误代码(&amp;E)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9208" />
            <source>Check for &amp;Updates...</source>
            <translation>检查更新(&amp;U)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9278" />
            <source>{count} operations · {groups} groups</source>
            <translation>{count} operations · {groups} groups</translation>
        </message>
        <message>
            <source>Create new profile…</source>
            <translation type="vanished">创建新的个人资料...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9636" />
            <source>Environment profiles</source>
            <translation>环境概况</translation>
        </message>
        <message>
            <source>Profile:</source>
            <translation type="vanished">简介：</translation>
        </message>
        <message>
            <source>New profile name:</source>
            <translation type="vanished">新的个人资料名称：</translation>
        </message>
        <message>
            <source>Environment profile active: </source>
            <translation type="vanished">环境配置文件处于活动状态： </translation>
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
            <translation>已加载引导示例。找到 API 请求，查看预览，然后选择是否运行它。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9822" />
            <source>ZIA credentials not configured. Please go to Settings.</source>
            <translation>未配置 ZIA 凭据。请前往“设置”。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9851" />
            <source>ZCC credentials not configured. Please go to Settings.</source>
            <translation>未配置 ZCC 凭据。请前往“设置”。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9877" />
            <source>{api_type} credentials not configured. Please go to Settings.</source>
            <translation>{api_type} credentials not configured. Please go to Settings.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9941" />
            <source>OneAPI credentials not configured. Please go to Settings.</source>
            <translation>未配置 OneAPI 凭据。请前往“设置”。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9982" />
            <source>No matching API operation was found. Try product and resource names.</source>
            <translation>未找到匹配的 API 操作。尝试产品和资源名称。</translation>
        </message>
        <message>
            <source>Suggested request: {method} {name}. Review path variables before running.</source>
            <translation type="vanished">Suggested request: {method} {name}. Review path variables before running.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9999" />
            <source>Operation</source>
            <translation>操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9999" />
            <location filename="../zscaler_api_client.py" line="11630" />
            <source>Method</source>
            <translation>方法</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9999" />
            <location filename="../zscaler_api_client.py" line="11630" />
            <source>URL</source>
            <translation>网址</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10033" />
            <source>Ask the AI assistant for a request first.</source>
            <translation>先向AI助手提出请求。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10036" />
            <source>Review AI request</source>
            <translation>审核 AI 请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10037" />
            <source>Review the URL, path variables, and parameters in the preview before sending. Send this request now?</source>
            <translation>发送前在预览中查看 URL、路径变量和参数。现在发送此请求吗？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10060" />
            <location filename="../zscaler_api_client.py" line="10065" />
            <source>Asking configured LLM…</source>
            <translation>询问已配置的LLM...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10063" />
            <source>LLM unavailable; using the local catalog assistant.</source>
            <translation>法学硕士不可用；使用本地目录助手。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10074" />
            <source>Configure an AI endpoint and model in Settings.</source>
            <translation>在“设置”中配置 AI 端点和模型。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10078" />
            <source>AI endpoint must use HTTP or HTTPS.</source>
            <translation>AI端点必须使用HTTP或HTTPS。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10080" />
            <source>External AI is disabled. Enable it explicitly in Settings.</source>
            <translation>外部 AI 已禁用。在“设置”中明确启用它。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10082" />
            <source>External AI endpoints must use HTTPS.</source>
            <translation>外部 AI 端点必须使用 HTTPS。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10084" />
            <source>AI question is too long (maximum 2000 characters).</source>
            <translation>AI 问题太长（最多 2000 个字符）。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10113" />
            <location filename="../zscaler_api_client.py" line="10119" />
            <source>Save binary response</source>
            <translation>保存二进制响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10114" />
            <source>Binary content cannot be inspected or obfuscated as text. Save the original response only if you trust this endpoint and destination?</source>
            <translation>二进制内容无法作为文本进行检查或混淆。仅当您信任此端点和目的地时才保存原始响应？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10119" />
            <source>All files (*)</source>
            <translation>所有文件 (*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10122" />
            <source>Original binary response saved</source>
            <translation>原始二进制响应已保存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10171" />
            <source>Masked response exported</source>
            <translation>导出的屏蔽响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10277" />
            <source>Binary content is not included in this preview.</source>
            <translation>此预览中不包含二进制内容。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10279" />
            <location filename="../zscaler_api_client.py" line="10285" />
            <source>Export preview</source>
            <translation>导出预览</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10280" />
            <source>Original binary export requires a separate confirmation.</source>
            <translation>原始二进制导出需要单独确认。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10286" />
            <source>Sensitive fields are masked in every export.</source>
            <translation>每次导出时都会屏蔽敏感字段。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10340" />
            <location filename="../zscaler_api_client.py" line="10349" />
            <location filename="../zscaler_api_client.py" line="10357" />
            <source>Export AI result</source>
            <translation>导出AI结果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10149" />
            <location filename="../zscaler_api_client.py" line="10157" />
            <location filename="../zscaler_api_client.py" line="10349" />
            <location filename="../zscaler_api_client.py" line="10357" />
            <source>No chart data is available to export.</source>
            <translation>没有可供导出的图表数据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10366" />
            <source>AI result exported</source>
            <translation>AI结果导出</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10625" />
            <source>No tabular datasets</source>
            <translation>没有表格数据集</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10634" />
            <source>Nodes</source>
            <translation>节点</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10634" />
            <source>Connections</source>
            <translation>连接</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10636" />
            <source>No nodes or connections were found in this response.</source>
            <translation>在此响应中未找到任何节点或连接。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10697" />
            <source>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</source>
            <translation>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10714" />
            <source>Raw request body...</source>
            <translation>原始请求正文...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10715" />
            <source>Form fields as JSON or an encoded key=value string...</source>
            <translation>表单字段为 JSON 或编码的 key=value 字符串...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10716" />
            <source>Optional multipart fields as a JSON object...</source>
            <translation>作为 JSON 对象的可选多部分字段...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10722" />
            <source>Select upload file</source>
            <translation>选择上传文件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9474" />
            <location filename="../zscaler_api_client.py" line="10771" />
            <source>Yes</source>
            <translation>是的</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9474" />
            <location filename="../zscaler_api_client.py" line="10771" />
            <source>No</source>
            <translation>否</translation>
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
            <translation>GraphQL 主体必须是包含查询字符串的 JSON 对象。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10800" />
            <source>Choose operationName because the document contains multiple GraphQL operations.</source>
            <translation>选择操作名称，因为文档包含多个 GraphQL 操作。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10802" />
            <source>GraphQL operationName does not match a named operation in the query.</source>
            <translation>GraphQL 操作名称与查询中的命名操作不匹配。</translation>
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
            <translation>记录的 GraphQL 模式</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10849" />
            <source>The current Automation Hub page has no executable query example. Open its documentation or use schema introspection.</source>
            <translation>当前的 Automation Hub 页面没有可执行查询示例。打开其文档或使用模式自省。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10863" />
            <source>Loaded documented ZInsights query. Review time ranges, filters, and fields before sending.</source>
            <translation>已加载记录的 ZInsights 查询。发送前检查时间范围、过滤器和字段。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10899" />
            <source>Enter a name before saving the GraphQL query.</source>
            <translation>在保存 GraphQL 查询之前输入名称。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10903" />
            <location filename="../zscaler_api_client.py" line="10944" />
            <location filename="../zscaler_api_client.py" line="10957" />
            <location filename="../zscaler_api_client.py" line="10976" />
            <source>Secure storage</source>
            <translation>安全存储</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10903" />
            <source>The system keychain could not save the GraphQL query.</source>
            <translation>系统钥匙串无法保存 GraphQL 查询。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10909" />
            <source>GraphQL query saved securely</source>
            <translation>安全保存 GraphQL 查询</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10915" />
            <source>Saved GraphQL query is unavailable.</source>
            <translation>保存的 GraphQL 查询不可用。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10944" />
            <source>The system keychain could not rename the GraphQL query.</source>
            <translation>系统钥匙串无法重命名 GraphQL 查询。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10957" />
            <source>The system keychain could not delete the GraphQL query.</source>
            <translation>系统钥匙串无法删除 GraphQL 查询。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10968" />
            <source>GraphQL introspection query prepared. Review the endpoint before sending.</source>
            <translation>GraphQL 内省查询已准备好。发送前检查端点。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10976" />
            <source>The system keychain could not save the GraphQL schema.</source>
            <translation>系统钥匙串无法保存 GraphQL 架构。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10978" />
            <source>GraphQL schema saved securely</source>
            <translation>安全保存的 GraphQL 模式</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8980" />
            <location filename="../zscaler_api_client.py" line="10983" />
            <source>GraphQL schema</source>
            <translation>GraphQL 架构</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10983" />
            <source>No saved introspection result exists for this endpoint.</source>
            <translation>此端点不存在已保存的内省结果。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11024" />
            <source>{count} GraphQL errors</source>
            <translation>{count} GraphQL errors</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11026" />
            <source>extensions included</source>
            <translation>包括扩展</translation>
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
            <translation>警告</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11043" />
            <source>Please enter a URL</source>
            <translation>请输入URL</translation>
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
            <translation>错误</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8538" />
            <source>ZIA · List users</source>
            <translation>ZIA · 列出用户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8538" />
            <source>List ZIA users with pagination</source>
            <translation>列出带有分页的 ZIA 用户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8539" />
            <source>ZIA · Find URL categories</source>
            <translation>ZIA · 查找 URL 类别</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8539" />
            <source>Search ZIA URL categories for social media</source>
            <translation>搜索社交媒体的 ZIA URL 类别</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8540" />
            <source>ZIA · Review firewall policies</source>
            <translation>ZIA · 审查防火墙策略</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8540" />
            <source>List ZIA cloud firewall policies</source>
            <translation>列出 ZIA 云防火墙策略</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8541" />
            <source>ZPA · Application segments</source>
            <translation>ZPA · 应用领域</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8541" />
            <source>List ZPA application segments</source>
            <translation>列出 ZPA 应用程序段</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8542" />
            <source>ZPA · Connector inventory</source>
            <translation>ZPA·连接器库存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8542" />
            <source>List ZPA connectors</source>
            <translation>列出 ZPA 连接器</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8543" />
            <source>ZDX · Experience overview</source>
            <translation>ZDX·体验概览</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8543" />
            <source>List ZDX devices and experience scores</source>
            <translation>列出 ZDX 设备和体验分数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8544" />
            <source>ZDX · Active alerts</source>
            <translation>ZDX·主动警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8544" />
            <source>List active ZDX alerts with pagination</source>
            <translation>列出活动的 ZDX 警报并分页</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8545" />
            <source>ZDX · Application monitoring</source>
            <translation>ZDX·应用监控</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8545" />
            <source>List monitored ZDX applications</source>
            <translation>列出受监控的 ZDX 应用程序</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8546" />
            <source>Client Connector · Devices</source>
            <translation>客户端连接器·设备</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8546" />
            <source>List Client Connector devices</source>
            <translation>列出客户端连接器设备</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8547" />
            <source>ZIdentity · Users</source>
            <translation>ZIdentity·用户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8547" />
            <source>List ZIdentity users with pagination</source>
            <translation>使用分页列出 ZIdentity 用户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8548" />
            <source>ZIdentity · Groups</source>
            <translation>ZIdentity · 团体</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8548" />
            <source>List ZIdentity groups</source>
            <translation>列出 ZIdentity 组</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8549" />
            <source>AI Security · Workloads</source>
            <translation>AI安全·工作负载</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8549" />
            <source>List AI Security workloads</source>
            <translation>列出 AI 安全工作负载</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8603" />
            <source>ZS API Client</source>
            <translation>ZS API客户端</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8610" />
            <source>Explore APIs, review changes, and operate safely</source>
            <translation>探索 API、审查更改并安全操作</translation>
        </message>
        <message>
            <source>1 · Environment</source>
            <translation type="vanished">1·环境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8616" />
            <source>Select or create a tenant environment profile</source>
            <translation>选择或创建租户环境配置文件</translation>
        </message>
        <message>
            <source>2 · Analyze</source>
            <translation type="vanished">2·分析</translation>
        </message>
        <message>
            <source>Open dashboards, audits, policy diffs, and response analysis</source>
            <translation type="vanished">开放仪表板、审计、政策差异和响应分析</translation>
        </message>
        <message>
            <source>3 · Change</source>
            <translation type="vanished">3·改变</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8624" />
            <source>Open policy diff and policy-as-code export</source>
            <translation>开放策略差异和策略即代码导出</translation>
        </message>
        <message>
            <source>Operations Center</source>
            <translation type="vanished">运营中心</translation>
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
            <translation>设置</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8641" />
            <location filename="../zscaler_api_client.py" line="8659" />
            <source>API Explorer</source>
            <translation>API浏览器</translation>
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
            <translation>产品展示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8673" />
            <source>Authenticate with selected API (Ctrl+Shift+A)</source>
            <translation>使用选定的 API 进行身份验证 (Ctrl+Shift+A)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8683" />
            <source>🔍 Filter endpoints...</source>
            <translation>🔍 过滤端点...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8717" />
            <source>Request Builder</source>
            <translation>请求生成器</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8745" />
            <source>Send request (Ctrl+Return)</source>
            <translation>发送请求（Ctrl+Return）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8749" />
            <source>Cancel</source>
            <translation>取消</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8750" />
            <source>Stop before the next page or chain step; the current HTTP request is allowed to finish safely.</source>
            <translation>在下一页或链步骤之前停止；允许当前 HTTP 请求安全完成。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8754" />
            <source>Copy request as cURL command (Ctrl+Shift+C)</source>
            <translation>将请求复制为 cURL 命令 (Ctrl+Shift+C)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8760" />
            <source>GraphQL request</source>
            <translation>GraphQL 请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8761" />
            <source>Send the request body as a GraphQL query and preserve data, errors, and extensions.</source>
            <translation>将请求正文作为 GraphQL 查询发送并保留数据、错误和扩展。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8765" />
            <source>Fetch all pages</source>
            <translation>获取所有页面</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8766" />
            <source>Follow only the pagination parameters documented for the selected read operation.</source>
            <translation>仅遵循为所选读取操作记录的分页参数。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8768" />
            <source>Page size:</source>
            <translation>页面尺寸：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8772" />
            <source>Maximum pages:</source>
            <translation>最大页数：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8780" />
            <source>Saved GraphQL query name</source>
            <translation>已保存的 GraphQL 查询名称</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8784" />
            <source>Save query</source>
            <translation>保存查询</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8787" />
            <source>Load query</source>
            <translation>加载查询</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8790" />
            <source>Rename query</source>
            <translation>重命名查询</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8793" />
            <source>Delete query</source>
            <translation>删除查询</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8796" />
            <source>Introspect schema</source>
            <translation>内省模式</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8799" />
            <source>Load saved schema</source>
            <translation>加载保存的架构</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8805" />
            <source>Documented ZInsights query…</source>
            <translation>记录 ZInsights 查询...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8810" />
            <source>Load documented query</source>
            <translation>加载记录查询</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8813" />
            <source>Browse documented schema</source>
            <translation>浏览记录的模式</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8844" />
            <source>Body type:</source>
            <translation>体型：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8846" />
            <source>JSON</source>
            <translation>JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8847" />
            <source>Raw text</source>
            <translation>原始文本</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8848" />
            <source>Form URL encoded</source>
            <translation>表单 URL 编码</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8849" />
            <location filename="../zscaler_api_client.py" line="11153" />
            <source>Multipart file upload</source>
            <translation>分段文件上传</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8857" />
            <source>File field:</source>
            <translation>文件字段：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8861" />
            <source>Upload file:</source>
            <translation>上传文件：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8864" />
            <source>Select a local file; its path is never saved in history</source>
            <translation>选择本地文件；它的路径从未被保存在历史中</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8866" />
            <source>Browse…</source>
            <translation>浏览…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8880" />
            <source>Extract typed variables from the selected GraphQL operation. Values are inserted into the JSON request body, never into the URL.</source>
            <translation>从选定的 GraphQL 操作中提取类型变量。值将插入到 JSON 请求正文中，而不是插入到 URL 中。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8907" />
            <source>Type</source>
            <translation>类型</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8907" />
            <source>Required</source>
            <translation>必填</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8908" />
            <source>Default</source>
            <translation>默认</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <source>JSON value</source>
            <translation>JSON值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8886" />
            <source>Extract variables from query</source>
            <translation>从查询中提取变量</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8887" />
            <location filename="../zscaler_api_client.py" line="10791" />
            <location filename="../zscaler_api_client.py" line="11807" />
            <source>No GraphQL variables extracted.</source>
            <translation>未提取任何 GraphQL 变量。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8888" />
            <location filename="../zscaler_api_client.py" line="11144" />
            <location filename="../zscaler_api_client.py" line="11194" />
            <source>GraphQL Variables</source>
            <translation>GraphQL 变量</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8902" />
            <location filename="../zscaler_api_client.py" line="11812" />
            <source>Select a documented endpoint to inspect its request contract.</source>
            <translation>选择记录的端点以检查其请求合同。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8907" />
            <source>Location</source>
            <translation>地点</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8907" />
            <location filename="../zscaler_api_client.py" line="11630" />
            <source>Name</source>
            <translation>名称</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8908" />
            <source>Description</source>
            <translation>描述</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8913" />
            <source>API Guide</source>
            <translation>API指南</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8927" />
            <source>Dataset:</source>
            <translation>数据集：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8949" />
            <source>Open export</source>
            <translation>打开导出</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8950" />
            <source>Compare drift</source>
            <translation>比较漂移</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8970" />
            <source>Field</source>
            <translation>领域</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9096" />
            <source>Open response export…</source>
            <translation>打开响应导出...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9097" />
            <source>Compare response drift…</source>
            <translation>比较响应漂移...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9154" />
            <source>PAC &amp;Workspace...</source>
            <translation>PAC 和工作空间...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9434" />
            <location filename="../zscaler_api_client.py" line="9448" />
            <source>Required value</source>
            <translation>所需值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9434" />
            <location filename="../zscaler_api_client.py" line="9448" />
            <source>Optional value</source>
            <translation>可选值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9482" />
            <source>body template available</source>
            <translation>身体模板可用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9482" />
            <source>no body template</source>
            <translation>没有身体模板</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9483" />
            <source>not listed</source>
            <translation>未列出</translation>
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
            <translation>该 URL 已手动编辑。再次选择一个端点以附加其记录的请求合同。</translation>
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
            <translation>所选环境配置文件不可用。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9650" />
            <source>Environment profile active: {name}. Sessions and request data were cleared.</source>
            <translation>Environment profile active: {name}. Sessions and request data were cleared.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9694" />
            <source>Write request prepared</source>
            <translation>写请求已准备好</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9695" />
            <source>The documented write template is ready. Review the API Guide, parameters, and body, then choose Send explicitly.</source>
            <translation>记录的写入模板已准备就绪。查看 API 指南、参数和正文，然后选择显式发送。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9989" />
            <source>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</source>
            <translation>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10144" />
            <source>No tabular response data is available to export.</source>
            <translation>没有可导出的表格响应数据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10294" />
            <location filename="../zscaler_api_client.py" line="10305" />
            <source>Open response export</source>
            <translation>打开响应导出</translation>
        </message>
        <message>
            <source>The response export is unavailable, is a symbolic link, or exceeds the configured transfer limit.</source>
            <translation type="vanished">响应导出不可用、是符号链接或超出配置的传输限制。</translation>
        </message>
        <message>
            <source>This is not a supported ZS API response exchange file.</source>
            <translation type="vanished">这不是受支持的 ZS API 响应交换文件。</translation>
        </message>
        <message>
            <source>The response exchange file is incomplete.</source>
            <translation type="vanished">响应交换文件不完整。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10328" />
            <source>Response export opened locally; no API request was sent.</source>
            <translation>响应出口在本地开放；未发送 API 请求。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10333" />
            <location filename="../zscaler_api_client.py" line="10335" />
            <source>Response drift comparison</source>
            <translation>响应漂移比较</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10333" />
            <source>Binary responses cannot be structurally compared. Export and inspect the original file with an appropriate tool.</source>
            <translation>二元响应无法在结构上进行比较。使用适当的工具导出并检查原始文件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10335" />
            <source>Send a request or open a response export before comparing drift.</source>
            <translation>在比较漂移之前发送请求或打开响应导出。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11039" />
            <location filename="../zscaler_api_client.py" line="11556" />
            <source>Read only</source>
            <translation>只读</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11039" />
            <location filename="../zscaler_api_client.py" line="11556" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>只读模式阻止写入请求。更改操作中心中的本地角色以继续。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11064" />
            <source>Missing Path Variables</source>
            <translation>缺少路径变量</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11065" />
            <source>Enter values for: {names}</source>
            <translation>Enter values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11075" />
            <source>Configure a base URL for the selected product before sending a relative API path.</source>
            <translation>在发送相对 API 路径之前，为所选产品配置基本 URL。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11129" />
            <source>Missing documented parameters</source>
            <translation>缺少记录的参数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11130" />
            <source>Enter required values for: {names}</source>
            <translation>Enter required values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11153" />
            <source>Select an available local file before sending.</source>
            <translation>发送前选择可用的本地文件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11158" />
            <source>Multipart fields must be a JSON object: {error}</source>
            <translation>Multipart fields must be a JSON object: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11161" />
            <source>Multipart fields must be a JSON object.</source>
            <translation>多部分字段必须是 JSON 对象。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11200" />
            <source>Sending request...</source>
            <translation>正在发送请求...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11231" />
            <source>Pagination unavailable</source>
            <translation>分页不可用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11231" />
            <source>Select a documented paginated GET operation before fetching all pages.</source>
            <translation>在获取所有页面之前选择记录的分页 GET 操作。</translation>
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
            <translation>要求取消；等待当前 HTTP 请求安全完成...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11275" />
            <source>Request cancelled before completion</source>
            <translation>请求在完成之前被取消</translation>
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
            <translation>已认证成功。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11423" />
            <source>ZCC authenticated successfully</source>
            <translation>已认证成功。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11427" />
            <source>ZIdentity authenticated successfully</source>
            <translation>ZIdentity身份验证成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11431" />
            <source>ZTW authenticated successfully</source>
            <translation>已认证成功。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11435" />
            <source>ZWA authenticated successfully</source>
            <translation>已认证成功。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11439" />
            <source>EASM authenticated successfully</source>
            <translation>已认证成功。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11443" />
            <source>OneAPI authenticated successfully</source>
            <translation>OneAPI 身份验证成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11448" />
            <source>Authenticated successfully</source>
            <translation>已认证成功。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11548" />
            <source>Batch validation failed: </source>
            <translation>批量验证失败： </translation>
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
            <translation>确认批次</translation>
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
            <translation>请求历史记录</translation>
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
            <translation>该请求属于另一个环境。在加载之前激活该环境配置文件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11686" />
            <location filename="../zscaler_api_client.py" line="11705" />
            <source>Multipart request loaded. Select the local file again before sending.</source>
            <translation>已加载多部分请求。发送前再次选择本地文件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11777" />
            <source>Masked cURL command copied to clipboard</source>
            <translation>已屏蔽的 cURL 命令已复制到剪贴板</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11782" />
            <source>Binary response</source>
            <translation>二元响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11782" />
            <source>Binary response content is not copied to the clipboard. Use Export to save the original file.</source>
            <translation>二进制响应内容不会复制到剪贴板。使用导出保存原始文件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11791" />
            <source>Masked response copied to clipboard</source>
            <translation>屏蔽响应已复制到剪贴板</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11936" />
            <source>The application needs to restart to apply the new language.

Restart now?</source>
            <translation>应用程序需要重新启动以应用新语言。

立即重新启动？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12063" />
            <source>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Release:&lt;/b&gt; {name}&lt;/p&gt;{prerelease}&lt;p style='color: #666; font-size: 11px;'&gt;✓ Verified from github.com/{repo}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</source>
            <translation>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Release:&lt;/b&gt; {name}&lt;/p&gt;{prerelease}&lt;p style='color: #666; font-size: 11px;'&gt;✓ Verified from github.com/{repo}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</translation>
        </message>
        <message>
            <source>Success</source>
            <translation type="vanished">成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11396" />
            <source>Request successful</source>
            <translation>请求成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11406" />
            <source>ZIA authenticated successfully</source>
            <translation>ZIA认证成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11415" />
            <source>ZPA authenticated successfully</source>
            <translation>ZPA 验证成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11481" />
            <location filename="../zscaler_api_client.py" line="11487" />
            <source>Request failed</source>
            <translation>请求失败</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11548" />
            <location filename="../zscaler_api_client.py" line="11551" />
            <location filename="../zscaler_api_client.py" line="11605" />
            <source>Batch</source>
            <translation>批量</translation>
        </message>
        <message>
            <source>Processing {count} items...</source>
            <translation type="vanished">正在处理 {count} 个项目...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11707" />
            <source>Request loaded from history</source>
            <translation>从历史记录中加载请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11774" />
            <source>No URL to copy</source>
            <translation>没有可复制的网址</translation>
        </message>
        <message>
            <source>cURL command copied to clipboard</source>
            <translation type="vanished">cURL 命令已复制到剪贴板</translation>
        </message>
        <message>
            <source>Response copied to clipboard</source>
            <translation type="vanished">响应已复制到剪贴板</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11793" />
            <source>No response to copy</source>
            <translation>复制无响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11829" />
            <source>Request cleared</source>
            <translation>请求已清除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11842" />
            <location filename="../zscaler_api_client.py" line="11893" />
            <source>Missing Credentials</source>
            <translation>缺少凭证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11843" />
            <source>Please configure ZIA credentials in Settings first.</source>
            <translation>请先在“设置”中配置 ZIA 凭据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11865" />
            <source>ZIA auth request prepared. Click Send to authenticate.</source>
            <translation>ZIA 身份验证请求已准备好。单击“发送”进行身份验证。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11894" />
            <source>Please configure ZPA credentials in Settings first.</source>
            <translation>请先在“设置”中配置 ZPA 凭据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11907" />
            <source>ZPA auth request prepared. Click Send to authenticate.</source>
            <translation>ZPA 身份验证请求已准备好。单击“发送”进行身份验证。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11912" />
            <source>All sessions cleared</source>
            <translation>所有会话已清除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11935" />
            <source>Language Changed</source>
            <translation>语言已更改</translation>
        </message>
        <message>
            <source>Please restart the application to apply the new language.</source>
            <translation type="vanished">请重新启动应用程序以应用新语言。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11984" />
            <source>Checking for updates...</source>
            <translation>正在检查更新...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12057" />
            <source>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</source>
            <translation>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12061" />
            <source>Update Available</source>
            <translation>有更新可用</translation>
        </message>
        <message>
            <source>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</source>
            <translation type="vanished">&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12083" />
            <source>Update available: v{version}</source>
            <translation>有可用更新: v{version}</translation>
        </message>
        <message>
            <source>No Updates</source>
            <translation type="vanished">没有更新</translation>
        </message>
        <message>
            <source>&lt;p&gt;You are running the latest version.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Version:&lt;/b&gt; {version}&lt;/p&gt;</source>
            <translation type="vanished">&lt;p&gt;You are running the latest version.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Version:&lt;/b&gt; {version}&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12086" />
            <source>You are up to date (v{version})</source>
            <translation>已是最新版本 (v{version})</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12091" />
            <source>Update Check Failed</source>
            <translation>检查更新失败</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12092" />
            <source>Could not check for updates:
{error}</source>
            <translation>无法检查更新:
{error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12094" />
            <source>Update check failed</source>
            <translation>检查更新失败</translation>
        </message>
        <message>
            <source>&amp;About</source>
            <translation type="vanished">关于(&amp;A)</translation>
        </message>
        <message>
            <source>Zscaler API &amp;Documentation</source>
            <translation type="vanished">Zscaler API 文档(&amp;D)</translation>
        </message>
        <message>
            <source>About ZS API Client</source>
            <translation type="vanished">关于 Zscaler API 客户端</translation>
        </message>
        <message>
            <source>ZDX (Zscaler Digital Experience)</source>
            <translation type="vanished">ZDX（Zscaler 数字体验）</translation>
        </message>
        <message>
            <source>ZCC (Client Connector)</source>
            <translation type="vanished">ZCC（客户端连接器）</translation>
        </message>
        <message>
            <source>Key ID:</source>
            <translation type="vanished">密钥ID:</translation>
        </message>
        <message>
            <source>Key Secret:</source>
            <translation type="vanished">密钥密码:</translation>
        </message>
        <message>
            <source>Welcome to ZS API Client</source>
            <translation type="vanished">欢迎使用ZS API Client</translation>
        </message>
        <message>
            <source>Supported APIs</source>
            <translation type="vanished">支持的API</translation>
        </message>
        <message>
            <source>Getting Started</source>
            <translation type="vanished">入门指南</translation>
        </message>
        <message>
            <source>Tips for Advanced Users</source>
            <translation type="vanished">高级用户提示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9051" />
            <source>Documentation</source>
            <translation>文档</translation>
        </message>
        <message>
            <source>Show this dialog on startup</source>
            <translation type="vanished">启动时显示此对话框</translation>
        </message>
        <message>
            <source>Open Settings</source>
            <translation type="vanished">打开设置</translation>
        </message>
        <message>
            <source>Get Started</source>
            <translation type="vanished">开始使用</translation>
        </message>
        <message>
            <source>Check for updates on startup:</source>
            <translation type="vanished">启动时检查更新:</translation>
        </message>
    </context>
    <context>
        <name>OperationsDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="6199" />
            <source>Operations Center</source>
            <translation>运营中心</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Requests</source>
            <translation>要求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Success rate</source>
            <translation>成功率</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <location filename="../zscaler_api_client.py" line="7333" />
            <source>Audit integrity</source>
            <translation>审计诚信</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Active environment</source>
            <translation>活跃环境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6234" />
            <source>Recent request outcomes</source>
            <translation>最近的请求结果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6239" />
            <location filename="../zscaler_api_client.py" line="6317" />
            <location filename="../zscaler_api_client.py" line="6321" />
            <location filename="../zscaler_api_client.py" line="6361" />
            <location filename="../zscaler_api_client.py" line="6417" />
            <location filename="../zscaler_api_client.py" line="6434" />
            <source>Time</source>
            <translation>时间</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6239" />
            <source>Activity</source>
            <translation>活动</translation>
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
            <translation>状态</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6240" />
            <source>Recent activity</source>
            <translation>最近的活动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6243" />
            <source>Refresh dashboard</source>
            <translation>刷新仪表板</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6247" />
            <source>Dashboard</source>
            <translation>仪表板</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6250" />
            <source>Previous policy JSON</source>
            <translation>以前的政策 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6251" />
            <source>Proposed policy JSON</source>
            <translation>提议的政策 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6258" />
            <source>Compare policies</source>
            <translation>比较政策</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6260" />
            <source>Export policy as JSON</source>
            <translation>将策略导出为 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6261" />
            <source>Export policy as YAML</source>
            <translation>将策略导出为 YAML</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6262" />
            <source>Run compliance checks</source>
            <translation>运行合规性检查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <location filename="../zscaler_api_client.py" line="7655" />
            <source>Policy diff</source>
            <translation>政策差异</translation>
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
            <translation>模拟策略（仅限本地）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6273" />
            <location filename="../zscaler_api_client.py" line="7703" />
            <source>Simulation</source>
            <translation>模拟</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6276" />
            <source>CSV data, e.g. name,email
Ada,ada@example.com</source>
            <translation>CSV 数据，例如姓名、电子邮件
艾达，ada@example.com</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6279" />
            <source>Required columns (comma separated)</source>
            <translation>必填列（逗号分隔）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6281" />
            <source>Validate bulk import</source>
            <translation>验证批量导入</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6282" />
            <source>Bulk operations</source>
            <translation>批量操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6285" />
            <source>Administrator</source>
            <translation>管理员</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6285" />
            <source>Analyst</source>
            <translation>分析师</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6285" />
            <location filename="../zscaler_api_client.py" line="7438" />
            <source>Read only</source>
            <translation>只读</translation>
        </message>
        <message>
            <source>Optional local automation script; never runs without approval</source>
            <translation type="vanished">可选的本地自动化脚本；未经批准绝不运行</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Local role:</source>
            <translation>本地角色：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Alert threshold (errors):</source>
            <translation>警报阈值（错误）：</translation>
        </message>
        <message>
            <source>Webhook endpoint (disabled until approved):</source>
            <translation type="vanished">Webhook 端点（在批准之前禁用）：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Local automation:</source>
            <translation>本地自动化：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6293" />
            <source>Save governance settings</source>
            <translation>保存治理设置</translation>
        </message>
        <message>
            <source>Read-only mode blocks write requests. Webhooks and local automation are saved only; this app will ask before any execution.</source>
            <translation type="vanished">只读模式阻止写入请求。仅保存 Webhook 和本地自动化；这个应用程序会在执行之前询问。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6295" />
            <location filename="../zscaler_api_client.py" line="7712" />
            <location filename="../zscaler_api_client.py" line="7715" />
            <location filename="../zscaler_api_client.py" line="7718" />
            <location filename="../zscaler_api_client.py" line="7726" />
            <source>Governance</source>
            <translation>治理</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6298" />
            <source>Official integrations are optional. Credentials remain in the system keychain and no command runs automatically.</source>
            <translation>官方集成是可选的。凭据保留在系统钥匙串中，并且不会自动运行任何命令。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6299" />
            <source>Integration</source>
            <translation>整合</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6299" />
            <source>Recommended use</source>
            <translation>推荐用途</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6302" />
            <source>Check local integrations</source>
            <translation>检查本地集成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6303" />
            <source>Prepare Terraform import</source>
            <translation>准备 Terraform 导入</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6304" />
            <source>Prepare MCP connection</source>
            <translation>准备 MCP 连接</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6305" />
            <source>Prepare SDK configuration</source>
            <translation>准备SDK配置</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6306" />
            <source>Send masked webhook test</source>
            <translation>发送屏蔽的 webhook 测试</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6308" />
            <source>Copy reviewed command</source>
            <translation>复制已审核的命令</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6318" />
            <location filename="../zscaler_api_client.py" line="7765" />
            <location filename="../zscaler_api_client.py" line="7785" />
            <source>Integrations</source>
            <translation>集成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6321" />
            <source>Event</source>
            <translation>活动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6317" />
            <location filename="../zscaler_api_client.py" line="6321" />
            <location filename="../zscaler_api_client.py" line="6334" />
            <source>Details</source>
            <translation>详情</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6323" />
            <source>Refresh audit trail</source>
            <translation>刷新审计跟踪</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6324" />
            <location filename="../zscaler_api_client.py" line="6519" />
            <source>Schedule report</source>
            <translation>日程报告</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6325" />
            <source>Create redacted support bundle</source>
            <translation>创建经过编辑的支持包</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6326" />
            <source>Audit &amp; automation</source>
            <translation>审计与自动化</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6329" />
            <source>Local security posture uses redacted request history and audit integrity. It is an operational signal, not a tenant security assessment.</source>
            <translation>本地安全态势使用经过编辑的请求历史记录和审核完整性。这是一个操作信号，而不是租户安全评估。</translation>
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
            <translation>严重性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6334" />
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Finding</source>
            <translation>寻找</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6335" />
            <source>Refresh security posture</source>
            <translation>刷新安全态势</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6336" />
            <source>Security posture</source>
            <translation>安全态势</translation>
        </message>
        <message>
            <source>Build a redacted local investigation timeline. Prepared chains never send API requests automatically.</source>
            <translation type="vanished">制定经过编辑的当地调查时间表。准备好的链永远不会自动发送 API 请求。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6351" />
            <source>Investigation:</source>
            <translation>调查：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6352" />
            <source>API failure investigation</source>
            <translation>API故障调查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6352" />
            <source>Change activity review</source>
            <translation>变更活动审核</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6352" />
            <source>Slow response investigation</source>
            <translation>调查反应缓慢</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6353" />
            <source>Prepare investigation chain</source>
            <translation>准备调查链</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6361" />
            <location filename="../zscaler_api_client.py" line="6373" />
            <source>Source</source>
            <translation>来源</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6342" />
            <location filename="../zscaler_api_client.py" line="6361" />
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Evidence</source>
            <translation>证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6204" />
            <source>Data scope:</source>
            <translation>数据范围：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6207" />
            <source>Active environment: {name}</source>
            <translation>Active environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6211" />
            <source>All environments (cross-tenant overview)</source>
            <translation>所有环境（跨租户概览）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6213" />
            <source>Analytics are tenant-isolated by default. Cross-tenant scope is explicit and available in Advanced mode.</source>
            <translation>默认情况下，分析是租户隔离的。跨租户范围是明确的并且在高级模式下可用。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Open alerts</source>
            <translation>打开警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6237" />
            <source>Recent request latency (ms)</source>
            <translation>最近请求延迟（毫秒）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6239" />
            <location filename="../zscaler_api_client.py" line="6321" />
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Environment</source>
            <translation>环境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6244" />
            <source>Auto-refresh local signals</source>
            <translation>自动刷新本地信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6245" />
            <source>Every 30 seconds</source>
            <translation>每 30 秒</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6245" />
            <source>Every minute</source>
            <translation>每分钟</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6245" />
            <source>Every 5 minutes</source>
            <translation>每5分钟一班</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6254" />
            <source>Policy rule overview</source>
            <translation>策略规则概述</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <location filename="../zscaler_api_client.py" line="6257" />
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Rule</source>
            <translation>规则</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Action</source>
            <translation>行动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <source>Conditions</source>
            <translation>条件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <source>State</source>
            <translation>状态</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6257" />
            <source>Best-practice finding</source>
            <translation>最佳实践发现</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Order</source>
            <translation>订单</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Decision</source>
            <translation>决定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6289" />
            <source>Show webhook endpoint</source>
            <translation>显示 webhook 端点</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6291" />
            <source>Absolute path to a reviewed local Python automation</source>
            <translation>已审查的本地 Python 自动化的绝对路径</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Webhook endpoint (stored in system keychain):</source>
            <translation>Webhook 端点（存储在系统钥匙串中）：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6294" />
            <source>Read-only mode blocks write requests and local automation. Every webhook or local automation execution requires explicit approval.</source>
            <translation>只读模式阻止写入请求和本地自动化。每个 Webhook 或本地自动化执行都需要明确的批准。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6307" />
            <source>Run reviewed local automation</source>
            <translation>运行经过审查的本地自动化</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6309" />
            <source>Send current masked alerts</source>
            <translation>发送当前屏蔽警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6316" />
            <source>Webhook delivery history</source>
            <translation>Webhook 传送历史记录</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6317" />
            <source>Delivery</source>
            <translation>发货</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6339" />
            <source>Local alerts evaluate retained, redacted request history only. They do not monitor the tenant in real time or send data externally.</source>
            <translation>本地警报仅评估保留的、经过编辑的请求历史记录。他们不实时监控租户或向外发送数据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6342" />
            <source>Alert</source>
            <translation>警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6342" />
            <source>Count</source>
            <translation>计数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6343" />
            <source>Refresh local alerts</source>
            <translation>刷新本地警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6344" />
            <source>Copy masked alert summary</source>
            <translation>复制屏蔽警报摘要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6345" />
            <source>Export alerts as JSON</source>
            <translation>将警报导出为 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6346" />
            <source>Export alerts as Markdown</source>
            <translation>将警报导出为 Markdown</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6347" />
            <source>Alert Center</source>
            <translation>警报中心</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6360" />
            <source>Security investigation evidence map</source>
            <translation>安全调查证据图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6381" />
            <source>Refresh investigation</source>
            <translation>刷新调查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6382" />
            <location filename="../zscaler_api_client.py" line="6856" />
            <source>Export incident evidence</source>
            <translation>导出事件证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6384" />
            <source>Incident investigation</source>
            <translation>事件调查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6461" />
            <source>Create a local review from Policy diff. Approval records intent only; no policy, Terraform, or Git change is applied automatically.</source>
            <translation>根据政策差异创建本地审核。仅用于批准记录；不会自动应用任何策略、Terraform 或 Git 更改。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Change ticket or reference</source>
            <translation>更改机票或参考资料</translation>
        </message>
        <message>
            <source>Reviewer name</source>
            <translation type="vanished">审稿人姓名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Reference:</source>
            <translation>参考：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Reviewer:</source>
            <translation>审稿人：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6467" />
            <source>Prepare change review</source>
            <translation>准备变更审核</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6468" />
            <source>Record local approval</source>
            <translation>记录当地批准情况</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6469" />
            <location filename="../zscaler_api_client.py" line="7162" />
            <source>Export Git review</source>
            <translation>导出 Git 评论</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6470" />
            <location filename="../zscaler_api_client.py" line="7158" />
            <source>Export rollback plan</source>
            <translation>出口回滚计划</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <location filename="../zscaler_api_client.py" line="7122" />
            <location filename="../zscaler_api_client.py" line="7144" />
            <location filename="../zscaler_api_client.py" line="7147" />
            <location filename="../zscaler_api_client.py" line="7156" />
            <source>Change control</source>
            <translation>变更控制</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6499" />
            <source>Generate local, redacted reports for leadership, SOC, or operations. Reports contain no credentials and are not sent automatically.</source>
            <translation>为领导层、SOC 或运营生成本地、经过编辑的报告。报告不包含凭据，也不会自动发送。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6500" />
            <source>Report type:</source>
            <translation>报告类型：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6501" />
            <location filename="../zscaler_api_client.py" line="7299" />
            <location filename="../zscaler_api_client.py" line="7322" />
            <location filename="../zscaler_api_client.py" line="7929" />
            <location filename="../zscaler_api_client.py" line="8030" />
            <source>CISO security summary</source>
            <translation>CISO 安全摘要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6501" />
            <location filename="../zscaler_api_client.py" line="7299" />
            <location filename="../zscaler_api_client.py" line="7322" />
            <location filename="../zscaler_api_client.py" line="7929" />
            <source>SOC investigation summary</source>
            <translation>SOC调查总结</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6501" />
            <location filename="../zscaler_api_client.py" line="7299" />
            <location filename="../zscaler_api_client.py" line="7322" />
            <location filename="../zscaler_api_client.py" line="7929" />
            <source>Operations health summary</source>
            <translation>运营健康状况总结</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6502" />
            <source>Generate report</source>
            <translation>生成报告</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6504" />
            <source>Security posture report artwork</source>
            <translation>安全态势报告图稿</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6507" />
            <location filename="../zscaler_api_client.py" line="7365" />
            <source>Export report as Markdown</source>
            <translation>将报告导出为 Markdown</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6508" />
            <location filename="../zscaler_api_client.py" line="7359" />
            <source>Export report as JSON</source>
            <translation>将报告导出为 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6509" />
            <location filename="../zscaler_api_client.py" line="7362" />
            <source>Export visual report as HTML</source>
            <translation>将可视化报告导出为 HTML</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6510" />
            <source>Scheduled reports</source>
            <translation>预定报告</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Name</source>
            <translation>名称</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Type</source>
            <translation>类型</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Cadence</source>
            <translation>节奏</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Next run</source>
            <translation>下次运行</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Mode</source>
            <translation>模式</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6520" />
            <source>Run selected now</source>
            <translation>立即运行选定的</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6521" />
            <source>Enable or pause</source>
            <translation>启用或暂停</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6522" />
            <source>Remove schedule</source>
            <translation>删除日程</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6523" />
            <source>Refresh schedules</source>
            <translation>刷新时间表</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Reports</source>
            <translation>报告</translation>
        </message>
        <message>
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and every run requires approval.</source>
            <translation type="vanished">针对活动的经过身份验证的环境运行经过审查的序列。链限制为 20 个步骤，保留在选定的产品主机上，并且每次运行都需要批准。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6529" />
            <source>Chain JSON</source>
            <translation>链式 JSON</translation>
        </message>
        <message>
            <source>A JSON list of API requests. Relative paths use the active product host.</source>
            <translation type="vanished">API 请求的 JSON 列表。相对路径使用活动产品主机。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6537" />
            <source>Stop after the first failed step</source>
            <translation>第一个失败步骤后停止</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6538" />
            <source>Validate chain</source>
            <translation>验证链</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6539" />
            <location filename="../zscaler_api_client.py" line="7444" />
            <source>Run approved chain</source>
            <translation>运行批准的连锁店</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6540" />
            <source>Cancel chain</source>
            <translation>取消连锁</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6541" />
            <location filename="../zscaler_api_client.py" line="7516" />
            <source>Export masked chain results</source>
            <translation>导出屏蔽链结果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6542" />
            <location filename="../zscaler_api_client.py" line="7434" />
            <location filename="../zscaler_api_client.py" line="7440" />
            <location filename="../zscaler_api_client.py" line="7511" />
            <location filename="../zscaler_api_client.py" line="7515" />
            <source>API chains</source>
            <translation>API链</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6545" />
            <source>Build a local digital twin of policy order. It explains decisions, highlights overlap and shadowing, estimates change blast radius, and never applies a policy.</source>
            <translation>构建政策秩序的本地数字孪生。它解释决策，突出显示重叠和阴影，估计变化的爆炸半径，并且从不应用策略。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6547" />
            <source>Policy rules JSON or an object containing a rules list</source>
            <translation>策略规则 JSON 或包含规则列表的对象</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6548" />
            <source>Analyze policy twin</source>
            <translation>分析政策孪生</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6549" />
            <location filename="../zscaler_api_client.py" line="7600" />
            <source>Export twin evidence</source>
            <translation>导出双胞胎证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6550" />
            <source>Load proposed policy</source>
            <translation>加载建议的政策</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6551" />
            <source>Test context:</source>
            <translation>测试上下文：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6551" />
            <source>Request context JSON</source>
            <translation>请求上下文 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6552" />
            <source>Explain decision</source>
            <translation>解释决定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Rules</source>
            <translation>规则</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Conflicts</source>
            <translation>冲突</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Shadowed</source>
            <translation>阴影</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Blast radius</source>
            <translation>爆炸半径</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6558" />
            <source>Policy order and conflict graph</source>
            <translation>政策顺序和冲突图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Earlier rule</source>
            <translation>较早的规则</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Later rule</source>
            <translation>后来的统治</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <location filename="../zscaler_api_client.py" line="6378" />
            <location filename="../zscaler_api_client.py" line="6399" />
            <location filename="../zscaler_api_client.py" line="6413" />
            <location filename="../zscaler_api_client.py" line="6437" />
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Explanation</source>
            <translation>说明</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6236" />
            <location filename="../zscaler_api_client.py" line="6389" />
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Latency</source>
            <translation>延迟</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6350" />
            <source>Correlate retained local activity with every object in the current masked REST or GraphQL response. Paths are investigation hypotheses, never proof of compromise, and prepared chains never run automatically.</source>
            <translation>将保留的本地活动与当前屏蔽的 REST 或 GraphQL 响应中的每个对象相关联。路径是调查假设，而不是妥协的证明，准备好的链永远不会自动运行。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6354" />
            <source>Include current API/GraphQL response</source>
            <translation>包括当前的 API/GraphQL 响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6355" />
            <source>Correlate entities</source>
            <translation>关联实体</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6362" />
            <source>Evidence timeline</source>
            <translation>证据时间表</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>Entities</source>
            <translation>实体</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>Relationships</source>
            <translation>人际关系</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>Potential paths</source>
            <translation>潜在路径</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>High-risk entities</source>
            <translation>高风险实体</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6370" />
            <source>Filter entities:</source>
            <translation>过滤实体：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6370" />
            <source>Name, type, risk, or evidence source</source>
            <translation>名称、类型、风险或证据来源</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6371" />
            <source>SOC entity and potential attack-path graph</source>
            <translation>SOC 实体和潜在攻击路径图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6372" />
            <location filename="../zscaler_api_client.py" line="6802" />
            <source>Select an entity to inspect its local evidence.</source>
            <translation>选择一个实体来检查其本地证据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <source>Target</source>
            <translation>目标</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <source>Hops</source>
            <translation>啤酒花</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6374" />
            <source>Entity graph</source>
            <translation>实体图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6377" />
            <source>Explainable signals are derived only from retained local evidence and the selected response. Validate them against authoritative product telemetry.</source>
            <translation>可解释的信号仅来自保留的当地证据和选定的响应。根据权威产品遥测数据验证它们。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6378" />
            <source>Signal</source>
            <translation>信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6378" />
            <source>Entity</source>
            <translation>实体</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>Correlated signals</source>
            <translation>相关信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6383" />
            <location filename="../zscaler_api_client.py" line="6865" />
            <source>Export entity graph</source>
            <translation>导出实体图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <source>Trace observed digital experience from user and device through network and service edge to the application. The parser consumes the complete current REST or GraphQL response, marks missing stages explicitly, and never queries the tenant automatically.</source>
            <translation>通过网络和服务边缘跟踪观察到的从用户和设备到应用程序的数字体验。解析器使用完整的当前 REST 或 GraphQL 响应，显式标记缺失的阶段，并且从不自动查询租户。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6389" />
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Experience score</source>
            <translation>经验值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6389" />
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Packet loss</source>
            <translation>丢包</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6389" />
            <source>Journey issues</source>
            <translation>旅程问题</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6393" />
            <source>Observed user-to-application experience journey</source>
            <translation>观察用户到应用程序的体验历程</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6396" />
            <source>Trend metric:</source>
            <translation>趋势指标：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Observed value</source>
            <translation>观测值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6399" />
            <source>Stage</source>
            <translation>舞台</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6399" />
            <source>Metric</source>
            <translation>公制</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6401" />
            <source>Analyze current experience response</source>
            <translation>分析当前的体验反应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6402" />
            <location filename="../zscaler_api_client.py" line="6930" />
            <source>Export masked journey</source>
            <translation>出口蒙面之旅</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6403" />
            <source>Experience journey</source>
            <translation>体验之旅</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6421" />
            <source>Build and test explainable detections against retained local request history. Rules use a bounded declarative grammar—no Python, eval, tenant writes, network calls, or automatic remediation.</source>
            <translation>针对保留的本地请求历史构建并测试可解释的检测。规则使用有界声明性语法 - 无 Python、eval、租户写入、网络调用或自动修复。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6422" />
            <source>Template:</source>
            <translation>模板：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Server errors</source>
            <translation>服务器错误</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Rate-limit responses</source>
            <translation>速率限制响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>High request latency</source>
            <translation>高请求延迟</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Write activity</source>
            <translation>写活动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Authentication failures</source>
            <translation>认证失败</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Anomaly sensitivity:</source>
            <translation>异常敏感度：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Relaxed</source>
            <translation>轻松</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Balanced</source>
            <translation>平衡</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Sensitive</source>
            <translation>敏感</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6427" />
            <source>Declarative detection rule JSON</source>
            <translation>声明式检测规则 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6428" />
            <source>Validate rule</source>
            <translation>验证规则</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6429" />
            <source>Run local detection</source>
            <translation>运行本地检测</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6430" />
            <source>Analyze adaptive anomalies</source>
            <translation>分析适应性异常</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6431" />
            <location filename="../zscaler_api_client.py" line="7040" />
            <source>Export masked detection evidence</source>
            <translation>导出蒙版检测证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="6457" />
            <source>URL</source>
            <translation>网址</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6437" />
            <source>Endpoint</source>
            <translation>端点</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6437" />
            <source>Observed</source>
            <translation>观察到</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6438" />
            <source>Detection lab</source>
            <translation>检测实验室</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6475" />
            <source>Continuously evaluate a transparent local evidence baseline. Framework mappings are navigational aids—not certification—and no tenant query or remediation runs automatically.</source>
            <translation>持续评估透明的当地证据基线。框架映射是导航辅助工具，而不是认证，并且不会自动运行租户查询或修复。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6476" />
            <source>Framework view:</source>
            <translation>框架视图：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6477" />
            <source>All local controls</source>
            <translation>所有本地控制</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6477" />
            <source>NIST CSF 2.0 functions</source>
            <translation>NIST CSF 2.0 功能</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6477" />
            <source>CISA Zero Trust pillars</source>
            <translation>CISA 零信任支柱</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6478" />
            <source>Include proposed policy from Policy diff</source>
            <translation>包括政策差异中的拟议政策</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6479" />
            <source>Evaluate now</source>
            <translation>立即评估</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7334" />
            <source>Assurance score</source>
            <translation>保证分数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Passed</source>
            <translation>通过</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7232" />
            <source>Not evaluated</source>
            <translation>未评价</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <source>Evidence coverage</source>
            <translation>证据覆盖范围</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Control</source>
            <translation>控制</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Control objective</source>
            <translation>控制目标</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Framework mapping</source>
            <translation>框架映射</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Recommendation</source>
            <translation>推荐</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6488" />
            <source>Leadership narrative</source>
            <translation>领导力叙述</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6457" />
            <location filename="../zscaler_api_client.py" line="6490" />
            <source>Score</source>
            <translation>分数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6310" />
            <source>JSON Lines (SIEM/SOAR)</source>
            <translation>JSON 行（SIEM/SOAR）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6311" />
            <location filename="../zscaler_api_client.py" line="7772" />
            <source>Export masked security events</source>
            <translation>导出屏蔽的安全事件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6312" />
            <location filename="../zscaler_api_client.py" line="7778" />
            <source>Export read-only MCP manifest</source>
            <translation>导出只读 MCP 清单</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6313" />
            <location filename="../zscaler_api_client.py" line="7786" />
            <source>Export Terraform review handoff</source>
            <translation>导出 Terraform 审核交接</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6406" />
            <source>Inspect the complete current REST or GraphQL response for explicit internet exposure, vulnerability severity and broad or write-capable access. Findings are local hypotheses and deception suggestions are never deployed automatically.</source>
            <translation>检查完整的当前 REST 或 GraphQL 响应，以确定明确的互联网暴露、漏洞严重性以及广泛或可写入的访问。调查结果是局部假设，欺骗建议永远不会自动部署。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Exposure signals</source>
            <translation>曝光信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>High-risk assets</source>
            <translation>高风险资产</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Access findings</source>
            <translation>访问调查结果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Broad privileges</source>
            <translation>广泛的特权</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6412" />
            <source>Asset</source>
            <translation>资产</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6412" />
            <source>Risk score</source>
            <translation>风险评分</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6412" />
            <source>Observed factors</source>
            <translation>观察因素</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6413" />
            <source>Subject</source>
            <translation>主题</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6413" />
            <source>Permission field</source>
            <translation>权限字段</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6414" />
            <source>Defensive deception opportunities</source>
            <translation>防御性欺骗机会</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>Analyze current exposure and access</source>
            <translation>分析当前的暴露和访问</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <location filename="../zscaler_api_client.py" line="6963" />
            <source>Export masked exposure evidence</source>
            <translation>导出蒙面暴露证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <location filename="../zscaler_api_client.py" line="6981" />
            <location filename="../zscaler_api_client.py" line="6983" />
            <source>Investigation notebook</source>
            <translation>调查笔记本</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <source>Note title</source>
            <translation>注释标题</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <source>Comma-separated tags</source>
            <translation>逗号分隔的标签</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <source>Masked investigation observations, decisions and follow-up</source>
            <translation>隐蔽调查观察、决定和后续行动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Save local note</source>
            <translation>保存本地笔记</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <location filename="../zscaler_api_client.py" line="6988" />
            <source>Export masked notebook</source>
            <translation>导出蒙版笔记本</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Title</source>
            <translation>标题</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Tags</source>
            <translation>标签</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Preview</source>
            <translation>预览</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6418" />
            <source>Exposure &amp; access</source>
            <translation>曝光和访问</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6442" />
            <source>Use guided, locally tracked response and recovery checklists. A completed step records only operator intent in the local audit trail; it never changes a tenant or closes an authoritative incident.</source>
            <translation>使用指导性的、本地跟踪的响应和恢复检查表。完成的步骤仅在本地审计跟踪中记录操作员意图；它永远不会改变租户或结束权威事件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6443" />
            <source>Playbook:</source>
            <translation>剧本：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>API/service disruption</source>
            <translation>API/服务中断</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>High-risk policy change</source>
            <translation>高风险的政策变化</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>Digital experience degradation</source>
            <translation>数字体验退化</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>Possible credential exposure</source>
            <translation>可能的凭证暴露</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>Ransomware containment support</source>
            <translation>勒索软件遏制支持</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6447" />
            <source>Mark selected step complete</source>
            <translation>将所选步骤标记为完成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <location filename="../zscaler_api_client.py" line="7082" />
            <source>Export masked playbook evidence</source>
            <translation>导出蒙面剧本证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <source>Guidance</source>
            <translation>指导</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <source>Local evidence</source>
            <translation>当地证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6451" />
            <source>Smart API planner (review only)</source>
            <translation>智能 API 规划器（仅供审核）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <source>Describe a goal to rank documented Automation Hub operations deterministically. Read operations are preferred; tenant values are never guessed and nothing runs automatically.</source>
            <translation>描述确定性地对记录的 Automation Hub 操作进行排名的目标。读操作优先；租户值永远不会被猜测，并且不会自动运行任何内容。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6453" />
            <source>Example: investigate slow ZDX application experience</source>
            <translation>示例：调查缓慢的 ZDX 应用程序体验</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6454" />
            <source>Plan documented operations</source>
            <translation>计划记录的操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6455" />
            <source>Copy safe reads to API Chains</source>
            <translation>将安全读取复制到 API 链</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6457" />
            <source>Product</source>
            <translation>产品展示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6457" />
            <source>Operation</source>
            <translation>操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6458" />
            <location filename="../zscaler_api_client.py" line="7074" />
            <source>Response playbooks</source>
            <translation>应对手册</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Change owner</source>
            <translation>改变所有者</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Independent reviewer</source>
            <translation>独立评审员</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Owner:</source>
            <translation>业主：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6463" />
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Maintenance window confirmed</source>
            <translation>维护窗口已确认</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6463" />
            <source>Local simulation reviewed</source>
            <translation>本地模拟审查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6463" />
            <source>Rollback prepared</source>
            <translation>回滚准备就绪</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6465" />
            <source>Gate</source>
            <translation>门</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6465" />
            <source>Required</source>
            <translation>必填</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6471" />
            <location filename="../zscaler_api_client.py" line="7169" />
            <location filename="../zscaler_api_client.py" line="7173" />
            <location filename="../zscaler_api_client.py" line="7174" />
            <source>Verify rollback artifact</source>
            <translation>验证回滚工件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6491" />
            <source>Local baseline:</source>
            <translation>当地基线：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6492" />
            <source>Save assessment baseline</source>
            <translation>保存评估基线</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6493" />
            <location filename="../zscaler_api_client.py" line="7272" />
            <source>Export signed evidence</source>
            <translation>导出签名证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6494" />
            <location filename="../zscaler_api_client.py" line="7279" />
            <source>Verify signed evidence</source>
            <translation>验证签署的证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6496" />
            <location filename="../zscaler_api_client.py" line="7203" />
            <location filename="../zscaler_api_client.py" line="7259" />
            <source>Continuous assurance</source>
            <translation>持续保证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6561" />
            <location filename="../zscaler_api_client.py" line="7620" />
            <location filename="../zscaler_api_client.py" line="7624" />
            <location filename="../zscaler_api_client.py" line="7626" />
            <location filename="../zscaler_api_client.py" line="7638" />
            <source>Policy time travel</source>
            <translation>政策时间旅行</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6563" />
            <source>Save snapshot</source>
            <translation>保存快照</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6564" />
            <source>Use as baseline</source>
            <translation>用作基线</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6565" />
            <source>Load snapshot</source>
            <translation>加载快照</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6566" />
            <source>Delete snapshot</source>
            <translation>删除快照</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6568" />
            <location filename="../zscaler_api_client.py" line="7555" />
            <location filename="../zscaler_api_client.py" line="7590" />
            <location filename="../zscaler_api_client.py" line="7615" />
            <source>Policy twin</source>
            <translation>政策双胞胎</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6610" />
            <source>All environments</source>
            <translation>所有环境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6626" />
            <source>Showing local evidence for: {name}</source>
            <translation>Showing local evidence for: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6628" />
            <source>Cross-tenant overview is active. Exports and integrations will include all local environments.</source>
            <translation>跨租户概览处于活动状态。导出和集成将包括所有本地环境。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6634" />
            <location filename="../zscaler_api_client.py" line="6998" />
            <location filename="../zscaler_api_client.py" line="7404" />
            <source>Invalid JSON: </source>
            <translation>无效的 JSON： </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6654" />
            <source>Audit chain is valid</source>
            <translation>审核链有效</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6654" />
            <source>Audit chain needs review</source>
            <translation>审计链需要审查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6660" />
            <source>Success</source>
            <translation>成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6660" />
            <source>Other</source>
            <translation>其他</translation>
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
            <translation>关键</translation>
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
            <translation>高</translation>
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
            <translation>中等</translation>
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
            <translation>低</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6676" />
            <location filename="../zscaler_api_client.py" line="6838" />
            <location filename="../zscaler_api_client.py" line="7314" />
            <location filename="../zscaler_api_client.py" line="7572" />
            <location filename="../zscaler_api_client.py" line="7666" />
            <source>Info</source>
            <translation>信息</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6680" />
            <source>Audit integrity needs review</source>
            <translation>审计诚信需要审查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6680" />
            <source>The local audit chain did not verify.</source>
            <translation>当地审计链未核实。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6681" />
            <source>Repeated API failures</source>
            <translation>API 反复失败</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6681" />
            <source>{count} failed requests are in local history.</source>
            <translation>{count} failed requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6682" />
            <source>API failures observed</source>
            <translation>观察到 API 故障</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6682" />
            <source>{count} request(s) need review.</source>
            <translation>{count} request(s) need review.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6683" />
            <source>Change activity burst</source>
            <translation>变革活动爆发</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6683" />
            <source>{count} write requests are in local history.</source>
            <translation>{count} write requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6684" />
            <source>Slow API responses</source>
            <translation>API 响应慢</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6684" />
            <source>{count} request(s) took ten seconds or more.</source>
            <translation>{count} request(s) took ten seconds or more.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6685" />
            <source>No local telemetry yet</source>
            <translation>还没有本地遥测</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6685" />
            <source>Send or import redacted requests to establish a local baseline.</source>
            <translation>发送或导入经过编辑的请求以建立本地基线。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6706" />
            <source>{count} local alert(s) · error threshold: {threshold}</source>
            <translation>{count} local alert(s) · error threshold: {threshold}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6712" />
            <source>The local audit chain needs review.</source>
            <translation>当地审计链需要审查。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6713" />
            <source>Local failed requests reached the configured threshold.</source>
            <translation>本地失败请求达到配置的阈值。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6714" />
            <source>API rate limiting was observed in local history.</source>
            <translation>当地历史上曾观察到 API 速率限制。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6715" />
            <source>A response reported no remaining API rate-limit capacity.</source>
            <translation>响应报告没有剩余的 API 速率限制容量。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6716" />
            <source>The latest request failed after successful requests to the same endpoint.</source>
            <translation>向同一端点成功请求后，最新请求失败。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6717" />
            <source>The latest endpoint response was much slower than its local baseline.</source>
            <translation>最新的端点响应比其本地基线慢得多。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6718" />
            <source>Three or more local requests took ten seconds or more.</source>
            <translation>三个或更多本地请求需要十秒或更长时间。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6736" />
            <source>Local alert summary</source>
            <translation>本地警报摘要</translation>
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
            <translation>没有本地警报。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6740" />
            <source>Count: {count}</source>
            <translation>Count: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6745" />
            <source>Export local alerts</source>
            <translation>导出本地警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6774" />
            <source>Normal</source>
            <translation>正常</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6779" />
            <source>Observed relationship chain across local evidence; validate before treating it as an exploitable attack path.</source>
            <translation>观察到的跨本地证据的关系链；在将其视为可利用的攻击路径之前进行验证。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6785" />
            <source>Endpoint failure evidence</source>
            <translation>端点故障证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6785" />
            <source>Relationship concentration</source>
            <translation>关系集中度</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6785" />
            <source>Security indicator observed</source>
            <translation>观察到的安全指标</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6787" />
            <source>The endpoint has locally retained server or network failure evidence.</source>
            <translation>端点本地保留有服务器或网络故障证据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6788" />
            <source>The entity is connected to an unusually broad set of locally observed relationships.</source>
            <translation>该实体与一组异常广泛的本地观察到的关系相关联。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6789" />
            <source>A threat, exposure, vulnerability, or indicator-like object was present in the response.</source>
            <translation>响应中存在威胁、暴露、漏洞或类似指标的对象。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6798" />
            <source>The graph reached its local safety limit; use the filter or export the evidence for complete review.</source>
            <translation>该图达到了其局部安全极限；使用过滤器或导出证据以进行完整审查。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6800" />
            <source>No correlatable entities are available in the selected local scope.</source>
            <translation>所选本地范围内没有可用的关联实体。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6822" />
            <source>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</source>
            <translation>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6841" />
            <source>Request</source>
            <translation>请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6841" />
            <source>Audit</source>
            <translation>审计</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6847" />
            <source>1. Review failed requests in the local timeline.
2. Select the matching product and endpoint in API Explorer.
3. Run the read-only status or list operation.
4. Compare the masked response with the audit trail.
5. Export evidence or open a change review; no remediation is sent automatically.</source>
            <translation>1. 在本地时间线中查看失败的请求。
2. 在API Explorer 中选择匹配的产品和端点。
3. 运行只读状态或列表操作。
4. 将屏蔽响应与审计跟踪进行比较。
5.导出证据或开启变更审查；不会自动发送任何补救措施。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6848" />
            <source>1. Review recent write requests and audit events.
2. Export or load the current policy object.
3. Use Policy diff and local simulation.
4. Run compliance checks.
5. Prepare a reviewed Terraform or Git change; no apply is sent automatically.</source>
            <translation>1. 查看最近的写入请求和审核事件。
2. 导出或加载当前策略对象。
3. 使用策略差异和本地模拟。
4. 运行合规性检查。
5. 准备经过审核的 Terraform 或 Git 变更；不会自动发送申请。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6849" />
            <source>1. Identify slow requests in the local timeline.
2. Review response status, duration, and rate-limit headers.
3. Query the relevant ZDX or product status endpoint.
4. Compare against recent requests.
5. Export the masked incident evidence for escalation.</source>
            <translation>1. 识别本地时间线中的缓慢请求。
2. 查看响应状态、持续时间和速率限制标头。
3. 查询相关ZDX或产品状态端点。
4. 与最近的请求进行比较。
5. 导出隐藏的事件证据以进行升级。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6898" />
            <source>{value:g} ms</source>
            <translation>{value:g} ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>User</source>
            <translation>用户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Device</source>
            <translation>设备</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Network</source>
            <translation>网络</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Service edge</source>
            <translation>服务优势</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Application</source>
            <translation>应用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Device score</source>
            <translation>设备得分</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Application score</source>
            <translation>申请分数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Service-edge score</source>
            <translation>服务优势得分</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Jitter</source>
            <translation>抖动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>DNS time</source>
            <translation>DNS时间</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>TCP connect time</source>
            <translation>TCP 连接时间</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Page fetch time</source>
            <translation>页面获取时间</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Availability</source>
            <translation>可用性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>CPU</source>
            <translation>中央处理器</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Memory</source>
            <translation>内存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Overall experience score is below 70</source>
            <translation>总体体验分数低于70</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Device score is below 70</source>
            <translation>设备分数低于 70</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Application score is below 70</source>
            <translation>申请分数低于70分</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Service-edge score is below 70</source>
            <translation>服务优势得分低于 70</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed latency exceeds 250 ms</source>
            <translation>观察到的延迟超过 250 毫秒</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed packet loss exceeds 2%</source>
            <translation>观察到丢包率超过 2%</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed jitter exceeds 40 ms</source>
            <translation>观察到的抖动超过 40 毫秒</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed availability is below 99%</source>
            <translation>观察到的可用性低于 99%</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6918" />
            <source>Schema-tolerant local interpretation of observed API fields. Thresholds are transparent operational hints, not Zscaler health verdicts or SLA determinations.</source>
            <translation>观察到的 API 字段的模式容忍本地解释。阈值是透明的操作提示，而不是 Zscaler 运行状况判定或 SLA 确定。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6919" />
            <source>No current API or GraphQL response is available. Run or import a ZDX/OneAPI query, then analyze again.</source>
            <translation>当前没有可用的 API 或 GraphQL 响应。运行或导入 ZDX/OneAPI 查询，然后再次分析。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6919" />
            <source>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</source>
            <translation>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6953" />
            <source>Explicit broad or write-capable access observed; validate least privilege and assignment context.</source>
            <translation>观察到显式的广泛访问或可写访问；验证最小权限和分配上下文。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6958" />
            <source>Consider a monitored decoy resource near exposed paths</source>
            <translation>考虑暴露路径附近受监控的诱饵资源</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6958" />
            <source>Consider a non-production canary permission for privileged-path monitoring</source>
            <translation>考虑使用非生产金丝雀权限进行特权路径监控</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6958" />
            <source>Maintain an exposure and least-privilege baseline</source>
            <translation>维持曝光和最低权限基线</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6981" />
            <source>Select one environment before saving an investigation note.</source>
            <translation>在保存调查记录之前选择一个环境。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7006" />
            <source>Rule is valid and can be evaluated locally.</source>
            <translation>规则有效并且可以在本地进行评估。</translation>
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
            <translation>中值绝对偏差 (MAD)，按 1.4826 缩放，本底噪声为 10%/10 ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7035" />
            <source>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</source>
            <translation>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Confirm scope from retained failures</source>
            <translation>确认保留故障的范围</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Check rate-limit and service-health evidence</source>
            <translation>检查速率限制和服务健康证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Collect read-only product status</source>
            <translation>收集只读产品状态</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Correlate affected entities</source>
            <translation>关联受影响的实体</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Export masked incident evidence</source>
            <translation>导出蒙面事件证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Record closure decision</source>
            <translation>记录关闭决定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Capture current policy baseline</source>
            <translation>捕捉当前政策基线</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Run policy diff and best-practice checks</source>
            <translation>运行策略差异和最佳实践检查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Run Policy Twin and decision simulation</source>
            <translation>运行策略孪生和决策模拟</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Prepare rollback artifact</source>
            <translation>准备回滚工件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Record independent review</source>
            <translation>记录独立审查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Export change package</source>
            <translation>导出变更包</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Identify affected user and application scope</source>
            <translation>确定受影响的用户和应用范围</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Inspect device metrics</source>
            <translation>检查设备指标</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Inspect network latency, loss and jitter</source>
            <translation>检查网络延迟、丢失和抖动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Inspect service-edge path</source>
            <translation>检查服务边缘路径</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Compare application response</source>
            <translation>比较应用程序响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Export masked journey evidence</source>
            <translation>导出蒙面旅程证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Stop copying or exporting raw material</source>
            <translation>停止复制或出口原材料</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Rotate the affected credential outside this client</source>
            <translation>将受影响的凭证轮换到该客户端之外</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Clear in-memory sessions</source>
            <translation>清除内存中的会话</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Review masked audit evidence</source>
            <translation>审查隐藏的审计证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Validate least-privilege access</source>
            <translation>验证最低权限访问</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Record containment and recovery</source>
            <translation>记录遏制和恢复</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Validate the alert in authoritative security tooling</source>
            <translation>在权威安全工具中验证警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Identify users, devices and applications</source>
            <translation>识别用户、设备和应用程序</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Preserve masked evidence</source>
            <translation>保留蒙面证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Prepare containment changes for independent approval</source>
            <translation>准备遏制变更以供独立批准</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Track recovery prerequisites</source>
            <translation>跟踪恢复先决条件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Record lessons learned</source>
            <translation>记录经验教训</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7062" />
            <source>Complete</source>
            <translation>完成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7062" />
            <source>Pending</source>
            <translation>待定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7063" />
            <source>Recorded in local audit trail</source>
            <translation>记录在本地审计追踪中</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7063" />
            <source>No completion evidence</source>
            <translation>没有完成证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7074" />
            <source>Select a playbook step first.</source>
            <translation>首先选择一个剧本步骤。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7078" />
            <source>Mark step complete</source>
            <translation>将步骤标记为完成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7078" />
            <source>Record this step as completed in the local audit trail? This does not perform the action or update an authoritative incident.</source>
            <translation>在本地审计跟踪中记录此步骤是否已完成？这不会执行操作或更新权威事件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7089" />
            <source>Describe an administrative or investigation goal first.</source>
            <translation>首先描述行政或调查目标。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7098" />
            <source>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</source>
            <translation>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Smart API planner</source>
            <translation>智能API规划器</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Create a plan with at least one read operation first.</source>
            <translation>首先创建一个至少包含一个读取操作的计划。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7106" />
            <source>Planner output copied for review. Validate the chain, supply required path values, and approve it separately before execution.</source>
            <translation>复制规划器输出以供审核。验证链，提供所需的路径值，并在执行前单独批准。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Review policy diff</source>
            <translation>审查政策差异</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Run local simulation</source>
            <translation>运行本地模拟</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Record reviewer approval</source>
            <translation>记录审阅者批准</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Export Git/Terraform review</source>
            <translation>导出 Git/Terraform 审核</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Apply outside this client only after approval</source>
            <translation>经批准后方可在本客户之外申请</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7128" />
            <source>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</source>
            <translation>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Change reference recorded</source>
            <translation>更改参考记录</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Change owner recorded</source>
            <translation>更改所有者已记录</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Independent reviewer recorded</source>
            <translation>独立评审员记录</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Local policy simulation reviewed</source>
            <translation>审查地方政策模拟</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Rollback artifact prepared</source>
            <translation>回滚工件已准备好</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Local approval recorded</source>
            <translation>当地批准记录</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Yes</source>
            <translation>是的</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>No</source>
            <translation>否</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Blocked</source>
            <translation>被阻止</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Optional</source>
            <translation>可选</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7147" />
            <source>Enter a reviewer before recording approval.</source>
            <translation>在记录批准之前输入审阅者。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7149" />
            <source>Local approval recorded. External apply remains disabled.</source>
            <translation>当地批准记录。外部应用保持禁用状态。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7173" />
            <source>Rollback artifact integrity verified. This does not authorize applying it.</source>
            <translation>已验证回滚工件完整性。这并不授权应用它。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7174" />
            <source>Rollback verification failed: {reason}</source>
            <translation>Rollback verification failed: {reason}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7184" />
            <source>No comparison baseline</source>
            <translation>无比较基线</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7189" />
            <source>{time} · score {score}/100</source>
            <translation>{time} · score {score}/100</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7212" />
            <source>Audit evidence integrity</source>
            <translation>审计证据完整性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7212" />
            <source>Review and restore the local hash-linked audit trail.</source>
            <translation>查看并恢复本地哈希链接的审计跟踪。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7213" />
            <source>Operational evidence available</source>
            <translation>可用的操作证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7213" />
            <source>Collect or import masked read-only evidence for the selected environment.</source>
            <translation>收集或导入所选环境的屏蔽只读证据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7214" />
            <source>API health and anomaly monitoring</source>
            <translation>API健康和异常监控</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7214" />
            <source>Investigate repeated failures, latency regressions, and rate limiting.</source>
            <translation>研究重复失败、延迟回归和速率限制。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7215" />
            <source>Least-privilege policy baseline</source>
            <translation>最小特权策略基线</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7215" />
            <source>Constrain unconditional allow rules and validate order in Policy Twin.</source>
            <translation>约束无条件允许规则并验证策略孪生中的顺序。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7216" />
            <source>Reviewed write activity</source>
            <translation>审查写入活动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7216" />
            <source>Require a recorded review and rollback artifact for write activity.</source>
            <translation>需要记录写入活动的审查和回滚工件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7217" />
            <source>Incident evidence readiness</source>
            <translation>事件证据准备就绪</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7217" />
            <source>Prepare and export masked investigation evidence for unresolved failures.</source>
            <translation>为未解决的故障准备并导出隐蔽的调查证据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7218" />
            <source>Recovery evidence available</source>
            <translation>可用的恢复证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7218" />
            <source>Save a policy snapshot or reviewed rollback artifact before change.</source>
            <translation>在更改之前保存策略快照或审查的回滚工件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7232" />
            <source>Pass</source>
            <translation>通行证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7232" />
            <source>Fail</source>
            <translation>失败</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7245" />
            <location filename="../zscaler_api_client.py" line="7302" />
            <location filename="../zscaler_api_client.py" line="7348" />
            <source>Local assurance requires attention</source>
            <translation>地方保障需要关注</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7245" />
            <location filename="../zscaler_api_client.py" line="7302" />
            <location filename="../zscaler_api_client.py" line="7348" />
            <source>No failing controls in the evaluated local scope</source>
            <translation>在评估的局部范围内没有失败的控制</translation>
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
            <translation>优先行动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7251" />
            <source>Local evidence limitation: validate results against authoritative tenant and governance records.</source>
            <translation>本地证据限制：根据权威租户和治理记录验证结果。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7255" />
            <source>Now</source>
            <translation>现在</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7256" />
            <source>Assessment {identifier} · {frameworks} · local evidence only, not certification.</source>
            <translation>Assessment {identifier} · {frameworks} · local evidence only, not certification.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7259" />
            <source>Select one environment before saving an assurance baseline.</source>
            <translation>在保存保障基线之前选择一个环境。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7269" />
            <location filename="../zscaler_api_client.py" line="7271" />
            <location filename="../zscaler_api_client.py" line="7288" />
            <location filename="../zscaler_api_client.py" line="7290" />
            <source>Signed evidence</source>
            <translation>签名证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7269" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>系统钥匙串无法存储证据签名密钥。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7271" />
            <source>The protected evidence signing key is invalid. Rotate it in Settings before signing.</source>
            <translation>受保护的证据签名密钥无效。签名前在“设置”中旋转它。</translation>
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
            <translation>行政保证叙述</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7330" />
            <source>Posture score</source>
            <translation>姿势评分</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7331" />
            <source>Local requests</source>
            <translation>本地请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7332" />
            <source>Failed requests</source>
            <translation>失败的请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7461" />
            <source>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</source>
            <translation>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7467" />
            <source>Cancellation requested; the current HTTP request will finish and no new chain step will start.</source>
            <translation>要求取消；当前的 HTTP 请求将完成，并且不会启动新的链步骤。</translation>
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
            <translation>在所有步骤开始之前，链条被取消；已完成的结果被保留。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7515" />
            <source>Run a chain before exporting its masked results.</source>
            <translation>在导出其屏蔽结果之前运行一条链。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7539" />
            <source>No baseline (analyze current policy only)</source>
            <translation>无基线（仅分析当前政策）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Unconditional allow</source>
            <translation>无条件允许</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Shadowed conflict</source>
            <translation>隐蔽的冲突</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Redundant shadow</source>
            <translation>冗余阴影</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Overlapping actions</source>
            <translation>重叠动作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Duplicate rule name</source>
            <translation>规则名称重复</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7567" />
            <source>An unconditional allow rule can expose every later matching scope.</source>
            <translation>无条件允许规则可以公开以后的每个匹配范围。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7568" />
            <source>The later rule can never decide because an earlier rule covers all of its matches.</source>
            <translation>后面的规则永远无法做出决定，因为前面的规则涵盖了它的所有匹配项。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7569" />
            <source>The rules can match the same context but have different actions; order decides the outcome.</source>
            <translation>规则可以匹配相同的上下文但有不同的动作；顺序决定结果。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7570" />
            <source>Duplicate rule names make reviews, evidence, and rollback ambiguous.</source>
            <translation>重复的规则名称会使审查、证据和回滚变得不明确。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7579" />
            <source>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</source>
            <translation>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7586" />
            <source>Request context must be a JSON object.</source>
            <translation>请求上下文必须是 JSON 对象。</translation>
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
            <translation>在保存策略快照之前选择一个环境。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7626" />
            <source>Policy snapshots are limited to 2 MB.</source>
            <translation>策略快照限制为 2 MB。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7627" />
            <source>Save policy snapshot</source>
            <translation>保存策略快照</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7627" />
            <source>Snapshot name:</source>
            <translation>快照名称：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7638" />
            <source>Select a saved policy snapshot first.</source>
            <translation>首先选择已保存的策略快照。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7644" />
            <source>Delete policy snapshot</source>
            <translation>删除策略快照</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7644" />
            <source>Delete the selected local policy snapshot?</source>
            <translation>删除选定的本地策略快照？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7715" />
            <source>Local automation must be an existing absolute path to a non-symlinked .py file no larger than 1 MiB.</source>
            <translation>本地自动化必须是不大于 1 MiB 的非符号链接 .py 文件的现有绝对路径。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7718" />
            <location filename="../zscaler_api_client.py" line="7882" />
            <source>Webhook endpoints must use HTTPS (or local HTTP) and must not contain credentials in the URL.</source>
            <translation>Webhook 端点必须使用 HTTPS（或本地 HTTP），并且 URL 中不得包含凭据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7722" />
            <source>Secure storage</source>
            <translation>安全存储</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7722" />
            <source>The system keychain could not save the webhook endpoint. Check the keychain service and try again.</source>
            <translation>系统钥匙串无法保存 Webhook 端点。检查钥匙串服务并重试。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7738" />
            <source>Connectivity test</source>
            <translation>连通性测试</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7738" />
            <source>Alert snapshot</source>
            <translation>警报快照</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7739" />
            <source>Started</source>
            <translation>开始</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7499" />
            <location filename="../zscaler_api_client.py" line="7739" />
            <source>Succeeded</source>
            <translation>成功了</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6528" />
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</source>
            <translation>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>A JSON list of API requests. Relative paths use the active product host; references can use only completed step IDs.</source>
            <translation>API 请求的 JSON 列表。相对路径使用活动产品主机；参考只能使用已完成的步骤 ID。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Step</source>
            <translation>步骤</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="6457" />
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Method</source>
            <translation>方法</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Records</source>
            <translation>记录</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Duration</source>
            <translation>持续时间</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7499" />
            <location filename="../zscaler_api_client.py" line="7739" />
            <source>Failed</source>
            <translation>失败</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7772" />
            <source>All files (*)</source>
            <translation>所有文件 (*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7775" />
            <source>Exported {count} masked local event(s) as {format}. No data was sent automatically.</source>
            <translation>Exported {count} masked local event(s) as {format}. No data was sent automatically.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7791" />
            <source>Created a non-executable Terraform review handoff. Run terraformer and terraform plan only after independent review; this client never applies it.</source>
            <translation>创建了不可执行的 Terraform 审核交接。仅在独立审查后运行 terraformer 和 terraform plan；该客户从未应用它。</translation>
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
            <translation>本地自动化</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7817" />
            <source>Read-only mode blocks local automation.</source>
            <translation>只读模式会阻止本地自动化。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7820" />
            <source>Configure a valid local Python automation in Governance first.</source>
            <translation>首先在治理中配置有效的本地 Python 自动化。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7822" />
            <source>Local automation is already running.</source>
            <translation>本地自动化已经运行。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7828" />
            <source>Run the reviewed Python file with masked local posture and alert data? The process receives no API credentials.</source>
            <translation>使用屏蔽的本地状态和警报数据运行经过审查的 Python 文件？该进程不接收任何 API 凭据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7856" />
            <source>Local automation exceeded the 15-second limit and was stopped.</source>
            <translation>本地自动化超过 15 秒限制并被停止。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7866" />
            <source>Local automation completed with exit code {code}.</source>
            <translation>Local automation completed with exit code {code}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7871" />
            <source>Local automation failed to start.</source>
            <translation>本地自动化无法启动。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7877" />
            <source>Send the current masked local alert snapshot to the configured webhook endpoint?</source>
            <translation>将当前屏蔽的本地警报快照发送到配置的 Webhook 端点？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7883" />
            <location filename="../zscaler_api_client.py" line="7885" />
            <location filename="../zscaler_api_client.py" line="7889" />
            <location filename="../zscaler_api_client.py" line="7909" />
            <location filename="../zscaler_api_client.py" line="7916" />
            <source>Webhook delivery</source>
            <translation>Webhook 交付</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7885" />
            <source>A webhook delivery is already running.</source>
            <translation>Webhook 传送已在运行。</translation>
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
            <translation>背景</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7945" />
            <source>App only</source>
            <translation>仅限应用程序</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7946" />
            <source>Paused</source>
            <translation>已暂停</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7958" />
            <source>Select a scheduled report first.</source>
            <translation>首先选择一个预定的报告。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7976" />
            <source>The scheduled report was generated locally.</source>
            <translation>预定的报告是在本地生成的。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7978" />
            <source>The scheduled report could not be generated. Check its output folder and the audit trail.</source>
            <translation>无法生成计划的报告。检查其输出文件夹和审计跟踪。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7992" />
            <source>The operating-system schedule could not be updated. No state was changed.</source>
            <translation>无法更新操作系统计划。状态没有改变。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8008" />
            <source>The report is paused and cannot generate output, but the operating-system job cleanup needs manual review.</source>
            <translation>报告已暂停，无法生成输出，但操作系统作业清理需要手动审核。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8014" />
            <source>Remove the selected scheduled report?</source>
            <translation>删除选定的预定报告？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8027" />
            <source>The report was removed, but the operating-system job could not be removed. It can no longer generate a report because its schedule ID is no longer active.</source>
            <translation>该报告已删除，但无法删除操作系统作业。它无法再生成报告，因为其计划 ID 不再处于活动状态。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8030" />
            <source>Report name:</source>
            <translation>报告名称：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8043" />
            <source>Run this report even when ZS API Client is closed? This creates a user-level operating-system schedule and requires no administrator privileges.</source>
            <translation>即使 ZS API 客户端关闭也运行此报告吗？这将创建用户级操作系统计划，并且不需要管理员权限。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8057" />
            <source>The operating-system schedule could not be created. The report was not scheduled.</source>
            <translation>无法创建操作系统计划。该报告未安排。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8065" />
            <source>Scheduled report saved. It will run in the background even when the application is closed.</source>
            <translation>已保存预定报告。即使应用程序关闭，它也会在后台运行。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8065" />
            <source>Scheduled report saved. It will run locally while the application is open.</source>
            <translation>已保存预定报告。当应用程序打开时，它将在本地运行。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7930" />
            <location filename="../zscaler_api_client.py" line="8033" />
            <source>Hourly</source>
            <translation>每小时</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7930" />
            <location filename="../zscaler_api_client.py" line="8033" />
            <source>Daily</source>
            <translation>每日</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7930" />
            <location filename="../zscaler_api_client.py" line="8033" />
            <source>Weekly</source>
            <translation>每周</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8034" />
            <source>Report cadence:</source>
            <translation>报告节奏：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8037" />
            <source>Choose report output folder</source>
            <translation>选择报告输出文件夹</translation>
        </message>
        <message>
            <source>Scheduled report saved. Reports run locally while the application is open.</source>
            <translation type="vanished">已保存预定报告。当应用程序打开时，报告在本地运行。</translation>
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
            <translation>有效</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7300" />
            <location filename="../zscaler_api_client.py" line="7333" />
            <source>Needs review</source>
            <translation>需要审查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7300" />
            <source>Incident signals</source>
            <translation>事故信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Executive actions</source>
            <translation>行政行动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Review high-risk findings and approval records.</source>
            <translation>审查高风险结果和批准记录。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Use the Security Posture and Change Control workspaces for evidence.</source>
            <translation>使用安全态势和变更控制工作区作为证据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7306" />
            <source>SOC next steps</source>
            <translation>SOC 后续步骤</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7306" />
            <source>Use Incident Investigation to prepare a review chain.</source>
            <translation>使用事件调查来准备审查链。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7306" />
            <source>Export masked evidence before escalation.</source>
            <translation>在升级之前导出隐藏的证据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7308" />
            <source>Operations next steps</source>
            <translation>后续操作步骤</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7308" />
            <source>Review slow responses and API failures.</source>
            <translation>查看缓慢的响应和 API 故障。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7308" />
            <source>Confirm rate limits and service health with read-only queries.</source>
            <translation>通过只读查询确认速率限制和服务运行状况。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7408" />
            <source>Configure a host for the active product before running a chain.</source>
            <translation>在运行链之前为活动产品配置主机。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7418" />
            <source>Each chain step must stay on the active product host.</source>
            <translation>每个链步骤必须保留在活动产品主机上。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7434" />
            <source>Fix the chain validation errors before running it.</source>
            <translation>在运行之前修复链验证错误。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7438" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>只读模式阻止写入请求。更改操作中心中的本地角色以继续。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7440" />
            <source>Authenticate the active product before running a chain.</source>
            <translation>在运行链之前验证活动产品。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7441" />
            <source>Run {count} API step(s) sequentially against the active environment?</source>
            <translation>Run {count} API step(s) sequentially against the active environment?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7443" />
            <source>The chain contains write operations; review and approve before continuing.</source>
            <translation>该链包含写操作；在继续之前进行审查并批准。</translation>
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
            <translation type="vanished">指标是本地的并且不包含凭据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7678" />
            <source>Policy export</source>
            <translation>政策输出</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7679" />
            <source>Export policy</source>
            <translation>出口政策</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7688" />
            <source>Compliance</source>
            <translation>合规性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7712" />
            <source>Alert threshold must be a positive integer.</source>
            <translation>警报阈值必须是正整数。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7726" />
            <source>Governance settings saved.</source>
            <translation>已保存治理设置。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7730" />
            <source>Use OneAPI or legacy clients locally</source>
            <translation>在本地使用 OneAPI 或旧客户端</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7730" />
            <source>AI-assisted, tool-scoped exploration</source>
            <translation>人工智能辅助的工具范围探索</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7730" />
            <source>Export existing ZIA/ZPA configuration to Terraform</source>
            <translation>将现有 ZIA/ZPA 配置导出到 Terraform</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7733" />
            <source>Available</source>
            <translation>可用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7733" />
            <source>Not installed</source>
            <translation>未安装</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7765" />
            <source>Prepare an integration first.</source>
            <translation>首先准备集成。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6730" />
            <location filename="../zscaler_api_client.py" line="7768" />
            <source>Copied to clipboard</source>
            <translation>已复制到剪贴板</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7510" />
            <source>The chain stopped after the first failed step.</source>
            <translation>链条在第一个失败的步骤后停止了。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7662" />
            <location filename="../zscaler_api_client.py" line="7946" />
            <source>Enabled</source>
            <translation>启用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7662" />
            <source>Disabled</source>
            <translation>残疾人</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7668" />
            <source>Allow rule has no conditions</source>
            <translation>允许规则没有条件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7668" />
            <source>Rule is disabled</source>
            <translation>规则已禁用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7669" />
            <source>Rule name is duplicated</source>
            <translation>规则名称重复</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7669" />
            <source>Rule action is unspecified</source>
            <translation>规则操作未指定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7698" />
            <source>Rules evaluated</source>
            <translation>评估规则</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7698" />
            <source>Matched rule</source>
            <translation>匹配规则</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>Matched</source>
            <translation>匹配的</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>Not matched</source>
            <translation>不匹配</translation>
        </message>
        <message>
            <source>Webhook test</source>
            <translation type="vanished">Webhook测试</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7882" />
            <source>Configure a webhook endpoint in Governance first.</source>
            <translation>首先在治理中配置 Webhook 端点。</translation>
        </message>
        <message>
            <source>Webhook endpoints must use HTTPS unless they are local.</source>
            <translation type="vanished">Webhook 端点必须使用 HTTPS，除非它们是本地的。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7874" />
            <source>Send a masked connectivity test to the configured webhook endpoint?</source>
            <translation>向配置的 Webhook 端点发送屏蔽连接测试？</translation>
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
            <translation>预定报告</translation>
        </message>
        <message>
            <source>Report name and cadence:</source>
            <translation type="vanished">报告名称和节奏：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8069" />
            <source>Save support bundle</source>
            <translation>保存支持包</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8074" />
            <source>Support bundle</source>
            <translation>支持包</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8074" />
            <source>A redacted support bundle was created.</source>
            <translation>创建了经过编辑的支持包。</translation>
        </message>
    </context>
    <context>
        <name>PacWorkspaceDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="8141" />
            <location filename="../zscaler_api_client.py" line="8466" />
            <source>PAC Workspace</source>
            <translation>PAC工作区</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8145" />
            <source>Create and verify PAC files locally. API operations are prepared in the request editor and are never sent or deployed automatically.</source>
            <translation>在本地创建并验证 PAC 文件。 API 操作是在请求编辑器中准备的，并且永远不会自动发送或部署。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8150" />
            <source>PAC experience:</source>
            <translation>公共政策委员会经验：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8152" />
            <source>Guided (recommended)</source>
            <translation>引导（推荐）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8153" />
            <source>Advanced</source>
            <translation>高级</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8170" />
            <source>PAC name:</source>
            <translation>政治行动委员会名称：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8171" />
            <source>Change note:</source>
            <translation>更改说明：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8172" />
            <source>Hosted PAC URL (optional for ZCC):</source>
            <translation>托管 PAC URL（ZCC 可选）：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8173" />
            <source>Existing ZIA PAC ID (for lifecycle actions):</source>
            <translation>现有 ZIA PAC ID（用于生命周期操作）：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8174" />
            <source>ZIA PAC version:</source>
            <translation>ZIA PAC 版本：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8175" />
            <source>ZIA version action:</source>
            <translation>ZIA版本动作：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8182" />
            <source>Start with a safe baseline. Enter only internal destinations that must bypass Zscaler; all other traffic uses the selected gateway and failover.</source>
            <translation>从安全基线开始。仅输入必须绕过 Zscaler 的内部目标；所有其他流量都使用选定的网关和故障转移。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8190" />
            <source>Direct-bypass host patterns (one per line):</source>
            <translation>直接旁路主机模式（每行一个）：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8191" />
            <source>Primary gateway:</source>
            <translation>主网关：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8192" />
            <source>Secondary gateway:</source>
            <translation>二级网关：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8195" />
            <source>Create guided PAC</source>
            <translation>创建指导性 PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8196" />
            <source>Load safe example</source>
            <translation>加载安全示例</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8199" />
            <source>Generated PAC preview (read-only):</source>
            <translation>Generated PAC preview (read-only):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8206" />
            <source>Guided setup</source>
            <translation>引导式设置</translation>
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
            <translation>加载 PAC...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8218" />
            <source>Save PAC…</source>
            <translation>保存 PAC...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8219" />
            <source>Save local draft</source>
            <translation>保存本地草稿</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8222" />
            <source>Author</source>
            <translation>作者</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8225" />
            <source>Variables (JSON). Standard Zscaler names: </source>
            <translation>变量 (JSON)。标准 Zscaler 名称： </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8229" />
            <source>Test URL:</source>
            <translation>测试网址：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8231" />
            <source>Apply variables</source>
            <translation>应用变量</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8232" />
            <source>Run static verification</source>
            <translation>运行静态验证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8233" />
            <source>Preview decision</source>
            <translation>预览决定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8236" />
            <source>Verify</source>
            <translation>验证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8239" />
            <source>PAC reference and review help. The verifier never executes JavaScript; validate in ZIA and test a pilot group before deployment.</source>
            <translation>PAC 参考和审查帮助。验证者从不执行 JavaScript；在部署前在 ZIA 中进行验证并测试试点组。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8240" />
            <source>Variable or function</source>
            <translation>变量或函数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8240" />
            <source>Purpose / guidance</source>
            <translation>目的/指导</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8248" />
            <source>Roll out in stages: validate, test representative URLs, stage to a small pilot group, then deploy. Prefer host-pattern checks; avoid DNS helpers in Client Connector PAC files where possible.</source>
            <translation>分阶段推出：验证、测试代表性 URL、进入小型试点组，然后部署。更喜欢主机模式检查；尽可能避免在客户端连接器 PAC 文件中使用 DNS 帮助程序。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8250" />
            <source>Help and reference</source>
            <translation>帮助和参考</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8253" />
            <source>Map supplied ZIA PAC metadata to ZCC forwarding-profile actions. Matches use hosted PAC URLs or an inline PAC content fingerprint; names alone are never treated as a match.</source>
            <translation>将提供的 ZIA PAC 元数据映射到 ZCC 转发配置文件操作。匹配使用托管 PAC URL 或内联 PAC 内容指纹；单独的名字永远不会被视为匹配。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8256" />
            <source>ZIA PAC list JSON</source>
            <translation>ZIA PAC 列表 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8258" />
            <source>ZCC forwarding-profile list JSON</source>
            <translation>ZCC 转发配置文件列表 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8262" />
            <source>Build PAC mappings</source>
            <translation>构建 PAC 映射</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8263" />
            <location filename="../zscaler_api_client.py" line="8298" />
            <source>Prepare ZIA PAC list</source>
            <translation>准备 ZIA PAC 列表</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8264" />
            <location filename="../zscaler_api_client.py" line="8290" />
            <source>Prepare ZCC profile list</source>
            <translation>准备 ZCC 配置文件列表</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>ZCC profile</source>
            <translation>ZCC简介</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>Action / network</source>
            <translation>动作/网络</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>PAC type</source>
            <translation>聚合氯化铝型</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>PAC reference</source>
            <translation>PAC 参考</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>ZIA status</source>
            <translation>ZIA 状态</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>Mapping result</source>
            <translation>测绘结果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>Profile ID</source>
            <translation>档案编号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8270" />
            <location filename="../zscaler_api_client.py" line="8379" />
            <source>PAC mappings</source>
            <translation>PAC 映射</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8273" />
            <source>Search the bundled Zscaler Configuration Center index of Cloud Enforcement Node ranges, proxy/VPN hostnames, GRE and extranet virtual IP addresses. The PAC editor shows a help balloon when a line references an indexed endpoint.</source>
            <translation>搜索云执行节点范围、代理/VPN 主机名、GRE 和外联网虚拟 IP 地址的捆绑 Zscaler 配置中心索引。当行引用索引端点时，PAC 编辑器会显示帮助气球。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8277" />
            <source>Search city, CIDR, hostname, GRE or VPN address</source>
            <translation>搜索城市、CIDR、主机名、GRE 或 VPN 地址</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8278" />
            <source>Search data centers</source>
            <translation>搜索数据中心</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Continent</source>
            <translation>大陆</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Data center</source>
            <translation>数据中心</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>CIDR range</source>
            <translation>CIDR范围</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Proxy hostname</source>
            <translation>代理主机名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>VPN hostname</source>
            <translation>VPN 主机名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>GRE VIP</source>
            <translation>GRE贵宾</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Extranet VIP</source>
            <translation>外网贵宾</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Coordinates</source>
            <translation>坐标</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8284" />
            <source>Zscaler data centers</source>
            <translation>Zscaler 数据中心</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8287" />
            <source>Paste a forwarding profile returned by ZCC, or first prepare the profile-list request. Existing profile fields are preserved when PAC fields are updated.</source>
            <translation>粘贴 ZCC 返回的转发配置文件，或首先准备配置文件列表请求。更新 PAC 字段时，将保留现有配置文件字段。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8291" />
            <source>Prepare ZCC update</source>
            <translation>准备 ZCC 更新</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8293" />
            <source>ZCC / Mobile Portal</source>
            <translation>ZCC / 移动门户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8296" />
            <source>Prepare ZIA validation</source>
            <translation>准备 ZIA 验证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8297" />
            <source>Prepare ZIA hosted PAC upload</source>
            <translation>准备 ZIA 托管的 PAC 上传</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8299" />
            <source>Prepare ZIA version action</source>
            <translation>准备 ZIA 版本操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8300" />
            <source>Close</source>
            <translation>关闭</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8319" />
            <source>Guided mode creates a minimal, reviewable PAC. Switch to Advanced to edit JavaScript, update ZCC profiles, or prepare ZIA lifecycle actions.</source>
            <translation>引导模式创建一个最小的、可审查的 PAC。切换到高级以编辑 JavaScript、更新 ZCC 配置文件或准备 ZIA 生命周期操作。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8320" />
            <source>Advanced mode exposes the PAC editor, ZCC profile patching, and ZIA version lifecycle actions. Every write remains explicit.</source>
            <translation>高级模式公开 PAC 编辑器、ZCC 配置文件修补和 ZIA 版本生命周期操作。每次写入都保持明确。</translation>
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
            <translation>引导性PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8371" />
            <source>Guided PAC created. Review the verification findings, test a URL, then prepare ZIA validation.</source>
            <translation>创建了引导 PAC。查看验证结果，测试 URL，然后准备 ZIA 验证。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8379" />
            <source>Both mapping inputs must be valid JSON: </source>
            <translation>两个映射输入都必须是有效的 JSON： </translation>
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
            <translation>PAC变量</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8418" />
            <source>Variables must be valid JSON: </source>
            <translation>变量必须是有效的 JSON： </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8420" />
            <source>Variables must be a JSON object with text or numeric values.</source>
            <translation>变量必须是带有文本或数值的 JSON 对象。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8429" />
            <source>none</source>
            <translation>无</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8430" />
            <source>Detected variables: </source>
            <translation>检测到的变量： </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8434" />
            <source>Improvement tips:</source>
            <translation>改进技巧：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8446" />
            <source>Variables applied.</source>
            <translation>应用变量。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8446" />
            <source>Variables applied; missing values were retained: </source>
            <translation>应用变量；缺失值被保留： </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8451" />
            <source>Preview</source>
            <translation>预览</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8466" />
            <source>PAC draft saved locally.</source>
            <translation>PAC 草稿保存在本地。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8469" />
            <location filename="../zscaler_api_client.py" line="8474" />
            <source>Load PAC</source>
            <translation>加载 PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8477" />
            <location filename="../zscaler_api_client.py" line="8482" />
            <source>Save PAC</source>
            <translation>保存 PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8490" />
            <source>PAC request prepared</source>
            <translation>PAC 请求已准备好</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8490" />
            <source>The request was placed in the main editor. Review it and explicitly select Send Request; no deployment action has been performed.</source>
            <translation>该请求已提交到主编辑器中。查看它并明确选择发送请求；尚未执行任何部署操作。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8495" />
            <source>PAC verification</source>
            <translation>PAC验证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8495" />
            <source>Resolve PAC errors before preparing an API write.</source>
            <translation>在准备 API 写入之前解决 PAC 错误。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8511" />
            <source>ZIA PAC lifecycle</source>
            <translation>ZIA PAC 生命周期</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8511" />
            <source>Enter a numeric PAC ID and version before preparing a lifecycle action.</source>
            <translation>在准备生命周期操作之前输入数字 PAC ID 和版本。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8525" />
            <location filename="../zscaler_api_client.py" line="8527" />
            <source>ZCC forwarding profile</source>
            <translation>ZCC转发配置文件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8525" />
            <source>Profile must be valid JSON: </source>
            <translation>配置文件必须是有效的 JSON： </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8527" />
            <source>Paste one ZCC forwarding profile object with its id before preparing an update.</source>
            <translation>在准备更新之前粘贴一个 ZCC 转发配置文件对象及其 ID。</translation>
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
            <translation>响应漂移比较</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6086" />
            <source>Compare the active masked response with a local ZS API Exchange baseline. Matching records are aligned by id, UUID, resourceId, key, or name. No API request is sent.</source>
            <translation>将主动屏蔽响应与本地 ZS API Exchange 基线进行比较。匹配记录按 id、UUID、resourceId、key 或 name 对齐。没有发送 API 请求。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6089" />
            <source>Baseline:</source>
            <translation>基线：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6090" />
            <source>Choose a masked response exchange file</source>
            <translation>选择屏蔽响应交换文件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6091" />
            <source>Open baseline…</source>
            <translation>开放基线...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6094" />
            <source>Ignore volatile fields:</source>
            <translation>忽略易失性字段：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6096" />
            <source>Comma-separated field names ignored at every JSON depth. Secrets are always masked independently.</source>
            <translation>在每个 JSON 深度都会忽略逗号分隔的字段名称。秘密总是被独立地掩盖。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6097" />
            <source>Compare responses</source>
            <translation>比较回复</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6099" />
            <source>Open a baseline to calculate drift.</source>
            <translation>打开基线来计算漂移。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Impact</source>
            <translation>影响</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Change</source>
            <translation>改变</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>JSON path</source>
            <translation>JSON 路径</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Identity</source>
            <translation>身份</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Baseline value</source>
            <translation>基线值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Current value</source>
            <translation>当前值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6106" />
            <source>Export masked drift…</source>
            <translation>导出蒙版漂移...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6107" />
            <source>Close</source>
            <translation>关闭</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6116" />
            <location filename="../zscaler_api_client.py" line="6121" />
            <source>Open response baseline</source>
            <translation>开放响应基线</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6144" />
            <source>Open a baseline response exchange first.</source>
            <translation>首先打开基线响应交换。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6151" />
            <source>No drift found in the compared scope.</source>
            <translation>比较范围内未发现漂移。</translation>
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
            <translation>已添加</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6158" />
            <source>Removed</source>
            <translation>已删除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6158" />
            <source>Changed</source>
            <translation>改变了</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6158" />
            <source>High impact</source>
            <translation>高影响力</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6174" />
            <source>Export masked drift</source>
            <translation>导出蒙版漂移</translation>
        </message>
    </context>
    <context>
        <name>SettingsDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4639" />
            <source>Settings</source>
            <translation>设置</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4665" />
            <source>ZIA (Zscaler Internet Access)</source>
            <translation>ZIA（Zscaler 互联网接入）</translation>
        </message>
        <message>
            <source>Cloud:</source>
            <translation type="vanished">云:</translation>
        </message>
        <message>
            <source>API Key:</source>
            <translation type="vanished">API密钥:</translation>
        </message>
        <message>
            <source>Username:</source>
            <translation type="vanished">用户名:</translation>
        </message>
        <message>
            <source>Password:</source>
            <translation type="vanished">密码:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4699" />
            <source>ZPA (Zscaler Private Access)</source>
            <translation>ZPA（Zscaler 私人访问）</translation>
        </message>
        <message>
            <source>Client ID:</source>
            <translation type="vanished">客户端ID:</translation>
        </message>
        <message>
            <source>Client Secret:</source>
            <translation type="vanished">客户端密钥:</translation>
        </message>
        <message>
            <source>Customer ID:</source>
            <translation type="vanished">客户ID:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4731" />
            <source>ZDX (Zscaler Digital Experience)</source>
            <translation>ZDX（Zscaler 数字体验）</translation>
        </message>
        <message>
            <source>Key ID:</source>
            <translation type="vanished">密钥ID:</translation>
        </message>
        <message>
            <source>Key Secret:</source>
            <translation type="vanished">密钥密码:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4765" />
            <source>ZCC (Client Connector)</source>
            <translation>ZCC（客户端连接器）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4830" />
            <source>ZIdentity (Identity &amp; Access)</source>
            <translation>ZIdentity (身份和访问)</translation>
        </message>
        <message>
            <source>Vanity Domain:</source>
            <translation type="vanished">自定义域名:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4857" />
            <source>ZTW (Zero Trust Workloads)</source>
            <translation>ZTW（零信任工作负载）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4884" />
            <source>ZWA (Workflow Automation)</source>
            <translation>ZWA（工作流程自动化）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4911" />
            <source>EASM (Attack Surface Management)</source>
            <translation>EASM（攻击面管理）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4943" />
            <location filename="../zscaler_api_client.py" line="5221" />
            <source>Credentials</source>
            <translation>凭据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4950" />
            <source>Network</source>
            <translation>网络</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4958" />
            <source>Request Timeout (seconds):</source>
            <translation>请求超时（秒）:</translation>
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
            <translation>启用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4793" />
            <source>OneAPI (Unified v3 Framework)</source>
            <translation>OneAPI（统一 v3 框架）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4966" />
            <location filename="../zscaler_api_client.py" line="4982" />
            <location filename="../zscaler_api_client.py" line="5030" />
            <location filename="../zscaler_api_client.py" line="5036" />
            <location filename="../zscaler_api_client.py" line="5054" />
            <location filename="../zscaler_api_client.py" line="5078" />
            <source>Disabled</source>
            <translation>禁用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4983" />
            <source>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</source>
            <translation>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4988" />
            <source>SSL Verification:</source>
            <translation>SSL验证:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4993" />
            <source>Proxy</source>
            <translation>代理</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4999" />
            <source>No Proxy</source>
            <translation>无代理</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4999" />
            <source>System Proxy</source>
            <translation>系统代理</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4999" />
            <source>Manual</source>
            <translation>手动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5001" />
            <source>Proxy Mode:</source>
            <translation>代理模式:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5005" />
            <source>Proxy Host:</source>
            <translation>代理主机:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5010" />
            <source>Proxy Port:</source>
            <translation>代理端口:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5013" />
            <location filename="../zscaler_api_client.py" line="5018" />
            <source>Optional</source>
            <translation>可选</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5014" />
            <source>Proxy Username:</source>
            <translation>代理用户名:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5019" />
            <source>Proxy Password:</source>
            <translation>代理密码:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5024" />
            <source>Behavior</source>
            <translation>行为</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5031" />
            <source>Auto-authenticate on startup:</source>
            <translation>启动时自动认证:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5037" />
            <source>Save request history:</source>
            <translation>保存请求历史:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5043" />
            <source>History limit:</source>
            <translation>历史限制:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5049" />
            <source>Default API:</source>
            <translation>默认API:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5055" />
            <source>Check for updates on startup:</source>
            <translation>启动时检查更新:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4646" />
            <location filename="../zscaler_api_client.py" line="5060" />
            <source>Advanced</source>
            <translation>高级</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4645" />
            <source>Basic</source>
            <translation>基础</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4648" />
            <source>Interface mode:</source>
            <translation>接口方式：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4755" />
            <source>API version:</source>
            <translation>API版本：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4963" />
            <source>Maximum upload/download (MB):</source>
            <translation>最大上传/下载 (MB):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4967" />
            <source>Retry only GET, HEAD, and OPTIONS after transient network errors or HTTP 408, 429, 502, 503, and 504. Write requests are never retried automatically.</source>
            <translation>仅在出现暂时性网络错误或 HTTP 408、429、502、503 和 504 后重试 GET、HEAD 和 OPTIONS。写入请求绝不会自动重试。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4968" />
            <source>Retry safe reads:</source>
            <translation>重试安全读取：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4972" />
            <source>Maximum read retries:</source>
            <translation>最大读取重试次数：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4976" />
            <source>Maximum seconds to honor from Retry-After; shorter exponential backoff is used when the server omits it.</source>
            <translation>Retry-After 所遵循的最大秒数；当服务器忽略它时，使用较短的指数退避。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4977" />
            <source>Maximum retry wait (seconds):</source>
            <translation>最大重试等待（秒）：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5066" />
            <source>Response Display</source>
            <translation>响应显示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5073" />
            <source>JSON Indentation:</source>
            <translation>JSON缩进:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5079" />
            <source>Word Wrap:</source>
            <translation>自动换行:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5085" />
            <source>Font Size:</source>
            <translation>字体大小:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5090" />
            <source>Light</source>
            <translation>浅色</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5090" />
            <source>Dark</source>
            <translation>深色</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5090" />
            <source>System</source>
            <translation>系统</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5091" />
            <source>Theme:</source>
            <translation>主题:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5096" />
            <source>Display</source>
            <translation>显示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5101" />
            <location filename="../zscaler_api_client.py" line="5136" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <location filename="../zscaler_api_client.py" line="5221" />
            <source>Privacy</source>
            <translation>隐私</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5104" />
            <source>Secrets only (identifiers visible)</source>
            <translation>仅秘密（标识符可见）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5105" />
            <source>Obfuscate exports and external integrations (recommended)</source>
            <translation>混淆导出和外部集成（推荐）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5106" />
            <source>Obfuscate exports, integrations, and on-screen data</source>
            <translation>混淆导出、集成和屏幕数据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5108" />
            <source>Identifier obfuscation:</source>
            <translation>标识符混淆：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5109" />
            <source>Credentials and authentication material are always masked. Identifier pseudonyms are stable until the local pseudonym key is rotated; no original-to-pseudonym mapping is stored.</source>
            <translation>凭证和身份验证材料始终被隐藏。标识符假名在本地假名密钥轮换之前是稳定的；不存储原始到假名的映射。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5111" />
            <source>Usernames, display names, and email addresses</source>
            <translation>用户名、显示名称和电子邮件地址</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5112" />
            <source>IPv4 and IPv6 addresses</source>
            <translation>IPv4 和 IPv6 地址</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5113" />
            <source>Hostnames, domains, and URL hosts</source>
            <translation>主机名、域和 URL 主机</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5114" />
            <source>Tenant, customer, organization, and environment names</source>
            <translation>租户、客户、组织和环境名称</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5115" />
            <source>Object IDs, UUIDs, GUIDs, and client identifiers</source>
            <translation>对象 ID、UUID、GUID 和客户端标识符</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5116" />
            <source>Policy, application, group, location, and resource names</source>
            <translation>策略、应用程序、组、位置和资源名称</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5123" />
            <source>Rotate local pseudonym key</source>
            <translation>轮换本地假名密钥</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5124" />
            <source>Creates new pseudonyms for future views and exports. Existing files are not modified.</source>
            <translation>为将来的视图和导出创建新的假名。现有文件不会被修改。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5127" />
            <location filename="../zscaler_api_client.py" line="5252" />
            <location filename="../zscaler_api_client.py" line="5258" />
            <source>Rotate evidence signing key</source>
            <translation>轮换证据签名密钥</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5128" />
            <source>Creates a new Ed25519 key in the system keychain. Existing signed packages remain verifiable with their embedded public keys.</source>
            <translation>在系统钥匙串中创建新的 Ed25519 密钥。现有的签名包仍然可以使用其嵌入的公钥进行验证。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5131" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <source>Obfuscation preview</source>
            <translation>混淆预览</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5133" />
            <source>Preview of exported or externally shared data using synthetic examples:</source>
            <translation>使用合成示例预览导出或外部共享的数据：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5141" />
            <location filename="../zscaler_api_client.py" line="5183" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <location filename="../zscaler_api_client.py" line="5221" />
            <source>Language</source>
            <translation>语言</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5144" />
            <source>System default</source>
            <translation>系统默认</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5147" />
            <source>Application language:</source>
            <translation>应用语言：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5148" />
            <source>System default follows your operating system language. Restart after saving to apply a change.</source>
            <translation>系统默认遵循您的操作系统语言。保存后重新启动以应用更改。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5151" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <source>AI / LLM</source>
            <translation>人工智能/法学硕士</translation>
        </message>
        <message>
            <source>Local catalog assistant</source>
            <translation type="vanished">本地目录助理</translation>
        </message>
        <message>
            <source>OpenAI-compatible cloud</source>
            <translation type="vanished">OpenAI 兼容云</translation>
        </message>
        <message>
            <source>Local OpenAI-compatible server</source>
            <translation type="vanished">本地 OpenAI 兼容服务器</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5157" />
            <source>AI provider:</source>
            <translation>人工智能提供商：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5160" />
            <source>AI endpoint:</source>
            <translation>人工智能端点：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5162" />
            <source>Select a provider to prefill a recommended model</source>
            <translation>Select a provider to prefill a recommended model</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5163" />
            <source>Model:</source>
            <translation>型号：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5166" />
            <source>Stored securely in your system keychain</source>
            <translation>安全地存储在您的系统钥匙串中</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5167" />
            <source>API key:</source>
            <translation>API 密钥：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5168" />
            <source>Allow this app to send the masked question and catalog metadata to an external AI service</source>
            <translation>允许此应用将屏蔽的问题和目录元数据发送到外部 AI 服务</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5171" />
            <source>Clear AI key</source>
            <translation>清除AI键</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5174" />
            <source>Test AI connection</source>
            <translation>测试AI连接</translation>
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
            <translation>旋转假名键</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5241" />
            <source>Rotate the local pseudonym key? Future pseudonyms will change and will no longer correlate with previous exports.</source>
            <translation>轮换本地假名密钥？未来的假名将发生变化，并且将不再与以前的导出相关联。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5249" />
            <source>The local pseudonym key was rotated. No credentials or source identifiers were stored.</source>
            <translation>本地假名密钥已轮换。未存储任何凭据或源标识符。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5252" />
            <source>Create a new local evidence signing identity? Existing signed packages remain verifiable, but future packages will have a different public-key fingerprint.</source>
            <translation>创建新的本地证据签名身份？现有的签名包仍然可以验证，但未来的包将具有不同的公钥指纹。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5255" />
            <source>Signed evidence</source>
            <translation>签名证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5255" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>系统钥匙串无法存储证据签名密钥。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5258" />
            <source>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</source>
            <translation>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5264" />
            <source>Restore Defaults</source>
            <translation>恢复默认设置</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5265" />
            <source>This will reset all advanced settings to defaults. Continue?</source>
            <translation>这会将所有高级设置重置为默认值。继续？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5387" />
            <source>Configured securely in your system keychain</source>
            <translation>在您的系统钥匙串中安全配置</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5394" />
            <source>AI key cleared</source>
            <translation>AI键已清除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5410" />
            <location filename="../zscaler_api_client.py" line="5413" />
            <location filename="../zscaler_api_client.py" line="5424" />
            <location filename="../zscaler_api_client.py" line="5425" />
            <source>AI connection</source>
            <translation>人工智能连接</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5410" />
            <source>Local catalog assistant is ready.</source>
            <translation>本地目录助手已准备就绪。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5413" />
            <source>Enter an AI endpoint first.</source>
            <translation>首先输入AI端点。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5422" />
            <source>AI connection succeeded.</source>
            <translation>AI连接成功。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5425" />
            <source>AI connection failed: {error}</source>
            <translation>AI connection failed: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5439" />
            <source>ZIA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZIA Cloud：删除了 URL 前缀（仅需要主机名）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5446" />
            <source>ZPA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZPA Cloud：删除了 URL 前缀（仅需要主机名）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5452" />
            <source>{product} Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>{product} Cloud: Removed URL prefix (only hostname needed)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5457" />
            <source>ZPA: Customer ID is empty — required for most ZPA endpoints</source>
            <translation>ZPA：客户 ID 为空 — 大多数 ZPA 端点都需要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5459" />
            <source>ZPA: Customer ID should be numeric (got '{value}')</source>
            <translation>ZPA: Customer ID should be numeric (got '{value}')</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5467" />
            <source>OneAPI: Removed URL prefix from vanity domain</source>
            <translation>OneAPI：从个性域中删除了 URL 前缀</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5471" />
            <source>OneAPI: Removed .zslogin.net suffix — only the prefix is needed (e.g. 'acme')</source>
            <translation>OneAPI：删除了 .zslogin.net 后缀 - 只需要前缀（例如“acme”）</translation>
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
            <translation>ZIdentity：从域中删除了 URL 前缀</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5499" />
            <source>ZIA is enabled but Cloud is empty</source>
            <translation>ZIA 已启用但云为空</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5501" />
            <source>ZCC is enabled but Cloud host is empty</source>
            <translation>ZCC已启用但云主机为空</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5503" />
            <source>OneAPI is enabled but Vanity Domain is empty</source>
            <translation>OneAPI 已启用，但 Vanity Domain 为空</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5505" />
            <source>OneAPI is enabled but Client ID is empty</source>
            <translation>OneAPI 已启用，但客户端 ID 为空</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5520" />
            <source>Settings Validation</source>
            <translation>设置验证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5521" />
            <source>Some settings were adjusted or may need attention:</source>
            <translation>部分设置已调整或可能需要注意：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5525" />
            <source>Save Anyway</source>
            <translation>无论如何保存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5526" />
            <source>Go Back</source>
            <translation>返回</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5551" />
            <source>Secure storage</source>
            <translation>安全存储</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5551" />
            <source>The system keychain could not save one or more secrets. No secret changes were applied.</source>
            <translation>系统钥匙串无法保存一个或多个秘密。没有进行任何秘密更改。</translation>
        </message>
    </context>
    <context>
        <name>SetupWizard</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4185" />
            <source>Getting Started Wizard</source>
            <translation>入门向导</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4204" />
            <source>Back</source>
            <translation>返回</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4208" />
            <source>Open full settings</source>
            <translation>打开完整设置</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4211" />
            <location filename="../zscaler_api_client.py" line="4334" />
            <source>Continue</source>
            <translation>继续</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4222" />
            <source>Abstract zero trust security network</source>
            <translation>抽象零信任安全网络</translation>
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
            <translation>基础</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4236" />
            <source>Advanced</source>
            <translation>高级</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4238" />
            <source>Setup mode:</source>
            <translation>设置模式：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4246" />
            <source>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4247" />
            <source>Create an API client with the required roles in ZIdentity, then enter its details below.</source>
            <translation>在 ZIdentity 中创建具有所需角色的 API 客户端，然后在下面输入其详细信息。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4253" />
            <source>Vanity domain</source>
            <translation>虚荣领域</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4255" />
            <source>Client ID</source>
            <translation>客户ID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4258" />
            <source>Client secret</source>
            <translation>客户秘密</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4260" />
            <source>Leave empty for production; use beta or alpha when applicable</source>
            <translation>留空用于生产；适用时使用 beta 或 alpha</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4261" />
            <source>Cloud</source>
            <translation>云</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4263" />
            <source>Optional; required for many ZPA requests</source>
            <translation>可选；许多 ZPA 请求都需要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4264" />
            <source>ZPA customer ID</source>
            <translation>ZPA 客户 ID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4294" />
            <source>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4295" />
            <source>Choose a common operation. The wizard will load it into the request builder with required path variables highlighted.</source>
            <translation>选择常用操作。该向导会将其加载到请求构建器中，并突出显示所需的路径变量。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4353" />
            <source>Secure storage</source>
            <translation>安全存储</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4353" />
            <source>The system keychain could not save the secret. Check the keychain service and try again.</source>
            <translation>系统钥匙串无法保存秘密。检查钥匙串服务并重试。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4285" />
            <location filename="../zscaler_api_client.py" line="4299" />
            <source>Just explore the API catalog</source>
            <translation>只需浏览 API 目录即可</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4166" />
            <source>ZIA · List users</source>
            <translation>ZIA · 列出用户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4167" />
            <source>ZIA · List URL categories</source>
            <translation>ZIA · 列出 URL 类别</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4168" />
            <source>ZIA · Check activation status</source>
            <translation>ZIA · 检查激活状态</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4169" />
            <source>ZIA · List cloud firewall policies</source>
            <translation>ZIA·列出云防火墙策略</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4170" />
            <source>ZPA · List application segments</source>
            <translation>ZPA · 列出应用领域</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4171" />
            <source>ZPA · List segment groups</source>
            <translation>ZPA · 列出段组</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4172" />
            <source>ZPA · List connectors</source>
            <translation>ZPA · 列出连接器</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4173" />
            <source>ZDX · List devices and experience scores</source>
            <translation>ZDX · 列出设备和体验分数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4174" />
            <source>ZDX · List active alerts</source>
            <translation>ZDX · 列出活动警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4175" />
            <source>ZDX · List monitored applications</source>
            <translation>ZDX · 列出受监控的应用程序</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4176" />
            <source>Client Connector · List devices</source>
            <translation>客户端连接器·列出设备</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4177" />
            <source>ZIdentity · List users</source>
            <translation>ZIdentity · 列出用户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4178" />
            <source>ZIdentity · List groups</source>
            <translation>ZIdentity · 列出组</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4179" />
            <source>AI Security · List workloads</source>
            <translation>AI 安全 · 列出工作负载</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4303" />
            <source>Authenticate immediately after finishing</source>
            <translation>完成后立即进行身份验证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4312" />
            <source>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4314" />
            <source>The API Explorer contains the complete bundled catalog. Use the Documentation tab for endpoint details, the Console tab for request activity, and Request History to replay safe, redacted requests.</source>
            <translation>API Explorer 包含完整的捆绑目录。使用“文档”选项卡了解端点详细信息，使用“控制台”选项卡了解请求活动，并使用“请求历史记录”来重放安全、经过编辑的请求。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4332" />
            <source>Step {current} of {total}</source>
            <translation>Step {current} of {total}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4334" />
            <source>Finish</source>
            <translation>完成</translation>
        </message>
    </context>
    <context>
        <name>SocEntityGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Identity</source>
            <translation>身份</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Address</source>
            <translation>地址</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Device</source>
            <translation>设备</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Application</source>
            <translation>应用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Policy</source>
            <translation>政策</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Service</source>
            <translation>服务</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Endpoint</source>
            <translation>端点</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Infrastructure</source>
            <translation>基础设施</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Indicator</source>
            <translation>指标</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Activity</source>
            <translation>活动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Environment</source>
            <translation>环境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Resource</source>
            <translation>资源</translation>
        </message>
    </context>
    <context>
        <name>SplashScreen</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4408" />
            <source>Loading...</source>
            <translation>加载中...</translation>
        </message>
    </context>
    <context>
        <name>WelcomeDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4010" />
            <source>Welcome to ZS API Client</source>
            <translation>欢迎使用ZS API Client</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4022" />
            <source>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</source>
            <translation>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4035" />
            <source>Supported APIs</source>
            <translation>支持的API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4038" />
            <source>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</source>
            <translation>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4054" />
            <source>Getting Started</source>
            <translation>入门指南</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4057" />
            <source>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</source>
            <translation>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4070" />
            <source>Tips for Advanced Users</source>
            <translation>高级用户提示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4073" />
            <source>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4087" />
            <source>Documentation</source>
            <translation>文档</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4108" />
            <source>Show this dialog on startup</source>
            <translation>启动时显示此对话框</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4116" />
            <source>Open Settings</source>
            <translation>打开设置</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4120" />
            <source>Get Started</source>
            <translation>开始使用</translation>
        </message>
    </context>
    <context>
        <name>owner</name>
        <message>
            <location filename="../zscaler_api_client.py" line="444" />
            <source>Default</source>
            <translation>默认</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="657" />
            <source>The response export is unavailable, is a symbolic link, or exceeds the configured transfer limit.</source>
            <translation>响应导出不可用、是符号链接或超出配置的传输限制。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="658" />
            <source>The response export is not valid UTF-8 JSON.</source>
            <translation>响应导出不是有效的 UTF-8 JSON。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="659" />
            <source>This is not a supported ZS API response exchange file.</source>
            <translation>这不是受支持的 ZS API 响应交换文件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="660" />
            <source>The response exchange file is incomplete.</source>
            <translation>响应交换文件不完整。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="662" />
            <source>The response exchange file could not be opened.</source>
            <translation>无法打开响应交换文件。</translation>
        </message>
    </context>
    <context>
        <name>window</name>
        <message>
            <location filename="../zscaler_api_client.py" line="12246" />
            <source>Automatic Update Check</source>
            <translation>自动检查更新</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12248" />
            <source>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</source>
            <translation>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</translation>
        </message>
    </context>
</TS>