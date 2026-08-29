<?xml version='1.0' encoding='utf-8'?>
<TS version="2.1" language="ja">
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
            <translation>Zscaler APIクライアントについて</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4482" />
            <source>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</source>
            <translation>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4515" />
            <source>Disclaimer</source>
            <translation>免責事項</translation>
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
            <translation>バッチ操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5765" />
            <source>Import a CSV file to perform batch operations. The CSV should have columns matching the API parameters.</source>
            <translation>バッチ操作を実行するためにCSVファイルをインポートします。CSVにはAPIパラメータに一致する列が必要です。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5774" />
            <source>Select CSV file...</source>
            <translation>CSVファイルを選択...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5777" />
            <source>Browse...</source>
            <translation>参照...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5789" />
            <source>Operation:</source>
            <translation>操作:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5793" />
            <source>Create Users (ZIA)</source>
            <translation>ユーザー作成 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5794" />
            <source>Update Users (ZIA)</source>
            <translation>ユーザーの更新 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5795" />
            <source>Delete Users (ZIA)</source>
            <translation>ユーザー削除 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5796" />
            <source>Create Locations (ZIA)</source>
            <translation>ロケーション作成 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5797" />
            <source>URL Lookup (ZIA)</source>
            <translation>URL検索 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5798" />
            <source>Create App Segments (ZPA)</source>
            <translation>アプリセグメント作成 (ZPA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5824" />
            <source>Select CSV File</source>
            <translation>CSVファイルを選択</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5854" />
            <source>Error</source>
            <translation>エラー</translation>
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
            <translation>更新情報</translation>
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
            <translation>今後のアップデート後は表示しない</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4610" />
            <source>*Changelog not found*</source>
            <translation>*変更履歴が見つかりません*</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4631" />
            <source>*Could not load changelog: {error}*</source>
            <translation>*変更ログを読み込めませんでした: {error} *</translation>
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
            <translation>環境プロファイル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6003" />
            <source>Each environment keeps separate tenant hosts, client identifiers, enabled products, and keychain credentials. Creating a profile copies only non-secret configuration. Activating a profile clears every in-memory API session.</source>
            <translation>各環境では、個別のテナント ホスト、クライアント ID、有効な製品、およびキーチェーン資格情報が保持されます。プロファイルを作成すると、非機密構成のみがコピーされます。プロファイルをアクティブにすると、すべてのインメモリ API セッションがクリアされます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Active</source>
            <translation>アクティブ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Name</source>
            <translation>名前</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Default API</source>
            <translation>デフォルトのAPI</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Configured host</source>
            <translation>構成されたホスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Keychain secrets</source>
            <translation>キーチェーンの秘密</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6007" />
            <location filename="../zscaler_api_client.py" line="6040" />
            <source>Create profile</source>
            <translation>プロフィールの作成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6008" />
            <location filename="../zscaler_api_client.py" line="6052" />
            <source>Rename profile</source>
            <translation>プロファイル名の変更</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6009" />
            <location filename="../zscaler_api_client.py" line="6063" />
            <location filename="../zscaler_api_client.py" line="6064" />
            <source>Delete profile</source>
            <translation>プロフィールの削除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6010" />
            <source>Activate profile</source>
            <translation>プロファイルをアクティブ化する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6011" />
            <source>Close</source>
            <translation>閉じる</translation>
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
            <translation>プロフィール名:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6044" />
            <location filename="../zscaler_api_client.py" line="6055" />
            <source>Enter a unique profile name without path separators (maximum 60 characters).</source>
            <translation>パス区切り文字を含まない一意のプロファイル名を入力します (最大 60 文字)。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6047" />
            <source>The profile was created with non-secret settings only. Open Settings after activation to add its keychain credentials.</source>
            <translation>プロファイルは非シークレット設定のみで作成されました。アクティベーション後に [設定] を開いて、キーチェーンの認証情報を追加します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6063" />
            <source>The default or active profile cannot be deleted. Activate another profile first.</source>
            <translation>デフォルトまたはアクティブなプロファイルは削除できません。まず別のプロファイルをアクティブ化します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6064" />
            <source>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</source>
            <translation>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6066" />
            <source>Secure storage</source>
            <translation>安全なストレージ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6066" />
            <source>The profile could not be deleted because its keychain credentials could not be removed.</source>
            <translation>キーチェーン認証情報を削除できなかったため、プロファイルを削除できませんでした。</translation>
        </message>
    </context>
    <context>
        <name>ErrorCodesDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5695" />
            <source>API Error Codes Reference</source>
            <translation>API エラー コードのリファレンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5701" />
            <source>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5704" />
            <source>Common error codes and their meanings for each API.</source>
            <translation>各 API の一般的なエラー コードとその意味。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5717" />
            <source>Code</source>
            <translation>コード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5717" />
            <source>Name</source>
            <translation>名前</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5717" />
            <source>Description</source>
            <translation>説明</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5737" />
            <source>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5748" />
            <source>Close</source>
            <translation>閉じる</translation>
        </message>
    </context>
    <context>
        <name>ExperienceJourneyGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3982" />
            <source>No journey telemetry in the current response</source>
            <translation>現在の応答には移動テレメトリがありません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4001" />
            <source>No observed data</source>
            <translation>観測データなし</translation>
        </message>
    </context>
    <context>
        <name>HighPerformanceLineChart</name>
        <message>
            <source>Latency</source>
            <translation type="vanished">レイテンシー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3813" />
            <source>Value</source>
            <translation>値</translation>
        </message>
    </context>
    <context>
        <name>HistoryDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5875" />
            <source>Request History</source>
            <translation>リクエスト履歴</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5884" />
            <source>Search:</source>
            <translation>検索:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5886" />
            <source>Filter by URL or method...</source>
            <translation>URL またはメソッドでフィルタリング...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5891" />
            <source>Current environment: {name}</source>
            <translation>Current environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5892" />
            <source>All environments</source>
            <translation>すべての環境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5896" />
            <location filename="../zscaler_api_client.py" line="5973" />
            <source>Clear History</source>
            <translation>履歴をクリア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>Time</source>
            <translation>時刻</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>Method</source>
            <translation>メソッド</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>URL</source>
            <translation>URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>Environment</source>
            <translation>環境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5906" />
            <source>Status</source>
            <translation>ステータス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5906" />
            <source>Duration</source>
            <translation>期間</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5918" />
            <source>Load Request</source>
            <translation>リクエストを読み込む</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5922" />
            <source>Close</source>
            <translation>閉じる</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5946" />
            <source>Default</source>
            <translation>デフォルト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5974" />
            <source>Are you sure you want to clear all request history?</source>
            <translation>すべてのリクエスト履歴をクリアしてもよろしいですか?</translation>
        </message>
    </context>
    <context>
        <name>MainWindow</name>
        <message>
            <source>API:</source>
            <translation type="vanished">API:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8672" />
            <source>Auth</source>
            <translation>認証</translation>
        </message>
        <message>
            <source>Authenticate with selected API</source>
            <translation type="vanished">選択した API で認証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8694" />
            <source>Endpoints</source>
            <translation>エンドポイント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8700" />
            <source>Output</source>
            <translation>出力</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8706" />
            <source>Authentication status, requests, and audit info...</source>
            <translation>認証ステータス、リクエスト、監査情報...</translation>
        </message>
        <message>
            <source>Request</source>
            <translation type="vanished">リクエスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8740" />
            <source>Enter URL or select endpoint...</source>
            <translation>URLを入力またはエンドポイントを選択...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8744" />
            <source>Send</source>
            <translation>送信</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8753" />
            <source>cURL</source>
            <translation>カールURL</translation>
        </message>
        <message>
            <source>Copy request as cURL command</source>
            <translation type="vanished">リクエストをcURLコマンドとしてコピーする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8826" />
            <location filename="../zscaler_api_client.py" line="8835" />
            <source>Key</source>
            <translation>キー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8826" />
            <location filename="../zscaler_api_client.py" line="8835" />
            <location filename="../zscaler_api_client.py" line="8895" />
            <location filename="../zscaler_api_client.py" line="8970" />
            <source>Value</source>
            <translation>値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8829" />
            <source>Params</source>
            <translation>パラメータ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8838" />
            <location filename="../zscaler_api_client.py" line="8963" />
            <source>Headers</source>
            <translation>ヘッダー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8871" />
            <location filename="../zscaler_api_client.py" line="10713" />
            <source>Request body (JSON)...</source>
            <translation>リクエストボディ (JSON)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8875" />
            <location filename="../zscaler_api_client.py" line="8962" />
            <source>Body</source>
            <translation>ボディ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8895" />
            <source>Variable</source>
            <translation>変数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8898" />
            <source>Path Variables</source>
            <translation>パス変数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8920" />
            <location filename="../zscaler_api_client.py" line="10618" />
            <source>Response</source>
            <translation>レスポンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8935" />
            <source>Pretty</source>
            <translation>かなり</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8938" />
            <source>Toggle pretty-print JSON (Ctrl+P)</source>
            <translation>きれいに印刷された JSON を切り替えます (Ctrl+P)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8943" />
            <location filename="../zscaler_api_client.py" line="10125" />
            <location filename="../zscaler_api_client.py" line="10144" />
            <location filename="../zscaler_api_client.py" line="10149" />
            <location filename="../zscaler_api_client.py" line="10157" />
            <source>Export response</source>
            <translation>エクスポート応答</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8946" />
            <source>Preview export</source>
            <translation>プレビューエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8966" />
            <source>Table</source>
            <translation>テーブル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8968" />
            <source>Chart</source>
            <translation>チャート</translation>
        </message>
        <message>
            <source>JSON structure</source>
            <translation type="vanished">JSON構造</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8972" />
            <source>Tree</source>
            <translation>木</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8975" />
            <source>Heatmap</source>
            <translation>ヒートマップ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8978" />
            <source>Topology</source>
            <translation>トポロジ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8982" />
            <source>Schema</source>
            <translation>スキーマ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8987" />
            <location filename="../zscaler_api_client.py" line="9053" />
            <source>AI Assistant</source>
            <translation>AIアシスタント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8990" />
            <source>Ask a OneAPI question, e.g. list ZPA application segments</source>
            <translation>OneAPI の質問をしてください。 ZPAアプリケーションセグメントをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8994" />
            <source>Choose a guided AI example…</source>
            <translation>ガイド付き AI の例を選択してください…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9000" />
            <source>Find API request</source>
            <translation>APIリクエストの検索</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9003" />
            <source>Run selected request</source>
            <translation>選択したリクエストを実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9006" />
            <source>Export result</source>
            <translation>結果のエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9010" />
            <location filename="../zscaler_api_client.py" line="11827" />
            <source>Ask in plain language. Sensitive values are masked before display or export.</source>
            <translation>わかりやすい言葉で質問してください。機密性の高い値は、表示またはエクスポート前にマスクされます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9016" />
            <source>AI request preview appears here before execution.</source>
            <translation>AI リクエストのプレビューは、実行前にここに表示されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9022" />
            <source>Bar chart</source>
            <translation>棒グラフ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9023" />
            <source>Line chart</source>
            <translation>折れ線グラフ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9024" />
            <source>Pie chart</source>
            <translation>円グラフ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9033" />
            <source>Help</source>
            <translation>ヘルプ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9052" />
            <source>Console</source>
            <translation>コンソール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9069" />
            <source>Ready</source>
            <translation>準備完了</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9078" />
            <source>&amp;File</source>
            <translation>ファイル(&amp;F)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9080" />
            <source>&amp;Settings...</source>
            <translation>設定(&amp;S)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9085" />
            <source>&amp;Batch Operations...</source>
            <translation>バッチ操作(&amp;B)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9092" />
            <source>Request &amp;History...</source>
            <translation>リクエスト履歴(&amp;H)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9101" />
            <source>&amp;Quit</source>
            <translation>終了(&amp;Q)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9107" />
            <source>&amp;Edit</source>
            <translation>編集(&amp;E)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9109" />
            <source>Copy as c&amp;URL</source>
            <translation>URL としてコピー(&amp;U)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9114" />
            <source>Copy &amp;Response</source>
            <translation>応答をコピー(&amp;R)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9121" />
            <source>C&amp;lear Request</source>
            <translation>リクエストをクリア(&amp;L)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9126" />
            <source>&amp;Request</source>
            <translation>リクエスト(&amp;R)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9128" />
            <source>&amp;Send Request</source>
            <translation>リクエストを送信(&amp;S)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9135" />
            <source>Authenticate &amp;ZIA</source>
            <translation>ZIA を認証する(&amp;ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9139" />
            <source>Authenticate Z&amp;PA</source>
            <translation>Z&amp;PA を認証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9145" />
            <source>&amp;Logout All Sessions</source>
            <translation>すべてのセッションをログアウト(&amp;L)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9149" />
            <source>&amp;Operations</source>
            <translation>操作(&amp;O)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9150" />
            <source>Operations &amp;Center...</source>
            <translation>オペレーションセンター(&amp;C)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9158" />
            <source>Environment &amp;Profiles...</source>
            <translation>環境プロファイル(&amp;P)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9163" />
            <source>&amp;Language</source>
            <translation>言語(&amp;L)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9172" />
            <source>&amp;Help</source>
            <translation>ヘルプ(&amp;H)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9174" />
            <source>&amp;Welcome Guide...</source>
            <translation>ウェルカムガイド(&amp;W)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9178" />
            <source>&amp;About...</source>
            <translation>バージョン情報(&amp;A)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9183" />
            <source>About &amp;Qt...</source>
            <translation>Qt について(Q)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9190" />
            <source>ZIA API &amp;Documentation</source>
            <translation>ZIA API ドキュメント(&amp;D)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9194" />
            <source>ZPA API D&amp;ocumentation</source>
            <translation>ZPA API ドキュメント(&amp;O)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9198" />
            <source>Zscaler API &amp;Portal</source>
            <translation>Zscaler API &amp;ポータル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9202" />
            <source>API &amp;Error Codes...</source>
            <translation>API エラーコード(&amp;E)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9208" />
            <source>Check for &amp;Updates...</source>
            <translation>更新を確認(&amp;U)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9278" />
            <source>{count} operations · {groups} groups</source>
            <translation>{count} operations · {groups} groups</translation>
        </message>
        <message>
            <source>Create new profile…</source>
            <translation type="vanished">新しいプロフィールを作成…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9636" />
            <source>Environment profiles</source>
            <translation>環境プロファイル</translation>
        </message>
        <message>
            <source>Profile:</source>
            <translation type="vanished">プロフィール:</translation>
        </message>
        <message>
            <source>New profile name:</source>
            <translation type="vanished">新しいプロファイル名:</translation>
        </message>
        <message>
            <source>Environment profile active: </source>
            <translation type="vanished">環境プロファイルがアクティブです: </translation>
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
            <translation>ガイド付きサンプルがロードされました。 API リクエストを見つけてプレビューを確認し、それを実行するかどうかを選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9822" />
            <source>ZIA credentials not configured. Please go to Settings.</source>
            <translation>ZIA 資格情報が構成されていません。 「設定」に進んでください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9851" />
            <source>ZCC credentials not configured. Please go to Settings.</source>
            <translation>ZCC 資格情報が構成されていません。 「設定」に進んでください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9877" />
            <source>{api_type} credentials not configured. Please go to Settings.</source>
            <translation>{api_type} credentials not configured. Please go to Settings.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9941" />
            <source>OneAPI credentials not configured. Please go to Settings.</source>
            <translation>OneAPI 認証情報が構成されていません。 「設定」に進んでください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9982" />
            <source>No matching API operation was found. Try product and resource names.</source>
            <translation>一致する API 操作が見つかりませんでした。製品名とリソース名を試してください。</translation>
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
            <translation>URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10033" />
            <source>Ask the AI assistant for a request first.</source>
            <translation>まずはAIアシスタントにリクエストを聞いてみましょう。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10036" />
            <source>Review AI request</source>
            <translation>AIリクエストのレビュー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10037" />
            <source>Review the URL, path variables, and parameters in the preview before sending. Send this request now?</source>
            <translation>送信する前に、プレビューで URL、パス変数、パラメーターを確認してください。このリクエストを今すぐ送信しますか?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10060" />
            <location filename="../zscaler_api_client.py" line="10065" />
            <source>Asking configured LLM…</source>
            <translation>設定された LLM を要求しています…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10063" />
            <source>LLM unavailable; using the local catalog assistant.</source>
            <translation>LLM は利用できません。ローカル カタログ アシスタントを使用します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10074" />
            <source>Configure an AI endpoint and model in Settings.</source>
            <translation>[設定] で AI エンドポイントとモデルを構成します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10078" />
            <source>AI endpoint must use HTTP or HTTPS.</source>
            <translation>AI エンドポイントは HTTP または HTTPS を使用する必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10080" />
            <source>External AI is disabled. Enable it explicitly in Settings.</source>
            <translation>外部AIは無効になっています。設定で明示的に有効にします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10082" />
            <source>External AI endpoints must use HTTPS.</source>
            <translation>外部 AI エンドポイントは HTTPS を使用する必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10084" />
            <source>AI question is too long (maximum 2000 characters).</source>
            <translation>AI の質問が長すぎます (最大 2000 文字)。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10113" />
            <location filename="../zscaler_api_client.py" line="10119" />
            <source>Save binary response</source>
            <translation>バイナリ応答を保存する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10114" />
            <source>Binary content cannot be inspected or obfuscated as text. Save the original response only if you trust this endpoint and destination?</source>
            <translation>バイナリ コンテンツをテキストとして検査したり難読化したりすることはできません。このエンドポイントと宛先を信頼できる場合にのみ、元の応答を保存しますか?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10119" />
            <source>All files (*)</source>
            <translation>すべてのファイル (*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10122" />
            <source>Original binary response saved</source>
            <translation>元のバイナリ応答が保存されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10171" />
            <source>Masked response exported</source>
            <translation>マスクされた応答がエクスポートされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10277" />
            <source>Binary content is not included in this preview.</source>
            <translation>このプレビューにはバイナリ コンテンツは含まれません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10279" />
            <location filename="../zscaler_api_client.py" line="10285" />
            <source>Export preview</source>
            <translation>プレビューのエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10280" />
            <source>Original binary export requires a separate confirmation.</source>
            <translation>元のバイナリのエクスポートには別の確認が必要です。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10286" />
            <source>Sensitive fields are masked in every export.</source>
            <translation>機密フィールドはエクスポートのたびにマスクされます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10340" />
            <location filename="../zscaler_api_client.py" line="10349" />
            <location filename="../zscaler_api_client.py" line="10357" />
            <source>Export AI result</source>
            <translation>AI結果のエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10149" />
            <location filename="../zscaler_api_client.py" line="10157" />
            <location filename="../zscaler_api_client.py" line="10349" />
            <location filename="../zscaler_api_client.py" line="10357" />
            <source>No chart data is available to export.</source>
            <translation>エクスポートできるグラフ データがありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10366" />
            <source>AI result exported</source>
            <translation>AI結果のエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10625" />
            <source>No tabular datasets</source>
            <translation>表形式のデータセットはありません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10634" />
            <source>Nodes</source>
            <translation>ノード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10634" />
            <source>Connections</source>
            <translation>接続</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10636" />
            <source>No nodes or connections were found in this response.</source>
            <translation>この応答ではノードまたは接続が見つかりませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10697" />
            <source>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</source>
            <translation>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10714" />
            <source>Raw request body...</source>
            <translation>生のリクエスト本文...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10715" />
            <source>Form fields as JSON or an encoded key=value string...</source>
            <translation>JSON またはエンコードされた key=value 文字列としてのフォーム フィールド...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10716" />
            <source>Optional multipart fields as a JSON object...</source>
            <translation>JSON オブジェクトとしてのオプションのマルチパート フィールド...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10722" />
            <source>Select upload file</source>
            <translation>アップロードファイルを選択</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9474" />
            <location filename="../zscaler_api_client.py" line="10771" />
            <source>Yes</source>
            <translation>はい</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9474" />
            <location filename="../zscaler_api_client.py" line="10771" />
            <source>No</source>
            <translation>いいえ</translation>
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
            <translation>GraphQL 本体は、クエリ文字列を含む JSON オブジェクトである必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10800" />
            <source>Choose operationName because the document contains multiple GraphQL operations.</source>
            <translation>ドキュメントには複数の GraphQL オペレーションが含まれているため、operationName を選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10802" />
            <source>GraphQL operationName does not match a named operation in the query.</source>
            <translation>GraphQL OperationName がクエリ内の名前付きオペレーションと一致しません。</translation>
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
            <translation>文書化されたGraphQLスキーマ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10849" />
            <source>The current Automation Hub page has no executable query example. Open its documentation or use schema introspection.</source>
            <translation>現在の Automation Hub ページには、実行可能なクエリの例がありません。ドキュメントを開くか、スキーマ イントロスペクションを使用してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10863" />
            <source>Loaded documented ZInsights query. Review time ranges, filters, and fields before sending.</source>
            <translation>文書化された ZInsights クエリをロードしました。送信する前に、時間範囲、フィルター、フィールドを確認してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10899" />
            <source>Enter a name before saving the GraphQL query.</source>
            <translation>GraphQL クエリを保存する前に名前を入力します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10903" />
            <location filename="../zscaler_api_client.py" line="10944" />
            <location filename="../zscaler_api_client.py" line="10957" />
            <location filename="../zscaler_api_client.py" line="10976" />
            <source>Secure storage</source>
            <translation>安全なストレージ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10903" />
            <source>The system keychain could not save the GraphQL query.</source>
            <translation>システム キーチェーンは GraphQL クエリを保存できませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10909" />
            <source>GraphQL query saved securely</source>
            <translation>GraphQL クエリは安全に保存されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10915" />
            <source>Saved GraphQL query is unavailable.</source>
            <translation>保存された GraphQL クエリは使用できません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10944" />
            <source>The system keychain could not rename the GraphQL query.</source>
            <translation>システム キーチェーンは GraphQL クエリの名前を変更できませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10957" />
            <source>The system keychain could not delete the GraphQL query.</source>
            <translation>システム キーチェーンは GraphQL クエリを削除できませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10968" />
            <source>GraphQL introspection query prepared. Review the endpoint before sending.</source>
            <translation>GraphQL イントロスペクション クエリが準備されました。送信する前にエンドポイントを確認してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10976" />
            <source>The system keychain could not save the GraphQL schema.</source>
            <translation>システム キーチェーンは GraphQL スキーマを保存できませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10978" />
            <source>GraphQL schema saved securely</source>
            <translation>GraphQL スキーマは安全に保存されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8980" />
            <location filename="../zscaler_api_client.py" line="10983" />
            <source>GraphQL schema</source>
            <translation>GraphQLスキーマ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10983" />
            <source>No saved introspection result exists for this endpoint.</source>
            <translation>このエンドポイントには保存されたイントロスペクション結果が存在しません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11024" />
            <source>{count} GraphQL errors</source>
            <translation>{count} GraphQL errors</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11026" />
            <source>extensions included</source>
            <translation>拡張機能が含まれています</translation>
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
            <translation>URLを入力してください</translation>
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
            <translation>エラー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8538" />
            <source>ZIA · List users</source>
            <translation>ZIA · ユーザーのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8538" />
            <source>List ZIA users with pagination</source>
            <translation>ページネーションを使用して ZIA ユーザーをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8539" />
            <source>ZIA · Find URL categories</source>
            <translation>ZIA · URL カテゴリを検索</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8539" />
            <source>Search ZIA URL categories for social media</source>
            <translation>ソーシャル メディアの ZIA URL カテゴリを検索</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8540" />
            <source>ZIA · Review firewall policies</source>
            <translation>ZIA · ファイアウォール ポリシーを確認する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8540" />
            <source>List ZIA cloud firewall policies</source>
            <translation>ZIA クラウド ファイアウォール ポリシーの一覧表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8541" />
            <source>ZPA · Application segments</source>
            <translation>ZPA・アプリケーションセグメント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8541" />
            <source>List ZPA application segments</source>
            <translation>ZPA アプリケーションセグメントをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8542" />
            <source>ZPA · Connector inventory</source>
            <translation>ZPA・コネクタ在庫</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8542" />
            <source>List ZPA connectors</source>
            <translation>ZPA コネクタのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8543" />
            <source>ZDX · Experience overview</source>
            <translation>ZDX・体験概要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8543" />
            <source>List ZDX devices and experience scores</source>
            <translation>ZDX デバイスとエクスペリエンス スコアの一覧表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8544" />
            <source>ZDX · Active alerts</source>
            <translation>ZDX · アクティブなアラート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8544" />
            <source>List active ZDX alerts with pagination</source>
            <translation>アクティブな ZDX アラートをページネーションで一覧表示する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8545" />
            <source>ZDX · Application monitoring</source>
            <translation>ZDX・アプリケーション監視</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8545" />
            <source>List monitored ZDX applications</source>
            <translation>監視対象の ZDX アプリケーションをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8546" />
            <source>Client Connector · Devices</source>
            <translation>クライアントコネクタ・デバイス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8546" />
            <source>List Client Connector devices</source>
            <translation>クライアントコネクタデバイスをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8547" />
            <source>ZIdentity · Users</source>
            <translation>ZIdentity · ユーザー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8547" />
            <source>List ZIdentity users with pagination</source>
            <translation>ページネーションを使用して ZIdentity ユーザーをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8548" />
            <source>ZIdentity · Groups</source>
            <translation>Zアイデンティティ・グループ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8548" />
            <source>List ZIdentity groups</source>
            <translation>ZIdentity グループをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8549" />
            <source>AI Security · Workloads</source>
            <translation>AI セキュリティ · ワークロード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8549" />
            <source>List AI Security workloads</source>
            <translation>AI セキュリティのワークロードをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8603" />
            <source>ZS API Client</source>
            <translation>ZS APIクライアント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8610" />
            <source>Explore APIs, review changes, and operate safely</source>
            <translation>API を探索し、変更を確認し、安全に運用する</translation>
        </message>
        <message>
            <source>1 · Environment</source>
            <translation type="vanished">1・環境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8616" />
            <source>Select or create a tenant environment profile</source>
            <translation>テナント環境プロファイルの選択または作成</translation>
        </message>
        <message>
            <source>2 · Analyze</source>
            <translation type="vanished">2・分析する</translation>
        </message>
        <message>
            <source>Open dashboards, audits, policy diffs, and response analysis</source>
            <translation type="vanished">オープンなダッシュボード、監査、ポリシーの差分、および応答分析</translation>
        </message>
        <message>
            <source>3 · Change</source>
            <translation type="vanished">3・変更</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8624" />
            <source>Open policy diff and policy-as-code export</source>
            <translation>オープンポリシーの差分とコードとしてのポリシーのエクスポート</translation>
        </message>
        <message>
            <source>Operations Center</source>
            <translation type="vanished">オペレーションセンター</translation>
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
            <translation>設定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8641" />
            <location filename="../zscaler_api_client.py" line="8659" />
            <source>API Explorer</source>
            <translation>APIエクスプローラー</translation>
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
            <translation>製品</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8673" />
            <source>Authenticate with selected API (Ctrl+Shift+A)</source>
            <translation>選択した API で認証します (Ctrl+Shift+A)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8683" />
            <source>🔍 Filter endpoints...</source>
            <translation>🔍 エンドポイントをフィルタリング...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8717" />
            <source>Request Builder</source>
            <translation>リクエストビルダー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8745" />
            <source>Send request (Ctrl+Return)</source>
            <translation>リクエストの送信 (Ctrl+Return)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8749" />
            <source>Cancel</source>
            <translation>キャンセル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8750" />
            <source>Stop before the next page or chain step; the current HTTP request is allowed to finish safely.</source>
            <translation>次のページまたはチェーンステップの前で停止します。現在の HTTP リクエストは安全に終了できます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8754" />
            <source>Copy request as cURL command (Ctrl+Shift+C)</source>
            <translation>リクエストを cURL コマンドとしてコピー (Ctrl+Shift+C)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8760" />
            <source>GraphQL request</source>
            <translation>GraphQLリクエスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8761" />
            <source>Send the request body as a GraphQL query and preserve data, errors, and extensions.</source>
            <translation>リクエスト本文を GraphQL クエリとして送信し、データ、エラー、拡張子を保存します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8765" />
            <source>Fetch all pages</source>
            <translation>すべてのページを取得する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8766" />
            <source>Follow only the pagination parameters documented for the selected read operation.</source>
            <translation>選択した読み取り操作について文書化されているページネーション パラメータのみに従ってください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8768" />
            <source>Page size:</source>
            <translation>ページサイズ:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8772" />
            <source>Maximum pages:</source>
            <translation>最大ページ数:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8780" />
            <source>Saved GraphQL query name</source>
            <translation>保存されたGraphQLクエリ名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8784" />
            <source>Save query</source>
            <translation>クエリの保存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8787" />
            <source>Load query</source>
            <translation>クエリをロードする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8790" />
            <source>Rename query</source>
            <translation>クエリ名の変更</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8793" />
            <source>Delete query</source>
            <translation>クエリの削除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8796" />
            <source>Introspect schema</source>
            <translation>スキーマのイントロスペクト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8799" />
            <source>Load saved schema</source>
            <translation>保存されたスキーマをロードする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8805" />
            <source>Documented ZInsights query…</source>
            <translation>文書化された ZInsights クエリ…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8810" />
            <source>Load documented query</source>
            <translation>文書化されたクエリをロードする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8813" />
            <source>Browse documented schema</source>
            <translation>文書化されたスキーマを参照する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8844" />
            <source>Body type:</source>
            <translation>体型:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8846" />
            <source>JSON</source>
            <translation>JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8847" />
            <source>Raw text</source>
            <translation>生のテキスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8848" />
            <source>Form URL encoded</source>
            <translation>エンコードされたフォーム URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8849" />
            <location filename="../zscaler_api_client.py" line="11153" />
            <source>Multipart file upload</source>
            <translation>マルチパートファイルのアップロード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8857" />
            <source>File field:</source>
            <translation>ファイルフィールド:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8861" />
            <source>Upload file:</source>
            <translation>ファイルをアップロードします:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8864" />
            <source>Select a local file; its path is never saved in history</source>
            <translation>ローカル ファイルを選択します。そのパスは履歴に保存されません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8866" />
            <source>Browse…</source>
            <translation>閲覧…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8880" />
            <source>Extract typed variables from the selected GraphQL operation. Values are inserted into the JSON request body, never into the URL.</source>
            <translation>選択した GraphQL オペレーションから型付き変数を抽出します。値は URL ではなく、JSON リクエスト本文に挿入されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8907" />
            <source>Type</source>
            <translation>種類</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8907" />
            <source>Required</source>
            <translation>必須</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8908" />
            <source>Default</source>
            <translation>デフォルト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <source>JSON value</source>
            <translation>JSON値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8886" />
            <source>Extract variables from query</source>
            <translation>クエリから変数を抽出する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8887" />
            <location filename="../zscaler_api_client.py" line="10791" />
            <location filename="../zscaler_api_client.py" line="11807" />
            <source>No GraphQL variables extracted.</source>
            <translation>GraphQL 変数は抽出されませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8888" />
            <location filename="../zscaler_api_client.py" line="11144" />
            <location filename="../zscaler_api_client.py" line="11194" />
            <source>GraphQL Variables</source>
            <translation>GraphQL 変数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8902" />
            <location filename="../zscaler_api_client.py" line="11812" />
            <source>Select a documented endpoint to inspect its request contract.</source>
            <translation>文書化されたエンドポイントを選択して、そのリクエスト コントラクトを検査します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8907" />
            <source>Location</source>
            <translation>場所</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8907" />
            <location filename="../zscaler_api_client.py" line="11630" />
            <source>Name</source>
            <translation>名前</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8908" />
            <source>Description</source>
            <translation>説明</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8913" />
            <source>API Guide</source>
            <translation>APIガイド</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8927" />
            <source>Dataset:</source>
            <translation>データセット:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8949" />
            <source>Open export</source>
            <translation>エクスポートを開く</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8950" />
            <source>Compare drift</source>
            <translation>ドリフトを比較する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8970" />
            <source>Field</source>
            <translation>フィールド</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9096" />
            <source>Open response export…</source>
            <translation>応答のエクスポートを開きます…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9097" />
            <source>Compare response drift…</source>
            <translation>応答ドリフトを比較…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9154" />
            <source>PAC &amp;Workspace...</source>
            <translation>PAC ワークスペース(&amp;W)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9434" />
            <location filename="../zscaler_api_client.py" line="9448" />
            <source>Required value</source>
            <translation>必要な値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9434" />
            <location filename="../zscaler_api_client.py" line="9448" />
            <source>Optional value</source>
            <translation>オプションの値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9482" />
            <source>body template available</source>
            <translation>本文テンプレートが利用可能</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9482" />
            <source>no body template</source>
            <translation>本文テンプレートなし</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9483" />
            <source>not listed</source>
            <translation>記載されていない</translation>
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
            <translation>URL は手動で編集されました。エンドポイントを再度選択して、文書化されたリクエスト コントラクトを添付します。</translation>
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
            <translation>選択した環境プロファイルは使用できません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9650" />
            <source>Environment profile active: {name}. Sessions and request data were cleared.</source>
            <translation>Environment profile active: {name}. Sessions and request data were cleared.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9694" />
            <source>Write request prepared</source>
            <translation>書き込みリクエストが準備されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9695" />
            <source>The documented write template is ready. Review the API Guide, parameters, and body, then choose Send explicitly.</source>
            <translation>文書化された書き込みテンプレートが完成しました。 API ガイド、パラメーター、本文を確認し、[明示的に送信] を選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9989" />
            <source>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</source>
            <translation>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10144" />
            <source>No tabular response data is available to export.</source>
            <translation>エクスポートできる表形式の応答データはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10294" />
            <location filename="../zscaler_api_client.py" line="10305" />
            <source>Open response export</source>
            <translation>オープンレスポンスのエクスポート</translation>
        </message>
        <message>
            <source>The response export is unavailable, is a symbolic link, or exceeds the configured transfer limit.</source>
            <translation type="vanished">応答のエクスポートが利用できないか、シンボリック リンクであるか、構成された転送制限を超えています。</translation>
        </message>
        <message>
            <source>This is not a supported ZS API response exchange file.</source>
            <translation type="vanished">これは、サポートされている ZS API 応答交換ファイルではありません。</translation>
        </message>
        <message>
            <source>The response exchange file is incomplete.</source>
            <translation type="vanished">応答交換ファイルが不完全です。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10328" />
            <source>Response export opened locally; no API request was sent.</source>
            <translation>応答のエクスポートがローカルで開かれました。 API リクエストは送信されませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10333" />
            <location filename="../zscaler_api_client.py" line="10335" />
            <source>Response drift comparison</source>
            <translation>応答ドリフト比較</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10333" />
            <source>Binary responses cannot be structurally compared. Export and inspect the original file with an appropriate tool.</source>
            <translation>二値応答は構造的に比較できません。適切なツールを使用して元のファイルをエクスポートして検査します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10335" />
            <source>Send a request or open a response export before comparing drift.</source>
            <translation>ドリフトを比較する前に、リクエストを送信するか、レスポンスのエクスポートを開きます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11039" />
            <location filename="../zscaler_api_client.py" line="11556" />
            <source>Read only</source>
            <translation>読み取り専用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11039" />
            <location filename="../zscaler_api_client.py" line="11556" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>読み取り専用モードは書き込みリクエストをブロックします。続行するには、オペレーション センターでローカルの役割を変更します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11064" />
            <source>Missing Path Variables</source>
            <translation>パス変数が欠落しています</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11065" />
            <source>Enter values for: {names}</source>
            <translation>Enter values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11075" />
            <source>Configure a base URL for the selected product before sending a relative API path.</source>
            <translation>相対 API パスを送信する前に、選択した製品のベース URL を構成します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11129" />
            <source>Missing documented parameters</source>
            <translation>文書化されたパラメータが欠落している</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11130" />
            <source>Enter required values for: {names}</source>
            <translation>Enter required values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11153" />
            <source>Select an available local file before sending.</source>
            <translation>送信する前に、利用可能なローカル ファイルを選択してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11158" />
            <source>Multipart fields must be a JSON object: {error}</source>
            <translation>Multipart fields must be a JSON object: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11161" />
            <source>Multipart fields must be a JSON object.</source>
            <translation>マルチパート フィールドは JSON オブジェクトである必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11200" />
            <source>Sending request...</source>
            <translation>リクエスト送信中...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11231" />
            <source>Pagination unavailable</source>
            <translation>ページネーションは使用できません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11231" />
            <source>Select a documented paginated GET operation before fetching all pages.</source>
            <translation>すべてのページを取得する前に、文書化されたページ分割された GET 操作を選択してください。</translation>
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
            <translation>キャンセルがリクエストされました。現在の HTTP リクエストが安全に終了するのを待っています…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11275" />
            <source>Request cancelled before completion</source>
            <translation>完了前にリクエストがキャンセルされました</translation>
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
            <translation>ZDXが正常に認証されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11423" />
            <source>ZCC authenticated successfully</source>
            <translation>ZCCが正常に認証されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11427" />
            <source>ZIdentity authenticated successfully</source>
            <translation>ZIdentityが正常に認証されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11431" />
            <source>ZTW authenticated successfully</source>
            <translation>ZTWの認証に成功しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11435" />
            <source>ZWA authenticated successfully</source>
            <translation>ZWAの認証に成功しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11439" />
            <source>EASM authenticated successfully</source>
            <translation>EASMが正常に認証されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11443" />
            <source>OneAPI authenticated successfully</source>
            <translation>OneAPI が正常に認証されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11448" />
            <source>Authenticated successfully</source>
            <translation>認証に成功しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11548" />
            <source>Batch validation failed: </source>
            <translation>バッチ検証が失敗しました: </translation>
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
            <translation>バッチを確認する</translation>
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
            <translation>リクエスト履歴</translation>
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
            <translation>このリクエストは別の環境に属しています。環境プロファイルをロードする前に、その環境プロファイルをアクティブ化します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11686" />
            <location filename="../zscaler_api_client.py" line="11705" />
            <source>Multipart request loaded. Select the local file again before sending.</source>
            <translation>マルチパートリクエストがロードされました。送信する前にローカル ファイルを再度選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11777" />
            <source>Masked cURL command copied to clipboard</source>
            <translation>マスクされた cURL コマンドがクリップボードにコピーされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11782" />
            <source>Binary response</source>
            <translation>二値応答</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11782" />
            <source>Binary response content is not copied to the clipboard. Use Export to save the original file.</source>
            <translation>バイナリ応答の内容はクリップボードにコピーされません。エクスポートを使用して元のファイルを保存します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11791" />
            <source>Masked response copied to clipboard</source>
            <translation>マスクされた応答がクリップボードにコピーされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11936" />
            <source>The application needs to restart to apply the new language.

Restart now?</source>
            <translation>新しい言語を適用するには、アプリケーションを再起動する必要があります。

今すぐ再起動しますか？</translation>
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
            <translation>リクエスト成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11406" />
            <source>ZIA authenticated successfully</source>
            <translation>ZIA が正常に認証されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11415" />
            <source>ZPA authenticated successfully</source>
            <translation>ZPA が正常に認証されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11481" />
            <location filename="../zscaler_api_client.py" line="11487" />
            <source>Request failed</source>
            <translation>リクエスト失敗</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11548" />
            <location filename="../zscaler_api_client.py" line="11551" />
            <location filename="../zscaler_api_client.py" line="11605" />
            <source>Batch</source>
            <translation>バッチ</translation>
        </message>
        <message>
            <source>Processing {count} items...</source>
            <translation type="vanished">{count}件を処理中...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11707" />
            <source>Request loaded from history</source>
            <translation>履歴からロードされたリクエスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11774" />
            <source>No URL to copy</source>
            <translation>コピーする URL がありません</translation>
        </message>
        <message>
            <source>cURL command copied to clipboard</source>
            <translation type="vanished">cURL コマンドがクリップボードにコピーされました</translation>
        </message>
        <message>
            <source>Response copied to clipboard</source>
            <translation type="vanished">回答がクリップボードにコピーされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11793" />
            <source>No response to copy</source>
            <translation>コピーしても反応なし</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11829" />
            <source>Request cleared</source>
            <translation>リクエストはクリアされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11842" />
            <location filename="../zscaler_api_client.py" line="11893" />
            <source>Missing Credentials</source>
            <translation>資格情報がありません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11843" />
            <source>Please configure ZIA credentials in Settings first.</source>
            <translation>まず設定で ZIA 資格情報を構成してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11865" />
            <source>ZIA auth request prepared. Click Send to authenticate.</source>
            <translation>ZIA 認証リクエストが準備されました。 「送信」をクリックして認証します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11894" />
            <source>Please configure ZPA credentials in Settings first.</source>
            <translation>まず設定で ZPA 資格情報を構成してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11907" />
            <source>ZPA auth request prepared. Click Send to authenticate.</source>
            <translation>ZPA 認証リクエストが準備されました。 「送信」をクリックして認証します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11912" />
            <source>All sessions cleared</source>
            <translation>すべてのセッションがクリアされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11935" />
            <source>Language Changed</source>
            <translation>言語変更</translation>
        </message>
        <message>
            <source>Please restart the application to apply the new language.</source>
            <translation type="vanished">新しい言語を適用するにはアプリケーションを再起動してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11984" />
            <source>Checking for updates...</source>
            <translation>更新を確認中...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12057" />
            <source>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</source>
            <translation>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12061" />
            <source>Update Available</source>
            <translation>更新が利用可能</translation>
        </message>
        <message>
            <source>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</source>
            <translation type="vanished">&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12083" />
            <source>Update available: v{version}</source>
            <translation>更新があります: v{version}</translation>
        </message>
        <message>
            <source>No Updates</source>
            <translation type="vanished">更新なし</translation>
        </message>
        <message>
            <source>&lt;p&gt;You are running the latest version.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Version:&lt;/b&gt; {version}&lt;/p&gt;</source>
            <translation type="vanished">&lt;p&gt;You are running the latest version.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Version:&lt;/b&gt; {version}&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12086" />
            <source>You are up to date (v{version})</source>
            <translation>最新バージョンです (v{version})</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12091" />
            <source>Update Check Failed</source>
            <translation>更新確認に失敗</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12092" />
            <source>Could not check for updates:
{error}</source>
            <translation>更新を確認できませんでした:
{error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12094" />
            <source>Update check failed</source>
            <translation>更新の確認に失敗しました</translation>
        </message>
        <message>
            <source>&amp;About</source>
            <translation type="vanished">について(&amp;A)</translation>
        </message>
        <message>
            <source>Zscaler API &amp;Documentation</source>
            <translation type="vanished">Zscaler API ドキュメント(&amp;D)</translation>
        </message>
        <message>
            <source>About ZS API Client</source>
            <translation type="vanished">Zscaler API クライアントについて</translation>
        </message>
        <message>
            <source>ZDX (Zscaler Digital Experience)</source>
            <translation type="vanished">ZDX (ゼットスケーラー デジタル エクスペリエンス)</translation>
        </message>
        <message>
            <source>ZCC (Client Connector)</source>
            <translation type="vanished">ZCC (クライアントコネクタ)</translation>
        </message>
        <message>
            <source>Key ID:</source>
            <translation type="vanished">キーID:</translation>
        </message>
        <message>
            <source>Key Secret:</source>
            <translation type="vanished">キーシークレット:</translation>
        </message>
        <message>
            <source>Welcome to ZS API Client</source>
            <translation type="vanished">ZS API Clientへようこそ</translation>
        </message>
        <message>
            <source>Supported APIs</source>
            <translation type="vanished">対応API</translation>
        </message>
        <message>
            <source>Getting Started</source>
            <translation type="vanished">はじめに</translation>
        </message>
        <message>
            <source>Tips for Advanced Users</source>
            <translation type="vanished">上級ユーザー向けのヒント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9051" />
            <source>Documentation</source>
            <translation>ドキュメント</translation>
        </message>
        <message>
            <source>Show this dialog on startup</source>
            <translation type="vanished">起動時にこのダイアログを表示</translation>
        </message>
        <message>
            <source>Open Settings</source>
            <translation type="vanished">設定を開く</translation>
        </message>
        <message>
            <source>Get Started</source>
            <translation type="vanished">開始</translation>
        </message>
        <message>
            <source>Check for updates on startup:</source>
            <translation type="vanished">起動時に更新を確認:</translation>
        </message>
    </context>
    <context>
        <name>OperationsDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="6199" />
            <source>Operations Center</source>
            <translation>オペレーションセンター</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Requests</source>
            <translation>リクエスト</translation>
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
            <translation>監査の整合性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Active environment</source>
            <translation>アクティブな環境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6234" />
            <source>Recent request outcomes</source>
            <translation>最近のリクエストの結果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6239" />
            <location filename="../zscaler_api_client.py" line="6317" />
            <location filename="../zscaler_api_client.py" line="6321" />
            <location filename="../zscaler_api_client.py" line="6361" />
            <location filename="../zscaler_api_client.py" line="6417" />
            <location filename="../zscaler_api_client.py" line="6434" />
            <source>Time</source>
            <translation>時間</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6239" />
            <source>Activity</source>
            <translation>アクティビティ</translation>
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
            <translation>ステータス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6240" />
            <source>Recent activity</source>
            <translation>最近の活動</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6243" />
            <source>Refresh dashboard</source>
            <translation>ダッシュボードを更新する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6247" />
            <source>Dashboard</source>
            <translation>ダッシュボード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6250" />
            <source>Previous policy JSON</source>
            <translation>以前のポリシー JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6251" />
            <source>Proposed policy JSON</source>
            <translation>提案されたポリシー JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6258" />
            <source>Compare policies</source>
            <translation>ポリシーを比較する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6260" />
            <source>Export policy as JSON</source>
            <translation>ポリシーを JSON としてエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6261" />
            <source>Export policy as YAML</source>
            <translation>ポリシーを YAML としてエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6262" />
            <source>Run compliance checks</source>
            <translation>コンプライアンスチェックを実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <location filename="../zscaler_api_client.py" line="7655" />
            <source>Policy diff</source>
            <translation>ポリシーの差分</translation>
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
            <translation>ポリシーのシミュレート (ローカルのみ)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6273" />
            <location filename="../zscaler_api_client.py" line="7703" />
            <source>Simulation</source>
            <translation>シミュレーション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6276" />
            <source>CSV data, e.g. name,email
Ada,ada@example.com</source>
            <translation>CSV データ、例:名前、メールアドレス
エイダ、ada@example.com</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6279" />
            <source>Required columns (comma separated)</source>
            <translation>必須の列 (カンマ区切り)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6281" />
            <source>Validate bulk import</source>
            <translation>一括インポートを検証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6282" />
            <source>Bulk operations</source>
            <translation>一括操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6285" />
            <source>Administrator</source>
            <translation>管理者</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6285" />
            <source>Analyst</source>
            <translation>アナリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6285" />
            <location filename="../zscaler_api_client.py" line="7438" />
            <source>Read only</source>
            <translation>読み取り専用</translation>
        </message>
        <message>
            <source>Optional local automation script; never runs without approval</source>
            <translation type="vanished">オプションのローカル自動化スクリプト。承認なしに実行することはありません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Local role:</source>
            <translation>ローカルの役割:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Alert threshold (errors):</source>
            <translation>アラートしきい値 (エラー):</translation>
        </message>
        <message>
            <source>Webhook endpoint (disabled until approved):</source>
            <translation type="vanished">Webhook エンドポイント (承認されるまで無効):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Local automation:</source>
            <translation>ローカルオートメーション:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6293" />
            <source>Save governance settings</source>
            <translation>ガバナンス設定を保存する</translation>
        </message>
        <message>
            <source>Read-only mode blocks write requests. Webhooks and local automation are saved only; this app will ask before any execution.</source>
            <translation type="vanished">読み取り専用モードは書き込みリクエストをブロックします。 Webhook とローカル オートメーションは保存のみです。このアプリは実行前に質問します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6295" />
            <location filename="../zscaler_api_client.py" line="7712" />
            <location filename="../zscaler_api_client.py" line="7715" />
            <location filename="../zscaler_api_client.py" line="7718" />
            <location filename="../zscaler_api_client.py" line="7726" />
            <source>Governance</source>
            <translation>ガバナンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6298" />
            <source>Official integrations are optional. Credentials remain in the system keychain and no command runs automatically.</source>
            <translation>公式統合はオプションです。資格情報はシステム キーチェーンに残り、コマンドは自動的に実行されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6299" />
            <source>Integration</source>
            <translation>統合</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6299" />
            <source>Recommended use</source>
            <translation>推奨用途</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6302" />
            <source>Check local integrations</source>
            <translation>ローカル統合を確認する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6303" />
            <source>Prepare Terraform import</source>
            <translation>Terraform インポートの準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6304" />
            <source>Prepare MCP connection</source>
            <translation>MCP接続の準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6305" />
            <source>Prepare SDK configuration</source>
            <translation>SDK設定の準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6306" />
            <source>Send masked webhook test</source>
            <translation>マスクされた Webhook テストを送信する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6308" />
            <source>Copy reviewed command</source>
            <translation>レビューしたコマンドをコピーする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6318" />
            <location filename="../zscaler_api_client.py" line="7765" />
            <location filename="../zscaler_api_client.py" line="7785" />
            <source>Integrations</source>
            <translation>統合</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6321" />
            <source>Event</source>
            <translation>イベント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6317" />
            <location filename="../zscaler_api_client.py" line="6321" />
            <location filename="../zscaler_api_client.py" line="6334" />
            <source>Details</source>
            <translation>詳細</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6323" />
            <source>Refresh audit trail</source>
            <translation>監査証跡を更新する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6324" />
            <location filename="../zscaler_api_client.py" line="6519" />
            <source>Schedule report</source>
            <translation>スケジュールレポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6325" />
            <source>Create redacted support bundle</source>
            <translation>編集されたサポート バンドルを作成する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6326" />
            <source>Audit &amp; automation</source>
            <translation>監査と自動化</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6329" />
            <source>Local security posture uses redacted request history and audit integrity. It is an operational signal, not a tenant security assessment.</source>
            <translation>ローカルのセキュリティ体制では、編集されたリクエスト履歴と監査の整合性が使用されます。これは運用上のシグナルであり、テナントのセキュリティ評価ではありません。</translation>
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
            <translation>重大度</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6334" />
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Finding</source>
            <translation>見つける</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6335" />
            <source>Refresh security posture</source>
            <translation>セキュリティ体制を刷新する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6336" />
            <source>Security posture</source>
            <translation>セキュリティ体制</translation>
        </message>
        <message>
            <source>Build a redacted local investigation timeline. Prepared chains never send API requests automatically.</source>
            <translation type="vanished">編集された現地調査のタイムラインを作成します。準備されたチェーンが API リクエストを自動的に送信することはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6351" />
            <source>Investigation:</source>
            <translation>調査:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6352" />
            <source>API failure investigation</source>
            <translation>API障害調査</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6352" />
            <source>Change activity review</source>
            <translation>変更アクティビティのレビュー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6352" />
            <source>Slow response investigation</source>
            <translation>応答が遅い調査</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6353" />
            <source>Prepare investigation chain</source>
            <translation>調査チェーンを準備する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6361" />
            <location filename="../zscaler_api_client.py" line="6373" />
            <source>Source</source>
            <translation>ソース</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6342" />
            <location filename="../zscaler_api_client.py" line="6361" />
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Evidence</source>
            <translation>証拠</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6204" />
            <source>Data scope:</source>
            <translation>データ範囲:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6207" />
            <source>Active environment: {name}</source>
            <translation>Active environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6211" />
            <source>All environments (cross-tenant overview)</source>
            <translation>すべての環境 (テナント間の概要)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6213" />
            <source>Analytics are tenant-isolated by default. Cross-tenant scope is explicit and available in Advanced mode.</source>
            <translation>分析はデフォルトでテナントごとに分離されます。クロステナント スコープは明示的であり、詳細モードで使用できます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Open alerts</source>
            <translation>オープンアラート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6237" />
            <source>Recent request latency (ms)</source>
            <translation>最近のリクエストのレイテンシー (ミリ秒)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6239" />
            <location filename="../zscaler_api_client.py" line="6321" />
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Environment</source>
            <translation>環境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6244" />
            <source>Auto-refresh local signals</source>
            <translation>ローカル信号の自動リフレッシュ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6245" />
            <source>Every 30 seconds</source>
            <translation>30秒ごと</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6245" />
            <source>Every minute</source>
            <translation>毎分</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6245" />
            <source>Every 5 minutes</source>
            <translation>5分ごと</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6254" />
            <source>Policy rule overview</source>
            <translation>ポリシールールの概要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <location filename="../zscaler_api_client.py" line="6257" />
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Rule</source>
            <translation>ルール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Action</source>
            <translation>アクション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <source>Conditions</source>
            <translation>条件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <source>State</source>
            <translation>州</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6257" />
            <source>Best-practice finding</source>
            <translation>ベストプラクティスの発見</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Order</source>
            <translation>注文</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Decision</source>
            <translation>決定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6289" />
            <source>Show webhook endpoint</source>
            <translation>Webhook エンドポイントを表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6291" />
            <source>Absolute path to a reviewed local Python automation</source>
            <translation>レビュー済みのローカル Python オートメーションへの絶対パス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Webhook endpoint (stored in system keychain):</source>
            <translation>Webhook エンドポイント (システム キーチェーンに保存):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6294" />
            <source>Read-only mode blocks write requests and local automation. Every webhook or local automation execution requires explicit approval.</source>
            <translation>読み取り専用モードでは、書き込みリクエストとローカル オートメーションがブロックされます。すべての Webhook またはローカル オートメーションの実行には明示的な承認が必要です。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6307" />
            <source>Run reviewed local automation</source>
            <translation>レビューされたローカルオートメーションを実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6309" />
            <source>Send current masked alerts</source>
            <translation>現在のマスクされたアラートを送信する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6316" />
            <source>Webhook delivery history</source>
            <translation>Webhook配信履歴</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6317" />
            <source>Delivery</source>
            <translation>配送</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6339" />
            <source>Local alerts evaluate retained, redacted request history only. They do not monitor the tenant in real time or send data externally.</source>
            <translation>ローカル アラートは、保持され編集されたリクエスト履歴のみを評価します。テナントをリアルタイムで監視したり、データを外部に送信したりすることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6342" />
            <source>Alert</source>
            <translation>アラート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6342" />
            <source>Count</source>
            <translation>カウント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6343" />
            <source>Refresh local alerts</source>
            <translation>ローカルアラートを更新する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6344" />
            <source>Copy masked alert summary</source>
            <translation>マスクされたアラートの概要をコピーする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6345" />
            <source>Export alerts as JSON</source>
            <translation>アラートをJSONとしてエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6346" />
            <source>Export alerts as Markdown</source>
            <translation>アラートをマークダウンとしてエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6347" />
            <source>Alert Center</source>
            <translation>アラートセンター</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6360" />
            <source>Security investigation evidence map</source>
            <translation>セキュリティ調査証拠マップ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6381" />
            <source>Refresh investigation</source>
            <translation>調査を更新する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6382" />
            <location filename="../zscaler_api_client.py" line="6856" />
            <source>Export incident evidence</source>
            <translation>インシデントの証拠をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6384" />
            <source>Incident investigation</source>
            <translation>事件調査</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6461" />
            <source>Create a local review from Policy diff. Approval records intent only; no policy, Terraform, or Git change is applied automatically.</source>
            <translation>ポリシーの差分からローカル レビューを作成します。承認は意図のみを記録します。ポリシー、Terraform、Git の変更は自動的には適用されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Change ticket or reference</source>
            <translation>チケットまたはリファレンスの変更</translation>
        </message>
        <message>
            <source>Reviewer name</source>
            <translation type="vanished">査読者名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Reference:</source>
            <translation>参考：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Reviewer:</source>
            <translation>査読者:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6467" />
            <source>Prepare change review</source>
            <translation>変更レビューの準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6468" />
            <source>Record local approval</source>
            <translation>ローカル承認を記録する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6469" />
            <location filename="../zscaler_api_client.py" line="7162" />
            <source>Export Git review</source>
            <translation>Git レビューのエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6470" />
            <location filename="../zscaler_api_client.py" line="7158" />
            <source>Export rollback plan</source>
            <translation>ロールバック計画のエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <location filename="../zscaler_api_client.py" line="7122" />
            <location filename="../zscaler_api_client.py" line="7144" />
            <location filename="../zscaler_api_client.py" line="7147" />
            <location filename="../zscaler_api_client.py" line="7156" />
            <source>Change control</source>
            <translation>変更管理</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6499" />
            <source>Generate local, redacted reports for leadership, SOC, or operations. Reports contain no credentials and are not sent automatically.</source>
            <translation>リーダーシップ、SOC、または運用に関するローカルの編集済みレポートを生成します。レポートには認証情報が含まれていないため、自動的には送信されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6500" />
            <source>Report type:</source>
            <translation>レポートの種類:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6501" />
            <location filename="../zscaler_api_client.py" line="7299" />
            <location filename="../zscaler_api_client.py" line="7322" />
            <location filename="../zscaler_api_client.py" line="7929" />
            <location filename="../zscaler_api_client.py" line="8030" />
            <source>CISO security summary</source>
            <translation>CISO セキュリティの概要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6501" />
            <location filename="../zscaler_api_client.py" line="7299" />
            <location filename="../zscaler_api_client.py" line="7322" />
            <location filename="../zscaler_api_client.py" line="7929" />
            <source>SOC investigation summary</source>
            <translation>SOC調査の概要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6501" />
            <location filename="../zscaler_api_client.py" line="7299" />
            <location filename="../zscaler_api_client.py" line="7322" />
            <location filename="../zscaler_api_client.py" line="7929" />
            <source>Operations health summary</source>
            <translation>運用状況の概要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6502" />
            <source>Generate report</source>
            <translation>レポートの生成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6504" />
            <source>Security posture report artwork</source>
            <translation>セキュリティ体制レポートのアートワーク</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6507" />
            <location filename="../zscaler_api_client.py" line="7365" />
            <source>Export report as Markdown</source>
            <translation>レポートをマークダウンとしてエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6508" />
            <location filename="../zscaler_api_client.py" line="7359" />
            <source>Export report as JSON</source>
            <translation>レポートをJSONとしてエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6509" />
            <location filename="../zscaler_api_client.py" line="7362" />
            <source>Export visual report as HTML</source>
            <translation>ビジュアルレポートをHTMLとしてエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6510" />
            <source>Scheduled reports</source>
            <translation>スケジュールされたレポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Name</source>
            <translation>名前</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Type</source>
            <translation>種類</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Cadence</source>
            <translation>ケイデンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Next run</source>
            <translation>次の実行</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Mode</source>
            <translation>モード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6520" />
            <source>Run selected now</source>
            <translation>選択したものを今すぐ実行</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6521" />
            <source>Enable or pause</source>
            <translation>有効化または一時停止</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6522" />
            <source>Remove schedule</source>
            <translation>スケジュールを削除する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6523" />
            <source>Refresh schedules</source>
            <translation>スケジュールを更新する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Reports</source>
            <translation>レポート</translation>
        </message>
        <message>
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and every run requires approval.</source>
            <translation type="vanished">アクティブな認証された環境に対してレビューされたシーケンスを実行します。チェーンは 20 ステップに制限されており、選択した製品ホスト上に留まり、実行するたびに承認が必要です。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6529" />
            <source>Chain JSON</source>
            <translation>チェーンJSON</translation>
        </message>
        <message>
            <source>A JSON list of API requests. Relative paths use the active product host.</source>
            <translation type="vanished">API リクエストの JSON リスト。相対パスでは、アクティブな製品ホストが使用されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6537" />
            <source>Stop after the first failed step</source>
            <translation>最初に失敗したステップの後に停止する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6538" />
            <source>Validate chain</source>
            <translation>チェーンの検証</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6539" />
            <location filename="../zscaler_api_client.py" line="7444" />
            <source>Run approved chain</source>
            <translation>承認されたチェーンを実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6540" />
            <source>Cancel chain</source>
            <translation>キャンセルチェーン</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6541" />
            <location filename="../zscaler_api_client.py" line="7516" />
            <source>Export masked chain results</source>
            <translation>マスクされたチェーン結果をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6542" />
            <location filename="../zscaler_api_client.py" line="7434" />
            <location filename="../zscaler_api_client.py" line="7440" />
            <location filename="../zscaler_api_client.py" line="7511" />
            <location filename="../zscaler_api_client.py" line="7515" />
            <source>API chains</source>
            <translation>APIチェーン</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6545" />
            <source>Build a local digital twin of policy order. It explains decisions, highlights overlap and shadowing, estimates change blast radius, and never applies a policy.</source>
            <translation>政策秩序のローカルデジタルツインを構築します。決定事項を説明し、オーバーラップとシャドウイングを強調表示し、爆発半径の変化を推定し、ポリシーを適用することはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6547" />
            <source>Policy rules JSON or an object containing a rules list</source>
            <translation>ポリシールール JSON またはルールリストを含むオブジェクト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6548" />
            <source>Analyze policy twin</source>
            <translation>ポリシーツインを分析する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6549" />
            <location filename="../zscaler_api_client.py" line="7600" />
            <source>Export twin evidence</source>
            <translation>双子の証拠をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6550" />
            <source>Load proposed policy</source>
            <translation>提案されたポリシーをロードする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6551" />
            <source>Test context:</source>
            <translation>テストコンテキスト:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6551" />
            <source>Request context JSON</source>
            <translation>リクエストコンテキストJSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6552" />
            <source>Explain decision</source>
            <translation>決定の説明</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Rules</source>
            <translation>ルール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Conflicts</source>
            <translation>紛争</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Shadowed</source>
            <translation>影がかかった</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Blast radius</source>
            <translation>爆発範囲</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6558" />
            <source>Policy order and conflict graph</source>
            <translation>ポリシーの順序と競合のグラフ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Earlier rule</source>
            <translation>以前のルール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Later rule</source>
            <translation>後のルール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <location filename="../zscaler_api_client.py" line="6378" />
            <location filename="../zscaler_api_client.py" line="6399" />
            <location filename="../zscaler_api_client.py" line="6413" />
            <location filename="../zscaler_api_client.py" line="6437" />
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Explanation</source>
            <translation>説明</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6236" />
            <location filename="../zscaler_api_client.py" line="6389" />
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Latency</source>
            <translation>レイテンシー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6350" />
            <source>Correlate retained local activity with every object in the current masked REST or GraphQL response. Paths are investigation hypotheses, never proof of compromise, and prepared chains never run automatically.</source>
            <translation>保持されているローカル アクティビティを、現在のマスクされた REST または GraphQL 応答内のすべてのオブジェクトと関連付けます。パスは調査の仮説であり、決して侵害の証拠ではなく、準備されたチェーンが自動的に実行されることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6354" />
            <source>Include current API/GraphQL response</source>
            <translation>現在の API/GraphQL レスポンスを含める</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6355" />
            <source>Correlate entities</source>
            <translation>エンティティを関連付ける</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6362" />
            <source>Evidence timeline</source>
            <translation>証拠のタイムライン</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>Entities</source>
            <translation>エンティティ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>Relationships</source>
            <translation>人間関係</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>Potential paths</source>
            <translation>潜在的な経路</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>High-risk entities</source>
            <translation>高リスクの実体</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6370" />
            <source>Filter entities:</source>
            <translation>エンティティをフィルタリングします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6370" />
            <source>Name, type, risk, or evidence source</source>
            <translation>名前、種類、リスク、または証拠源</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6371" />
            <source>SOC entity and potential attack-path graph</source>
            <translation>SOC エンティティと潜在的な攻撃パスのグラフ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6372" />
            <location filename="../zscaler_api_client.py" line="6802" />
            <source>Select an entity to inspect its local evidence.</source>
            <translation>ローカル証拠を検査するエンティティを選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <source>Target</source>
            <translation>ターゲット</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <source>Hops</source>
            <translation>ホップ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6374" />
            <source>Entity graph</source>
            <translation>エンティティグラフ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6377" />
            <source>Explainable signals are derived only from retained local evidence and the selected response. Validate them against authoritative product telemetry.</source>
            <translation>説明可能なシグナルは、保持されているローカル証拠と選択された応答からのみ導き出されます。信頼できる製品テレメトリに対してそれらを検証します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6378" />
            <source>Signal</source>
            <translation>信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6378" />
            <source>Entity</source>
            <translation>エンティティ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>Correlated signals</source>
            <translation>相関信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6383" />
            <location filename="../zscaler_api_client.py" line="6865" />
            <source>Export entity graph</source>
            <translation>エンティティグラフのエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <source>Trace observed digital experience from user and device through network and service edge to the application. The parser consumes the complete current REST or GraphQL response, marks missing stages explicitly, and never queries the tenant automatically.</source>
            <translation>ユーザーとデバイスからネットワークとサービス エッジを介してアプリケーションに至るまで、観察されたデジタル エクスペリエンスを追跡します。パーサーは現在の REST または GraphQL 応答を完全に消費し、欠落しているステージを明示的にマークし、テナントに自動的にクエリを実行することはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6389" />
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Experience score</source>
            <translation>経験値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6389" />
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Packet loss</source>
            <translation>パケットロス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6389" />
            <source>Journey issues</source>
            <translation>旅の問題</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6393" />
            <source>Observed user-to-application experience journey</source>
            <translation>観察されたユーザーからアプリケーションへのエクスペリエンス ジャーニー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6396" />
            <source>Trend metric:</source>
            <translation>トレンド指標:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Observed value</source>
            <translation>観測値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6399" />
            <source>Stage</source>
            <translation>ステージ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6399" />
            <source>Metric</source>
            <translation>メトリック</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6401" />
            <source>Analyze current experience response</source>
            <translation>現在のエクスペリエンスの反応を分析する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6402" />
            <location filename="../zscaler_api_client.py" line="6930" />
            <source>Export masked journey</source>
            <translation>マスクされたジャーニーをエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6403" />
            <source>Experience journey</source>
            <translation>体験の旅</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6421" />
            <source>Build and test explainable detections against retained local request history. Rules use a bounded declarative grammar—no Python, eval, tenant writes, network calls, or automatic remediation.</source>
            <translation>保持されているローカルリクエスト履歴に対して説明可能な検出を構築してテストします。ルールでは境界付きの宣言文法が使用され、Python、eval、テナント書き込み、ネットワーク呼び出し、自動修復は使用されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6422" />
            <source>Template:</source>
            <translation>テンプレート:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Server errors</source>
            <translation>サーバーエラー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Rate-limit responses</source>
            <translation>レート制限応答</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>High request latency</source>
            <translation>リクエストのレイテンシが高い</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Write activity</source>
            <translation>書き込みアクティビティ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Authentication failures</source>
            <translation>認証の失敗</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Anomaly sensitivity:</source>
            <translation>異常感度:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Relaxed</source>
            <translation>リラックスした</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Balanced</source>
            <translation>バランスの取れた</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Sensitive</source>
            <translation>敏感</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6427" />
            <source>Declarative detection rule JSON</source>
            <translation>宣言型検出ルール JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6428" />
            <source>Validate rule</source>
            <translation>ルールの検証</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6429" />
            <source>Run local detection</source>
            <translation>ローカル検出を実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6430" />
            <source>Analyze adaptive anomalies</source>
            <translation>適応異常を分析する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6431" />
            <location filename="../zscaler_api_client.py" line="7040" />
            <source>Export masked detection evidence</source>
            <translation>マスクされた検出証拠をエクスポートする</translation>
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
            <translation>エンドポイント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6437" />
            <source>Observed</source>
            <translation>観察された</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6438" />
            <source>Detection lab</source>
            <translation>検出ラボ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6475" />
            <source>Continuously evaluate a transparent local evidence baseline. Framework mappings are navigational aids—not certification—and no tenant query or remediation runs automatically.</source>
            <translation>透明性のあるローカル証拠ベースラインを継続的に評価します。フレームワーク マッピングは、認証ではなくナビゲーション補助であり、テナントのクエリや修復が自動的に実行されることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6476" />
            <source>Framework view:</source>
            <translation>フレームワークビュー:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6477" />
            <source>All local controls</source>
            <translation>すべてのローカルコントロール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6477" />
            <source>NIST CSF 2.0 functions</source>
            <translation>NIST CSF 2.0 の機能</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6477" />
            <source>CISA Zero Trust pillars</source>
            <translation>CISA ゼロトラストの柱</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6478" />
            <source>Include proposed policy from Policy diff</source>
            <translation>Policy diff から提案されたポリシーを含めます</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6479" />
            <source>Evaluate now</source>
            <translation>今すぐ評価してください</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7334" />
            <source>Assurance score</source>
            <translation>保証スコア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Passed</source>
            <translation>合格</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7232" />
            <source>Not evaluated</source>
            <translation>評価されていない</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <source>Evidence coverage</source>
            <translation>証拠の網羅性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Control</source>
            <translation>制御</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Control objective</source>
            <translation>制御目標</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Framework mapping</source>
            <translation>フレームワークマッピング</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Recommendation</source>
            <translation>おすすめ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6488" />
            <source>Leadership narrative</source>
            <translation>リーダーシップの物語</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6457" />
            <location filename="../zscaler_api_client.py" line="6490" />
            <source>Score</source>
            <translation>スコア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6310" />
            <source>JSON Lines (SIEM/SOAR)</source>
            <translation>JSON 行 (SIEM/SOAR)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6311" />
            <location filename="../zscaler_api_client.py" line="7772" />
            <source>Export masked security events</source>
            <translation>マスクされたセキュリティ イベントをエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6312" />
            <location filename="../zscaler_api_client.py" line="7778" />
            <source>Export read-only MCP manifest</source>
            <translation>読み取り専用の MCP マニフェストをエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6313" />
            <location filename="../zscaler_api_client.py" line="7786" />
            <source>Export Terraform review handoff</source>
            <translation>Terraform レビューのハンドオフのエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6406" />
            <source>Inspect the complete current REST or GraphQL response for explicit internet exposure, vulnerability severity and broad or write-capable access. Findings are local hypotheses and deception suggestions are never deployed automatically.</source>
            <translation>現在の完全な REST または GraphQL 応答を検査して、明示的なインターネットへの露出、脆弱性の重大度、および広範なアクセスまたは書き込み可能なアクセスを確認します。調査結果はローカルな仮説であり、欺瞞の提案が自動的に展開されることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Exposure signals</source>
            <translation>露出信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>High-risk assets</source>
            <translation>高リスク資産</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Access findings</source>
            <translation>調査結果にアクセスする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Broad privileges</source>
            <translation>幅広い特権</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6412" />
            <source>Asset</source>
            <translation>資産</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6412" />
            <source>Risk score</source>
            <translation>リスクスコア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6412" />
            <source>Observed factors</source>
            <translation>観測された要因</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6413" />
            <source>Subject</source>
            <translation>件名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6413" />
            <source>Permission field</source>
            <translation>許可フィールド</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6414" />
            <source>Defensive deception opportunities</source>
            <translation>防御的欺瞞の機会</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>Analyze current exposure and access</source>
            <translation>現在の露出とアクセスを分析する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <location filename="../zscaler_api_client.py" line="6963" />
            <source>Export masked exposure evidence</source>
            <translation>隠蔽された暴露証拠をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <location filename="../zscaler_api_client.py" line="6981" />
            <location filename="../zscaler_api_client.py" line="6983" />
            <source>Investigation notebook</source>
            <translation>捜査ノート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <source>Note title</source>
            <translation>ノートのタイトル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <source>Comma-separated tags</source>
            <translation>カンマ区切りのタグ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <source>Masked investigation observations, decisions and follow-up</source>
            <translation>覆面調査の観察、決定、フォローアップ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Save local note</source>
            <translation>ローカルメモを保存する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <location filename="../zscaler_api_client.py" line="6988" />
            <source>Export masked notebook</source>
            <translation>マスクされたノートブックをエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Title</source>
            <translation>タイトル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Tags</source>
            <translation>タグ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Preview</source>
            <translation>プレビュー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6418" />
            <source>Exposure &amp; access</source>
            <translation>露出とアクセス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6442" />
            <source>Use guided, locally tracked response and recovery checklists. A completed step records only operator intent in the local audit trail; it never changes a tenant or closes an authoritative incident.</source>
            <translation>ガイド付きでローカルに追跡された対応および回復チェックリストを使用します。完了したステップでは、ローカル監査証跡にオペレーターの意図のみが記録されます。テナントを変更したり、権威あるインシデントを終了したりすることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6443" />
            <source>Playbook:</source>
            <translation>プレイブック:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>API/service disruption</source>
            <translation>API/サービスの中断</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>High-risk policy change</source>
            <translation>リスクの高い政策変更</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>Digital experience degradation</source>
            <translation>デジタルエクスペリエンスの劣化</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>Possible credential exposure</source>
            <translation>資格情報漏洩の可能性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>Ransomware containment support</source>
            <translation>ランサムウェア封じ込めのサポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6447" />
            <source>Mark selected step complete</source>
            <translation>選択したステップを完了としてマークする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <location filename="../zscaler_api_client.py" line="7082" />
            <source>Export masked playbook evidence</source>
            <translation>マスクされたプレイブックの証拠をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <source>Guidance</source>
            <translation>ガイダンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <source>Local evidence</source>
            <translation>現地の証拠</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6451" />
            <source>Smart API planner (review only)</source>
            <translation>スマート API プランナー (レビューのみ)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <source>Describe a goal to rank documented Automation Hub operations deterministically. Read operations are preferred; tenant values are never guessed and nothing runs automatically.</source>
            <translation>文書化された Automation Hub オペレーションを決定的にランク付けする目標を説明します。読み取り操作が優先されます。テナント値は決して推測されず、何も自動的に実行されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6453" />
            <source>Example: investigate slow ZDX application experience</source>
            <translation>例: 遅い ZDX アプリケーション エクスペリエンスを調査する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6454" />
            <source>Plan documented operations</source>
            <translation>文書化された操作を計画する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6455" />
            <source>Copy safe reads to API Chains</source>
            <translation>セーフリードを API チェーンにコピーする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6457" />
            <source>Product</source>
            <translation>製品</translation>
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
            <translation>応答プレイブック</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Change owner</source>
            <translation>所有者の変更</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Independent reviewer</source>
            <translation>独立した査読者</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Owner:</source>
            <translation>所有者:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6463" />
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Maintenance window confirmed</source>
            <translation>メンテナンス期間が確認されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6463" />
            <source>Local simulation reviewed</source>
            <translation>ローカルシミュレーションのレビュー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6463" />
            <source>Rollback prepared</source>
            <translation>ロールバックが準備されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6465" />
            <source>Gate</source>
            <translation>ゲート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6465" />
            <source>Required</source>
            <translation>必須</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6471" />
            <location filename="../zscaler_api_client.py" line="7169" />
            <location filename="../zscaler_api_client.py" line="7173" />
            <location filename="../zscaler_api_client.py" line="7174" />
            <source>Verify rollback artifact</source>
            <translation>ロールバック アーティファクトを確認する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6491" />
            <source>Local baseline:</source>
            <translation>ローカルベースライン:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6492" />
            <source>Save assessment baseline</source>
            <translation>評価ベースラインを保存する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6493" />
            <location filename="../zscaler_api_client.py" line="7272" />
            <source>Export signed evidence</source>
            <translation>署名された証拠をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6494" />
            <location filename="../zscaler_api_client.py" line="7279" />
            <source>Verify signed evidence</source>
            <translation>署名された証拠を検証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6496" />
            <location filename="../zscaler_api_client.py" line="7203" />
            <location filename="../zscaler_api_client.py" line="7259" />
            <source>Continuous assurance</source>
            <translation>継続的な保証</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6561" />
            <location filename="../zscaler_api_client.py" line="7620" />
            <location filename="../zscaler_api_client.py" line="7624" />
            <location filename="../zscaler_api_client.py" line="7626" />
            <location filename="../zscaler_api_client.py" line="7638" />
            <source>Policy time travel</source>
            <translation>タイムトラベル政策</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6563" />
            <source>Save snapshot</source>
            <translation>スナップショットの保存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6564" />
            <source>Use as baseline</source>
            <translation>ベースラインとして使用する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6565" />
            <source>Load snapshot</source>
            <translation>スナップショットのロード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6566" />
            <source>Delete snapshot</source>
            <translation>スナップショットの削除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6568" />
            <location filename="../zscaler_api_client.py" line="7555" />
            <location filename="../zscaler_api_client.py" line="7590" />
            <location filename="../zscaler_api_client.py" line="7615" />
            <source>Policy twin</source>
            <translation>ポリシーツイン</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6610" />
            <source>All environments</source>
            <translation>すべての環境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6626" />
            <source>Showing local evidence for: {name}</source>
            <translation>Showing local evidence for: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6628" />
            <source>Cross-tenant overview is active. Exports and integrations will include all local environments.</source>
            <translation>クロステナントの概要がアクティブです。エクスポートと統合には、すべてのローカル環境が含まれます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6634" />
            <location filename="../zscaler_api_client.py" line="6998" />
            <location filename="../zscaler_api_client.py" line="7404" />
            <source>Invalid JSON: </source>
            <translation>無効な JSON: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6654" />
            <source>Audit chain is valid</source>
            <translation>監査チェーンは有効です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6654" />
            <source>Audit chain needs review</source>
            <translation>監査チェーンの見直しが必要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6660" />
            <source>Success</source>
            <translation>成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6660" />
            <source>Other</source>
            <translation>その他</translation>
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
            <translation>クリティカル</translation>
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
            <translation>中</translation>
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
            <translation>低い</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6676" />
            <location filename="../zscaler_api_client.py" line="6838" />
            <location filename="../zscaler_api_client.py" line="7314" />
            <location filename="../zscaler_api_client.py" line="7572" />
            <location filename="../zscaler_api_client.py" line="7666" />
            <source>Info</source>
            <translation>情報</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6680" />
            <source>Audit integrity needs review</source>
            <translation>監査の整合性のレビューが必要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6680" />
            <source>The local audit chain did not verify.</source>
            <translation>ローカル監査チェーンは検証しませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6681" />
            <source>Repeated API failures</source>
            <translation>繰り返される API エラー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6681" />
            <source>{count} failed requests are in local history.</source>
            <translation>{count} failed requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6682" />
            <source>API failures observed</source>
            <translation>API エラーが観察されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6682" />
            <source>{count} request(s) need review.</source>
            <translation>{count} request(s) need review.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6683" />
            <source>Change activity burst</source>
            <translation>アクティビティバーストの変更</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6683" />
            <source>{count} write requests are in local history.</source>
            <translation>{count} write requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6684" />
            <source>Slow API responses</source>
            <translation>API 応答が遅い</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6684" />
            <source>{count} request(s) took ten seconds or more.</source>
            <translation>{count} request(s) took ten seconds or more.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6685" />
            <source>No local telemetry yet</source>
            <translation>ローカルテレメトリはまだありません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6685" />
            <source>Send or import redacted requests to establish a local baseline.</source>
            <translation>編集されたリクエストを送信またはインポートして、ローカルのベースラインを確立します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6706" />
            <source>{count} local alert(s) · error threshold: {threshold}</source>
            <translation>{count} local alert(s) · error threshold: {threshold}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6712" />
            <source>The local audit chain needs review.</source>
            <translation>ローカル監査チェーンは見直す必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6713" />
            <source>Local failed requests reached the configured threshold.</source>
            <translation>ローカルで失敗したリクエストが設定されたしきい値に達しました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6714" />
            <source>API rate limiting was observed in local history.</source>
            <translation>API レート制限がローカル履歴で観察されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6715" />
            <source>A response reported no remaining API rate-limit capacity.</source>
            <translation>応答では、API レート制限容量が残っていないことが報告されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6716" />
            <source>The latest request failed after successful requests to the same endpoint.</source>
            <translation>同じエンドポイントへのリクエストが成功した後、最新のリクエストは失敗しました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6717" />
            <source>The latest endpoint response was much slower than its local baseline.</source>
            <translation>最新のエンドポイントの応答は、ローカルのベースラインよりもはるかに遅かったです。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6718" />
            <source>Three or more local requests took ten seconds or more.</source>
            <translation>3 つ以上のローカル リクエストには 10 秒以上かかりました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6736" />
            <source>Local alert summary</source>
            <translation>ローカルアラートの概要</translation>
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
            <translation>ローカルアラートはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6740" />
            <source>Count: {count}</source>
            <translation>Count: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6745" />
            <source>Export local alerts</source>
            <translation>ローカルアラートをエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6774" />
            <source>Normal</source>
            <translation>ノーマル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6779" />
            <source>Observed relationship chain across local evidence; validate before treating it as an exploitable attack path.</source>
            <translation>地元の証拠全体で観察された関係の連鎖。悪用可能な攻撃パスとして扱う前に検証してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6785" />
            <source>Endpoint failure evidence</source>
            <translation>エンドポイント障害の証拠</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6785" />
            <source>Relationship concentration</source>
            <translation>関係集中</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6785" />
            <source>Security indicator observed</source>
            <translation>セキュリティ指標が観察されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6787" />
            <source>The endpoint has locally retained server or network failure evidence.</source>
            <translation>エンドポイントには、サーバーまたはネットワーク障害の証拠がローカルに保持されています。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6788" />
            <source>The entity is connected to an unusually broad set of locally observed relationships.</source>
            <translation>このエンティティは、ローカルで観察される非常に広範な関係に接続されています。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6789" />
            <source>A threat, exposure, vulnerability, or indicator-like object was present in the response.</source>
            <translation>脅威、暴露、脆弱性、または指標のようなオブジェクトが応答に存在しました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6798" />
            <source>The graph reached its local safety limit; use the filter or export the evidence for complete review.</source>
            <translation>グラフはローカルの安全限界に達しました。フィルターを使用するか、完全なレビューのために証拠をエクスポートします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6800" />
            <source>No correlatable entities are available in the selected local scope.</source>
            <translation>選択したローカル スコープで使用できる相関可能なエンティティはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6822" />
            <source>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</source>
            <translation>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6841" />
            <source>Request</source>
            <translation>リクエスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6841" />
            <source>Audit</source>
            <translation>監査</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6847" />
            <source>1. Review failed requests in the local timeline.
2. Select the matching product and endpoint in API Explorer.
3. Run the read-only status or list operation.
4. Compare the masked response with the audit trail.
5. Export evidence or open a change review; no remediation is sent automatically.</source>
            <translation>1. ローカル タイムラインで失敗したリクエストを確認します。
2. API Explorer で一致する製品とエンドポイントを選択します。
3. 読み取り専用ステータスまたはリスト操作を実行します。
4. マスクされた応答を監査証跡と比較します。
5. 証拠をエクスポートするか、変更レビューを開始します。修復は自動的には送信されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6848" />
            <source>1. Review recent write requests and audit events.
2. Export or load the current policy object.
3. Use Policy diff and local simulation.
4. Run compliance checks.
5. Prepare a reviewed Terraform or Git change; no apply is sent automatically.</source>
            <translation>1. 最近の書き込みリクエストと監査イベントを確認します。
2. 現在のポリシー オブジェクトをエクスポートまたはロードします。
3. ポリシーの差分とローカル シミュレーションを使用します。
4. コンプライアンスチェックを実行します。
5. レビュー済みの Terraform または Git の変更を準備します。適用は自動的に送信されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6849" />
            <source>1. Identify slow requests in the local timeline.
2. Review response status, duration, and rate-limit headers.
3. Query the relevant ZDX or product status endpoint.
4. Compare against recent requests.
5. Export the masked incident evidence for escalation.</source>
            <translation>1. ローカル タイムラインで遅いリクエストを特定します。
2. 応答ステータス、期間、およびレート制限ヘッダーを確認します。
3. 関連する ZDX または製品ステータス エンドポイントをクエリします。
4. 最近のリクエストと比較します。
5. エスカレーションのために、隠蔽されたインシデントの証拠をエクスポートします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6898" />
            <source>{value:g} ms</source>
            <translation>{value:g} ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>User</source>
            <translation>ユーザー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Device</source>
            <translation>デバイス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Network</source>
            <translation>ネットワーク</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Service edge</source>
            <translation>サービスエッジ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Application</source>
            <translation>アプリケーション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Device score</source>
            <translation>デバイススコア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Application score</source>
            <translation>アプリケーションスコア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Service-edge score</source>
            <translation>サービスエッジスコア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Jitter</source>
            <translation>ジッター</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>DNS time</source>
            <translation>DNS時間</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>TCP connect time</source>
            <translation>TCP接続時間</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Page fetch time</source>
            <translation>ページフェッチ時間</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Availability</source>
            <translation>可用性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>CPU</source>
            <translation>CPU</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Memory</source>
            <translation>記憶</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Overall experience score is below 70</source>
            <translation>全体的な経験値が 70 未満です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Device score is below 70</source>
            <translation>デバイススコアが70未満です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Application score is below 70</source>
            <translation>アプリケーションのスコアが 70 未満です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Service-edge score is below 70</source>
            <translation>サービスエッジスコアが 70 未満です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed latency exceeds 250 ms</source>
            <translation>観測された遅延が 250 ミリ秒を超えている</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed packet loss exceeds 2%</source>
            <translation>観測されたパケット損失は 2% を超えています</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed jitter exceeds 40 ms</source>
            <translation>観測されたジッターが 40 ミリ秒を超えている</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed availability is below 99%</source>
            <translation>観測された可用性は 99% 未満です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6918" />
            <source>Schema-tolerant local interpretation of observed API fields. Thresholds are transparent operational hints, not Zscaler health verdicts or SLA determinations.</source>
            <translation>観察された API フィールドのスキーマ耐性のあるローカル解釈。しきい値は透過的な運用上のヒントであり、Zscaler の健全性の判定や SLA の決定ではありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6919" />
            <source>No current API or GraphQL response is available. Run or import a ZDX/OneAPI query, then analyze again.</source>
            <translation>現在利用可能な API または GraphQL 応答はありません。 ZDX/OneAPI クエリを実行またはインポートし、再度分析します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6919" />
            <source>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</source>
            <translation>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6953" />
            <source>Explicit broad or write-capable access observed; validate least privilege and assignment context.</source>
            <translation>明示的なブロードアクセスまたは書き込み可能なアクセスが観察されました。最小権限と割り当てコンテキストを検証します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6958" />
            <source>Consider a monitored decoy resource near exposed paths</source>
            <translation>露出したパスの近くにある監視対象のおとりリソースを検討する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6958" />
            <source>Consider a non-production canary permission for privileged-path monitoring</source>
            <translation>特権パス監視のための非運用カナリア権限を検討してください</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6958" />
            <source>Maintain an exposure and least-privilege baseline</source>
            <translation>露出と最小権限のベースラインを維持する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6981" />
            <source>Select one environment before saving an investigation note.</source>
            <translation>調査メモを保存する前に、環境を 1 つ選択してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7006" />
            <source>Rule is valid and can be evaluated locally.</source>
            <translation>ルールは有効であり、ローカルで評価できます。</translation>
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
            <translation>中央絶対偏差 (MAD)、10%/10 ms ノイズ フロアで 1.4826 でスケール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7035" />
            <source>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</source>
            <translation>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Confirm scope from retained failures</source>
            <translation>保持された障害から範囲を確認する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Check rate-limit and service-health evidence</source>
            <translation>レート制限とサービス健全性の証拠を確認する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Collect read-only product status</source>
            <translation>読み取り専用の製品ステータスを収集する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Correlate affected entities</source>
            <translation>影響を受けるエンティティを関連付ける</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Export masked incident evidence</source>
            <translation>隠蔽されたインシデント証拠をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Record closure decision</source>
            <translation>記録閉鎖の決定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Capture current policy baseline</source>
            <translation>現在のポリシーのベースラインを取得する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Run policy diff and best-practice checks</source>
            <translation>ポリシーの差分とベストプラクティスのチェックを実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Run Policy Twin and decision simulation</source>
            <translation>ポリシーツインと意思決定シミュレーションを実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Prepare rollback artifact</source>
            <translation>ロールバックアーティファクトの準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Record independent review</source>
            <translation>独立したレビューを記録する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Export change package</source>
            <translation>変更パッケージのエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Identify affected user and application scope</source>
            <translation>影響を受けるユーザーとアプリケーションの範囲を特定する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Inspect device metrics</source>
            <translation>デバイスメトリクスを検査する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Inspect network latency, loss and jitter</source>
            <translation>ネットワークの遅延、損失、ジッターを検査する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Inspect service-edge path</source>
            <translation>サービスエッジパスを検査する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Compare application response</source>
            <translation>アプリケーションの応答を比較する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Export masked journey evidence</source>
            <translation>マスクされた旅行証拠をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Stop copying or exporting raw material</source>
            <translation>原材料のコピーや輸出をやめる</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Rotate the affected credential outside this client</source>
            <translation>影響を受ける資格情報をこのクライアントの外部でローテーションします</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Clear in-memory sessions</source>
            <translation>メモリ内セッションをクリアする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Review masked audit evidence</source>
            <translation>隠蔽された監査証拠をレビューする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Validate least-privilege access</source>
            <translation>最小特権アクセスを検証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Record containment and recovery</source>
            <translation>記録の封じ込めと回復</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Validate the alert in authoritative security tooling</source>
            <translation>権威あるセキュリティツールでアラートを検証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Identify users, devices and applications</source>
            <translation>ユーザー、デバイス、アプリケーションを特定する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Preserve masked evidence</source>
            <translation>隠蔽された証拠を保存する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Prepare containment changes for independent approval</source>
            <translation>独立した承認のために封じ込め変更を準備する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Track recovery prerequisites</source>
            <translation>トラック回復の前提条件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Record lessons learned</source>
            <translation>学んだ教訓を記録する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7062" />
            <source>Complete</source>
            <translation>完了</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7062" />
            <source>Pending</source>
            <translation>保留中</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7063" />
            <source>Recorded in local audit trail</source>
            <translation>ローカル監査証跡に記録される</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7063" />
            <source>No completion evidence</source>
            <translation>完了の証拠がない</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7074" />
            <source>Select a playbook step first.</source>
            <translation>まずプレイブックのステップを選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7078" />
            <source>Mark step complete</source>
            <translation>ステップを完了としてマークする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7078" />
            <source>Record this step as completed in the local audit trail? This does not perform the action or update an authoritative incident.</source>
            <translation>このステップを完了したものとしてローカル監査証跡に記録しますか?これにより、アクションが実行されたり、信頼できるインシデントが更新されたりすることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7089" />
            <source>Describe an administrative or investigation goal first.</source>
            <translation>最初に管理または調査の目標を説明します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7098" />
            <source>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</source>
            <translation>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Smart API planner</source>
            <translation>スマートAPIプランナー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Create a plan with at least one read operation first.</source>
            <translation>最初に少なくとも 1 つの読み取り操作を含むプランを作成します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7106" />
            <source>Planner output copied for review. Validate the chain, supply required path values, and approve it separately before execution.</source>
            <translation>レビューのためにコピーされたプランナーの出力。チェーンを検証し、必要なパス値を指定し、実行前に個別に承認します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Review policy diff</source>
            <translation>ポリシーの差分を確認する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Run local simulation</source>
            <translation>ローカルシミュレーションを実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Record reviewer approval</source>
            <translation>記録審査員の承認</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Export Git/Terraform review</source>
            <translation>Git/Terraform のエクスポートのレビュー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Apply outside this client only after approval</source>
            <translation>承認後にのみこのクライアント以外に申請する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7128" />
            <source>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</source>
            <translation>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Change reference recorded</source>
            <translation>記録された変更参照</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Change owner recorded</source>
            <translation>所有者の変更が記録されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Independent reviewer recorded</source>
            <translation>独立した査読者が記録されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Local policy simulation reviewed</source>
            <translation>地方政策シミュレーションの見直し</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Rollback artifact prepared</source>
            <translation>ロールバック アーティファクトが準備されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Local approval recorded</source>
            <translation>地元の承認が記録されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Yes</source>
            <translation>はい</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>No</source>
            <translation>いいえ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Blocked</source>
            <translation>ブロックされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Optional</source>
            <translation>オプション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7147" />
            <source>Enter a reviewer before recording approval.</source>
            <translation>承認を記録する前にレビュー担当者を入力します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7149" />
            <source>Local approval recorded. External apply remains disabled.</source>
            <translation>地元の承認が記録されました。外部適用は無効のままです。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7173" />
            <source>Rollback artifact integrity verified. This does not authorize applying it.</source>
            <translation>ロールバック アーティファクトの整合性が確認されました。これはそれを適用することを許可しません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7174" />
            <source>Rollback verification failed: {reason}</source>
            <translation>Rollback verification failed: {reason}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7184" />
            <source>No comparison baseline</source>
            <translation>比較ベースラインなし</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7189" />
            <source>{time} · score {score}/100</source>
            <translation>{time} · score {score}/100</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7212" />
            <source>Audit evidence integrity</source>
            <translation>監査証拠の完全性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7212" />
            <source>Review and restore the local hash-linked audit trail.</source>
            <translation>ローカルのハッシュにリンクされた監査証跡を確認して復元します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7213" />
            <source>Operational evidence available</source>
            <translation>運用上の証拠が入手可能</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7213" />
            <source>Collect or import masked read-only evidence for the selected environment.</source>
            <translation>選択した環境のマスクされた読み取り専用証拠を収集またはインポートします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7214" />
            <source>API health and anomaly monitoring</source>
            <translation>APIの健全性と異常の監視</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7214" />
            <source>Investigate repeated failures, latency regressions, and rate limiting.</source>
            <translation>繰り返される障害、遅延の回帰、およびレート制限を調査します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7215" />
            <source>Least-privilege policy baseline</source>
            <translation>最小権限ポリシーのベースライン</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7215" />
            <source>Constrain unconditional allow rules and validate order in Policy Twin.</source>
            <translation>無条件許可ルールを制約し、ポリシー ツインで順序を検証します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7216" />
            <source>Reviewed write activity</source>
            <translation>レビューされた書き込みアクティビティ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7216" />
            <source>Require a recorded review and rollback artifact for write activity.</source>
            <translation>書き込みアクティビティの記録されたレビューとロールバック アーティファクトが必要です。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7217" />
            <source>Incident evidence readiness</source>
            <translation>事件証拠の準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7217" />
            <source>Prepare and export masked investigation evidence for unresolved failures.</source>
            <translation>未解決の障害に関する隠蔽された調査証拠を準備してエクスポートします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7218" />
            <source>Recovery evidence available</source>
            <translation>回復証拠が入手可能</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7218" />
            <source>Save a policy snapshot or reviewed rollback artifact before change.</source>
            <translation>変更前にポリシーのスナップショットまたはレビューされたロールバック アーティファクトを保存します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7232" />
            <source>Pass</source>
            <translation>パス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7232" />
            <source>Fail</source>
            <translation>失敗</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7245" />
            <location filename="../zscaler_api_client.py" line="7302" />
            <location filename="../zscaler_api_client.py" line="7348" />
            <source>Local assurance requires attention</source>
            <translation>ローカル保証には注意が必要です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7245" />
            <location filename="../zscaler_api_client.py" line="7302" />
            <location filename="../zscaler_api_client.py" line="7348" />
            <source>No failing controls in the evaluated local scope</source>
            <translation>評価されたローカル スコープに失敗したコントロールはありません</translation>
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
            <translation>優先順位の高いアクション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7251" />
            <source>Local evidence limitation: validate results against authoritative tenant and governance records.</source>
            <translation>ローカル証拠の制限: 権威あるテナントおよびガバナンスの記録に対して結果を検証します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7255" />
            <source>Now</source>
            <translation>今</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7256" />
            <source>Assessment {identifier} · {frameworks} · local evidence only, not certification.</source>
            <translation>Assessment {identifier} · {frameworks} · local evidence only, not certification.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7259" />
            <source>Select one environment before saving an assurance baseline.</source>
            <translation>保証ベースラインを保存する前に、環境を 1 つ選択してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7269" />
            <location filename="../zscaler_api_client.py" line="7271" />
            <location filename="../zscaler_api_client.py" line="7288" />
            <location filename="../zscaler_api_client.py" line="7290" />
            <source>Signed evidence</source>
            <translation>署名された証拠</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7269" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>システム キーチェーンは証拠署名キーを保存できませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7271" />
            <source>The protected evidence signing key is invalid. Rotate it in Settings before signing.</source>
            <translation>保護された証拠の署名キーが無効です。署名する前に設定で回転させてください。</translation>
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
            <translation>経営陣の保証に関する説明</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7330" />
            <source>Posture score</source>
            <translation>姿勢スコア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7331" />
            <source>Local requests</source>
            <translation>ローカルリクエスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7332" />
            <source>Failed requests</source>
            <translation>失敗したリクエスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7461" />
            <source>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</source>
            <translation>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7467" />
            <source>Cancellation requested; the current HTTP request will finish and no new chain step will start.</source>
            <translation>キャンセルがリクエストされました。現在の HTTP リクエストは終了し、新しいチェーン ステップは開始されません。</translation>
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
            <translation>すべてのステップが開始される前にチェーンがキャンセルされました。完了した結果は保持されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7515" />
            <source>Run a chain before exporting its masked results.</source>
            <translation>マスクされた結果をエクスポートする前にチェーンを実行します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7539" />
            <source>No baseline (analyze current policy only)</source>
            <translation>ベースラインなし (現在のポリシーのみを分析)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Unconditional allow</source>
            <translation>無条件許可</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Shadowed conflict</source>
            <translation>影の衝突</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Redundant shadow</source>
            <translation>冗長なシャドウ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Overlapping actions</source>
            <translation>重複するアクション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Duplicate rule name</source>
            <translation>ルール名が重複しています</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7567" />
            <source>An unconditional allow rule can expose every later matching scope.</source>
            <translation>無条件許可ルールは、その後の一致するスコープをすべて公開できます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7568" />
            <source>The later rule can never decide because an earlier rule covers all of its matches.</source>
            <translation>前のルールがすべての一致をカバーするため、後のルールでは決定できません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7569" />
            <source>The rules can match the same context but have different actions; order decides the outcome.</source>
            <translation>ルールは同じコンテキストに一致しても、異なるアクションを持つことができます。順序が結果を決定します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7570" />
            <source>Duplicate rule names make reviews, evidence, and rollback ambiguous.</source>
            <translation>ルール名が重複すると、レビュー、証拠、ロールバックが曖昧になります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7579" />
            <source>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</source>
            <translation>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7586" />
            <source>Request context must be a JSON object.</source>
            <translation>リクエストコンテキストはJSONオブジェクトである必要があります。</translation>
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
            <translation>ポリシーのスナップショットを保存する前に、環境を 1 つ選択してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7626" />
            <source>Policy snapshots are limited to 2 MB.</source>
            <translation>ポリシーのスナップショットは 2 MB に制限されています。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7627" />
            <source>Save policy snapshot</source>
            <translation>ポリシーのスナップショットを保存する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7627" />
            <source>Snapshot name:</source>
            <translation>スナップショット名:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7638" />
            <source>Select a saved policy snapshot first.</source>
            <translation>まず、保存されたポリシーのスナップショットを選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7644" />
            <source>Delete policy snapshot</source>
            <translation>ポリシースナップショットの削除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7644" />
            <source>Delete the selected local policy snapshot?</source>
            <translation>選択したローカル ポリシー スナップショットを削除しますか?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7715" />
            <source>Local automation must be an existing absolute path to a non-symlinked .py file no larger than 1 MiB.</source>
            <translation>ローカル オートメーションは、1 MiB 以下の非シンボリック .py ファイルへの既存の絶対パスである必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7718" />
            <location filename="../zscaler_api_client.py" line="7882" />
            <source>Webhook endpoints must use HTTPS (or local HTTP) and must not contain credentials in the URL.</source>
            <translation>Webhook エンドポイントは HTTPS (またはローカル HTTP) を使用する必要があり、URL に資格情報を含めることはできません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7722" />
            <source>Secure storage</source>
            <translation>安全なストレージ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7722" />
            <source>The system keychain could not save the webhook endpoint. Check the keychain service and try again.</source>
            <translation>システム キーチェーンは Webhook エンドポイントを保存できませんでした。キーチェーン サービスを確認して、再試行してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7738" />
            <source>Connectivity test</source>
            <translation>接続テスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7738" />
            <source>Alert snapshot</source>
            <translation>アラートのスナップショット</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7739" />
            <source>Started</source>
            <translation>開始しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7499" />
            <location filename="../zscaler_api_client.py" line="7739" />
            <source>Succeeded</source>
            <translation>成功しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6528" />
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</source>
            <translation>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>A JSON list of API requests. Relative paths use the active product host; references can use only completed step IDs.</source>
            <translation>API リクエストの JSON リスト。相対パスでは、アクティブな製品ホストが使用されます。参照では、完了したステップ ID のみを使用できます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Step</source>
            <translation>ステップ</translation>
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
            <translation>記録</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Duration</source>
            <translation>期間</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7499" />
            <location filename="../zscaler_api_client.py" line="7739" />
            <source>Failed</source>
            <translation>失敗しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7772" />
            <source>All files (*)</source>
            <translation>すべてのファイル (*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7775" />
            <source>Exported {count} masked local event(s) as {format}. No data was sent automatically.</source>
            <translation>Exported {count} masked local event(s) as {format}. No data was sent automatically.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7791" />
            <source>Created a non-executable Terraform review handoff. Run terraformer and terraform plan only after independent review; this client never applies it.</source>
            <translation>実行不可能な Terraform レビューのハンドオフを作成しました。 terraformer と terraform plan は独立したレビュー後にのみ実行してください。このクライアントはそれを決して適用しません。</translation>
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
            <translation>ローカルオートメーション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7817" />
            <source>Read-only mode blocks local automation.</source>
            <translation>読み取り専用モードはローカル オートメーションをブロックします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7820" />
            <source>Configure a valid local Python automation in Governance first.</source>
            <translation>まず、ガバナンスで有効なローカル Python オートメーションを構成します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7822" />
            <source>Local automation is already running.</source>
            <translation>ローカルオートメーションはすでに実行されています。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7828" />
            <source>Run the reviewed Python file with masked local posture and alert data? The process receives no API credentials.</source>
            <translation>マスクされたローカル ポスチャとアラート データを使用してレビュー済みの Python ファイルを実行しますか?プロセスは API 認証情報を受け取りません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7856" />
            <source>Local automation exceeded the 15-second limit and was stopped.</source>
            <translation>ローカル オートメーションは 15 秒の制限を超えたため、停止されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7866" />
            <source>Local automation completed with exit code {code}.</source>
            <translation>Local automation completed with exit code {code}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7871" />
            <source>Local automation failed to start.</source>
            <translation>ローカルオートメーションの開始に失敗しました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7877" />
            <source>Send the current masked local alert snapshot to the configured webhook endpoint?</source>
            <translation>現在のマスクされたローカル アラート スナップショットを構成された Webhook エンドポイントに送信しますか?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7883" />
            <location filename="../zscaler_api_client.py" line="7885" />
            <location filename="../zscaler_api_client.py" line="7889" />
            <location filename="../zscaler_api_client.py" line="7909" />
            <location filename="../zscaler_api_client.py" line="7916" />
            <source>Webhook delivery</source>
            <translation>Webhook配信</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7885" />
            <source>A webhook delivery is already running.</source>
            <translation>Webhook 配信はすでに実行されています。</translation>
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
            <translation>アプリのみ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7946" />
            <source>Paused</source>
            <translation>一時停止中</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7958" />
            <source>Select a scheduled report first.</source>
            <translation>最初にスケジュールされたレポートを選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7976" />
            <source>The scheduled report was generated locally.</source>
            <translation>スケジュールされたレポートはローカルで生成されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7978" />
            <source>The scheduled report could not be generated. Check its output folder and the audit trail.</source>
            <translation>スケジュールされたレポートを生成できませんでした。出力フォルダーと監査証跡を確認してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7992" />
            <source>The operating-system schedule could not be updated. No state was changed.</source>
            <translation>オペレーティング システムのスケジュールを更新できませんでした。状態は変更されませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8008" />
            <source>The report is paused and cannot generate output, but the operating-system job cleanup needs manual review.</source>
            <translation>レポートは一時停止されているため出力を生成できませんが、オペレーティング システム ジョブのクリーンアップを手動で確認する必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8014" />
            <source>Remove the selected scheduled report?</source>
            <translation>選択したスケジュール済みレポートを削除しますか?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8027" />
            <source>The report was removed, but the operating-system job could not be removed. It can no longer generate a report because its schedule ID is no longer active.</source>
            <translation>レポートは削除されましたが、オペレーティング システム ジョブは削除できませんでした。スケジュール ID がアクティブではなくなったため、レポートを生成できなくなります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8030" />
            <source>Report name:</source>
            <translation>レポート名:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8043" />
            <source>Run this report even when ZS API Client is closed? This creates a user-level operating-system schedule and requires no administrator privileges.</source>
            <translation>ZS API クライアントが閉じているときでもこのレポートを実行しますか?これにより、ユーザー レベルのオペレーティング システムのスケジュールが作成され、管理者権限は必要ありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8057" />
            <source>The operating-system schedule could not be created. The report was not scheduled.</source>
            <translation>オペレーティング システムのスケジュールを作成できませんでした。レポートは予定されていませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8065" />
            <source>Scheduled report saved. It will run in the background even when the application is closed.</source>
            <translation>スケジュールされたレポートが保存されました。アプリケーションが閉じているときでもバックグラウンドで実行されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8065" />
            <source>Scheduled report saved. It will run locally while the application is open.</source>
            <translation>スケジュールされたレポートが保存されました。アプリケーションが開いている間、ローカルで実行されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7930" />
            <location filename="../zscaler_api_client.py" line="8033" />
            <source>Hourly</source>
            <translation>毎時</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7930" />
            <location filename="../zscaler_api_client.py" line="8033" />
            <source>Daily</source>
            <translation>毎日</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7930" />
            <location filename="../zscaler_api_client.py" line="8033" />
            <source>Weekly</source>
            <translation>毎週</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8034" />
            <source>Report cadence:</source>
            <translation>レポートの頻度:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8037" />
            <source>Choose report output folder</source>
            <translation>レポート出力フォルダーの選択</translation>
        </message>
        <message>
            <source>Scheduled report saved. Reports run locally while the application is open.</source>
            <translation type="vanished">スケジュールされたレポートが保存されました。レポートは、アプリケーションが開いているときにローカルで実行されます。</translation>
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
            <translation>有効</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7300" />
            <location filename="../zscaler_api_client.py" line="7333" />
            <source>Needs review</source>
            <translation>見直しが必要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7300" />
            <source>Incident signals</source>
            <translation>入射信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Executive actions</source>
            <translation>実行アクション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Review high-risk findings and approval records.</source>
            <translation>高リスクの所見と承認記録を確認します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Use the Security Posture and Change Control workspaces for evidence.</source>
            <translation>証拠としてセキュリティ体制および変更管理ワークスペースを使用します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7306" />
            <source>SOC next steps</source>
            <translation>SOC の次のステップ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7306" />
            <source>Use Incident Investigation to prepare a review chain.</source>
            <translation>インシデント調査を使用してレビュー チェーンを準備します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7306" />
            <source>Export masked evidence before escalation.</source>
            <translation>エスカレーションの前に、隠蔽された証拠をエクスポートします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7308" />
            <source>Operations next steps</source>
            <translation>運用の次のステップ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7308" />
            <source>Review slow responses and API failures.</source>
            <translation>遅い応答と API エラーを確認します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7308" />
            <source>Confirm rate limits and service health with read-only queries.</source>
            <translation>読み取り専用クエリを使用して、レート制限とサービスの正常性を確認します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7408" />
            <source>Configure a host for the active product before running a chain.</source>
            <translation>チェーンを実行する前に、アクティブな製品のホストを構成します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7418" />
            <source>Each chain step must stay on the active product host.</source>
            <translation>各チェーン ステップはアクティブな製品ホスト上に存在する必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7434" />
            <source>Fix the chain validation errors before running it.</source>
            <translation>チェーンを実行する前にチェーン検証エラーを修正してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7438" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>読み取り専用モードは書き込みリクエストをブロックします。続行するには、オペレーション センターでローカルの役割を変更します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7440" />
            <source>Authenticate the active product before running a chain.</source>
            <translation>チェーンを実行する前に、アクティブな製品を認証します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7441" />
            <source>Run {count} API step(s) sequentially against the active environment?</source>
            <translation>Run {count} API step(s) sequentially against the active environment?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7443" />
            <source>The chain contains write operations; review and approve before continuing.</source>
            <translation>チェーンには書き込み操作が含まれます。続行する前に確認して承認してください。</translation>
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
            <translation type="vanished">メトリクスはローカルであり、認証情報は含まれません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7678" />
            <source>Policy export</source>
            <translation>ポリシーのエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7679" />
            <source>Export policy</source>
            <translation>輸出ポリシー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7688" />
            <source>Compliance</source>
            <translation>コンプライアンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7712" />
            <source>Alert threshold must be a positive integer.</source>
            <translation>アラートしきい値は正の整数である必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7726" />
            <source>Governance settings saved.</source>
            <translation>ガバナンス設定が保存されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7730" />
            <source>Use OneAPI or legacy clients locally</source>
            <translation>OneAPI または従来のクライアントをローカルで使用する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7730" />
            <source>AI-assisted, tool-scoped exploration</source>
            <translation>AI 支援のツールスコープの探索</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7730" />
            <source>Export existing ZIA/ZPA configuration to Terraform</source>
            <translation>既存の ZIA/ZPA 構成を Terraform にエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7733" />
            <source>Available</source>
            <translation>利用可能</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7733" />
            <source>Not installed</source>
            <translation>インストールされていません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7765" />
            <source>Prepare an integration first.</source>
            <translation>まず統合を準備します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6730" />
            <location filename="../zscaler_api_client.py" line="7768" />
            <source>Copied to clipboard</source>
            <translation>クリップボードにコピーされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7510" />
            <source>The chain stopped after the first failed step.</source>
            <translation>最初の失敗したステップの後でチェーンが停止しました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7662" />
            <location filename="../zscaler_api_client.py" line="7946" />
            <source>Enabled</source>
            <translation>有効</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7662" />
            <source>Disabled</source>
            <translation>障害者</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7668" />
            <source>Allow rule has no conditions</source>
            <translation>許可ルールには条件がありません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7668" />
            <source>Rule is disabled</source>
            <translation>ルールが無効になっています</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7669" />
            <source>Rule name is duplicated</source>
            <translation>ルール名が重複しています</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7669" />
            <source>Rule action is unspecified</source>
            <translation>ルールアクションは指定されていません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7698" />
            <source>Rules evaluated</source>
            <translation>評価されたルール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7698" />
            <source>Matched rule</source>
            <translation>一致したルール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>Matched</source>
            <translation>一致しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>Not matched</source>
            <translation>一致しません</translation>
        </message>
        <message>
            <source>Webhook test</source>
            <translation type="vanished">Webhook テスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7882" />
            <source>Configure a webhook endpoint in Governance first.</source>
            <translation>まずガバナンスで Webhook エンドポイントを構成します。</translation>
        </message>
        <message>
            <source>Webhook endpoints must use HTTPS unless they are local.</source>
            <translation type="vanished">Webhook エンドポイントは、ローカルでない限り HTTPS を使用する必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7874" />
            <source>Send a masked connectivity test to the configured webhook endpoint?</source>
            <translation>マスクされた接続テストを構成された Webhook エンドポイントに送信しますか?</translation>
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
            <translation>定期レポート</translation>
        </message>
        <message>
            <source>Report name and cadence:</source>
            <translation type="vanished">レポート名と頻度:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8069" />
            <source>Save support bundle</source>
            <translation>サポート バンドルを保存する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8074" />
            <source>Support bundle</source>
            <translation>サポートバンドル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8074" />
            <source>A redacted support bundle was created.</source>
            <translation>編集されたサポート バンドルが作成されました。</translation>
        </message>
    </context>
    <context>
        <name>PacWorkspaceDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="8141" />
            <location filename="../zscaler_api_client.py" line="8466" />
            <source>PAC Workspace</source>
            <translation>PAC ワークスペース</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8145" />
            <source>Create and verify PAC files locally. API operations are prepared in the request editor and are never sent or deployed automatically.</source>
            <translation>PAC ファイルをローカルで作成して検証します。 API オペレーションはリクエスト エディターで準備され、自動的に送信またはデプロイされることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8150" />
            <source>PAC experience:</source>
            <translation>PAC の経験:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8152" />
            <source>Guided (recommended)</source>
            <translation>ガイド付き (推奨)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8153" />
            <source>Advanced</source>
            <translation>上級者向け</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8170" />
            <source>PAC name:</source>
            <translation>PAC 名:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8171" />
            <source>Change note:</source>
            <translation>変更メモ:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8172" />
            <source>Hosted PAC URL (optional for ZCC):</source>
            <translation>ホストされた PAC URL (ZCC の場合はオプション):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8173" />
            <source>Existing ZIA PAC ID (for lifecycle actions):</source>
            <translation>既存の ZIA PAC ID (ライフサイクル アクション用):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8174" />
            <source>ZIA PAC version:</source>
            <translation>ZIA PAC バージョン:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8175" />
            <source>ZIA version action:</source>
            <translation>ZIA バージョンのアクション:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8182" />
            <source>Start with a safe baseline. Enter only internal destinations that must bypass Zscaler; all other traffic uses the selected gateway and failover.</source>
            <translation>安全なベースラインから始めます。 Zscaler をバイパスする必要がある内部宛先のみを入力します。他のすべてのトラフィックは、選択されたゲートウェイとフェイルオーバーを使用します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8190" />
            <source>Direct-bypass host patterns (one per line):</source>
            <translation>ダイレクト バイパス ホスト パターン (1 行に 1 つ):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8191" />
            <source>Primary gateway:</source>
            <translation>プライマリゲートウェイ:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8192" />
            <source>Secondary gateway:</source>
            <translation>セカンダリゲートウェイ:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8195" />
            <source>Create guided PAC</source>
            <translation>ガイド付き PAC の作成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8196" />
            <source>Load safe example</source>
            <translation>ロードセーフの例</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8199" />
            <source>Generated PAC preview (read-only):</source>
            <translation>Generated PAC preview (read-only):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8206" />
            <source>Guided setup</source>
            <translation>ガイド付きセットアップ</translation>
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
            <translation>PACをロード…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8218" />
            <source>Save PAC…</source>
            <translation>PAC を保存…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8219" />
            <source>Save local draft</source>
            <translation>ローカルドラフトを保存する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8222" />
            <source>Author</source>
            <translation>著者</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8225" />
            <source>Variables (JSON). Standard Zscaler names: </source>
            <translation>変数 (JSON)。標準の Zscaler 名: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8229" />
            <source>Test URL:</source>
            <translation>テスト URL:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8231" />
            <source>Apply variables</source>
            <translation>変数を適用する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8232" />
            <source>Run static verification</source>
            <translation>静的検証を実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8233" />
            <source>Preview decision</source>
            <translation>プレビューの決定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8236" />
            <source>Verify</source>
            <translation>検証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8239" />
            <source>PAC reference and review help. The verifier never executes JavaScript; validate in ZIA and test a pilot group before deployment.</source>
            <translation>PAC のリファレンスとレビューのヘルプ。ベリファイアは JavaScript を実行しません。導入前に ZIA で検証し、パイロット グループをテストします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8240" />
            <source>Variable or function</source>
            <translation>変数または関数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8240" />
            <source>Purpose / guidance</source>
            <translation>目的・ご案内</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8248" />
            <source>Roll out in stages: validate, test representative URLs, stage to a small pilot group, then deploy. Prefer host-pattern checks; avoid DNS helpers in Client Connector PAC files where possible.</source>
            <translation>段階的に展開します。代表的な URL を検証してテストし、小規模なパイロット グループに段階的に移行してから展開します。ホスト パターン チェックを優先します。可能な限り、クライアント コネクタ PAC ファイル内の DNS ヘルパーを避けてください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8250" />
            <source>Help and reference</source>
            <translation>ヘルプとリファレンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8253" />
            <source>Map supplied ZIA PAC metadata to ZCC forwarding-profile actions. Matches use hosted PAC URLs or an inline PAC content fingerprint; names alone are never treated as a match.</source>
            <translation>提供された ZIA PAC メタデータを ZCC 転送プロファイル アクションにマップします。一致では、ホストされた PAC URL またはインライン PAC コンテンツのフィンガープリントが使用されます。名前だけが一致として扱われることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8256" />
            <source>ZIA PAC list JSON</source>
            <translation>ZIA PAC リスト JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8258" />
            <source>ZCC forwarding-profile list JSON</source>
            <translation>ZCC 転送プロファイル リスト JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8262" />
            <source>Build PAC mappings</source>
            <translation>PACマッピングの構築</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8263" />
            <location filename="../zscaler_api_client.py" line="8298" />
            <source>Prepare ZIA PAC list</source>
            <translation>ZIA PAC リストの準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8264" />
            <location filename="../zscaler_api_client.py" line="8290" />
            <source>Prepare ZCC profile list</source>
            <translation>ZCCプロファイルリストの準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>ZCC profile</source>
            <translation>ZCCプロファイル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>Action / network</source>
            <translation>アクション/ネットワーク</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>PAC type</source>
            <translation>PACタイプ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>PAC reference</source>
            <translation>PAC リファレンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>ZIA status</source>
            <translation>ZIAステータス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>Mapping result</source>
            <translation>マッピング結果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>Profile ID</source>
            <translation>プロフィールID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8270" />
            <location filename="../zscaler_api_client.py" line="8379" />
            <source>PAC mappings</source>
            <translation>PACマッピング</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8273" />
            <source>Search the bundled Zscaler Configuration Center index of Cloud Enforcement Node ranges, proxy/VPN hostnames, GRE and extranet virtual IP addresses. The PAC editor shows a help balloon when a line references an indexed endpoint.</source>
            <translation>バンドルされている Zscaler 構成センターのクラウド強制ノード範囲、プロキシ/VPN ホスト名、GRE およびエクストラネット仮想 IP アドレスのインデックスを検索します。 PAC エディターは、行がインデックス付きエンドポイントを参照するときにヘルプ バルーンを表示します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8277" />
            <source>Search city, CIDR, hostname, GRE or VPN address</source>
            <translation>都市、CIDR、ホスト名、GRE または VPN アドレスを検索します</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8278" />
            <source>Search data centers</source>
            <translation>データセンターを検索する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Continent</source>
            <translation>大陸</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Data center</source>
            <translation>データセンター</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>CIDR range</source>
            <translation>CIDR範囲</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Proxy hostname</source>
            <translation>プロキシのホスト名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>VPN hostname</source>
            <translation>VPN ホスト名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>GRE VIP</source>
            <translation>GRE VIP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Extranet VIP</source>
            <translation>エクストラネット VIP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Coordinates</source>
            <translation>座標</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8284" />
            <source>Zscaler data centers</source>
            <translation>ゼッスケーラー データセンター</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8287" />
            <source>Paste a forwarding profile returned by ZCC, or first prepare the profile-list request. Existing profile fields are preserved when PAC fields are updated.</source>
            <translation>ZCC から返された転送プロファイルを貼り付けるか、最初にプロファイル リスト要求を準備します。既存のプロファイル フィールドは、PAC フィールドが更新されるときに保持されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8291" />
            <source>Prepare ZCC update</source>
            <translation>ZCC アップデートの準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8293" />
            <source>ZCC / Mobile Portal</source>
            <translation>ZCC / モバイルポータル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8296" />
            <source>Prepare ZIA validation</source>
            <translation>ZIA 検証の準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8297" />
            <source>Prepare ZIA hosted PAC upload</source>
            <translation>ZIA がホストする PAC アップロードを準備する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8299" />
            <source>Prepare ZIA version action</source>
            <translation>ZIA バージョンの準備アクション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8300" />
            <source>Close</source>
            <translation>閉じる</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8319" />
            <source>Guided mode creates a minimal, reviewable PAC. Switch to Advanced to edit JavaScript, update ZCC profiles, or prepare ZIA lifecycle actions.</source>
            <translation>ガイド付きモードでは、最小限のレビュー可能な PAC が作成されます。 JavaScript の編集、ZCC プロファイルの更新、または ZIA ライフサイクル アクションの準備を行うには、[詳細設定] に切り替えます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8320" />
            <source>Advanced mode exposes the PAC editor, ZCC profile patching, and ZIA version lifecycle actions. Every write remains explicit.</source>
            <translation>詳細モードでは、PAC エディター、ZCC プロファイルのパッチ適用、および ZIA バージョンのライフサイクル アクションが公開されます。すべての書き込みは明示的なままです。</translation>
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
            <translation>ガイド付き PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8371" />
            <source>Guided PAC created. Review the verification findings, test a URL, then prepare ZIA validation.</source>
            <translation>ガイド付き PAC が作成されました。検証結果を確認し、URL をテストして、ZIA 検証を準備します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8379" />
            <source>Both mapping inputs must be valid JSON: </source>
            <translation>両方のマッピング入力は有効な JSON である必要があります。 </translation>
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
            <translation>PAC変数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8418" />
            <source>Variables must be valid JSON: </source>
            <translation>変数は有効な JSON である必要があります。 </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8420" />
            <source>Variables must be a JSON object with text or numeric values.</source>
            <translation>変数は、テキストまたは数値を含む JSON オブジェクトである必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8429" />
            <source>none</source>
            <translation>なし</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8430" />
            <source>Detected variables: </source>
            <translation>検出された変数: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8434" />
            <source>Improvement tips:</source>
            <translation>改善のヒント:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8446" />
            <source>Variables applied.</source>
            <translation>変数が適用されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8446" />
            <source>Variables applied; missing values were retained: </source>
            <translation>適用される変数。欠損値が保持されました: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8451" />
            <source>Preview</source>
            <translation>プレビュー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8466" />
            <source>PAC draft saved locally.</source>
            <translation>PAC ドラフトはローカルに保存されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8469" />
            <location filename="../zscaler_api_client.py" line="8474" />
            <source>Load PAC</source>
            <translation>PACをロードする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8477" />
            <location filename="../zscaler_api_client.py" line="8482" />
            <source>Save PAC</source>
            <translation>PACの保存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8490" />
            <source>PAC request prepared</source>
            <translation>PAC リクエストが準備されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8490" />
            <source>The request was placed in the main editor. Review it and explicitly select Send Request; no deployment action has been performed.</source>
            <translation>リクエストはメインエディタに置かれました。それを確認し、明示的に「リクエストの送信」を選択します。展開アクションは実行されていません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8495" />
            <source>PAC verification</source>
            <translation>PAC検証</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8495" />
            <source>Resolve PAC errors before preparing an API write.</source>
            <translation>API 書き込みを準備する前に、PAC エラーを解決してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8511" />
            <source>ZIA PAC lifecycle</source>
            <translation>ZIA PAC ライフサイクル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8511" />
            <source>Enter a numeric PAC ID and version before preparing a lifecycle action.</source>
            <translation>ライフサイクル アクションを準備する前に、数値の PAC ID とバージョンを入力します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8525" />
            <location filename="../zscaler_api_client.py" line="8527" />
            <source>ZCC forwarding profile</source>
            <translation>ZCC 転送プロファイル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8525" />
            <source>Profile must be valid JSON: </source>
            <translation>プロファイルは有効な JSON である必要があります。 </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8527" />
            <source>Paste one ZCC forwarding profile object with its id before preparing an update.</source>
            <translation>更新を準備する前に、ID を含む 1 つの ZCC 転送プロファイル オブジェクトを貼り付けます。</translation>
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
            <translation>応答ドリフト比較</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6086" />
            <source>Compare the active masked response with a local ZS API Exchange baseline. Matching records are aligned by id, UUID, resourceId, key, or name. No API request is sent.</source>
            <translation>アクティブなマスクされた応答をローカルの ZS API Exchange ベースラインと比較します。一致するレコードは、ID、UUID、resourceId、キー、または名前によって整列されます。 API リクエストは送信されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6089" />
            <source>Baseline:</source>
            <translation>ベースライン:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6090" />
            <source>Choose a masked response exchange file</source>
            <translation>マスクされた応答交換ファイルを選択する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6091" />
            <source>Open baseline…</source>
            <translation>ベースラインをオープン…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6094" />
            <source>Ignore volatile fields:</source>
            <translation>揮発性フィールドを無視します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6096" />
            <source>Comma-separated field names ignored at every JSON depth. Secrets are always masked independently.</source>
            <translation>カンマ区切りのフィールド名は、JSON のどの深さでも無視されます。シークレットは常に独立してマスクされます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6097" />
            <source>Compare responses</source>
            <translation>応答を比較する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6099" />
            <source>Open a baseline to calculate drift.</source>
            <translation>ベースラインを開いてドリフトを計算します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Impact</source>
            <translation>影響</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Change</source>
            <translation>変更</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>JSON path</source>
            <translation>JSONパス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Identity</source>
            <translation>アイデンティティ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Baseline value</source>
            <translation>ベースライン値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Current value</source>
            <translation>現在値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6106" />
            <source>Export masked drift…</source>
            <translation>マスクされたドリフトをエクスポート…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6107" />
            <source>Close</source>
            <translation>閉じる</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6116" />
            <location filename="../zscaler_api_client.py" line="6121" />
            <source>Open response baseline</source>
            <translation>オープンレスポンスベースライン</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6144" />
            <source>Open a baseline response exchange first.</source>
            <translation>まずベースライン応答交換を開きます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6151" />
            <source>No drift found in the compared scope.</source>
            <translation>比較したスコープ内にドリフトは見つかりませんでした。</translation>
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
            <translation>追加されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6158" />
            <source>Removed</source>
            <translation>削除されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6158" />
            <source>Changed</source>
            <translation>変更されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6158" />
            <source>High impact</source>
            <translation>大きな影響力</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6174" />
            <source>Export masked drift</source>
            <translation>マスクされたドリフトをエクスポートする</translation>
        </message>
    </context>
    <context>
        <name>SettingsDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4639" />
            <source>Settings</source>
            <translation>設定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4665" />
            <source>ZIA (Zscaler Internet Access)</source>
            <translation>ZIA (Zscaler インターネット アクセス)</translation>
        </message>
        <message>
            <source>Cloud:</source>
            <translation type="vanished">クラウド:</translation>
        </message>
        <message>
            <source>API Key:</source>
            <translation type="vanished">APIキー:</translation>
        </message>
        <message>
            <source>Username:</source>
            <translation type="vanished">ユーザー名:</translation>
        </message>
        <message>
            <source>Password:</source>
            <translation type="vanished">パスワード:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4699" />
            <source>ZPA (Zscaler Private Access)</source>
            <translation>ZPA (Zscaler プライベート アクセス)</translation>
        </message>
        <message>
            <source>Client ID:</source>
            <translation type="vanished">クライアントID:</translation>
        </message>
        <message>
            <source>Client Secret:</source>
            <translation type="vanished">クライアントシークレット:</translation>
        </message>
        <message>
            <source>Customer ID:</source>
            <translation type="vanished">顧客ID:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4731" />
            <source>ZDX (Zscaler Digital Experience)</source>
            <translation>ZDX (ゼットスケーラー デジタル エクスペリエンス)</translation>
        </message>
        <message>
            <source>Key ID:</source>
            <translation type="vanished">キーID:</translation>
        </message>
        <message>
            <source>Key Secret:</source>
            <translation type="vanished">キーシークレット:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4765" />
            <source>ZCC (Client Connector)</source>
            <translation>ZCC (クライアントコネクタ)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4830" />
            <source>ZIdentity (Identity &amp; Access)</source>
            <translation>ZIdentity (ID・アクセス管理)</translation>
        </message>
        <message>
            <source>Vanity Domain:</source>
            <translation type="vanished">バニティドメイン:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4857" />
            <source>ZTW (Zero Trust Workloads)</source>
            <translation>ZTW (ゼロトラスト ワークロード)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4884" />
            <source>ZWA (Workflow Automation)</source>
            <translation>ZWA (ワークフロー自動化)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4911" />
            <source>EASM (Attack Surface Management)</source>
            <translation>EASM (攻撃対象領域管理)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4943" />
            <location filename="../zscaler_api_client.py" line="5221" />
            <source>Credentials</source>
            <translation>認証情報</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4950" />
            <source>Network</source>
            <translation>ネットワーク</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4958" />
            <source>Request Timeout (seconds):</source>
            <translation>リクエストタイムアウト（秒）:</translation>
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
            <translation>有効</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4793" />
            <source>OneAPI (Unified v3 Framework)</source>
            <translation>OneAPI (統合 v3 フレームワーク)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4966" />
            <location filename="../zscaler_api_client.py" line="4982" />
            <location filename="../zscaler_api_client.py" line="5030" />
            <location filename="../zscaler_api_client.py" line="5036" />
            <location filename="../zscaler_api_client.py" line="5054" />
            <location filename="../zscaler_api_client.py" line="5078" />
            <source>Disabled</source>
            <translation>無効</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4983" />
            <source>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</source>
            <translation>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4988" />
            <source>SSL Verification:</source>
            <translation>SSL検証:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4993" />
            <source>Proxy</source>
            <translation>プロキシ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4999" />
            <source>No Proxy</source>
            <translation>プロキシなし</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4999" />
            <source>System Proxy</source>
            <translation>システムプロキシ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4999" />
            <source>Manual</source>
            <translation>手動</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5001" />
            <source>Proxy Mode:</source>
            <translation>プロキシモード:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5005" />
            <source>Proxy Host:</source>
            <translation>プロキシホスト:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5010" />
            <source>Proxy Port:</source>
            <translation>プロキシポート:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5013" />
            <location filename="../zscaler_api_client.py" line="5018" />
            <source>Optional</source>
            <translation>オプション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5014" />
            <source>Proxy Username:</source>
            <translation>プロキシユーザー名:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5019" />
            <source>Proxy Password:</source>
            <translation>プロキシパスワード:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5024" />
            <source>Behavior</source>
            <translation>動作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5031" />
            <source>Auto-authenticate on startup:</source>
            <translation>起動時に自動認証:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5037" />
            <source>Save request history:</source>
            <translation>リクエスト履歴を保存:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5043" />
            <source>History limit:</source>
            <translation>履歴の上限:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5049" />
            <source>Default API:</source>
            <translation>デフォルトAPI:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5055" />
            <source>Check for updates on startup:</source>
            <translation>起動時に更新を確認:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4646" />
            <location filename="../zscaler_api_client.py" line="5060" />
            <source>Advanced</source>
            <translation>詳細</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4645" />
            <source>Basic</source>
            <translation>基本</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4648" />
            <source>Interface mode:</source>
            <translation>インターフェースモード:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4755" />
            <source>API version:</source>
            <translation>APIバージョン:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4963" />
            <source>Maximum upload/download (MB):</source>
            <translation>最大アップロード/ダウンロード (MB):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4967" />
            <source>Retry only GET, HEAD, and OPTIONS after transient network errors or HTTP 408, 429, 502, 503, and 504. Write requests are never retried automatically.</source>
            <translation>一時的なネットワーク エラーまたは HTTP 408、429、502、503、および 504 の後にのみ、GET、HEAD、および OPTIONS を再試行します。書き込みリクエストが自動的に再試行されることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4968" />
            <source>Retry safe reads:</source>
            <translation>安全な読み取りを再試行します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4972" />
            <source>Maximum read retries:</source>
            <translation>最大読み取り再試行数:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4976" />
            <source>Maximum seconds to honor from Retry-After; shorter exponential backoff is used when the server omits it.</source>
            <translation>Retry-After から順守される最大秒数。サーバーが省略した場合は、より短い指数バックオフが使用されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4977" />
            <source>Maximum retry wait (seconds):</source>
            <translation>最大再試行待機時間 (秒):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5066" />
            <source>Response Display</source>
            <translation>レスポンス表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5073" />
            <source>JSON Indentation:</source>
            <translation>JSONインデント:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5079" />
            <source>Word Wrap:</source>
            <translation>ワードラップ:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5085" />
            <source>Font Size:</source>
            <translation>フォントサイズ:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5090" />
            <source>Light</source>
            <translation>ライト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5090" />
            <source>Dark</source>
            <translation>ダーク</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5090" />
            <source>System</source>
            <translation>システム</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5091" />
            <source>Theme:</source>
            <translation>テーマ:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5096" />
            <source>Display</source>
            <translation>表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5101" />
            <location filename="../zscaler_api_client.py" line="5136" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <location filename="../zscaler_api_client.py" line="5221" />
            <source>Privacy</source>
            <translation>プライバシー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5104" />
            <source>Secrets only (identifiers visible)</source>
            <translation>シークレットのみ (識別子は表示されます)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5105" />
            <source>Obfuscate exports and external integrations (recommended)</source>
            <translation>エクスポートと外部統合を難読化する (推奨)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5106" />
            <source>Obfuscate exports, integrations, and on-screen data</source>
            <translation>エクスポート、統合、画面上のデータを難読化する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5108" />
            <source>Identifier obfuscation:</source>
            <translation>識別子の難読化:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5109" />
            <source>Credentials and authentication material are always masked. Identifier pseudonyms are stable until the local pseudonym key is rotated; no original-to-pseudonym mapping is stored.</source>
            <translation>資格情報と認証マテリアルは常にマスクされます。識別子の仮名は、ローカルの仮名キーがローテーションされるまで安定しています。オリジナルから仮名へのマッピングは保存されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5111" />
            <source>Usernames, display names, and email addresses</source>
            <translation>ユーザー名、表示名、電子メールアドレス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5112" />
            <source>IPv4 and IPv6 addresses</source>
            <translation>IPv4 および IPv6 アドレス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5113" />
            <source>Hostnames, domains, and URL hosts</source>
            <translation>ホスト名、ドメイン、および URL ホスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5114" />
            <source>Tenant, customer, organization, and environment names</source>
            <translation>テナント、顧客、組織、および環境の名前</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5115" />
            <source>Object IDs, UUIDs, GUIDs, and client identifiers</source>
            <translation>オブジェクト ID、UUID、GUID、およびクライアント識別子</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5116" />
            <source>Policy, application, group, location, and resource names</source>
            <translation>ポリシー、アプリケーション、グループ、場所、およびリソース名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5123" />
            <source>Rotate local pseudonym key</source>
            <translation>ローカルの仮名キーをローテーションする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5124" />
            <source>Creates new pseudonyms for future views and exports. Existing files are not modified.</source>
            <translation>今後のビューとエクスポートのために新しい仮名を作成します。既存のファイルは変更されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5127" />
            <location filename="../zscaler_api_client.py" line="5252" />
            <location filename="../zscaler_api_client.py" line="5258" />
            <source>Rotate evidence signing key</source>
            <translation>証拠署名キーをローテーションする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5128" />
            <source>Creates a new Ed25519 key in the system keychain. Existing signed packages remain verifiable with their embedded public keys.</source>
            <translation>システム キーチェーンに新しい Ed25519 キーを作成します。既存の署名済みパッケージは、埋め込まれた公開キーを使用して引き続き検証可能です。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5131" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <source>Obfuscation preview</source>
            <translation>難読化プレビュー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5133" />
            <source>Preview of exported or externally shared data using synthetic examples:</source>
            <translation>合成例を使用した、エクスポートされたデータまたは外部共有データのプレビュー:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5141" />
            <location filename="../zscaler_api_client.py" line="5183" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <location filename="../zscaler_api_client.py" line="5221" />
            <source>Language</source>
            <translation>言語</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5144" />
            <source>System default</source>
            <translation>システムのデフォルト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5147" />
            <source>Application language:</source>
            <translation>アプリケーション言語:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5148" />
            <source>System default follows your operating system language. Restart after saving to apply a change.</source>
            <translation>システムのデフォルトは、オペレーティング システムの言語に従います。変更を適用するには、保存後に再起動します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5151" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <source>AI / LLM</source>
            <translation>AI / LLM</translation>
        </message>
        <message>
            <source>Local catalog assistant</source>
            <translation type="vanished">ローカルカタログアシスタント</translation>
        </message>
        <message>
            <source>OpenAI-compatible cloud</source>
            <translation type="vanished">OpenAI対応クラウド</translation>
        </message>
        <message>
            <source>Local OpenAI-compatible server</source>
            <translation type="vanished">ローカルの OpenAI 互換サーバー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5157" />
            <source>AI provider:</source>
            <translation>AIプロバイダー:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5160" />
            <source>AI endpoint:</source>
            <translation>AI エンドポイント:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5162" />
            <source>Select a provider to prefill a recommended model</source>
            <translation>Select a provider to prefill a recommended model</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5163" />
            <source>Model:</source>
            <translation>モデル:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5166" />
            <source>Stored securely in your system keychain</source>
            <translation>システムのキーチェーンに安全に保管</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5167" />
            <source>API key:</source>
            <translation>APIキー:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5168" />
            <source>Allow this app to send the masked question and catalog metadata to an external AI service</source>
            <translation>このアプリがマスクされた質問とカタログのメタデータを外部 AI サービスに送信できるようにする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5171" />
            <source>Clear AI key</source>
            <translation>クリアAIキー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5174" />
            <source>Test AI connection</source>
            <translation>AI接続のテスト</translation>
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
            <translation>仮名キーをローテーションする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5241" />
            <source>Rotate the local pseudonym key? Future pseudonyms will change and will no longer correlate with previous exports.</source>
            <translation>ローカルの仮名キーをローテーションしますか?今後のペンネームは変更され、以前のエクスポートとは相関関係がなくなります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5249" />
            <source>The local pseudonym key was rotated. No credentials or source identifiers were stored.</source>
            <translation>ローカルの仮名キーがローテーションされました。資格情報やソース識別子は保存されませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5252" />
            <source>Create a new local evidence signing identity? Existing signed packages remain verifiable, but future packages will have a different public-key fingerprint.</source>
            <translation>新しいローカル証拠署名 ID を作成しますか?既存の署名付きパッケージは引き続き検証可能ですが、将来のパッケージには異なる公開キーのフィンガープリントが使用されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5255" />
            <source>Signed evidence</source>
            <translation>署名された証拠</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5255" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>システム キーチェーンは証拠署名キーを保存できませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5258" />
            <source>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</source>
            <translation>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5264" />
            <source>Restore Defaults</source>
            <translation>デフォルトに戻す</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5265" />
            <source>This will reset all advanced settings to defaults. Continue?</source>
            <translation>これにより、すべての詳細設定がデフォルトにリセットされます。続く？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5387" />
            <source>Configured securely in your system keychain</source>
            <translation>システムキーチェーンで安全に構成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5394" />
            <source>AI key cleared</source>
            <translation>AIキーがクリアされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5410" />
            <location filename="../zscaler_api_client.py" line="5413" />
            <location filename="../zscaler_api_client.py" line="5424" />
            <location filename="../zscaler_api_client.py" line="5425" />
            <source>AI connection</source>
            <translation>AI接続</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5410" />
            <source>Local catalog assistant is ready.</source>
            <translation>ローカル カタログ アシスタントの準備が整いました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5413" />
            <source>Enter an AI endpoint first.</source>
            <translation>まず AI エンドポイントを入力します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5422" />
            <source>AI connection succeeded.</source>
            <translation>AI接続に成功しました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5425" />
            <source>AI connection failed: {error}</source>
            <translation>AI connection failed: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5439" />
            <source>ZIA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZIA クラウド: URL プレフィックスを削除 (ホスト名のみが必要)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5446" />
            <source>ZPA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZPA クラウド: URL プレフィックスを削除しました (ホスト名のみが必要)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5452" />
            <source>{product} Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>{product} Cloud: Removed URL prefix (only hostname needed)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5457" />
            <source>ZPA: Customer ID is empty — required for most ZPA endpoints</source>
            <translation>ZPA: 顧客 ID が空です - ほとんどの ZPA エンドポイントに必要です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5459" />
            <source>ZPA: Customer ID should be numeric (got '{value}')</source>
            <translation>ZPA: Customer ID should be numeric (got '{value}')</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5467" />
            <source>OneAPI: Removed URL prefix from vanity domain</source>
            <translation>OneAPI: バニティ ドメインから URL プレフィックスを削除しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5471" />
            <source>OneAPI: Removed .zslogin.net suffix — only the prefix is needed (e.g. 'acme')</source>
            <translation>OneAPI: .zslogin.net サフィックスを削除 — プレフィックスのみが必要です (例: 'acme')</translation>
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
            <translation>ZIdentity: ドメインから URL プレフィックスを削除しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5499" />
            <source>ZIA is enabled but Cloud is empty</source>
            <translation>ZIA は有効ですが、クラウドは空です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5501" />
            <source>ZCC is enabled but Cloud host is empty</source>
            <translation>ZCC は有効ですが、クラウド ホストは空です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5503" />
            <source>OneAPI is enabled but Vanity Domain is empty</source>
            <translation>OneAPI は有効ですが、バニティ ドメインが空です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5505" />
            <source>OneAPI is enabled but Client ID is empty</source>
            <translation>OneAPI は有効ですが、クライアント ID が空です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5520" />
            <source>Settings Validation</source>
            <translation>設定の検証</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5521" />
            <source>Some settings were adjusted or may need attention:</source>
            <translation>一部の設定が調整されているか、注意が必要な場合があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5525" />
            <source>Save Anyway</source>
            <translation>とにかく保存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5526" />
            <source>Go Back</source>
            <translation>戻る</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5551" />
            <source>Secure storage</source>
            <translation>安全なストレージ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5551" />
            <source>The system keychain could not save one or more secrets. No secret changes were applied.</source>
            <translation>システム キーチェーンは 1 つ以上のシークレットを保存できませんでした。秘密の変更は適用されませんでした。</translation>
        </message>
    </context>
    <context>
        <name>SetupWizard</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4185" />
            <source>Getting Started Wizard</source>
            <translation>はじめにウィザード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4204" />
            <source>Back</source>
            <translation>戻る</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4208" />
            <source>Open full settings</source>
            <translation>完全な設定を開く</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4211" />
            <location filename="../zscaler_api_client.py" line="4334" />
            <source>Continue</source>
            <translation>続ける</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4222" />
            <source>Abstract zero trust security network</source>
            <translation>抽象的なゼロトラスト セキュリティ ネットワーク</translation>
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
            <translation>基本</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4236" />
            <source>Advanced</source>
            <translation>上級者向け</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4238" />
            <source>Setup mode:</source>
            <translation>セットアップモード:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4246" />
            <source>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4247" />
            <source>Create an API client with the required roles in ZIdentity, then enter its details below.</source>
            <translation>ZIdentity で必要なロールを持つ API クライアントを作成し、その詳細を以下に入力します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4253" />
            <source>Vanity domain</source>
            <translation>バニティドメイン</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4255" />
            <source>Client ID</source>
            <translation>クライアントID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4258" />
            <source>Client secret</source>
            <translation>クライアントシークレット</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4260" />
            <source>Leave empty for production; use beta or alpha when applicable</source>
            <translation>本番環境では空のままにしておきます。該当する場合はベータ版またはアルファ版を使用してください</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4261" />
            <source>Cloud</source>
            <translation>クラウド</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4263" />
            <source>Optional; required for many ZPA requests</source>
            <translation>オプション。多くの ZPA リクエストに必要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4264" />
            <source>ZPA customer ID</source>
            <translation>ZPA顧客ID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4294" />
            <source>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4295" />
            <source>Choose a common operation. The wizard will load it into the request builder with required path variables highlighted.</source>
            <translation>共通の操作を選択します。ウィザードは、必要なパス変数が強調表示された状態でリクエスト ビルダーにそれをロードします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4353" />
            <source>Secure storage</source>
            <translation>安全なストレージ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4353" />
            <source>The system keychain could not save the secret. Check the keychain service and try again.</source>
            <translation>システム キーチェーンはシークレットを保存できませんでした。キーチェーン サービスを確認して、再試行してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4285" />
            <location filename="../zscaler_api_client.py" line="4299" />
            <source>Just explore the API catalog</source>
            <translation>API カタログを調べてみましょう</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4166" />
            <source>ZIA · List users</source>
            <translation>ZIA · ユーザーのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4167" />
            <source>ZIA · List URL categories</source>
            <translation>ZIA · リスト URL カテゴリ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4168" />
            <source>ZIA · Check activation status</source>
            <translation>ZIA · アクティベーションステータスを確認する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4169" />
            <source>ZIA · List cloud firewall policies</source>
            <translation>ZIA · クラウド ファイアウォール ポリシーの一覧表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4170" />
            <source>ZPA · List application segments</source>
            <translation>ZPA · アプリケーションセグメントのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4171" />
            <source>ZPA · List segment groups</source>
            <translation>ZPA · リストセグメントグループ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4172" />
            <source>ZPA · List connectors</source>
            <translation>ZPA・リストコネクタ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4173" />
            <source>ZDX · List devices and experience scores</source>
            <translation>ZDX · デバイスとエクスペリエンス スコアのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4174" />
            <source>ZDX · List active alerts</source>
            <translation>ZDX · アクティブなアラートをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4175" />
            <source>ZDX · List monitored applications</source>
            <translation>ZDX · 監視対象アプリケーションの一覧表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4176" />
            <source>Client Connector · List devices</source>
            <translation>クライアントコネクタ · デバイスのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4177" />
            <source>ZIdentity · List users</source>
            <translation>ZIdentity · ユーザーのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4178" />
            <source>ZIdentity · List groups</source>
            <translation>ZIdentity · リストグループ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4179" />
            <source>AI Security · List workloads</source>
            <translation>AI セキュリティ · ワークロードのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4303" />
            <source>Authenticate immediately after finishing</source>
            <translation>終了後すぐに認証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4312" />
            <source>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4314" />
            <source>The API Explorer contains the complete bundled catalog. Use the Documentation tab for endpoint details, the Console tab for request activity, and Request History to replay safe, redacted requests.</source>
            <translation>API Explorer には、完全なバンドル カタログが含まれています。エンドポイントの詳細については「ドキュメント」タブを使用し、リクエスト・アクティビティについては「コンソール」タブを使用し、安全な編集されたリクエストを再生するには「リクエスト履歴」を使用します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4332" />
            <source>Step {current} of {total}</source>
            <translation>Step {current} of {total}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4334" />
            <source>Finish</source>
            <translation>終了</translation>
        </message>
    </context>
    <context>
        <name>SocEntityGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Identity</source>
            <translation>アイデンティティ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Address</source>
            <translation>住所</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Device</source>
            <translation>デバイス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Application</source>
            <translation>アプリケーション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Policy</source>
            <translation>ポリシー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Service</source>
            <translation>サービス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Endpoint</source>
            <translation>エンドポイント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Infrastructure</source>
            <translation>インフラストラクチャー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Indicator</source>
            <translation>インジケーター</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Activity</source>
            <translation>アクティビティ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Environment</source>
            <translation>環境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Resource</source>
            <translation>リソース</translation>
        </message>
    </context>
    <context>
        <name>SplashScreen</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4408" />
            <source>Loading...</source>
            <translation>読み込み中...</translation>
        </message>
    </context>
    <context>
        <name>WelcomeDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4010" />
            <source>Welcome to ZS API Client</source>
            <translation>ZS API Clientへようこそ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4022" />
            <source>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</source>
            <translation>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4035" />
            <source>Supported APIs</source>
            <translation>対応API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4038" />
            <source>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</source>
            <translation>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4054" />
            <source>Getting Started</source>
            <translation>はじめに</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4057" />
            <source>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</source>
            <translation>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4070" />
            <source>Tips for Advanced Users</source>
            <translation>上級ユーザー向けのヒント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4073" />
            <source>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4087" />
            <source>Documentation</source>
            <translation>ドキュメント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4108" />
            <source>Show this dialog on startup</source>
            <translation>起動時にこのダイアログを表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4116" />
            <source>Open Settings</source>
            <translation>設定を開く</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4120" />
            <source>Get Started</source>
            <translation>開始</translation>
        </message>
    </context>
    <context>
        <name>owner</name>
        <message>
            <location filename="../zscaler_api_client.py" line="444" />
            <source>Default</source>
            <translation>デフォルト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="657" />
            <source>The response export is unavailable, is a symbolic link, or exceeds the configured transfer limit.</source>
            <translation>応答のエクスポートが利用できないか、シンボリック リンクであるか、構成された転送制限を超えています。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="658" />
            <source>The response export is not valid UTF-8 JSON.</source>
            <translation>応答のエクスポートは有効な UTF-8 JSON ではありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="659" />
            <source>This is not a supported ZS API response exchange file.</source>
            <translation>これは、サポートされている ZS API 応答交換ファイルではありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="660" />
            <source>The response exchange file is incomplete.</source>
            <translation>応答交換ファイルが不完全です。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="662" />
            <source>The response exchange file could not be opened.</source>
            <translation>応答交換ファイルを開けませんでした。</translation>
        </message>
    </context>
    <context>
        <name>window</name>
        <message>
            <location filename="../zscaler_api_client.py" line="12246" />
            <source>Automatic Update Check</source>
            <translation>自動更新チェック</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12248" />
            <source>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</source>
            <translation>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</translation>
        </message>
    </context>
</TS>