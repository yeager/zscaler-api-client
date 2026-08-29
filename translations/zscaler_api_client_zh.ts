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
            <location filename="../zscaler_api_client.py" line="4478" />
            <source>About ZS API Client</source>
            <translation>关于 ZS API Client</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4504" />
            <source>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</source>
            <translation>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4537" />
            <source>Disclaimer</source>
            <translation>免责声明</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4540" />
            <source>&lt;p style='color: #666;'&gt;This software is &lt;b&gt;not affiliated with, endorsed by, or supported by Zscaler, Inc.&lt;/b&gt; in any way. This is an independent community project.&lt;/p&gt;&lt;p style='color: #666;'&gt;Zscaler® is a registered trademark of Zscaler, Inc. All product names, logos, and brands are property of their respective owners.&lt;/p&gt;&lt;p style='color: #666;'&gt;&lt;b&gt;NO WARRANTY:&lt;/b&gt; This software is provided "as is" without warranty of any kind. Use at your own risk. The author is not responsible for any damage or data loss resulting from the use of this software.&lt;/p&gt;&lt;p style='color: #666;'&gt;&lt;b&gt;NO SUPPORT:&lt;/b&gt; For Zscaler product support, please contact Zscaler directly through official channels.&lt;/p&gt;</source>
            <translation>&lt;p style='color: #666;'&gt;This software is &lt;b&gt;not affiliated with, endorsed by, or supported by Zscaler, Inc.&lt;/b&gt; in any way. This is an independent community project.&lt;/p&gt;&lt;p style='color: #666;'&gt;Zscaler® is a registered trademark of Zscaler, Inc. All product names, logos, and brands are property of their respective owners.&lt;/p&gt;&lt;p style='color: #666;'&gt;&lt;b&gt;NO WARRANTY:&lt;/b&gt; This software is provided "as is" without warranty of any kind. Use at your own risk. The author is not responsible for any damage or data loss resulting from the use of this software.&lt;/p&gt;&lt;p style='color: #666;'&gt;&lt;b&gt;NO SUPPORT:&lt;/b&gt; For Zscaler product support, please contact Zscaler directly through official channels.&lt;/p&gt;</translation>
        </message>
    </context>
    <context>
        <name>BatchDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5780" />
            <source>Batch Operations</source>
            <translation>批量操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5787" />
            <source>Import a CSV file to perform batch operations. The CSV should have columns matching the API parameters.</source>
            <translation>导入CSV文件以执行批量操作。CSV应具有与API参数匹配的列。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5796" />
            <source>Select CSV file...</source>
            <translation>选择CSV文件...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5799" />
            <source>Browse...</source>
            <translation>浏览...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5811" />
            <source>Operation:</source>
            <translation>操作:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5815" />
            <source>Create Users (ZIA)</source>
            <translation>创建用户 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5816" />
            <source>Update Users (ZIA)</source>
            <translation>更新用户 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5817" />
            <source>Delete Users (ZIA)</source>
            <translation>删除用户 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5818" />
            <source>Create Locations (ZIA)</source>
            <translation>创建位置 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5819" />
            <source>URL Lookup (ZIA)</source>
            <translation>URL查询 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5820" />
            <source>Create App Segments (ZPA)</source>
            <translation>创建应用程序段 (ZPA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5846" />
            <source>Select CSV File</source>
            <translation>选择CSV文件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5876" />
            <source>Error</source>
            <translation>错误</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5885" />
            <source>Validated: {count} requests are ready for review.</source>
            <translation>Validated: {count} requests are ready for review.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5887" />
            <source>Batch validation failed. Required CSV columns: {columns}</source>
            <translation>Batch validation failed. Required CSV columns: {columns}</translation>
        </message>
    </context>
    <context>
        <name>ChangelogDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4583" />
            <source>What's New</source>
            <translation>新功能</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4590" />
            <source>&lt;h2&gt;🎉 Updated to version {version}&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;🎉 Updated to version {version}&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4595" />
            <source>&lt;p style='color: #666;'&gt;Updated from version {prev}&lt;/p&gt;</source>
            <translation>&lt;p style='color: #666;'&gt;Updated from version {prev}&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4611" />
            <source>Don't show this after future updates</source>
            <translation>以后更新时不要显示此内容</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4632" />
            <source>*Changelog not found*</source>
            <translation>*未找到更新日志*</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4653" />
            <source>*Could not load changelog: {error}*</source>
            <translation>*无法加载更新日志： {error} *</translation>
        </message>
    </context>
    <context>
        <name>EnvironmentProfilesDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="6023" />
            <location filename="../zscaler_api_client.py" line="6066" />
            <location filename="../zscaler_api_client.py" line="6069" />
            <location filename="../zscaler_api_client.py" line="6077" />
            <source>Environment profiles</source>
            <translation>环境概况</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6025" />
            <source>Each environment keeps separate tenant hosts, client identifiers, enabled products, and keychain credentials. Creating a profile copies only non-secret configuration. Activating a profile clears every in-memory API session.</source>
            <translation>每个环境都保留单独的租户主机、客户端标识符、启用的产品和钥匙串凭据。创建配置文件仅复制非秘密配置。激活配置文件会清除每个内存中的 API 会话。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6026" />
            <source>Active</source>
            <translation>活跃</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6026" />
            <source>Name</source>
            <translation>名称</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6026" />
            <source>Default API</source>
            <translation>默认API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6026" />
            <source>Configured host</source>
            <translation>配置主机</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6026" />
            <source>Keychain secrets</source>
            <translation>钥匙扣的秘密</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6029" />
            <location filename="../zscaler_api_client.py" line="6062" />
            <source>Create profile</source>
            <translation>创建个人资料</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6030" />
            <location filename="../zscaler_api_client.py" line="6074" />
            <source>Rename profile</source>
            <translation>重命名个人资料</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6031" />
            <location filename="../zscaler_api_client.py" line="6085" />
            <location filename="../zscaler_api_client.py" line="6086" />
            <source>Delete profile</source>
            <translation>删除个人资料</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6032" />
            <source>Activate profile</source>
            <translation>激活个人资料</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6033" />
            <source>Close</source>
            <translation>关闭</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6049" />
            <source>{count} configured</source>
            <translation>{count} configured</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6062" />
            <location filename="../zscaler_api_client.py" line="6074" />
            <source>Profile name:</source>
            <translation>个人资料名称：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6066" />
            <location filename="../zscaler_api_client.py" line="6077" />
            <source>Enter a unique profile name without path separators (maximum 60 characters).</source>
            <translation>输入不带路径分隔符的唯一配置文件名称（最多 60 个字符）。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6069" />
            <source>The profile was created with non-secret settings only. Open Settings after activation to add its keychain credentials.</source>
            <translation>该配置文件仅使用非秘密设置创建。激活后打开“设置”以添加其钥匙串凭据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6085" />
            <source>The default or active profile cannot be deleted. Activate another profile first.</source>
            <translation>无法删除默认或活动的配置文件。首先激活另一个配置文件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6086" />
            <source>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</source>
            <translation>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6088" />
            <source>Secure storage</source>
            <translation>安全存储</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6088" />
            <source>The profile could not be deleted because its keychain credentials could not be removed.</source>
            <translation>无法删除该配置文件，因为无法删除其钥匙串凭据。</translation>
        </message>
    </context>
    <context>
        <name>ErrorCodesDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5717" />
            <source>API Error Codes Reference</source>
            <translation>API错误码参考</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5723" />
            <source>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5726" />
            <source>Common error codes and their meanings for each API.</source>
            <translation>每个 API 的常见错误代码及其含义。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5739" />
            <source>Code</source>
            <translation>代码</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5739" />
            <source>Name</source>
            <translation>名称</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5739" />
            <source>Description</source>
            <translation>描述</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5759" />
            <source>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5770" />
            <source>Close</source>
            <translation>关闭</translation>
        </message>
    </context>
    <context>
        <name>ExperienceJourneyGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4004" />
            <source>No journey telemetry in the current response</source>
            <translation>当前响应中没有旅程遥测</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4023" />
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
            <location filename="../zscaler_api_client.py" line="3835" />
            <source>Value</source>
            <translation>价值</translation>
        </message>
    </context>
    <context>
        <name>HistoryDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5897" />
            <source>Request History</source>
            <translation>请求历史</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5906" />
            <source>Search:</source>
            <translation>搜索:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5908" />
            <source>Filter by URL or method...</source>
            <translation>按 URL 或方法过滤...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5913" />
            <source>Current environment: {name}</source>
            <translation>Current environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5914" />
            <source>All environments</source>
            <translation>所有环境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5918" />
            <location filename="../zscaler_api_client.py" line="5995" />
            <source>Clear History</source>
            <translation>清除历史</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5927" />
            <source>Time</source>
            <translation>时间</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5927" />
            <source>Method</source>
            <translation>方法</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5927" />
            <source>URL</source>
            <translation>网址</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5927" />
            <source>Environment</source>
            <translation>环境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5928" />
            <source>Status</source>
            <translation>状态</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5928" />
            <source>Duration</source>
            <translation>持续时间</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5940" />
            <source>Load Request</source>
            <translation>加载请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5944" />
            <source>Close</source>
            <translation>关闭</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5968" />
            <source>Default</source>
            <translation>默认</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5996" />
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
            <location filename="../zscaler_api_client.py" line="8712" />
            <source>Auth</source>
            <translation>授权</translation>
        </message>
        <message>
            <source>Authenticate with selected API</source>
            <translation type="vanished">使用选定的 API 进行身份验证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8734" />
            <source>Endpoints</source>
            <translation>端点</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8740" />
            <source>Output</source>
            <translation>输出</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8746" />
            <source>Authentication status, requests, and audit info...</source>
            <translation>身份验证状态、请求和审核信息...</translation>
        </message>
        <message>
            <source>Request</source>
            <translation type="vanished">请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8780" />
            <source>Enter URL or select endpoint...</source>
            <translation>输入URL或选择端点...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8784" />
            <source>Send</source>
            <translation>发送</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8793" />
            <source>cURL</source>
            <translation>卷曲</translation>
        </message>
        <message>
            <source>Copy request as cURL command</source>
            <translation type="vanished">将请求复制为cURL命令</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8866" />
            <location filename="../zscaler_api_client.py" line="8875" />
            <source>Key</source>
            <translation>键</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8866" />
            <location filename="../zscaler_api_client.py" line="8875" />
            <location filename="../zscaler_api_client.py" line="8935" />
            <location filename="../zscaler_api_client.py" line="9010" />
            <source>Value</source>
            <translation>值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8869" />
            <source>Params</source>
            <translation>参数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8878" />
            <location filename="../zscaler_api_client.py" line="9003" />
            <source>Headers</source>
            <translation>头部</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8911" />
            <location filename="../zscaler_api_client.py" line="10753" />
            <source>Request body (JSON)...</source>
            <translation>请求正文 (JSON)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8915" />
            <location filename="../zscaler_api_client.py" line="9002" />
            <source>Body</source>
            <translation>正文</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8922" />
            <location filename="../zscaler_api_client.py" line="8935" />
            <source>Variable</source>
            <translation>变量</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8938" />
            <source>Path Variables</source>
            <translation>路径变量</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8960" />
            <location filename="../zscaler_api_client.py" line="10658" />
            <source>Response</source>
            <translation>响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8975" />
            <source>Pretty</source>
            <translation>漂亮</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8978" />
            <source>Toggle pretty-print JSON (Ctrl+P)</source>
            <translation>切换漂亮打印 JSON (Ctrl+P)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8983" />
            <location filename="../zscaler_api_client.py" line="10165" />
            <location filename="../zscaler_api_client.py" line="10184" />
            <location filename="../zscaler_api_client.py" line="10189" />
            <location filename="../zscaler_api_client.py" line="10197" />
            <source>Export response</source>
            <translation>出口响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8986" />
            <source>Preview export</source>
            <translation>预览导出</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9006" />
            <source>Table</source>
            <translation>表</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9008" />
            <source>Chart</source>
            <translation>图表</translation>
        </message>
        <message>
            <source>JSON structure</source>
            <translation type="vanished">JSON结构</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9012" />
            <source>Tree</source>
            <translation>树</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9015" />
            <source>Heatmap</source>
            <translation>热图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9018" />
            <source>Topology</source>
            <translation>拓扑结构</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9022" />
            <source>Schema</source>
            <translation>模式</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9027" />
            <location filename="../zscaler_api_client.py" line="9093" />
            <source>AI Assistant</source>
            <translation>人工智能助手</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9030" />
            <source>Ask a OneAPI question, e.g. list ZPA application segments</source>
            <translation>询问 OneAPI 问题，例如列出 ZPA 应用程序段</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9034" />
            <source>Choose a guided AI example…</source>
            <translation>选择一个引导式 AI 示例...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9040" />
            <source>Find API request</source>
            <translation>查找API请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9043" />
            <source>Run selected request</source>
            <translation>运行选定的请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9046" />
            <source>Export result</source>
            <translation>导出结果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9050" />
            <location filename="../zscaler_api_client.py" line="11867" />
            <source>Ask in plain language. Sensitive values are masked before display or export.</source>
            <translation>用通俗易懂的语言询问。敏感值在显示或导出之前被屏蔽。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9056" />
            <source>AI request preview appears here before execution.</source>
            <translation>AI 请求在执行前预览会出现在此处。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9062" />
            <source>Bar chart</source>
            <translation>条形图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9063" />
            <source>Line chart</source>
            <translation>折线图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9064" />
            <source>Pie chart</source>
            <translation>饼图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9073" />
            <source>Help</source>
            <translation>帮助</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9092" />
            <source>Console</source>
            <translation>控制台</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9109" />
            <source>Ready</source>
            <translation>就绪</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9118" />
            <source>&amp;File</source>
            <translation>文件(&amp;F)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9120" />
            <source>&amp;Settings...</source>
            <translation>设置(&amp;S)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9125" />
            <source>&amp;Batch Operations...</source>
            <translation>批量操作(&amp;B)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9132" />
            <source>Request &amp;History...</source>
            <translation>请求&amp;历史记录...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9141" />
            <source>&amp;Quit</source>
            <translation>退出(&amp;Q)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9147" />
            <source>&amp;Edit</source>
            <translation>编辑(&amp;E)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9149" />
            <source>Copy as c&amp;URL</source>
            <translation>复制为 c&amp;URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9154" />
            <source>Copy &amp;Response</source>
            <translation>复制并回复</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9161" />
            <source>C&amp;lear Request</source>
            <translation>清除请求(&amp;L)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9166" />
            <source>&amp;Request</source>
            <translation>请求(&amp;R)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9168" />
            <source>&amp;Send Request</source>
            <translation>发送请求(&amp;S)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9175" />
            <source>Authenticate &amp;ZIA</source>
            <translation>验证&amp;ZIA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9179" />
            <source>Authenticate Z&amp;PA</source>
            <translation>验证 Z&amp;PA</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9185" />
            <source>&amp;Logout All Sessions</source>
            <translation>注销所有会话(&amp;L)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9189" />
            <source>&amp;Operations</source>
            <translation>操作(&amp;O)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9190" />
            <source>Operations &amp;Center...</source>
            <translation>运营中心...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9198" />
            <source>Environment &amp;Profiles...</source>
            <translation>环境及简介...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9203" />
            <source>&amp;Language</source>
            <translation>语言(&amp;L)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9212" />
            <source>&amp;Help</source>
            <translation>帮助(&amp;H)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9214" />
            <source>&amp;Welcome Guide...</source>
            <translation>欢迎指南(&amp;W)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9218" />
            <source>&amp;About...</source>
            <translation>关于(&amp;A)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9223" />
            <source>About &amp;Qt...</source>
            <translation>关于 &amp; Qt</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9230" />
            <source>ZIA API &amp;Documentation</source>
            <translation>ZIA API 和文档</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9234" />
            <source>ZPA API D&amp;ocumentation</source>
            <translation>ZPA API 文档(&amp;O)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9238" />
            <source>Zscaler API &amp;Portal</source>
            <translation>Zscaler API 和门户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9242" />
            <source>API &amp;Error Codes...</source>
            <translation>API 错误代码(&amp;E)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9248" />
            <source>Check for &amp;Updates...</source>
            <translation>检查更新(&amp;U)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9318" />
            <source>{count} operations · {groups} groups</source>
            <translation>{count} operations · {groups} groups</translation>
        </message>
        <message>
            <source>Create new profile…</source>
            <translation type="vanished">创建新的个人资料...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9676" />
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
            <location filename="../zscaler_api_client.py" line="9723" />
            <source>{count} matching operations</source>
            <translation>{count} matching operations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9723" />
            <source>{count} operations</source>
            <translation>{count} operations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9760" />
            <source>Guided example loaded. Find the API request, review the preview, then choose whether to run it.</source>
            <translation>已加载引导示例。找到 API 请求，查看预览，然后选择是否运行它。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9862" />
            <source>ZIA credentials not configured. Please go to Settings.</source>
            <translation>未配置 ZIA 凭据。请前往“设置”。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9891" />
            <source>ZCC credentials not configured. Please go to Settings.</source>
            <translation>未配置 ZCC 凭据。请前往“设置”。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9917" />
            <source>{api_type} credentials not configured. Please go to Settings.</source>
            <translation>{api_type} credentials not configured. Please go to Settings.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9981" />
            <source>OneAPI credentials not configured. Please go to Settings.</source>
            <translation>未配置 OneAPI 凭据。请前往“设置”。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10022" />
            <source>No matching API operation was found. Try product and resource names.</source>
            <translation>未找到匹配的 API 操作。尝试产品和资源名称。</translation>
        </message>
        <message>
            <source>Suggested request: {method} {name}. Review path variables before running.</source>
            <translation type="vanished">Suggested request: {method} {name}. Review path variables before running.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10039" />
            <source>Operation</source>
            <translation>操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10039" />
            <location filename="../zscaler_api_client.py" line="11670" />
            <source>Method</source>
            <translation>方法</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10039" />
            <location filename="../zscaler_api_client.py" line="11670" />
            <source>URL</source>
            <translation>网址</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10073" />
            <source>Ask the AI assistant for a request first.</source>
            <translation>先向AI助手提出请求。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10076" />
            <source>Review AI request</source>
            <translation>审核 AI 请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10077" />
            <source>Review the URL, path variables, and parameters in the preview before sending. Send this request now?</source>
            <translation>发送前在预览中查看 URL、路径变量和参数。现在发送此请求吗？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10100" />
            <location filename="../zscaler_api_client.py" line="10105" />
            <source>Asking configured LLM…</source>
            <translation>询问已配置的LLM...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10103" />
            <source>LLM unavailable; using the local catalog assistant.</source>
            <translation>法学硕士不可用；使用本地目录助手。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10114" />
            <source>Configure an AI endpoint and model in Settings.</source>
            <translation>在“设置”中配置 AI 端点和模型。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10118" />
            <source>AI endpoint must use HTTP or HTTPS.</source>
            <translation>AI端点必须使用HTTP或HTTPS。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10120" />
            <source>External AI is disabled. Enable it explicitly in Settings.</source>
            <translation>外部 AI 已禁用。在“设置”中明确启用它。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10122" />
            <source>External AI endpoints must use HTTPS.</source>
            <translation>外部 AI 端点必须使用 HTTPS。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10124" />
            <source>AI question is too long (maximum 2000 characters).</source>
            <translation>AI 问题太长（最多 2000 个字符）。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10153" />
            <location filename="../zscaler_api_client.py" line="10159" />
            <source>Save binary response</source>
            <translation>保存二进制响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10154" />
            <source>Binary content cannot be inspected or obfuscated as text. Save the original response only if you trust this endpoint and destination?</source>
            <translation>二进制内容无法作为文本进行检查或混淆。仅当您信任此端点和目的地时才保存原始响应？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10159" />
            <source>All files (*)</source>
            <translation>所有文件 (*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10162" />
            <source>Original binary response saved</source>
            <translation>原始二进制响应已保存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10211" />
            <source>Masked response exported</source>
            <translation>导出的屏蔽响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10317" />
            <source>Binary content is not included in this preview.</source>
            <translation>此预览中不包含二进制内容。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10319" />
            <location filename="../zscaler_api_client.py" line="10325" />
            <source>Export preview</source>
            <translation>导出预览</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10320" />
            <source>Original binary export requires a separate confirmation.</source>
            <translation>原始二进制导出需要单独确认。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10326" />
            <source>Sensitive fields are masked in every export.</source>
            <translation>每次导出时都会屏蔽敏感字段。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10380" />
            <location filename="../zscaler_api_client.py" line="10389" />
            <location filename="../zscaler_api_client.py" line="10397" />
            <source>Export AI result</source>
            <translation>导出AI结果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10189" />
            <location filename="../zscaler_api_client.py" line="10197" />
            <location filename="../zscaler_api_client.py" line="10389" />
            <location filename="../zscaler_api_client.py" line="10397" />
            <source>No chart data is available to export.</source>
            <translation>没有可供导出的图表数据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10406" />
            <source>AI result exported</source>
            <translation>AI结果导出</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10665" />
            <source>No tabular datasets</source>
            <translation>没有表格数据集</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10674" />
            <source>Nodes</source>
            <translation>节点</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10674" />
            <source>Connections</source>
            <translation>连接</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10676" />
            <source>No nodes or connections were found in this response.</source>
            <translation>在此响应中未找到任何节点或连接。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10737" />
            <source>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</source>
            <translation>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10754" />
            <source>Raw request body...</source>
            <translation>原始请求正文...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10755" />
            <source>Form fields as JSON or an encoded key=value string...</source>
            <translation>表单字段为 JSON 或编码的 key=value 字符串...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10756" />
            <source>Optional multipart fields as a JSON object...</source>
            <translation>作为 JSON 对象的可选多部分字段...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10762" />
            <source>Select upload file</source>
            <translation>选择上传文件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9514" />
            <location filename="../zscaler_api_client.py" line="10811" />
            <source>Yes</source>
            <translation>是的</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9514" />
            <location filename="../zscaler_api_client.py" line="10811" />
            <source>No</source>
            <translation>否</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10829" />
            <source>{count} variable(s) extracted · {missing} required value(s) missing</source>
            <translation>{count} variable(s) extracted · {missing} required value(s) missing</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10836" />
            <location filename="../zscaler_api_client.py" line="11184" />
            <source>GraphQL body must be a JSON object containing a query string.</source>
            <translation>GraphQL 主体必须是包含查询字符串的 JSON 对象。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10840" />
            <source>Choose operationName because the document contains multiple GraphQL operations.</source>
            <translation>选择操作名称，因为文档包含多个 GraphQL 操作。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10842" />
            <source>GraphQL operationName does not match a named operation in the query.</source>
            <translation>GraphQL 操作名称与查询中的命名操作不匹配。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10853" />
            <source>Variable ${name} is required.</source>
            <translation>Variable ${name} is required.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10857" />
            <source>Variable ${name} must be valid for type {type}.</source>
            <translation>Variable ${name} must be valid for type {type}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10864" />
            <source>Remove undeclared GraphQL variables: {names}</source>
            <translation>Remove undeclared GraphQL variables: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10888" />
            <location filename="../zscaler_api_client.py" line="10908" />
            <source>Documented GraphQL schema</source>
            <translation>记录的 GraphQL 模式</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10889" />
            <source>The current Automation Hub page has no executable query example. Open its documentation or use schema introspection.</source>
            <translation>当前的 Automation Hub 页面没有可执行查询示例。打开其文档或使用模式自省。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10903" />
            <source>Loaded documented ZInsights query. Review time ranges, filters, and fields before sending.</source>
            <translation>已加载记录的 ZInsights 查询。发送前检查时间范围、过滤器和字段。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10939" />
            <source>Enter a name before saving the GraphQL query.</source>
            <translation>在保存 GraphQL 查询之前输入名称。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10943" />
            <location filename="../zscaler_api_client.py" line="10984" />
            <location filename="../zscaler_api_client.py" line="10997" />
            <location filename="../zscaler_api_client.py" line="11016" />
            <source>Secure storage</source>
            <translation>安全存储</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10943" />
            <source>The system keychain could not save the GraphQL query.</source>
            <translation>系统钥匙串无法保存 GraphQL 查询。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10949" />
            <source>GraphQL query saved securely</source>
            <translation>安全保存 GraphQL 查询</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10955" />
            <source>Saved GraphQL query is unavailable.</source>
            <translation>保存的 GraphQL 查询不可用。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10984" />
            <source>The system keychain could not rename the GraphQL query.</source>
            <translation>系统钥匙串无法重命名 GraphQL 查询。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10997" />
            <source>The system keychain could not delete the GraphQL query.</source>
            <translation>系统钥匙串无法删除 GraphQL 查询。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11008" />
            <source>GraphQL introspection query prepared. Review the endpoint before sending.</source>
            <translation>GraphQL 内省查询已准备好。发送前检查端点。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11016" />
            <source>The system keychain could not save the GraphQL schema.</source>
            <translation>系统钥匙串无法保存 GraphQL 架构。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11018" />
            <source>GraphQL schema saved securely</source>
            <translation>安全保存的 GraphQL 模式</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9020" />
            <location filename="../zscaler_api_client.py" line="11023" />
            <source>GraphQL schema</source>
            <translation>GraphQL 架构</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11023" />
            <source>No saved introspection result exists for this endpoint.</source>
            <translation>此端点不存在已保存的内省结果。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11064" />
            <source>{count} GraphQL errors</source>
            <translation>{count} GraphQL errors</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11066" />
            <source>extensions included</source>
            <translation>包括扩展</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10073" />
            <location filename="../zscaler_api_client.py" line="10939" />
            <location filename="../zscaler_api_client.py" line="10955" />
            <location filename="../zscaler_api_client.py" line="11083" />
            <location filename="../zscaler_api_client.py" line="11115" />
            <location filename="../zscaler_api_client.py" line="11814" />
            <location filename="../zscaler_api_client.py" line="11833" />
            <source>Warning</source>
            <translation>警告</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11083" />
            <source>Please enter a URL</source>
            <translation>请输入URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9861" />
            <location filename="../zscaler_api_client.py" line="9891" />
            <location filename="../zscaler_api_client.py" line="9916" />
            <location filename="../zscaler_api_client.py" line="9980" />
            <location filename="../zscaler_api_client.py" line="11198" />
            <location filename="../zscaler_api_client.py" line="11201" />
            <location filename="../zscaler_api_client.py" line="11228" />
            <source>Error</source>
            <translation>错误</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8578" />
            <source>ZIA · List users</source>
            <translation>ZIA · 列出用户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8578" />
            <source>List ZIA users with pagination</source>
            <translation>列出带有分页的 ZIA 用户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8579" />
            <source>ZIA · Find URL categories</source>
            <translation>ZIA · 查找 URL 类别</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8579" />
            <source>Search ZIA URL categories for social media</source>
            <translation>搜索社交媒体的 ZIA URL 类别</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8580" />
            <source>ZIA · Review firewall policies</source>
            <translation>ZIA · 审查防火墙策略</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8580" />
            <source>List ZIA cloud firewall policies</source>
            <translation>列出 ZIA 云防火墙策略</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8581" />
            <source>ZPA · Application segments</source>
            <translation>ZPA · 应用领域</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8581" />
            <source>List ZPA application segments</source>
            <translation>列出 ZPA 应用程序段</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8582" />
            <source>ZPA · Connector inventory</source>
            <translation>ZPA·连接器库存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8582" />
            <source>List ZPA connectors</source>
            <translation>列出 ZPA 连接器</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8583" />
            <source>ZDX · Experience overview</source>
            <translation>ZDX·体验概览</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8583" />
            <source>List ZDX devices and experience scores</source>
            <translation>列出 ZDX 设备和体验分数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8584" />
            <source>ZDX · Active alerts</source>
            <translation>ZDX·主动警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8584" />
            <source>List active ZDX alerts with pagination</source>
            <translation>列出活动的 ZDX 警报并分页</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8585" />
            <source>ZDX · Application monitoring</source>
            <translation>ZDX·应用监控</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8585" />
            <source>List monitored ZDX applications</source>
            <translation>列出受监控的 ZDX 应用程序</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8586" />
            <source>Client Connector · Devices</source>
            <translation>客户端连接器·设备</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8586" />
            <source>List Client Connector devices</source>
            <translation>列出客户端连接器设备</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8587" />
            <source>ZIdentity · Users</source>
            <translation>ZIdentity·用户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8587" />
            <source>List ZIdentity users with pagination</source>
            <translation>使用分页列出 ZIdentity 用户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8588" />
            <source>ZIdentity · Groups</source>
            <translation>ZIdentity · 团体</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8588" />
            <source>List ZIdentity groups</source>
            <translation>列出 ZIdentity 组</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8589" />
            <source>AI Security · Workloads</source>
            <translation>AI安全·工作负载</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8589" />
            <source>List AI Security workloads</source>
            <translation>列出 AI 安全工作负载</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8643" />
            <source>ZS API Client</source>
            <translation>ZS API客户端</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8650" />
            <source>Explore APIs, review changes, and operate safely</source>
            <translation>探索 API、审查更改并安全操作</translation>
        </message>
        <message>
            <source>1 · Environment</source>
            <translation type="vanished">1·环境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8656" />
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
            <location filename="../zscaler_api_client.py" line="8664" />
            <source>Open policy diff and policy-as-code export</source>
            <translation>开放策略差异和策略即代码导出</translation>
        </message>
        <message>
            <source>Operations Center</source>
            <translation type="vanished">运营中心</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8667" />
            <location filename="../zscaler_api_client.py" line="8681" />
            <source>PAC Workspace</source>
            <translation>PAC Workspace</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8668" />
            <source>Create, verify, map, and prepare PAC files (Ctrl+Shift+P)</source>
            <translation>Create, verify, map, and prepare PAC files (Ctrl+Shift+P)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8687" />
            <source>Settings</source>
            <translation>设置</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8681" />
            <location filename="../zscaler_api_client.py" line="8699" />
            <source>API Explorer</source>
            <translation>API浏览器</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8654" />
            <source>Environment</source>
            <translation>Environment</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8659" />
            <location filename="../zscaler_api_client.py" line="8681" />
            <source>Monitor</source>
            <translation>Monitor</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8660" />
            <source>Open dashboards, alerts, audits, and response analysis</source>
            <translation>Open dashboards, alerts, audits, and response analysis</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8663" />
            <location filename="../zscaler_api_client.py" line="8681" />
            <source>Changes</source>
            <translation>Changes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8672" />
            <location filename="../zscaler_api_client.py" line="9664" />
            <source>Alerts</source>
            <translation>Alerts</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8673" />
            <source>Open local operational alerts</source>
            <translation>Open local operational alerts</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8676" />
            <source>Recent</source>
            <translation>Recent</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8677" />
            <source>Open redacted request history</source>
            <translation>Open redacted request history</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8681" />
            <location filename="../zscaler_api_client.py" line="11667" />
            <source>Favorites</source>
            <translation>Favorites</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8681" />
            <location filename="../zscaler_api_client.py" line="11693" />
            <source>Operations inbox</source>
            <translation>Operations inbox</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8683" />
            <source>Quick actions</source>
            <translation>Quick actions</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8684" />
            <source>Open common workspaces and actions</source>
            <translation>Open common workspaces and actions</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8702" />
            <location filename="../zscaler_api_client.py" line="10039" />
            <location filename="../zscaler_api_client.py" line="11670" />
            <source>Product</source>
            <translation>产品展示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8713" />
            <source>Authenticate with selected API (Ctrl+Shift+A)</source>
            <translation>使用选定的 API 进行身份验证 (Ctrl+Shift+A)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8723" />
            <source>🔍 Filter endpoints...</source>
            <translation>🔍 过滤端点...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8757" />
            <source>Request Builder</source>
            <translation>请求生成器</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8785" />
            <source>Send request (Ctrl+Return)</source>
            <translation>发送请求（Ctrl+Return）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8789" />
            <source>Cancel</source>
            <translation>取消</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8790" />
            <source>Stop before the next page or chain step; the current HTTP request is allowed to finish safely.</source>
            <translation>在下一页或链步骤之前停止；允许当前 HTTP 请求安全完成。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8794" />
            <source>Copy request as cURL command (Ctrl+Shift+C)</source>
            <translation>将请求复制为 cURL 命令 (Ctrl+Shift+C)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8800" />
            <source>GraphQL request</source>
            <translation>GraphQL 请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8801" />
            <source>Send the request body as a GraphQL query and preserve data, errors, and extensions.</source>
            <translation>将请求正文作为 GraphQL 查询发送并保留数据、错误和扩展。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8805" />
            <source>Fetch all pages</source>
            <translation>获取所有页面</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8806" />
            <source>Follow only the pagination parameters documented for the selected read operation.</source>
            <translation>仅遵循为所选读取操作记录的分页参数。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8808" />
            <source>Page size:</source>
            <translation>页面尺寸：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8812" />
            <source>Maximum pages:</source>
            <translation>最大页数：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8820" />
            <source>Saved GraphQL query name</source>
            <translation>已保存的 GraphQL 查询名称</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8824" />
            <source>Save query</source>
            <translation>保存查询</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8827" />
            <source>Load query</source>
            <translation>加载查询</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8830" />
            <source>Rename query</source>
            <translation>重命名查询</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8833" />
            <source>Delete query</source>
            <translation>删除查询</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8836" />
            <source>Introspect schema</source>
            <translation>内省模式</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8839" />
            <source>Load saved schema</source>
            <translation>加载保存的架构</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8845" />
            <source>Documented ZInsights query…</source>
            <translation>记录 ZInsights 查询...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8850" />
            <source>Load documented query</source>
            <translation>加载记录查询</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8853" />
            <source>Browse documented schema</source>
            <translation>浏览记录的模式</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8884" />
            <source>Body type:</source>
            <translation>体型：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8886" />
            <source>JSON</source>
            <translation>JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8887" />
            <source>Raw text</source>
            <translation>原始文本</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8888" />
            <source>Form URL encoded</source>
            <translation>表单 URL 编码</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8889" />
            <location filename="../zscaler_api_client.py" line="11193" />
            <source>Multipart file upload</source>
            <translation>分段文件上传</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8897" />
            <source>File field:</source>
            <translation>文件字段：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8901" />
            <source>Upload file:</source>
            <translation>上传文件：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8904" />
            <source>Select a local file; its path is never saved in history</source>
            <translation>选择本地文件；它的路径从未被保存在历史中</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8906" />
            <source>Browse…</source>
            <translation>浏览…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8920" />
            <source>Extract typed variables from the selected GraphQL operation. Values are inserted into the JSON request body, never into the URL.</source>
            <translation>从选定的 GraphQL 操作中提取类型变量。值将插入到 JSON 请求正文中，而不是插入到 URL 中。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8922" />
            <location filename="../zscaler_api_client.py" line="8947" />
            <source>Type</source>
            <translation>类型</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8922" />
            <location filename="../zscaler_api_client.py" line="8947" />
            <source>Required</source>
            <translation>必填</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8922" />
            <location filename="../zscaler_api_client.py" line="8948" />
            <source>Default</source>
            <translation>默认</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8922" />
            <source>JSON value</source>
            <translation>JSON值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8926" />
            <source>Extract variables from query</source>
            <translation>从查询中提取变量</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8927" />
            <location filename="../zscaler_api_client.py" line="10831" />
            <location filename="../zscaler_api_client.py" line="11847" />
            <source>No GraphQL variables extracted.</source>
            <translation>未提取任何 GraphQL 变量。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8928" />
            <location filename="../zscaler_api_client.py" line="11184" />
            <location filename="../zscaler_api_client.py" line="11234" />
            <source>GraphQL Variables</source>
            <translation>GraphQL 变量</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8942" />
            <location filename="../zscaler_api_client.py" line="11852" />
            <source>Select a documented endpoint to inspect its request contract.</source>
            <translation>选择记录的端点以检查其请求合同。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8947" />
            <source>Location</source>
            <translation>地点</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8947" />
            <location filename="../zscaler_api_client.py" line="11670" />
            <source>Name</source>
            <translation>名称</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8948" />
            <source>Description</source>
            <translation>描述</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8953" />
            <source>API Guide</source>
            <translation>API指南</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8967" />
            <source>Dataset:</source>
            <translation>数据集：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8989" />
            <source>Open export</source>
            <translation>打开导出</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8990" />
            <source>Compare drift</source>
            <translation>比较漂移</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9010" />
            <source>Field</source>
            <translation>领域</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9136" />
            <source>Open response export…</source>
            <translation>打开响应导出...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9137" />
            <source>Compare response drift…</source>
            <translation>比较响应漂移...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9194" />
            <source>PAC &amp;Workspace...</source>
            <translation>PAC 和工作空间...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9474" />
            <location filename="../zscaler_api_client.py" line="9488" />
            <source>Required value</source>
            <translation>所需值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9474" />
            <location filename="../zscaler_api_client.py" line="9488" />
            <source>Optional value</source>
            <translation>可选值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9522" />
            <source>body template available</source>
            <translation>身体模板可用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9522" />
            <source>no body template</source>
            <translation>没有身体模板</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9523" />
            <source>not listed</source>
            <translation>未列出</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9524" />
            <source>{count} documented parameter(s) · {body} · responses: {codes}. Templates are examples; review every value before sending.</source>
            <translation>{count} documented parameter(s) · {body} · responses: {codes}. Templates are examples; review every value before sending.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9528" />
            <source>Documented {mode} pagination is available as an explicit bounded option.</source>
            <translation>Documented {mode} pagination is available as an explicit bounded option.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9547" />
            <source>Documented {mode} pagination using {parameter}. Results retain every page and stop at the configured maximum.</source>
            <translation>Documented {mode} pagination using {parameter}. Results retain every page and stop at the configured maximum.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9559" />
            <source>The URL was edited manually. Select an endpoint again to attach its documented request contract.</source>
            <translation>该 URL 已手动编辑。再次选择一个端点以附加其记录的请求合同。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9657" />
            <source>Active environment: {name}</source>
            <translation>Active environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9664" />
            <source>Alerts ({count})</source>
            <translation>Alerts ({count})</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9676" />
            <source>The selected environment profile is unavailable.</source>
            <translation>所选环境配置文件不可用。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9690" />
            <source>Environment profile active: {name}. Sessions and request data were cleared.</source>
            <translation>Environment profile active: {name}. Sessions and request data were cleared.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9734" />
            <source>Write request prepared</source>
            <translation>写请求已准备好</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9735" />
            <source>The documented write template is ready. Review the API Guide, parameters, and body, then choose Send explicitly.</source>
            <translation>记录的写入模板已准备就绪。查看 API 指南、参数和正文，然后选择显式发送。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10029" />
            <source>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</source>
            <translation>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10184" />
            <source>No tabular response data is available to export.</source>
            <translation>没有可导出的表格响应数据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10334" />
            <location filename="../zscaler_api_client.py" line="10345" />
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
            <location filename="../zscaler_api_client.py" line="10368" />
            <source>Response export opened locally; no API request was sent.</source>
            <translation>响应出口在本地开放；未发送 API 请求。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10373" />
            <location filename="../zscaler_api_client.py" line="10375" />
            <source>Response drift comparison</source>
            <translation>响应漂移比较</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10373" />
            <source>Binary responses cannot be structurally compared. Export and inspect the original file with an appropriate tool.</source>
            <translation>二元响应无法在结构上进行比较。使用适当的工具导出并检查原始文件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10375" />
            <source>Send a request or open a response export before comparing drift.</source>
            <translation>在比较漂移之前发送请求或打开响应导出。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11079" />
            <location filename="../zscaler_api_client.py" line="11596" />
            <source>Read only</source>
            <translation>只读</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11079" />
            <location filename="../zscaler_api_client.py" line="11596" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>只读模式阻止写入请求。更改操作中心中的本地角色以继续。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11104" />
            <source>Missing Path Variables</source>
            <translation>缺少路径变量</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11105" />
            <source>Enter values for: {names}</source>
            <translation>Enter values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11115" />
            <source>Configure a base URL for the selected product before sending a relative API path.</source>
            <translation>在发送相对 API 路径之前，为所选产品配置基本 URL。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11169" />
            <source>Missing documented parameters</source>
            <translation>缺少记录的参数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11170" />
            <source>Enter required values for: {names}</source>
            <translation>Enter required values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11193" />
            <source>Select an available local file before sending.</source>
            <translation>发送前选择可用的本地文件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11198" />
            <source>Multipart fields must be a JSON object: {error}</source>
            <translation>Multipart fields must be a JSON object: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11201" />
            <source>Multipart fields must be a JSON object.</source>
            <translation>多部分字段必须是 JSON 对象。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11240" />
            <source>Sending request...</source>
            <translation>正在发送请求...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11271" />
            <source>Pagination unavailable</source>
            <translation>分页不可用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11271" />
            <source>Select a documented paginated GET operation before fetching all pages.</source>
            <translation>在获取所有页面之前选择记录的分页 GET 操作。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11289" />
            <source>Fetching page {page} of at most {maximum}…</source>
            <translation>Fetching page {page} of at most {maximum}…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11293" />
            <source>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</source>
            <translation>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11302" />
            <source>Cancellation requested; waiting for the current HTTP request to finish safely…</source>
            <translation>要求取消；等待当前 HTTP 请求安全完成...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11315" />
            <source>Request cancelled before completion</source>
            <translation>请求在完成之前被取消</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11363" />
            <source>Safe read retries: {count}</source>
            <translation>Safe read retries: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11384" />
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
            <location filename="../zscaler_api_client.py" line="11424" />
            <source>Pagination complete: {pages} page(s), {records} record(s)</source>
            <translation>Pagination complete: {pages} page(s), {records} record(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11431" />
            <source>Pagination stopped before completion: {pages} page(s), {records} record(s)</source>
            <translation>Pagination stopped before completion: {pages} page(s), {records} record(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11459" />
            <source>ZDX authenticated successfully</source>
            <translation>已认证成功。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11463" />
            <source>ZCC authenticated successfully</source>
            <translation>已认证成功。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11467" />
            <source>ZIdentity authenticated successfully</source>
            <translation>ZIdentity身份验证成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11471" />
            <source>ZTW authenticated successfully</source>
            <translation>已认证成功。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11475" />
            <source>ZWA authenticated successfully</source>
            <translation>已认证成功。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11479" />
            <source>EASM authenticated successfully</source>
            <translation>已认证成功。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11483" />
            <source>OneAPI authenticated successfully</source>
            <translation>OneAPI 身份验证成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11488" />
            <source>Authenticated successfully</source>
            <translation>已认证成功。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11588" />
            <source>Batch validation failed: </source>
            <translation>批量验证失败： </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11591" />
            <source>Select {api} before running this batch.</source>
            <translation>Select {api} before running this batch.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11599" />
            <source>Review complete. Send {count} request(s) to the active environment?</source>
            <translation>Review complete. Send {count} request(s) to the active environment?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11600" />
            <source>Confirm batch</source>
            <translation>确认批次</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11615" />
            <source>Sending batch request 0 of {count}...</source>
            <translation>Sending batch request 0 of {count}...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11616" />
            <source>Batch execution started: {count} request(s)</source>
            <translation>Batch execution started: {count} request(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11633" />
            <source>Sending batch request {completed} of {total}...</source>
            <translation>Sending batch request {completed} of {total}...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11643" />
            <location filename="../zscaler_api_client.py" line="11644" />
            <location filename="../zscaler_api_client.py" line="11645" />
            <source>Batch complete: {successful} succeeded, {failed} failed.</source>
            <translation>Batch complete: {successful} succeeded, {failed} failed.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8681" />
            <location filename="../zscaler_api_client.py" line="11712" />
            <source>Request History</source>
            <translation>请求历史记录</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11669" />
            <source>Favorites are local to the active environment and never include credentials or request bodies.</source>
            <translation>Favorites are local to the active environment and never include credentials or request bodies.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11678" />
            <source>Save favorite</source>
            <translation>Save favorite</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11678" />
            <source>Favorite name:</source>
            <translation>Favorite name:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11678" />
            <source>New request</source>
            <translation>New request</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11688" />
            <source>Save current request</source>
            <translation>Save current request</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11688" />
            <source>Load selected</source>
            <translation>Load selected</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11688" />
            <source>Remove favorite</source>
            <translation>Remove favorite</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11688" />
            <location filename="../zscaler_api_client.py" line="11705" />
            <source>Close</source>
            <translation>Close</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11694" />
            <source>Local items requiring attention. This inbox is scoped to the active environment and never sends changes.</source>
            <translation>Local items requiring attention. This inbox is scoped to the active environment and never sends changes.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11695" />
            <source>Priority</source>
            <translation>Priority</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11695" />
            <source>Source</source>
            <translation>Source</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11695" />
            <source>Details</source>
            <translation>Details</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11699" />
            <source>Alert</source>
            <translation>Alert</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11700" />
            <source>High</source>
            <translation>High</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11700" />
            <source>Failed request</source>
            <translation>Failed request</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11701" />
            <source>Info</source>
            <translation>Info</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11701" />
            <source>Scheduled report</source>
            <translation>Scheduled report</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11705" />
            <source>Open Alerts</source>
            <translation>Open Alerts</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11705" />
            <source>Open Recent</source>
            <translation>Open Recent</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11713" />
            <source>This request belongs to another environment. Activate that environment profile before loading it.</source>
            <translation>该请求属于另一个环境。在加载之前激活该环境配置文件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11726" />
            <location filename="../zscaler_api_client.py" line="11745" />
            <source>Multipart request loaded. Select the local file again before sending.</source>
            <translation>已加载多部分请求。发送前再次选择本地文件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11817" />
            <source>Masked cURL command copied to clipboard</source>
            <translation>已屏蔽的 cURL 命令已复制到剪贴板</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11822" />
            <source>Binary response</source>
            <translation>二元响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11822" />
            <source>Binary response content is not copied to the clipboard. Use Export to save the original file.</source>
            <translation>二进制响应内容不会复制到剪贴板。使用导出保存原始文件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11831" />
            <source>Masked response copied to clipboard</source>
            <translation>屏蔽响应已复制到剪贴板</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11976" />
            <source>The application needs to restart to apply the new language.

Restart now?</source>
            <translation>应用程序需要重新启动以应用新语言。

立即重新启动？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12103" />
            <source>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Release:&lt;/b&gt; {name}&lt;/p&gt;{prerelease}&lt;p style='color: #666; font-size: 11px;'&gt;✓ Verified from github.com/{repo}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</source>
            <translation>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Release:&lt;/b&gt; {name}&lt;/p&gt;{prerelease}&lt;p style='color: #666; font-size: 11px;'&gt;✓ Verified from github.com/{repo}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</translation>
        </message>
        <message>
            <source>Success</source>
            <translation type="vanished">成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11436" />
            <source>Request successful</source>
            <translation>请求成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11446" />
            <source>ZIA authenticated successfully</source>
            <translation>ZIA认证成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11455" />
            <source>ZPA authenticated successfully</source>
            <translation>ZPA 验证成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11521" />
            <location filename="../zscaler_api_client.py" line="11527" />
            <source>Request failed</source>
            <translation>请求失败</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11588" />
            <location filename="../zscaler_api_client.py" line="11591" />
            <location filename="../zscaler_api_client.py" line="11645" />
            <source>Batch</source>
            <translation>批量</translation>
        </message>
        <message>
            <source>Processing {count} items...</source>
            <translation type="vanished">正在处理 {count} 个项目...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11747" />
            <source>Request loaded from history</source>
            <translation>从历史记录中加载请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11814" />
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
            <location filename="../zscaler_api_client.py" line="11833" />
            <source>No response to copy</source>
            <translation>复制无响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11869" />
            <source>Request cleared</source>
            <translation>请求已清除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11882" />
            <location filename="../zscaler_api_client.py" line="11933" />
            <source>Missing Credentials</source>
            <translation>缺少凭证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11883" />
            <source>Please configure ZIA credentials in Settings first.</source>
            <translation>请先在“设置”中配置 ZIA 凭据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11905" />
            <source>ZIA auth request prepared. Click Send to authenticate.</source>
            <translation>ZIA 身份验证请求已准备好。单击“发送”进行身份验证。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11934" />
            <source>Please configure ZPA credentials in Settings first.</source>
            <translation>请先在“设置”中配置 ZPA 凭据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11947" />
            <source>ZPA auth request prepared. Click Send to authenticate.</source>
            <translation>ZPA 身份验证请求已准备好。单击“发送”进行身份验证。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11952" />
            <source>All sessions cleared</source>
            <translation>所有会话已清除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11975" />
            <source>Language Changed</source>
            <translation>语言已更改</translation>
        </message>
        <message>
            <source>Please restart the application to apply the new language.</source>
            <translation type="vanished">请重新启动应用程序以应用新语言。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12024" />
            <source>Checking for updates...</source>
            <translation>正在检查更新...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12097" />
            <source>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</source>
            <translation>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12101" />
            <source>Update Available</source>
            <translation>有更新可用</translation>
        </message>
        <message>
            <source>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</source>
            <translation type="vanished">&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12123" />
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
            <location filename="../zscaler_api_client.py" line="12126" />
            <source>You are up to date (v{version})</source>
            <translation>已是最新版本 (v{version})</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12131" />
            <source>Update Check Failed</source>
            <translation>检查更新失败</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12132" />
            <source>Could not check for updates:
{error}</source>
            <translation>无法检查更新:
{error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12134" />
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
            <location filename="../zscaler_api_client.py" line="9091" />
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
            <location filename="../zscaler_api_client.py" line="6221" />
            <source>Operations Center</source>
            <translation>运营中心</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6244" />
            <source>Requests</source>
            <translation>要求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6244" />
            <source>Success rate</source>
            <translation>成功率</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6244" />
            <location filename="../zscaler_api_client.py" line="7373" />
            <source>Audit integrity</source>
            <translation>审计诚信</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6244" />
            <source>Active environment</source>
            <translation>活跃环境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <source>Recent request outcomes</source>
            <translation>最近的请求结果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6261" />
            <location filename="../zscaler_api_client.py" line="6339" />
            <location filename="../zscaler_api_client.py" line="6343" />
            <location filename="../zscaler_api_client.py" line="6383" />
            <location filename="../zscaler_api_client.py" line="6439" />
            <location filename="../zscaler_api_client.py" line="6456" />
            <source>Time</source>
            <translation>时间</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6261" />
            <source>Activity</source>
            <translation>活动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6261" />
            <location filename="../zscaler_api_client.py" line="6321" />
            <location filename="../zscaler_api_client.py" line="6339" />
            <location filename="../zscaler_api_client.py" line="6456" />
            <location filename="../zscaler_api_client.py" line="6472" />
            <location filename="../zscaler_api_client.py" line="6487" />
            <location filename="../zscaler_api_client.py" line="6509" />
            <location filename="../zscaler_api_client.py" line="6535" />
            <location filename="../zscaler_api_client.py" line="6557" />
            <source>Status</source>
            <translation>状态</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6262" />
            <source>Recent activity</source>
            <translation>最近的活动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6265" />
            <source>Refresh dashboard</source>
            <translation>刷新仪表板</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6269" />
            <source>Dashboard</source>
            <translation>仪表板</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6272" />
            <source>Previous policy JSON</source>
            <translation>以前的政策 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6273" />
            <source>Proposed policy JSON</source>
            <translation>提议的政策 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6280" />
            <source>Compare policies</source>
            <translation>比较政策</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6282" />
            <source>Export policy as JSON</source>
            <translation>将策略导出为 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6283" />
            <source>Export policy as YAML</source>
            <translation>将策略导出为 YAML</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6284" />
            <source>Run compliance checks</source>
            <translation>运行合规性检查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6285" />
            <location filename="../zscaler_api_client.py" line="7695" />
            <source>Policy diff</source>
            <translation>政策差异</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6288" />
            <source>Rules JSON: [{"name": "Allow staff", "conditions": {"group": "staff"}, "action": "allow"}]</source>
            <translation>Rules JSON: [{"name": "Allow staff", "conditions": {"group": "staff"}, "action": "allow"}]</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6289" />
            <source>Request context JSON: {"group": "staff"}</source>
            <translation>Request context JSON: {"group": "staff"}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6294" />
            <source>Simulate policy (local only)</source>
            <translation>模拟策略（仅限本地）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6295" />
            <location filename="../zscaler_api_client.py" line="7743" />
            <source>Simulation</source>
            <translation>模拟</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6298" />
            <source>CSV data, e.g. name,email
Ada,ada@example.com</source>
            <translation>CSV 数据，例如姓名、电子邮件
艾达，ada@example.com</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6301" />
            <source>Required columns (comma separated)</source>
            <translation>必填列（逗号分隔）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6303" />
            <source>Validate bulk import</source>
            <translation>验证批量导入</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6304" />
            <source>Bulk operations</source>
            <translation>批量操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6307" />
            <source>Administrator</source>
            <translation>管理员</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6307" />
            <source>Analyst</source>
            <translation>分析师</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6307" />
            <location filename="../zscaler_api_client.py" line="7478" />
            <source>Read only</source>
            <translation>只读</translation>
        </message>
        <message>
            <source>Optional local automation script; never runs without approval</source>
            <translation type="vanished">可选的本地自动化脚本；未经批准绝不运行</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6314" />
            <source>Local role:</source>
            <translation>本地角色：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6314" />
            <source>Alert threshold (errors):</source>
            <translation>警报阈值（错误）：</translation>
        </message>
        <message>
            <source>Webhook endpoint (disabled until approved):</source>
            <translation type="vanished">Webhook 端点（在批准之前禁用）：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6314" />
            <source>Local automation:</source>
            <translation>本地自动化：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6315" />
            <source>Save governance settings</source>
            <translation>保存治理设置</translation>
        </message>
        <message>
            <source>Read-only mode blocks write requests. Webhooks and local automation are saved only; this app will ask before any execution.</source>
            <translation type="vanished">只读模式阻止写入请求。仅保存 Webhook 和本地自动化；这个应用程序会在执行之前询问。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6317" />
            <location filename="../zscaler_api_client.py" line="7752" />
            <location filename="../zscaler_api_client.py" line="7755" />
            <location filename="../zscaler_api_client.py" line="7758" />
            <location filename="../zscaler_api_client.py" line="7766" />
            <source>Governance</source>
            <translation>治理</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6320" />
            <source>Official integrations are optional. Credentials remain in the system keychain and no command runs automatically.</source>
            <translation>官方集成是可选的。凭据保留在系统钥匙串中，并且不会自动运行任何命令。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6321" />
            <source>Integration</source>
            <translation>整合</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6321" />
            <source>Recommended use</source>
            <translation>推荐用途</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6324" />
            <source>Check local integrations</source>
            <translation>检查本地集成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6325" />
            <source>Prepare Terraform import</source>
            <translation>准备 Terraform 导入</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6326" />
            <source>Prepare MCP connection</source>
            <translation>准备 MCP 连接</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6327" />
            <source>Prepare SDK configuration</source>
            <translation>准备SDK配置</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6328" />
            <source>Send masked webhook test</source>
            <translation>发送屏蔽的 webhook 测试</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6330" />
            <source>Copy reviewed command</source>
            <translation>复制已审核的命令</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6340" />
            <location filename="../zscaler_api_client.py" line="7805" />
            <location filename="../zscaler_api_client.py" line="7825" />
            <source>Integrations</source>
            <translation>集成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6343" />
            <source>Event</source>
            <translation>活动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6339" />
            <location filename="../zscaler_api_client.py" line="6343" />
            <location filename="../zscaler_api_client.py" line="6356" />
            <source>Details</source>
            <translation>详情</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6345" />
            <source>Refresh audit trail</source>
            <translation>刷新审计跟踪</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6346" />
            <location filename="../zscaler_api_client.py" line="6542" />
            <source>Schedule report</source>
            <translation>日程报告</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6347" />
            <source>Create redacted support bundle</source>
            <translation>创建经过编辑的支持包</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6348" />
            <source>Audit &amp; automation</source>
            <translation>审计与自动化</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6351" />
            <source>Local security posture uses redacted request history and audit integrity. It is an operational signal, not a tenant security assessment.</source>
            <translation>本地安全态势使用经过编辑的请求历史记录和审核完整性。这是一个操作信号，而不是租户安全评估。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6279" />
            <location filename="../zscaler_api_client.py" line="6356" />
            <location filename="../zscaler_api_client.py" line="6364" />
            <location filename="../zscaler_api_client.py" line="6383" />
            <location filename="../zscaler_api_client.py" line="6395" />
            <location filename="../zscaler_api_client.py" line="6400" />
            <location filename="../zscaler_api_client.py" line="6421" />
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="6435" />
            <location filename="../zscaler_api_client.py" line="6459" />
            <location filename="../zscaler_api_client.py" line="6509" />
            <location filename="../zscaler_api_client.py" line="6583" />
            <source>Severity</source>
            <translation>严重性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6356" />
            <location filename="../zscaler_api_client.py" line="6583" />
            <source>Finding</source>
            <translation>寻找</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6357" />
            <source>Refresh security posture</source>
            <translation>刷新安全态势</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6358" />
            <source>Security posture</source>
            <translation>安全态势</translation>
        </message>
        <message>
            <source>Build a redacted local investigation timeline. Prepared chains never send API requests automatically.</source>
            <translation type="vanished">制定经过编辑的当地调查时间表。准备好的链永远不会自动发送 API 请求。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <source>Investigation:</source>
            <translation>调查：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6374" />
            <source>API failure investigation</source>
            <translation>API故障调查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6374" />
            <source>Change activity review</source>
            <translation>变更活动审核</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6374" />
            <source>Slow response investigation</source>
            <translation>调查反应缓慢</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6375" />
            <source>Prepare investigation chain</source>
            <translation>准备调查链</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6383" />
            <location filename="../zscaler_api_client.py" line="6395" />
            <source>Source</source>
            <translation>来源</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6364" />
            <location filename="../zscaler_api_client.py" line="6383" />
            <location filename="../zscaler_api_client.py" line="6509" />
            <source>Evidence</source>
            <translation>证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6226" />
            <source>Data scope:</source>
            <translation>数据范围：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6229" />
            <source>Active environment: {name}</source>
            <translation>Active environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6233" />
            <source>All environments (cross-tenant overview)</source>
            <translation>所有环境（跨租户概览）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6235" />
            <source>Analytics are tenant-isolated by default. Cross-tenant scope is explicit and available in Advanced mode.</source>
            <translation>默认情况下，分析是租户隔离的。跨租户范围是明确的并且在高级模式下可用。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6244" />
            <source>Open alerts</source>
            <translation>打开警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6259" />
            <source>Recent request latency (ms)</source>
            <translation>最近请求延迟（毫秒）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6261" />
            <location filename="../zscaler_api_client.py" line="6343" />
            <location filename="../zscaler_api_client.py" line="6456" />
            <location filename="../zscaler_api_client.py" line="6535" />
            <source>Environment</source>
            <translation>环境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6266" />
            <source>Auto-refresh local signals</source>
            <translation>自动刷新本地信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6267" />
            <source>Every 30 seconds</source>
            <translation>每 30 秒</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6267" />
            <source>Every minute</source>
            <translation>每分钟</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6267" />
            <source>Every 5 minutes</source>
            <translation>每5分钟一班</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6276" />
            <source>Policy rule overview</source>
            <translation>策略规则概述</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6278" />
            <location filename="../zscaler_api_client.py" line="6279" />
            <location filename="../zscaler_api_client.py" line="6293" />
            <source>Rule</source>
            <translation>规则</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6278" />
            <location filename="../zscaler_api_client.py" line="6293" />
            <source>Action</source>
            <translation>行动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6278" />
            <source>Conditions</source>
            <translation>条件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6278" />
            <source>State</source>
            <translation>状态</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6279" />
            <source>Best-practice finding</source>
            <translation>最佳实践发现</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6293" />
            <source>Order</source>
            <translation>订单</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6293" />
            <source>Decision</source>
            <translation>决定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6311" />
            <source>Show webhook endpoint</source>
            <translation>显示 webhook 端点</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6313" />
            <source>Absolute path to a reviewed local Python automation</source>
            <translation>已审查的本地 Python 自动化的绝对路径</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6314" />
            <source>Webhook endpoint (stored in system keychain):</source>
            <translation>Webhook 端点（存储在系统钥匙串中）：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6316" />
            <source>Read-only mode blocks write requests and local automation. Every webhook or local automation execution requires explicit approval.</source>
            <translation>只读模式阻止写入请求和本地自动化。每个 Webhook 或本地自动化执行都需要明确的批准。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6329" />
            <source>Run reviewed local automation</source>
            <translation>运行经过审查的本地自动化</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6331" />
            <source>Send current masked alerts</source>
            <translation>发送当前屏蔽警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6338" />
            <source>Webhook delivery history</source>
            <translation>Webhook 传送历史记录</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6339" />
            <source>Delivery</source>
            <translation>发货</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6361" />
            <source>Local alerts evaluate retained, redacted request history only. They do not monitor the tenant in real time or send data externally.</source>
            <translation>本地警报仅评估保留的、经过编辑的请求历史记录。他们不实时监控租户或向外发送数据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6364" />
            <source>Alert</source>
            <translation>警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6364" />
            <source>Count</source>
            <translation>计数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6365" />
            <source>Refresh local alerts</source>
            <translation>刷新本地警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>Copy masked alert summary</source>
            <translation>复制屏蔽警报摘要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6367" />
            <source>Export alerts as JSON</source>
            <translation>将警报导出为 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6368" />
            <source>Export alerts as Markdown</source>
            <translation>将警报导出为 Markdown</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6369" />
            <source>Alert Center</source>
            <translation>警报中心</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6382" />
            <source>Security investigation evidence map</source>
            <translation>安全调查证据图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6403" />
            <source>Refresh investigation</source>
            <translation>刷新调查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6404" />
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Export incident evidence</source>
            <translation>导出事件证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6406" />
            <source>Incident investigation</source>
            <translation>事件调查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Create a local review from Policy diff. Approval records intent only; no policy, Terraform, or Git change is applied automatically.</source>
            <translation>根据政策差异创建本地审核。仅用于批准记录；不会自动应用任何策略、Terraform 或 Git 更改。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6484" />
            <source>Change ticket or reference</source>
            <translation>更改机票或参考资料</translation>
        </message>
        <message>
            <source>Reviewer name</source>
            <translation type="vanished">审稿人姓名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6484" />
            <source>Reference:</source>
            <translation>参考：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6484" />
            <source>Reviewer:</source>
            <translation>审稿人：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6489" />
            <source>Prepare change review</source>
            <translation>准备变更审核</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6490" />
            <source>Record local approval</source>
            <translation>记录当地批准情况</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6491" />
            <location filename="../zscaler_api_client.py" line="7185" />
            <source>Export Git review</source>
            <translation>导出 Git 评论</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6492" />
            <location filename="../zscaler_api_client.py" line="7181" />
            <source>Export rollback plan</source>
            <translation>出口回滚计划</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6494" />
            <location filename="../zscaler_api_client.py" line="7145" />
            <location filename="../zscaler_api_client.py" line="7167" />
            <location filename="../zscaler_api_client.py" line="7170" />
            <location filename="../zscaler_api_client.py" line="7179" />
            <source>Change control</source>
            <translation>变更控制</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6521" />
            <source>Generate local, redacted reports for leadership, SOC, or operations. Reports contain no credentials and are not sent automatically.</source>
            <translation>为领导层、SOC 或运营生成本地、经过编辑的报告。报告不包含凭据，也不会自动发送。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6522" />
            <source>Report type:</source>
            <translation>报告类型：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6523" />
            <location filename="../zscaler_api_client.py" line="7327" />
            <location filename="../zscaler_api_client.py" line="7362" />
            <location filename="../zscaler_api_client.py" line="7969" />
            <location filename="../zscaler_api_client.py" line="8070" />
            <source>CISO security summary</source>
            <translation>CISO 安全摘要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6523" />
            <location filename="../zscaler_api_client.py" line="7327" />
            <location filename="../zscaler_api_client.py" line="7362" />
            <location filename="../zscaler_api_client.py" line="7969" />
            <source>SOC investigation summary</source>
            <translation>SOC调查总结</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6523" />
            <location filename="../zscaler_api_client.py" line="7327" />
            <location filename="../zscaler_api_client.py" line="7362" />
            <location filename="../zscaler_api_client.py" line="7969" />
            <source>Operations health summary</source>
            <translation>运营健康状况总结</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6524" />
            <source>Generate report</source>
            <translation>生成报告</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6526" />
            <source>Security posture report artwork</source>
            <translation>安全态势报告图稿</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6530" />
            <location filename="../zscaler_api_client.py" line="7405" />
            <source>Export report as Markdown</source>
            <translation>将报告导出为 Markdown</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6531" />
            <location filename="../zscaler_api_client.py" line="7399" />
            <source>Export report as JSON</source>
            <translation>将报告导出为 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6532" />
            <location filename="../zscaler_api_client.py" line="7402" />
            <source>Export visual report as HTML</source>
            <translation>将可视化报告导出为 HTML</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6533" />
            <source>Scheduled reports</source>
            <translation>预定报告</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6535" />
            <source>Name</source>
            <translation>名称</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6535" />
            <source>Type</source>
            <translation>类型</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6535" />
            <source>Cadence</source>
            <translation>节奏</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6535" />
            <source>Next run</source>
            <translation>下次运行</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6535" />
            <source>Mode</source>
            <translation>模式</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6543" />
            <source>Run selected now</source>
            <translation>立即运行选定的</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6544" />
            <source>Enable or pause</source>
            <translation>启用或暂停</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6545" />
            <source>Remove schedule</source>
            <translation>删除日程</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6546" />
            <source>Refresh schedules</source>
            <translation>刷新时间表</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6548" />
            <source>Reports</source>
            <translation>报告</translation>
        </message>
        <message>
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and every run requires approval.</source>
            <translation type="vanished">针对活动的经过身份验证的环境运行经过审查的序列。链限制为 20 个步骤，保留在选定的产品主机上，并且每次运行都需要批准。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6552" />
            <source>Chain JSON</source>
            <translation>链式 JSON</translation>
        </message>
        <message>
            <source>A JSON list of API requests. Relative paths use the active product host.</source>
            <translation type="vanished">API 请求的 JSON 列表。相对路径使用活动产品主机。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Stop after the first failed step</source>
            <translation>第一个失败步骤后停止</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6561" />
            <source>Validate chain</source>
            <translation>验证链</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6562" />
            <location filename="../zscaler_api_client.py" line="7484" />
            <source>Run approved chain</source>
            <translation>运行批准的连锁店</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6563" />
            <source>Cancel chain</source>
            <translation>取消连锁</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6564" />
            <location filename="../zscaler_api_client.py" line="7556" />
            <source>Export masked chain results</source>
            <translation>导出屏蔽链结果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6565" />
            <location filename="../zscaler_api_client.py" line="7474" />
            <location filename="../zscaler_api_client.py" line="7480" />
            <location filename="../zscaler_api_client.py" line="7551" />
            <location filename="../zscaler_api_client.py" line="7555" />
            <source>API chains</source>
            <translation>API链</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6568" />
            <source>Build a local digital twin of policy order. It explains decisions, highlights overlap and shadowing, estimates change blast radius, and never applies a policy.</source>
            <translation>构建政策秩序的本地数字孪生。它解释决策，突出显示重叠和阴影，估计变化的爆炸半径，并且从不应用策略。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6570" />
            <source>Policy rules JSON or an object containing a rules list</source>
            <translation>策略规则 JSON 或包含规则列表的对象</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6571" />
            <source>Analyze policy twin</source>
            <translation>分析政策孪生</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6572" />
            <location filename="../zscaler_api_client.py" line="7640" />
            <source>Export twin evidence</source>
            <translation>导出双胞胎证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6573" />
            <source>Load proposed policy</source>
            <translation>加载建议的政策</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6574" />
            <source>Test context:</source>
            <translation>测试上下文：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6574" />
            <source>Request context JSON</source>
            <translation>请求上下文 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6575" />
            <source>Explain decision</source>
            <translation>解释决定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6577" />
            <source>Rules</source>
            <translation>规则</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6577" />
            <source>Conflicts</source>
            <translation>冲突</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6577" />
            <source>Shadowed</source>
            <translation>阴影</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6577" />
            <source>Blast radius</source>
            <translation>爆炸半径</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6581" />
            <source>Policy order and conflict graph</source>
            <translation>政策顺序和冲突图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6583" />
            <source>Earlier rule</source>
            <translation>较早的规则</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6583" />
            <source>Later rule</source>
            <translation>后来的统治</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6395" />
            <location filename="../zscaler_api_client.py" line="6400" />
            <location filename="../zscaler_api_client.py" line="6421" />
            <location filename="../zscaler_api_client.py" line="6435" />
            <location filename="../zscaler_api_client.py" line="6459" />
            <location filename="../zscaler_api_client.py" line="6583" />
            <source>Explanation</source>
            <translation>说明</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6258" />
            <location filename="../zscaler_api_client.py" line="6411" />
            <location filename="../zscaler_api_client.py" line="6931" />
            <source>Latency</source>
            <translation>延迟</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6372" />
            <source>Correlate retained local activity with every object in the current masked REST or GraphQL response. Paths are investigation hypotheses, never proof of compromise, and prepared chains never run automatically.</source>
            <translation>将保留的本地活动与当前屏蔽的 REST 或 GraphQL 响应中的每个对象相关联。路径是调查假设，而不是妥协的证明，准备好的链永远不会自动运行。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6376" />
            <source>Include current API/GraphQL response</source>
            <translation>包括当前的 API/GraphQL 响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6377" />
            <source>Correlate entities</source>
            <translation>关联实体</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6384" />
            <source>Evidence timeline</source>
            <translation>证据时间表</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>Entities</source>
            <translation>实体</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>Relationships</source>
            <translation>人际关系</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>Potential paths</source>
            <translation>潜在路径</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>High-risk entities</source>
            <translation>高风险实体</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6392" />
            <source>Filter entities:</source>
            <translation>过滤实体：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6392" />
            <source>Name, type, risk, or evidence source</source>
            <translation>名称、类型、风险或证据来源</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6393" />
            <source>SOC entity and potential attack-path graph</source>
            <translation>SOC 实体和潜在攻击路径图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <location filename="../zscaler_api_client.py" line="6825" />
            <source>Select an entity to inspect its local evidence.</source>
            <translation>选择一个实体来检查其本地证据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6395" />
            <source>Target</source>
            <translation>目标</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6395" />
            <source>Hops</source>
            <translation>啤酒花</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6396" />
            <source>Entity graph</source>
            <translation>实体图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6399" />
            <source>Explainable signals are derived only from retained local evidence and the selected response. Validate them against authoritative product telemetry.</source>
            <translation>可解释的信号仅来自保留的当地证据和选定的响应。根据权威产品遥测数据验证它们。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6400" />
            <source>Signal</source>
            <translation>信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6400" />
            <source>Entity</source>
            <translation>实体</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6401" />
            <source>Correlated signals</source>
            <translation>相关信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6405" />
            <location filename="../zscaler_api_client.py" line="6888" />
            <source>Export entity graph</source>
            <translation>导出实体图</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6409" />
            <source>Trace observed digital experience from user and device through network and service edge to the application. The parser consumes the complete current REST or GraphQL response, marks missing stages explicitly, and never queries the tenant automatically.</source>
            <translation>通过网络和服务边缘跟踪观察到的从用户和设备到应用程序的数字体验。解析器使用完整的当前 REST 或 GraphQL 响应，显式标记缺失的阶段，并且从不自动查询租户。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6411" />
            <location filename="../zscaler_api_client.py" line="6931" />
            <source>Experience score</source>
            <translation>经验值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6411" />
            <location filename="../zscaler_api_client.py" line="6931" />
            <source>Packet loss</source>
            <translation>丢包</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6411" />
            <source>Journey issues</source>
            <translation>旅程问题</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>Observed user-to-application experience journey</source>
            <translation>观察用户到应用程序的体验历程</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6418" />
            <source>Trend metric:</source>
            <translation>趋势指标：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6419" />
            <source>Observed value</source>
            <translation>观测值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6421" />
            <source>Stage</source>
            <translation>舞台</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6421" />
            <source>Metric</source>
            <translation>公制</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Analyze current experience response</source>
            <translation>分析当前的体验反应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6424" />
            <location filename="../zscaler_api_client.py" line="6953" />
            <source>Export masked journey</source>
            <translation>出口蒙面之旅</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6425" />
            <source>Experience journey</source>
            <translation>体验之旅</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6443" />
            <source>Build and test explainable detections against retained local request history. Rules use a bounded declarative grammar—no Python, eval, tenant writes, network calls, or automatic remediation.</source>
            <translation>针对保留的本地请求历史构建并测试可解释的检测。规则使用有界声明性语法 - 无 Python、eval、租户写入、网络调用或自动修复。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>Template:</source>
            <translation>模板：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6445" />
            <source>Server errors</source>
            <translation>服务器错误</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6445" />
            <source>Rate-limit responses</source>
            <translation>速率限制响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6445" />
            <source>High request latency</source>
            <translation>高请求延迟</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6445" />
            <source>Write activity</source>
            <translation>写活动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6445" />
            <source>Authentication failures</source>
            <translation>认证失败</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <source>Anomaly sensitivity:</source>
            <translation>异常敏感度：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <source>Relaxed</source>
            <translation>轻松</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <source>Balanced</source>
            <translation>平衡</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <source>Sensitive</source>
            <translation>敏感</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6449" />
            <source>Declarative detection rule JSON</source>
            <translation>声明式检测规则 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <source>Validate rule</source>
            <translation>验证规则</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6451" />
            <source>Run local detection</source>
            <translation>运行本地检测</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <source>Analyze adaptive anomalies</source>
            <translation>分析适应性异常</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6453" />
            <location filename="../zscaler_api_client.py" line="7063" />
            <source>Export masked detection evidence</source>
            <translation>导出蒙版检测证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6456" />
            <location filename="../zscaler_api_client.py" line="6479" />
            <source>URL</source>
            <translation>网址</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6459" />
            <source>Endpoint</source>
            <translation>端点</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6459" />
            <source>Observed</source>
            <translation>观察到</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6460" />
            <source>Detection lab</source>
            <translation>检测实验室</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6497" />
            <source>Continuously evaluate a transparent local evidence baseline. Framework mappings are navigational aids—not certification—and no tenant query or remediation runs automatically.</source>
            <translation>持续评估透明的当地证据基线。框架映射是导航辅助工具，而不是认证，并且不会自动运行租户查询或修复。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6498" />
            <source>Framework view:</source>
            <translation>框架视图：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6499" />
            <source>All local controls</source>
            <translation>所有本地控制</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6499" />
            <source>NIST CSF 2.0 functions</source>
            <translation>NIST CSF 2.0 功能</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6499" />
            <source>CISA Zero Trust pillars</source>
            <translation>CISA 零信任支柱</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6500" />
            <source>Include proposed policy from Policy diff</source>
            <translation>包括政策差异中的拟议政策</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6501" />
            <source>Evaluate now</source>
            <translation>立即评估</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6503" />
            <location filename="../zscaler_api_client.py" line="7374" />
            <source>Assurance score</source>
            <translation>保证分数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6503" />
            <location filename="../zscaler_api_client.py" line="7156" />
            <source>Passed</source>
            <translation>通过</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6503" />
            <location filename="../zscaler_api_client.py" line="7255" />
            <source>Not evaluated</source>
            <translation>未评价</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6503" />
            <source>Evidence coverage</source>
            <translation>证据覆盖范围</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6509" />
            <source>Control</source>
            <translation>控制</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6509" />
            <source>Control objective</source>
            <translation>控制目标</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6509" />
            <source>Framework mapping</source>
            <translation>框架映射</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6509" />
            <source>Recommendation</source>
            <translation>推荐</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6510" />
            <source>Leadership narrative</source>
            <translation>领导力叙述</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6479" />
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Score</source>
            <translation>分数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6332" />
            <source>JSON Lines (SIEM/SOAR)</source>
            <translation>JSON 行（SIEM/SOAR）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6333" />
            <location filename="../zscaler_api_client.py" line="7812" />
            <source>Export masked security events</source>
            <translation>导出屏蔽的安全事件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6334" />
            <location filename="../zscaler_api_client.py" line="7818" />
            <source>Export read-only MCP manifest</source>
            <translation>导出只读 MCP 清单</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6335" />
            <location filename="../zscaler_api_client.py" line="7826" />
            <source>Export Terraform review handoff</source>
            <translation>导出 Terraform 审核交接</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6428" />
            <source>Inspect the complete current REST or GraphQL response for explicit internet exposure, vulnerability severity and broad or write-capable access. Findings are local hypotheses and deception suggestions are never deployed automatically.</source>
            <translation>检查完整的当前 REST 或 GraphQL 响应，以确定明确的互联网暴露、漏洞严重性以及广泛或可写入的访问。调查结果是局部假设，欺骗建议永远不会自动部署。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6430" />
            <source>Exposure signals</source>
            <translation>曝光信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6430" />
            <source>High-risk assets</source>
            <translation>高风险资产</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6430" />
            <source>Access findings</source>
            <translation>访问调查结果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6430" />
            <source>Broad privileges</source>
            <translation>广泛的特权</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <source>Asset</source>
            <translation>资产</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <source>Risk score</source>
            <translation>风险评分</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <source>Observed factors</source>
            <translation>观察因素</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6435" />
            <source>Subject</source>
            <translation>主题</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6435" />
            <source>Permission field</source>
            <translation>权限字段</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6436" />
            <source>Defensive deception opportunities</source>
            <translation>防御性欺骗机会</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6437" />
            <source>Analyze current exposure and access</source>
            <translation>分析当前的暴露和访问</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6437" />
            <location filename="../zscaler_api_client.py" line="6986" />
            <source>Export masked exposure evidence</source>
            <translation>导出蒙面暴露证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6438" />
            <location filename="../zscaler_api_client.py" line="7004" />
            <location filename="../zscaler_api_client.py" line="7006" />
            <source>Investigation notebook</source>
            <translation>调查笔记本</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6438" />
            <source>Note title</source>
            <translation>注释标题</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6438" />
            <source>Comma-separated tags</source>
            <translation>逗号分隔的标签</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6438" />
            <source>Masked investigation observations, decisions and follow-up</source>
            <translation>隐蔽调查观察、决定和后续行动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6439" />
            <source>Save local note</source>
            <translation>保存本地笔记</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6439" />
            <location filename="../zscaler_api_client.py" line="7011" />
            <source>Export masked notebook</source>
            <translation>导出蒙版笔记本</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6439" />
            <source>Title</source>
            <translation>标题</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6439" />
            <source>Tags</source>
            <translation>标签</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6439" />
            <source>Preview</source>
            <translation>预览</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6440" />
            <source>Exposure &amp; access</source>
            <translation>曝光和访问</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6464" />
            <source>Use guided, locally tracked response and recovery checklists. A completed step records only operator intent in the local audit trail; it never changes a tenant or closes an authoritative incident.</source>
            <translation>使用指导性的、本地跟踪的响应和恢复检查表。完成的步骤仅在本地审计跟踪中记录操作员意图；它永远不会改变租户或结束权威事件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6465" />
            <source>Playbook:</source>
            <translation>剧本：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6466" />
            <source>API/service disruption</source>
            <translation>API/服务中断</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6466" />
            <source>High-risk policy change</source>
            <translation>高风险的政策变化</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6466" />
            <source>Digital experience degradation</source>
            <translation>数字体验退化</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6466" />
            <source>Possible credential exposure</source>
            <translation>可能的凭证暴露</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6466" />
            <source>Ransomware containment support</source>
            <translation>勒索软件遏制支持</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6469" />
            <source>Mark selected step complete</source>
            <translation>将所选步骤标记为完成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6470" />
            <location filename="../zscaler_api_client.py" line="7105" />
            <source>Export masked playbook evidence</source>
            <translation>导出蒙面剧本证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <source>Guidance</source>
            <translation>指导</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <source>Local evidence</source>
            <translation>当地证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6473" />
            <source>Smart API planner (review only)</source>
            <translation>智能 API 规划器（仅供审核）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6474" />
            <source>Describe a goal to rank documented Automation Hub operations deterministically. Read operations are preferred; tenant values are never guessed and nothing runs automatically.</source>
            <translation>描述确定性地对记录的 Automation Hub 操作进行排名的目标。读操作优先；租户值永远不会被猜测，并且不会自动运行任何内容。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6475" />
            <source>Example: investigate slow ZDX application experience</source>
            <translation>示例：调查缓慢的 ZDX 应用程序体验</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6476" />
            <source>Plan documented operations</source>
            <translation>计划记录的操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6477" />
            <source>Copy safe reads to API Chains</source>
            <translation>将安全读取复制到 API 链</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6479" />
            <source>Product</source>
            <translation>产品展示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6479" />
            <source>Operation</source>
            <translation>操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6480" />
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Response playbooks</source>
            <translation>应对手册</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6484" />
            <source>Change owner</source>
            <translation>改变所有者</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6484" />
            <source>Independent reviewer</source>
            <translation>独立评审员</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6484" />
            <source>Owner:</source>
            <translation>业主：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6485" />
            <location filename="../zscaler_api_client.py" line="7154" />
            <source>Maintenance window confirmed</source>
            <translation>维护窗口已确认</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6485" />
            <source>Local simulation reviewed</source>
            <translation>本地模拟审查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6485" />
            <source>Rollback prepared</source>
            <translation>回滚准备就绪</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Gate</source>
            <translation>门</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Required</source>
            <translation>必填</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6493" />
            <location filename="../zscaler_api_client.py" line="7192" />
            <location filename="../zscaler_api_client.py" line="7196" />
            <location filename="../zscaler_api_client.py" line="7197" />
            <source>Verify rollback artifact</source>
            <translation>验证回滚工件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6513" />
            <source>Local baseline:</source>
            <translation>当地基线：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6514" />
            <source>Save assessment baseline</source>
            <translation>保存评估基线</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6515" />
            <location filename="../zscaler_api_client.py" line="7295" />
            <source>Export signed evidence</source>
            <translation>导出签名证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6516" />
            <location filename="../zscaler_api_client.py" line="7302" />
            <source>Verify signed evidence</source>
            <translation>验证签署的证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6518" />
            <location filename="../zscaler_api_client.py" line="7226" />
            <location filename="../zscaler_api_client.py" line="7282" />
            <source>Continuous assurance</source>
            <translation>持续保证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6523" />
            <source>User risk report (current response)</source>
            <translation>User risk report (current response)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6584" />
            <location filename="../zscaler_api_client.py" line="7660" />
            <location filename="../zscaler_api_client.py" line="7664" />
            <location filename="../zscaler_api_client.py" line="7666" />
            <location filename="../zscaler_api_client.py" line="7678" />
            <source>Policy time travel</source>
            <translation>政策时间旅行</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6586" />
            <source>Save snapshot</source>
            <translation>保存快照</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6587" />
            <source>Use as baseline</source>
            <translation>用作基线</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6588" />
            <source>Load snapshot</source>
            <translation>加载快照</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6589" />
            <source>Delete snapshot</source>
            <translation>删除快照</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6591" />
            <location filename="../zscaler_api_client.py" line="7595" />
            <location filename="../zscaler_api_client.py" line="7630" />
            <location filename="../zscaler_api_client.py" line="7655" />
            <source>Policy twin</source>
            <translation>政策双胞胎</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6633" />
            <source>All environments</source>
            <translation>所有环境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6649" />
            <source>Showing local evidence for: {name}</source>
            <translation>Showing local evidence for: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6651" />
            <source>Cross-tenant overview is active. Exports and integrations will include all local environments.</source>
            <translation>跨租户概览处于活动状态。导出和集成将包括所有本地环境。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6657" />
            <location filename="../zscaler_api_client.py" line="7021" />
            <location filename="../zscaler_api_client.py" line="7444" />
            <source>Invalid JSON: </source>
            <translation>无效的 JSON： </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6677" />
            <source>Audit chain is valid</source>
            <translation>审核链有效</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6677" />
            <source>Audit chain needs review</source>
            <translation>审计链需要审查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6683" />
            <source>Success</source>
            <translation>成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6683" />
            <source>Other</source>
            <translation>其他</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6697" />
            <location filename="../zscaler_api_client.py" line="7328" />
            <source>Posture score: {score}/100</source>
            <translation>Posture score: {score}/100</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6699" />
            <location filename="../zscaler_api_client.py" line="6730" />
            <location filename="../zscaler_api_client.py" line="6797" />
            <location filename="../zscaler_api_client.py" line="7256" />
            <location filename="../zscaler_api_client.py" line="7345" />
            <location filename="../zscaler_api_client.py" line="7706" />
            <source>Critical</source>
            <translation>关键</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6699" />
            <location filename="../zscaler_api_client.py" line="6730" />
            <location filename="../zscaler_api_client.py" line="6797" />
            <location filename="../zscaler_api_client.py" line="6861" />
            <location filename="../zscaler_api_client.py" line="7256" />
            <location filename="../zscaler_api_client.py" line="7345" />
            <location filename="../zscaler_api_client.py" line="7612" />
            <location filename="../zscaler_api_client.py" line="7706" />
            <source>High</source>
            <translation>高</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6699" />
            <location filename="../zscaler_api_client.py" line="6730" />
            <location filename="../zscaler_api_client.py" line="6797" />
            <location filename="../zscaler_api_client.py" line="6861" />
            <location filename="../zscaler_api_client.py" line="7256" />
            <location filename="../zscaler_api_client.py" line="7345" />
            <location filename="../zscaler_api_client.py" line="7612" />
            <location filename="../zscaler_api_client.py" line="7706" />
            <source>Medium</source>
            <translation>中等</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6699" />
            <location filename="../zscaler_api_client.py" line="6730" />
            <location filename="../zscaler_api_client.py" line="6797" />
            <location filename="../zscaler_api_client.py" line="7256" />
            <location filename="../zscaler_api_client.py" line="7345" />
            <location filename="../zscaler_api_client.py" line="7612" />
            <location filename="../zscaler_api_client.py" line="7706" />
            <source>Low</source>
            <translation>低</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6699" />
            <location filename="../zscaler_api_client.py" line="6861" />
            <location filename="../zscaler_api_client.py" line="7345" />
            <location filename="../zscaler_api_client.py" line="7612" />
            <location filename="../zscaler_api_client.py" line="7706" />
            <source>Info</source>
            <translation>信息</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6703" />
            <source>Audit integrity needs review</source>
            <translation>审计诚信需要审查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6703" />
            <source>The local audit chain did not verify.</source>
            <translation>当地审计链未核实。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6704" />
            <source>Repeated API failures</source>
            <translation>API 反复失败</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6704" />
            <source>{count} failed requests are in local history.</source>
            <translation>{count} failed requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6705" />
            <source>API failures observed</source>
            <translation>观察到 API 故障</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6705" />
            <source>{count} request(s) need review.</source>
            <translation>{count} request(s) need review.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6706" />
            <source>Change activity burst</source>
            <translation>变革活动爆发</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6706" />
            <source>{count} write requests are in local history.</source>
            <translation>{count} write requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6707" />
            <source>Slow API responses</source>
            <translation>API 响应慢</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6707" />
            <source>{count} request(s) took ten seconds or more.</source>
            <translation>{count} request(s) took ten seconds or more.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6708" />
            <source>No local telemetry yet</source>
            <translation>还没有本地遥测</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6708" />
            <source>Send or import redacted requests to establish a local baseline.</source>
            <translation>发送或导入经过编辑的请求以建立本地基线。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6729" />
            <source>{count} local alert(s) · error threshold: {threshold}</source>
            <translation>{count} local alert(s) · error threshold: {threshold}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6735" />
            <source>The local audit chain needs review.</source>
            <translation>当地审计链需要审查。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6736" />
            <source>Local failed requests reached the configured threshold.</source>
            <translation>本地失败请求达到配置的阈值。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6737" />
            <source>API rate limiting was observed in local history.</source>
            <translation>当地历史上曾观察到 API 速率限制。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6738" />
            <source>A response reported no remaining API rate-limit capacity.</source>
            <translation>响应报告没有剩余的 API 速率限制容量。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6739" />
            <source>The latest request failed after successful requests to the same endpoint.</source>
            <translation>向同一端点成功请求后，最新请求失败。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6740" />
            <source>The latest endpoint response was much slower than its local baseline.</source>
            <translation>最新的端点响应比其本地基线慢得多。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6741" />
            <source>Three or more local requests took ten seconds or more.</source>
            <translation>三个或更多本地请求需要十秒或更长时间。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6759" />
            <source>Local alert summary</source>
            <translation>本地警报摘要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6759" />
            <source>Error threshold: {threshold}</source>
            <translation>Error threshold: {threshold}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6759" />
            <location filename="../zscaler_api_client.py" line="7328" />
            <location filename="../zscaler_api_client.py" line="7868" />
            <location filename="../zscaler_api_client.py" line="7929" />
            <source>Data scope: {name}</source>
            <translation>Data scope: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6761" />
            <source>No local alerts.</source>
            <translation>没有本地警报。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6763" />
            <source>Count: {count}</source>
            <translation>Count: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6768" />
            <source>Export local alerts</source>
            <translation>导出本地警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6797" />
            <source>Normal</source>
            <translation>正常</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6802" />
            <source>Observed relationship chain across local evidence; validate before treating it as an exploitable attack path.</source>
            <translation>观察到的跨本地证据的关系链；在将其视为可利用的攻击路径之前进行验证。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6808" />
            <source>Endpoint failure evidence</source>
            <translation>端点故障证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6808" />
            <source>Relationship concentration</source>
            <translation>关系集中度</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6808" />
            <source>Security indicator observed</source>
            <translation>观察到的安全指标</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6810" />
            <source>The endpoint has locally retained server or network failure evidence.</source>
            <translation>端点本地保留有服务器或网络故障证据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6811" />
            <source>The entity is connected to an unusually broad set of locally observed relationships.</source>
            <translation>该实体与一组异常广泛的本地观察到的关系相关联。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6812" />
            <source>A threat, exposure, vulnerability, or indicator-like object was present in the response.</source>
            <translation>响应中存在威胁、暴露、漏洞或类似指标的对象。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6821" />
            <source>The graph reached its local safety limit; use the filter or export the evidence for complete review.</source>
            <translation>该图达到了其局部安全极限；使用过滤器或导出证据以进行完整审查。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6823" />
            <source>No correlatable entities are available in the selected local scope.</source>
            <translation>所选本地范围内没有可用的关联实体。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6845" />
            <source>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</source>
            <translation>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6864" />
            <source>Request</source>
            <translation>请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6864" />
            <source>Audit</source>
            <translation>审计</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6870" />
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
            <location filename="../zscaler_api_client.py" line="6871" />
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
            <location filename="../zscaler_api_client.py" line="6872" />
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
            <location filename="../zscaler_api_client.py" line="6921" />
            <source>{value:g} ms</source>
            <translation>{value:g} ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6927" />
            <source>User</source>
            <translation>用户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6927" />
            <source>Device</source>
            <translation>设备</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6927" />
            <source>Network</source>
            <translation>网络</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6927" />
            <source>Service edge</source>
            <translation>服务优势</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6927" />
            <source>Application</source>
            <translation>应用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6931" />
            <source>Device score</source>
            <translation>设备得分</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6931" />
            <source>Application score</source>
            <translation>申请分数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6931" />
            <source>Service-edge score</source>
            <translation>服务优势得分</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6931" />
            <source>Jitter</source>
            <translation>抖动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6931" />
            <source>DNS time</source>
            <translation>DNS时间</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6931" />
            <source>TCP connect time</source>
            <translation>TCP 连接时间</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6931" />
            <source>Page fetch time</source>
            <translation>页面获取时间</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6931" />
            <source>Availability</source>
            <translation>可用性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6931" />
            <source>CPU</source>
            <translation>中央处理器</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6931" />
            <source>Memory</source>
            <translation>内存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6935" />
            <source>Overall experience score is below 70</source>
            <translation>总体体验分数低于70</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6935" />
            <source>Device score is below 70</source>
            <translation>设备分数低于 70</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6935" />
            <source>Application score is below 70</source>
            <translation>申请分数低于70分</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6935" />
            <source>Service-edge score is below 70</source>
            <translation>服务优势得分低于 70</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6935" />
            <source>Observed latency exceeds 250 ms</source>
            <translation>观察到的延迟超过 250 毫秒</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6935" />
            <source>Observed packet loss exceeds 2%</source>
            <translation>观察到丢包率超过 2%</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6935" />
            <source>Observed jitter exceeds 40 ms</source>
            <translation>观察到的抖动超过 40 毫秒</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6935" />
            <source>Observed availability is below 99%</source>
            <translation>观察到的可用性低于 99%</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6941" />
            <source>Schema-tolerant local interpretation of observed API fields. Thresholds are transparent operational hints, not Zscaler health verdicts or SLA determinations.</source>
            <translation>观察到的 API 字段的模式容忍本地解释。阈值是透明的操作提示，而不是 Zscaler 运行状况判定或 SLA 确定。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6942" />
            <source>No current API or GraphQL response is available. Run or import a ZDX/OneAPI query, then analyze again.</source>
            <translation>当前没有可用的 API 或 GraphQL 响应。运行或导入 ZDX/OneAPI 查询，然后再次分析。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6942" />
            <source>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</source>
            <translation>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6976" />
            <source>Explicit broad or write-capable access observed; validate least privilege and assignment context.</source>
            <translation>观察到显式的广泛访问或可写访问；验证最小权限和分配上下文。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6981" />
            <source>Consider a monitored decoy resource near exposed paths</source>
            <translation>考虑暴露路径附近受监控的诱饵资源</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6981" />
            <source>Consider a non-production canary permission for privileged-path monitoring</source>
            <translation>考虑使用非生产金丝雀权限进行特权路径监控</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6981" />
            <source>Maintain an exposure and least-privilege baseline</source>
            <translation>维持曝光和最低权限基线</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7004" />
            <source>Select one environment before saving an investigation note.</source>
            <translation>在保存调查记录之前选择一个环境。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Rule is valid and can be evaluated locally.</source>
            <translation>规则有效并且可以在本地进行评估。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Rule validation failed: {errors}</source>
            <translation>Rule validation failed: {errors}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7042" />
            <source>Matched events where {mode} of {conditions} declarative condition(s) were true.</source>
            <translation>Matched events where {mode} of {conditions} declarative condition(s) were true.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7043" />
            <source>Examined {examined} local event(s); {matched} matched. {explanation}</source>
            <translation>Examined {examined} local event(s); {matched} matched. {explanation}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Endpoint {number} current</source>
            <translation>Endpoint {number} current</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Endpoint {number} threshold</source>
            <translation>Endpoint {number} threshold</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Median absolute deviation (MAD), scaled by 1.4826 with a 10%/10 ms noise floor</source>
            <translation>中值绝对偏差 (MAD)，按 1.4826 缩放，本底噪声为 10%/10 ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</source>
            <translation>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7078" />
            <source>Confirm scope from retained failures</source>
            <translation>确认保留故障的范围</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7078" />
            <source>Check rate-limit and service-health evidence</source>
            <translation>检查速率限制和服务健康证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7078" />
            <source>Collect read-only product status</source>
            <translation>收集只读产品状态</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7078" />
            <source>Correlate affected entities</source>
            <translation>关联受影响的实体</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7078" />
            <source>Export masked incident evidence</source>
            <translation>导出蒙面事件证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7078" />
            <source>Record closure decision</source>
            <translation>记录关闭决定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7079" />
            <source>Capture current policy baseline</source>
            <translation>捕捉当前政策基线</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7079" />
            <source>Run policy diff and best-practice checks</source>
            <translation>运行策略差异和最佳实践检查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7079" />
            <source>Run Policy Twin and decision simulation</source>
            <translation>运行策略孪生和决策模拟</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7079" />
            <source>Prepare rollback artifact</source>
            <translation>准备回滚工件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7079" />
            <source>Record independent review</source>
            <translation>记录独立审查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7079" />
            <source>Export change package</source>
            <translation>导出变更包</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7080" />
            <source>Identify affected user and application scope</source>
            <translation>确定受影响的用户和应用范围</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7080" />
            <source>Inspect device metrics</source>
            <translation>检查设备指标</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7080" />
            <source>Inspect network latency, loss and jitter</source>
            <translation>检查网络延迟、丢失和抖动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7080" />
            <source>Inspect service-edge path</source>
            <translation>检查服务边缘路径</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7080" />
            <source>Compare application response</source>
            <translation>比较应用程序响应</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7080" />
            <source>Export masked journey evidence</source>
            <translation>导出蒙面旅程证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7081" />
            <source>Stop copying or exporting raw material</source>
            <translation>停止复制或出口原材料</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7081" />
            <source>Rotate the affected credential outside this client</source>
            <translation>将受影响的凭证轮换到该客户端之外</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7081" />
            <source>Clear in-memory sessions</source>
            <translation>清除内存中的会话</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7081" />
            <source>Review masked audit evidence</source>
            <translation>审查隐藏的审计证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7081" />
            <source>Validate least-privilege access</source>
            <translation>验证最低权限访问</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7081" />
            <source>Record containment and recovery</source>
            <translation>记录遏制和恢复</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7082" />
            <source>Validate the alert in authoritative security tooling</source>
            <translation>在权威安全工具中验证警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7082" />
            <source>Identify users, devices and applications</source>
            <translation>识别用户、设备和应用程序</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7082" />
            <source>Preserve masked evidence</source>
            <translation>保留蒙面证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7082" />
            <source>Prepare containment changes for independent approval</source>
            <translation>准备遏制变更以供独立批准</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7082" />
            <source>Track recovery prerequisites</source>
            <translation>跟踪恢复先决条件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7082" />
            <source>Record lessons learned</source>
            <translation>记录经验教训</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7085" />
            <source>Complete</source>
            <translation>完成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7085" />
            <source>Pending</source>
            <translation>待定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7086" />
            <source>Recorded in local audit trail</source>
            <translation>记录在本地审计追踪中</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7086" />
            <source>No completion evidence</source>
            <translation>没有完成证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Select a playbook step first.</source>
            <translation>首先选择一个剧本步骤。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7101" />
            <source>Mark step complete</source>
            <translation>将步骤标记为完成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7101" />
            <source>Record this step as completed in the local audit trail? This does not perform the action or update an authoritative incident.</source>
            <translation>在本地审计跟踪中记录此步骤是否已完成？这不会执行操作或更新权威事件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7112" />
            <source>Describe an administrative or investigation goal first.</source>
            <translation>首先描述行政或调查目标。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7121" />
            <source>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</source>
            <translation>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7127" />
            <source>Smart API planner</source>
            <translation>智能API规划器</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7127" />
            <source>Create a plan with at least one read operation first.</source>
            <translation>首先创建一个至少包含一个读取操作的计划。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7129" />
            <source>Planner output copied for review. Validate the chain, supply required path values, and approve it separately before execution.</source>
            <translation>复制规划器输出以供审核。验证链，提供所需的路径值，并在执行前单独批准。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7149" />
            <source>Review policy diff</source>
            <translation>审查政策差异</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7149" />
            <source>Run local simulation</source>
            <translation>运行本地模拟</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7149" />
            <source>Record reviewer approval</source>
            <translation>记录审阅者批准</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7149" />
            <source>Export Git/Terraform review</source>
            <translation>导出 Git/Terraform 审核</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7149" />
            <source>Apply outside this client only after approval</source>
            <translation>经批准后方可在本客户之外申请</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7151" />
            <source>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</source>
            <translation>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7154" />
            <source>Change reference recorded</source>
            <translation>更改参考记录</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7154" />
            <source>Change owner recorded</source>
            <translation>更改所有者已记录</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7154" />
            <source>Independent reviewer recorded</source>
            <translation>独立评审员记录</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7154" />
            <source>Local policy simulation reviewed</source>
            <translation>审查地方政策模拟</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7154" />
            <source>Rollback artifact prepared</source>
            <translation>回滚工件已准备好</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7154" />
            <source>Local approval recorded</source>
            <translation>当地批准记录</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7156" />
            <source>Yes</source>
            <translation>是的</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7156" />
            <source>No</source>
            <translation>否</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7156" />
            <source>Blocked</source>
            <translation>被阻止</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7156" />
            <source>Optional</source>
            <translation>可选</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7170" />
            <source>Enter a reviewer before recording approval.</source>
            <translation>在记录批准之前输入审阅者。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7172" />
            <source>Local approval recorded. External apply remains disabled.</source>
            <translation>当地批准记录。外部应用保持禁用状态。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7196" />
            <source>Rollback artifact integrity verified. This does not authorize applying it.</source>
            <translation>已验证回滚工件完整性。这并不授权应用它。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7197" />
            <source>Rollback verification failed: {reason}</source>
            <translation>Rollback verification failed: {reason}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7207" />
            <source>No comparison baseline</source>
            <translation>无比较基线</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7212" />
            <source>{time} · score {score}/100</source>
            <translation>{time} · score {score}/100</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7235" />
            <source>Audit evidence integrity</source>
            <translation>审计证据完整性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7235" />
            <source>Review and restore the local hash-linked audit trail.</source>
            <translation>查看并恢复本地哈希链接的审计跟踪。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7236" />
            <source>Operational evidence available</source>
            <translation>可用的操作证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7236" />
            <source>Collect or import masked read-only evidence for the selected environment.</source>
            <translation>收集或导入所选环境的屏蔽只读证据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7237" />
            <source>API health and anomaly monitoring</source>
            <translation>API健康和异常监控</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7237" />
            <source>Investigate repeated failures, latency regressions, and rate limiting.</source>
            <translation>研究重复失败、延迟回归和速率限制。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7238" />
            <source>Least-privilege policy baseline</source>
            <translation>最小特权策略基线</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7238" />
            <source>Constrain unconditional allow rules and validate order in Policy Twin.</source>
            <translation>约束无条件允许规则并验证策略孪生中的顺序。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7239" />
            <source>Reviewed write activity</source>
            <translation>审查写入活动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7239" />
            <source>Require a recorded review and rollback artifact for write activity.</source>
            <translation>需要记录写入活动的审查和回滚工件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7240" />
            <source>Incident evidence readiness</source>
            <translation>事件证据准备就绪</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7240" />
            <source>Prepare and export masked investigation evidence for unresolved failures.</source>
            <translation>为未解决的故障准备并导出隐蔽的调查证据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7241" />
            <source>Recovery evidence available</source>
            <translation>可用的恢复证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7241" />
            <source>Save a policy snapshot or reviewed rollback artifact before change.</source>
            <translation>在更改之前保存策略快照或审查的回滚工件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7255" />
            <source>Pass</source>
            <translation>通行证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7255" />
            <source>Fail</source>
            <translation>失败</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7268" />
            <location filename="../zscaler_api_client.py" line="7330" />
            <location filename="../zscaler_api_client.py" line="7388" />
            <source>Local assurance requires attention</source>
            <translation>地方保障需要关注</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7268" />
            <location filename="../zscaler_api_client.py" line="7330" />
            <location filename="../zscaler_api_client.py" line="7388" />
            <source>No failing controls in the evaluated local scope</source>
            <translation>在评估的局部范围内没有失败的控制</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7269" />
            <location filename="../zscaler_api_client.py" line="7331" />
            <location filename="../zscaler_api_client.py" line="7389" />
            <source>{passed} evaluated control(s) passed and {failed} failed.</source>
            <translation>{passed} evaluated control(s) passed and {failed} failed.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7269" />
            <location filename="../zscaler_api_client.py" line="7389" />
            <source>Evidence coverage is {coverage}% and local posture is {posture}/100.</source>
            <translation>Evidence coverage is {coverage}% and local posture is {posture}/100.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7270" />
            <location filename="../zscaler_api_client.py" line="7390" />
            <source>The assurance score changed by {delta:+d} points versus the selected baseline.</source>
            <translation>The assurance score changed by {delta:+d} points versus the selected baseline.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7271" />
            <source>Prioritized actions</source>
            <translation>优先行动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7274" />
            <source>Local evidence limitation: validate results against authoritative tenant and governance records.</source>
            <translation>本地证据限制：根据权威租户和治理记录验证结果。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7278" />
            <source>Now</source>
            <translation>现在</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7279" />
            <source>Assessment {identifier} · {frameworks} · local evidence only, not certification.</source>
            <translation>Assessment {identifier} · {frameworks} · local evidence only, not certification.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7282" />
            <source>Select one environment before saving an assurance baseline.</source>
            <translation>在保存保障基线之前选择一个环境。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7292" />
            <location filename="../zscaler_api_client.py" line="7294" />
            <location filename="../zscaler_api_client.py" line="7311" />
            <location filename="../zscaler_api_client.py" line="7313" />
            <source>Signed evidence</source>
            <translation>签名证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7292" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>系统钥匙串无法存储证据签名密钥。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7294" />
            <source>The protected evidence signing key is invalid. Rotate it in Settings before signing.</source>
            <translation>受保护的证据签名密钥无效。签名前在“设置”中旋转它。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7298" />
            <source>Signed evidence exported · public-key fingerprint {fingerprint}</source>
            <translation>Signed evidence exported · public-key fingerprint {fingerprint}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7310" />
            <source>Signature verified. Payload digest {digest}; public-key fingerprint {fingerprint}.</source>
            <translation>Signature verified. Payload digest {digest}; public-key fingerprint {fingerprint}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7313" />
            <source>Signature verification failed: {reason}</source>
            <translation>Signature verification failed: {reason}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7327" />
            <source>User risk report</source>
            <translation>User risk report</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7328" />
            <source>Assurance score: {score}/100 · evidence coverage {coverage}%</source>
            <translation>Assurance score: {score}/100 · evidence coverage {coverage}%</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7330" />
            <source>Executive assurance narrative</source>
            <translation>行政保证叙述</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7336" />
            <source>User risk evidence</source>
            <translation>User risk evidence</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7336" />
            <source>Observed users: {count}; explicit risk signals: {signals}.</source>
            <translation>Observed users: {count}; explicit risk signals: {signals}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7336" />
            <source>Only explicit fields in the current response are reported; identity alone is never treated as risk.</source>
            <translation>Only explicit fields in the current response are reported; identity alone is never treated as risk.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7337" />
            <source>No user records with explicit risk evidence were found in the current response.</source>
            <translation>No user records with explicit risk evidence were found in the current response.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7353" />
            <source>Report detail</source>
            <translation>Report detail</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7354" />
            <source>Local evidence behind the selected report metric. It is not a tenant-wide assessment.</source>
            <translation>Local evidence behind the selected report metric. It is not a tenant-wide assessment.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7356" />
            <source>Close</source>
            <translation>Close</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7370" />
            <source>Posture score</source>
            <translation>姿势评分</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7371" />
            <source>Local requests</source>
            <translation>本地请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7372" />
            <source>Failed requests</source>
            <translation>失败的请求</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7501" />
            <source>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</source>
            <translation>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7507" />
            <source>Cancellation requested; the current HTTP request will finish and no new chain step will start.</source>
            <translation>要求取消；当前的 HTTP 请求将完成，并且不会启动新的链步骤。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7040" />
            <location filename="../zscaler_api_client.py" line="7531" />
            <source>{duration} ms</source>
            <translation>{duration} ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7548" />
            <source>The chain was cancelled before all steps started; completed results were retained.</source>
            <translation>在所有步骤开始之前，链条被取消；已完成的结果被保留。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7555" />
            <source>Run a chain before exporting its masked results.</source>
            <translation>在导出其屏蔽结果之前运行一条链。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7579" />
            <source>No baseline (analyze current policy only)</source>
            <translation>无基线（仅分析当前政策）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7605" />
            <source>Unconditional allow</source>
            <translation>无条件允许</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7605" />
            <source>Shadowed conflict</source>
            <translation>隐蔽的冲突</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7605" />
            <source>Redundant shadow</source>
            <translation>冗余阴影</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7605" />
            <source>Overlapping actions</source>
            <translation>重叠动作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7605" />
            <source>Duplicate rule name</source>
            <translation>规则名称重复</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7607" />
            <source>An unconditional allow rule can expose every later matching scope.</source>
            <translation>无条件允许规则可以公开以后的每个匹配范围。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7608" />
            <source>The later rule can never decide because an earlier rule covers all of its matches.</source>
            <translation>后面的规则永远无法做出决定，因为前面的规则涵盖了它的所有匹配项。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7609" />
            <source>The rules can match the same context but have different actions; order decides the outcome.</source>
            <translation>规则可以匹配相同的上下文但有不同的动作；顺序决定结果。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7610" />
            <source>Duplicate rule names make reviews, evidence, and rollback ambiguous.</source>
            <translation>重复的规则名称会使审查、证据和回滚变得不明确。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7619" />
            <source>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</source>
            <translation>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7626" />
            <source>Request context must be a JSON object.</source>
            <translation>请求上下文必须是 JSON 对象。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7632" />
            <source>Decision: {action}. Rule “{name}” matched after evaluating {count} rule(s).</source>
            <translation>Decision: {action}. Rule “{name}” matched after evaluating {count} rule(s).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7634" />
            <source>Decision: no match after evaluating {count} rule(s).</source>
            <translation>Decision: no match after evaluating {count} rule(s).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7660" />
            <source>Select one environment before saving a policy snapshot.</source>
            <translation>在保存策略快照之前选择一个环境。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7666" />
            <source>Policy snapshots are limited to 2 MB.</source>
            <translation>策略快照限制为 2 MB。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7667" />
            <source>Save policy snapshot</source>
            <translation>保存策略快照</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7667" />
            <source>Snapshot name:</source>
            <translation>快照名称：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7678" />
            <source>Select a saved policy snapshot first.</source>
            <translation>首先选择已保存的策略快照。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7684" />
            <source>Delete policy snapshot</source>
            <translation>删除策略快照</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7684" />
            <source>Delete the selected local policy snapshot?</source>
            <translation>删除选定的本地策略快照？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7755" />
            <source>Local automation must be an existing absolute path to a non-symlinked .py file no larger than 1 MiB.</source>
            <translation>本地自动化必须是不大于 1 MiB 的非符号链接 .py 文件的现有绝对路径。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7758" />
            <location filename="../zscaler_api_client.py" line="7922" />
            <source>Webhook endpoints must use HTTPS (or local HTTP) and must not contain credentials in the URL.</source>
            <translation>Webhook 端点必须使用 HTTPS（或本地 HTTP），并且 URL 中不得包含凭据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7762" />
            <source>Secure storage</source>
            <translation>安全存储</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7762" />
            <source>The system keychain could not save the webhook endpoint. Check the keychain service and try again.</source>
            <translation>系统钥匙串无法保存 Webhook 端点。检查钥匙串服务并重试。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7778" />
            <source>Connectivity test</source>
            <translation>连通性测试</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7778" />
            <source>Alert snapshot</source>
            <translation>警报快照</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7779" />
            <source>Started</source>
            <translation>开始</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7539" />
            <location filename="../zscaler_api_client.py" line="7779" />
            <source>Succeeded</source>
            <translation>成功了</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6551" />
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</source>
            <translation>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>A JSON list of API requests. Relative paths use the active product host; references can use only completed step IDs.</source>
            <translation>API 请求的 JSON 列表。相对路径使用活动产品主机；参考只能使用已完成的步骤 ID。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <location filename="../zscaler_api_client.py" line="6557" />
            <source>Step</source>
            <translation>步骤</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6456" />
            <location filename="../zscaler_api_client.py" line="6479" />
            <location filename="../zscaler_api_client.py" line="6557" />
            <source>Method</source>
            <translation>方法</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6557" />
            <source>Records</source>
            <translation>记录</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6456" />
            <location filename="../zscaler_api_client.py" line="6557" />
            <source>Duration</source>
            <translation>持续时间</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6503" />
            <location filename="../zscaler_api_client.py" line="7539" />
            <location filename="../zscaler_api_client.py" line="7779" />
            <source>Failed</source>
            <translation>失败</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7812" />
            <source>All files (*)</source>
            <translation>所有文件 (*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7815" />
            <source>Exported {count} masked local event(s) as {format}. No data was sent automatically.</source>
            <translation>Exported {count} masked local event(s) as {format}. No data was sent automatically.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7831" />
            <source>Created a non-executable Terraform review handoff. Run terraformer and terraform plan only after independent review; this client never applies it.</source>
            <translation>创建了不可执行的 Terraform 审核交接。仅在独立审查后运行 terraformer 和 terraform plan；该客户从未应用它。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7857" />
            <location filename="../zscaler_api_client.py" line="7860" />
            <location filename="../zscaler_api_client.py" line="7862" />
            <location filename="../zscaler_api_client.py" line="7867" />
            <location filename="../zscaler_api_client.py" line="7896" />
            <location filename="../zscaler_api_client.py" line="7906" />
            <location filename="../zscaler_api_client.py" line="7911" />
            <source>Local automation</source>
            <translation>本地自动化</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7857" />
            <source>Read-only mode blocks local automation.</source>
            <translation>只读模式会阻止本地自动化。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7860" />
            <source>Configure a valid local Python automation in Governance first.</source>
            <translation>首先在治理中配置有效的本地 Python 自动化。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7862" />
            <source>Local automation is already running.</source>
            <translation>本地自动化已经运行。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7868" />
            <source>Run the reviewed Python file with masked local posture and alert data? The process receives no API credentials.</source>
            <translation>使用屏蔽的本地状态和警报数据运行经过审查的 Python 文件？该进程不接收任何 API 凭据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7896" />
            <source>Local automation exceeded the 15-second limit and was stopped.</source>
            <translation>本地自动化超过 15 秒限制并被停止。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7906" />
            <source>Local automation completed with exit code {code}.</source>
            <translation>Local automation completed with exit code {code}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7911" />
            <source>Local automation failed to start.</source>
            <translation>本地自动化无法启动。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7917" />
            <source>Send the current masked local alert snapshot to the configured webhook endpoint?</source>
            <translation>将当前屏蔽的本地警报快照发送到配置的 Webhook 端点？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7923" />
            <location filename="../zscaler_api_client.py" line="7925" />
            <location filename="../zscaler_api_client.py" line="7929" />
            <location filename="../zscaler_api_client.py" line="7949" />
            <location filename="../zscaler_api_client.py" line="7956" />
            <source>Webhook delivery</source>
            <translation>Webhook 交付</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7925" />
            <source>A webhook delivery is already running.</source>
            <translation>Webhook 传送已在运行。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7949" />
            <source>Masked webhook delivery succeeded (HTTP {status}).</source>
            <translation>Masked webhook delivery succeeded (HTTP {status}).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7956" />
            <source>Masked webhook delivery failed: {error}</source>
            <translation>Masked webhook delivery failed: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7985" />
            <source>Background</source>
            <translation>背景</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7985" />
            <source>App only</source>
            <translation>仅限应用程序</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7986" />
            <source>Paused</source>
            <translation>已暂停</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7998" />
            <source>Select a scheduled report first.</source>
            <translation>首先选择一个预定的报告。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8016" />
            <source>The scheduled report was generated locally.</source>
            <translation>预定的报告是在本地生成的。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8018" />
            <source>The scheduled report could not be generated. Check its output folder and the audit trail.</source>
            <translation>无法生成计划的报告。检查其输出文件夹和审计跟踪。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8032" />
            <source>The operating-system schedule could not be updated. No state was changed.</source>
            <translation>无法更新操作系统计划。状态没有改变。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8048" />
            <source>The report is paused and cannot generate output, but the operating-system job cleanup needs manual review.</source>
            <translation>报告已暂停，无法生成输出，但操作系统作业清理需要手动审核。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8054" />
            <source>Remove the selected scheduled report?</source>
            <translation>删除选定的预定报告？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8067" />
            <source>The report was removed, but the operating-system job could not be removed. It can no longer generate a report because its schedule ID is no longer active.</source>
            <translation>该报告已删除，但无法删除操作系统作业。它无法再生成报告，因为其计划 ID 不再处于活动状态。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8070" />
            <source>Report name:</source>
            <translation>报告名称：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8083" />
            <source>Run this report even when ZS API Client is closed? This creates a user-level operating-system schedule and requires no administrator privileges.</source>
            <translation>即使 ZS API 客户端关闭也运行此报告吗？这将创建用户级操作系统计划，并且不需要管理员权限。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8097" />
            <source>The operating-system schedule could not be created. The report was not scheduled.</source>
            <translation>无法创建操作系统计划。该报告未安排。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8105" />
            <source>Scheduled report saved. It will run in the background even when the application is closed.</source>
            <translation>已保存预定报告。即使应用程序关闭，它也会在后台运行。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8105" />
            <source>Scheduled report saved. It will run locally while the application is open.</source>
            <translation>已保存预定报告。当应用程序打开时，它将在本地运行。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7970" />
            <location filename="../zscaler_api_client.py" line="8073" />
            <source>Hourly</source>
            <translation>每小时</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7970" />
            <location filename="../zscaler_api_client.py" line="8073" />
            <source>Daily</source>
            <translation>每日</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7970" />
            <location filename="../zscaler_api_client.py" line="8073" />
            <source>Weekly</source>
            <translation>每周</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8074" />
            <source>Report cadence:</source>
            <translation>报告节奏：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8077" />
            <source>Choose report output folder</source>
            <translation>选择报告输出文件夹</translation>
        </message>
        <message>
            <source>Scheduled report saved. Reports run locally while the application is open.</source>
            <translation type="vanished">已保存预定报告。当应用程序打开时，报告在本地运行。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6759" />
            <location filename="../zscaler_api_client.py" line="7328" />
            <source>Local requests: {count}</source>
            <translation>Local requests: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6759" />
            <location filename="../zscaler_api_client.py" line="7328" />
            <source>Failed requests: {count}</source>
            <translation>Failed requests: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7328" />
            <source>Audit integrity: {status}</source>
            <translation>Audit integrity: {status}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7328" />
            <location filename="../zscaler_api_client.py" line="7373" />
            <source>Valid</source>
            <translation>有效</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7328" />
            <location filename="../zscaler_api_client.py" line="7373" />
            <source>Needs review</source>
            <translation>需要审查</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7328" />
            <source>Incident signals</source>
            <translation>事故信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7332" />
            <source>Executive actions</source>
            <translation>行政行动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7332" />
            <source>Review high-risk findings and approval records.</source>
            <translation>审查高风险结果和批准记录。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7332" />
            <source>Use the Security Posture and Change Control workspaces for evidence.</source>
            <translation>使用安全态势和变更控制工作区作为证据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7334" />
            <source>SOC next steps</source>
            <translation>SOC 后续步骤</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7334" />
            <source>Use Incident Investigation to prepare a review chain.</source>
            <translation>使用事件调查来准备审查链。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7334" />
            <source>Export masked evidence before escalation.</source>
            <translation>在升级之前导出隐藏的证据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7339" />
            <source>Operations next steps</source>
            <translation>后续操作步骤</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7339" />
            <source>Review slow responses and API failures.</source>
            <translation>查看缓慢的响应和 API 故障。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7339" />
            <source>Confirm rate limits and service health with read-only queries.</source>
            <translation>通过只读查询确认速率限制和服务运行状况。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7448" />
            <source>Configure a host for the active product before running a chain.</source>
            <translation>在运行链之前为活动产品配置主机。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7458" />
            <source>Each chain step must stay on the active product host.</source>
            <translation>每个链步骤必须保留在活动产品主机上。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7474" />
            <source>Fix the chain validation errors before running it.</source>
            <translation>在运行之前修复链验证错误。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7478" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>只读模式阻止写入请求。更改操作中心中的本地角色以继续。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7480" />
            <source>Authenticate the active product before running a chain.</source>
            <translation>在运行链之前验证活动产品。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7481" />
            <source>Run {count} API step(s) sequentially against the active environment?</source>
            <translation>Run {count} API step(s) sequentially against the active environment?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7483" />
            <source>The chain contains write operations; review and approve before continuing.</source>
            <translation>该链包含写操作；在继续之前进行审查并批准。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7498" />
            <source>Running API chain step {completed} of {total}...</source>
            <translation>Running API chain step {completed} of {total}...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7546" />
            <source>API chain completed: {successful} succeeded, {failed} failed.</source>
            <translation>API chain completed: {successful} succeeded, {failed} failed.</translation>
        </message>
        <message>
            <source>Metrics are local and contain no credentials.</source>
            <translation type="vanished">指标是本地的并且不包含凭据。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7718" />
            <source>Policy export</source>
            <translation>政策输出</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7719" />
            <source>Export policy</source>
            <translation>出口政策</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7728" />
            <source>Compliance</source>
            <translation>合规性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7752" />
            <source>Alert threshold must be a positive integer.</source>
            <translation>警报阈值必须是正整数。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7766" />
            <source>Governance settings saved.</source>
            <translation>已保存治理设置。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7770" />
            <source>Use OneAPI or legacy clients locally</source>
            <translation>在本地使用 OneAPI 或旧客户端</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7770" />
            <source>AI-assisted, tool-scoped exploration</source>
            <translation>人工智能辅助的工具范围探索</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7770" />
            <source>Export existing ZIA/ZPA configuration to Terraform</source>
            <translation>将现有 ZIA/ZPA 配置导出到 Terraform</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7773" />
            <source>Available</source>
            <translation>可用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7773" />
            <source>Not installed</source>
            <translation>未安装</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7805" />
            <source>Prepare an integration first.</source>
            <translation>首先准备集成。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6753" />
            <location filename="../zscaler_api_client.py" line="7808" />
            <source>Copied to clipboard</source>
            <translation>已复制到剪贴板</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7550" />
            <source>The chain stopped after the first failed step.</source>
            <translation>链条在第一个失败的步骤后停止了。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7702" />
            <location filename="../zscaler_api_client.py" line="7986" />
            <source>Enabled</source>
            <translation>启用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7702" />
            <source>Disabled</source>
            <translation>残疾人</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7708" />
            <source>Allow rule has no conditions</source>
            <translation>允许规则没有条件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7708" />
            <source>Rule is disabled</source>
            <translation>规则已禁用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7709" />
            <source>Rule name is duplicated</source>
            <translation>规则名称重复</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7709" />
            <source>Rule action is unspecified</source>
            <translation>规则操作未指定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7738" />
            <source>Rules evaluated</source>
            <translation>评估规则</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7738" />
            <source>Matched rule</source>
            <translation>匹配规则</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7741" />
            <source>Matched</source>
            <translation>匹配的</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7741" />
            <source>Not matched</source>
            <translation>不匹配</translation>
        </message>
        <message>
            <source>Webhook test</source>
            <translation type="vanished">Webhook测试</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7922" />
            <source>Configure a webhook endpoint in Governance first.</source>
            <translation>首先在治理中配置 Webhook 端点。</translation>
        </message>
        <message>
            <source>Webhook endpoints must use HTTPS unless they are local.</source>
            <translation type="vanished">Webhook 端点必须使用 HTTPS，除非它们是本地的。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7914" />
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
            <location filename="../zscaler_api_client.py" line="7998" />
            <location filename="../zscaler_api_client.py" line="8016" />
            <location filename="../zscaler_api_client.py" line="8018" />
            <location filename="../zscaler_api_client.py" line="8032" />
            <location filename="../zscaler_api_client.py" line="8048" />
            <location filename="../zscaler_api_client.py" line="8054" />
            <location filename="../zscaler_api_client.py" line="8067" />
            <location filename="../zscaler_api_client.py" line="8070" />
            <location filename="../zscaler_api_client.py" line="8074" />
            <location filename="../zscaler_api_client.py" line="8083" />
            <location filename="../zscaler_api_client.py" line="8097" />
            <location filename="../zscaler_api_client.py" line="8106" />
            <source>Scheduled report</source>
            <translation>预定报告</translation>
        </message>
        <message>
            <source>Report name and cadence:</source>
            <translation type="vanished">报告名称和节奏：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8109" />
            <source>Save support bundle</source>
            <translation>保存支持包</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8114" />
            <source>Support bundle</source>
            <translation>支持包</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8114" />
            <source>A redacted support bundle was created.</source>
            <translation>创建了经过编辑的支持包。</translation>
        </message>
    </context>
    <context>
        <name>PacWorkspaceDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="8181" />
            <location filename="../zscaler_api_client.py" line="8506" />
            <source>PAC Workspace</source>
            <translation>PAC工作区</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8185" />
            <source>Create and verify PAC files locally. API operations are prepared in the request editor and are never sent or deployed automatically.</source>
            <translation>在本地创建并验证 PAC 文件。 API 操作是在请求编辑器中准备的，并且永远不会自动发送或部署。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8190" />
            <source>PAC experience:</source>
            <translation>公共政策委员会经验：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8192" />
            <source>Guided (recommended)</source>
            <translation>引导（推荐）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8193" />
            <source>Advanced</source>
            <translation>高级</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8210" />
            <source>PAC name:</source>
            <translation>政治行动委员会名称：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8211" />
            <source>Change note:</source>
            <translation>更改说明：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8212" />
            <source>Hosted PAC URL (optional for ZCC):</source>
            <translation>托管 PAC URL（ZCC 可选）：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8213" />
            <source>Existing ZIA PAC ID (for lifecycle actions):</source>
            <translation>现有 ZIA PAC ID（用于生命周期操作）：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8214" />
            <source>ZIA PAC version:</source>
            <translation>ZIA PAC 版本：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8215" />
            <source>ZIA version action:</source>
            <translation>ZIA版本动作：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8222" />
            <source>Start with a safe baseline. Enter only internal destinations that must bypass Zscaler; all other traffic uses the selected gateway and failover.</source>
            <translation>从安全基线开始。仅输入必须绕过 Zscaler 的内部目标；所有其他流量都使用选定的网关和故障转移。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8230" />
            <source>Direct-bypass host patterns (one per line):</source>
            <translation>直接旁路主机模式（每行一个）：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8231" />
            <source>Primary gateway:</source>
            <translation>主网关：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8232" />
            <source>Secondary gateway:</source>
            <translation>二级网关：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8235" />
            <source>Create guided PAC</source>
            <translation>创建指导性 PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8236" />
            <source>Load safe example</source>
            <translation>加载安全示例</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8239" />
            <source>Generated PAC preview (read-only):</source>
            <translation>Generated PAC preview (read-only):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8246" />
            <source>Guided setup</source>
            <translation>引导式设置</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8248" />
            <source>PAC JavaScript — include FindProxyForURL(url, host). Variables use ${NAME}.</source>
            <translation>PAC JavaScript — include FindProxyForURL(url, host). Variables use ${NAME}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8253" />
            <source>Color guide: blue = PAC structure, amber = DIRECT bypass, green = proxy route, purple = variable, cyan = Zscaler endpoint, orange = IP/network, red = performance-sensitive DNS helper.</source>
            <translation>Color guide: blue = PAC structure, amber = DIRECT bypass, green = proxy route, purple = variable, cyan = Zscaler endpoint, orange = IP/network, red = performance-sensitive DNS helper.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8257" />
            <source>Load PAC…</source>
            <translation>加载 PAC...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8258" />
            <source>Save PAC…</source>
            <translation>保存 PAC...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8259" />
            <source>Save local draft</source>
            <translation>保存本地草稿</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8262" />
            <source>Author</source>
            <translation>作者</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8265" />
            <source>Variables (JSON). Standard Zscaler names: </source>
            <translation>变量 (JSON)。标准 Zscaler 名称： </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8269" />
            <source>Test URL:</source>
            <translation>测试网址：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8271" />
            <source>Apply variables</source>
            <translation>应用变量</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8272" />
            <source>Run static verification</source>
            <translation>运行静态验证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8273" />
            <source>Preview decision</source>
            <translation>预览决定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8276" />
            <source>Verify</source>
            <translation>验证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8279" />
            <source>PAC reference and review help. The verifier never executes JavaScript; validate in ZIA and test a pilot group before deployment.</source>
            <translation>PAC 参考和审查帮助。验证者从不执行 JavaScript；在部署前在 ZIA 中进行验证并测试试点组。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8280" />
            <source>Variable or function</source>
            <translation>变量或函数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8280" />
            <source>Purpose / guidance</source>
            <translation>目的/指导</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8288" />
            <source>Roll out in stages: validate, test representative URLs, stage to a small pilot group, then deploy. Prefer host-pattern checks; avoid DNS helpers in Client Connector PAC files where possible.</source>
            <translation>分阶段推出：验证、测试代表性 URL、进入小型试点组，然后部署。更喜欢主机模式检查；尽可能避免在客户端连接器 PAC 文件中使用 DNS 帮助程序。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8290" />
            <source>Help and reference</source>
            <translation>帮助和参考</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8293" />
            <source>Map supplied ZIA PAC metadata to ZCC forwarding-profile actions. Matches use hosted PAC URLs or an inline PAC content fingerprint; names alone are never treated as a match.</source>
            <translation>将提供的 ZIA PAC 元数据映射到 ZCC 转发配置文件操作。匹配使用托管 PAC URL 或内联 PAC 内容指纹；单独的名字永远不会被视为匹配。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8296" />
            <source>ZIA PAC list JSON</source>
            <translation>ZIA PAC 列表 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8298" />
            <source>ZCC forwarding-profile list JSON</source>
            <translation>ZCC 转发配置文件列表 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8302" />
            <source>Build PAC mappings</source>
            <translation>构建 PAC 映射</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8303" />
            <location filename="../zscaler_api_client.py" line="8338" />
            <source>Prepare ZIA PAC list</source>
            <translation>准备 ZIA PAC 列表</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8304" />
            <location filename="../zscaler_api_client.py" line="8330" />
            <source>Prepare ZCC profile list</source>
            <translation>准备 ZCC 配置文件列表</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8307" />
            <source>ZCC profile</source>
            <translation>ZCC简介</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8307" />
            <source>Action / network</source>
            <translation>动作/网络</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8307" />
            <source>PAC type</source>
            <translation>聚合氯化铝型</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8307" />
            <source>PAC reference</source>
            <translation>PAC 参考</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8307" />
            <source>ZIA status</source>
            <translation>ZIA 状态</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8307" />
            <source>Mapping result</source>
            <translation>测绘结果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8307" />
            <source>Profile ID</source>
            <translation>档案编号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8310" />
            <location filename="../zscaler_api_client.py" line="8419" />
            <source>PAC mappings</source>
            <translation>PAC 映射</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8313" />
            <source>Search the bundled Zscaler Configuration Center index of Cloud Enforcement Node ranges, proxy/VPN hostnames, GRE and extranet virtual IP addresses. The PAC editor shows a help balloon when a line references an indexed endpoint.</source>
            <translation>搜索云执行节点范围、代理/VPN 主机名、GRE 和外联网虚拟 IP 地址的捆绑 Zscaler 配置中心索引。当行引用索引端点时，PAC 编辑器会显示帮助气球。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8317" />
            <source>Search city, CIDR, hostname, GRE or VPN address</source>
            <translation>搜索城市、CIDR、主机名、GRE 或 VPN 地址</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8318" />
            <source>Search data centers</source>
            <translation>搜索数据中心</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8321" />
            <source>Continent</source>
            <translation>大陆</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8321" />
            <source>Data center</source>
            <translation>数据中心</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8321" />
            <source>CIDR range</source>
            <translation>CIDR范围</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8321" />
            <source>Proxy hostname</source>
            <translation>代理主机名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8321" />
            <source>VPN hostname</source>
            <translation>VPN 主机名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8321" />
            <source>GRE VIP</source>
            <translation>GRE贵宾</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8321" />
            <source>Extranet VIP</source>
            <translation>外网贵宾</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8321" />
            <source>Coordinates</source>
            <translation>坐标</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8324" />
            <source>Zscaler data centers</source>
            <translation>Zscaler 数据中心</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8327" />
            <source>Paste a forwarding profile returned by ZCC, or first prepare the profile-list request. Existing profile fields are preserved when PAC fields are updated.</source>
            <translation>粘贴 ZCC 返回的转发配置文件，或首先准备配置文件列表请求。更新 PAC 字段时，将保留现有配置文件字段。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8331" />
            <source>Prepare ZCC update</source>
            <translation>准备 ZCC 更新</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8333" />
            <source>ZCC / Mobile Portal</source>
            <translation>ZCC / 移动门户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8336" />
            <source>Prepare ZIA validation</source>
            <translation>准备 ZIA 验证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8337" />
            <source>Prepare ZIA hosted PAC upload</source>
            <translation>准备 ZIA 托管的 PAC 上传</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8339" />
            <source>Prepare ZIA version action</source>
            <translation>准备 ZIA 版本操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8340" />
            <source>Close</source>
            <translation>关闭</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8359" />
            <source>Guided mode creates a minimal, reviewable PAC. Switch to Advanced to edit JavaScript, update ZCC profiles, or prepare ZIA lifecycle actions.</source>
            <translation>引导模式创建一个最小的、可审查的 PAC。切换到高级以编辑 JavaScript、更新 ZCC 配置文件或准备 ZIA 生命周期操作。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8360" />
            <source>Advanced mode exposes the PAC editor, ZCC profile patching, and ZIA version lifecycle actions. Every write remains explicit.</source>
            <translation>高级模式公开 PAC 编辑器、ZCC 配置文件修补和 ZIA 版本生命周期操作。每次写入都保持明确。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8371" />
            <source>Primary Zscaler gateway.</source>
            <translation>Primary Zscaler gateway.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8371" />
            <source>Secondary Zscaler gateway.</source>
            <translation>Secondary Zscaler gateway.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8372" />
            <source>Primary gateway with failover support.</source>
            <translation>Primary gateway with failover support.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8372" />
            <source>Secondary gateway with failover support.</source>
            <translation>Secondary gateway with failover support.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8373" />
            <source>Optional local deployment label.</source>
            <translation>Optional local deployment label.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8373" />
            <source>Zscaler cloud name.</source>
            <translation>Zscaler cloud name.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8374" />
            <source>Primary gateway for an explicit subcloud.</source>
            <translation>Primary gateway for an explicit subcloud.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8375" />
            <source>Secondary gateway for an explicit subcloud.</source>
            <translation>Secondary gateway for an explicit subcloud.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8378" />
            <source>Required PAC entry point; returns DIRECT, PROXY, or SOCKS.</source>
            <translation>Required PAC entry point; returns DIRECT, PROXY, or SOCKS.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8379" />
            <source>Matches a host without a DNS suffix.</source>
            <translation>Matches a host without a DNS suffix.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8380" />
            <source>Matches a DNS suffix.</source>
            <translation>Matches a DNS suffix.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8381" />
            <source>Matches a local host or fully qualified name.</source>
            <translation>Matches a local host or fully qualified name.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8382" />
            <source>Matches wildcard patterns such as *.example.com.</source>
            <translation>Matches wildcard patterns such as *.example.com.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8383" />
            <source>Counts DNS labels in a host name.</source>
            <translation>Counts DNS labels in a host name.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8384" />
            <source>Matches a weekday range.</source>
            <translation>Matches a weekday range.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8384" />
            <source>Matches a date range.</source>
            <translation>Matches a date range.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8385" />
            <source>Matches a time range.</source>
            <translation>Matches a time range.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8386" />
            <source>Resolves DNS; avoid in Client Connector PAC files unless required.</source>
            <translation>Resolves DNS; avoid in Client Connector PAC files unless required.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8387" />
            <source>Tests DNS resolution; avoid in Client Connector PAC files unless required.</source>
            <translation>Tests DNS resolution; avoid in Client Connector PAC files unless required.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8388" />
            <source>Tests a network; avoid in Client Connector PAC files unless required.</source>
            <translation>Tests a network; avoid in Client Connector PAC files unless required.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8397" />
            <source>Fix the guided input to generate a PAC preview: </source>
            <translation>Fix the guided input to generate a PAC preview: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8407" />
            <source>Guided PAC</source>
            <translation>引导性PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8411" />
            <source>Guided PAC created. Review the verification findings, test a URL, then prepare ZIA validation.</source>
            <translation>创建了引导 PAC。查看验证结果，测试 URL，然后准备 ZIA 验证。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8419" />
            <source>Both mapping inputs must be valid JSON: </source>
            <translation>两个映射输入都必须是有效的 JSON： </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8428" />
            <source>Mapped actions: {total}; confirmed mappings: {matched}; unresolved hosted URLs: {unresolved}.</source>
            <translation>Mapped actions: {total}; confirmed mappings: {matched}; unresolved hosted URLs: {unresolved}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8449" />
            <source>{matches} matching endpoint records from {total} indexed Zscaler data-center records. Source: {source}</source>
            <translation>{matches} matching endpoint records from {total} indexed Zscaler data-center records. Source: {source}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8458" />
            <location filename="../zscaler_api_client.py" line="8460" />
            <location filename="../zscaler_api_client.py" line="8487" />
            <source>PAC variables</source>
            <translation>PAC变量</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8458" />
            <source>Variables must be valid JSON: </source>
            <translation>变量必须是有效的 JSON： </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8460" />
            <source>Variables must be a JSON object with text or numeric values.</source>
            <translation>变量必须是带有文本或数值的 JSON 对象。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8469" />
            <source>none</source>
            <translation>无</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8470" />
            <source>Detected variables: </source>
            <translation>检测到的变量： </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8474" />
            <source>Improvement tips:</source>
            <translation>改进技巧：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8486" />
            <source>Variables applied.</source>
            <translation>应用变量。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8486" />
            <source>Variables applied; missing values were retained: </source>
            <translation>应用变量；缺失值被保留： </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8491" />
            <source>Preview</source>
            <translation>预览</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8506" />
            <source>PAC draft saved locally.</source>
            <translation>PAC 草稿保存在本地。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8509" />
            <location filename="../zscaler_api_client.py" line="8514" />
            <source>Load PAC</source>
            <translation>加载 PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8517" />
            <location filename="../zscaler_api_client.py" line="8522" />
            <source>Save PAC</source>
            <translation>保存 PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8530" />
            <source>PAC request prepared</source>
            <translation>PAC 请求已准备好</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8530" />
            <source>The request was placed in the main editor. Review it and explicitly select Send Request; no deployment action has been performed.</source>
            <translation>该请求已提交到主编辑器中。查看它并明确选择发送请求；尚未执行任何部署操作。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8535" />
            <source>PAC verification</source>
            <translation>PAC验证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8535" />
            <source>Resolve PAC errors before preparing an API write.</source>
            <translation>在准备 API 写入之前解决 PAC 错误。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8551" />
            <source>ZIA PAC lifecycle</source>
            <translation>ZIA PAC 生命周期</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8551" />
            <source>Enter a numeric PAC ID and version before preparing a lifecycle action.</source>
            <translation>在准备生命周期操作之前输入数字 PAC ID 和版本。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8565" />
            <location filename="../zscaler_api_client.py" line="8567" />
            <source>ZCC forwarding profile</source>
            <translation>ZCC转发配置文件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8565" />
            <source>Profile must be valid JSON: </source>
            <translation>配置文件必须是有效的 JSON： </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8567" />
            <source>Paste one ZCC forwarding profile object with its id before preparing an update.</source>
            <translation>在准备更新之前粘贴一个 ZCC 转发配置文件对象及其 ID。</translation>
        </message>
    </context>
    <context>
        <name>PolicyTwinGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3906" />
            <source>{count} condition(s)</source>
            <translation>{count} condition(s)</translation>
        </message>
    </context>
    <context>
        <name>ResponseComparisonDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="6106" />
            <location filename="../zscaler_api_client.py" line="6166" />
            <source>Response drift comparison</source>
            <translation>响应漂移比较</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6108" />
            <source>Compare the active masked response with a local ZS API Exchange baseline. Matching records are aligned by id, UUID, resourceId, key, or name. No API request is sent.</source>
            <translation>将主动屏蔽响应与本地 ZS API Exchange 基线进行比较。匹配记录按 id、UUID、resourceId、key 或 name 对齐。没有发送 API 请求。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6111" />
            <source>Baseline:</source>
            <translation>基线：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6112" />
            <source>Choose a masked response exchange file</source>
            <translation>选择屏蔽响应交换文件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6113" />
            <source>Open baseline…</source>
            <translation>开放基线...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6116" />
            <source>Ignore volatile fields:</source>
            <translation>忽略易失性字段：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6118" />
            <source>Comma-separated field names ignored at every JSON depth. Secrets are always masked independently.</source>
            <translation>在每个 JSON 深度都会忽略逗号分隔的字段名称。秘密总是被独立地掩盖。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6119" />
            <source>Compare responses</source>
            <translation>比较回复</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6121" />
            <source>Open a baseline to calculate drift.</source>
            <translation>打开基线来计算漂移。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6124" />
            <source>Impact</source>
            <translation>影响</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6124" />
            <source>Change</source>
            <translation>改变</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6124" />
            <source>JSON path</source>
            <translation>JSON 路径</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6124" />
            <source>Identity</source>
            <translation>身份</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6124" />
            <source>Baseline value</source>
            <translation>基线值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6124" />
            <source>Current value</source>
            <translation>当前值</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6128" />
            <source>Export masked drift…</source>
            <translation>导出蒙版漂移...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6129" />
            <source>Close</source>
            <translation>关闭</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6138" />
            <location filename="../zscaler_api_client.py" line="6143" />
            <source>Open response baseline</source>
            <translation>开放响应基线</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6166" />
            <source>Open a baseline response exchange first.</source>
            <translation>首先打开基线响应交换。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6173" />
            <source>No drift found in the compared scope.</source>
            <translation>比较范围内未发现漂移。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6175" />
            <source>{total} change(s): {added} added, {removed} removed, {changed} changed · {high} high-impact</source>
            <translation>{total} change(s): {added} added, {removed} removed, {changed} changed · {high} high-impact</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6178" />
            <source>Result truncated at {maximum} changes</source>
            <translation>Result truncated at {maximum} changes</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6179" />
            <source>Baseline {baseline} · current {current}</source>
            <translation>Baseline {baseline} · current {current}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6180" />
            <source>Added</source>
            <translation>已添加</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6180" />
            <source>Removed</source>
            <translation>已删除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6180" />
            <source>Changed</source>
            <translation>改变了</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6180" />
            <source>High impact</source>
            <translation>高影响力</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6196" />
            <source>Export masked drift</source>
            <translation>导出蒙版漂移</translation>
        </message>
    </context>
    <context>
        <name>SettingsDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4661" />
            <source>Settings</source>
            <translation>设置</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4687" />
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
            <location filename="../zscaler_api_client.py" line="4721" />
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
            <location filename="../zscaler_api_client.py" line="4753" />
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
            <location filename="../zscaler_api_client.py" line="4787" />
            <source>ZCC (Client Connector)</source>
            <translation>ZCC（客户端连接器）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4852" />
            <source>ZIdentity (Identity &amp; Access)</source>
            <translation>ZIdentity (身份和访问)</translation>
        </message>
        <message>
            <source>Vanity Domain:</source>
            <translation type="vanished">自定义域名:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4879" />
            <source>ZTW (Zero Trust Workloads)</source>
            <translation>ZTW（零信任工作负载）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4906" />
            <source>ZWA (Workflow Automation)</source>
            <translation>ZWA（工作流程自动化）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4933" />
            <source>EASM (Attack Surface Management)</source>
            <translation>EASM（攻击面管理）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4965" />
            <location filename="../zscaler_api_client.py" line="5243" />
            <source>Credentials</source>
            <translation>凭据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4972" />
            <source>Network</source>
            <translation>网络</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4980" />
            <source>Request Timeout (seconds):</source>
            <translation>请求超时（秒）:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4693" />
            <location filename="../zscaler_api_client.py" line="4727" />
            <location filename="../zscaler_api_client.py" line="4759" />
            <location filename="../zscaler_api_client.py" line="4793" />
            <location filename="../zscaler_api_client.py" line="4821" />
            <location filename="../zscaler_api_client.py" line="4858" />
            <location filename="../zscaler_api_client.py" line="4885" />
            <location filename="../zscaler_api_client.py" line="4912" />
            <location filename="../zscaler_api_client.py" line="4939" />
            <location filename="../zscaler_api_client.py" line="4988" />
            <location filename="../zscaler_api_client.py" line="5004" />
            <location filename="../zscaler_api_client.py" line="5052" />
            <location filename="../zscaler_api_client.py" line="5058" />
            <location filename="../zscaler_api_client.py" line="5076" />
            <location filename="../zscaler_api_client.py" line="5100" />
            <source>Enabled</source>
            <translation>启用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4815" />
            <source>OneAPI (Unified v3 Framework)</source>
            <translation>OneAPI（统一 v3 框架）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4988" />
            <location filename="../zscaler_api_client.py" line="5004" />
            <location filename="../zscaler_api_client.py" line="5052" />
            <location filename="../zscaler_api_client.py" line="5058" />
            <location filename="../zscaler_api_client.py" line="5076" />
            <location filename="../zscaler_api_client.py" line="5100" />
            <source>Disabled</source>
            <translation>禁用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5005" />
            <source>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</source>
            <translation>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5010" />
            <source>SSL Verification:</source>
            <translation>SSL验证:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5015" />
            <source>Proxy</source>
            <translation>代理</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5021" />
            <source>No Proxy</source>
            <translation>无代理</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5021" />
            <source>System Proxy</source>
            <translation>系统代理</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5021" />
            <source>Manual</source>
            <translation>手动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5023" />
            <source>Proxy Mode:</source>
            <translation>代理模式:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5027" />
            <source>Proxy Host:</source>
            <translation>代理主机:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5032" />
            <source>Proxy Port:</source>
            <translation>代理端口:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5035" />
            <location filename="../zscaler_api_client.py" line="5040" />
            <source>Optional</source>
            <translation>可选</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5036" />
            <source>Proxy Username:</source>
            <translation>代理用户名:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5041" />
            <source>Proxy Password:</source>
            <translation>代理密码:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5046" />
            <source>Behavior</source>
            <translation>行为</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5053" />
            <source>Auto-authenticate on startup:</source>
            <translation>启动时自动认证:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5059" />
            <source>Save request history:</source>
            <translation>保存请求历史:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5065" />
            <source>History limit:</source>
            <translation>历史限制:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5071" />
            <source>Default API:</source>
            <translation>默认API:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5077" />
            <source>Check for updates on startup:</source>
            <translation>启动时检查更新:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4668" />
            <location filename="../zscaler_api_client.py" line="5082" />
            <source>Advanced</source>
            <translation>高级</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4667" />
            <source>Basic</source>
            <translation>基础</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4670" />
            <source>Interface mode:</source>
            <translation>接口方式：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4777" />
            <source>API version:</source>
            <translation>API版本：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4985" />
            <source>Maximum upload/download (MB):</source>
            <translation>最大上传/下载 (MB):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4989" />
            <source>Retry only GET, HEAD, and OPTIONS after transient network errors or HTTP 408, 429, 502, 503, and 504. Write requests are never retried automatically.</source>
            <translation>仅在出现暂时性网络错误或 HTTP 408、429、502、503 和 504 后重试 GET、HEAD 和 OPTIONS。写入请求绝不会自动重试。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4990" />
            <source>Retry safe reads:</source>
            <translation>重试安全读取：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4994" />
            <source>Maximum read retries:</source>
            <translation>最大读取重试次数：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4998" />
            <source>Maximum seconds to honor from Retry-After; shorter exponential backoff is used when the server omits it.</source>
            <translation>Retry-After 所遵循的最大秒数；当服务器忽略它时，使用较短的指数退避。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4999" />
            <source>Maximum retry wait (seconds):</source>
            <translation>最大重试等待（秒）：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5088" />
            <source>Response Display</source>
            <translation>响应显示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5095" />
            <source>JSON Indentation:</source>
            <translation>JSON缩进:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5101" />
            <source>Word Wrap:</source>
            <translation>自动换行:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5107" />
            <source>Font Size:</source>
            <translation>字体大小:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5112" />
            <source>Light</source>
            <translation>浅色</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5112" />
            <source>Dark</source>
            <translation>深色</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5112" />
            <source>System</source>
            <translation>系统</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5113" />
            <source>Theme:</source>
            <translation>主题:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5118" />
            <source>Display</source>
            <translation>显示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5123" />
            <location filename="../zscaler_api_client.py" line="5158" />
            <location filename="../zscaler_api_client.py" line="5238" />
            <location filename="../zscaler_api_client.py" line="5243" />
            <source>Privacy</source>
            <translation>隐私</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5126" />
            <source>Secrets only (identifiers visible)</source>
            <translation>仅秘密（标识符可见）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5127" />
            <source>Obfuscate exports and external integrations (recommended)</source>
            <translation>混淆导出和外部集成（推荐）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5128" />
            <source>Obfuscate exports, integrations, and on-screen data</source>
            <translation>混淆导出、集成和屏幕数据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5130" />
            <source>Identifier obfuscation:</source>
            <translation>标识符混淆：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5131" />
            <source>Credentials and authentication material are always masked. Identifier pseudonyms are stable until the local pseudonym key is rotated; no original-to-pseudonym mapping is stored.</source>
            <translation>凭证和身份验证材料始终被隐藏。标识符假名在本地假名密钥轮换之前是稳定的；不存储原始到假名的映射。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5133" />
            <source>Usernames, display names, and email addresses</source>
            <translation>用户名、显示名称和电子邮件地址</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5134" />
            <source>IPv4 and IPv6 addresses</source>
            <translation>IPv4 和 IPv6 地址</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5135" />
            <source>Hostnames, domains, and URL hosts</source>
            <translation>主机名、域和 URL 主机</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5136" />
            <source>Tenant, customer, organization, and environment names</source>
            <translation>租户、客户、组织和环境名称</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5137" />
            <source>Object IDs, UUIDs, GUIDs, and client identifiers</source>
            <translation>对象 ID、UUID、GUID 和客户端标识符</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5138" />
            <source>Policy, application, group, location, and resource names</source>
            <translation>策略、应用程序、组、位置和资源名称</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5145" />
            <source>Rotate local pseudonym key</source>
            <translation>轮换本地假名密钥</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5146" />
            <source>Creates new pseudonyms for future views and exports. Existing files are not modified.</source>
            <translation>为将来的视图和导出创建新的假名。现有文件不会被修改。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5149" />
            <location filename="../zscaler_api_client.py" line="5274" />
            <location filename="../zscaler_api_client.py" line="5280" />
            <source>Rotate evidence signing key</source>
            <translation>轮换证据签名密钥</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5150" />
            <source>Creates a new Ed25519 key in the system keychain. Existing signed packages remain verifiable with their embedded public keys.</source>
            <translation>在系统钥匙串中创建新的 Ed25519 密钥。现有的签名包仍然可以使用其嵌入的公钥进行验证。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5153" />
            <location filename="../zscaler_api_client.py" line="5238" />
            <source>Obfuscation preview</source>
            <translation>混淆预览</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5155" />
            <source>Preview of exported or externally shared data using synthetic examples:</source>
            <translation>使用合成示例预览导出或外部共享的数据：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5163" />
            <location filename="../zscaler_api_client.py" line="5205" />
            <location filename="../zscaler_api_client.py" line="5238" />
            <location filename="../zscaler_api_client.py" line="5243" />
            <source>Language</source>
            <translation>语言</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5166" />
            <source>System default</source>
            <translation>系统默认</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5169" />
            <source>Application language:</source>
            <translation>应用语言：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5170" />
            <source>System default follows your operating system language. Restart after saving to apply a change.</source>
            <translation>系统默认遵循您的操作系统语言。保存后重新启动以应用更改。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5173" />
            <location filename="../zscaler_api_client.py" line="5238" />
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
            <location filename="../zscaler_api_client.py" line="5179" />
            <source>AI provider:</source>
            <translation>人工智能提供商：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5182" />
            <source>AI endpoint:</source>
            <translation>人工智能端点：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5184" />
            <source>Select a provider to prefill a recommended model</source>
            <translation>Select a provider to prefill a recommended model</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5185" />
            <source>Model:</source>
            <translation>型号：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5188" />
            <source>Stored securely in your system keychain</source>
            <translation>安全地存储在您的系统钥匙串中</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5189" />
            <source>API key:</source>
            <translation>API 密钥：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5190" />
            <source>Allow this app to send the masked question and catalog metadata to an external AI service</source>
            <translation>允许此应用将屏蔽的问题和目录元数据发送到外部 AI 服务</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5193" />
            <source>Clear AI key</source>
            <translation>清除AI键</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5196" />
            <source>Test AI connection</source>
            <translation>测试AI连接</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5200" />
            <source>Provider profiles prefill public endpoints and recommended models. Review model availability, pricing, and your organization’s data policy before enabling an external service.</source>
            <translation>Provider profiles prefill public endpoints and recommended models. Review model availability, pricing, and your organization’s data policy before enabling an external service.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5262" />
            <location filename="../zscaler_api_client.py" line="5271" />
            <source>Rotate pseudonym key</source>
            <translation>旋转假名键</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5263" />
            <source>Rotate the local pseudonym key? Future pseudonyms will change and will no longer correlate with previous exports.</source>
            <translation>轮换本地假名密钥？未来的假名将发生变化，并且将不再与以前的导出相关联。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5271" />
            <source>The local pseudonym key was rotated. No credentials or source identifiers were stored.</source>
            <translation>本地假名密钥已轮换。未存储任何凭据或源标识符。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5274" />
            <source>Create a new local evidence signing identity? Existing signed packages remain verifiable, but future packages will have a different public-key fingerprint.</source>
            <translation>创建新的本地证据签名身份？现有的签名包仍然可以验证，但未来的包将具有不同的公钥指纹。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5277" />
            <source>Signed evidence</source>
            <translation>签名证据</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5277" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>系统钥匙串无法存储证据签名密钥。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5280" />
            <source>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</source>
            <translation>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5286" />
            <source>Restore Defaults</source>
            <translation>恢复默认设置</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5287" />
            <source>This will reset all advanced settings to defaults. Continue?</source>
            <translation>这会将所有高级设置重置为默认值。继续？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5409" />
            <source>Configured securely in your system keychain</source>
            <translation>在您的系统钥匙串中安全配置</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5416" />
            <source>AI key cleared</source>
            <translation>AI键已清除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5432" />
            <location filename="../zscaler_api_client.py" line="5435" />
            <location filename="../zscaler_api_client.py" line="5446" />
            <location filename="../zscaler_api_client.py" line="5447" />
            <source>AI connection</source>
            <translation>人工智能连接</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5432" />
            <source>Local catalog assistant is ready.</source>
            <translation>本地目录助手已准备就绪。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5435" />
            <source>Enter an AI endpoint first.</source>
            <translation>首先输入AI端点。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5444" />
            <source>AI connection succeeded.</source>
            <translation>AI连接成功。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5447" />
            <source>AI connection failed: {error}</source>
            <translation>AI connection failed: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5461" />
            <source>ZIA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZIA Cloud：删除了 URL 前缀（仅需要主机名）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5468" />
            <source>ZPA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZPA Cloud：删除了 URL 前缀（仅需要主机名）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5474" />
            <source>{product} Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>{product} Cloud: Removed URL prefix (only hostname needed)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5479" />
            <source>ZPA: Customer ID is empty — required for most ZPA endpoints</source>
            <translation>ZPA：客户 ID 为空 — 大多数 ZPA 端点都需要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5481" />
            <source>ZPA: Customer ID should be numeric (got '{value}')</source>
            <translation>ZPA: Customer ID should be numeric (got '{value}')</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5489" />
            <source>OneAPI: Removed URL prefix from vanity domain</source>
            <translation>OneAPI：从个性域中删除了 URL 前缀</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5493" />
            <source>OneAPI: Removed .zslogin.net suffix — only the prefix is needed (e.g. 'acme')</source>
            <translation>OneAPI：删除了 .zslogin.net 后缀 - 只需要前缀（例如“acme”）</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5495" />
            <source>OneAPI: Vanity domain usually has no dots (e.g. 'acme', not '{value}')</source>
            <translation>OneAPI: Vanity domain usually has no dots (e.g. 'acme', not '{value}')</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5501" />
            <source>OneAPI: Cloud should be empty (production) or a simple name like 'beta'/'alpha'. Got '{value}' — this looks like a full domain. Leave empty for production.</source>
            <translation>OneAPI: Cloud should be empty (production) or a simple name like 'beta'/'alpha'. Got '{value}' — this looks like a full domain. Leave empty for production.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5509" />
            <source>OneAPI: Customer ID should be numeric (got '{value}')</source>
            <translation>OneAPI: Customer ID should be numeric (got '{value}')</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5517" />
            <source>ZIdentity: Removed URL prefix from domain</source>
            <translation>ZIdentity：从域中删除了 URL 前缀</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5521" />
            <source>ZIA is enabled but Cloud is empty</source>
            <translation>ZIA 已启用但云为空</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5523" />
            <source>ZCC is enabled but Cloud host is empty</source>
            <translation>ZCC已启用但云主机为空</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5525" />
            <source>OneAPI is enabled but Vanity Domain is empty</source>
            <translation>OneAPI 已启用，但 Vanity Domain 为空</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5527" />
            <source>OneAPI is enabled but Client ID is empty</source>
            <translation>OneAPI 已启用，但客户端 ID 为空</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5542" />
            <source>Settings Validation</source>
            <translation>设置验证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5543" />
            <source>Some settings were adjusted or may need attention:</source>
            <translation>部分设置已调整或可能需要注意：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5547" />
            <source>Save Anyway</source>
            <translation>无论如何保存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5548" />
            <source>Go Back</source>
            <translation>返回</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5573" />
            <source>Secure storage</source>
            <translation>安全存储</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5573" />
            <source>The system keychain could not save one or more secrets. No secret changes were applied.</source>
            <translation>系统钥匙串无法保存一个或多个秘密。没有进行任何秘密更改。</translation>
        </message>
    </context>
    <context>
        <name>SetupWizard</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4207" />
            <source>Getting Started Wizard</source>
            <translation>入门向导</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4226" />
            <source>Back</source>
            <translation>返回</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4230" />
            <source>Open full settings</source>
            <translation>打开完整设置</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4233" />
            <location filename="../zscaler_api_client.py" line="4356" />
            <source>Continue</source>
            <translation>继续</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4244" />
            <source>Abstract zero trust security network</source>
            <translation>抽象零信任安全网络</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4246" />
            <source>&lt;h1&gt;Welcome to ZS API Client&lt;/h1&gt;</source>
            <translation>&lt;h1&gt;Welcome to ZS API Client&lt;/h1&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4249" />
            <source>&lt;p&gt;This guide sets up secure OneAPI access and prepares common requests. Credentials are stored in your system keychain; you can change any setting later.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Recommended:&lt;/b&gt; use OneAPI for a unified token across supported Zscaler services.&lt;/p&gt;</source>
            <translation>&lt;p&gt;This guide sets up secure OneAPI access and prepares common requests. Credentials are stored in your system keychain; you can change any setting later.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Recommended:&lt;/b&gt; use OneAPI for a unified token across supported Zscaler services.&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4257" />
            <source>Basic</source>
            <translation>基础</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4258" />
            <source>Advanced</source>
            <translation>高级</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4260" />
            <source>Setup mode:</source>
            <translation>设置模式：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4268" />
            <source>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4269" />
            <source>Create an API client with the required roles in ZIdentity, then enter its details below.</source>
            <translation>在 ZIdentity 中创建具有所需角色的 API 客户端，然后在下面输入其详细信息。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4275" />
            <source>Vanity domain</source>
            <translation>虚荣领域</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4277" />
            <source>Client ID</source>
            <translation>客户ID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4280" />
            <source>Client secret</source>
            <translation>客户秘密</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4282" />
            <source>Leave empty for production; use beta or alpha when applicable</source>
            <translation>留空用于生产；适用时使用 beta 或 alpha</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4283" />
            <source>Cloud</source>
            <translation>云</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4285" />
            <source>Optional; required for many ZPA requests</source>
            <translation>可选；许多 ZPA 请求都需要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4286" />
            <source>ZPA customer ID</source>
            <translation>ZPA 客户 ID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4316" />
            <source>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4317" />
            <source>Choose a common operation. The wizard will load it into the request builder with required path variables highlighted.</source>
            <translation>选择常用操作。该向导会将其加载到请求构建器中，并突出显示所需的路径变量。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4375" />
            <source>Secure storage</source>
            <translation>安全存储</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4375" />
            <source>The system keychain could not save the secret. Check the keychain service and try again.</source>
            <translation>系统钥匙串无法保存秘密。检查钥匙串服务并重试。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4307" />
            <location filename="../zscaler_api_client.py" line="4321" />
            <source>Just explore the API catalog</source>
            <translation>只需浏览 API 目录即可</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4188" />
            <source>ZIA · List users</source>
            <translation>ZIA · 列出用户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4189" />
            <source>ZIA · List URL categories</source>
            <translation>ZIA · 列出 URL 类别</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4190" />
            <source>ZIA · Check activation status</source>
            <translation>ZIA · 检查激活状态</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4191" />
            <source>ZIA · List cloud firewall policies</source>
            <translation>ZIA·列出云防火墙策略</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4192" />
            <source>ZPA · List application segments</source>
            <translation>ZPA · 列出应用领域</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4193" />
            <source>ZPA · List segment groups</source>
            <translation>ZPA · 列出段组</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4194" />
            <source>ZPA · List connectors</source>
            <translation>ZPA · 列出连接器</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4195" />
            <source>ZDX · List devices and experience scores</source>
            <translation>ZDX · 列出设备和体验分数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4196" />
            <source>ZDX · List active alerts</source>
            <translation>ZDX · 列出活动警报</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4197" />
            <source>ZDX · List monitored applications</source>
            <translation>ZDX · 列出受监控的应用程序</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4198" />
            <source>Client Connector · List devices</source>
            <translation>客户端连接器·列出设备</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4199" />
            <source>ZIdentity · List users</source>
            <translation>ZIdentity · 列出用户</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4200" />
            <source>ZIdentity · List groups</source>
            <translation>ZIdentity · 列出组</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4201" />
            <source>AI Security · List workloads</source>
            <translation>AI 安全 · 列出工作负载</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4325" />
            <source>Authenticate immediately after finishing</source>
            <translation>完成后立即进行身份验证</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4334" />
            <source>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4336" />
            <source>The API Explorer contains the complete bundled catalog. Use the Documentation tab for endpoint details, the Console tab for request activity, and Request History to replay safe, redacted requests.</source>
            <translation>API Explorer 包含完整的捆绑目录。使用“文档”选项卡了解端点详细信息，使用“控制台”选项卡了解请求活动，并使用“请求历史记录”来重放安全、经过编辑的请求。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4354" />
            <source>Step {current} of {total}</source>
            <translation>Step {current} of {total}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4356" />
            <source>Finish</source>
            <translation>完成</translation>
        </message>
    </context>
    <context>
        <name>SocEntityGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3951" />
            <source>Identity</source>
            <translation>身份</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3951" />
            <source>Address</source>
            <translation>地址</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3951" />
            <source>Device</source>
            <translation>设备</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3951" />
            <source>Application</source>
            <translation>应用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3951" />
            <source>Policy</source>
            <translation>政策</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3951" />
            <source>Service</source>
            <translation>服务</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3951" />
            <source>Endpoint</source>
            <translation>端点</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3951" />
            <source>Infrastructure</source>
            <translation>基础设施</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3951" />
            <source>Indicator</source>
            <translation>指标</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3951" />
            <source>Activity</source>
            <translation>活动</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3951" />
            <source>Environment</source>
            <translation>环境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3951" />
            <source>Resource</source>
            <translation>资源</translation>
        </message>
    </context>
    <context>
        <name>SplashScreen</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4430" />
            <source>Loading...</source>
            <translation>加载中...</translation>
        </message>
    </context>
    <context>
        <name>WelcomeDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4032" />
            <source>Welcome to ZS API Client</source>
            <translation>欢迎使用ZS API Client</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4044" />
            <source>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</source>
            <translation>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4057" />
            <source>Supported APIs</source>
            <translation>支持的API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4060" />
            <source>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</source>
            <translation>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4076" />
            <source>Getting Started</source>
            <translation>入门指南</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4079" />
            <source>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</source>
            <translation>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4092" />
            <source>Tips for Advanced Users</source>
            <translation>高级用户提示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4095" />
            <source>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4109" />
            <source>Documentation</source>
            <translation>文档</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4130" />
            <source>Show this dialog on startup</source>
            <translation>启动时显示此对话框</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4138" />
            <source>Open Settings</source>
            <translation>打开设置</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4142" />
            <source>Get Started</source>
            <translation>开始使用</translation>
        </message>
    </context>
    <context>
        <name>owner</name>
        <message>
            <location filename="../zscaler_api_client.py" line="445" />
            <source>Default</source>
            <translation>默认</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="658" />
            <source>The response export is unavailable, is a symbolic link, or exceeds the configured transfer limit.</source>
            <translation>响应导出不可用、是符号链接或超出配置的传输限制。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="659" />
            <source>The response export is not valid UTF-8 JSON.</source>
            <translation>响应导出不是有效的 UTF-8 JSON。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="660" />
            <source>This is not a supported ZS API response exchange file.</source>
            <translation>这不是受支持的 ZS API 响应交换文件。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="661" />
            <source>The response exchange file is incomplete.</source>
            <translation>响应交换文件不完整。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="663" />
            <source>The response exchange file could not be opened.</source>
            <translation>无法打开响应交换文件。</translation>
        </message>
    </context>
    <context>
        <name>window</name>
        <message>
            <location filename="../zscaler_api_client.py" line="12286" />
            <source>Automatic Update Check</source>
            <translation>自动检查更新</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12288" />
            <source>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</source>
            <translation>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</translation>
        </message>
    </context>
</TS>