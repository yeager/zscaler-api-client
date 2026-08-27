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
            <location filename="../zscaler_api_client.py" line="4443" />
            <source>About ZS API Client</source>
            <translation>Zscaler APIクライアントについて</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4469" />
            <source>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</source>
            <translation>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4502" />
            <source>Disclaimer</source>
            <translation>免責事項</translation>
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
            <translation>バッチ操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5736" />
            <source>Import a CSV file to perform batch operations. The CSV should have columns matching the API parameters.</source>
            <translation>バッチ操作を実行するためにCSVファイルをインポートします。CSVにはAPIパラメータに一致する列が必要です。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5745" />
            <source>Select CSV file...</source>
            <translation>CSVファイルを選択...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5748" />
            <source>Browse...</source>
            <translation>参照...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5760" />
            <source>Operation:</source>
            <translation>操作:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5764" />
            <source>Create Users (ZIA)</source>
            <translation>ユーザー作成 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5765" />
            <source>Update Users (ZIA)</source>
            <translation>ユーザーの更新 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5766" />
            <source>Delete Users (ZIA)</source>
            <translation>ユーザー削除 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5767" />
            <source>Create Locations (ZIA)</source>
            <translation>ロケーション作成 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5768" />
            <source>URL Lookup (ZIA)</source>
            <translation>URL検索 (ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5769" />
            <source>Create App Segments (ZPA)</source>
            <translation>アプリセグメント作成 (ZPA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5795" />
            <source>Select CSV File</source>
            <translation>CSVファイルを選択</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5825" />
            <source>Error</source>
            <translation>エラー</translation>
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
            <translation>更新情報</translation>
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
            <translation>今後のアップデート後は表示しない</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4597" />
            <source>*Changelog not found*</source>
            <translation>*変更履歴が見つかりません*</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4618" />
            <source>*Could not load changelog: {error}*</source>
            <translation>*変更ログを読み込めませんでした: {error} *</translation>
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
            <translation>環境プロファイル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5974" />
            <source>Each environment keeps separate tenant hosts, client identifiers, enabled products, and keychain credentials. Creating a profile copies only non-secret configuration. Activating a profile clears every in-memory API session.</source>
            <translation>各環境では、個別のテナント ホスト、クライアント ID、有効な製品、およびキーチェーン資格情報が保持されます。プロファイルを作成すると、非機密構成のみがコピーされます。プロファイルをアクティブにすると、すべてのインメモリ API セッションがクリアされます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5975" />
            <source>Active</source>
            <translation>アクティブ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5975" />
            <source>Name</source>
            <translation>名前</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5975" />
            <source>Default API</source>
            <translation>デフォルトのAPI</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5975" />
            <source>Configured host</source>
            <translation>構成されたホスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5975" />
            <source>Keychain secrets</source>
            <translation>キーチェーンの秘密</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5978" />
            <location filename="../zscaler_api_client.py" line="6011" />
            <source>Create profile</source>
            <translation>プロフィールの作成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5979" />
            <location filename="../zscaler_api_client.py" line="6023" />
            <source>Rename profile</source>
            <translation>プロファイル名の変更</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5980" />
            <location filename="../zscaler_api_client.py" line="6034" />
            <location filename="../zscaler_api_client.py" line="6035" />
            <source>Delete profile</source>
            <translation>プロフィールの削除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5981" />
            <source>Activate profile</source>
            <translation>プロファイルをアクティブ化する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5982" />
            <source>Close</source>
            <translation>閉じる</translation>
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
            <translation>プロフィール名:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6015" />
            <location filename="../zscaler_api_client.py" line="6026" />
            <source>Enter a unique profile name without path separators (maximum 60 characters).</source>
            <translation>パス区切り文字を含まない一意のプロファイル名を入力します (最大 60 文字)。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6018" />
            <source>The profile was created with non-secret settings only. Open Settings after activation to add its keychain credentials.</source>
            <translation>プロファイルは非シークレット設定のみで作成されました。アクティベーション後に [設定] を開いて、キーチェーンの認証情報を追加します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6034" />
            <source>The default or active profile cannot be deleted. Activate another profile first.</source>
            <translation>デフォルトまたはアクティブなプロファイルは削除できません。まず別のプロファイルをアクティブ化します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6035" />
            <source>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</source>
            <translation>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6037" />
            <source>Secure storage</source>
            <translation>安全なストレージ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6037" />
            <source>The profile could not be deleted because its keychain credentials could not be removed.</source>
            <translation>キーチェーン認証情報を削除できなかったため、プロファイルを削除できませんでした。</translation>
        </message>
    </context>
    <context>
        <name>ErrorCodesDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5666" />
            <source>API Error Codes Reference</source>
            <translation>API エラー コードのリファレンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5672" />
            <source>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5675" />
            <source>Common error codes and their meanings for each API.</source>
            <translation>各 API の一般的なエラー コードとその意味。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5688" />
            <source>Code</source>
            <translation>コード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5688" />
            <source>Name</source>
            <translation>名前</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5688" />
            <source>Description</source>
            <translation>説明</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5708" />
            <source>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5719" />
            <source>Close</source>
            <translation>閉じる</translation>
        </message>
    </context>
    <context>
        <name>ExperienceJourneyGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3969" />
            <source>No journey telemetry in the current response</source>
            <translation>現在の応答には移動テレメトリがありません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3988" />
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
            <location filename="../zscaler_api_client.py" line="3800" />
            <source>Value</source>
            <translation>値</translation>
        </message>
    </context>
    <context>
        <name>HistoryDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5846" />
            <source>Request History</source>
            <translation>リクエスト履歴</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5855" />
            <source>Search:</source>
            <translation>検索:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5857" />
            <source>Filter by URL or method...</source>
            <translation>URL またはメソッドでフィルタリング...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5862" />
            <source>Current environment: {name}</source>
            <translation>Current environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5863" />
            <source>All environments</source>
            <translation>すべての環境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5867" />
            <location filename="../zscaler_api_client.py" line="5944" />
            <source>Clear History</source>
            <translation>履歴をクリア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5876" />
            <source>Time</source>
            <translation>時刻</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5876" />
            <source>Method</source>
            <translation>メソッド</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5876" />
            <source>URL</source>
            <translation>URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5876" />
            <source>Environment</source>
            <translation>環境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5877" />
            <source>Status</source>
            <translation>ステータス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5877" />
            <source>Duration</source>
            <translation>期間</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5889" />
            <source>Load Request</source>
            <translation>リクエストを読み込む</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5893" />
            <source>Close</source>
            <translation>閉じる</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5917" />
            <source>Default</source>
            <translation>デフォルト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5945" />
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
            <location filename="../zscaler_api_client.py" line="8630" />
            <source>Auth</source>
            <translation>認証</translation>
        </message>
        <message>
            <source>Authenticate with selected API</source>
            <translation type="vanished">選択した API で認証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8652" />
            <source>Endpoints</source>
            <translation>エンドポイント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8658" />
            <source>Output</source>
            <translation>出力</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8664" />
            <source>Authentication status, requests, and audit info...</source>
            <translation>認証ステータス、リクエスト、監査情報...</translation>
        </message>
        <message>
            <source>Request</source>
            <translation type="vanished">リクエスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8698" />
            <source>Enter URL or select endpoint...</source>
            <translation>URLを入力またはエンドポイントを選択...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8702" />
            <source>Send</source>
            <translation>送信</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8711" />
            <source>cURL</source>
            <translation>カールURL</translation>
        </message>
        <message>
            <source>Copy request as cURL command</source>
            <translation type="vanished">リクエストをcURLコマンドとしてコピーする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8784" />
            <location filename="../zscaler_api_client.py" line="8793" />
            <source>Key</source>
            <translation>キー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8784" />
            <location filename="../zscaler_api_client.py" line="8793" />
            <location filename="../zscaler_api_client.py" line="8853" />
            <location filename="../zscaler_api_client.py" line="8928" />
            <source>Value</source>
            <translation>値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8787" />
            <source>Params</source>
            <translation>パラメータ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8796" />
            <location filename="../zscaler_api_client.py" line="8921" />
            <source>Headers</source>
            <translation>ヘッダー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8829" />
            <location filename="../zscaler_api_client.py" line="10651" />
            <source>Request body (JSON)...</source>
            <translation>リクエストボディ (JSON)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8833" />
            <location filename="../zscaler_api_client.py" line="8920" />
            <source>Body</source>
            <translation>ボディ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8840" />
            <location filename="../zscaler_api_client.py" line="8853" />
            <source>Variable</source>
            <translation>変数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8856" />
            <source>Path Variables</source>
            <translation>パス変数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8878" />
            <location filename="../zscaler_api_client.py" line="10556" />
            <source>Response</source>
            <translation>レスポンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8893" />
            <source>Pretty</source>
            <translation>かなり</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8896" />
            <source>Toggle pretty-print JSON (Ctrl+P)</source>
            <translation>きれいに印刷された JSON を切り替えます (Ctrl+P)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8901" />
            <location filename="../zscaler_api_client.py" line="10063" />
            <location filename="../zscaler_api_client.py" line="10082" />
            <location filename="../zscaler_api_client.py" line="10087" />
            <location filename="../zscaler_api_client.py" line="10095" />
            <source>Export response</source>
            <translation>エクスポート応答</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8904" />
            <source>Preview export</source>
            <translation>プレビューエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8924" />
            <source>Table</source>
            <translation>テーブル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8926" />
            <source>Chart</source>
            <translation>チャート</translation>
        </message>
        <message>
            <source>JSON structure</source>
            <translation type="vanished">JSON構造</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8930" />
            <source>Tree</source>
            <translation>木</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8933" />
            <source>Heatmap</source>
            <translation>ヒートマップ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8936" />
            <source>Topology</source>
            <translation>トポロジ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8940" />
            <source>Schema</source>
            <translation>スキーマ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8945" />
            <location filename="../zscaler_api_client.py" line="9011" />
            <source>AI Assistant</source>
            <translation>AIアシスタント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8948" />
            <source>Ask a OneAPI question, e.g. list ZPA application segments</source>
            <translation>OneAPI の質問をしてください。 ZPAアプリケーションセグメントをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8952" />
            <source>Choose a guided AI example…</source>
            <translation>ガイド付き AI の例を選択してください…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8958" />
            <source>Find API request</source>
            <translation>APIリクエストの検索</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8961" />
            <source>Run selected request</source>
            <translation>選択したリクエストを実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8964" />
            <source>Export result</source>
            <translation>結果のエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8968" />
            <location filename="../zscaler_api_client.py" line="11711" />
            <source>Ask in plain language. Sensitive values are masked before display or export.</source>
            <translation>わかりやすい言葉で質問してください。機密性の高い値は、表示またはエクスポート前にマスクされます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8974" />
            <source>AI request preview appears here before execution.</source>
            <translation>AI リクエストのプレビューは、実行前にここに表示されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8980" />
            <source>Bar chart</source>
            <translation>棒グラフ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8981" />
            <source>Line chart</source>
            <translation>折れ線グラフ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8982" />
            <source>Pie chart</source>
            <translation>円グラフ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8991" />
            <source>Help</source>
            <translation>ヘルプ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9010" />
            <source>Console</source>
            <translation>コンソール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9027" />
            <source>Ready</source>
            <translation>準備完了</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9036" />
            <source>&amp;File</source>
            <translation>ファイル(&amp;F)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9038" />
            <source>&amp;Settings...</source>
            <translation>設定(&amp;S)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9043" />
            <source>&amp;Batch Operations...</source>
            <translation>バッチ操作(&amp;B)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9050" />
            <source>Request &amp;History...</source>
            <translation>リクエスト履歴(&amp;H)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9059" />
            <source>&amp;Quit</source>
            <translation>終了(&amp;Q)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9065" />
            <source>&amp;Edit</source>
            <translation>編集(&amp;E)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9067" />
            <source>Copy as c&amp;URL</source>
            <translation>URL としてコピー(&amp;U)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9072" />
            <source>Copy &amp;Response</source>
            <translation>応答をコピー(&amp;R)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9079" />
            <source>C&amp;lear Request</source>
            <translation>リクエストをクリア(&amp;L)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9084" />
            <source>&amp;Request</source>
            <translation>リクエスト(&amp;R)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9086" />
            <source>&amp;Send Request</source>
            <translation>リクエストを送信(&amp;S)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9093" />
            <source>Authenticate &amp;ZIA</source>
            <translation>ZIA を認証する(&amp;ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9097" />
            <source>Authenticate Z&amp;PA</source>
            <translation>Z&amp;PA を認証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9103" />
            <source>&amp;Logout All Sessions</source>
            <translation>すべてのセッションをログアウト(&amp;L)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9107" />
            <source>&amp;Operations</source>
            <translation>操作(&amp;O)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9108" />
            <source>Operations &amp;Center...</source>
            <translation>オペレーションセンター(&amp;C)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9116" />
            <source>Environment &amp;Profiles...</source>
            <translation>環境プロファイル(&amp;P)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9121" />
            <source>&amp;Language</source>
            <translation>言語(&amp;L)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9130" />
            <source>&amp;Help</source>
            <translation>ヘルプ(&amp;H)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9132" />
            <source>&amp;Welcome Guide...</source>
            <translation>ウェルカムガイド(&amp;W)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9136" />
            <source>&amp;About...</source>
            <translation>バージョン情報(&amp;A)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9141" />
            <source>About &amp;Qt...</source>
            <translation>Qt について(Q)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9148" />
            <source>ZIA API &amp;Documentation</source>
            <translation>ZIA API ドキュメント(&amp;D)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9152" />
            <source>ZPA API D&amp;ocumentation</source>
            <translation>ZPA API ドキュメント(&amp;O)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9156" />
            <source>Zscaler API &amp;Portal</source>
            <translation>Zscaler API &amp;ポータル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9160" />
            <source>API &amp;Error Codes...</source>
            <translation>API エラーコード(&amp;E)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9166" />
            <source>Check for &amp;Updates...</source>
            <translation>更新を確認(&amp;U)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9236" />
            <source>{count} operations · {groups} groups</source>
            <translation>{count} operations · {groups} groups</translation>
        </message>
        <message>
            <source>Create new profile…</source>
            <translation type="vanished">新しいプロフィールを作成…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9581" />
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
            <location filename="../zscaler_api_client.py" line="9628" />
            <source>{count} matching operations</source>
            <translation>{count} matching operations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9628" />
            <source>{count} operations</source>
            <translation>{count} operations</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9665" />
            <source>Guided example loaded. Find the API request, review the preview, then choose whether to run it.</source>
            <translation>ガイド付きサンプルがロードされました。 API リクエストを見つけてプレビューを確認し、それを実行するかどうかを選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9767" />
            <source>ZIA credentials not configured. Please go to Settings.</source>
            <translation>ZIA 資格情報が構成されていません。 「設定」に進んでください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9796" />
            <source>ZCC credentials not configured. Please go to Settings.</source>
            <translation>ZCC 資格情報が構成されていません。 「設定」に進んでください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9822" />
            <source>{api_type} credentials not configured. Please go to Settings.</source>
            <translation>{api_type} credentials not configured. Please go to Settings.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9886" />
            <source>OneAPI credentials not configured. Please go to Settings.</source>
            <translation>OneAPI 認証情報が構成されていません。 「設定」に進んでください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9927" />
            <source>No matching API operation was found. Try product and resource names.</source>
            <translation>一致する API 操作が見つかりませんでした。製品名とリソース名を試してください。</translation>
        </message>
        <message>
            <source>Suggested request: {method} {name}. Review path variables before running.</source>
            <translation type="vanished">Suggested request: {method} {name}. Review path variables before running.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9944" />
            <source>Operation</source>
            <translation>操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9944" />
            <source>Method</source>
            <translation>方法</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9944" />
            <source>URL</source>
            <translation>URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9978" />
            <source>Ask the AI assistant for a request first.</source>
            <translation>まずはAIアシスタントにリクエストを聞いてみましょう。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9981" />
            <source>Review AI request</source>
            <translation>AIリクエストのレビュー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9982" />
            <source>Review the URL, path variables, and parameters in the preview before sending. Send this request now?</source>
            <translation>送信する前に、プレビューで URL、パス変数、パラメーターを確認してください。このリクエストを今すぐ送信しますか?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10005" />
            <location filename="../zscaler_api_client.py" line="10010" />
            <source>Asking configured LLM…</source>
            <translation>設定された LLM を要求しています…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10008" />
            <source>LLM unavailable; using the local catalog assistant.</source>
            <translation>LLM は利用できません。ローカル カタログ アシスタントを使用します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10019" />
            <source>Configure an AI endpoint and model in Settings.</source>
            <translation>[設定] で AI エンドポイントとモデルを構成します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10023" />
            <source>AI endpoint must use HTTP or HTTPS.</source>
            <translation>AI エンドポイントは HTTP または HTTPS を使用する必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10025" />
            <source>External AI is disabled. Enable it explicitly in Settings.</source>
            <translation>外部AIは無効になっています。設定で明示的に有効にします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10027" />
            <source>External AI endpoints must use HTTPS.</source>
            <translation>外部 AI エンドポイントは HTTPS を使用する必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10029" />
            <source>AI question is too long (maximum 2000 characters).</source>
            <translation>AI の質問が長すぎます (最大 2000 文字)。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10051" />
            <location filename="../zscaler_api_client.py" line="10057" />
            <source>Save binary response</source>
            <translation>バイナリ応答を保存する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10052" />
            <source>Binary content cannot be inspected or obfuscated as text. Save the original response only if you trust this endpoint and destination?</source>
            <translation>バイナリ コンテンツをテキストとして検査したり難読化したりすることはできません。このエンドポイントと宛先を信頼できる場合にのみ、元の応答を保存しますか?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10057" />
            <source>All files (*)</source>
            <translation>すべてのファイル (*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10060" />
            <source>Original binary response saved</source>
            <translation>元のバイナリ応答が保存されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10109" />
            <source>Masked response exported</source>
            <translation>マスクされた応答がエクスポートされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10215" />
            <source>Binary content is not included in this preview.</source>
            <translation>このプレビューにはバイナリ コンテンツは含まれません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10217" />
            <location filename="../zscaler_api_client.py" line="10223" />
            <source>Export preview</source>
            <translation>プレビューのエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10218" />
            <source>Original binary export requires a separate confirmation.</source>
            <translation>元のバイナリのエクスポートには別の確認が必要です。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10224" />
            <source>Sensitive fields are masked in every export.</source>
            <translation>機密フィールドはエクスポートのたびにマスクされます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10278" />
            <location filename="../zscaler_api_client.py" line="10287" />
            <location filename="../zscaler_api_client.py" line="10295" />
            <source>Export AI result</source>
            <translation>AI結果のエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10087" />
            <location filename="../zscaler_api_client.py" line="10095" />
            <location filename="../zscaler_api_client.py" line="10287" />
            <location filename="../zscaler_api_client.py" line="10295" />
            <source>No chart data is available to export.</source>
            <translation>エクスポートできるグラフ データがありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10304" />
            <source>AI result exported</source>
            <translation>AI結果のエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10563" />
            <source>No tabular datasets</source>
            <translation>表形式のデータセットはありません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10572" />
            <source>Nodes</source>
            <translation>ノード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10572" />
            <source>Connections</source>
            <translation>接続</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10574" />
            <source>No nodes or connections were found in this response.</source>
            <translation>この応答ではノードまたは接続が見つかりませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10635" />
            <source>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</source>
            <translation>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10652" />
            <source>Raw request body...</source>
            <translation>生のリクエスト本文...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10653" />
            <source>Form fields as JSON or an encoded key=value string...</source>
            <translation>JSON またはエンコードされた key=value 文字列としてのフォーム フィールド...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10654" />
            <source>Optional multipart fields as a JSON object...</source>
            <translation>JSON オブジェクトとしてのオプションのマルチパート フィールド...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10660" />
            <source>Select upload file</source>
            <translation>アップロードファイルを選択</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9432" />
            <location filename="../zscaler_api_client.py" line="10709" />
            <source>Yes</source>
            <translation>はい</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9432" />
            <location filename="../zscaler_api_client.py" line="10709" />
            <source>No</source>
            <translation>いいえ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10727" />
            <source>{count} variable(s) extracted · {missing} required value(s) missing</source>
            <translation>{count} variable(s) extracted · {missing} required value(s) missing</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10734" />
            <location filename="../zscaler_api_client.py" line="11082" />
            <source>GraphQL body must be a JSON object containing a query string.</source>
            <translation>GraphQL 本体は、クエリ文字列を含む JSON オブジェクトである必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10738" />
            <source>Choose operationName because the document contains multiple GraphQL operations.</source>
            <translation>ドキュメントには複数の GraphQL オペレーションが含まれているため、operationName を選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10740" />
            <source>GraphQL operationName does not match a named operation in the query.</source>
            <translation>GraphQL OperationName がクエリ内の名前付きオペレーションと一致しません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10751" />
            <source>Variable ${name} is required.</source>
            <translation>Variable ${name} is required.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10755" />
            <source>Variable ${name} must be valid for type {type}.</source>
            <translation>Variable ${name} must be valid for type {type}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10762" />
            <source>Remove undeclared GraphQL variables: {names}</source>
            <translation>Remove undeclared GraphQL variables: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10786" />
            <location filename="../zscaler_api_client.py" line="10806" />
            <source>Documented GraphQL schema</source>
            <translation>文書化されたGraphQLスキーマ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10787" />
            <source>The current Automation Hub page has no executable query example. Open its documentation or use schema introspection.</source>
            <translation>現在の Automation Hub ページには、実行可能なクエリの例がありません。ドキュメントを開くか、スキーマ イントロスペクションを使用してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10801" />
            <source>Loaded documented ZInsights query. Review time ranges, filters, and fields before sending.</source>
            <translation>文書化された ZInsights クエリをロードしました。送信する前に、時間範囲、フィルター、フィールドを確認してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10837" />
            <source>Enter a name before saving the GraphQL query.</source>
            <translation>GraphQL クエリを保存する前に名前を入力します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10841" />
            <location filename="../zscaler_api_client.py" line="10882" />
            <location filename="../zscaler_api_client.py" line="10895" />
            <location filename="../zscaler_api_client.py" line="10914" />
            <source>Secure storage</source>
            <translation>安全なストレージ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10841" />
            <source>The system keychain could not save the GraphQL query.</source>
            <translation>システム キーチェーンは GraphQL クエリを保存できませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10847" />
            <source>GraphQL query saved securely</source>
            <translation>GraphQL クエリは安全に保存されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10853" />
            <source>Saved GraphQL query is unavailable.</source>
            <translation>保存された GraphQL クエリは使用できません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10882" />
            <source>The system keychain could not rename the GraphQL query.</source>
            <translation>システム キーチェーンは GraphQL クエリの名前を変更できませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10895" />
            <source>The system keychain could not delete the GraphQL query.</source>
            <translation>システム キーチェーンは GraphQL クエリを削除できませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10906" />
            <source>GraphQL introspection query prepared. Review the endpoint before sending.</source>
            <translation>GraphQL イントロスペクション クエリが準備されました。送信する前にエンドポイントを確認してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10914" />
            <source>The system keychain could not save the GraphQL schema.</source>
            <translation>システム キーチェーンは GraphQL スキーマを保存できませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10916" />
            <source>GraphQL schema saved securely</source>
            <translation>GraphQL スキーマは安全に保存されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8938" />
            <location filename="../zscaler_api_client.py" line="10921" />
            <source>GraphQL schema</source>
            <translation>GraphQLスキーマ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10921" />
            <source>No saved introspection result exists for this endpoint.</source>
            <translation>このエンドポイントには保存されたイントロスペクション結果が存在しません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10962" />
            <source>{count} GraphQL errors</source>
            <translation>{count} GraphQL errors</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10964" />
            <source>extensions included</source>
            <translation>拡張機能が含まれています</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9978" />
            <location filename="../zscaler_api_client.py" line="10837" />
            <location filename="../zscaler_api_client.py" line="10853" />
            <location filename="../zscaler_api_client.py" line="10981" />
            <location filename="../zscaler_api_client.py" line="11013" />
            <location filename="../zscaler_api_client.py" line="11658" />
            <location filename="../zscaler_api_client.py" line="11677" />
            <source>Warning</source>
            <translation>警告</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10981" />
            <source>Please enter a URL</source>
            <translation>URLを入力してください</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9766" />
            <location filename="../zscaler_api_client.py" line="9796" />
            <location filename="../zscaler_api_client.py" line="9821" />
            <location filename="../zscaler_api_client.py" line="9885" />
            <location filename="../zscaler_api_client.py" line="11096" />
            <location filename="../zscaler_api_client.py" line="11099" />
            <location filename="../zscaler_api_client.py" line="11126" />
            <source>Error</source>
            <translation>エラー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8509" />
            <source>ZIA · List users</source>
            <translation>ZIA · ユーザーのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8509" />
            <source>List ZIA users with pagination</source>
            <translation>ページネーションを使用して ZIA ユーザーをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8510" />
            <source>ZIA · Find URL categories</source>
            <translation>ZIA · URL カテゴリを検索</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8510" />
            <source>Search ZIA URL categories for social media</source>
            <translation>ソーシャル メディアの ZIA URL カテゴリを検索</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8511" />
            <source>ZIA · Review firewall policies</source>
            <translation>ZIA · ファイアウォール ポリシーを確認する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8511" />
            <source>List ZIA cloud firewall policies</source>
            <translation>ZIA クラウド ファイアウォール ポリシーの一覧表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8512" />
            <source>ZPA · Application segments</source>
            <translation>ZPA・アプリケーションセグメント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8512" />
            <source>List ZPA application segments</source>
            <translation>ZPA アプリケーションセグメントをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8513" />
            <source>ZPA · Connector inventory</source>
            <translation>ZPA・コネクタ在庫</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8513" />
            <source>List ZPA connectors</source>
            <translation>ZPA コネクタのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8514" />
            <source>ZDX · Experience overview</source>
            <translation>ZDX・体験概要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8514" />
            <source>List ZDX devices and experience scores</source>
            <translation>ZDX デバイスとエクスペリエンス スコアの一覧表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8515" />
            <source>ZDX · Active alerts</source>
            <translation>ZDX · アクティブなアラート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8515" />
            <source>List active ZDX alerts with pagination</source>
            <translation>アクティブな ZDX アラートをページネーションで一覧表示する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8516" />
            <source>ZDX · Application monitoring</source>
            <translation>ZDX・アプリケーション監視</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8516" />
            <source>List monitored ZDX applications</source>
            <translation>監視対象の ZDX アプリケーションをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8517" />
            <source>Client Connector · Devices</source>
            <translation>クライアントコネクタ・デバイス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8517" />
            <source>List Client Connector devices</source>
            <translation>クライアントコネクタデバイスをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8518" />
            <source>ZIdentity · Users</source>
            <translation>ZIdentity · ユーザー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8518" />
            <source>List ZIdentity users with pagination</source>
            <translation>ページネーションを使用して ZIdentity ユーザーをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8519" />
            <source>ZIdentity · Groups</source>
            <translation>Zアイデンティティ・グループ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8519" />
            <source>List ZIdentity groups</source>
            <translation>ZIdentity グループをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8520" />
            <source>AI Security · Workloads</source>
            <translation>AI セキュリティ · ワークロード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8520" />
            <source>List AI Security workloads</source>
            <translation>AI セキュリティのワークロードをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8574" />
            <source>ZS API Client</source>
            <translation>ZS APIクライアント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8581" />
            <source>Explore APIs, review changes, and operate safely</source>
            <translation>API を探索し、変更を確認し、安全に運用する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8585" />
            <source>1 · Environment</source>
            <translation>1・環境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8586" />
            <source>Select or create a tenant environment profile</source>
            <translation>テナント環境プロファイルの選択または作成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8589" />
            <source>2 · Analyze</source>
            <translation>2・分析する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8590" />
            <source>Open dashboards, audits, policy diffs, and response analysis</source>
            <translation>オープンなダッシュボード、監査、ポリシーの差分、および応答分析</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8593" />
            <source>3 · Change</source>
            <translation>3・変更</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8594" />
            <source>Open policy diff and policy-as-code export</source>
            <translation>オープンポリシーの差分とコードとしてのポリシーのエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8597" />
            <source>Operations Center</source>
            <translation>オペレーションセンター</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8600" />
            <source>PAC Workspace</source>
            <translation>PAC Workspace</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8601" />
            <source>Create, verify, map, and prepare PAC files (Ctrl+Shift+P)</source>
            <translation>Create, verify, map, and prepare PAC files (Ctrl+Shift+P)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8605" />
            <source>Settings</source>
            <translation>設定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8617" />
            <source>API Explorer</source>
            <translation>APIエクスプローラー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8620" />
            <location filename="../zscaler_api_client.py" line="9944" />
            <source>Product</source>
            <translation>製品</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8631" />
            <source>Authenticate with selected API (Ctrl+Shift+A)</source>
            <translation>選択した API で認証します (Ctrl+Shift+A)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8641" />
            <source>🔍 Filter endpoints...</source>
            <translation>🔍 エンドポイントをフィルタリング...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8675" />
            <source>Request Builder</source>
            <translation>リクエストビルダー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8703" />
            <source>Send request (Ctrl+Return)</source>
            <translation>リクエストの送信 (Ctrl+Return)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8707" />
            <source>Cancel</source>
            <translation>キャンセル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8708" />
            <source>Stop before the next page or chain step; the current HTTP request is allowed to finish safely.</source>
            <translation>次のページまたはチェーンステップの前で停止します。現在の HTTP リクエストは安全に終了できます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8712" />
            <source>Copy request as cURL command (Ctrl+Shift+C)</source>
            <translation>リクエストを cURL コマンドとしてコピー (Ctrl+Shift+C)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8718" />
            <source>GraphQL request</source>
            <translation>GraphQLリクエスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8719" />
            <source>Send the request body as a GraphQL query and preserve data, errors, and extensions.</source>
            <translation>リクエスト本文を GraphQL クエリとして送信し、データ、エラー、拡張子を保存します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8723" />
            <source>Fetch all pages</source>
            <translation>すべてのページを取得する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8724" />
            <source>Follow only the pagination parameters documented for the selected read operation.</source>
            <translation>選択した読み取り操作について文書化されているページネーション パラメータのみに従ってください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8726" />
            <source>Page size:</source>
            <translation>ページサイズ:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8730" />
            <source>Maximum pages:</source>
            <translation>最大ページ数:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8738" />
            <source>Saved GraphQL query name</source>
            <translation>保存されたGraphQLクエリ名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8742" />
            <source>Save query</source>
            <translation>クエリの保存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8745" />
            <source>Load query</source>
            <translation>クエリをロードする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8748" />
            <source>Rename query</source>
            <translation>クエリ名の変更</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8751" />
            <source>Delete query</source>
            <translation>クエリの削除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8754" />
            <source>Introspect schema</source>
            <translation>スキーマのイントロスペクト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8757" />
            <source>Load saved schema</source>
            <translation>保存されたスキーマをロードする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8763" />
            <source>Documented ZInsights query…</source>
            <translation>文書化された ZInsights クエリ…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8768" />
            <source>Load documented query</source>
            <translation>文書化されたクエリをロードする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8771" />
            <source>Browse documented schema</source>
            <translation>文書化されたスキーマを参照する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8802" />
            <source>Body type:</source>
            <translation>体型:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8804" />
            <source>JSON</source>
            <translation>JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8805" />
            <source>Raw text</source>
            <translation>生のテキスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8806" />
            <source>Form URL encoded</source>
            <translation>エンコードされたフォーム URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8807" />
            <location filename="../zscaler_api_client.py" line="11091" />
            <source>Multipart file upload</source>
            <translation>マルチパートファイルのアップロード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8815" />
            <source>File field:</source>
            <translation>ファイルフィールド:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8819" />
            <source>Upload file:</source>
            <translation>ファイルをアップロードします:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8822" />
            <source>Select a local file; its path is never saved in history</source>
            <translation>ローカル ファイルを選択します。そのパスは履歴に保存されません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8824" />
            <source>Browse…</source>
            <translation>閲覧…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8838" />
            <source>Extract typed variables from the selected GraphQL operation. Values are inserted into the JSON request body, never into the URL.</source>
            <translation>選択した GraphQL オペレーションから型付き変数を抽出します。値は URL ではなく、JSON リクエスト本文に挿入されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8840" />
            <location filename="../zscaler_api_client.py" line="8865" />
            <source>Type</source>
            <translation>種類</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8840" />
            <location filename="../zscaler_api_client.py" line="8865" />
            <source>Required</source>
            <translation>必須</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8840" />
            <location filename="../zscaler_api_client.py" line="8866" />
            <source>Default</source>
            <translation>デフォルト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8840" />
            <source>JSON value</source>
            <translation>JSON値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8844" />
            <source>Extract variables from query</source>
            <translation>クエリから変数を抽出する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8845" />
            <location filename="../zscaler_api_client.py" line="10729" />
            <location filename="../zscaler_api_client.py" line="11691" />
            <source>No GraphQL variables extracted.</source>
            <translation>GraphQL 変数は抽出されませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8846" />
            <location filename="../zscaler_api_client.py" line="11082" />
            <location filename="../zscaler_api_client.py" line="11132" />
            <source>GraphQL Variables</source>
            <translation>GraphQL 変数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8860" />
            <location filename="../zscaler_api_client.py" line="11696" />
            <source>Select a documented endpoint to inspect its request contract.</source>
            <translation>文書化されたエンドポイントを選択して、そのリクエスト コントラクトを検査します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8865" />
            <source>Location</source>
            <translation>場所</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8865" />
            <source>Name</source>
            <translation>名前</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8866" />
            <source>Description</source>
            <translation>説明</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8871" />
            <source>API Guide</source>
            <translation>APIガイド</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8885" />
            <source>Dataset:</source>
            <translation>データセット:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8907" />
            <source>Open export</source>
            <translation>エクスポートを開く</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8908" />
            <source>Compare drift</source>
            <translation>ドリフトを比較する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8928" />
            <source>Field</source>
            <translation>フィールド</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9054" />
            <source>Open response export…</source>
            <translation>応答のエクスポートを開きます…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9055" />
            <source>Compare response drift…</source>
            <translation>応答ドリフトを比較…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9112" />
            <source>PAC &amp;Workspace...</source>
            <translation>PAC ワークスペース(&amp;W)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9392" />
            <location filename="../zscaler_api_client.py" line="9406" />
            <source>Required value</source>
            <translation>必要な値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9392" />
            <location filename="../zscaler_api_client.py" line="9406" />
            <source>Optional value</source>
            <translation>オプションの値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9440" />
            <source>body template available</source>
            <translation>本文テンプレートが利用可能</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9440" />
            <source>no body template</source>
            <translation>本文テンプレートなし</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9441" />
            <source>not listed</source>
            <translation>記載されていない</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9442" />
            <source>{count} documented parameter(s) · {body} · responses: {codes}. Templates are examples; review every value before sending.</source>
            <translation>{count} documented parameter(s) · {body} · responses: {codes}. Templates are examples; review every value before sending.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9446" />
            <source>Documented {mode} pagination is available as an explicit bounded option.</source>
            <translation>Documented {mode} pagination is available as an explicit bounded option.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9465" />
            <source>Documented {mode} pagination using {parameter}. Results retain every page and stop at the configured maximum.</source>
            <translation>Documented {mode} pagination using {parameter}. Results retain every page and stop at the configured maximum.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9477" />
            <source>The URL was edited manually. Select an endpoint again to attach its documented request contract.</source>
            <translation>URL は手動で編集されました。エンドポイントを再度選択して、文書化されたリクエスト コントラクトを添付します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9569" />
            <source>Active environment: {name}</source>
            <translation>Active environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9581" />
            <source>The selected environment profile is unavailable.</source>
            <translation>選択した環境プロファイルは使用できません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9595" />
            <source>Environment profile active: {name}. Sessions and request data were cleared.</source>
            <translation>Environment profile active: {name}. Sessions and request data were cleared.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9639" />
            <source>Write request prepared</source>
            <translation>書き込みリクエストが準備されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9640" />
            <source>The documented write template is ready. Review the API Guide, parameters, and body, then choose Send explicitly.</source>
            <translation>文書化された書き込みテンプレートが完成しました。 API ガイド、パラメーター、本文を確認し、[明示的に送信] を選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9934" />
            <source>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</source>
            <translation>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10082" />
            <source>No tabular response data is available to export.</source>
            <translation>エクスポートできる表形式の応答データはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10232" />
            <location filename="../zscaler_api_client.py" line="10243" />
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
            <location filename="../zscaler_api_client.py" line="10266" />
            <source>Response export opened locally; no API request was sent.</source>
            <translation>応答のエクスポートがローカルで開かれました。 API リクエストは送信されませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10271" />
            <location filename="../zscaler_api_client.py" line="10273" />
            <source>Response drift comparison</source>
            <translation>応答ドリフト比較</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10271" />
            <source>Binary responses cannot be structurally compared. Export and inspect the original file with an appropriate tool.</source>
            <translation>二値応答は構造的に比較できません。適切なツールを使用して元のファイルをエクスポートして検査します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10273" />
            <source>Send a request or open a response export before comparing drift.</source>
            <translation>ドリフトを比較する前に、リクエストを送信するか、レスポンスのエクスポートを開きます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10977" />
            <location filename="../zscaler_api_client.py" line="11494" />
            <source>Read only</source>
            <translation>読み取り専用</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10977" />
            <location filename="../zscaler_api_client.py" line="11494" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>読み取り専用モードは書き込みリクエストをブロックします。続行するには、オペレーション センターでローカルの役割を変更します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11002" />
            <source>Missing Path Variables</source>
            <translation>パス変数が欠落しています</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11003" />
            <source>Enter values for: {names}</source>
            <translation>Enter values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11013" />
            <source>Configure a base URL for the selected product before sending a relative API path.</source>
            <translation>相対 API パスを送信する前に、選択した製品のベース URL を構成します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11067" />
            <source>Missing documented parameters</source>
            <translation>文書化されたパラメータが欠落している</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11068" />
            <source>Enter required values for: {names}</source>
            <translation>Enter required values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11091" />
            <source>Select an available local file before sending.</source>
            <translation>送信する前に、利用可能なローカル ファイルを選択してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11096" />
            <source>Multipart fields must be a JSON object: {error}</source>
            <translation>Multipart fields must be a JSON object: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11099" />
            <source>Multipart fields must be a JSON object.</source>
            <translation>マルチパート フィールドは JSON オブジェクトである必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11138" />
            <source>Sending request...</source>
            <translation>リクエスト送信中...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11169" />
            <source>Pagination unavailable</source>
            <translation>ページネーションは使用できません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11169" />
            <source>Select a documented paginated GET operation before fetching all pages.</source>
            <translation>すべてのページを取得する前に、文書化されたページ分割された GET 操作を選択してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11187" />
            <source>Fetching page {page} of at most {maximum}…</source>
            <translation>Fetching page {page} of at most {maximum}…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11191" />
            <source>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</source>
            <translation>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11200" />
            <source>Cancellation requested; waiting for the current HTTP request to finish safely…</source>
            <translation>キャンセルがリクエストされました。現在の HTTP リクエストが安全に終了するのを待っています…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11213" />
            <source>Request cancelled before completion</source>
            <translation>完了前にリクエストがキャンセルされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11261" />
            <source>Safe read retries: {count}</source>
            <translation>Safe read retries: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11282" />
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
            <location filename="../zscaler_api_client.py" line="11322" />
            <source>Pagination complete: {pages} page(s), {records} record(s)</source>
            <translation>Pagination complete: {pages} page(s), {records} record(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11329" />
            <source>Pagination stopped before completion: {pages} page(s), {records} record(s)</source>
            <translation>Pagination stopped before completion: {pages} page(s), {records} record(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11357" />
            <source>ZDX authenticated successfully</source>
            <translation>ZDXが正常に認証されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11361" />
            <source>ZCC authenticated successfully</source>
            <translation>ZCCが正常に認証されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11365" />
            <source>ZIdentity authenticated successfully</source>
            <translation>ZIdentityが正常に認証されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11369" />
            <source>ZTW authenticated successfully</source>
            <translation>ZTWの認証に成功しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11373" />
            <source>ZWA authenticated successfully</source>
            <translation>ZWAの認証に成功しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11377" />
            <source>EASM authenticated successfully</source>
            <translation>EASMが正常に認証されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11381" />
            <source>OneAPI authenticated successfully</source>
            <translation>OneAPI が正常に認証されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11386" />
            <source>Authenticated successfully</source>
            <translation>認証に成功しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11486" />
            <source>Batch validation failed: </source>
            <translation>バッチ検証が失敗しました: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11489" />
            <source>Select {api} before running this batch.</source>
            <translation>Select {api} before running this batch.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11497" />
            <source>Review complete. Send {count} request(s) to the active environment?</source>
            <translation>Review complete. Send {count} request(s) to the active environment?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11498" />
            <source>Confirm batch</source>
            <translation>バッチを確認する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11513" />
            <source>Sending batch request 0 of {count}...</source>
            <translation>Sending batch request 0 of {count}...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11514" />
            <source>Batch execution started: {count} request(s)</source>
            <translation>Batch execution started: {count} request(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11531" />
            <source>Sending batch request {completed} of {total}...</source>
            <translation>Sending batch request {completed} of {total}...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11541" />
            <location filename="../zscaler_api_client.py" line="11542" />
            <location filename="../zscaler_api_client.py" line="11543" />
            <source>Batch complete: {successful} succeeded, {failed} failed.</source>
            <translation>Batch complete: {successful} succeeded, {failed} failed.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11556" />
            <source>Request History</source>
            <translation>リクエスト履歴</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11557" />
            <source>This request belongs to another environment. Activate that environment profile before loading it.</source>
            <translation>このリクエストは別の環境に属しています。環境プロファイルをロードする前に、その環境プロファイルをアクティブ化します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11570" />
            <location filename="../zscaler_api_client.py" line="11589" />
            <source>Multipart request loaded. Select the local file again before sending.</source>
            <translation>マルチパートリクエストがロードされました。送信する前にローカル ファイルを再度選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11661" />
            <source>Masked cURL command copied to clipboard</source>
            <translation>マスクされた cURL コマンドがクリップボードにコピーされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11666" />
            <source>Binary response</source>
            <translation>二値応答</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11666" />
            <source>Binary response content is not copied to the clipboard. Use Export to save the original file.</source>
            <translation>バイナリ応答の内容はクリップボードにコピーされません。エクスポートを使用して元のファイルを保存します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11675" />
            <source>Masked response copied to clipboard</source>
            <translation>マスクされた応答がクリップボードにコピーされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11820" />
            <source>The application needs to restart to apply the new language.

Restart now?</source>
            <translation>新しい言語を適用するには、アプリケーションを再起動する必要があります。

今すぐ再起動しますか？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11947" />
            <source>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Release:&lt;/b&gt; {name}&lt;/p&gt;{prerelease}&lt;p style='color: #666; font-size: 11px;'&gt;✓ Verified from github.com/{repo}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</source>
            <translation>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Release:&lt;/b&gt; {name}&lt;/p&gt;{prerelease}&lt;p style='color: #666; font-size: 11px;'&gt;✓ Verified from github.com/{repo}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</translation>
        </message>
        <message>
            <source>Success</source>
            <translation type="vanished">成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11334" />
            <source>Request successful</source>
            <translation>リクエスト成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11344" />
            <source>ZIA authenticated successfully</source>
            <translation>ZIA が正常に認証されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11353" />
            <source>ZPA authenticated successfully</source>
            <translation>ZPA が正常に認証されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11419" />
            <location filename="../zscaler_api_client.py" line="11425" />
            <source>Request failed</source>
            <translation>リクエスト失敗</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11486" />
            <location filename="../zscaler_api_client.py" line="11489" />
            <location filename="../zscaler_api_client.py" line="11543" />
            <source>Batch</source>
            <translation>バッチ</translation>
        </message>
        <message>
            <source>Processing {count} items...</source>
            <translation type="vanished">{count}件を処理中...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11591" />
            <source>Request loaded from history</source>
            <translation>履歴からロードされたリクエスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11658" />
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
            <location filename="../zscaler_api_client.py" line="11677" />
            <source>No response to copy</source>
            <translation>コピーしても反応なし</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11713" />
            <source>Request cleared</source>
            <translation>リクエストはクリアされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11726" />
            <location filename="../zscaler_api_client.py" line="11777" />
            <source>Missing Credentials</source>
            <translation>資格情報がありません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11727" />
            <source>Please configure ZIA credentials in Settings first.</source>
            <translation>まず設定で ZIA 資格情報を構成してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11749" />
            <source>ZIA auth request prepared. Click Send to authenticate.</source>
            <translation>ZIA 認証リクエストが準備されました。 「送信」をクリックして認証します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11778" />
            <source>Please configure ZPA credentials in Settings first.</source>
            <translation>まず設定で ZPA 資格情報を構成してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11791" />
            <source>ZPA auth request prepared. Click Send to authenticate.</source>
            <translation>ZPA 認証リクエストが準備されました。 「送信」をクリックして認証します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11796" />
            <source>All sessions cleared</source>
            <translation>すべてのセッションがクリアされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11819" />
            <source>Language Changed</source>
            <translation>言語変更</translation>
        </message>
        <message>
            <source>Please restart the application to apply the new language.</source>
            <translation type="vanished">新しい言語を適用するにはアプリケーションを再起動してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11868" />
            <source>Checking for updates...</source>
            <translation>更新を確認中...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11941" />
            <source>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</source>
            <translation>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11945" />
            <source>Update Available</source>
            <translation>更新が利用可能</translation>
        </message>
        <message>
            <source>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</source>
            <translation type="vanished">&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11967" />
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
            <location filename="../zscaler_api_client.py" line="11970" />
            <source>You are up to date (v{version})</source>
            <translation>最新バージョンです (v{version})</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11975" />
            <source>Update Check Failed</source>
            <translation>更新確認に失敗</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11976" />
            <source>Could not check for updates:
{error}</source>
            <translation>更新を確認できませんでした:
{error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11978" />
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
            <location filename="../zscaler_api_client.py" line="9009" />
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
            <location filename="../zscaler_api_client.py" line="6170" />
            <source>Operations Center</source>
            <translation>オペレーションセンター</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6193" />
            <source>Requests</source>
            <translation>リクエスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6193" />
            <source>Success rate</source>
            <translation>成功率</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6193" />
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Audit integrity</source>
            <translation>監査の整合性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6193" />
            <source>Active environment</source>
            <translation>アクティブな環境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6205" />
            <source>Recent request outcomes</source>
            <translation>最近のリクエストの結果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6210" />
            <location filename="../zscaler_api_client.py" line="6288" />
            <location filename="../zscaler_api_client.py" line="6292" />
            <location filename="../zscaler_api_client.py" line="6332" />
            <location filename="../zscaler_api_client.py" line="6388" />
            <location filename="../zscaler_api_client.py" line="6405" />
            <source>Time</source>
            <translation>時間</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6210" />
            <source>Activity</source>
            <translation>アクティビティ</translation>
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
            <translation>ステータス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6211" />
            <source>Recent activity</source>
            <translation>最近の活動</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6214" />
            <source>Refresh dashboard</source>
            <translation>ダッシュボードを更新する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6218" />
            <source>Dashboard</source>
            <translation>ダッシュボード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6221" />
            <source>Previous policy JSON</source>
            <translation>以前のポリシー JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Proposed policy JSON</source>
            <translation>提案されたポリシー JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6229" />
            <source>Compare policies</source>
            <translation>ポリシーを比較する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6231" />
            <source>Export policy as JSON</source>
            <translation>ポリシーを JSON としてエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6232" />
            <source>Export policy as YAML</source>
            <translation>ポリシーを YAML としてエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6233" />
            <source>Run compliance checks</source>
            <translation>コンプライアンスチェックを実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6234" />
            <location filename="../zscaler_api_client.py" line="7626" />
            <source>Policy diff</source>
            <translation>ポリシーの差分</translation>
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
            <translation>ポリシーのシミュレート (ローカルのみ)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6244" />
            <location filename="../zscaler_api_client.py" line="7674" />
            <source>Simulation</source>
            <translation>シミュレーション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6247" />
            <source>CSV data, e.g. name,email
Ada,ada@example.com</source>
            <translation>CSV データ、例:名前、メールアドレス
エイダ、ada@example.com</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6250" />
            <source>Required columns (comma separated)</source>
            <translation>必須の列 (カンマ区切り)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6252" />
            <source>Validate bulk import</source>
            <translation>一括インポートを検証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6253" />
            <source>Bulk operations</source>
            <translation>一括操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <source>Administrator</source>
            <translation>管理者</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <source>Analyst</source>
            <translation>アナリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <location filename="../zscaler_api_client.py" line="7409" />
            <source>Read only</source>
            <translation>読み取り専用</translation>
        </message>
        <message>
            <source>Optional local automation script; never runs without approval</source>
            <translation type="vanished">オプションのローカル自動化スクリプト。承認なしに実行することはありません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <source>Local role:</source>
            <translation>ローカルの役割:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <source>Alert threshold (errors):</source>
            <translation>アラートしきい値 (エラー):</translation>
        </message>
        <message>
            <source>Webhook endpoint (disabled until approved):</source>
            <translation type="vanished">Webhook エンドポイント (承認されるまで無効):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <source>Local automation:</source>
            <translation>ローカルオートメーション:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6264" />
            <source>Save governance settings</source>
            <translation>ガバナンス設定を保存する</translation>
        </message>
        <message>
            <source>Read-only mode blocks write requests. Webhooks and local automation are saved only; this app will ask before any execution.</source>
            <translation type="vanished">読み取り専用モードは書き込みリクエストをブロックします。 Webhook とローカル オートメーションは保存のみです。このアプリは実行前に質問します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6266" />
            <location filename="../zscaler_api_client.py" line="7683" />
            <location filename="../zscaler_api_client.py" line="7686" />
            <location filename="../zscaler_api_client.py" line="7689" />
            <location filename="../zscaler_api_client.py" line="7697" />
            <source>Governance</source>
            <translation>ガバナンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6269" />
            <source>Official integrations are optional. Credentials remain in the system keychain and no command runs automatically.</source>
            <translation>公式統合はオプションです。資格情報はシステム キーチェーンに残り、コマンドは自動的に実行されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6270" />
            <source>Integration</source>
            <translation>統合</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6270" />
            <source>Recommended use</source>
            <translation>推奨用途</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6273" />
            <source>Check local integrations</source>
            <translation>ローカル統合を確認する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6274" />
            <source>Prepare Terraform import</source>
            <translation>Terraform インポートの準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6275" />
            <source>Prepare MCP connection</source>
            <translation>MCP接続の準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6276" />
            <source>Prepare SDK configuration</source>
            <translation>SDK設定の準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6277" />
            <source>Send masked webhook test</source>
            <translation>マスクされた Webhook テストを送信する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6279" />
            <source>Copy reviewed command</source>
            <translation>レビューしたコマンドをコピーする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6289" />
            <location filename="../zscaler_api_client.py" line="7736" />
            <location filename="../zscaler_api_client.py" line="7756" />
            <source>Integrations</source>
            <translation>統合</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Event</source>
            <translation>イベント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6288" />
            <location filename="../zscaler_api_client.py" line="6292" />
            <location filename="../zscaler_api_client.py" line="6305" />
            <source>Details</source>
            <translation>詳細</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6294" />
            <source>Refresh audit trail</source>
            <translation>監査証跡を更新する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6295" />
            <location filename="../zscaler_api_client.py" line="6490" />
            <source>Schedule report</source>
            <translation>スケジュールレポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6296" />
            <source>Create redacted support bundle</source>
            <translation>編集されたサポート バンドルを作成する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6297" />
            <source>Audit &amp; automation</source>
            <translation>監査と自動化</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6300" />
            <source>Local security posture uses redacted request history and audit integrity. It is an operational signal, not a tenant security assessment.</source>
            <translation>ローカルのセキュリティ体制では、編集されたリクエスト履歴と監査の整合性が使用されます。これは運用上のシグナルであり、テナントのセキュリティ評価ではありません。</translation>
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
            <translation>重大度</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6305" />
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>Finding</source>
            <translation>見つける</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6306" />
            <source>Refresh security posture</source>
            <translation>セキュリティ体制を刷新する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6307" />
            <source>Security posture</source>
            <translation>セキュリティ体制</translation>
        </message>
        <message>
            <source>Build a redacted local investigation timeline. Prepared chains never send API requests automatically.</source>
            <translation type="vanished">編集された現地調査のタイムラインを作成します。準備されたチェーンが API リクエストを自動的に送信することはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6322" />
            <source>Investigation:</source>
            <translation>調査:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6323" />
            <source>API failure investigation</source>
            <translation>API障害調査</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6323" />
            <source>Change activity review</source>
            <translation>変更アクティビティのレビュー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6323" />
            <source>Slow response investigation</source>
            <translation>応答が遅い調査</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6324" />
            <source>Prepare investigation chain</source>
            <translation>調査チェーンを準備する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6332" />
            <location filename="../zscaler_api_client.py" line="6344" />
            <source>Source</source>
            <translation>ソース</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6313" />
            <location filename="../zscaler_api_client.py" line="6332" />
            <location filename="../zscaler_api_client.py" line="6458" />
            <source>Evidence</source>
            <translation>証拠</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6175" />
            <source>Data scope:</source>
            <translation>データ範囲:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6178" />
            <source>Active environment: {name}</source>
            <translation>Active environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6182" />
            <source>All environments (cross-tenant overview)</source>
            <translation>すべての環境 (テナント間の概要)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6184" />
            <source>Analytics are tenant-isolated by default. Cross-tenant scope is explicit and available in Advanced mode.</source>
            <translation>分析はデフォルトでテナントごとに分離されます。クロステナント スコープは明示的であり、詳細モードで使用できます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6193" />
            <source>Open alerts</source>
            <translation>オープンアラート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6208" />
            <source>Recent request latency (ms)</source>
            <translation>最近のリクエストのレイテンシー (ミリ秒)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6210" />
            <location filename="../zscaler_api_client.py" line="6292" />
            <location filename="../zscaler_api_client.py" line="6405" />
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Environment</source>
            <translation>環境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6215" />
            <source>Auto-refresh local signals</source>
            <translation>ローカル信号の自動リフレッシュ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6216" />
            <source>Every 30 seconds</source>
            <translation>30秒ごと</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6216" />
            <source>Every minute</source>
            <translation>毎分</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6216" />
            <source>Every 5 minutes</source>
            <translation>5分ごと</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6225" />
            <source>Policy rule overview</source>
            <translation>ポリシールールの概要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6227" />
            <location filename="../zscaler_api_client.py" line="6228" />
            <location filename="../zscaler_api_client.py" line="6242" />
            <source>Rule</source>
            <translation>ルール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6227" />
            <location filename="../zscaler_api_client.py" line="6242" />
            <source>Action</source>
            <translation>アクション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6227" />
            <source>Conditions</source>
            <translation>条件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6227" />
            <source>State</source>
            <translation>州</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6228" />
            <source>Best-practice finding</source>
            <translation>ベストプラクティスの発見</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6242" />
            <source>Order</source>
            <translation>注文</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6242" />
            <source>Decision</source>
            <translation>決定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6260" />
            <source>Show webhook endpoint</source>
            <translation>Webhook エンドポイントを表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6262" />
            <source>Absolute path to a reviewed local Python automation</source>
            <translation>レビュー済みのローカル Python オートメーションへの絶対パス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <source>Webhook endpoint (stored in system keychain):</source>
            <translation>Webhook エンドポイント (システム キーチェーンに保存):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6265" />
            <source>Read-only mode blocks write requests and local automation. Every webhook or local automation execution requires explicit approval.</source>
            <translation>読み取り専用モードでは、書き込みリクエストとローカル オートメーションがブロックされます。すべての Webhook またはローカル オートメーションの実行には明示的な承認が必要です。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6278" />
            <source>Run reviewed local automation</source>
            <translation>レビューされたローカルオートメーションを実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6280" />
            <source>Send current masked alerts</source>
            <translation>現在のマスクされたアラートを送信する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6287" />
            <source>Webhook delivery history</source>
            <translation>Webhook配信履歴</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6288" />
            <source>Delivery</source>
            <translation>配送</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6310" />
            <source>Local alerts evaluate retained, redacted request history only. They do not monitor the tenant in real time or send data externally.</source>
            <translation>ローカル アラートは、保持され編集されたリクエスト履歴のみを評価します。テナントをリアルタイムで監視したり、データを外部に送信したりすることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6313" />
            <source>Alert</source>
            <translation>アラート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6313" />
            <source>Count</source>
            <translation>カウント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6314" />
            <source>Refresh local alerts</source>
            <translation>ローカルアラートを更新する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6315" />
            <source>Copy masked alert summary</source>
            <translation>マスクされたアラートの概要をコピーする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6316" />
            <source>Export alerts as JSON</source>
            <translation>アラートをJSONとしてエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6317" />
            <source>Export alerts as Markdown</source>
            <translation>アラートをマークダウンとしてエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6318" />
            <source>Alert Center</source>
            <translation>アラートセンター</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6331" />
            <source>Security investigation evidence map</source>
            <translation>セキュリティ調査証拠マップ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6352" />
            <source>Refresh investigation</source>
            <translation>調査を更新する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6353" />
            <location filename="../zscaler_api_client.py" line="6827" />
            <source>Export incident evidence</source>
            <translation>インシデントの証拠をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6355" />
            <source>Incident investigation</source>
            <translation>事件調査</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6432" />
            <source>Create a local review from Policy diff. Approval records intent only; no policy, Terraform, or Git change is applied automatically.</source>
            <translation>ポリシーの差分からローカル レビューを作成します。承認は意図のみを記録します。ポリシー、Terraform、Git の変更は自動的には適用されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Change ticket or reference</source>
            <translation>チケットまたはリファレンスの変更</translation>
        </message>
        <message>
            <source>Reviewer name</source>
            <translation type="vanished">査読者名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Reference:</source>
            <translation>参考：</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Reviewer:</source>
            <translation>査読者:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6438" />
            <source>Prepare change review</source>
            <translation>変更レビューの準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6439" />
            <source>Record local approval</source>
            <translation>ローカル承認を記録する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6440" />
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Export Git review</source>
            <translation>Git レビューのエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6441" />
            <location filename="../zscaler_api_client.py" line="7129" />
            <source>Export rollback plan</source>
            <translation>ロールバック計画のエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6443" />
            <location filename="../zscaler_api_client.py" line="7093" />
            <location filename="../zscaler_api_client.py" line="7115" />
            <location filename="../zscaler_api_client.py" line="7118" />
            <location filename="../zscaler_api_client.py" line="7127" />
            <source>Change control</source>
            <translation>変更管理</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6470" />
            <source>Generate local, redacted reports for leadership, SOC, or operations. Reports contain no credentials and are not sent automatically.</source>
            <translation>リーダーシップ、SOC、または運用に関するローカルの編集済みレポートを生成します。レポートには認証情報が含まれていないため、自動的には送信されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6471" />
            <source>Report type:</source>
            <translation>レポートの種類:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <location filename="../zscaler_api_client.py" line="7270" />
            <location filename="../zscaler_api_client.py" line="7293" />
            <location filename="../zscaler_api_client.py" line="7900" />
            <location filename="../zscaler_api_client.py" line="8001" />
            <source>CISO security summary</source>
            <translation>CISO セキュリティの概要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <location filename="../zscaler_api_client.py" line="7270" />
            <location filename="../zscaler_api_client.py" line="7293" />
            <location filename="../zscaler_api_client.py" line="7900" />
            <source>SOC investigation summary</source>
            <translation>SOC調査の概要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <location filename="../zscaler_api_client.py" line="7270" />
            <location filename="../zscaler_api_client.py" line="7293" />
            <location filename="../zscaler_api_client.py" line="7900" />
            <source>Operations health summary</source>
            <translation>運用状況の概要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6473" />
            <source>Generate report</source>
            <translation>レポートの生成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6475" />
            <source>Security posture report artwork</source>
            <translation>セキュリティ体制レポートのアートワーク</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6478" />
            <location filename="../zscaler_api_client.py" line="7336" />
            <source>Export report as Markdown</source>
            <translation>レポートをマークダウンとしてエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6479" />
            <location filename="../zscaler_api_client.py" line="7330" />
            <source>Export report as JSON</source>
            <translation>レポートをJSONとしてエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6480" />
            <location filename="../zscaler_api_client.py" line="7333" />
            <source>Export visual report as HTML</source>
            <translation>ビジュアルレポートをHTMLとしてエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <source>Scheduled reports</source>
            <translation>スケジュールされたレポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Name</source>
            <translation>名前</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Type</source>
            <translation>種類</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Cadence</source>
            <translation>ケイデンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Next run</source>
            <translation>次の実行</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Mode</source>
            <translation>モード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6491" />
            <source>Run selected now</source>
            <translation>選択したものを今すぐ実行</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6492" />
            <source>Enable or pause</source>
            <translation>有効化または一時停止</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6493" />
            <source>Remove schedule</source>
            <translation>スケジュールを削除する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6494" />
            <source>Refresh schedules</source>
            <translation>スケジュールを更新する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6496" />
            <source>Reports</source>
            <translation>レポート</translation>
        </message>
        <message>
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and every run requires approval.</source>
            <translation type="vanished">アクティブな認証された環境に対してレビューされたシーケンスを実行します。チェーンは 20 ステップに制限されており、選択した製品ホスト上に留まり、実行するたびに承認が必要です。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6500" />
            <source>Chain JSON</source>
            <translation>チェーンJSON</translation>
        </message>
        <message>
            <source>A JSON list of API requests. Relative paths use the active product host.</source>
            <translation type="vanished">API リクエストの JSON リスト。相対パスでは、アクティブな製品ホストが使用されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6508" />
            <source>Stop after the first failed step</source>
            <translation>最初に失敗したステップの後に停止する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6509" />
            <source>Validate chain</source>
            <translation>チェーンの検証</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6510" />
            <location filename="../zscaler_api_client.py" line="7415" />
            <source>Run approved chain</source>
            <translation>承認されたチェーンを実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6511" />
            <source>Cancel chain</source>
            <translation>キャンセルチェーン</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <location filename="../zscaler_api_client.py" line="7487" />
            <source>Export masked chain results</source>
            <translation>マスクされたチェーン結果をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6513" />
            <location filename="../zscaler_api_client.py" line="7405" />
            <location filename="../zscaler_api_client.py" line="7411" />
            <location filename="../zscaler_api_client.py" line="7482" />
            <location filename="../zscaler_api_client.py" line="7486" />
            <source>API chains</source>
            <translation>APIチェーン</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6516" />
            <source>Build a local digital twin of policy order. It explains decisions, highlights overlap and shadowing, estimates change blast radius, and never applies a policy.</source>
            <translation>政策秩序のローカルデジタルツインを構築します。決定事項を説明し、オーバーラップとシャドウイングを強調表示し、爆発半径の変化を推定し、ポリシーを適用することはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6518" />
            <source>Policy rules JSON or an object containing a rules list</source>
            <translation>ポリシールール JSON またはルールリストを含むオブジェクト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6519" />
            <source>Analyze policy twin</source>
            <translation>ポリシーツインを分析する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6520" />
            <location filename="../zscaler_api_client.py" line="7571" />
            <source>Export twin evidence</source>
            <translation>双子の証拠をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6521" />
            <source>Load proposed policy</source>
            <translation>提案されたポリシーをロードする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6522" />
            <source>Test context:</source>
            <translation>テストコンテキスト:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6522" />
            <source>Request context JSON</source>
            <translation>リクエストコンテキストJSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6523" />
            <source>Explain decision</source>
            <translation>決定の説明</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Rules</source>
            <translation>ルール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Conflicts</source>
            <translation>紛争</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Shadowed</source>
            <translation>影がかかった</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Blast radius</source>
            <translation>爆発範囲</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6529" />
            <source>Policy order and conflict graph</source>
            <translation>ポリシーの順序と競合のグラフ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>Earlier rule</source>
            <translation>以前のルール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>Later rule</source>
            <translation>後のルール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6344" />
            <location filename="../zscaler_api_client.py" line="6349" />
            <location filename="../zscaler_api_client.py" line="6370" />
            <location filename="../zscaler_api_client.py" line="6384" />
            <location filename="../zscaler_api_client.py" line="6408" />
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>Explanation</source>
            <translation>説明</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6207" />
            <location filename="../zscaler_api_client.py" line="6360" />
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Latency</source>
            <translation>レイテンシー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6321" />
            <source>Correlate retained local activity with every object in the current masked REST or GraphQL response. Paths are investigation hypotheses, never proof of compromise, and prepared chains never run automatically.</source>
            <translation>保持されているローカル アクティビティを、現在のマスクされた REST または GraphQL 応答内のすべてのオブジェクトと関連付けます。パスは調査の仮説であり、決して侵害の証拠ではなく、準備されたチェーンが自動的に実行されることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6325" />
            <source>Include current API/GraphQL response</source>
            <translation>現在の API/GraphQL レスポンスを含める</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6326" />
            <source>Correlate entities</source>
            <translation>エンティティを関連付ける</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6333" />
            <source>Evidence timeline</source>
            <translation>証拠のタイムライン</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6337" />
            <source>Entities</source>
            <translation>エンティティ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6337" />
            <source>Relationships</source>
            <translation>人間関係</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6337" />
            <source>Potential paths</source>
            <translation>潜在的な経路</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6337" />
            <source>High-risk entities</source>
            <translation>高リスクの実体</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6341" />
            <source>Filter entities:</source>
            <translation>エンティティをフィルタリングします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6341" />
            <source>Name, type, risk, or evidence source</source>
            <translation>名前、種類、リスク、または証拠源</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6342" />
            <source>SOC entity and potential attack-path graph</source>
            <translation>SOC エンティティと潜在的な攻撃パスのグラフ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6343" />
            <location filename="../zscaler_api_client.py" line="6773" />
            <source>Select an entity to inspect its local evidence.</source>
            <translation>ローカル証拠を検査するエンティティを選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6344" />
            <source>Target</source>
            <translation>ターゲット</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6344" />
            <source>Hops</source>
            <translation>ホップ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6345" />
            <source>Entity graph</source>
            <translation>エンティティグラフ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6348" />
            <source>Explainable signals are derived only from retained local evidence and the selected response. Validate them against authoritative product telemetry.</source>
            <translation>説明可能なシグナルは、保持されているローカル証拠と選択された応答からのみ導き出されます。信頼できる製品テレメトリに対してそれらを検証します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6349" />
            <source>Signal</source>
            <translation>信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6349" />
            <source>Entity</source>
            <translation>エンティティ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6350" />
            <source>Correlated signals</source>
            <translation>相関信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6354" />
            <location filename="../zscaler_api_client.py" line="6836" />
            <source>Export entity graph</source>
            <translation>エンティティグラフのエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6358" />
            <source>Trace observed digital experience from user and device through network and service edge to the application. The parser consumes the complete current REST or GraphQL response, marks missing stages explicitly, and never queries the tenant automatically.</source>
            <translation>ユーザーとデバイスからネットワークとサービス エッジを介してアプリケーションに至るまで、観察されたデジタル エクスペリエンスを追跡します。パーサーは現在の REST または GraphQL 応答を完全に消費し、欠落しているステージを明示的にマークし、テナントに自動的にクエリを実行することはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6360" />
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Experience score</source>
            <translation>経験値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6360" />
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Packet loss</source>
            <translation>パケットロス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6360" />
            <source>Journey issues</source>
            <translation>旅の問題</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6364" />
            <source>Observed user-to-application experience journey</source>
            <translation>観察されたユーザーからアプリケーションへのエクスペリエンス ジャーニー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6367" />
            <source>Trend metric:</source>
            <translation>トレンド指標:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6368" />
            <source>Observed value</source>
            <translation>観測値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6370" />
            <source>Stage</source>
            <translation>ステージ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6370" />
            <source>Metric</source>
            <translation>メトリック</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6372" />
            <source>Analyze current experience response</source>
            <translation>現在のエクスペリエンスの反応を分析する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <location filename="../zscaler_api_client.py" line="6901" />
            <source>Export masked journey</source>
            <translation>マスクされたジャーニーをエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6374" />
            <source>Experience journey</source>
            <translation>体験の旅</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6392" />
            <source>Build and test explainable detections against retained local request history. Rules use a bounded declarative grammar—no Python, eval, tenant writes, network calls, or automatic remediation.</source>
            <translation>保持されているローカルリクエスト履歴に対して説明可能な検出を構築してテストします。ルールでは境界付きの宣言文法が使用され、Python、eval、テナント書き込み、ネットワーク呼び出し、自動修復は使用されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6393" />
            <source>Template:</source>
            <translation>テンプレート:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <source>Server errors</source>
            <translation>サーバーエラー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <source>Rate-limit responses</source>
            <translation>レート制限応答</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <source>High request latency</source>
            <translation>リクエストのレイテンシが高い</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <source>Write activity</source>
            <translation>書き込みアクティビティ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <source>Authentication failures</source>
            <translation>認証の失敗</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Anomaly sensitivity:</source>
            <translation>異常感度:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Relaxed</source>
            <translation>リラックスした</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Balanced</source>
            <translation>バランスの取れた</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Sensitive</source>
            <translation>敏感</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6398" />
            <source>Declarative detection rule JSON</source>
            <translation>宣言型検出ルール JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6399" />
            <source>Validate rule</source>
            <translation>ルールの検証</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6400" />
            <source>Run local detection</source>
            <translation>ローカル検出を実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6401" />
            <source>Analyze adaptive anomalies</source>
            <translation>適応異常を分析する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6402" />
            <location filename="../zscaler_api_client.py" line="7011" />
            <source>Export masked detection evidence</source>
            <translation>マスクされた検出証拠をエクスポートする</translation>
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
            <translation>エンドポイント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Observed</source>
            <translation>観察された</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6409" />
            <source>Detection lab</source>
            <translation>検出ラボ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6446" />
            <source>Continuously evaluate a transparent local evidence baseline. Framework mappings are navigational aids—not certification—and no tenant query or remediation runs automatically.</source>
            <translation>透明性のあるローカル証拠ベースラインを継続的に評価します。フレームワーク マッピングは、認証ではなくナビゲーション補助であり、テナントのクエリや修復が自動的に実行されることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6447" />
            <source>Framework view:</source>
            <translation>フレームワークビュー:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <source>All local controls</source>
            <translation>すべてのローカルコントロール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <source>NIST CSF 2.0 functions</source>
            <translation>NIST CSF 2.0 の機能</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <source>CISA Zero Trust pillars</source>
            <translation>CISA ゼロトラストの柱</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6449" />
            <source>Include proposed policy from Policy diff</source>
            <translation>Policy diff から提案されたポリシーを含めます</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <source>Evaluate now</source>
            <translation>今すぐ評価してください</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <location filename="../zscaler_api_client.py" line="7305" />
            <source>Assurance score</source>
            <translation>保証スコア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Passed</source>
            <translation>合格</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <location filename="../zscaler_api_client.py" line="7203" />
            <source>Not evaluated</source>
            <translation>評価されていない</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <source>Evidence coverage</source>
            <translation>証拠の網羅性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6458" />
            <source>Control</source>
            <translation>制御</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6458" />
            <source>Control objective</source>
            <translation>制御目標</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6458" />
            <source>Framework mapping</source>
            <translation>フレームワークマッピング</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6458" />
            <source>Recommendation</source>
            <translation>おすすめ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6459" />
            <source>Leadership narrative</source>
            <translation>リーダーシップの物語</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6428" />
            <location filename="../zscaler_api_client.py" line="6461" />
            <source>Score</source>
            <translation>スコア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6281" />
            <source>JSON Lines (SIEM/SOAR)</source>
            <translation>JSON 行 (SIEM/SOAR)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6282" />
            <location filename="../zscaler_api_client.py" line="7743" />
            <source>Export masked security events</source>
            <translation>マスクされたセキュリティ イベントをエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6283" />
            <location filename="../zscaler_api_client.py" line="7749" />
            <source>Export read-only MCP manifest</source>
            <translation>読み取り専用の MCP マニフェストをエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6284" />
            <location filename="../zscaler_api_client.py" line="7757" />
            <source>Export Terraform review handoff</source>
            <translation>Terraform レビューのハンドオフのエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6377" />
            <source>Inspect the complete current REST or GraphQL response for explicit internet exposure, vulnerability severity and broad or write-capable access. Findings are local hypotheses and deception suggestions are never deployed automatically.</source>
            <translation>現在の完全な REST または GraphQL 応答を検査して、明示的なインターネットへの露出、脆弱性の重大度、および広範なアクセスまたは書き込み可能なアクセスを確認します。調査結果はローカルな仮説であり、欺瞞の提案が自動的に展開されることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>Exposure signals</source>
            <translation>露出信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>High-risk assets</source>
            <translation>高リスク資産</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>Access findings</source>
            <translation>調査結果にアクセスする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>Broad privileges</source>
            <translation>幅広い特権</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6383" />
            <source>Asset</source>
            <translation>資産</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6383" />
            <source>Risk score</source>
            <translation>リスクスコア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6383" />
            <source>Observed factors</source>
            <translation>観測された要因</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6384" />
            <source>Subject</source>
            <translation>件名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6384" />
            <source>Permission field</source>
            <translation>許可フィールド</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6385" />
            <source>Defensive deception opportunities</source>
            <translation>防御的欺瞞の機会</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6386" />
            <source>Analyze current exposure and access</source>
            <translation>現在の露出とアクセスを分析する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6386" />
            <location filename="../zscaler_api_client.py" line="6934" />
            <source>Export masked exposure evidence</source>
            <translation>隠蔽された暴露証拠をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <location filename="../zscaler_api_client.py" line="6952" />
            <location filename="../zscaler_api_client.py" line="6954" />
            <source>Investigation notebook</source>
            <translation>捜査ノート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <source>Note title</source>
            <translation>ノートのタイトル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <source>Comma-separated tags</source>
            <translation>カンマ区切りのタグ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <source>Masked investigation observations, decisions and follow-up</source>
            <translation>覆面調査の観察、決定、フォローアップ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>Save local note</source>
            <translation>ローカルメモを保存する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <location filename="../zscaler_api_client.py" line="6959" />
            <source>Export masked notebook</source>
            <translation>マスクされたノートブックをエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>Title</source>
            <translation>タイトル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>Tags</source>
            <translation>タグ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>Preview</source>
            <translation>プレビュー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6389" />
            <source>Exposure &amp; access</source>
            <translation>露出とアクセス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6413" />
            <source>Use guided, locally tracked response and recovery checklists. A completed step records only operator intent in the local audit trail; it never changes a tenant or closes an authoritative incident.</source>
            <translation>ガイド付きでローカルに追跡された対応および回復チェックリストを使用します。完了したステップでは、ローカル監査証跡にオペレーターの意図のみが記録されます。テナントを変更したり、権威あるインシデントを終了したりすることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6414" />
            <source>Playbook:</source>
            <translation>プレイブック:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>API/service disruption</source>
            <translation>API/サービスの中断</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>High-risk policy change</source>
            <translation>リスクの高い政策変更</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>Digital experience degradation</source>
            <translation>デジタルエクスペリエンスの劣化</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>Possible credential exposure</source>
            <translation>資格情報漏洩の可能性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>Ransomware containment support</source>
            <translation>ランサムウェア封じ込めのサポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6418" />
            <source>Mark selected step complete</source>
            <translation>選択したステップを完了としてマークする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6419" />
            <location filename="../zscaler_api_client.py" line="7053" />
            <source>Export masked playbook evidence</source>
            <translation>マスクされたプレイブックの証拠をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6421" />
            <source>Guidance</source>
            <translation>ガイダンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6421" />
            <source>Local evidence</source>
            <translation>現地の証拠</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6422" />
            <source>Smart API planner (review only)</source>
            <translation>スマート API プランナー (レビューのみ)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Describe a goal to rank documented Automation Hub operations deterministically. Read operations are preferred; tenant values are never guessed and nothing runs automatically.</source>
            <translation>文書化された Automation Hub オペレーションを決定的にランク付けする目標を説明します。読み取り操作が優先されます。テナント値は決して推測されず、何も自動的に実行されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6424" />
            <source>Example: investigate slow ZDX application experience</source>
            <translation>例: 遅い ZDX アプリケーション エクスペリエンスを調査する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6425" />
            <source>Plan documented operations</source>
            <translation>文書化された操作を計画する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Copy safe reads to API Chains</source>
            <translation>セーフリードを API チェーンにコピーする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6428" />
            <source>Product</source>
            <translation>製品</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6428" />
            <source>Operation</source>
            <translation>操作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6429" />
            <location filename="../zscaler_api_client.py" line="7045" />
            <source>Response playbooks</source>
            <translation>応答プレイブック</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Change owner</source>
            <translation>所有者の変更</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Independent reviewer</source>
            <translation>独立した査読者</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Owner:</source>
            <translation>所有者:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Maintenance window confirmed</source>
            <translation>メンテナンス期間が確認されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <source>Local simulation reviewed</source>
            <translation>ローカルシミュレーションのレビュー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <source>Rollback prepared</source>
            <translation>ロールバックが準備されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6436" />
            <source>Gate</source>
            <translation>ゲート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6436" />
            <source>Required</source>
            <translation>必須</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6442" />
            <location filename="../zscaler_api_client.py" line="7140" />
            <location filename="../zscaler_api_client.py" line="7144" />
            <location filename="../zscaler_api_client.py" line="7145" />
            <source>Verify rollback artifact</source>
            <translation>ロールバック アーティファクトを確認する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Local baseline:</source>
            <translation>ローカルベースライン:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6463" />
            <source>Save assessment baseline</source>
            <translation>評価ベースラインを保存する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6464" />
            <location filename="../zscaler_api_client.py" line="7243" />
            <source>Export signed evidence</source>
            <translation>署名された証拠をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6465" />
            <location filename="../zscaler_api_client.py" line="7250" />
            <source>Verify signed evidence</source>
            <translation>署名された証拠を検証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6467" />
            <location filename="../zscaler_api_client.py" line="7174" />
            <location filename="../zscaler_api_client.py" line="7230" />
            <source>Continuous assurance</source>
            <translation>継続的な保証</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6532" />
            <location filename="../zscaler_api_client.py" line="7591" />
            <location filename="../zscaler_api_client.py" line="7595" />
            <location filename="../zscaler_api_client.py" line="7597" />
            <location filename="../zscaler_api_client.py" line="7609" />
            <source>Policy time travel</source>
            <translation>タイムトラベル政策</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Save snapshot</source>
            <translation>スナップショットの保存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6535" />
            <source>Use as baseline</source>
            <translation>ベースラインとして使用する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6536" />
            <source>Load snapshot</source>
            <translation>スナップショットのロード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6537" />
            <source>Delete snapshot</source>
            <translation>スナップショットの削除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6539" />
            <location filename="../zscaler_api_client.py" line="7526" />
            <location filename="../zscaler_api_client.py" line="7561" />
            <location filename="../zscaler_api_client.py" line="7586" />
            <source>Policy twin</source>
            <translation>ポリシーツイン</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6581" />
            <source>All environments</source>
            <translation>すべての環境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6597" />
            <source>Showing local evidence for: {name}</source>
            <translation>Showing local evidence for: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6599" />
            <source>Cross-tenant overview is active. Exports and integrations will include all local environments.</source>
            <translation>クロステナントの概要がアクティブです。エクスポートと統合には、すべてのローカル環境が含まれます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6605" />
            <location filename="../zscaler_api_client.py" line="6969" />
            <location filename="../zscaler_api_client.py" line="7375" />
            <source>Invalid JSON: </source>
            <translation>無効な JSON: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6625" />
            <source>Audit chain is valid</source>
            <translation>監査チェーンは有効です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6625" />
            <source>Audit chain needs review</source>
            <translation>監査チェーンの見直しが必要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6631" />
            <source>Success</source>
            <translation>成功</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6631" />
            <source>Other</source>
            <translation>その他</translation>
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
            <translation>クリティカル</translation>
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
            <translation>高</translation>
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
            <translation>中</translation>
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
            <translation>低い</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6647" />
            <location filename="../zscaler_api_client.py" line="6809" />
            <location filename="../zscaler_api_client.py" line="7285" />
            <location filename="../zscaler_api_client.py" line="7543" />
            <location filename="../zscaler_api_client.py" line="7637" />
            <source>Info</source>
            <translation>情報</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6651" />
            <source>Audit integrity needs review</source>
            <translation>監査の整合性のレビューが必要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6651" />
            <source>The local audit chain did not verify.</source>
            <translation>ローカル監査チェーンは検証しませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6652" />
            <source>Repeated API failures</source>
            <translation>繰り返される API エラー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6652" />
            <source>{count} failed requests are in local history.</source>
            <translation>{count} failed requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6653" />
            <source>API failures observed</source>
            <translation>API エラーが観察されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6653" />
            <source>{count} request(s) need review.</source>
            <translation>{count} request(s) need review.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6654" />
            <source>Change activity burst</source>
            <translation>アクティビティバーストの変更</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6654" />
            <source>{count} write requests are in local history.</source>
            <translation>{count} write requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6655" />
            <source>Slow API responses</source>
            <translation>API 応答が遅い</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6655" />
            <source>{count} request(s) took ten seconds or more.</source>
            <translation>{count} request(s) took ten seconds or more.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6656" />
            <source>No local telemetry yet</source>
            <translation>ローカルテレメトリはまだありません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6656" />
            <source>Send or import redacted requests to establish a local baseline.</source>
            <translation>編集されたリクエストを送信またはインポートして、ローカルのベースラインを確立します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6677" />
            <source>{count} local alert(s) · error threshold: {threshold}</source>
            <translation>{count} local alert(s) · error threshold: {threshold}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6683" />
            <source>The local audit chain needs review.</source>
            <translation>ローカル監査チェーンは見直す必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6684" />
            <source>Local failed requests reached the configured threshold.</source>
            <translation>ローカルで失敗したリクエストが設定されたしきい値に達しました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6685" />
            <source>API rate limiting was observed in local history.</source>
            <translation>API レート制限がローカル履歴で観察されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6686" />
            <source>A response reported no remaining API rate-limit capacity.</source>
            <translation>応答では、API レート制限容量が残っていないことが報告されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6687" />
            <source>The latest request failed after successful requests to the same endpoint.</source>
            <translation>同じエンドポイントへのリクエストが成功した後、最新のリクエストは失敗しました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6688" />
            <source>The latest endpoint response was much slower than its local baseline.</source>
            <translation>最新のエンドポイントの応答は、ローカルのベースラインよりもはるかに遅かったです。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6689" />
            <source>Three or more local requests took ten seconds or more.</source>
            <translation>3 つ以上のローカル リクエストには 10 秒以上かかりました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6707" />
            <source>Local alert summary</source>
            <translation>ローカルアラートの概要</translation>
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
            <translation>ローカルアラートはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6711" />
            <source>Count: {count}</source>
            <translation>Count: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6716" />
            <source>Export local alerts</source>
            <translation>ローカルアラートをエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6745" />
            <source>Normal</source>
            <translation>ノーマル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6750" />
            <source>Observed relationship chain across local evidence; validate before treating it as an exploitable attack path.</source>
            <translation>地元の証拠全体で観察された関係の連鎖。悪用可能な攻撃パスとして扱う前に検証してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6756" />
            <source>Endpoint failure evidence</source>
            <translation>エンドポイント障害の証拠</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6756" />
            <source>Relationship concentration</source>
            <translation>関係集中</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6756" />
            <source>Security indicator observed</source>
            <translation>セキュリティ指標が観察されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6758" />
            <source>The endpoint has locally retained server or network failure evidence.</source>
            <translation>エンドポイントには、サーバーまたはネットワーク障害の証拠がローカルに保持されています。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6759" />
            <source>The entity is connected to an unusually broad set of locally observed relationships.</source>
            <translation>このエンティティは、ローカルで観察される非常に広範な関係に接続されています。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6760" />
            <source>A threat, exposure, vulnerability, or indicator-like object was present in the response.</source>
            <translation>脅威、暴露、脆弱性、または指標のようなオブジェクトが応答に存在しました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6769" />
            <source>The graph reached its local safety limit; use the filter or export the evidence for complete review.</source>
            <translation>グラフはローカルの安全限界に達しました。フィルターを使用するか、完全なレビューのために証拠をエクスポートします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6771" />
            <source>No correlatable entities are available in the selected local scope.</source>
            <translation>選択したローカル スコープで使用できる相関可能なエンティティはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6793" />
            <source>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</source>
            <translation>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6812" />
            <source>Request</source>
            <translation>リクエスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6812" />
            <source>Audit</source>
            <translation>監査</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6818" />
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
            <location filename="../zscaler_api_client.py" line="6819" />
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
            <location filename="../zscaler_api_client.py" line="6820" />
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
            <location filename="../zscaler_api_client.py" line="6869" />
            <source>{value:g} ms</source>
            <translation>{value:g} ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6875" />
            <source>User</source>
            <translation>ユーザー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6875" />
            <source>Device</source>
            <translation>デバイス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6875" />
            <source>Network</source>
            <translation>ネットワーク</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6875" />
            <source>Service edge</source>
            <translation>サービスエッジ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6875" />
            <source>Application</source>
            <translation>アプリケーション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Device score</source>
            <translation>デバイススコア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Application score</source>
            <translation>アプリケーションスコア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Service-edge score</source>
            <translation>サービスエッジスコア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Jitter</source>
            <translation>ジッター</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>DNS time</source>
            <translation>DNS時間</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>TCP connect time</source>
            <translation>TCP接続時間</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Page fetch time</source>
            <translation>ページフェッチ時間</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Availability</source>
            <translation>可用性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>CPU</source>
            <translation>CPU</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Memory</source>
            <translation>記憶</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Overall experience score is below 70</source>
            <translation>全体的な経験値が 70 未満です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Device score is below 70</source>
            <translation>デバイススコアが70未満です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Application score is below 70</source>
            <translation>アプリケーションのスコアが 70 未満です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Service-edge score is below 70</source>
            <translation>サービスエッジスコアが 70 未満です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Observed latency exceeds 250 ms</source>
            <translation>観測された遅延が 250 ミリ秒を超えている</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Observed packet loss exceeds 2%</source>
            <translation>観測されたパケット損失は 2% を超えています</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Observed jitter exceeds 40 ms</source>
            <translation>観測されたジッターが 40 ミリ秒を超えている</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Observed availability is below 99%</source>
            <translation>観測された可用性は 99% 未満です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6889" />
            <source>Schema-tolerant local interpretation of observed API fields. Thresholds are transparent operational hints, not Zscaler health verdicts or SLA determinations.</source>
            <translation>観察された API フィールドのスキーマ耐性のあるローカル解釈。しきい値は透過的な運用上のヒントであり、Zscaler の健全性の判定や SLA の決定ではありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6890" />
            <source>No current API or GraphQL response is available. Run or import a ZDX/OneAPI query, then analyze again.</source>
            <translation>現在利用可能な API または GraphQL 応答はありません。 ZDX/OneAPI クエリを実行またはインポートし、再度分析します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6890" />
            <source>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</source>
            <translation>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6924" />
            <source>Explicit broad or write-capable access observed; validate least privilege and assignment context.</source>
            <translation>明示的なブロードアクセスまたは書き込み可能なアクセスが観察されました。最小権限と割り当てコンテキストを検証します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6929" />
            <source>Consider a monitored decoy resource near exposed paths</source>
            <translation>露出したパスの近くにある監視対象のおとりリソースを検討する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6929" />
            <source>Consider a non-production canary permission for privileged-path monitoring</source>
            <translation>特権パス監視のための非運用カナリア権限を検討してください</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6929" />
            <source>Maintain an exposure and least-privilege baseline</source>
            <translation>露出と最小権限のベースラインを維持する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6952" />
            <source>Select one environment before saving an investigation note.</source>
            <translation>調査メモを保存する前に、環境を 1 つ選択してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6977" />
            <source>Rule is valid and can be evaluated locally.</source>
            <translation>ルールは有効であり、ローカルで評価できます。</translation>
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
            <translation>中央絶対偏差 (MAD)、10%/10 ms ノイズ フロアで 1.4826 でスケール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7006" />
            <source>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</source>
            <translation>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Confirm scope from retained failures</source>
            <translation>保持された障害から範囲を確認する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Check rate-limit and service-health evidence</source>
            <translation>レート制限とサービス健全性の証拠を確認する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Collect read-only product status</source>
            <translation>読み取り専用の製品ステータスを収集する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Correlate affected entities</source>
            <translation>影響を受けるエンティティを関連付ける</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Export masked incident evidence</source>
            <translation>隠蔽されたインシデント証拠をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Record closure decision</source>
            <translation>記録閉鎖の決定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Capture current policy baseline</source>
            <translation>現在のポリシーのベースラインを取得する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Run policy diff and best-practice checks</source>
            <translation>ポリシーの差分とベストプラクティスのチェックを実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Run Policy Twin and decision simulation</source>
            <translation>ポリシーツインと意思決定シミュレーションを実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Prepare rollback artifact</source>
            <translation>ロールバックアーティファクトの準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Record independent review</source>
            <translation>独立したレビューを記録する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Export change package</source>
            <translation>変更パッケージのエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Identify affected user and application scope</source>
            <translation>影響を受けるユーザーとアプリケーションの範囲を特定する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Inspect device metrics</source>
            <translation>デバイスメトリクスを検査する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Inspect network latency, loss and jitter</source>
            <translation>ネットワークの遅延、損失、ジッターを検査する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Inspect service-edge path</source>
            <translation>サービスエッジパスを検査する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Compare application response</source>
            <translation>アプリケーションの応答を比較する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Export masked journey evidence</source>
            <translation>マスクされた旅行証拠をエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Stop copying or exporting raw material</source>
            <translation>原材料のコピーや輸出をやめる</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Rotate the affected credential outside this client</source>
            <translation>影響を受ける資格情報をこのクライアントの外部でローテーションします</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Clear in-memory sessions</source>
            <translation>メモリ内セッションをクリアする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Review masked audit evidence</source>
            <translation>隠蔽された監査証拠をレビューする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Validate least-privilege access</source>
            <translation>最小特権アクセスを検証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Record containment and recovery</source>
            <translation>記録の封じ込めと回復</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Validate the alert in authoritative security tooling</source>
            <translation>権威あるセキュリティツールでアラートを検証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Identify users, devices and applications</source>
            <translation>ユーザー、デバイス、アプリケーションを特定する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Preserve masked evidence</source>
            <translation>隠蔽された証拠を保存する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Prepare containment changes for independent approval</source>
            <translation>独立した承認のために封じ込め変更を準備する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Track recovery prerequisites</source>
            <translation>トラック回復の前提条件</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Record lessons learned</source>
            <translation>学んだ教訓を記録する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7033" />
            <source>Complete</source>
            <translation>完了</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7033" />
            <source>Pending</source>
            <translation>保留中</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7034" />
            <source>Recorded in local audit trail</source>
            <translation>ローカル監査証跡に記録される</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7034" />
            <source>No completion evidence</source>
            <translation>完了の証拠がない</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7045" />
            <source>Select a playbook step first.</source>
            <translation>まずプレイブックのステップを選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7049" />
            <source>Mark step complete</source>
            <translation>ステップを完了としてマークする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7049" />
            <source>Record this step as completed in the local audit trail? This does not perform the action or update an authoritative incident.</source>
            <translation>このステップを完了したものとしてローカル監査証跡に記録しますか?これにより、アクションが実行されたり、信頼できるインシデントが更新されたりすることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7060" />
            <source>Describe an administrative or investigation goal first.</source>
            <translation>最初に管理または調査の目標を説明します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7069" />
            <source>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</source>
            <translation>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7075" />
            <source>Smart API planner</source>
            <translation>スマートAPIプランナー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7075" />
            <source>Create a plan with at least one read operation first.</source>
            <translation>最初に少なくとも 1 つの読み取り操作を含むプランを作成します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7077" />
            <source>Planner output copied for review. Validate the chain, supply required path values, and approve it separately before execution.</source>
            <translation>レビューのためにコピーされたプランナーの出力。チェーンを検証し、必要なパス値を指定し、実行前に個別に承認します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Review policy diff</source>
            <translation>ポリシーの差分を確認する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Run local simulation</source>
            <translation>ローカルシミュレーションを実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Record reviewer approval</source>
            <translation>記録審査員の承認</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Export Git/Terraform review</source>
            <translation>Git/Terraform のエクスポートのレビュー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Apply outside this client only after approval</source>
            <translation>承認後にのみこのクライアント以外に申請する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7099" />
            <source>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</source>
            <translation>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Change reference recorded</source>
            <translation>記録された変更参照</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Change owner recorded</source>
            <translation>所有者の変更が記録されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Independent reviewer recorded</source>
            <translation>独立した査読者が記録されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Local policy simulation reviewed</source>
            <translation>地方政策シミュレーションの見直し</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Rollback artifact prepared</source>
            <translation>ロールバック アーティファクトが準備されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Local approval recorded</source>
            <translation>地元の承認が記録されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Yes</source>
            <translation>はい</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>No</source>
            <translation>いいえ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Blocked</source>
            <translation>ブロックされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Optional</source>
            <translation>オプション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7118" />
            <source>Enter a reviewer before recording approval.</source>
            <translation>承認を記録する前にレビュー担当者を入力します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7120" />
            <source>Local approval recorded. External apply remains disabled.</source>
            <translation>地元の承認が記録されました。外部適用は無効のままです。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7144" />
            <source>Rollback artifact integrity verified. This does not authorize applying it.</source>
            <translation>ロールバック アーティファクトの整合性が確認されました。これはそれを適用することを許可しません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7145" />
            <source>Rollback verification failed: {reason}</source>
            <translation>Rollback verification failed: {reason}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7155" />
            <source>No comparison baseline</source>
            <translation>比較ベースラインなし</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7160" />
            <source>{time} · score {score}/100</source>
            <translation>{time} · score {score}/100</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7183" />
            <source>Audit evidence integrity</source>
            <translation>監査証拠の完全性</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7183" />
            <source>Review and restore the local hash-linked audit trail.</source>
            <translation>ローカルのハッシュにリンクされた監査証跡を確認して復元します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7184" />
            <source>Operational evidence available</source>
            <translation>運用上の証拠が入手可能</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7184" />
            <source>Collect or import masked read-only evidence for the selected environment.</source>
            <translation>選択した環境のマスクされた読み取り専用証拠を収集またはインポートします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7185" />
            <source>API health and anomaly monitoring</source>
            <translation>APIの健全性と異常の監視</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7185" />
            <source>Investigate repeated failures, latency regressions, and rate limiting.</source>
            <translation>繰り返される障害、遅延の回帰、およびレート制限を調査します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7186" />
            <source>Least-privilege policy baseline</source>
            <translation>最小権限ポリシーのベースライン</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7186" />
            <source>Constrain unconditional allow rules and validate order in Policy Twin.</source>
            <translation>無条件許可ルールを制約し、ポリシー ツインで順序を検証します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7187" />
            <source>Reviewed write activity</source>
            <translation>レビューされた書き込みアクティビティ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7187" />
            <source>Require a recorded review and rollback artifact for write activity.</source>
            <translation>書き込みアクティビティの記録されたレビューとロールバック アーティファクトが必要です。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7188" />
            <source>Incident evidence readiness</source>
            <translation>事件証拠の準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7188" />
            <source>Prepare and export masked investigation evidence for unresolved failures.</source>
            <translation>未解決の障害に関する隠蔽された調査証拠を準備してエクスポートします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7189" />
            <source>Recovery evidence available</source>
            <translation>回復証拠が入手可能</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7189" />
            <source>Save a policy snapshot or reviewed rollback artifact before change.</source>
            <translation>変更前にポリシーのスナップショットまたはレビューされたロールバック アーティファクトを保存します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7203" />
            <source>Pass</source>
            <translation>パス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7203" />
            <source>Fail</source>
            <translation>失敗</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7216" />
            <location filename="../zscaler_api_client.py" line="7273" />
            <location filename="../zscaler_api_client.py" line="7319" />
            <source>Local assurance requires attention</source>
            <translation>ローカル保証には注意が必要です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7216" />
            <location filename="../zscaler_api_client.py" line="7273" />
            <location filename="../zscaler_api_client.py" line="7319" />
            <source>No failing controls in the evaluated local scope</source>
            <translation>評価されたローカル スコープに失敗したコントロールはありません</translation>
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
            <translation>優先順位の高いアクション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7222" />
            <source>Local evidence limitation: validate results against authoritative tenant and governance records.</source>
            <translation>ローカル証拠の制限: 権威あるテナントおよびガバナンスの記録に対して結果を検証します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7226" />
            <source>Now</source>
            <translation>今</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7227" />
            <source>Assessment {identifier} · {frameworks} · local evidence only, not certification.</source>
            <translation>Assessment {identifier} · {frameworks} · local evidence only, not certification.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7230" />
            <source>Select one environment before saving an assurance baseline.</source>
            <translation>保証ベースラインを保存する前に、環境を 1 つ選択してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7240" />
            <location filename="../zscaler_api_client.py" line="7242" />
            <location filename="../zscaler_api_client.py" line="7259" />
            <location filename="../zscaler_api_client.py" line="7261" />
            <source>Signed evidence</source>
            <translation>署名された証拠</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7240" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>システム キーチェーンは証拠署名キーを保存できませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7242" />
            <source>The protected evidence signing key is invalid. Rotate it in Settings before signing.</source>
            <translation>保護された証拠の署名キーが無効です。署名する前に設定で回転させてください。</translation>
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
            <translation>経営陣の保証に関する説明</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7301" />
            <source>Posture score</source>
            <translation>姿勢スコア</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7302" />
            <source>Local requests</source>
            <translation>ローカルリクエスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7303" />
            <source>Failed requests</source>
            <translation>失敗したリクエスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7432" />
            <source>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</source>
            <translation>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7438" />
            <source>Cancellation requested; the current HTTP request will finish and no new chain step will start.</source>
            <translation>キャンセルがリクエストされました。現在の HTTP リクエストは終了し、新しいチェーン ステップは開始されません。</translation>
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
            <translation>すべてのステップが開始される前にチェーンがキャンセルされました。完了した結果は保持されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7486" />
            <source>Run a chain before exporting its masked results.</source>
            <translation>マスクされた結果をエクスポートする前にチェーンを実行します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7510" />
            <source>No baseline (analyze current policy only)</source>
            <translation>ベースラインなし (現在のポリシーのみを分析)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7536" />
            <source>Unconditional allow</source>
            <translation>無条件許可</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7536" />
            <source>Shadowed conflict</source>
            <translation>影の衝突</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7536" />
            <source>Redundant shadow</source>
            <translation>冗長なシャドウ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7536" />
            <source>Overlapping actions</source>
            <translation>重複するアクション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7536" />
            <source>Duplicate rule name</source>
            <translation>ルール名が重複しています</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7538" />
            <source>An unconditional allow rule can expose every later matching scope.</source>
            <translation>無条件許可ルールは、その後の一致するスコープをすべて公開できます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7539" />
            <source>The later rule can never decide because an earlier rule covers all of its matches.</source>
            <translation>前のルールがすべての一致をカバーするため、後のルールでは決定できません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7540" />
            <source>The rules can match the same context but have different actions; order decides the outcome.</source>
            <translation>ルールは同じコンテキストに一致しても、異なるアクションを持つことができます。順序が結果を決定します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7541" />
            <source>Duplicate rule names make reviews, evidence, and rollback ambiguous.</source>
            <translation>ルール名が重複すると、レビュー、証拠、ロールバックが曖昧になります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7550" />
            <source>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</source>
            <translation>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7557" />
            <source>Request context must be a JSON object.</source>
            <translation>リクエストコンテキストはJSONオブジェクトである必要があります。</translation>
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
            <translation>ポリシーのスナップショットを保存する前に、環境を 1 つ選択してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7597" />
            <source>Policy snapshots are limited to 2 MB.</source>
            <translation>ポリシーのスナップショットは 2 MB に制限されています。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7598" />
            <source>Save policy snapshot</source>
            <translation>ポリシーのスナップショットを保存する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7598" />
            <source>Snapshot name:</source>
            <translation>スナップショット名:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7609" />
            <source>Select a saved policy snapshot first.</source>
            <translation>まず、保存されたポリシーのスナップショットを選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7615" />
            <source>Delete policy snapshot</source>
            <translation>ポリシースナップショットの削除</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7615" />
            <source>Delete the selected local policy snapshot?</source>
            <translation>選択したローカル ポリシー スナップショットを削除しますか?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7686" />
            <source>Local automation must be an existing absolute path to a non-symlinked .py file no larger than 1 MiB.</source>
            <translation>ローカル オートメーションは、1 MiB 以下の非シンボリック .py ファイルへの既存の絶対パスである必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7689" />
            <location filename="../zscaler_api_client.py" line="7853" />
            <source>Webhook endpoints must use HTTPS (or local HTTP) and must not contain credentials in the URL.</source>
            <translation>Webhook エンドポイントは HTTPS (またはローカル HTTP) を使用する必要があり、URL に資格情報を含めることはできません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7693" />
            <source>Secure storage</source>
            <translation>安全なストレージ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7693" />
            <source>The system keychain could not save the webhook endpoint. Check the keychain service and try again.</source>
            <translation>システム キーチェーンは Webhook エンドポイントを保存できませんでした。キーチェーン サービスを確認して、再試行してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7709" />
            <source>Connectivity test</source>
            <translation>接続テスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7709" />
            <source>Alert snapshot</source>
            <translation>アラートのスナップショット</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7710" />
            <source>Started</source>
            <translation>開始しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7470" />
            <location filename="../zscaler_api_client.py" line="7710" />
            <source>Succeeded</source>
            <translation>成功しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6499" />
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</source>
            <translation>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6502" />
            <source>A JSON list of API requests. Relative paths use the active product host; references can use only completed step IDs.</source>
            <translation>API リクエストの JSON リスト。相対パスでは、アクティブな製品ホストが使用されます。参照では、完了したステップ ID のみを使用できます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6421" />
            <location filename="../zscaler_api_client.py" line="6505" />
            <source>Step</source>
            <translation>ステップ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6405" />
            <location filename="../zscaler_api_client.py" line="6428" />
            <location filename="../zscaler_api_client.py" line="6505" />
            <source>Method</source>
            <translation>方法</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6505" />
            <source>Records</source>
            <translation>記録</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6405" />
            <location filename="../zscaler_api_client.py" line="6505" />
            <source>Duration</source>
            <translation>期間</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <location filename="../zscaler_api_client.py" line="7470" />
            <location filename="../zscaler_api_client.py" line="7710" />
            <source>Failed</source>
            <translation>失敗しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7743" />
            <source>All files (*)</source>
            <translation>すべてのファイル (*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7746" />
            <source>Exported {count} masked local event(s) as {format}. No data was sent automatically.</source>
            <translation>Exported {count} masked local event(s) as {format}. No data was sent automatically.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7762" />
            <source>Created a non-executable Terraform review handoff. Run terraformer and terraform plan only after independent review; this client never applies it.</source>
            <translation>実行不可能な Terraform レビューのハンドオフを作成しました。 terraformer と terraform plan は独立したレビュー後にのみ実行してください。このクライアントはそれを決して適用しません。</translation>
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
            <translation>ローカルオートメーション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7788" />
            <source>Read-only mode blocks local automation.</source>
            <translation>読み取り専用モードはローカル オートメーションをブロックします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7791" />
            <source>Configure a valid local Python automation in Governance first.</source>
            <translation>まず、ガバナンスで有効なローカル Python オートメーションを構成します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7793" />
            <source>Local automation is already running.</source>
            <translation>ローカルオートメーションはすでに実行されています。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7799" />
            <source>Run the reviewed Python file with masked local posture and alert data? The process receives no API credentials.</source>
            <translation>マスクされたローカル ポスチャとアラート データを使用してレビュー済みの Python ファイルを実行しますか?プロセスは API 認証情報を受け取りません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7827" />
            <source>Local automation exceeded the 15-second limit and was stopped.</source>
            <translation>ローカル オートメーションは 15 秒の制限を超えたため、停止されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7837" />
            <source>Local automation completed with exit code {code}.</source>
            <translation>Local automation completed with exit code {code}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7842" />
            <source>Local automation failed to start.</source>
            <translation>ローカルオートメーションの開始に失敗しました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7848" />
            <source>Send the current masked local alert snapshot to the configured webhook endpoint?</source>
            <translation>現在のマスクされたローカル アラート スナップショットを構成された Webhook エンドポイントに送信しますか?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7854" />
            <location filename="../zscaler_api_client.py" line="7856" />
            <location filename="../zscaler_api_client.py" line="7860" />
            <location filename="../zscaler_api_client.py" line="7880" />
            <location filename="../zscaler_api_client.py" line="7887" />
            <source>Webhook delivery</source>
            <translation>Webhook配信</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7856" />
            <source>A webhook delivery is already running.</source>
            <translation>Webhook 配信はすでに実行されています。</translation>
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
            <translation>背景</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7916" />
            <source>App only</source>
            <translation>アプリのみ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7917" />
            <source>Paused</source>
            <translation>一時停止中</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7929" />
            <source>Select a scheduled report first.</source>
            <translation>最初にスケジュールされたレポートを選択します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7947" />
            <source>The scheduled report was generated locally.</source>
            <translation>スケジュールされたレポートはローカルで生成されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7949" />
            <source>The scheduled report could not be generated. Check its output folder and the audit trail.</source>
            <translation>スケジュールされたレポートを生成できませんでした。出力フォルダーと監査証跡を確認してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7963" />
            <source>The operating-system schedule could not be updated. No state was changed.</source>
            <translation>オペレーティング システムのスケジュールを更新できませんでした。状態は変更されませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7979" />
            <source>The report is paused and cannot generate output, but the operating-system job cleanup needs manual review.</source>
            <translation>レポートは一時停止されているため出力を生成できませんが、オペレーティング システム ジョブのクリーンアップを手動で確認する必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7985" />
            <source>Remove the selected scheduled report?</source>
            <translation>選択したスケジュール済みレポートを削除しますか?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7998" />
            <source>The report was removed, but the operating-system job could not be removed. It can no longer generate a report because its schedule ID is no longer active.</source>
            <translation>レポートは削除されましたが、オペレーティング システム ジョブは削除できませんでした。スケジュール ID がアクティブではなくなったため、レポートを生成できなくなります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8001" />
            <source>Report name:</source>
            <translation>レポート名:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8014" />
            <source>Run this report even when ZS API Client is closed? This creates a user-level operating-system schedule and requires no administrator privileges.</source>
            <translation>ZS API クライアントが閉じているときでもこのレポートを実行しますか?これにより、ユーザー レベルのオペレーティング システムのスケジュールが作成され、管理者権限は必要ありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8028" />
            <source>The operating-system schedule could not be created. The report was not scheduled.</source>
            <translation>オペレーティング システムのスケジュールを作成できませんでした。レポートは予定されていませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8036" />
            <source>Scheduled report saved. It will run in the background even when the application is closed.</source>
            <translation>スケジュールされたレポートが保存されました。アプリケーションが閉じているときでもバックグラウンドで実行されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8036" />
            <source>Scheduled report saved. It will run locally while the application is open.</source>
            <translation>スケジュールされたレポートが保存されました。アプリケーションが開いている間、ローカルで実行されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7901" />
            <location filename="../zscaler_api_client.py" line="8004" />
            <source>Hourly</source>
            <translation>毎時</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7901" />
            <location filename="../zscaler_api_client.py" line="8004" />
            <source>Daily</source>
            <translation>毎日</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7901" />
            <location filename="../zscaler_api_client.py" line="8004" />
            <source>Weekly</source>
            <translation>毎週</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8005" />
            <source>Report cadence:</source>
            <translation>レポートの頻度:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8008" />
            <source>Choose report output folder</source>
            <translation>レポート出力フォルダーの選択</translation>
        </message>
        <message>
            <source>Scheduled report saved. Reports run locally while the application is open.</source>
            <translation type="vanished">スケジュールされたレポートが保存されました。レポートは、アプリケーションが開いているときにローカルで実行されます。</translation>
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
            <translation>有効</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7271" />
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Needs review</source>
            <translation>見直しが必要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7271" />
            <source>Incident signals</source>
            <translation>入射信号</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7275" />
            <source>Executive actions</source>
            <translation>実行アクション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7275" />
            <source>Review high-risk findings and approval records.</source>
            <translation>高リスクの所見と承認記録を確認します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7275" />
            <source>Use the Security Posture and Change Control workspaces for evidence.</source>
            <translation>証拠としてセキュリティ体制および変更管理ワークスペースを使用します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7277" />
            <source>SOC next steps</source>
            <translation>SOC の次のステップ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7277" />
            <source>Use Incident Investigation to prepare a review chain.</source>
            <translation>インシデント調査を使用してレビュー チェーンを準備します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7277" />
            <source>Export masked evidence before escalation.</source>
            <translation>エスカレーションの前に、隠蔽された証拠をエクスポートします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7279" />
            <source>Operations next steps</source>
            <translation>運用の次のステップ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7279" />
            <source>Review slow responses and API failures.</source>
            <translation>遅い応答と API エラーを確認します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7279" />
            <source>Confirm rate limits and service health with read-only queries.</source>
            <translation>読み取り専用クエリを使用して、レート制限とサービスの正常性を確認します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7379" />
            <source>Configure a host for the active product before running a chain.</source>
            <translation>チェーンを実行する前に、アクティブな製品のホストを構成します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7389" />
            <source>Each chain step must stay on the active product host.</source>
            <translation>各チェーン ステップはアクティブな製品ホスト上に存在する必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7405" />
            <source>Fix the chain validation errors before running it.</source>
            <translation>チェーンを実行する前にチェーン検証エラーを修正してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7409" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>読み取り専用モードは書き込みリクエストをブロックします。続行するには、オペレーション センターでローカルの役割を変更します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7411" />
            <source>Authenticate the active product before running a chain.</source>
            <translation>チェーンを実行する前に、アクティブな製品を認証します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7412" />
            <source>Run {count} API step(s) sequentially against the active environment?</source>
            <translation>Run {count} API step(s) sequentially against the active environment?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7414" />
            <source>The chain contains write operations; review and approve before continuing.</source>
            <translation>チェーンには書き込み操作が含まれます。続行する前に確認して承認してください。</translation>
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
            <translation type="vanished">メトリクスはローカルであり、認証情報は含まれません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7649" />
            <source>Policy export</source>
            <translation>ポリシーのエクスポート</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7650" />
            <source>Export policy</source>
            <translation>輸出ポリシー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7659" />
            <source>Compliance</source>
            <translation>コンプライアンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7683" />
            <source>Alert threshold must be a positive integer.</source>
            <translation>アラートしきい値は正の整数である必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7697" />
            <source>Governance settings saved.</source>
            <translation>ガバナンス設定が保存されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>Use OneAPI or legacy clients locally</source>
            <translation>OneAPI または従来のクライアントをローカルで使用する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>AI-assisted, tool-scoped exploration</source>
            <translation>AI 支援のツールスコープの探索</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>Export existing ZIA/ZPA configuration to Terraform</source>
            <translation>既存の ZIA/ZPA 構成を Terraform にエクスポートする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7704" />
            <source>Available</source>
            <translation>利用可能</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7704" />
            <source>Not installed</source>
            <translation>インストールされていません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7736" />
            <source>Prepare an integration first.</source>
            <translation>まず統合を準備します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6701" />
            <location filename="../zscaler_api_client.py" line="7739" />
            <source>Copied to clipboard</source>
            <translation>クリップボードにコピーされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7481" />
            <source>The chain stopped after the first failed step.</source>
            <translation>最初の失敗したステップの後でチェーンが停止しました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7633" />
            <location filename="../zscaler_api_client.py" line="7917" />
            <source>Enabled</source>
            <translation>有効</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7633" />
            <source>Disabled</source>
            <translation>障害者</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7639" />
            <source>Allow rule has no conditions</source>
            <translation>許可ルールには条件がありません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7639" />
            <source>Rule is disabled</source>
            <translation>ルールが無効になっています</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7640" />
            <source>Rule name is duplicated</source>
            <translation>ルール名が重複しています</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7640" />
            <source>Rule action is unspecified</source>
            <translation>ルールアクションは指定されていません</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7669" />
            <source>Rules evaluated</source>
            <translation>評価されたルール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7669" />
            <source>Matched rule</source>
            <translation>一致したルール</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7672" />
            <source>Matched</source>
            <translation>一致しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7672" />
            <source>Not matched</source>
            <translation>一致しません</translation>
        </message>
        <message>
            <source>Webhook test</source>
            <translation type="vanished">Webhook テスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7853" />
            <source>Configure a webhook endpoint in Governance first.</source>
            <translation>まずガバナンスで Webhook エンドポイントを構成します。</translation>
        </message>
        <message>
            <source>Webhook endpoints must use HTTPS unless they are local.</source>
            <translation type="vanished">Webhook エンドポイントは、ローカルでない限り HTTPS を使用する必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7845" />
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
            <translation>定期レポート</translation>
        </message>
        <message>
            <source>Report name and cadence:</source>
            <translation type="vanished">レポート名と頻度:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8040" />
            <source>Save support bundle</source>
            <translation>サポート バンドルを保存する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8045" />
            <source>Support bundle</source>
            <translation>サポートバンドル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8045" />
            <source>A redacted support bundle was created.</source>
            <translation>編集されたサポート バンドルが作成されました。</translation>
        </message>
    </context>
    <context>
        <name>PacWorkspaceDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="8112" />
            <location filename="../zscaler_api_client.py" line="8437" />
            <source>PAC Workspace</source>
            <translation>PAC ワークスペース</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8116" />
            <source>Create and verify PAC files locally. API operations are prepared in the request editor and are never sent or deployed automatically.</source>
            <translation>PAC ファイルをローカルで作成して検証します。 API オペレーションはリクエスト エディターで準備され、自動的に送信またはデプロイされることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8121" />
            <source>PAC experience:</source>
            <translation>PAC の経験:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8123" />
            <source>Guided (recommended)</source>
            <translation>ガイド付き (推奨)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8124" />
            <source>Advanced</source>
            <translation>上級者向け</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8141" />
            <source>PAC name:</source>
            <translation>PAC 名:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8142" />
            <source>Change note:</source>
            <translation>変更メモ:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8143" />
            <source>Hosted PAC URL (optional for ZCC):</source>
            <translation>ホストされた PAC URL (ZCC の場合はオプション):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8144" />
            <source>Existing ZIA PAC ID (for lifecycle actions):</source>
            <translation>既存の ZIA PAC ID (ライフサイクル アクション用):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8145" />
            <source>ZIA PAC version:</source>
            <translation>ZIA PAC バージョン:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8146" />
            <source>ZIA version action:</source>
            <translation>ZIA バージョンのアクション:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8153" />
            <source>Start with a safe baseline. Enter only internal destinations that must bypass Zscaler; all other traffic uses the selected gateway and failover.</source>
            <translation>安全なベースラインから始めます。 Zscaler をバイパスする必要がある内部宛先のみを入力します。他のすべてのトラフィックは、選択されたゲートウェイとフェイルオーバーを使用します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8161" />
            <source>Direct-bypass host patterns (one per line):</source>
            <translation>ダイレクト バイパス ホスト パターン (1 行に 1 つ):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8162" />
            <source>Primary gateway:</source>
            <translation>プライマリゲートウェイ:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8163" />
            <source>Secondary gateway:</source>
            <translation>セカンダリゲートウェイ:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8166" />
            <source>Create guided PAC</source>
            <translation>ガイド付き PAC の作成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8167" />
            <source>Load safe example</source>
            <translation>ロードセーフの例</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8170" />
            <source>Generated PAC preview (read-only):</source>
            <translation>Generated PAC preview (read-only):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8177" />
            <source>Guided setup</source>
            <translation>ガイド付きセットアップ</translation>
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
            <translation>PACをロード…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8189" />
            <source>Save PAC…</source>
            <translation>PAC を保存…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8190" />
            <source>Save local draft</source>
            <translation>ローカルドラフトを保存する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8193" />
            <source>Author</source>
            <translation>著者</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8196" />
            <source>Variables (JSON). Standard Zscaler names: </source>
            <translation>変数 (JSON)。標準の Zscaler 名: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8200" />
            <source>Test URL:</source>
            <translation>テスト URL:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8202" />
            <source>Apply variables</source>
            <translation>変数を適用する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8203" />
            <source>Run static verification</source>
            <translation>静的検証を実行する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8204" />
            <source>Preview decision</source>
            <translation>プレビューの決定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8207" />
            <source>Verify</source>
            <translation>検証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8210" />
            <source>PAC reference and review help. The verifier never executes JavaScript; validate in ZIA and test a pilot group before deployment.</source>
            <translation>PAC のリファレンスとレビューのヘルプ。ベリファイアは JavaScript を実行しません。導入前に ZIA で検証し、パイロット グループをテストします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8211" />
            <source>Variable or function</source>
            <translation>変数または関数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8211" />
            <source>Purpose / guidance</source>
            <translation>目的・ご案内</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8219" />
            <source>Roll out in stages: validate, test representative URLs, stage to a small pilot group, then deploy. Prefer host-pattern checks; avoid DNS helpers in Client Connector PAC files where possible.</source>
            <translation>段階的に展開します。代表的な URL を検証してテストし、小規模なパイロット グループに段階的に移行してから展開します。ホスト パターン チェックを優先します。可能な限り、クライアント コネクタ PAC ファイル内の DNS ヘルパーを避けてください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8221" />
            <source>Help and reference</source>
            <translation>ヘルプとリファレンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8224" />
            <source>Map supplied ZIA PAC metadata to ZCC forwarding-profile actions. Matches use hosted PAC URLs or an inline PAC content fingerprint; names alone are never treated as a match.</source>
            <translation>提供された ZIA PAC メタデータを ZCC 転送プロファイル アクションにマップします。一致では、ホストされた PAC URL またはインライン PAC コンテンツのフィンガープリントが使用されます。名前だけが一致として扱われることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8227" />
            <source>ZIA PAC list JSON</source>
            <translation>ZIA PAC リスト JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8229" />
            <source>ZCC forwarding-profile list JSON</source>
            <translation>ZCC 転送プロファイル リスト JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8233" />
            <source>Build PAC mappings</source>
            <translation>PACマッピングの構築</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8234" />
            <location filename="../zscaler_api_client.py" line="8269" />
            <source>Prepare ZIA PAC list</source>
            <translation>ZIA PAC リストの準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8235" />
            <location filename="../zscaler_api_client.py" line="8261" />
            <source>Prepare ZCC profile list</source>
            <translation>ZCCプロファイルリストの準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>ZCC profile</source>
            <translation>ZCCプロファイル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>Action / network</source>
            <translation>アクション/ネットワーク</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>PAC type</source>
            <translation>PACタイプ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>PAC reference</source>
            <translation>PAC リファレンス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>ZIA status</source>
            <translation>ZIAステータス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>Mapping result</source>
            <translation>マッピング結果</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>Profile ID</source>
            <translation>プロフィールID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8241" />
            <location filename="../zscaler_api_client.py" line="8350" />
            <source>PAC mappings</source>
            <translation>PACマッピング</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8244" />
            <source>Search the bundled Zscaler Configuration Center index of Cloud Enforcement Node ranges, proxy/VPN hostnames, GRE and extranet virtual IP addresses. The PAC editor shows a help balloon when a line references an indexed endpoint.</source>
            <translation>バンドルされている Zscaler 構成センターのクラウド強制ノード範囲、プロキシ/VPN ホスト名、GRE およびエクストラネット仮想 IP アドレスのインデックスを検索します。 PAC エディターは、行がインデックス付きエンドポイントを参照するときにヘルプ バルーンを表示します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8248" />
            <source>Search city, CIDR, hostname, GRE or VPN address</source>
            <translation>都市、CIDR、ホスト名、GRE または VPN アドレスを検索します</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8249" />
            <source>Search data centers</source>
            <translation>データセンターを検索する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>Continent</source>
            <translation>大陸</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>Data center</source>
            <translation>データセンター</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>CIDR range</source>
            <translation>CIDR範囲</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>Proxy hostname</source>
            <translation>プロキシのホスト名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>VPN hostname</source>
            <translation>VPN ホスト名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>GRE VIP</source>
            <translation>GRE VIP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>Extranet VIP</source>
            <translation>エクストラネット VIP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>Coordinates</source>
            <translation>座標</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8255" />
            <source>Zscaler data centers</source>
            <translation>ゼッスケーラー データセンター</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8258" />
            <source>Paste a forwarding profile returned by ZCC, or first prepare the profile-list request. Existing profile fields are preserved when PAC fields are updated.</source>
            <translation>ZCC から返された転送プロファイルを貼り付けるか、最初にプロファイル リスト要求を準備します。既存のプロファイル フィールドは、PAC フィールドが更新されるときに保持されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8262" />
            <source>Prepare ZCC update</source>
            <translation>ZCC アップデートの準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8264" />
            <source>ZCC / Mobile Portal</source>
            <translation>ZCC / モバイルポータル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>Prepare ZIA validation</source>
            <translation>ZIA 検証の準備</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8268" />
            <source>Prepare ZIA hosted PAC upload</source>
            <translation>ZIA がホストする PAC アップロードを準備する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8270" />
            <source>Prepare ZIA version action</source>
            <translation>ZIA バージョンの準備アクション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8271" />
            <source>Close</source>
            <translation>閉じる</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8290" />
            <source>Guided mode creates a minimal, reviewable PAC. Switch to Advanced to edit JavaScript, update ZCC profiles, or prepare ZIA lifecycle actions.</source>
            <translation>ガイド付きモードでは、最小限のレビュー可能な PAC が作成されます。 JavaScript の編集、ZCC プロファイルの更新、または ZIA ライフサイクル アクションの準備を行うには、[詳細設定] に切り替えます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8291" />
            <source>Advanced mode exposes the PAC editor, ZCC profile patching, and ZIA version lifecycle actions. Every write remains explicit.</source>
            <translation>詳細モードでは、PAC エディター、ZCC プロファイルのパッチ適用、および ZIA バージョンのライフサイクル アクションが公開されます。すべての書き込みは明示的なままです。</translation>
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
            <translation>ガイド付き PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8342" />
            <source>Guided PAC created. Review the verification findings, test a URL, then prepare ZIA validation.</source>
            <translation>ガイド付き PAC が作成されました。検証結果を確認し、URL をテストして、ZIA 検証を準備します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8350" />
            <source>Both mapping inputs must be valid JSON: </source>
            <translation>両方のマッピング入力は有効な JSON である必要があります。 </translation>
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
            <translation>PAC変数</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8389" />
            <source>Variables must be valid JSON: </source>
            <translation>変数は有効な JSON である必要があります。 </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8391" />
            <source>Variables must be a JSON object with text or numeric values.</source>
            <translation>変数は、テキストまたは数値を含む JSON オブジェクトである必要があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8400" />
            <source>none</source>
            <translation>なし</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8401" />
            <source>Detected variables: </source>
            <translation>検出された変数: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8405" />
            <source>Improvement tips:</source>
            <translation>改善のヒント:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8417" />
            <source>Variables applied.</source>
            <translation>変数が適用されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8417" />
            <source>Variables applied; missing values were retained: </source>
            <translation>適用される変数。欠損値が保持されました: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8422" />
            <source>Preview</source>
            <translation>プレビュー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8437" />
            <source>PAC draft saved locally.</source>
            <translation>PAC ドラフトはローカルに保存されました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8440" />
            <location filename="../zscaler_api_client.py" line="8445" />
            <source>Load PAC</source>
            <translation>PACをロードする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8448" />
            <location filename="../zscaler_api_client.py" line="8453" />
            <source>Save PAC</source>
            <translation>PACの保存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8461" />
            <source>PAC request prepared</source>
            <translation>PAC リクエストが準備されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8461" />
            <source>The request was placed in the main editor. Review it and explicitly select Send Request; no deployment action has been performed.</source>
            <translation>リクエストはメインエディタに置かれました。それを確認し、明示的に「リクエストの送信」を選択します。展開アクションは実行されていません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8466" />
            <source>PAC verification</source>
            <translation>PAC検証</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8466" />
            <source>Resolve PAC errors before preparing an API write.</source>
            <translation>API 書き込みを準備する前に、PAC エラーを解決してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8482" />
            <source>ZIA PAC lifecycle</source>
            <translation>ZIA PAC ライフサイクル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8482" />
            <source>Enter a numeric PAC ID and version before preparing a lifecycle action.</source>
            <translation>ライフサイクル アクションを準備する前に、数値の PAC ID とバージョンを入力します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8496" />
            <location filename="../zscaler_api_client.py" line="8498" />
            <source>ZCC forwarding profile</source>
            <translation>ZCC 転送プロファイル</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8496" />
            <source>Profile must be valid JSON: </source>
            <translation>プロファイルは有効な JSON である必要があります。 </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8498" />
            <source>Paste one ZCC forwarding profile object with its id before preparing an update.</source>
            <translation>更新を準備する前に、ID を含む 1 つの ZCC 転送プロファイル オブジェクトを貼り付けます。</translation>
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
            <translation>応答ドリフト比較</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6057" />
            <source>Compare the active masked response with a local ZS API Exchange baseline. Matching records are aligned by id, UUID, resourceId, key, or name. No API request is sent.</source>
            <translation>アクティブなマスクされた応答をローカルの ZS API Exchange ベースラインと比較します。一致するレコードは、ID、UUID、resourceId、キー、または名前によって整列されます。 API リクエストは送信されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6060" />
            <source>Baseline:</source>
            <translation>ベースライン:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6061" />
            <source>Choose a masked response exchange file</source>
            <translation>マスクされた応答交換ファイルを選択する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6062" />
            <source>Open baseline…</source>
            <translation>ベースラインをオープン…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6065" />
            <source>Ignore volatile fields:</source>
            <translation>揮発性フィールドを無視します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6067" />
            <source>Comma-separated field names ignored at every JSON depth. Secrets are always masked independently.</source>
            <translation>カンマ区切りのフィールド名は、JSON のどの深さでも無視されます。シークレットは常に独立してマスクされます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6068" />
            <source>Compare responses</source>
            <translation>応答を比較する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6070" />
            <source>Open a baseline to calculate drift.</source>
            <translation>ベースラインを開いてドリフトを計算します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>Impact</source>
            <translation>影響</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>Change</source>
            <translation>変更</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>JSON path</source>
            <translation>JSONパス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>Identity</source>
            <translation>アイデンティティ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>Baseline value</source>
            <translation>ベースライン値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>Current value</source>
            <translation>現在値</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6077" />
            <source>Export masked drift…</source>
            <translation>マスクされたドリフトをエクスポート…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6078" />
            <source>Close</source>
            <translation>閉じる</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6087" />
            <location filename="../zscaler_api_client.py" line="6092" />
            <source>Open response baseline</source>
            <translation>オープンレスポンスベースライン</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6115" />
            <source>Open a baseline response exchange first.</source>
            <translation>まずベースライン応答交換を開きます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6122" />
            <source>No drift found in the compared scope.</source>
            <translation>比較したスコープ内にドリフトは見つかりませんでした。</translation>
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
            <translation>追加されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6129" />
            <source>Removed</source>
            <translation>削除されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6129" />
            <source>Changed</source>
            <translation>変更されました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6129" />
            <source>High impact</source>
            <translation>大きな影響力</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6145" />
            <source>Export masked drift</source>
            <translation>マスクされたドリフトをエクスポートする</translation>
        </message>
    </context>
    <context>
        <name>SettingsDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4626" />
            <source>Settings</source>
            <translation>設定</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4652" />
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
            <location filename="../zscaler_api_client.py" line="4686" />
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
            <location filename="../zscaler_api_client.py" line="4718" />
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
            <location filename="../zscaler_api_client.py" line="4752" />
            <source>ZCC (Client Connector)</source>
            <translation>ZCC (クライアントコネクタ)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4817" />
            <source>ZIdentity (Identity &amp; Access)</source>
            <translation>ZIdentity (ID・アクセス管理)</translation>
        </message>
        <message>
            <source>Vanity Domain:</source>
            <translation type="vanished">バニティドメイン:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4844" />
            <source>ZTW (Zero Trust Workloads)</source>
            <translation>ZTW (ゼロトラスト ワークロード)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4871" />
            <source>ZWA (Workflow Automation)</source>
            <translation>ZWA (ワークフロー自動化)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4898" />
            <source>EASM (Attack Surface Management)</source>
            <translation>EASM (攻撃対象領域管理)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4930" />
            <location filename="../zscaler_api_client.py" line="5205" />
            <source>Credentials</source>
            <translation>認証情報</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4937" />
            <source>Network</source>
            <translation>ネットワーク</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4945" />
            <source>Request Timeout (seconds):</source>
            <translation>リクエストタイムアウト（秒）:</translation>
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
            <translation>有効</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4780" />
            <source>OneAPI (Unified v3 Framework)</source>
            <translation>OneAPI (統合 v3 フレームワーク)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4953" />
            <location filename="../zscaler_api_client.py" line="4969" />
            <location filename="../zscaler_api_client.py" line="5017" />
            <location filename="../zscaler_api_client.py" line="5023" />
            <location filename="../zscaler_api_client.py" line="5041" />
            <location filename="../zscaler_api_client.py" line="5065" />
            <source>Disabled</source>
            <translation>無効</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4970" />
            <source>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</source>
            <translation>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4975" />
            <source>SSL Verification:</source>
            <translation>SSL検証:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4980" />
            <source>Proxy</source>
            <translation>プロキシ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4986" />
            <source>No Proxy</source>
            <translation>プロキシなし</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4986" />
            <source>System Proxy</source>
            <translation>システムプロキシ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4986" />
            <source>Manual</source>
            <translation>手動</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4988" />
            <source>Proxy Mode:</source>
            <translation>プロキシモード:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4992" />
            <source>Proxy Host:</source>
            <translation>プロキシホスト:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4997" />
            <source>Proxy Port:</source>
            <translation>プロキシポート:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5000" />
            <location filename="../zscaler_api_client.py" line="5005" />
            <source>Optional</source>
            <translation>オプション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5001" />
            <source>Proxy Username:</source>
            <translation>プロキシユーザー名:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5006" />
            <source>Proxy Password:</source>
            <translation>プロキシパスワード:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5011" />
            <source>Behavior</source>
            <translation>動作</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5018" />
            <source>Auto-authenticate on startup:</source>
            <translation>起動時に自動認証:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5024" />
            <source>Save request history:</source>
            <translation>リクエスト履歴を保存:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5030" />
            <source>History limit:</source>
            <translation>履歴の上限:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5036" />
            <source>Default API:</source>
            <translation>デフォルトAPI:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5042" />
            <source>Check for updates on startup:</source>
            <translation>起動時に更新を確認:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4633" />
            <location filename="../zscaler_api_client.py" line="5047" />
            <source>Advanced</source>
            <translation>詳細</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4632" />
            <source>Basic</source>
            <translation>基本</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4635" />
            <source>Interface mode:</source>
            <translation>インターフェースモード:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4742" />
            <source>API version:</source>
            <translation>APIバージョン:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4950" />
            <source>Maximum upload/download (MB):</source>
            <translation>最大アップロード/ダウンロード (MB):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4954" />
            <source>Retry only GET, HEAD, and OPTIONS after transient network errors or HTTP 408, 429, 502, 503, and 504. Write requests are never retried automatically.</source>
            <translation>一時的なネットワーク エラーまたは HTTP 408、429、502、503、および 504 の後にのみ、GET、HEAD、および OPTIONS を再試行します。書き込みリクエストが自動的に再試行されることはありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4955" />
            <source>Retry safe reads:</source>
            <translation>安全な読み取りを再試行します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4959" />
            <source>Maximum read retries:</source>
            <translation>最大読み取り再試行数:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4963" />
            <source>Maximum seconds to honor from Retry-After; shorter exponential backoff is used when the server omits it.</source>
            <translation>Retry-After から順守される最大秒数。サーバーが省略した場合は、より短い指数バックオフが使用されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4964" />
            <source>Maximum retry wait (seconds):</source>
            <translation>最大再試行待機時間 (秒):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5053" />
            <source>Response Display</source>
            <translation>レスポンス表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5060" />
            <source>JSON Indentation:</source>
            <translation>JSONインデント:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5066" />
            <source>Word Wrap:</source>
            <translation>ワードラップ:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5072" />
            <source>Font Size:</source>
            <translation>フォントサイズ:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5077" />
            <source>Light</source>
            <translation>ライト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5077" />
            <source>Dark</source>
            <translation>ダーク</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5077" />
            <source>System</source>
            <translation>システム</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5078" />
            <source>Theme:</source>
            <translation>テーマ:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5083" />
            <source>Display</source>
            <translation>表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5088" />
            <location filename="../zscaler_api_client.py" line="5123" />
            <location filename="../zscaler_api_client.py" line="5200" />
            <location filename="../zscaler_api_client.py" line="5205" />
            <source>Privacy</source>
            <translation>プライバシー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5091" />
            <source>Secrets only (identifiers visible)</source>
            <translation>シークレットのみ (識別子は表示されます)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5092" />
            <source>Obfuscate exports and external integrations (recommended)</source>
            <translation>エクスポートと外部統合を難読化する (推奨)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5093" />
            <source>Obfuscate exports, integrations, and on-screen data</source>
            <translation>エクスポート、統合、画面上のデータを難読化する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5095" />
            <source>Identifier obfuscation:</source>
            <translation>識別子の難読化:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5096" />
            <source>Credentials and authentication material are always masked. Identifier pseudonyms are stable until the local pseudonym key is rotated; no original-to-pseudonym mapping is stored.</source>
            <translation>資格情報と認証マテリアルは常にマスクされます。識別子の仮名は、ローカルの仮名キーがローテーションされるまで安定しています。オリジナルから仮名へのマッピングは保存されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5098" />
            <source>Usernames, display names, and email addresses</source>
            <translation>ユーザー名、表示名、電子メールアドレス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5099" />
            <source>IPv4 and IPv6 addresses</source>
            <translation>IPv4 および IPv6 アドレス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5100" />
            <source>Hostnames, domains, and URL hosts</source>
            <translation>ホスト名、ドメイン、および URL ホスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5101" />
            <source>Tenant, customer, organization, and environment names</source>
            <translation>テナント、顧客、組織、および環境の名前</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5102" />
            <source>Object IDs, UUIDs, GUIDs, and client identifiers</source>
            <translation>オブジェクト ID、UUID、GUID、およびクライアント識別子</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5103" />
            <source>Policy, application, group, location, and resource names</source>
            <translation>ポリシー、アプリケーション、グループ、場所、およびリソース名</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5110" />
            <source>Rotate local pseudonym key</source>
            <translation>ローカルの仮名キーをローテーションする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5111" />
            <source>Creates new pseudonyms for future views and exports. Existing files are not modified.</source>
            <translation>今後のビューとエクスポートのために新しい仮名を作成します。既存のファイルは変更されません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5114" />
            <location filename="../zscaler_api_client.py" line="5236" />
            <location filename="../zscaler_api_client.py" line="5242" />
            <source>Rotate evidence signing key</source>
            <translation>証拠署名キーをローテーションする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5115" />
            <source>Creates a new Ed25519 key in the system keychain. Existing signed packages remain verifiable with their embedded public keys.</source>
            <translation>システム キーチェーンに新しい Ed25519 キーを作成します。既存の署名済みパッケージは、埋め込まれた公開キーを使用して引き続き検証可能です。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5118" />
            <location filename="../zscaler_api_client.py" line="5200" />
            <source>Obfuscation preview</source>
            <translation>難読化プレビュー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5120" />
            <source>Preview of exported or externally shared data using synthetic examples:</source>
            <translation>合成例を使用した、エクスポートされたデータまたは外部共有データのプレビュー:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5128" />
            <location filename="../zscaler_api_client.py" line="5167" />
            <location filename="../zscaler_api_client.py" line="5200" />
            <location filename="../zscaler_api_client.py" line="5205" />
            <source>Language</source>
            <translation>言語</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5131" />
            <source>System default</source>
            <translation>システムのデフォルト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5134" />
            <source>Application language:</source>
            <translation>アプリケーション言語:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5135" />
            <source>System default follows your operating system language. Restart after saving to apply a change.</source>
            <translation>システムのデフォルトは、オペレーティング システムの言語に従います。変更を適用するには、保存後に再起動します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5138" />
            <location filename="../zscaler_api_client.py" line="5200" />
            <source>AI / LLM</source>
            <translation>AI / LLM</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5141" />
            <source>Local catalog assistant</source>
            <translation>ローカルカタログアシスタント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5142" />
            <source>OpenAI-compatible cloud</source>
            <translation>OpenAI対応クラウド</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5143" />
            <source>Local OpenAI-compatible server</source>
            <translation>ローカルの OpenAI 互換サーバー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5144" />
            <source>AI provider:</source>
            <translation>AIプロバイダー:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5147" />
            <source>AI endpoint:</source>
            <translation>AI エンドポイント:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5149" />
            <source>Model:</source>
            <translation>モデル:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5152" />
            <source>Stored securely in your system keychain</source>
            <translation>システムのキーチェーンに安全に保管</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5153" />
            <source>API key:</source>
            <translation>APIキー:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5154" />
            <source>Allow this app to send the masked question and catalog metadata to an external AI service</source>
            <translation>このアプリがマスクされた質問とカタログのメタデータを外部 AI サービスに送信できるようにする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5157" />
            <source>Clear AI key</source>
            <translation>クリアAIキー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5160" />
            <source>Test AI connection</source>
            <translation>AI接続のテスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5224" />
            <location filename="../zscaler_api_client.py" line="5233" />
            <source>Rotate pseudonym key</source>
            <translation>仮名キーをローテーションする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5225" />
            <source>Rotate the local pseudonym key? Future pseudonyms will change and will no longer correlate with previous exports.</source>
            <translation>ローカルの仮名キーをローテーションしますか?今後のペンネームは変更され、以前のエクスポートとは相関関係がなくなります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5233" />
            <source>The local pseudonym key was rotated. No credentials or source identifiers were stored.</source>
            <translation>ローカルの仮名キーがローテーションされました。資格情報やソース識別子は保存されませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5236" />
            <source>Create a new local evidence signing identity? Existing signed packages remain verifiable, but future packages will have a different public-key fingerprint.</source>
            <translation>新しいローカル証拠署名 ID を作成しますか?既存の署名付きパッケージは引き続き検証可能ですが、将来のパッケージには異なる公開キーのフィンガープリントが使用されます。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5239" />
            <source>Signed evidence</source>
            <translation>署名された証拠</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5239" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>システム キーチェーンは証拠署名キーを保存できませんでした。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5242" />
            <source>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</source>
            <translation>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5248" />
            <source>Restore Defaults</source>
            <translation>デフォルトに戻す</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5249" />
            <source>This will reset all advanced settings to defaults. Continue?</source>
            <translation>これにより、すべての詳細設定がデフォルトにリセットされます。続く？</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5371" />
            <source>Configured securely in your system keychain</source>
            <translation>システムキーチェーンで安全に構成</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5378" />
            <source>AI key cleared</source>
            <translation>AIキーがクリアされました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5384" />
            <location filename="../zscaler_api_client.py" line="5387" />
            <location filename="../zscaler_api_client.py" line="5395" />
            <location filename="../zscaler_api_client.py" line="5396" />
            <source>AI connection</source>
            <translation>AI接続</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5384" />
            <source>Local catalog assistant is ready.</source>
            <translation>ローカル カタログ アシスタントの準備が整いました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5387" />
            <source>Enter an AI endpoint first.</source>
            <translation>まず AI エンドポイントを入力します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5393" />
            <source>AI connection succeeded.</source>
            <translation>AI接続に成功しました。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5396" />
            <source>AI connection failed: {error}</source>
            <translation>AI connection failed: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5410" />
            <source>ZIA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZIA クラウド: URL プレフィックスを削除 (ホスト名のみが必要)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5417" />
            <source>ZPA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZPA クラウド: URL プレフィックスを削除しました (ホスト名のみが必要)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5423" />
            <source>{product} Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>{product} Cloud: Removed URL prefix (only hostname needed)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5428" />
            <source>ZPA: Customer ID is empty — required for most ZPA endpoints</source>
            <translation>ZPA: 顧客 ID が空です - ほとんどの ZPA エンドポイントに必要です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5430" />
            <source>ZPA: Customer ID should be numeric (got '{value}')</source>
            <translation>ZPA: Customer ID should be numeric (got '{value}')</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5438" />
            <source>OneAPI: Removed URL prefix from vanity domain</source>
            <translation>OneAPI: バニティ ドメインから URL プレフィックスを削除しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5442" />
            <source>OneAPI: Removed .zslogin.net suffix — only the prefix is needed (e.g. 'acme')</source>
            <translation>OneAPI: .zslogin.net サフィックスを削除 — プレフィックスのみが必要です (例: 'acme')</translation>
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
            <translation>ZIdentity: ドメインから URL プレフィックスを削除しました</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5470" />
            <source>ZIA is enabled but Cloud is empty</source>
            <translation>ZIA は有効ですが、クラウドは空です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5472" />
            <source>ZCC is enabled but Cloud host is empty</source>
            <translation>ZCC は有効ですが、クラウド ホストは空です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5474" />
            <source>OneAPI is enabled but Vanity Domain is empty</source>
            <translation>OneAPI は有効ですが、バニティ ドメインが空です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5476" />
            <source>OneAPI is enabled but Client ID is empty</source>
            <translation>OneAPI は有効ですが、クライアント ID が空です</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5491" />
            <source>Settings Validation</source>
            <translation>設定の検証</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5492" />
            <source>Some settings were adjusted or may need attention:</source>
            <translation>一部の設定が調整されているか、注意が必要な場合があります。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5496" />
            <source>Save Anyway</source>
            <translation>とにかく保存</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5497" />
            <source>Go Back</source>
            <translation>戻る</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5522" />
            <source>Secure storage</source>
            <translation>安全なストレージ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5522" />
            <source>The system keychain could not save one or more secrets. No secret changes were applied.</source>
            <translation>システム キーチェーンは 1 つ以上のシークレットを保存できませんでした。秘密の変更は適用されませんでした。</translation>
        </message>
    </context>
    <context>
        <name>SetupWizard</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4172" />
            <source>Getting Started Wizard</source>
            <translation>はじめにウィザード</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4191" />
            <source>Back</source>
            <translation>戻る</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4195" />
            <source>Open full settings</source>
            <translation>完全な設定を開く</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4198" />
            <location filename="../zscaler_api_client.py" line="4321" />
            <source>Continue</source>
            <translation>続ける</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4209" />
            <source>Abstract zero trust security network</source>
            <translation>抽象的なゼロトラスト セキュリティ ネットワーク</translation>
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
            <translation>基本</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4223" />
            <source>Advanced</source>
            <translation>上級者向け</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4225" />
            <source>Setup mode:</source>
            <translation>セットアップモード:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4233" />
            <source>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4234" />
            <source>Create an API client with the required roles in ZIdentity, then enter its details below.</source>
            <translation>ZIdentity で必要なロールを持つ API クライアントを作成し、その詳細を以下に入力します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4240" />
            <source>Vanity domain</source>
            <translation>バニティドメイン</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4242" />
            <source>Client ID</source>
            <translation>クライアントID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4245" />
            <source>Client secret</source>
            <translation>クライアントシークレット</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4247" />
            <source>Leave empty for production; use beta or alpha when applicable</source>
            <translation>本番環境では空のままにしておきます。該当する場合はベータ版またはアルファ版を使用してください</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4248" />
            <source>Cloud</source>
            <translation>クラウド</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4250" />
            <source>Optional; required for many ZPA requests</source>
            <translation>オプション。多くの ZPA リクエストに必要</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4251" />
            <source>ZPA customer ID</source>
            <translation>ZPA顧客ID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4281" />
            <source>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4282" />
            <source>Choose a common operation. The wizard will load it into the request builder with required path variables highlighted.</source>
            <translation>共通の操作を選択します。ウィザードは、必要なパス変数が強調表示された状態でリクエスト ビルダーにそれをロードします。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4340" />
            <source>Secure storage</source>
            <translation>安全なストレージ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4340" />
            <source>The system keychain could not save the secret. Check the keychain service and try again.</source>
            <translation>システム キーチェーンはシークレットを保存できませんでした。キーチェーン サービスを確認して、再試行してください。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4272" />
            <location filename="../zscaler_api_client.py" line="4286" />
            <source>Just explore the API catalog</source>
            <translation>API カタログを調べてみましょう</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4153" />
            <source>ZIA · List users</source>
            <translation>ZIA · ユーザーのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4154" />
            <source>ZIA · List URL categories</source>
            <translation>ZIA · リスト URL カテゴリ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4155" />
            <source>ZIA · Check activation status</source>
            <translation>ZIA · アクティベーションステータスを確認する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4156" />
            <source>ZIA · List cloud firewall policies</source>
            <translation>ZIA · クラウド ファイアウォール ポリシーの一覧表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4157" />
            <source>ZPA · List application segments</source>
            <translation>ZPA · アプリケーションセグメントのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4158" />
            <source>ZPA · List segment groups</source>
            <translation>ZPA · リストセグメントグループ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4159" />
            <source>ZPA · List connectors</source>
            <translation>ZPA・リストコネクタ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4160" />
            <source>ZDX · List devices and experience scores</source>
            <translation>ZDX · デバイスとエクスペリエンス スコアのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4161" />
            <source>ZDX · List active alerts</source>
            <translation>ZDX · アクティブなアラートをリストする</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4162" />
            <source>ZDX · List monitored applications</source>
            <translation>ZDX · 監視対象アプリケーションの一覧表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4163" />
            <source>Client Connector · List devices</source>
            <translation>クライアントコネクタ · デバイスのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4164" />
            <source>ZIdentity · List users</source>
            <translation>ZIdentity · ユーザーのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4165" />
            <source>ZIdentity · List groups</source>
            <translation>ZIdentity · リストグループ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4166" />
            <source>AI Security · List workloads</source>
            <translation>AI セキュリティ · ワークロードのリスト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4290" />
            <source>Authenticate immediately after finishing</source>
            <translation>終了後すぐに認証する</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4299" />
            <source>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4301" />
            <source>The API Explorer contains the complete bundled catalog. Use the Documentation tab for endpoint details, the Console tab for request activity, and Request History to replay safe, redacted requests.</source>
            <translation>API Explorer には、完全なバンドル カタログが含まれています。エンドポイントの詳細については「ドキュメント」タブを使用し、リクエスト・アクティビティについては「コンソール」タブを使用し、安全な編集されたリクエストを再生するには「リクエスト履歴」を使用します。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4319" />
            <source>Step {current} of {total}</source>
            <translation>Step {current} of {total}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4321" />
            <source>Finish</source>
            <translation>終了</translation>
        </message>
    </context>
    <context>
        <name>SocEntityGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Identity</source>
            <translation>アイデンティティ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Address</source>
            <translation>住所</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Device</source>
            <translation>デバイス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Application</source>
            <translation>アプリケーション</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Policy</source>
            <translation>ポリシー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Service</source>
            <translation>サービス</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Endpoint</source>
            <translation>エンドポイント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Infrastructure</source>
            <translation>インフラストラクチャー</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Indicator</source>
            <translation>インジケーター</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Activity</source>
            <translation>アクティビティ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Environment</source>
            <translation>環境</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Resource</source>
            <translation>リソース</translation>
        </message>
    </context>
    <context>
        <name>SplashScreen</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4395" />
            <source>Loading...</source>
            <translation>読み込み中...</translation>
        </message>
    </context>
    <context>
        <name>WelcomeDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3997" />
            <source>Welcome to ZS API Client</source>
            <translation>ZS API Clientへようこそ</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4009" />
            <source>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</source>
            <translation>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4022" />
            <source>Supported APIs</source>
            <translation>対応API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4025" />
            <source>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</source>
            <translation>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4041" />
            <source>Getting Started</source>
            <translation>はじめに</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4044" />
            <source>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</source>
            <translation>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4057" />
            <source>Tips for Advanced Users</source>
            <translation>上級ユーザー向けのヒント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4060" />
            <source>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4074" />
            <source>Documentation</source>
            <translation>ドキュメント</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4095" />
            <source>Show this dialog on startup</source>
            <translation>起動時にこのダイアログを表示</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4103" />
            <source>Open Settings</source>
            <translation>設定を開く</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4107" />
            <source>Get Started</source>
            <translation>開始</translation>
        </message>
    </context>
    <context>
        <name>owner</name>
        <message>
            <location filename="../zscaler_api_client.py" line="431" />
            <source>Default</source>
            <translation>デフォルト</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="644" />
            <source>The response export is unavailable, is a symbolic link, or exceeds the configured transfer limit.</source>
            <translation>応答のエクスポートが利用できないか、シンボリック リンクであるか、構成された転送制限を超えています。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="645" />
            <source>The response export is not valid UTF-8 JSON.</source>
            <translation>応答のエクスポートは有効な UTF-8 JSON ではありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="646" />
            <source>This is not a supported ZS API response exchange file.</source>
            <translation>これは、サポートされている ZS API 応答交換ファイルではありません。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="647" />
            <source>The response exchange file is incomplete.</source>
            <translation>応答交換ファイルが不完全です。</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="649" />
            <source>The response exchange file could not be opened.</source>
            <translation>応答交換ファイルを開けませんでした。</translation>
        </message>
    </context>
    <context>
        <name>window</name>
        <message>
            <location filename="../zscaler_api_client.py" line="12130" />
            <source>Automatic Update Check</source>
            <translation>自動更新チェック</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12132" />
            <source>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</source>
            <translation>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</translation>
        </message>
    </context>
</TS>