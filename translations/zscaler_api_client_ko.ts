<?xml version='1.0' encoding='utf-8'?>
<TS version="2.1" language="ko">
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
            <translation>ZS API 클라이언트 정보</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4482" />
            <source>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</source>
            <translation>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4515" />
            <source>Disclaimer</source>
            <translation>면책조항</translation>
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
            <translation>일괄 작업</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5765" />
            <source>Import a CSV file to perform batch operations. The CSV should have columns matching the API parameters.</source>
            <translation>일괄 작업을 수행하려면 CSV 파일을 가져오세요. CSV에는 API 매개변수와 일치하는 열이 있어야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5774" />
            <source>Select CSV file...</source>
            <translation>CSV 파일 선택...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5777" />
            <source>Browse...</source>
            <translation>찾아보기...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5789" />
            <source>Operation:</source>
            <translation>작동:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5793" />
            <source>Create Users (ZIA)</source>
            <translation>사용자 생성(ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5794" />
            <source>Update Users (ZIA)</source>
            <translation>사용자 업데이트(ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5795" />
            <source>Delete Users (ZIA)</source>
            <translation>사용자 삭제(ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5796" />
            <source>Create Locations (ZIA)</source>
            <translation>위치 생성(ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5797" />
            <source>URL Lookup (ZIA)</source>
            <translation>URL 조회(ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5798" />
            <source>Create App Segments (ZPA)</source>
            <translation>앱 세그먼트 생성(ZPA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5824" />
            <source>Select CSV File</source>
            <translation>CSV 파일 선택</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5854" />
            <source>Error</source>
            <translation>오류</translation>
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
            <translation>새로운 소식</translation>
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
            <translation>향후 업데이트 후에는 표시하지 않음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4610" />
            <source>*Changelog not found*</source>
            <translation>*변경 로그를 찾을 수 없음*</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4631" />
            <source>*Could not load changelog: {error}*</source>
            <translation>*Could not load changelog: {error}*</translation>
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
            <translation>환경 프로필</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6003" />
            <source>Each environment keeps separate tenant hosts, client identifiers, enabled products, and keychain credentials. Creating a profile copies only non-secret configuration. Activating a profile clears every in-memory API session.</source>
            <translation>각 환경은 별도의 테넌트 호스트, 클라이언트 식별자, 활성화된 제품 및 키체인 자격 증명을 유지합니다. 프로필을 생성하면 비밀이 아닌 구성만 복사됩니다. 프로필을 활성화하면 모든 메모리 내 API 세션이 지워집니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Active</source>
            <translation>활성</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Name</source>
            <translation>이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Default API</source>
            <translation>기본 API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Configured host</source>
            <translation>구성된 호스트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6004" />
            <source>Keychain secrets</source>
            <translation>키체인 비밀</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6007" />
            <location filename="../zscaler_api_client.py" line="6040" />
            <source>Create profile</source>
            <translation>프로필 만들기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6008" />
            <location filename="../zscaler_api_client.py" line="6052" />
            <source>Rename profile</source>
            <translation>프로필 이름 바꾸기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6009" />
            <location filename="../zscaler_api_client.py" line="6063" />
            <location filename="../zscaler_api_client.py" line="6064" />
            <source>Delete profile</source>
            <translation>프로필 삭제</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6010" />
            <source>Activate profile</source>
            <translation>프로필 활성화</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6011" />
            <source>Close</source>
            <translation>닫기</translation>
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
            <translation>프로필 이름:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6044" />
            <location filename="../zscaler_api_client.py" line="6055" />
            <source>Enter a unique profile name without path separators (maximum 60 characters).</source>
            <translation>경로 구분 기호 없이 고유한 프로필 이름을 입력하세요(최대 60자).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6047" />
            <source>The profile was created with non-secret settings only. Open Settings after activation to add its keychain credentials.</source>
            <translation>프로필이 비밀이 아닌 설정으로만 생성되었습니다. 활성화 후 설정을 열어 키체인 자격 증명을 추가하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6063" />
            <source>The default or active profile cannot be deleted. Activate another profile first.</source>
            <translation>기본 또는 활성 프로필은 삭제할 수 없습니다. 먼저 다른 프로필을 활성화하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6064" />
            <source>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</source>
            <translation>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6066" />
            <source>Secure storage</source>
            <translation>안전한 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6066" />
            <source>The profile could not be deleted because its keychain credentials could not be removed.</source>
            <translation>키체인 자격 증명을 제거할 수 없기 때문에 프로필을 삭제할 수 없습니다.</translation>
        </message>
    </context>
    <context>
        <name>ErrorCodesDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5695" />
            <source>API Error Codes Reference</source>
            <translation>API 오류 코드 참조</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5701" />
            <source>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5704" />
            <source>Common error codes and their meanings for each API.</source>
            <translation>각 API에 대한 일반적인 오류 코드 및 의미.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5717" />
            <source>Code</source>
            <translation>코드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5717" />
            <source>Name</source>
            <translation>이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5717" />
            <source>Description</source>
            <translation>설명</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5737" />
            <source>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5748" />
            <source>Close</source>
            <translation>닫기</translation>
        </message>
    </context>
    <context>
        <name>ExperienceJourneyGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3982" />
            <source>No journey telemetry in the current response</source>
            <translation>현재 응답에는 여정 원격 분석이 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4001" />
            <source>No observed data</source>
            <translation>관측된 데이터 없음</translation>
        </message>
    </context>
    <context>
        <name>HighPerformanceLineChart</name>
        <message>
            <source>Latency</source>
            <translation type="vanished">대기 시간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3813" />
            <source>Value</source>
            <translation>가치</translation>
        </message>
    </context>
    <context>
        <name>HistoryDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5875" />
            <source>Request History</source>
            <translation>요청 내역</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5884" />
            <source>Search:</source>
            <translation>검색:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5886" />
            <source>Filter by URL or method...</source>
            <translation>URL 또는 방법으로 필터링...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5891" />
            <source>Current environment: {name}</source>
            <translation>Current environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5892" />
            <source>All environments</source>
            <translation>모든 환경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5896" />
            <location filename="../zscaler_api_client.py" line="5973" />
            <source>Clear History</source>
            <translation>기록 지우기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>Time</source>
            <translation>시간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>Method</source>
            <translation>방법</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>URL</source>
            <translation>URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5905" />
            <source>Environment</source>
            <translation>환경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5906" />
            <source>Status</source>
            <translation>상태</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5906" />
            <source>Duration</source>
            <translation>기간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5918" />
            <source>Load Request</source>
            <translation>로드 요청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5922" />
            <source>Close</source>
            <translation>닫기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5946" />
            <source>Default</source>
            <translation>기본값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5974" />
            <source>Are you sure you want to clear all request history?</source>
            <translation>모든 요청 기록을 삭제하시겠습니까?</translation>
        </message>
    </context>
    <context>
        <name>MainWindow</name>
        <message>
            <location filename="../zscaler_api_client.py" line="8641" />
            <location filename="../zscaler_api_client.py" line="8659" />
            <source>API Explorer</source>
            <translation>API 탐색기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8662" />
            <location filename="../zscaler_api_client.py" line="9999" />
            <location filename="../zscaler_api_client.py" line="11630" />
            <source>Product</source>
            <translation>제품</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8672" />
            <source>Auth</source>
            <translation>인증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8673" />
            <source>Authenticate with selected API (Ctrl+Shift+A)</source>
            <translation>선택한 API로 인증(Ctrl+Shift+A)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8683" />
            <source>🔍 Filter endpoints...</source>
            <translation>🔍 엔드포인트 필터링...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8694" />
            <source>Endpoints</source>
            <translation>엔드포인트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8700" />
            <source>Output</source>
            <translation>출력</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8706" />
            <source>Authentication status, requests, and audit info...</source>
            <translation>인증 상태, 요청, 감사 정보...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8717" />
            <source>Request Builder</source>
            <translation>요청 작성기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8740" />
            <source>Enter URL or select endpoint...</source>
            <translation>URL을 입력하거나 엔드포인트를 선택하세요...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8744" />
            <source>Send</source>
            <translation>보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8745" />
            <source>Send request (Ctrl+Return)</source>
            <translation>요청 보내기(Ctrl+Return)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8753" />
            <source>cURL</source>
            <translation>cURL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8754" />
            <source>Copy request as cURL command (Ctrl+Shift+C)</source>
            <translation>요청을 cURL 명령으로 복사(Ctrl+Shift+C)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8760" />
            <source>GraphQL request</source>
            <translation>GraphQL 요청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8761" />
            <source>Send the request body as a GraphQL query and preserve data, errors, and extensions.</source>
            <translation>요청 본문을 GraphQL 쿼리로 보내고 데이터, 오류 및 확장을 보존합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8780" />
            <source>Saved GraphQL query name</source>
            <translation>저장된 GraphQL 쿼리 이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8784" />
            <source>Save query</source>
            <translation>쿼리 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8787" />
            <source>Load query</source>
            <translation>쿼리 로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8790" />
            <source>Rename query</source>
            <translation>쿼리 이름 바꾸기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8793" />
            <source>Delete query</source>
            <translation>쿼리 삭제</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8796" />
            <source>Introspect schema</source>
            <translation>스키마 점검</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8799" />
            <source>Load saved schema</source>
            <translation>저장된 스키마 로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8826" />
            <location filename="../zscaler_api_client.py" line="8835" />
            <source>Key</source>
            <translation>열쇠</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8826" />
            <location filename="../zscaler_api_client.py" line="8835" />
            <location filename="../zscaler_api_client.py" line="8895" />
            <location filename="../zscaler_api_client.py" line="8970" />
            <source>Value</source>
            <translation>가치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8829" />
            <source>Params</source>
            <translation>매개변수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8838" />
            <location filename="../zscaler_api_client.py" line="8963" />
            <source>Headers</source>
            <translation>헤더</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8871" />
            <location filename="../zscaler_api_client.py" line="10713" />
            <source>Request body (JSON)...</source>
            <translation>요청 본문(JSON)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8875" />
            <location filename="../zscaler_api_client.py" line="8962" />
            <source>Body</source>
            <translation>본체</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8895" />
            <source>Variable</source>
            <translation>변수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8898" />
            <source>Path Variables</source>
            <translation>경로 변수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8920" />
            <location filename="../zscaler_api_client.py" line="10618" />
            <source>Response</source>
            <translation>응답</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8935" />
            <source>Pretty</source>
            <translation>꽤</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8938" />
            <source>Toggle pretty-print JSON (Ctrl+P)</source>
            <translation>예쁜 인쇄 JSON 전환(Ctrl+P)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8943" />
            <location filename="../zscaler_api_client.py" line="10125" />
            <location filename="../zscaler_api_client.py" line="10144" />
            <location filename="../zscaler_api_client.py" line="10149" />
            <location filename="../zscaler_api_client.py" line="10157" />
            <source>Export response</source>
            <translation>응답 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8946" />
            <source>Preview export</source>
            <translation>내보내기 미리보기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8966" />
            <source>Table</source>
            <translation>테이블</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8968" />
            <source>Chart</source>
            <translation>차트</translation>
        </message>
        <message>
            <source>JSON structure</source>
            <translation type="vanished">JSON 구조</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8972" />
            <source>Tree</source>
            <translation>나무</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8975" />
            <source>Heatmap</source>
            <translation>히트맵</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8978" />
            <source>Topology</source>
            <translation>토폴로지</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8982" />
            <source>Schema</source>
            <translation>스키마</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8987" />
            <location filename="../zscaler_api_client.py" line="9053" />
            <source>AI Assistant</source>
            <translation>AI 어시스턴트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8990" />
            <source>Ask a OneAPI question, e.g. list ZPA application segments</source>
            <translation>OneAPI 질문을 해보세요. ZPA 애플리케이션 세그먼트 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8994" />
            <source>Choose a guided AI example…</source>
            <translation>가이드형 AI 예시를 선택하세요…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9000" />
            <source>Find API request</source>
            <translation>API 요청 찾기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9003" />
            <source>Run selected request</source>
            <translation>선택한 요청 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9006" />
            <source>Export result</source>
            <translation>결과 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9010" />
            <location filename="../zscaler_api_client.py" line="11827" />
            <source>Ask in plain language. Sensitive values are masked before display or export.</source>
            <translation>쉬운 언어로 물어보세요. 민감한 값은 표시하거나 내보내기 전에 마스크됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9016" />
            <source>AI request preview appears here before execution.</source>
            <translation>실행 전에 AI 요청 미리보기가 여기에 표시됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9022" />
            <source>Bar chart</source>
            <translation>막대 차트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9023" />
            <source>Line chart</source>
            <translation>꺾은선형 차트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9024" />
            <source>Pie chart</source>
            <translation>원형 차트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9033" />
            <source>Help</source>
            <translation>도움말</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9051" />
            <source>Documentation</source>
            <translation>문서</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9052" />
            <source>Console</source>
            <translation>콘솔</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9069" />
            <source>Ready</source>
            <translation>준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9078" />
            <source>&amp;File</source>
            <translation>파일(&amp;F)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9080" />
            <source>&amp;Settings...</source>
            <translation>설정(&amp;S)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9085" />
            <source>&amp;Batch Operations...</source>
            <translation>&amp;일괄 작업...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9092" />
            <source>Request &amp;History...</source>
            <translation>요청 및 내역...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9101" />
            <source>&amp;Quit</source>
            <translation>&amp;종료</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9107" />
            <source>&amp;Edit</source>
            <translation>편집(&amp;E)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9109" />
            <source>Copy as c&amp;URL</source>
            <translation>c&amp;URL로 복사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9114" />
            <source>Copy &amp;Response</source>
            <translation>복사 및 응답</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9121" />
            <source>C&amp;lear Request</source>
            <translation>요청 지우기(&amp;L)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9126" />
            <source>&amp;Request</source>
            <translation>&amp;요청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9128" />
            <source>&amp;Send Request</source>
            <translation>&amp;요청 보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9135" />
            <source>Authenticate &amp;ZIA</source>
            <translation>&amp;ZIA 인증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9139" />
            <source>Authenticate Z&amp;PA</source>
            <translation>Z&amp;PA 인증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9145" />
            <source>&amp;Logout All Sessions</source>
            <translation>모든 세션 로그아웃(&amp;R)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9149" />
            <source>&amp;Operations</source>
            <translation>&amp;작업</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9150" />
            <source>Operations &amp;Center...</source>
            <translation>운영 및 센터...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9158" />
            <source>Environment &amp;Profiles...</source>
            <translation>환경 및 프로필...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9163" />
            <source>&amp;Language</source>
            <translation>&amp;언어</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9172" />
            <source>&amp;Help</source>
            <translation>&amp;도움말</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9174" />
            <source>&amp;Welcome Guide...</source>
            <translation>&amp;환영 가이드...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9178" />
            <source>&amp;About...</source>
            <translation>정보(&amp;A)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9183" />
            <source>About &amp;Qt...</source>
            <translation>&amp;Qt 정보...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9190" />
            <source>ZIA API &amp;Documentation</source>
            <translation>ZIA API 및 문서</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9194" />
            <source>ZPA API D&amp;ocumentation</source>
            <translation>ZPA API 문서(&amp;O)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9198" />
            <source>Zscaler API &amp;Portal</source>
            <translation>Zscaler API 및 포털</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9202" />
            <source>API &amp;Error Codes...</source>
            <translation>API 및 오류 코드...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9208" />
            <source>Check for &amp;Updates...</source>
            <translation>업데이트 확인(&amp;U)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9278" />
            <source>{count} operations · {groups} groups</source>
            <translation>{count} operations · {groups} groups</translation>
        </message>
        <message>
            <source>Create new profile…</source>
            <translation type="vanished">새 프로필 만들기…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9636" />
            <source>Environment profiles</source>
            <translation>환경 프로필</translation>
        </message>
        <message>
            <source>Profile:</source>
            <translation type="vanished">프로필:</translation>
        </message>
        <message>
            <source>New profile name:</source>
            <translation type="vanished">새 프로필 이름:</translation>
        </message>
        <message>
            <source>Environment profile active: </source>
            <translation type="vanished">환경 프로필 활성: </translation>
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
            <translation>안내 예제가 로드되었습니다. API 요청을 찾아 미리보기를 검토한 후 실행 여부를 선택하세요.</translation>
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
            <translation>오류</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9822" />
            <source>ZIA credentials not configured. Please go to Settings.</source>
            <translation>ZIA 자격 증명이 구성되지 않았습니다. 설정으로 이동하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9851" />
            <source>ZCC credentials not configured. Please go to Settings.</source>
            <translation>ZCC 자격 증명이 구성되지 않았습니다. 설정으로 이동하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9877" />
            <source>{api_type} credentials not configured. Please go to Settings.</source>
            <translation>{api_type} credentials not configured. Please go to Settings.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9941" />
            <source>OneAPI credentials not configured. Please go to Settings.</source>
            <translation>OneAPI 자격 증명이 구성되지 않았습니다. 설정으로 이동하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9982" />
            <source>No matching API operation was found. Try product and resource names.</source>
            <translation>일치하는 API 작업을 찾을 수 없습니다. 제품 및 리소스 이름을 사용해 보세요.</translation>
        </message>
        <message>
            <source>Suggested request: {method} {name}. Review path variables before running.</source>
            <translation type="vanished">Suggested request: {method} {name}. Review path variables before running.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9999" />
            <source>Operation</source>
            <translation>작동</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9999" />
            <location filename="../zscaler_api_client.py" line="11630" />
            <source>Method</source>
            <translation>방법</translation>
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
            <translation>먼저 AI 비서에게 요청을 요청하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10036" />
            <source>Review AI request</source>
            <translation>AI 요청 검토</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10037" />
            <source>Review the URL, path variables, and parameters in the preview before sending. Send this request now?</source>
            <translation>보내기 전에 미리보기에서 URL, 경로 변수, 매개변수를 검토하세요. 지금 이 요청을 보내시겠습니까?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10060" />
            <location filename="../zscaler_api_client.py" line="10065" />
            <source>Asking configured LLM…</source>
            <translation>구성된 LLM을 요청하는 중…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10063" />
            <source>LLM unavailable; using the local catalog assistant.</source>
            <translation>LLM을 이용할 수 없습니다. 로컬 카탈로그 도우미를 사용합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10074" />
            <source>Configure an AI endpoint and model in Settings.</source>
            <translation>설정에서 AI 엔드포인트 및 모델을 구성하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10078" />
            <source>AI endpoint must use HTTP or HTTPS.</source>
            <translation>AI 엔드포인트는 HTTP 또는 HTTPS를 사용해야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10080" />
            <source>External AI is disabled. Enable it explicitly in Settings.</source>
            <translation>외부 AI가 비활성화되었습니다. 설정에서 명시적으로 활성화하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10082" />
            <source>External AI endpoints must use HTTPS.</source>
            <translation>외부 AI 엔드포인트는 HTTPS를 사용해야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10084" />
            <source>AI question is too long (maximum 2000 characters).</source>
            <translation>AI 질문이 너무 깁니다(최대 2000자).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10113" />
            <location filename="../zscaler_api_client.py" line="10119" />
            <source>Save binary response</source>
            <translation>바이너리 응답 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10114" />
            <source>Binary content cannot be inspected or obfuscated as text. Save the original response only if you trust this endpoint and destination?</source>
            <translation>바이너리 콘텐츠는 텍스트로 검사하거나 난독화할 수 없습니다. 이 엔드포인트와 대상을 신뢰하는 경우에만 원래 응답을 저장하시겠습니까?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10119" />
            <source>All files (*)</source>
            <translation>모든 파일(*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10122" />
            <source>Original binary response saved</source>
            <translation>원본 바이너리 응답이 저장되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10171" />
            <source>Masked response exported</source>
            <translation>마스크된 응답을 내보냈습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10277" />
            <source>Binary content is not included in this preview.</source>
            <translation>이 미리보기에는 바이너리 콘텐츠가 포함되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10279" />
            <location filename="../zscaler_api_client.py" line="10285" />
            <source>Export preview</source>
            <translation>미리보기 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10280" />
            <source>Original binary export requires a separate confirmation.</source>
            <translation>원본 바이너리 내보내기에는 별도의 확인이 필요합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10286" />
            <source>Sensitive fields are masked in every export.</source>
            <translation>모든 내보내기에서는 민감한 필드가 마스킹됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10340" />
            <location filename="../zscaler_api_client.py" line="10349" />
            <location filename="../zscaler_api_client.py" line="10357" />
            <source>Export AI result</source>
            <translation>AI 결과 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10149" />
            <location filename="../zscaler_api_client.py" line="10157" />
            <location filename="../zscaler_api_client.py" line="10349" />
            <location filename="../zscaler_api_client.py" line="10357" />
            <source>No chart data is available to export.</source>
            <translation>내보낼 수 있는 차트 데이터가 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10366" />
            <source>AI result exported</source>
            <translation>AI 결과 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10625" />
            <source>No tabular datasets</source>
            <translation>테이블 형식 데이터세트 없음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10634" />
            <source>Nodes</source>
            <translation>노드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10634" />
            <source>Connections</source>
            <translation>연결</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10636" />
            <source>No nodes or connections were found in this response.</source>
            <translation>이 응답에서는 노드나 연결을 찾을 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10697" />
            <source>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</source>
            <translation>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10714" />
            <source>Raw request body...</source>
            <translation>원시 요청 본문...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10715" />
            <source>Form fields as JSON or an encoded key=value string...</source>
            <translation>JSON 또는 인코딩된 키=값 문자열 형식의 필드...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10716" />
            <source>Optional multipart fields as a JSON object...</source>
            <translation>JSON 객체로서의 선택적 멀티파트 필드...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10722" />
            <source>Select upload file</source>
            <translation>업로드 파일 선택</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9474" />
            <location filename="../zscaler_api_client.py" line="10771" />
            <source>Yes</source>
            <translation>예</translation>
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
            <location filename="../zscaler_api_client.py" line="9474" />
            <location filename="../zscaler_api_client.py" line="10771" />
            <source>No</source>
            <translation>아니요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10333" />
            <location filename="../zscaler_api_client.py" line="10335" />
            <source>Response drift comparison</source>
            <translation>응답 드리프트 비교</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10333" />
            <source>Binary responses cannot be structurally compared. Export and inspect the original file with an appropriate tool.</source>
            <translation>이진 반응은 구조적으로 비교할 수 없습니다. 적절한 도구를 사용하여 원본 파일을 내보내고 검사합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10335" />
            <source>Send a request or open a response export before comparing drift.</source>
            <translation>드리프트를 비교하기 전에 요청을 보내거나 응답 내보내기를 엽니다.</translation>
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
            <translation>GraphQL 본문은 쿼리 문자열을 포함하는 JSON 객체여야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10800" />
            <source>Choose operationName because the document contains multiple GraphQL operations.</source>
            <translation>문서에 여러 GraphQL 작업이 포함되어 있으므로 OperationName을 선택합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10802" />
            <source>GraphQL operationName does not match a named operation in the query.</source>
            <translation>GraphQL OperationName이 쿼리의 명명된 작업과 일치하지 않습니다.</translation>
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
            <translation>문서화된 GraphQL 스키마</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10849" />
            <source>The current Automation Hub page has no executable query example. Open its documentation or use schema introspection.</source>
            <translation>현재 Automation Hub 페이지에는 실행 가능한 쿼리 예제가 없습니다. 해당 문서를 열거나 스키마 검사를 사용하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10863" />
            <source>Loaded documented ZInsights query. Review time ranges, filters, and fields before sending.</source>
            <translation>문서화된 ZInsights 쿼리를 로드했습니다. 보내기 전에 시간 범위, 필터, 필드를 검토하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10899" />
            <source>Enter a name before saving the GraphQL query.</source>
            <translation>GraphQL 쿼리를 저장하기 전에 이름을 입력하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10903" />
            <location filename="../zscaler_api_client.py" line="10944" />
            <location filename="../zscaler_api_client.py" line="10957" />
            <location filename="../zscaler_api_client.py" line="10976" />
            <source>Secure storage</source>
            <translation>안전한 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10903" />
            <source>The system keychain could not save the GraphQL query.</source>
            <translation>시스템 키체인이 GraphQL 쿼리를 저장할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10909" />
            <source>GraphQL query saved securely</source>
            <translation>GraphQL 쿼리가 안전하게 저장됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10915" />
            <source>Saved GraphQL query is unavailable.</source>
            <translation>저장된 GraphQL 쿼리를 사용할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10944" />
            <source>The system keychain could not rename the GraphQL query.</source>
            <translation>시스템 키체인이 GraphQL 쿼리의 이름을 바꿀 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10957" />
            <source>The system keychain could not delete the GraphQL query.</source>
            <translation>시스템 키체인이 GraphQL 쿼리를 삭제할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10968" />
            <source>GraphQL introspection query prepared. Review the endpoint before sending.</source>
            <translation>GraphQL 내부 검사 쿼리가 준비되었습니다. 보내기 전에 엔드포인트를 검토하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10976" />
            <source>The system keychain could not save the GraphQL schema.</source>
            <translation>시스템 키체인이 GraphQL 스키마를 저장할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10978" />
            <source>GraphQL schema saved securely</source>
            <translation>안전하게 저장된 GraphQL 스키마</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11039" />
            <location filename="../zscaler_api_client.py" line="11556" />
            <source>Read only</source>
            <translation>읽기 전용</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11039" />
            <location filename="../zscaler_api_client.py" line="11556" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>읽기 전용 모드는 쓰기 요청을 차단합니다. 계속하려면 Operations Center에서 로컬 역할을 변경하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11075" />
            <source>Configure a base URL for the selected product before sending a relative API path.</source>
            <translation>상대 API 경로를 보내기 전에 선택한 제품에 대한 기본 URL을 구성하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11153" />
            <source>Select an available local file before sending.</source>
            <translation>전송하기 전에 사용 가능한 로컬 파일을 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11158" />
            <source>Multipart fields must be a JSON object: {error}</source>
            <translation>Multipart fields must be a JSON object: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11161" />
            <source>Multipart fields must be a JSON object.</source>
            <translation>멀티파트 필드는 JSON 객체여야 합니다.</translation>
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
            <location filename="../zscaler_api_client.py" line="11548" />
            <source>Batch validation failed: </source>
            <translation>일괄 검증 실패: </translation>
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
            <translation>배치 확인</translation>
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
            <translation>요청 내역</translation>
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
            <translation>이 요청은 다른 환경에 속합니다. 해당 환경 프로필을 로드하기 전에 활성화하십시오.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11686" />
            <location filename="../zscaler_api_client.py" line="11705" />
            <source>Multipart request loaded. Select the local file again before sending.</source>
            <translation>멀티파트 요청이 로드되었습니다. 보내기 전에 로컬 파일을 다시 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11777" />
            <source>Masked cURL command copied to clipboard</source>
            <translation>마스크된 cURL 명령이 클립보드에 복사되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11782" />
            <source>Binary response</source>
            <translation>바이너리 응답</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11782" />
            <source>Binary response content is not copied to the clipboard. Use Export to save the original file.</source>
            <translation>바이너리 응답 콘텐츠는 클립보드에 복사되지 않습니다. 내보내기를 사용하여 원본 파일을 저장하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11791" />
            <source>Masked response copied to clipboard</source>
            <translation>마스킹된 응답이 클립보드에 복사되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8980" />
            <location filename="../zscaler_api_client.py" line="10983" />
            <source>GraphQL schema</source>
            <translation>GraphQL 스키마</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10983" />
            <source>No saved introspection result exists for this endpoint.</source>
            <translation>이 끝점에 대해 저장된 자체 검사 결과가 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11024" />
            <source>{count} GraphQL errors</source>
            <translation>{count} GraphQL errors</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11026" />
            <source>extensions included</source>
            <translation>확장 기능 포함</translation>
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
            <translation>경고</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8538" />
            <source>ZIA · List users</source>
            <translation>ZIA · 사용자 목록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8538" />
            <source>List ZIA users with pagination</source>
            <translation>페이지 매김을 사용하여 ZIA 사용자 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8539" />
            <source>ZIA · Find URL categories</source>
            <translation>ZIA · URL 카테고리 찾기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8539" />
            <source>Search ZIA URL categories for social media</source>
            <translation>소셜 미디어용 ZIA URL 카테고리 검색</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8540" />
            <source>ZIA · Review firewall policies</source>
            <translation>ZIA · 방화벽 정책 검토</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8540" />
            <source>List ZIA cloud firewall policies</source>
            <translation>ZIA 클라우드 방화벽 정책 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8541" />
            <source>ZPA · Application segments</source>
            <translation>ZPA · 응용 분야</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8541" />
            <source>List ZPA application segments</source>
            <translation>ZPA 애플리케이션 세그먼트 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8542" />
            <source>ZPA · Connector inventory</source>
            <translation>ZPA · 커넥터 인벤토리</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8542" />
            <source>List ZPA connectors</source>
            <translation>ZPA 커넥터 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8543" />
            <source>ZDX · Experience overview</source>
            <translation>ZDX · 체험개요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8543" />
            <source>List ZDX devices and experience scores</source>
            <translation>ZDX 장치 및 경험 점수 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8544" />
            <source>ZDX · Active alerts</source>
            <translation>ZDX · 활성 경고</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8544" />
            <source>List active ZDX alerts with pagination</source>
            <translation>페이지 매김을 사용하여 활성 ZDX 알림 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8545" />
            <source>ZDX · Application monitoring</source>
            <translation>ZDX · 애플리케이션 모니터링</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8545" />
            <source>List monitored ZDX applications</source>
            <translation>모니터링되는 ZDX 애플리케이션 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8546" />
            <source>Client Connector · Devices</source>
            <translation>클라이언트 커넥터 · 장치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8546" />
            <source>List Client Connector devices</source>
            <translation>클라이언트 커넥터 장치 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8547" />
            <source>ZIdentity · Users</source>
            <translation>ZIdentity · 사용자</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8547" />
            <source>List ZIdentity users with pagination</source>
            <translation>페이지 매김을 사용하여 ZIdentity 사용자 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8548" />
            <source>ZIdentity · Groups</source>
            <translation>ZID · 그룹</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8548" />
            <source>List ZIdentity groups</source>
            <translation>ZIdentity 그룹 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8549" />
            <source>AI Security · Workloads</source>
            <translation>AI 보안 · 워크로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8549" />
            <source>List AI Security workloads</source>
            <translation>AI 보안 워크로드 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8603" />
            <source>ZS API Client</source>
            <translation>ZS API 클라이언트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8610" />
            <source>Explore APIs, review changes, and operate safely</source>
            <translation>API를 탐색하고, 변경 사항을 검토하고, 안전하게 운영하세요.</translation>
        </message>
        <message>
            <source>1 · Environment</source>
            <translation type="vanished">1 · 환경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8616" />
            <source>Select or create a tenant environment profile</source>
            <translation>테넌트 환경 프로필 선택 또는 생성</translation>
        </message>
        <message>
            <source>2 · Analyze</source>
            <translation type="vanished">2 · 분석</translation>
        </message>
        <message>
            <source>Open dashboards, audits, policy diffs, and response analysis</source>
            <translation type="vanished">공개 대시보드, 감사, 정책 차이점 및 응답 분석</translation>
        </message>
        <message>
            <source>3 · Change</source>
            <translation type="vanished">3 · 변경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8624" />
            <source>Open policy diff and policy-as-code export</source>
            <translation>개방형 정책 차이점 및 코드형 정책 내보내기</translation>
        </message>
        <message>
            <source>Operations Center</source>
            <translation type="vanished">운영센터</translation>
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
            <location filename="../zscaler_api_client.py" line="8647" />
            <source>Settings</source>
            <translation>설정</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8749" />
            <source>Cancel</source>
            <translation>취소</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8750" />
            <source>Stop before the next page or chain step; the current HTTP request is allowed to finish safely.</source>
            <translation>다음 페이지 또는 체인 단계 전에 중지하십시오. 현재 HTTP 요청이 안전하게 완료되도록 허용됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8765" />
            <source>Fetch all pages</source>
            <translation>모든 페이지 가져오기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8766" />
            <source>Follow only the pagination parameters documented for the selected read operation.</source>
            <translation>선택한 읽기 작업에 대해 문서화된 페이지 매기기 매개변수만 따르세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8768" />
            <source>Page size:</source>
            <translation>페이지 크기:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8772" />
            <source>Maximum pages:</source>
            <translation>최대 페이지 수:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8805" />
            <source>Documented ZInsights query…</source>
            <translation>문서화된 ZInsights 쿼리…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8810" />
            <source>Load documented query</source>
            <translation>문서화된 쿼리 로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8813" />
            <source>Browse documented schema</source>
            <translation>문서화된 스키마 찾아보기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8844" />
            <source>Body type:</source>
            <translation>체형:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8846" />
            <source>JSON</source>
            <translation>JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8847" />
            <source>Raw text</source>
            <translation>원시 텍스트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8848" />
            <source>Form URL encoded</source>
            <translation>인코딩된 양식 URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8849" />
            <location filename="../zscaler_api_client.py" line="11153" />
            <source>Multipart file upload</source>
            <translation>멀티파트 파일 업로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8857" />
            <source>File field:</source>
            <translation>파일 필드:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8861" />
            <source>Upload file:</source>
            <translation>파일 업로드:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8864" />
            <source>Select a local file; its path is never saved in history</source>
            <translation>로컬 파일을 선택하십시오. 그 경로는 역사에 저장되지 않습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8866" />
            <source>Browse…</source>
            <translation>찾아보기…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8880" />
            <source>Extract typed variables from the selected GraphQL operation. Values are inserted into the JSON request body, never into the URL.</source>
            <translation>선택한 GraphQL 작업에서 입력된 변수를 추출합니다. 값은 JSON 요청 본문에 삽입되며 URL에는 삽입되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8907" />
            <source>Type</source>
            <translation>유형</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8907" />
            <source>Required</source>
            <translation>필수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <location filename="../zscaler_api_client.py" line="8908" />
            <source>Default</source>
            <translation>기본값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8882" />
            <source>JSON value</source>
            <translation>JSON 값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8886" />
            <source>Extract variables from query</source>
            <translation>쿼리에서 변수 추출</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8887" />
            <location filename="../zscaler_api_client.py" line="10791" />
            <location filename="../zscaler_api_client.py" line="11807" />
            <source>No GraphQL variables extracted.</source>
            <translation>추출된 GraphQL 변수가 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8888" />
            <location filename="../zscaler_api_client.py" line="11144" />
            <location filename="../zscaler_api_client.py" line="11194" />
            <source>GraphQL Variables</source>
            <translation>GraphQL 변수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8902" />
            <location filename="../zscaler_api_client.py" line="11812" />
            <source>Select a documented endpoint to inspect its request contract.</source>
            <translation>요청 계약을 검사하려면 문서화된 끝점을 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8907" />
            <source>Location</source>
            <translation>위치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8907" />
            <location filename="../zscaler_api_client.py" line="11630" />
            <source>Name</source>
            <translation>이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8908" />
            <source>Description</source>
            <translation>설명</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8913" />
            <source>API Guide</source>
            <translation>API 가이드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8927" />
            <source>Dataset:</source>
            <translation>데이터세트:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8949" />
            <source>Open export</source>
            <translation>내보내기 열기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8950" />
            <source>Compare drift</source>
            <translation>드리프트 비교</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8970" />
            <source>Field</source>
            <translation>필드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9096" />
            <source>Open response export…</source>
            <translation>공개 응답 내보내기…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9097" />
            <source>Compare response drift…</source>
            <translation>응답 드리프트 비교…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9154" />
            <source>PAC &amp;Workspace...</source>
            <translation>PAC 및 작업 공간...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9434" />
            <location filename="../zscaler_api_client.py" line="9448" />
            <source>Required value</source>
            <translation>필수값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9434" />
            <location filename="../zscaler_api_client.py" line="9448" />
            <source>Optional value</source>
            <translation>선택적 값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9482" />
            <source>body template available</source>
            <translation>바디 템플릿 사용 가능</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9482" />
            <source>no body template</source>
            <translation>본문 템플릿 없음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9483" />
            <source>not listed</source>
            <translation>목록에 없음</translation>
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
            <translation>URL이 수동으로 편집되었습니다. 문서화된 요청 계약을 첨부하려면 엔드포인트를 다시 선택하세요.</translation>
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
            <translation>선택한 환경 프로필을 사용할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9650" />
            <source>Environment profile active: {name}. Sessions and request data were cleared.</source>
            <translation>Environment profile active: {name}. Sessions and request data were cleared.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9694" />
            <source>Write request prepared</source>
            <translation>쓰기 요청 준비됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9695" />
            <source>The documented write template is ready. Review the API Guide, parameters, and body, then choose Send explicitly.</source>
            <translation>문서화된 쓰기 템플릿이 준비되었습니다. API 가이드, 매개변수 및 본문을 검토한 후 명시적으로 보내기를 선택합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9989" />
            <source>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</source>
            <translation>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10144" />
            <source>No tabular response data is available to export.</source>
            <translation>내보낼 수 있는 표 형식 응답 데이터가 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10294" />
            <location filename="../zscaler_api_client.py" line="10305" />
            <source>Open response export</source>
            <translation>공개 응답 내보내기</translation>
        </message>
        <message>
            <source>The response export is unavailable, is a symbolic link, or exceeds the configured transfer limit.</source>
            <translation type="vanished">응답 내보내기를 사용할 수 없거나, 심볼릭 링크이거나, 구성된 전송 제한을 초과합니다.</translation>
        </message>
        <message>
            <source>This is not a supported ZS API response exchange file.</source>
            <translation type="vanished">이는 지원되는 ZS API 응답 교환 파일이 아닙니다.</translation>
        </message>
        <message>
            <source>The response exchange file is incomplete.</source>
            <translation type="vanished">응답 교환 파일이 불완전합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10328" />
            <source>Response export opened locally; no API request was sent.</source>
            <translation>응답 내보내기가 로컬에서 열렸습니다. API 요청이 전송되지 않았습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11043" />
            <source>Please enter a URL</source>
            <translation>URL을 입력하세요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11064" />
            <source>Missing Path Variables</source>
            <translation>누락된 경로 변수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11065" />
            <source>Enter values for: {names}</source>
            <translation>Enter values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11129" />
            <source>Missing documented parameters</source>
            <translation>문서화된 매개변수 누락</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11130" />
            <source>Enter required values for: {names}</source>
            <translation>Enter required values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11200" />
            <source>Sending request...</source>
            <translation>요청을 보내는 중...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11231" />
            <source>Pagination unavailable</source>
            <translation>페이지 매김을 사용할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11231" />
            <source>Select a documented paginated GET operation before fetching all pages.</source>
            <translation>모든 페이지를 가져오기 전에 문서화된 페이지 매기기 GET 작업을 선택하세요.</translation>
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
            <translation>취소가 요청되었습니다. 현재 HTTP 요청이 안전하게 완료되기를 기다리는 중…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11275" />
            <source>Request cancelled before completion</source>
            <translation>완료되기 전에 요청이 취소되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11323" />
            <source>Safe read retries: {count}</source>
            <translation>Safe read retries: {count}</translation>
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
            <location filename="../zscaler_api_client.py" line="11396" />
            <source>Request successful</source>
            <translation>요청 성공</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11406" />
            <source>ZIA authenticated successfully</source>
            <translation>ZIA가 성공적으로 인증되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11415" />
            <source>ZPA authenticated successfully</source>
            <translation>ZPA가 성공적으로 인증되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11419" />
            <source>ZDX authenticated successfully</source>
            <translation>ZDX가 성공적으로 인증되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11423" />
            <source>ZCC authenticated successfully</source>
            <translation>ZCC가 성공적으로 인증되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11427" />
            <source>ZIdentity authenticated successfully</source>
            <translation>ZIdentity가 성공적으로 인증되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11431" />
            <source>ZTW authenticated successfully</source>
            <translation>ZTW가 성공적으로 인증되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11435" />
            <source>ZWA authenticated successfully</source>
            <translation>ZWA가 성공적으로 인증되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11439" />
            <source>EASM authenticated successfully</source>
            <translation>EASM이 성공적으로 인증되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11443" />
            <source>OneAPI authenticated successfully</source>
            <translation>OneAPI가 성공적으로 인증되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11448" />
            <source>Authenticated successfully</source>
            <translation>성공적으로 인증됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11481" />
            <location filename="../zscaler_api_client.py" line="11487" />
            <source>Request failed</source>
            <translation>요청 실패</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11548" />
            <location filename="../zscaler_api_client.py" line="11551" />
            <location filename="../zscaler_api_client.py" line="11605" />
            <source>Batch</source>
            <translation>배치</translation>
        </message>
        <message>
            <source>Processing {count} items...</source>
            <translation type="vanished">Processing {count} items...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11707" />
            <source>Request loaded from history</source>
            <translation>기록에서 로드된 요청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11774" />
            <source>No URL to copy</source>
            <translation>복사할 URL이 없습니다.</translation>
        </message>
        <message>
            <source>cURL command copied to clipboard</source>
            <translation type="vanished">cURL 명령이 클립보드에 복사되었습니다.</translation>
        </message>
        <message>
            <source>Response copied to clipboard</source>
            <translation type="vanished">응답이 클립보드에 복사되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11793" />
            <source>No response to copy</source>
            <translation>복사에 대한 응답이 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11829" />
            <source>Request cleared</source>
            <translation>요청이 삭제되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11842" />
            <location filename="../zscaler_api_client.py" line="11893" />
            <source>Missing Credentials</source>
            <translation>누락된 자격 증명</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11843" />
            <source>Please configure ZIA credentials in Settings first.</source>
            <translation>먼저 설정에서 ZIA 자격 증명을 구성하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11865" />
            <source>ZIA auth request prepared. Click Send to authenticate.</source>
            <translation>ZIA 인증 요청이 준비되었습니다. 보내기를 클릭하여 인증하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11894" />
            <source>Please configure ZPA credentials in Settings first.</source>
            <translation>먼저 설정에서 ZPA 자격 증명을 구성하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11907" />
            <source>ZPA auth request prepared. Click Send to authenticate.</source>
            <translation>ZPA 인증 요청이 준비되었습니다. 보내기를 클릭하여 인증하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11912" />
            <source>All sessions cleared</source>
            <translation>모든 세션이 삭제되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11935" />
            <source>Language Changed</source>
            <translation>언어가 변경되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11936" />
            <source>The application needs to restart to apply the new language.

Restart now?</source>
            <translation>새 언어를 적용하려면 애플리케이션을 다시 시작해야 합니다.

지금 다시 시작하시겠습니까?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11984" />
            <source>Checking for updates...</source>
            <translation>업데이트 확인 중...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12057" />
            <source>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</source>
            <translation>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12061" />
            <source>Update Available</source>
            <translation>업데이트 가능</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12063" />
            <source>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Release:&lt;/b&gt; {name}&lt;/p&gt;{prerelease}&lt;p style='color: #666; font-size: 11px;'&gt;✓ Verified from github.com/{repo}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</source>
            <translation>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Release:&lt;/b&gt; {name}&lt;/p&gt;{prerelease}&lt;p style='color: #666; font-size: 11px;'&gt;✓ Verified from github.com/{repo}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12083" />
            <source>Update available: v{version}</source>
            <translation>Update available: v{version}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12086" />
            <source>You are up to date (v{version})</source>
            <translation>You are up to date (v{version})</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12091" />
            <source>Update Check Failed</source>
            <translation>업데이트 확인 실패</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12092" />
            <source>Could not check for updates:
{error}</source>
            <translation>Could not check for updates:
{error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12094" />
            <source>Update check failed</source>
            <translation>업데이트 확인 실패</translation>
        </message>
    </context>
    <context>
        <name>OperationsDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="6199" />
            <source>Operations Center</source>
            <translation>운영센터</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Requests</source>
            <translation>요청사항</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Success rate</source>
            <translation>성공률</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <location filename="../zscaler_api_client.py" line="7333" />
            <source>Audit integrity</source>
            <translation>감사 무결성</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Active environment</source>
            <translation>활동적인 환경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6234" />
            <source>Recent request outcomes</source>
            <translation>최근 요청 결과</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6239" />
            <location filename="../zscaler_api_client.py" line="6317" />
            <location filename="../zscaler_api_client.py" line="6321" />
            <location filename="../zscaler_api_client.py" line="6361" />
            <location filename="../zscaler_api_client.py" line="6417" />
            <location filename="../zscaler_api_client.py" line="6434" />
            <source>Time</source>
            <translation>시간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6239" />
            <source>Activity</source>
            <translation>활동</translation>
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
            <translation>상태</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6240" />
            <source>Recent activity</source>
            <translation>최근 활동</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6243" />
            <source>Refresh dashboard</source>
            <translation>대시보드 새로고침</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6247" />
            <source>Dashboard</source>
            <translation>대시보드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6250" />
            <source>Previous policy JSON</source>
            <translation>이전 정책 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6251" />
            <source>Proposed policy JSON</source>
            <translation>제안된 정책 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6258" />
            <source>Compare policies</source>
            <translation>정책 비교</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6260" />
            <source>Export policy as JSON</source>
            <translation>정책을 JSON으로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6261" />
            <source>Export policy as YAML</source>
            <translation>정책을 YAML로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6262" />
            <source>Run compliance checks</source>
            <translation>규정 준수 검사 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <location filename="../zscaler_api_client.py" line="7655" />
            <source>Policy diff</source>
            <translation>정책 차이</translation>
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
            <translation>정책 시뮬레이션(로컬에만 해당)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6273" />
            <location filename="../zscaler_api_client.py" line="7703" />
            <source>Simulation</source>
            <translation>시뮬레이션</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6276" />
            <source>CSV data, e.g. name,email
Ada,ada@example.com</source>
            <translation>CSV 데이터(예: 이름, 이메일
에이다,ada@example.com</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6279" />
            <source>Required columns (comma separated)</source>
            <translation>필수 열(쉼표로 구분)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6281" />
            <source>Validate bulk import</source>
            <translation>대량 가져오기 검증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6282" />
            <source>Bulk operations</source>
            <translation>대량 작업</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6285" />
            <source>Administrator</source>
            <translation>관리자</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6285" />
            <source>Analyst</source>
            <translation>분석가</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6285" />
            <location filename="../zscaler_api_client.py" line="7438" />
            <source>Read only</source>
            <translation>읽기 전용</translation>
        </message>
        <message>
            <source>Optional local automation script; never runs without approval</source>
            <translation type="vanished">선택적 로컬 자동화 스크립트; 승인 없이는 절대 실행되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Local role:</source>
            <translation>로컬 역할:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Alert threshold (errors):</source>
            <translation>경고 기준(오류):</translation>
        </message>
        <message>
            <source>Webhook endpoint (disabled until approved):</source>
            <translation type="vanished">웹훅 엔드포인트(승인될 때까지 비활성화됨):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Local automation:</source>
            <translation>로컬 자동화:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6293" />
            <source>Save governance settings</source>
            <translation>거버넌스 설정 저장</translation>
        </message>
        <message>
            <source>Read-only mode blocks write requests. Webhooks and local automation are saved only; this app will ask before any execution.</source>
            <translation type="vanished">읽기 전용 모드는 쓰기 요청을 차단합니다. 웹훅과 로컬 자동화만 저장됩니다. 이 앱은 실행 전에 묻습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6295" />
            <location filename="../zscaler_api_client.py" line="7712" />
            <location filename="../zscaler_api_client.py" line="7715" />
            <location filename="../zscaler_api_client.py" line="7718" />
            <location filename="../zscaler_api_client.py" line="7726" />
            <source>Governance</source>
            <translation>거버넌스</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6298" />
            <source>Official integrations are optional. Credentials remain in the system keychain and no command runs automatically.</source>
            <translation>공식 통합은 선택 사항입니다. 자격 증명은 시스템 키체인에 남아 있으며 어떤 명령도 자동으로 실행되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6299" />
            <source>Integration</source>
            <translation>통합</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6299" />
            <source>Recommended use</source>
            <translation>권장 용도</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6302" />
            <source>Check local integrations</source>
            <translation>로컬 통합 확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6303" />
            <source>Prepare Terraform import</source>
            <translation>Terraform 가져오기 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6304" />
            <source>Prepare MCP connection</source>
            <translation>MCP 연결 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6305" />
            <source>Prepare SDK configuration</source>
            <translation>SDK 구성 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6306" />
            <source>Send masked webhook test</source>
            <translation>마스킹된 웹훅 테스트 보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6308" />
            <source>Copy reviewed command</source>
            <translation>검토된 명령 복사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6318" />
            <location filename="../zscaler_api_client.py" line="7765" />
            <location filename="../zscaler_api_client.py" line="7785" />
            <source>Integrations</source>
            <translation>통합</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6321" />
            <source>Event</source>
            <translation>이벤트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6317" />
            <location filename="../zscaler_api_client.py" line="6321" />
            <location filename="../zscaler_api_client.py" line="6334" />
            <source>Details</source>
            <translation>세부정보</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6323" />
            <source>Refresh audit trail</source>
            <translation>감사 추적 새로 고침</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6324" />
            <location filename="../zscaler_api_client.py" line="6519" />
            <source>Schedule report</source>
            <translation>일정보고</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6325" />
            <source>Create redacted support bundle</source>
            <translation>수정된 지원 번들 생성</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6326" />
            <source>Audit &amp; automation</source>
            <translation>감사 및 자동화</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6329" />
            <source>Local security posture uses redacted request history and audit integrity. It is an operational signal, not a tenant security assessment.</source>
            <translation>로컬 보안 상태는 수정된 요청 기록 및 감사 무결성을 사용합니다. 이는 테넌트 보안 평가가 아닌 운영 신호입니다.</translation>
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
            <translation>심각도</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6334" />
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Finding</source>
            <translation>찾기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6335" />
            <source>Refresh security posture</source>
            <translation>보안 태세 새로 고침</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6336" />
            <source>Security posture</source>
            <translation>보안 태세</translation>
        </message>
        <message>
            <source>Build a redacted local investigation timeline. Prepared chains never send API requests automatically.</source>
            <translation type="vanished">수정된 지역 조사 타임라인을 구축하세요. 준비된 체인은 API 요청을 자동으로 보내지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6351" />
            <source>Investigation:</source>
            <translation>조사:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6352" />
            <source>API failure investigation</source>
            <translation>API 실패 조사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6352" />
            <source>Change activity review</source>
            <translation>변경 활동 검토</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6352" />
            <source>Slow response investigation</source>
            <translation>느린 응답 조사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6353" />
            <source>Prepare investigation chain</source>
            <translation>조사 체인 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6361" />
            <location filename="../zscaler_api_client.py" line="6373" />
            <source>Source</source>
            <translation>소스</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6342" />
            <location filename="../zscaler_api_client.py" line="6361" />
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Evidence</source>
            <translation>증거</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6204" />
            <source>Data scope:</source>
            <translation>데이터 범위:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6207" />
            <source>Active environment: {name}</source>
            <translation>Active environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6211" />
            <source>All environments (cross-tenant overview)</source>
            <translation>모든 환경(교차 테넌트 개요)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6213" />
            <source>Analytics are tenant-isolated by default. Cross-tenant scope is explicit and available in Advanced mode.</source>
            <translation>분석은 기본적으로 테넌트 격리됩니다. 테넌트 간 범위는 명시적이며 고급 모드에서 사용할 수 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Open alerts</source>
            <translation>공개 알림</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6237" />
            <source>Recent request latency (ms)</source>
            <translation>최근 요청 지연 시간(ms)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6239" />
            <location filename="../zscaler_api_client.py" line="6321" />
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Environment</source>
            <translation>환경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6244" />
            <source>Auto-refresh local signals</source>
            <translation>자동 새로 고침 로컬 신호</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6245" />
            <source>Every 30 seconds</source>
            <translation>30초마다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6245" />
            <source>Every minute</source>
            <translation>매분</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6245" />
            <source>Every 5 minutes</source>
            <translation>5분마다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6254" />
            <source>Policy rule overview</source>
            <translation>정책 규칙 개요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <location filename="../zscaler_api_client.py" line="6257" />
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Rule</source>
            <translation>규칙</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Action</source>
            <translation>액션</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <source>Conditions</source>
            <translation>조건</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <source>State</source>
            <translation>상태</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6257" />
            <source>Best-practice finding</source>
            <translation>모범 사례 찾기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Order</source>
            <translation>주문</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6271" />
            <source>Decision</source>
            <translation>결정</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6289" />
            <source>Show webhook endpoint</source>
            <translation>웹훅 엔드포인트 표시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6291" />
            <source>Absolute path to a reviewed local Python automation</source>
            <translation>검토된 로컬 Python 자동화에 대한 절대 경로</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Webhook endpoint (stored in system keychain):</source>
            <translation>웹훅 끝점(시스템 키체인에 저장됨):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6294" />
            <source>Read-only mode blocks write requests and local automation. Every webhook or local automation execution requires explicit approval.</source>
            <translation>읽기 전용 모드는 쓰기 요청 및 로컬 자동화를 차단합니다. 모든 웹훅 또는 로컬 자동화 실행에는 명시적인 승인이 필요합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6307" />
            <source>Run reviewed local automation</source>
            <translation>검토된 로컬 자동화 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6309" />
            <source>Send current masked alerts</source>
            <translation>현재 마스킹된 알림 보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6316" />
            <source>Webhook delivery history</source>
            <translation>웹훅 전달 내역</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6317" />
            <source>Delivery</source>
            <translation>배송</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6339" />
            <source>Local alerts evaluate retained, redacted request history only. They do not monitor the tenant in real time or send data externally.</source>
            <translation>로컬 알림은 보관되고 수정된 요청 기록만 평가합니다. 테넌트를 실시간으로 모니터링하거나 외부로 데이터를 전송하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6342" />
            <source>Alert</source>
            <translation>경고</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6342" />
            <source>Count</source>
            <translation>개수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6343" />
            <source>Refresh local alerts</source>
            <translation>지역 알림 새로 고침</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6344" />
            <source>Copy masked alert summary</source>
            <translation>마스킹된 경고 요약 복사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6345" />
            <source>Export alerts as JSON</source>
            <translation>경고를 JSON으로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6346" />
            <source>Export alerts as Markdown</source>
            <translation>경고를 Markdown으로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6347" />
            <source>Alert Center</source>
            <translation>알림 센터</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6360" />
            <source>Security investigation evidence map</source>
            <translation>보안조사 증거지도</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6381" />
            <source>Refresh investigation</source>
            <translation>조사 새로고침</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6382" />
            <location filename="../zscaler_api_client.py" line="6856" />
            <source>Export incident evidence</source>
            <translation>사건 증거 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6384" />
            <source>Incident investigation</source>
            <translation>사건 조사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6461" />
            <source>Create a local review from Policy diff. Approval records intent only; no policy, Terraform, or Git change is applied automatically.</source>
            <translation>정책 차이에서 로컬 리뷰를 만듭니다. 승인은 의도만 기록합니다. 정책, Terraform 또는 Git 변경 사항은 자동으로 적용되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Change ticket or reference</source>
            <translation>티켓 또는 참조 변경</translation>
        </message>
        <message>
            <source>Reviewer name</source>
            <translation type="vanished">리뷰어 이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Reference:</source>
            <translation>참조:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Reviewer:</source>
            <translation>검토자:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6467" />
            <source>Prepare change review</source>
            <translation>변경 검토 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6468" />
            <source>Record local approval</source>
            <translation>현지 승인 기록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6469" />
            <location filename="../zscaler_api_client.py" line="7162" />
            <source>Export Git review</source>
            <translation>Git 검토 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6470" />
            <location filename="../zscaler_api_client.py" line="7158" />
            <source>Export rollback plan</source>
            <translation>롤백 계획 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <location filename="../zscaler_api_client.py" line="7122" />
            <location filename="../zscaler_api_client.py" line="7144" />
            <location filename="../zscaler_api_client.py" line="7147" />
            <location filename="../zscaler_api_client.py" line="7156" />
            <source>Change control</source>
            <translation>변경 제어</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6499" />
            <source>Generate local, redacted reports for leadership, SOC, or operations. Reports contain no credentials and are not sent automatically.</source>
            <translation>리더십, SOC 또는 운영에 대한 현지 수정 보고서를 생성합니다. 보고서에는 자격 증명이 포함되어 있지 않으며 자동으로 전송되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6500" />
            <source>Report type:</source>
            <translation>보고서 유형:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6501" />
            <location filename="../zscaler_api_client.py" line="7299" />
            <location filename="../zscaler_api_client.py" line="7322" />
            <location filename="../zscaler_api_client.py" line="7929" />
            <location filename="../zscaler_api_client.py" line="8030" />
            <source>CISO security summary</source>
            <translation>CISO 보안 요약</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6501" />
            <location filename="../zscaler_api_client.py" line="7299" />
            <location filename="../zscaler_api_client.py" line="7322" />
            <location filename="../zscaler_api_client.py" line="7929" />
            <source>SOC investigation summary</source>
            <translation>SOC 조사 요약</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6501" />
            <location filename="../zscaler_api_client.py" line="7299" />
            <location filename="../zscaler_api_client.py" line="7322" />
            <location filename="../zscaler_api_client.py" line="7929" />
            <source>Operations health summary</source>
            <translation>운영 상태 요약</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6502" />
            <source>Generate report</source>
            <translation>보고서 생성</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6504" />
            <source>Security posture report artwork</source>
            <translation>보안 상태 보고서 아트워크</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6507" />
            <location filename="../zscaler_api_client.py" line="7365" />
            <source>Export report as Markdown</source>
            <translation>보고서를 마크다운으로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6508" />
            <location filename="../zscaler_api_client.py" line="7359" />
            <source>Export report as JSON</source>
            <translation>보고서를 JSON으로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6509" />
            <location filename="../zscaler_api_client.py" line="7362" />
            <source>Export visual report as HTML</source>
            <translation>시각적 보고서를 HTML로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6510" />
            <source>Scheduled reports</source>
            <translation>예약된 보고서</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Name</source>
            <translation>이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Type</source>
            <translation>유형</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Cadence</source>
            <translation>케이던스</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Next run</source>
            <translation>다음 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <source>Mode</source>
            <translation>모드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6520" />
            <source>Run selected now</source>
            <translation>지금 선택 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6521" />
            <source>Enable or pause</source>
            <translation>활성화 또는 일시중지</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6522" />
            <source>Remove schedule</source>
            <translation>일정 삭제</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6523" />
            <source>Refresh schedules</source>
            <translation>새로 고침 일정</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Reports</source>
            <translation>보고서</translation>
        </message>
        <message>
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and every run requires approval.</source>
            <translation type="vanished">활성 인증 환경에 대해 검토된 시퀀스를 실행합니다. 체인은 20단계로 제한되고 선택한 제품 호스트에 유지되며 모든 실행에는 승인이 필요합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6529" />
            <source>Chain JSON</source>
            <translation>체인 JSON</translation>
        </message>
        <message>
            <source>A JSON list of API requests. Relative paths use the active product host.</source>
            <translation type="vanished">API 요청의 JSON 목록입니다. 상대 경로는 활성 제품 호스트를 사용합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6537" />
            <source>Stop after the first failed step</source>
            <translation>첫 번째 실패한 단계 후 중지</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6538" />
            <source>Validate chain</source>
            <translation>체인 검증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6539" />
            <location filename="../zscaler_api_client.py" line="7444" />
            <source>Run approved chain</source>
            <translation>승인된 체인 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6540" />
            <source>Cancel chain</source>
            <translation>체인 취소</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6541" />
            <location filename="../zscaler_api_client.py" line="7516" />
            <source>Export masked chain results</source>
            <translation>마스킹된 체인 결과 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6542" />
            <location filename="../zscaler_api_client.py" line="7434" />
            <location filename="../zscaler_api_client.py" line="7440" />
            <location filename="../zscaler_api_client.py" line="7511" />
            <location filename="../zscaler_api_client.py" line="7515" />
            <source>API chains</source>
            <translation>API 체인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6545" />
            <source>Build a local digital twin of policy order. It explains decisions, highlights overlap and shadowing, estimates change blast radius, and never applies a policy.</source>
            <translation>정책 순서의 로컬 디지털 트윈을 구축합니다. 결정을 설명하고, 중복 및 음영을 강조하고, 폭발 반경 변경을 추정하고, 정책을 적용하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6547" />
            <source>Policy rules JSON or an object containing a rules list</source>
            <translation>정책 규칙 JSON 또는 규칙 목록이 포함된 객체</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6548" />
            <source>Analyze policy twin</source>
            <translation>정책 쌍 분석</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6549" />
            <location filename="../zscaler_api_client.py" line="7600" />
            <source>Export twin evidence</source>
            <translation>쌍 증거 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6550" />
            <source>Load proposed policy</source>
            <translation>제안된 정책 로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6551" />
            <source>Test context:</source>
            <translation>테스트 컨텍스트:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6551" />
            <source>Request context JSON</source>
            <translation>요청 컨텍스트 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6552" />
            <source>Explain decision</source>
            <translation>결정을 설명하라</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Rules</source>
            <translation>규칙</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Conflicts</source>
            <translation>충돌</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Shadowed</source>
            <translation>그림자</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6554" />
            <source>Blast radius</source>
            <translation>폭발 반경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6558" />
            <source>Policy order and conflict graph</source>
            <translation>정책 순서 및 충돌 그래프</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Earlier rule</source>
            <translation>이전 규칙</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Later rule</source>
            <translation>이후 규칙</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <location filename="../zscaler_api_client.py" line="6378" />
            <location filename="../zscaler_api_client.py" line="6399" />
            <location filename="../zscaler_api_client.py" line="6413" />
            <location filename="../zscaler_api_client.py" line="6437" />
            <location filename="../zscaler_api_client.py" line="6560" />
            <source>Explanation</source>
            <translation>설명</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6236" />
            <location filename="../zscaler_api_client.py" line="6389" />
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Latency</source>
            <translation>대기 시간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6350" />
            <source>Correlate retained local activity with every object in the current masked REST or GraphQL response. Paths are investigation hypotheses, never proof of compromise, and prepared chains never run automatically.</source>
            <translation>유지된 로컬 활동을 현재 마스킹된 REST 또는 GraphQL 응답의 모든 객체와 연관시킵니다. 경로는 조사 가설이며 타협의 증거가 아니며 준비된 체인은 자동으로 실행되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6354" />
            <source>Include current API/GraphQL response</source>
            <translation>현재 API/GraphQL 응답 포함</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6355" />
            <source>Correlate entities</source>
            <translation>엔터티 상관</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6362" />
            <source>Evidence timeline</source>
            <translation>증거 타임라인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>Entities</source>
            <translation>엔터티</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>Relationships</source>
            <translation>관계</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>Potential paths</source>
            <translation>잠재적 경로</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6366" />
            <source>High-risk entities</source>
            <translation>고위험 단체</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6370" />
            <source>Filter entities:</source>
            <translation>엔터티 필터링:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6370" />
            <source>Name, type, risk, or evidence source</source>
            <translation>이름, 유형, 위험 또는 증거 소스</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6371" />
            <source>SOC entity and potential attack-path graph</source>
            <translation>SOC 엔터티 및 잠재적 공격 경로 그래프</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6372" />
            <location filename="../zscaler_api_client.py" line="6802" />
            <source>Select an entity to inspect its local evidence.</source>
            <translation>현지 증거를 조사할 개체를 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <source>Target</source>
            <translation>대상</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <source>Hops</source>
            <translation>홉</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6374" />
            <source>Entity graph</source>
            <translation>엔터티 그래프</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6377" />
            <source>Explainable signals are derived only from retained local evidence and the selected response. Validate them against authoritative product telemetry.</source>
            <translation>설명 가능한 신호는 보유된 지역 증거와 선택된 응답에서만 파생됩니다. 신뢰할 수 있는 제품 원격 측정을 통해 유효성을 검사합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6378" />
            <source>Signal</source>
            <translation>신호</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6378" />
            <source>Entity</source>
            <translation>엔터티</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>Correlated signals</source>
            <translation>상관 신호</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6383" />
            <location filename="../zscaler_api_client.py" line="6865" />
            <source>Export entity graph</source>
            <translation>엔터티 그래프 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <source>Trace observed digital experience from user and device through network and service edge to the application. The parser consumes the complete current REST or GraphQL response, marks missing stages explicitly, and never queries the tenant automatically.</source>
            <translation>관찰된 디지털 경험을 사용자와 장치에서 네트워크와 서비스 에지를 거쳐 애플리케이션까지 추적합니다. 파서는 현재 REST 또는 GraphQL 응답 전체를 사용하고 누락된 단계를 명시적으로 표시하며 자동으로 테넌트를 쿼리하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6389" />
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Experience score</source>
            <translation>경험치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6389" />
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Packet loss</source>
            <translation>패킷 손실</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6389" />
            <source>Journey issues</source>
            <translation>여행 문제</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6393" />
            <source>Observed user-to-application experience journey</source>
            <translation>관찰된 사용자-애플리케이션 경험 여정</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6396" />
            <source>Trend metric:</source>
            <translation>추세 지표:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Observed value</source>
            <translation>관찰된 값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6399" />
            <source>Stage</source>
            <translation>무대</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6399" />
            <source>Metric</source>
            <translation>미터법</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6401" />
            <source>Analyze current experience response</source>
            <translation>현재 경험 반응 분석</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6402" />
            <location filename="../zscaler_api_client.py" line="6930" />
            <source>Export masked journey</source>
            <translation>마스크된 여행 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6403" />
            <source>Experience journey</source>
            <translation>여행을 경험하세요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6421" />
            <source>Build and test explainable detections against retained local request history. Rules use a bounded declarative grammar—no Python, eval, tenant writes, network calls, or automatic remediation.</source>
            <translation>보관된 로컬 요청 기록에 대해 설명 가능한 탐지를 구축하고 테스트합니다. 규칙은 Python, 평가, 테넌트 쓰기, 네트워크 호출 또는 자동 수정이 아닌 제한된 선언적 문법을 사용합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6422" />
            <source>Template:</source>
            <translation>템플릿:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Server errors</source>
            <translation>서버 오류</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Rate-limit responses</source>
            <translation>속도 제한 응답</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>High request latency</source>
            <translation>높은 요청 대기 시간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Write activity</source>
            <translation>쓰기 활동</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Authentication failures</source>
            <translation>인증 실패</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Anomaly sensitivity:</source>
            <translation>이상 민감도:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Relaxed</source>
            <translation>편안한</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Balanced</source>
            <translation>균형 잡힌</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Sensitive</source>
            <translation>민감한</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6427" />
            <source>Declarative detection rule JSON</source>
            <translation>선언적 탐지 규칙 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6428" />
            <source>Validate rule</source>
            <translation>규칙 검증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6429" />
            <source>Run local detection</source>
            <translation>로컬 감지 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6430" />
            <source>Analyze adaptive anomalies</source>
            <translation>적응형 이상 분석</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6431" />
            <location filename="../zscaler_api_client.py" line="7040" />
            <source>Export masked detection evidence</source>
            <translation>마스킹된 탐지 증거 내보내기</translation>
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
            <translation>엔드포인트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6437" />
            <source>Observed</source>
            <translation>관찰됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6438" />
            <source>Detection lab</source>
            <translation>탐지 연구실</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6475" />
            <source>Continuously evaluate a transparent local evidence baseline. Framework mappings are navigational aids—not certification—and no tenant query or remediation runs automatically.</source>
            <translation>투명한 현지 증거 기준선을 지속적으로 평가합니다. 프레임워크 매핑은 인증이 아닌 탐색 보조 도구이며 테넌트 쿼리 또는 수정이 자동으로 실행되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6476" />
            <source>Framework view:</source>
            <translation>프레임워크 보기:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6477" />
            <source>All local controls</source>
            <translation>모든 로컬 컨트롤</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6477" />
            <source>NIST CSF 2.0 functions</source>
            <translation>NIST CSF 2.0 기능</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6477" />
            <source>CISA Zero Trust pillars</source>
            <translation>CISA 제로 트러스트 핵심 요소</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6478" />
            <source>Include proposed policy from Policy diff</source>
            <translation>정책 차이에서 제안된 정책 포함</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6479" />
            <source>Evaluate now</source>
            <translation>지금 평가하기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7334" />
            <source>Assurance score</source>
            <translation>보증 점수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Passed</source>
            <translation>합격</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7232" />
            <source>Not evaluated</source>
            <translation>평가되지 않음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <source>Evidence coverage</source>
            <translation>증거 범위</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Control</source>
            <translation>제어</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Control objective</source>
            <translation>제어 목적</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Framework mapping</source>
            <translation>프레임워크 매핑</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6487" />
            <source>Recommendation</source>
            <translation>추천</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6488" />
            <source>Leadership narrative</source>
            <translation>리더십 내러티브</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6457" />
            <location filename="../zscaler_api_client.py" line="6490" />
            <source>Score</source>
            <translation>점수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6310" />
            <source>JSON Lines (SIEM/SOAR)</source>
            <translation>JSON 라인(SIEM/SOAR)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6311" />
            <location filename="../zscaler_api_client.py" line="7772" />
            <source>Export masked security events</source>
            <translation>마스킹된 보안 이벤트 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6312" />
            <location filename="../zscaler_api_client.py" line="7778" />
            <source>Export read-only MCP manifest</source>
            <translation>읽기 전용 MCP 매니페스트 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6313" />
            <location filename="../zscaler_api_client.py" line="7786" />
            <source>Export Terraform review handoff</source>
            <translation>Terraform 검토 전달 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6406" />
            <source>Inspect the complete current REST or GraphQL response for explicit internet exposure, vulnerability severity and broad or write-capable access. Findings are local hypotheses and deception suggestions are never deployed automatically.</source>
            <translation>명시적인 인터넷 노출, 취약성 심각도 및 광범위하거나 쓰기 가능한 액세스에 대해 전체 현재 REST 또는 GraphQL 응답을 검사합니다. 결과는 지역적 가설이며 속임수 제안은 자동으로 배포되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Exposure signals</source>
            <translation>노출 신호</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>High-risk assets</source>
            <translation>고위험자산</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Access findings</source>
            <translation>발견 항목에 액세스</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Broad privileges</source>
            <translation>광범위한 권한</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6412" />
            <source>Asset</source>
            <translation>자산</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6412" />
            <source>Risk score</source>
            <translation>위험 점수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6412" />
            <source>Observed factors</source>
            <translation>관찰된 요인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6413" />
            <source>Subject</source>
            <translation>주제</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6413" />
            <source>Permission field</source>
            <translation>권한 필드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6414" />
            <source>Defensive deception opportunities</source>
            <translation>방어적인 속임수 기회</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>Analyze current exposure and access</source>
            <translation>현재 노출 및 액세스 분석</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <location filename="../zscaler_api_client.py" line="6963" />
            <source>Export masked exposure evidence</source>
            <translation>마스킹된 노출 증거 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <location filename="../zscaler_api_client.py" line="6981" />
            <location filename="../zscaler_api_client.py" line="6983" />
            <source>Investigation notebook</source>
            <translation>조사노트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <source>Note title</source>
            <translation>메모 제목</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <source>Comma-separated tags</source>
            <translation>쉼표로 구분된 태그</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6416" />
            <source>Masked investigation observations, decisions and follow-up</source>
            <translation>마스킹된 조사 관찰, 결정 및 후속 조치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Save local note</source>
            <translation>지역 메모 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <location filename="../zscaler_api_client.py" line="6988" />
            <source>Export masked notebook</source>
            <translation>마스킹된 노트 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Title</source>
            <translation>제목</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Tags</source>
            <translation>태그</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6417" />
            <source>Preview</source>
            <translation>미리보기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6418" />
            <source>Exposure &amp; access</source>
            <translation>노출 및 접근</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6442" />
            <source>Use guided, locally tracked response and recovery checklists. A completed step records only operator intent in the local audit trail; it never changes a tenant or closes an authoritative incident.</source>
            <translation>현지에서 추적되는 안내식 대응 및 복구 체크리스트를 사용하세요. 완료된 단계는 로컬 감사 추적에 운영자의 의도만 기록합니다. 테넌트를 변경하거나 권위 있는 사건을 종료하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6443" />
            <source>Playbook:</source>
            <translation>플레이북:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>API/service disruption</source>
            <translation>API/서비스 중단</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>High-risk policy change</source>
            <translation>고위험 정책 변경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>Digital experience degradation</source>
            <translation>디지털 경험 저하</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>Possible credential exposure</source>
            <translation>가능한 자격 증명 노출</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6444" />
            <source>Ransomware containment support</source>
            <translation>랜섬웨어 억제 지원</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6447" />
            <source>Mark selected step complete</source>
            <translation>선택한 단계를 완료로 표시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <location filename="../zscaler_api_client.py" line="7082" />
            <source>Export masked playbook evidence</source>
            <translation>마스킹된 플레이북 증거 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <source>Guidance</source>
            <translation>안내</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <source>Local evidence</source>
            <translation>지역적 증거</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6451" />
            <source>Smart API planner (review only)</source>
            <translation>스마트 API 플래너(검토 전용)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <source>Describe a goal to rank documented Automation Hub operations deterministically. Read operations are preferred; tenant values are never guessed and nothing runs automatically.</source>
            <translation>문서화된 Automation Hub 작업의 순위를 결정적으로 지정하는 목표를 설명합니다. 읽기 작업이 선호됩니다. 테넌트 값은 절대 추측되지 않으며 자동으로 실행되는 것은 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6453" />
            <source>Example: investigate slow ZDX application experience</source>
            <translation>예: 느린 ZDX 애플리케이션 경험 조사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6454" />
            <source>Plan documented operations</source>
            <translation>문서화된 작업 계획</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6455" />
            <source>Copy safe reads to API Chains</source>
            <translation>API 체인에 안전한 읽기 복사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6457" />
            <source>Product</source>
            <translation>제품</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6457" />
            <source>Operation</source>
            <translation>작동</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6458" />
            <location filename="../zscaler_api_client.py" line="7074" />
            <source>Response playbooks</source>
            <translation>대응 플레이북</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Change owner</source>
            <translation>소유자 변경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Independent reviewer</source>
            <translation>독립 리뷰어</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Owner:</source>
            <translation>소유자:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6463" />
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Maintenance window confirmed</source>
            <translation>유지보수 기간이 확인되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6463" />
            <source>Local simulation reviewed</source>
            <translation>로컬 시뮬레이션 검토</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6463" />
            <source>Rollback prepared</source>
            <translation>롤백 준비됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6465" />
            <source>Gate</source>
            <translation>게이트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6465" />
            <source>Required</source>
            <translation>필수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6471" />
            <location filename="../zscaler_api_client.py" line="7169" />
            <location filename="../zscaler_api_client.py" line="7173" />
            <location filename="../zscaler_api_client.py" line="7174" />
            <source>Verify rollback artifact</source>
            <translation>롤백 아티팩트 확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6491" />
            <source>Local baseline:</source>
            <translation>로컬 기준:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6492" />
            <source>Save assessment baseline</source>
            <translation>평가 기준 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6493" />
            <location filename="../zscaler_api_client.py" line="7272" />
            <source>Export signed evidence</source>
            <translation>서명된 증거 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6494" />
            <location filename="../zscaler_api_client.py" line="7279" />
            <source>Verify signed evidence</source>
            <translation>서명된 증거 확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6496" />
            <location filename="../zscaler_api_client.py" line="7203" />
            <location filename="../zscaler_api_client.py" line="7259" />
            <source>Continuous assurance</source>
            <translation>지속적인 보증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6561" />
            <location filename="../zscaler_api_client.py" line="7620" />
            <location filename="../zscaler_api_client.py" line="7624" />
            <location filename="../zscaler_api_client.py" line="7626" />
            <location filename="../zscaler_api_client.py" line="7638" />
            <source>Policy time travel</source>
            <translation>정책 시간 여행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6563" />
            <source>Save snapshot</source>
            <translation>스냅샷 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6564" />
            <source>Use as baseline</source>
            <translation>기준으로 사용</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6565" />
            <source>Load snapshot</source>
            <translation>스냅샷 로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6566" />
            <source>Delete snapshot</source>
            <translation>스냅샷 삭제</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6568" />
            <location filename="../zscaler_api_client.py" line="7555" />
            <location filename="../zscaler_api_client.py" line="7590" />
            <location filename="../zscaler_api_client.py" line="7615" />
            <source>Policy twin</source>
            <translation>정책 쌍</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6610" />
            <source>All environments</source>
            <translation>모든 환경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6626" />
            <source>Showing local evidence for: {name}</source>
            <translation>Showing local evidence for: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6628" />
            <source>Cross-tenant overview is active. Exports and integrations will include all local environments.</source>
            <translation>테넌트 간 개요가 활성 상태입니다. 내보내기 및 통합에는 모든 로컬 환경이 포함됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6634" />
            <location filename="../zscaler_api_client.py" line="6998" />
            <location filename="../zscaler_api_client.py" line="7404" />
            <source>Invalid JSON: </source>
            <translation>잘못된 JSON: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6654" />
            <source>Audit chain is valid</source>
            <translation>감사 체인이 유효합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6654" />
            <source>Audit chain needs review</source>
            <translation>감사 체인 검토 필요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6660" />
            <source>Success</source>
            <translation>성공</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6660" />
            <source>Other</source>
            <translation>기타</translation>
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
            <translation>심각</translation>
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
            <translation>높음</translation>
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
            <translation>중간</translation>
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
            <translation>낮음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6676" />
            <location filename="../zscaler_api_client.py" line="6838" />
            <location filename="../zscaler_api_client.py" line="7314" />
            <location filename="../zscaler_api_client.py" line="7572" />
            <location filename="../zscaler_api_client.py" line="7666" />
            <source>Info</source>
            <translation>정보</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6680" />
            <source>Audit integrity needs review</source>
            <translation>감사 무결성에 대한 검토가 필요함</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6680" />
            <source>The local audit chain did not verify.</source>
            <translation>로컬 감사 체인이 확인되지 않았습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6681" />
            <source>Repeated API failures</source>
            <translation>반복되는 API 실패</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6681" />
            <source>{count} failed requests are in local history.</source>
            <translation>{count} failed requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6682" />
            <source>API failures observed</source>
            <translation>API 오류가 관찰되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6682" />
            <source>{count} request(s) need review.</source>
            <translation>{count} request(s) need review.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6683" />
            <source>Change activity burst</source>
            <translation>변경 활동 버스트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6683" />
            <source>{count} write requests are in local history.</source>
            <translation>{count} write requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6684" />
            <source>Slow API responses</source>
            <translation>느린 API 응답</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6684" />
            <source>{count} request(s) took ten seconds or more.</source>
            <translation>{count} request(s) took ten seconds or more.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6685" />
            <source>No local telemetry yet</source>
            <translation>아직 로컬 원격 측정이 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6685" />
            <source>Send or import redacted requests to establish a local baseline.</source>
            <translation>로컬 기준을 설정하기 위해 수정된 요청을 보내거나 가져옵니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6706" />
            <source>{count} local alert(s) · error threshold: {threshold}</source>
            <translation>{count} local alert(s) · error threshold: {threshold}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6712" />
            <source>The local audit chain needs review.</source>
            <translation>현지 감사 체인에 대한 검토가 필요합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6713" />
            <source>Local failed requests reached the configured threshold.</source>
            <translation>실패한 로컬 요청이 구성된 임계값에 도달했습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6714" />
            <source>API rate limiting was observed in local history.</source>
            <translation>로컬 기록에서 API 속도 제한이 관찰되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6715" />
            <source>A response reported no remaining API rate-limit capacity.</source>
            <translation>응답에서 남은 API 속도 제한 용량이 없다고 보고했습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6716" />
            <source>The latest request failed after successful requests to the same endpoint.</source>
            <translation>동일한 엔드포인트에 대한 요청이 성공한 후 최신 요청이 실패했습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6717" />
            <source>The latest endpoint response was much slower than its local baseline.</source>
            <translation>최신 엔드포인트 응답은 로컬 기준보다 훨씬 느렸습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6718" />
            <source>Three or more local requests took ten seconds or more.</source>
            <translation>3개 이상의 로컬 요청에는 10초 이상이 소요되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6736" />
            <source>Local alert summary</source>
            <translation>지역 경고 요약</translation>
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
            <translation>지역 알림이 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6740" />
            <source>Count: {count}</source>
            <translation>Count: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6745" />
            <source>Export local alerts</source>
            <translation>지역 알림 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6774" />
            <source>Normal</source>
            <translation>보통</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6779" />
            <source>Observed relationship chain across local evidence; validate before treating it as an exploitable attack path.</source>
            <translation>지역 증거 전반에 걸쳐 관찰된 관계 사슬 악용 가능한 공격 경로로 취급하기 전에 검증하십시오.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6785" />
            <source>Endpoint failure evidence</source>
            <translation>엔드포인트 실패 증거</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6785" />
            <source>Relationship concentration</source>
            <translation>관계 집중</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6785" />
            <source>Security indicator observed</source>
            <translation>보안 지표가 관찰됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6787" />
            <source>The endpoint has locally retained server or network failure evidence.</source>
            <translation>엔드포인트에는 서버 또는 네트워크 오류 증거가 로컬로 보관되어 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6788" />
            <source>The entity is connected to an unusually broad set of locally observed relationships.</source>
            <translation>개체는 지역적으로 관찰되는 비정상적으로 광범위한 관계 집합과 연결되어 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6789" />
            <source>A threat, exposure, vulnerability, or indicator-like object was present in the response.</source>
            <translation>위협, 노출, 취약성 또는 지표와 유사한 개체가 응답에 존재했습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6798" />
            <source>The graph reached its local safety limit; use the filter or export the evidence for complete review.</source>
            <translation>그래프가 로컬 안전 한계에 도달했습니다. 완전한 검토를 위해 필터를 사용하거나 증거를 내보냅니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6800" />
            <source>No correlatable entities are available in the selected local scope.</source>
            <translation>선택한 로컬 범위에서는 상관 가능한 엔터티를 사용할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6822" />
            <source>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</source>
            <translation>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6841" />
            <source>Request</source>
            <translation>요청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6841" />
            <source>Audit</source>
            <translation>감사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6847" />
            <source>1. Review failed requests in the local timeline.
2. Select the matching product and endpoint in API Explorer.
3. Run the read-only status or list operation.
4. Compare the masked response with the audit trail.
5. Export evidence or open a change review; no remediation is sent automatically.</source>
            <translation>1. 로컬 타임라인에서 실패한 요청을 검토합니다.
2. API Explorer에서 일치하는 제품과 엔드포인트를 선택합니다.
3. 읽기 전용 상태 또는 목록 작업을 실행합니다.
4. 마스킹된 응답을 감사 추적과 비교합니다.
5. 증거를 내보내거나 변경 검토를 시작합니다. 교정 조치가 자동으로 전송되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6848" />
            <source>1. Review recent write requests and audit events.
2. Export or load the current policy object.
3. Use Policy diff and local simulation.
4. Run compliance checks.
5. Prepare a reviewed Terraform or Git change; no apply is sent automatically.</source>
            <translation>1. 최근 쓰기 요청 및 감사 이벤트를 검토합니다.
2. 현재 정책 개체를 내보내거나 로드합니다.
3. 정책 차이와 로컬 시뮬레이션을 사용하세요.
4. 규정 준수 검사를 실행합니다.
5. 검토된 Terraform 또는 Git 변경 사항을 준비합니다. 적용이 자동으로 전송되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6849" />
            <source>1. Identify slow requests in the local timeline.
2. Review response status, duration, and rate-limit headers.
3. Query the relevant ZDX or product status endpoint.
4. Compare against recent requests.
5. Export the masked incident evidence for escalation.</source>
            <translation>1. 로컬 타임라인에서 느린 요청을 식별합니다.
2. 응답 상태, 기간, 속도 제한 헤더를 검토합니다.
3. 관련 ZDX 또는 제품 상태 엔드포인트를 쿼리합니다.
4. 최근 요청과 비교하십시오.
5. 에스컬레이션을 위해 마스킹된 사건 증거를 내보냅니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6898" />
            <source>{value:g} ms</source>
            <translation>{value:g} ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>User</source>
            <translation>사용자</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Device</source>
            <translation>장치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Network</source>
            <translation>네트워크</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Service edge</source>
            <translation>서비스 엣지</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6904" />
            <source>Application</source>
            <translation>신청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Device score</source>
            <translation>기기 점수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Application score</source>
            <translation>지원 점수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Service-edge score</source>
            <translation>서비스 에지 점수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Jitter</source>
            <translation>지터</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>DNS time</source>
            <translation>DNS 시간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>TCP connect time</source>
            <translation>TCP 연결 시간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Page fetch time</source>
            <translation>페이지 가져오기 시간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Availability</source>
            <translation>가용성</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>CPU</source>
            <translation>CPU</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6908" />
            <source>Memory</source>
            <translation>메모리</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Overall experience score is below 70</source>
            <translation>전체 경험치 점수가 70점 미만입니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Device score is below 70</source>
            <translation>장치 점수가 70점 미만입니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Application score is below 70</source>
            <translation>지원 점수가 70점 미만입니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Service-edge score is below 70</source>
            <translation>서비스 에지 점수가 70점 미만입니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed latency exceeds 250 ms</source>
            <translation>관찰된 지연 시간이 250ms를 초과합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed packet loss exceeds 2%</source>
            <translation>관찰된 패킷 손실은 2%를 초과합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed jitter exceeds 40 ms</source>
            <translation>관찰된 지터가 40ms를 초과합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6912" />
            <source>Observed availability is below 99%</source>
            <translation>관찰된 가용성은 99% 미만입니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6918" />
            <source>Schema-tolerant local interpretation of observed API fields. Thresholds are transparent operational hints, not Zscaler health verdicts or SLA determinations.</source>
            <translation>관찰된 API 필드의 스키마 허용 로컬 해석. 임계값은 Zscaler 상태 판정이나 SLA 결정이 아닌 투명한 운영 힌트입니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6919" />
            <source>No current API or GraphQL response is available. Run or import a ZDX/OneAPI query, then analyze again.</source>
            <translation>현재 API 또는 GraphQL 응답을 사용할 수 없습니다. ZDX/OneAPI 쿼리를 실행하거나 가져온 후 다시 분석하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6919" />
            <source>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</source>
            <translation>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6953" />
            <source>Explicit broad or write-capable access observed; validate least privilege and assignment context.</source>
            <translation>명시적인 광범위 또는 쓰기 가능 액세스가 관찰되었습니다. 최소 권한 및 할당 컨텍스트를 검증합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6958" />
            <source>Consider a monitored decoy resource near exposed paths</source>
            <translation>노출된 경로 근처에서 모니터링되는 미끼 리소스를 고려하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6958" />
            <source>Consider a non-production canary permission for privileged-path monitoring</source>
            <translation>권한 있는 경로 모니터링을 위해 비프로덕션 카나리아 권한을 고려하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6958" />
            <source>Maintain an exposure and least-privilege baseline</source>
            <translation>노출 및 최소 권한 기준 유지</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6981" />
            <source>Select one environment before saving an investigation note.</source>
            <translation>조사 메모를 저장하기 전에 하나의 환경을 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7006" />
            <source>Rule is valid and can be evaluated locally.</source>
            <translation>규칙이 유효하며 로컬로 평가할 수 있습니다.</translation>
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
            <translation>중앙값 절대 편차(MAD), 10%/10ms 노이즈 플로어에서 1.4826으로 스케일링</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7035" />
            <source>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</source>
            <translation>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Confirm scope from retained failures</source>
            <translation>보유된 오류의 범위 확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Check rate-limit and service-health evidence</source>
            <translation>속도 제한 및 서비스 상태 증거 확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Collect read-only product status</source>
            <translation>읽기 전용 제품 상태 수집</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Correlate affected entities</source>
            <translation>영향을 받은 엔터티 상관관계</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Export masked incident evidence</source>
            <translation>마스킹된 사건 증거 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7055" />
            <source>Record closure decision</source>
            <translation>기록 폐쇄 결정</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Capture current policy baseline</source>
            <translation>현재 정책 기준 캡처</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Run policy diff and best-practice checks</source>
            <translation>정책 차이점 및 모범 사례 확인 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Run Policy Twin and decision simulation</source>
            <translation>정책 쌍 및 의사 결정 시뮬레이션 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Prepare rollback artifact</source>
            <translation>롤백 아티팩트 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Record independent review</source>
            <translation>독립적인 검토 기록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7056" />
            <source>Export change package</source>
            <translation>변경 패키지 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Identify affected user and application scope</source>
            <translation>영향을 받는 사용자 및 애플리케이션 범위 식별</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Inspect device metrics</source>
            <translation>장치 지표 검사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Inspect network latency, loss and jitter</source>
            <translation>네트워크 대기 시간, 손실 및 지터 검사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Inspect service-edge path</source>
            <translation>서비스 에지 경로 검사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Compare application response</source>
            <translation>애플리케이션 응답 비교</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7057" />
            <source>Export masked journey evidence</source>
            <translation>마스크된 여행 증거 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Stop copying or exporting raw material</source>
            <translation>원자재 복사 또는 수출 중단</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Rotate the affected credential outside this client</source>
            <translation>이 클라이언트 외부에서 영향을 받은 자격 증명을 순환합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Clear in-memory sessions</source>
            <translation>메모리 내 세션 지우기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Review masked audit evidence</source>
            <translation>마스킹된 감사 증거 검토</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Validate least-privilege access</source>
            <translation>최소 권한 액세스 검증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7058" />
            <source>Record containment and recovery</source>
            <translation>기록의 격리 및 복구</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Validate the alert in authoritative security tooling</source>
            <translation>권위 있는 보안 도구로 경고를 검증하세요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Identify users, devices and applications</source>
            <translation>사용자, 장치, 애플리케이션 식별</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Preserve masked evidence</source>
            <translation>은폐된 증거 보존</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Prepare containment changes for independent approval</source>
            <translation>독립적인 승인을 위해 격리 변경 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Track recovery prerequisites</source>
            <translation>트랙 복구 전제조건</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7059" />
            <source>Record lessons learned</source>
            <translation>배운 내용을 기록하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7062" />
            <source>Complete</source>
            <translation>완료</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7062" />
            <source>Pending</source>
            <translation>보류 중</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7063" />
            <source>Recorded in local audit trail</source>
            <translation>현지 감사 추적에 기록됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7063" />
            <source>No completion evidence</source>
            <translation>완료 증거 없음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7074" />
            <source>Select a playbook step first.</source>
            <translation>먼저 플레이북 단계를 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7078" />
            <source>Mark step complete</source>
            <translation>단계 완료로 표시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7078" />
            <source>Record this step as completed in the local audit trail? This does not perform the action or update an authoritative incident.</source>
            <translation>로컬 감사 추적에 이 단계를 완료된 것으로 기록하시겠습니까? 이는 작업을 수행하거나 신뢰할 수 있는 사건을 업데이트하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7089" />
            <source>Describe an administrative or investigation goal first.</source>
            <translation>먼저 관리 또는 조사 목표를 설명하십시오.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7098" />
            <source>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</source>
            <translation>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Smart API planner</source>
            <translation>스마트 API 플래너</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Create a plan with at least one read operation first.</source>
            <translation>먼저 하나 이상의 읽기 작업이 포함된 계획을 만듭니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7106" />
            <source>Planner output copied for review. Validate the chain, supply required path values, and approve it separately before execution.</source>
            <translation>검토를 위해 Planner 출력이 복사되었습니다. 체인을 검증하고 필요한 경로 값을 제공하며 실행 전에 별도로 승인합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Review policy diff</source>
            <translation>정책 차이점 검토</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Run local simulation</source>
            <translation>로컬 시뮬레이션 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Record reviewer approval</source>
            <translation>레코드 검토자 승인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Export Git/Terraform review</source>
            <translation>Git/Terraform 검토 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7126" />
            <source>Apply outside this client only after approval</source>
            <translation>승인 후에만 이 고객 외부에서 신청하십시오.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7128" />
            <source>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</source>
            <translation>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Change reference recorded</source>
            <translation>기록된 변경 참조</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Change owner recorded</source>
            <translation>소유자 변경이 기록되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Independent reviewer recorded</source>
            <translation>독립 리뷰어가 녹음됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Local policy simulation reviewed</source>
            <translation>지역 정책 시뮬레이션 검토</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Rollback artifact prepared</source>
            <translation>롤백 아티팩트 준비됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7131" />
            <source>Local approval recorded</source>
            <translation>현지 승인 기록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Yes</source>
            <translation>예</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>No</source>
            <translation>아니요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Blocked</source>
            <translation>차단됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Optional</source>
            <translation>선택사항</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7147" />
            <source>Enter a reviewer before recording approval.</source>
            <translation>녹음 승인 전 검토자를 입력하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7149" />
            <source>Local approval recorded. External apply remains disabled.</source>
            <translation>현지 승인이 기록되었습니다. 외부 적용은 비활성화된 상태로 유지됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7173" />
            <source>Rollback artifact integrity verified. This does not authorize applying it.</source>
            <translation>롤백 아티팩트 무결성이 확인되었습니다. 이는 적용을 승인하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7174" />
            <source>Rollback verification failed: {reason}</source>
            <translation>Rollback verification failed: {reason}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7184" />
            <source>No comparison baseline</source>
            <translation>비교 기준 없음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7189" />
            <source>{time} · score {score}/100</source>
            <translation>{time} · score {score}/100</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7212" />
            <source>Audit evidence integrity</source>
            <translation>증거 무결성 감사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7212" />
            <source>Review and restore the local hash-linked audit trail.</source>
            <translation>로컬 해시 연결 감사 추적을 검토하고 복원합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7213" />
            <source>Operational evidence available</source>
            <translation>사용 가능한 운영 증거</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7213" />
            <source>Collect or import masked read-only evidence for the selected environment.</source>
            <translation>선택한 환경에 대해 마스킹된 읽기 전용 증거를 수집하거나 가져옵니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7214" />
            <source>API health and anomaly monitoring</source>
            <translation>API 상태 및 이상 모니터링</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7214" />
            <source>Investigate repeated failures, latency regressions, and rate limiting.</source>
            <translation>반복되는 실패, 대기 시간 회귀 및 속도 제한을 조사합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7215" />
            <source>Least-privilege policy baseline</source>
            <translation>최소 권한 정책 기준</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7215" />
            <source>Constrain unconditional allow rules and validate order in Policy Twin.</source>
            <translation>정책 쌍에서 무조건 허용 규칙을 제한하고 순서를 검증합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7216" />
            <source>Reviewed write activity</source>
            <translation>쓰기 활동을 검토했습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7216" />
            <source>Require a recorded review and rollback artifact for write activity.</source>
            <translation>쓰기 활동에 대해 기록된 검토 및 롤백 아티팩트가 필요합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7217" />
            <source>Incident evidence readiness</source>
            <translation>사건 증거 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7217" />
            <source>Prepare and export masked investigation evidence for unresolved failures.</source>
            <translation>해결되지 않은 실패에 대한 숨겨진 조사 증거를 준비하고 내보냅니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7218" />
            <source>Recovery evidence available</source>
            <translation>회복 증거 이용 가능</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7218" />
            <source>Save a policy snapshot or reviewed rollback artifact before change.</source>
            <translation>변경하기 전에 정책 스냅샷 또는 검토된 롤백 아티팩트를 저장하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7232" />
            <source>Pass</source>
            <translation>패스</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7232" />
            <source>Fail</source>
            <translation>실패</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7245" />
            <location filename="../zscaler_api_client.py" line="7302" />
            <location filename="../zscaler_api_client.py" line="7348" />
            <source>Local assurance requires attention</source>
            <translation>현지 보증에는 주의가 필요합니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7245" />
            <location filename="../zscaler_api_client.py" line="7302" />
            <location filename="../zscaler_api_client.py" line="7348" />
            <source>No failing controls in the evaluated local scope</source>
            <translation>평가된 로컬 범위에는 실패한 컨트롤이 없습니다.</translation>
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
            <translation>우선순위 조치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7251" />
            <source>Local evidence limitation: validate results against authoritative tenant and governance records.</source>
            <translation>로컬 증거 제한: 신뢰할 수 있는 테넌트 및 거버넌스 기록을 기준으로 결과를 검증합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7255" />
            <source>Now</source>
            <translation>지금</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7256" />
            <source>Assessment {identifier} · {frameworks} · local evidence only, not certification.</source>
            <translation>Assessment {identifier} · {frameworks} · local evidence only, not certification.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7259" />
            <source>Select one environment before saving an assurance baseline.</source>
            <translation>보증 기준선을 저장하기 전에 하나의 환경을 선택하십시오.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7269" />
            <location filename="../zscaler_api_client.py" line="7271" />
            <location filename="../zscaler_api_client.py" line="7288" />
            <location filename="../zscaler_api_client.py" line="7290" />
            <source>Signed evidence</source>
            <translation>서명된 증거</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7269" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>시스템 키체인이 증거 서명 키를 저장할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7271" />
            <source>The protected evidence signing key is invalid. Rotate it in Settings before signing.</source>
            <translation>보호된 증거 서명 키가 잘못되었습니다. 서명하기 전에 설정에서 회전하세요.</translation>
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
            <translation>경영진 보증 설명</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7330" />
            <source>Posture score</source>
            <translation>자세 점수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7331" />
            <source>Local requests</source>
            <translation>현지 요청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7332" />
            <source>Failed requests</source>
            <translation>실패한 요청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7461" />
            <source>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</source>
            <translation>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7467" />
            <source>Cancellation requested; the current HTTP request will finish and no new chain step will start.</source>
            <translation>취소가 요청되었습니다. 현재 HTTP 요청이 완료되고 새 체인 단계가 시작되지 않습니다.</translation>
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
            <translation>모든 단계가 시작되기 전에 체인이 취소되었습니다. 완료된 결과가 유지되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7515" />
            <source>Run a chain before exporting its masked results.</source>
            <translation>마스크된 결과를 내보내기 전에 체인을 실행하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7539" />
            <source>No baseline (analyze current policy only)</source>
            <translation>기준 없음(현재 정책만 분석)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Unconditional allow</source>
            <translation>무조건 허용</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Shadowed conflict</source>
            <translation>그림자 갈등</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Redundant shadow</source>
            <translation>중복된 그림자</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Overlapping actions</source>
            <translation>겹치는 작업</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7565" />
            <source>Duplicate rule name</source>
            <translation>규칙 이름이 중복되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7567" />
            <source>An unconditional allow rule can expose every later matching scope.</source>
            <translation>무조건 허용 규칙은 이후 일치하는 모든 범위를 노출할 수 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7568" />
            <source>The later rule can never decide because an earlier rule covers all of its matches.</source>
            <translation>이전 규칙이 모든 일치 항목을 다루기 때문에 이후 규칙은 결코 결정할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7569" />
            <source>The rules can match the same context but have different actions; order decides the outcome.</source>
            <translation>규칙은 동일한 컨텍스트와 일치할 수 있지만 작업은 다를 수 있습니다. 순서가 결과를 결정합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7570" />
            <source>Duplicate rule names make reviews, evidence, and rollback ambiguous.</source>
            <translation>규칙 이름이 중복되면 검토, 증거 및 롤백이 모호해집니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7579" />
            <source>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</source>
            <translation>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7586" />
            <source>Request context must be a JSON object.</source>
            <translation>요청 컨텍스트는 JSON 객체여야 합니다.</translation>
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
            <translation>정책 스냅샷을 저장하기 전에 하나의 환경을 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7626" />
            <source>Policy snapshots are limited to 2 MB.</source>
            <translation>정책 스냅샷은 2MB로 제한됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7627" />
            <source>Save policy snapshot</source>
            <translation>정책 스냅샷 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7627" />
            <source>Snapshot name:</source>
            <translation>스냅샷 이름:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7638" />
            <source>Select a saved policy snapshot first.</source>
            <translation>먼저 저장된 정책 스냅샷을 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7644" />
            <source>Delete policy snapshot</source>
            <translation>정책 스냅샷 삭제</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7644" />
            <source>Delete the selected local policy snapshot?</source>
            <translation>선택한 로컬 정책 스냅샷을 삭제하시겠습니까?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7715" />
            <source>Local automation must be an existing absolute path to a non-symlinked .py file no larger than 1 MiB.</source>
            <translation>로컬 자동화는 1MiB 이하의 심볼릭 링크가 아닌 .py 파일에 대한 기존 절대 경로여야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7718" />
            <location filename="../zscaler_api_client.py" line="7882" />
            <source>Webhook endpoints must use HTTPS (or local HTTP) and must not contain credentials in the URL.</source>
            <translation>웹훅 엔드포인트는 HTTPS(또는 로컬 HTTP)를 사용해야 하며 URL에 자격 증명을 포함해서는 안 됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7722" />
            <source>Secure storage</source>
            <translation>안전한 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7722" />
            <source>The system keychain could not save the webhook endpoint. Check the keychain service and try again.</source>
            <translation>시스템 키체인이 웹훅 엔드포인트를 저장할 수 없습니다. 키체인 서비스를 확인하고 다시 시도하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7738" />
            <source>Connectivity test</source>
            <translation>연결 테스트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7738" />
            <source>Alert snapshot</source>
            <translation>알림 스냅샷</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7739" />
            <source>Started</source>
            <translation>시작됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7499" />
            <location filename="../zscaler_api_client.py" line="7739" />
            <source>Succeeded</source>
            <translation>성공함</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6528" />
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</source>
            <translation>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>A JSON list of API requests. Relative paths use the active product host; references can use only completed step IDs.</source>
            <translation>API 요청의 JSON 목록입니다. 상대 경로는 활성 제품 호스트를 사용합니다. 참조는 완료된 단계 ID만 사용할 수 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Step</source>
            <translation>단계</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="6457" />
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Method</source>
            <translation>방법</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Records</source>
            <translation>기록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Duration</source>
            <translation>기간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <location filename="../zscaler_api_client.py" line="7499" />
            <location filename="../zscaler_api_client.py" line="7739" />
            <source>Failed</source>
            <translation>실패</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7772" />
            <source>All files (*)</source>
            <translation>모든 파일(*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7775" />
            <source>Exported {count} masked local event(s) as {format}. No data was sent automatically.</source>
            <translation>Exported {count} masked local event(s) as {format}. No data was sent automatically.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7791" />
            <source>Created a non-executable Terraform review handoff. Run terraformer and terraform plan only after independent review; this client never applies it.</source>
            <translation>실행 불가능한 Terraform 검토 핸드오프를 만들었습니다. 독립적인 검토 후에만 Terraformer 및 Terraform 계획을 실행하십시오. 이 클라이언트는 이를 적용하지 않습니다.</translation>
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
            <translation>로컬 자동화</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7817" />
            <source>Read-only mode blocks local automation.</source>
            <translation>읽기 전용 모드는 로컬 자동화를 차단합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7820" />
            <source>Configure a valid local Python automation in Governance first.</source>
            <translation>먼저 거버넌스에서 유효한 로컬 Python 자동화를 구성하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7822" />
            <source>Local automation is already running.</source>
            <translation>로컬 자동화가 이미 실행 중입니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7828" />
            <source>Run the reviewed Python file with masked local posture and alert data? The process receives no API credentials.</source>
            <translation>마스크된 로컬 상태 및 경고 데이터를 사용하여 검토된 Python 파일을 실행하시겠습니까? 프로세스는 API 자격 증명을 받지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7856" />
            <source>Local automation exceeded the 15-second limit and was stopped.</source>
            <translation>로컬 자동화가 15초 제한을 초과하여 중지되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7866" />
            <source>Local automation completed with exit code {code}.</source>
            <translation>Local automation completed with exit code {code}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7871" />
            <source>Local automation failed to start.</source>
            <translation>로컬 자동화를 시작하지 못했습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7877" />
            <source>Send the current masked local alert snapshot to the configured webhook endpoint?</source>
            <translation>현재 마스킹된 로컬 알림 스냅샷을 구성된 웹훅 엔드포인트로 보내시겠습니까?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7883" />
            <location filename="../zscaler_api_client.py" line="7885" />
            <location filename="../zscaler_api_client.py" line="7889" />
            <location filename="../zscaler_api_client.py" line="7909" />
            <location filename="../zscaler_api_client.py" line="7916" />
            <source>Webhook delivery</source>
            <translation>웹훅 전달</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7885" />
            <source>A webhook delivery is already running.</source>
            <translation>웹훅 전달이 이미 실행 중입니다.</translation>
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
            <translation>배경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7945" />
            <source>App only</source>
            <translation>앱 전용</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7946" />
            <source>Paused</source>
            <translation>일시중지됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7958" />
            <source>Select a scheduled report first.</source>
            <translation>먼저 예약된 보고서를 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7976" />
            <source>The scheduled report was generated locally.</source>
            <translation>예약된 보고서가 로컬에서 생성되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7978" />
            <source>The scheduled report could not be generated. Check its output folder and the audit trail.</source>
            <translation>예약된 보고서를 생성할 수 없습니다. 출력 폴더와 감사 추적을 확인하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7992" />
            <source>The operating-system schedule could not be updated. No state was changed.</source>
            <translation>운영 체제 일정을 업데이트할 수 없습니다. 상태가 변경되지 않았습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8008" />
            <source>The report is paused and cannot generate output, but the operating-system job cleanup needs manual review.</source>
            <translation>보고서가 일시 중지되어 출력을 생성할 수 없지만 운영 체제 작업 정리를 수동으로 검토해야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8014" />
            <source>Remove the selected scheduled report?</source>
            <translation>선택한 예약 보고서를 삭제하시겠습니까?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8027" />
            <source>The report was removed, but the operating-system job could not be removed. It can no longer generate a report because its schedule ID is no longer active.</source>
            <translation>보고서가 제거되었지만 운영 체제 작업을 제거할 수 없습니다. 일정 ID가 더 이상 활성화되지 않으므로 더 이상 보고서를 생성할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8030" />
            <source>Report name:</source>
            <translation>보고서 이름:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8043" />
            <source>Run this report even when ZS API Client is closed? This creates a user-level operating-system schedule and requires no administrator privileges.</source>
            <translation>ZS API 클라이언트가 닫힌 경우에도 이 보고서를 실행하시겠습니까? 이렇게 하면 사용자 수준 운영 체제 일정이 생성되며 관리자 권한이 필요하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8057" />
            <source>The operating-system schedule could not be created. The report was not scheduled.</source>
            <translation>운영 체제 일정을 만들 수 없습니다. 보고서가 예약되지 않았습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8065" />
            <source>Scheduled report saved. It will run in the background even when the application is closed.</source>
            <translation>예약된 보고서가 저장되었습니다. 애플리케이션이 종료되어도 백그라운드에서 실행됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8065" />
            <source>Scheduled report saved. It will run locally while the application is open.</source>
            <translation>예약된 보고서가 저장되었습니다. 애플리케이션이 열려 있는 동안 로컬로 실행됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7930" />
            <location filename="../zscaler_api_client.py" line="8033" />
            <source>Hourly</source>
            <translation>시간별</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7930" />
            <location filename="../zscaler_api_client.py" line="8033" />
            <source>Daily</source>
            <translation>매일</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7930" />
            <location filename="../zscaler_api_client.py" line="8033" />
            <source>Weekly</source>
            <translation>주간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8034" />
            <source>Report cadence:</source>
            <translation>보고서 주기:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8037" />
            <source>Choose report output folder</source>
            <translation>보고서 출력 폴더 선택</translation>
        </message>
        <message>
            <source>Scheduled report saved. Reports run locally while the application is open.</source>
            <translation type="vanished">예약된 보고서가 저장되었습니다. 보고서는 애플리케이션이 열려 있는 동안 로컬로 실행됩니다.</translation>
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
            <translation>유효</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7300" />
            <location filename="../zscaler_api_client.py" line="7333" />
            <source>Needs review</source>
            <translation>검토 필요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7300" />
            <source>Incident signals</source>
            <translation>사고 신호</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Executive actions</source>
            <translation>행정 조치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Review high-risk findings and approval records.</source>
            <translation>고위험 조사 결과 및 승인 기록을 검토합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Use the Security Posture and Change Control workspaces for evidence.</source>
            <translation>증거를 위해 보안 상태 및 변경 제어 작업 공간을 사용하십시오.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7306" />
            <source>SOC next steps</source>
            <translation>SOC의 다음 단계</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7306" />
            <source>Use Incident Investigation to prepare a review chain.</source>
            <translation>사고 조사를 사용하여 검토 체인을 준비합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7306" />
            <source>Export masked evidence before escalation.</source>
            <translation>에스컬레이션하기 전에 마스킹된 증거를 내보냅니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7308" />
            <source>Operations next steps</source>
            <translation>운영 다음 단계</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7308" />
            <source>Review slow responses and API failures.</source>
            <translation>느린 응답 및 API 오류를 검토하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7308" />
            <source>Confirm rate limits and service health with read-only queries.</source>
            <translation>읽기 전용 쿼리로 속도 제한과 서비스 상태를 확인하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7408" />
            <source>Configure a host for the active product before running a chain.</source>
            <translation>체인을 실행하기 전에 활성 제품에 대한 호스트를 구성하십시오.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7418" />
            <source>Each chain step must stay on the active product host.</source>
            <translation>각 체인 단계는 활성 제품 호스트에 있어야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7434" />
            <source>Fix the chain validation errors before running it.</source>
            <translation>실행하기 전에 체인 유효성 검사 오류를 수정하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7438" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>읽기 전용 모드는 쓰기 요청을 차단합니다. 계속하려면 Operations Center에서 로컬 역할을 변경하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7440" />
            <source>Authenticate the active product before running a chain.</source>
            <translation>체인을 실행하기 전에 활성 제품을 인증하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7441" />
            <source>Run {count} API step(s) sequentially against the active environment?</source>
            <translation>Run {count} API step(s) sequentially against the active environment?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7443" />
            <source>The chain contains write operations; review and approve before continuing.</source>
            <translation>체인에는 쓰기 작업이 포함되어 있습니다. 계속하기 전에 검토하고 승인하세요.</translation>
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
            <translation type="vanished">측정항목은 로컬이며 자격 증명을 포함하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7678" />
            <source>Policy export</source>
            <translation>정책 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7679" />
            <source>Export policy</source>
            <translation>수출 정책</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7688" />
            <source>Compliance</source>
            <translation>규정 준수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7712" />
            <source>Alert threshold must be a positive integer.</source>
            <translation>경고 임계값은 양의 정수여야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7726" />
            <source>Governance settings saved.</source>
            <translation>거버넌스 설정이 저장되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7730" />
            <source>Use OneAPI or legacy clients locally</source>
            <translation>OneAPI 또는 레거시 클라이언트를 로컬에서 사용</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7730" />
            <source>AI-assisted, tool-scoped exploration</source>
            <translation>AI 지원, 도구 범위 탐색</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7730" />
            <source>Export existing ZIA/ZPA configuration to Terraform</source>
            <translation>기존 ZIA/ZPA 구성을 Terraform으로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7733" />
            <source>Available</source>
            <translation>가능</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7733" />
            <source>Not installed</source>
            <translation>설치되지 않음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7765" />
            <source>Prepare an integration first.</source>
            <translation>먼저 통합을 준비하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6730" />
            <location filename="../zscaler_api_client.py" line="7768" />
            <source>Copied to clipboard</source>
            <translation>클립보드에 복사됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7510" />
            <source>The chain stopped after the first failed step.</source>
            <translation>첫 번째 단계 실패 후 체인이 중지되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7662" />
            <location filename="../zscaler_api_client.py" line="7946" />
            <source>Enabled</source>
            <translation>활성화됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7662" />
            <source>Disabled</source>
            <translation>장애인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7668" />
            <source>Allow rule has no conditions</source>
            <translation>허용 규칙에 조건이 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7668" />
            <source>Rule is disabled</source>
            <translation>규칙이 비활성화되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7669" />
            <source>Rule name is duplicated</source>
            <translation>규칙 이름이 중복되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7669" />
            <source>Rule action is unspecified</source>
            <translation>규칙 작업이 지정되지 않았습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7698" />
            <source>Rules evaluated</source>
            <translation>평가된 규칙</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7698" />
            <source>Matched rule</source>
            <translation>일치하는 규칙</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>Matched</source>
            <translation>일치함</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>Not matched</source>
            <translation>일치하지 않음</translation>
        </message>
        <message>
            <source>Webhook test</source>
            <translation type="vanished">웹훅 테스트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7882" />
            <source>Configure a webhook endpoint in Governance first.</source>
            <translation>먼저 거버넌스에서 웹훅 엔드포인트를 구성하세요.</translation>
        </message>
        <message>
            <source>Webhook endpoints must use HTTPS unless they are local.</source>
            <translation type="vanished">웹훅 엔드포인트는 로컬이 아닌 이상 HTTPS를 사용해야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7874" />
            <source>Send a masked connectivity test to the configured webhook endpoint?</source>
            <translation>구성된 웹훅 엔드포인트에 마스킹된 연결 테스트를 보내시겠습니까?</translation>
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
            <translation>예정된 보고서</translation>
        </message>
        <message>
            <source>Report name and cadence:</source>
            <translation type="vanished">보고서 이름 및 흐름:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8069" />
            <source>Save support bundle</source>
            <translation>지원 번들 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8074" />
            <source>Support bundle</source>
            <translation>지원 번들</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8074" />
            <source>A redacted support bundle was created.</source>
            <translation>수정된 지원 번들이 생성되었습니다.</translation>
        </message>
    </context>
    <context>
        <name>PacWorkspaceDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="8141" />
            <location filename="../zscaler_api_client.py" line="8466" />
            <source>PAC Workspace</source>
            <translation>PAC 작업공간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8145" />
            <source>Create and verify PAC files locally. API operations are prepared in the request editor and are never sent or deployed automatically.</source>
            <translation>PAC 파일을 로컬에서 생성하고 확인합니다. API 작업은 요청 편집기에서 준비되며 자동으로 전송되거나 배포되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8150" />
            <source>PAC experience:</source>
            <translation>PAC 경험:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8152" />
            <source>Guided (recommended)</source>
            <translation>안내됨(권장)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8153" />
            <source>Advanced</source>
            <translation>고급</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8170" />
            <source>PAC name:</source>
            <translation>PAC 이름:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8171" />
            <source>Change note:</source>
            <translation>변경 사항:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8172" />
            <source>Hosted PAC URL (optional for ZCC):</source>
            <translation>호스팅된 PAC URL(ZCC의 경우 선택 사항):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8173" />
            <source>Existing ZIA PAC ID (for lifecycle actions):</source>
            <translation>기존 ZIA PAC ID(수명 주기 작업용):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8174" />
            <source>ZIA PAC version:</source>
            <translation>ZIA PAC 버전:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8175" />
            <source>ZIA version action:</source>
            <translation>ZIA 버전 작업:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8182" />
            <source>Start with a safe baseline. Enter only internal destinations that must bypass Zscaler; all other traffic uses the selected gateway and failover.</source>
            <translation>안전한 기준선부터 시작하세요. Zscaler를 우회해야 하는 내부 대상만 입력하세요. 다른 모든 트래픽은 선택한 게이트웨이와 장애 조치를 사용합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8190" />
            <source>Direct-bypass host patterns (one per line):</source>
            <translation>직접 우회 호스트 패턴(한 줄에 하나씩):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8191" />
            <source>Primary gateway:</source>
            <translation>기본 게이트웨이:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8192" />
            <source>Secondary gateway:</source>
            <translation>보조 게이트웨이:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8195" />
            <source>Create guided PAC</source>
            <translation>안내형 PAC 생성</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8196" />
            <source>Load safe example</source>
            <translation>로드 세이프 예시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8199" />
            <source>Generated PAC preview (read-only):</source>
            <translation>Generated PAC preview (read-only):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8206" />
            <source>Guided setup</source>
            <translation>안내 설정</translation>
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
            <translation>PAC 로드…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8218" />
            <source>Save PAC…</source>
            <translation>PAC 저장…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8219" />
            <source>Save local draft</source>
            <translation>로컬 초안 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8222" />
            <source>Author</source>
            <translation>작성자</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8225" />
            <source>Variables (JSON). Standard Zscaler names: </source>
            <translation>변수(JSON). 표준 Zscaler 이름: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8229" />
            <source>Test URL:</source>
            <translation>테스트 URL:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8231" />
            <source>Apply variables</source>
            <translation>변수 적용</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8232" />
            <source>Run static verification</source>
            <translation>정적 검증 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8233" />
            <source>Preview decision</source>
            <translation>미리보기 결정</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8236" />
            <source>Verify</source>
            <translation>확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8239" />
            <source>PAC reference and review help. The verifier never executes JavaScript; validate in ZIA and test a pilot group before deployment.</source>
            <translation>PAC 참조 및 검토 도움말. 검증자는 절대로 JavaScript를 실행하지 않습니다. ZIA에서 검증하고 배포 전에 파일럿 그룹을 테스트합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8240" />
            <source>Variable or function</source>
            <translation>변수 또는 함수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8240" />
            <source>Purpose / guidance</source>
            <translation>목적 / 안내</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8248" />
            <source>Roll out in stages: validate, test representative URLs, stage to a small pilot group, then deploy. Prefer host-pattern checks; avoid DNS helpers in Client Connector PAC files where possible.</source>
            <translation>단계별 출시: 대표 URL을 검증하고 테스트하고 소규모 파일럿 그룹으로 단계화한 후 배포합니다. 호스트 패턴 검사를 선호합니다. 가능하면 클라이언트 커넥터 PAC 파일에 DNS 도우미를 사용하지 마세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8250" />
            <source>Help and reference</source>
            <translation>도움말 및 참조</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8253" />
            <source>Map supplied ZIA PAC metadata to ZCC forwarding-profile actions. Matches use hosted PAC URLs or an inline PAC content fingerprint; names alone are never treated as a match.</source>
            <translation>제공된 ZIA PAC 메타데이터를 ZCC 전달 프로필 작업에 매핑합니다. 일치 항목은 호스팅된 PAC URL 또는 인라인 PAC 콘텐츠 지문을 사용합니다. 이름만으로는 결코 일치 항목으로 처리되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8256" />
            <source>ZIA PAC list JSON</source>
            <translation>ZIA PAC 목록 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8258" />
            <source>ZCC forwarding-profile list JSON</source>
            <translation>ZCC 전달 프로필 목록 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8262" />
            <source>Build PAC mappings</source>
            <translation>PAC 매핑 구축</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8263" />
            <location filename="../zscaler_api_client.py" line="8298" />
            <source>Prepare ZIA PAC list</source>
            <translation>ZIA PAC 목록 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8264" />
            <location filename="../zscaler_api_client.py" line="8290" />
            <source>Prepare ZCC profile list</source>
            <translation>ZCC 프로필 목록 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>ZCC profile</source>
            <translation>ZCC 프로필</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>Action / network</source>
            <translation>액션/네트워크</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>PAC type</source>
            <translation>PAC 유형</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>PAC reference</source>
            <translation>PAC 참조</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>ZIA status</source>
            <translation>ZIA 상태</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>Mapping result</source>
            <translation>매핑 결과</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>Profile ID</source>
            <translation>프로필 ID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8270" />
            <location filename="../zscaler_api_client.py" line="8379" />
            <source>PAC mappings</source>
            <translation>PAC 매핑</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8273" />
            <source>Search the bundled Zscaler Configuration Center index of Cloud Enforcement Node ranges, proxy/VPN hostnames, GRE and extranet virtual IP addresses. The PAC editor shows a help balloon when a line references an indexed endpoint.</source>
            <translation>Cloud Enforcement Node 범위, 프록시/VPN 호스트 이름, GRE 및 엑스트라넷 가상 IP 주소의 번들 Zscaler Configuration Center 색인을 검색하세요. PAC 편집기는 라인이 색인화된 끝점을 참조할 때 도움말 풍선을 표시합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8277" />
            <source>Search city, CIDR, hostname, GRE or VPN address</source>
            <translation>도시, CIDR, 호스트 이름, GRE 또는 VPN 주소 검색</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8278" />
            <source>Search data centers</source>
            <translation>데이터 센터 검색</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Continent</source>
            <translation>대륙</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Data center</source>
            <translation>데이터 센터</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>CIDR range</source>
            <translation>CIDR 범위</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Proxy hostname</source>
            <translation>프록시 호스트 이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>VPN hostname</source>
            <translation>VPN 호스트 이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>GRE VIP</source>
            <translation>GRE VIP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Extranet VIP</source>
            <translation>엑스트라넷 VIP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8281" />
            <source>Coordinates</source>
            <translation>좌표</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8284" />
            <source>Zscaler data centers</source>
            <translation>Zscaler 데이터 센터</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8287" />
            <source>Paste a forwarding profile returned by ZCC, or first prepare the profile-list request. Existing profile fields are preserved when PAC fields are updated.</source>
            <translation>ZCC에서 반환된 전달 프로필을 붙여넣거나 먼저 프로필 목록 요청을 준비하세요. PAC 필드가 업데이트되면 기존 프로필 필드가 유지됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8291" />
            <source>Prepare ZCC update</source>
            <translation>ZCC 업데이트 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8293" />
            <source>ZCC / Mobile Portal</source>
            <translation>ZCC / 모바일 포털</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8296" />
            <source>Prepare ZIA validation</source>
            <translation>ZIA 검증 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8297" />
            <source>Prepare ZIA hosted PAC upload</source>
            <translation>ZIA 호스팅 PAC 업로드 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8299" />
            <source>Prepare ZIA version action</source>
            <translation>ZIA 버전 작업 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8300" />
            <source>Close</source>
            <translation>닫기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8319" />
            <source>Guided mode creates a minimal, reviewable PAC. Switch to Advanced to edit JavaScript, update ZCC profiles, or prepare ZIA lifecycle actions.</source>
            <translation>안내 모드는 최소한의 검토 가능한 PAC를 생성합니다. JavaScript를 편집하거나, ZCC 프로필을 업데이트하거나, ZIA 수명 주기 작업을 준비하려면 고급으로 전환하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8320" />
            <source>Advanced mode exposes the PAC editor, ZCC profile patching, and ZIA version lifecycle actions. Every write remains explicit.</source>
            <translation>고급 모드에서는 PAC 편집기, ZCC 프로필 패치 및 ZIA 버전 수명 주기 작업을 노출합니다. 모든 쓰기는 명시적으로 유지됩니다.</translation>
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
            <translation>가이드 PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8371" />
            <source>Guided PAC created. Review the verification findings, test a URL, then prepare ZIA validation.</source>
            <translation>가이드 PAC가 생성되었습니다. 검증 결과를 검토하고 URL을 테스트한 후 ZIA 검증을 준비하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8379" />
            <source>Both mapping inputs must be valid JSON: </source>
            <translation>두 매핑 입력 모두 유효한 JSON이어야 합니다. </translation>
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
            <translation>PAC 변수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8418" />
            <source>Variables must be valid JSON: </source>
            <translation>변수는 유효한 JSON이어야 합니다. </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8420" />
            <source>Variables must be a JSON object with text or numeric values.</source>
            <translation>변수는 텍스트 또는 숫자 값이 포함된 JSON 개체여야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8429" />
            <source>none</source>
            <translation>없음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8430" />
            <source>Detected variables: </source>
            <translation>감지된 변수: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8434" />
            <source>Improvement tips:</source>
            <translation>개선 팁:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8446" />
            <source>Variables applied.</source>
            <translation>변수가 적용되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8446" />
            <source>Variables applied; missing values were retained: </source>
            <translation>변수가 적용되었습니다. 누락된 값이 유지되었습니다. </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8451" />
            <source>Preview</source>
            <translation>미리보기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8466" />
            <source>PAC draft saved locally.</source>
            <translation>PAC 초안이 로컬에 저장되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8469" />
            <location filename="../zscaler_api_client.py" line="8474" />
            <source>Load PAC</source>
            <translation>PAC 로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8477" />
            <location filename="../zscaler_api_client.py" line="8482" />
            <source>Save PAC</source>
            <translation>PAC 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8490" />
            <source>PAC request prepared</source>
            <translation>PAC 요청 준비됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8490" />
            <source>The request was placed in the main editor. Review it and explicitly select Send Request; no deployment action has been performed.</source>
            <translation>요청이 메인 편집기에 배치되었습니다. 이를 검토하고 요청 보내기를 명시적으로 선택하십시오. 배포 작업이 수행되지 않았습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8495" />
            <source>PAC verification</source>
            <translation>PAC 검증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8495" />
            <source>Resolve PAC errors before preparing an API write.</source>
            <translation>API 쓰기를 준비하기 전에 PAC 오류를 해결하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8511" />
            <source>ZIA PAC lifecycle</source>
            <translation>ZIA PAC 수명주기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8511" />
            <source>Enter a numeric PAC ID and version before preparing a lifecycle action.</source>
            <translation>수명 주기 작업을 준비하기 전에 숫자로 된 PAC ID와 버전을 입력하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8525" />
            <location filename="../zscaler_api_client.py" line="8527" />
            <source>ZCC forwarding profile</source>
            <translation>ZCC 전달 프로필</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8525" />
            <source>Profile must be valid JSON: </source>
            <translation>프로필은 유효한 JSON이어야 합니다. </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8527" />
            <source>Paste one ZCC forwarding profile object with its id before preparing an update.</source>
            <translation>업데이트를 준비하기 전에 하나의 ZCC 전달 프로필 객체를 해당 ID와 함께 붙여넣으세요.</translation>
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
            <translation>응답 드리프트 비교</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6086" />
            <source>Compare the active masked response with a local ZS API Exchange baseline. Matching records are aligned by id, UUID, resourceId, key, or name. No API request is sent.</source>
            <translation>활성 마스킹된 응답을 로컬 ZS API Exchange 기준과 비교합니다. 일치하는 레코드는 ID, UUID, ResourceId, 키 또는 이름을 기준으로 정렬됩니다. API 요청이 전송되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6089" />
            <source>Baseline:</source>
            <translation>기준:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6090" />
            <source>Choose a masked response exchange file</source>
            <translation>마스크된 응답 교환 파일 선택</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6091" />
            <source>Open baseline…</source>
            <translation>기준선 열기…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6094" />
            <source>Ignore volatile fields:</source>
            <translation>휘발성 필드를 무시합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6096" />
            <source>Comma-separated field names ignored at every JSON depth. Secrets are always masked independently.</source>
            <translation>모든 JSON 깊이에서 쉼표로 구분된 필드 이름이 무시됩니다. 비밀은 항상 독립적으로 마스킹됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6097" />
            <source>Compare responses</source>
            <translation>응답 비교</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6099" />
            <source>Open a baseline to calculate drift.</source>
            <translation>드리프트를 계산하려면 기준선을 엽니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Impact</source>
            <translation>영향</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Change</source>
            <translation>변경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>JSON path</source>
            <translation>JSON 경로</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Identity</source>
            <translation>아이덴티티</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Baseline value</source>
            <translation>기준값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6102" />
            <source>Current value</source>
            <translation>현재 가치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6106" />
            <source>Export masked drift…</source>
            <translation>마스킹된 드리프트 내보내기…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6107" />
            <source>Close</source>
            <translation>닫기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6116" />
            <location filename="../zscaler_api_client.py" line="6121" />
            <source>Open response baseline</source>
            <translation>개방형 응답 기준</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6144" />
            <source>Open a baseline response exchange first.</source>
            <translation>먼저 기본 응답 교환을 엽니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6151" />
            <source>No drift found in the compared scope.</source>
            <translation>비교된 범위에서 드리프트가 발견되지 않았습니다.</translation>
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
            <translation>추가됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6158" />
            <source>Removed</source>
            <translation>삭제됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6158" />
            <source>Changed</source>
            <translation>변경됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6158" />
            <source>High impact</source>
            <translation>높은 영향</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6174" />
            <source>Export masked drift</source>
            <translation>마스킹된 드리프트 내보내기</translation>
        </message>
    </context>
    <context>
        <name>SettingsDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4639" />
            <source>Settings</source>
            <translation>설정</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4645" />
            <source>Basic</source>
            <translation>기본</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4648" />
            <source>Interface mode:</source>
            <translation>인터페이스 모드:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4665" />
            <source>ZIA (Zscaler Internet Access)</source>
            <translation>ZIA(Zscaler 인터넷 액세스)</translation>
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
            <translation>활성화됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4699" />
            <source>ZPA (Zscaler Private Access)</source>
            <translation>ZPA(Zscaler 개인 액세스)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4731" />
            <source>ZDX (Zscaler Digital Experience)</source>
            <translation>ZDX(Zscaler 디지털 경험)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4765" />
            <source>ZCC (Client Connector)</source>
            <translation>ZCC(클라이언트 커넥터)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4793" />
            <source>OneAPI (Unified v3 Framework)</source>
            <translation>OneAPI(통합 v3 프레임워크)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4830" />
            <source>ZIdentity (Identity &amp; Access)</source>
            <translation>ZIdentity(ID 및 액세스)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4857" />
            <source>ZTW (Zero Trust Workloads)</source>
            <translation>ZTW(제로 트러스트 워크로드)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4884" />
            <source>ZWA (Workflow Automation)</source>
            <translation>ZWA(워크플로우 자동화)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4911" />
            <source>EASM (Attack Surface Management)</source>
            <translation>EASM(공격 표면 관리)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4943" />
            <location filename="../zscaler_api_client.py" line="5221" />
            <source>Credentials</source>
            <translation>자격 증명</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4950" />
            <source>Network</source>
            <translation>네트워크</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4958" />
            <source>Request Timeout (seconds):</source>
            <translation>요청 시간 초과(초):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4966" />
            <location filename="../zscaler_api_client.py" line="4982" />
            <location filename="../zscaler_api_client.py" line="5030" />
            <location filename="../zscaler_api_client.py" line="5036" />
            <location filename="../zscaler_api_client.py" line="5054" />
            <location filename="../zscaler_api_client.py" line="5078" />
            <source>Disabled</source>
            <translation>장애인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4983" />
            <source>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</source>
            <translation>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4988" />
            <source>SSL Verification:</source>
            <translation>SSL 확인:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4993" />
            <source>Proxy</source>
            <translation>프록시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4999" />
            <source>No Proxy</source>
            <translation>프록시 없음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4999" />
            <source>System Proxy</source>
            <translation>시스템 프록시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4999" />
            <source>Manual</source>
            <translation>매뉴얼</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5001" />
            <source>Proxy Mode:</source>
            <translation>프록시 모드:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5005" />
            <source>Proxy Host:</source>
            <translation>프록시 호스트:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5010" />
            <source>Proxy Port:</source>
            <translation>프록시 포트:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5013" />
            <location filename="../zscaler_api_client.py" line="5018" />
            <source>Optional</source>
            <translation>선택사항</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5014" />
            <source>Proxy Username:</source>
            <translation>프록시 사용자 이름:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5019" />
            <source>Proxy Password:</source>
            <translation>프록시 비밀번호:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5024" />
            <source>Behavior</source>
            <translation>행동</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5031" />
            <source>Auto-authenticate on startup:</source>
            <translation>시작 시 자동 인증:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5037" />
            <source>Save request history:</source>
            <translation>요청 기록 저장:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5043" />
            <source>History limit:</source>
            <translation>기록 한도:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5049" />
            <source>Default API:</source>
            <translation>기본 API:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5055" />
            <source>Check for updates on startup:</source>
            <translation>시작 시 업데이트를 확인하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4646" />
            <location filename="../zscaler_api_client.py" line="5060" />
            <source>Advanced</source>
            <translation>고급</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4755" />
            <source>API version:</source>
            <translation>API 버전:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4963" />
            <source>Maximum upload/download (MB):</source>
            <translation>최대 업로드/다운로드(MB):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4967" />
            <source>Retry only GET, HEAD, and OPTIONS after transient network errors or HTTP 408, 429, 502, 503, and 504. Write requests are never retried automatically.</source>
            <translation>일시적인 네트워크 오류 또는 HTTP 408, 429, 502, 503 및 504 후에는 GET, HEAD 및 OPTIONS만 다시 시도하십시오. 쓰기 요청은 자동으로 다시 시도되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4968" />
            <source>Retry safe reads:</source>
            <translation>안전 읽기 재시도:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4972" />
            <source>Maximum read retries:</source>
            <translation>최대 읽기 재시도 횟수:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4976" />
            <source>Maximum seconds to honor from Retry-After; shorter exponential backoff is used when the server omits it.</source>
            <translation>Retry-After에서 적용되는 최대 시간(초)입니다. 서버가 이를 생략하는 경우 더 짧은 지수 백오프가 사용됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4977" />
            <source>Maximum retry wait (seconds):</source>
            <translation>최대 재시도 대기 시간(초):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5066" />
            <source>Response Display</source>
            <translation>응답 표시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5073" />
            <source>JSON Indentation:</source>
            <translation>JSON 들여쓰기:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5079" />
            <source>Word Wrap:</source>
            <translation>단어 줄 바꿈:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5085" />
            <source>Font Size:</source>
            <translation>글꼴 크기:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5090" />
            <source>Light</source>
            <translation>빛</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5090" />
            <source>Dark</source>
            <translation>어둠</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5090" />
            <source>System</source>
            <translation>시스템</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5091" />
            <source>Theme:</source>
            <translation>테마:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5096" />
            <source>Display</source>
            <translation>디스플레이</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5101" />
            <location filename="../zscaler_api_client.py" line="5136" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <location filename="../zscaler_api_client.py" line="5221" />
            <source>Privacy</source>
            <translation>개인정보 보호</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5104" />
            <source>Secrets only (identifiers visible)</source>
            <translation>비밀만(식별자 표시)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5105" />
            <source>Obfuscate exports and external integrations (recommended)</source>
            <translation>난독화 내보내기 및 외부 통합(권장)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5106" />
            <source>Obfuscate exports, integrations, and on-screen data</source>
            <translation>내보내기, 통합 및 화면 데이터를 난독화합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5108" />
            <source>Identifier obfuscation:</source>
            <translation>식별자 난독화:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5109" />
            <source>Credentials and authentication material are always masked. Identifier pseudonyms are stable until the local pseudonym key is rotated; no original-to-pseudonym mapping is stored.</source>
            <translation>자격 증명 및 인증 자료는 항상 마스크됩니다. 식별자 가명은 로컬 가명 키가 교체될 때까지 안정적입니다. 원본-가명 매핑은 저장되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5111" />
            <source>Usernames, display names, and email addresses</source>
            <translation>사용자 이름, 표시 이름, 이메일 주소</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5112" />
            <source>IPv4 and IPv6 addresses</source>
            <translation>IPv4 및 IPv6 주소</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5113" />
            <source>Hostnames, domains, and URL hosts</source>
            <translation>호스트 이름, 도메인 및 URL 호스트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5114" />
            <source>Tenant, customer, organization, and environment names</source>
            <translation>테넌트, 고객, 조직 및 환경 이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5115" />
            <source>Object IDs, UUIDs, GUIDs, and client identifiers</source>
            <translation>개체 ID, UUID, GUID 및 클라이언트 식별자</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5116" />
            <source>Policy, application, group, location, and resource names</source>
            <translation>정책, 애플리케이션, 그룹, 위치 및 리소스 이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5123" />
            <source>Rotate local pseudonym key</source>
            <translation>로컬 가명 키 순환</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5124" />
            <source>Creates new pseudonyms for future views and exports. Existing files are not modified.</source>
            <translation>향후 보기 및 내보내기를 위해 새로운 가명을 만듭니다. 기존 파일은 수정되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5127" />
            <location filename="../zscaler_api_client.py" line="5252" />
            <location filename="../zscaler_api_client.py" line="5258" />
            <source>Rotate evidence signing key</source>
            <translation>증거 서명 키 순환</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5128" />
            <source>Creates a new Ed25519 key in the system keychain. Existing signed packages remain verifiable with their embedded public keys.</source>
            <translation>시스템 키체인에 새로운 Ed25519 키를 생성합니다. 기존의 서명된 패키지는 내장된 공개 키를 통해 계속해서 검증될 수 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5131" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <source>Obfuscation preview</source>
            <translation>난독화 미리보기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5133" />
            <source>Preview of exported or externally shared data using synthetic examples:</source>
            <translation>합성 예제를 사용하여 내보냈거나 외부에 공유된 데이터 미리보기:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5141" />
            <location filename="../zscaler_api_client.py" line="5183" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <location filename="../zscaler_api_client.py" line="5221" />
            <source>Language</source>
            <translation>언어</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5144" />
            <source>System default</source>
            <translation>시스템 기본값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5147" />
            <source>Application language:</source>
            <translation>응용 언어:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5148" />
            <source>System default follows your operating system language. Restart after saving to apply a change.</source>
            <translation>시스템 기본값은 운영 체제 언어를 따릅니다. 변경 사항을 적용하려면 저장 후 다시 시작하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5151" />
            <location filename="../zscaler_api_client.py" line="5216" />
            <source>AI / LLM</source>
            <translation>AI / LLM</translation>
        </message>
        <message>
            <source>Local catalog assistant</source>
            <translation type="vanished">지역 카탈로그 도우미</translation>
        </message>
        <message>
            <source>OpenAI-compatible cloud</source>
            <translation type="vanished">OpenAI 호환 클라우드</translation>
        </message>
        <message>
            <source>Local OpenAI-compatible server</source>
            <translation type="vanished">로컬 OpenAI 호환 서버</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5157" />
            <source>AI provider:</source>
            <translation>AI 제공업체:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5160" />
            <source>AI endpoint:</source>
            <translation>AI 엔드포인트:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5162" />
            <source>Select a provider to prefill a recommended model</source>
            <translation>Select a provider to prefill a recommended model</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5163" />
            <source>Model:</source>
            <translation>모델:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5166" />
            <source>Stored securely in your system keychain</source>
            <translation>시스템 키체인에 안전하게 저장됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5167" />
            <source>API key:</source>
            <translation>API 키:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5168" />
            <source>Allow this app to send the masked question and catalog metadata to an external AI service</source>
            <translation>이 앱이 마스킹된 질문과 카탈로그 메타데이터를 외부 AI 서비스로 보내도록 허용합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5171" />
            <source>Clear AI key</source>
            <translation>AI 키 지우기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5174" />
            <source>Test AI connection</source>
            <translation>AI 연결 테스트</translation>
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
            <translation>가명 키 순환</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5241" />
            <source>Rotate the local pseudonym key? Future pseudonyms will change and will no longer correlate with previous exports.</source>
            <translation>로컬 가명 키를 순환하시겠습니까? 향후 가명은 변경되며 더 이상 이전 내보내기와 연관되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5249" />
            <source>The local pseudonym key was rotated. No credentials or source identifiers were stored.</source>
            <translation>로컬 가명 키가 순환되었습니다. 자격 증명이나 소스 식별자가 저장되지 않았습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5252" />
            <source>Create a new local evidence signing identity? Existing signed packages remain verifiable, but future packages will have a different public-key fingerprint.</source>
            <translation>새로운 로컬 증거 서명 ID를 만드시겠습니까? 기존의 서명된 패키지는 계속 검증 가능하지만 향후 패키지는 다른 공개 키 지문을 갖게 됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5255" />
            <source>Signed evidence</source>
            <translation>서명된 증거</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5255" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>시스템 키체인이 증거 서명 키를 저장할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5258" />
            <source>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</source>
            <translation>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5264" />
            <source>Restore Defaults</source>
            <translation>기본값 복원</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5265" />
            <source>This will reset all advanced settings to defaults. Continue?</source>
            <translation>그러면 모든 고급 설정이 기본값으로 재설정됩니다. 계속하다?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5387" />
            <source>Configured securely in your system keychain</source>
            <translation>시스템 키체인에 안전하게 구성됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5394" />
            <source>AI key cleared</source>
            <translation>AI 키가 삭제되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5410" />
            <location filename="../zscaler_api_client.py" line="5413" />
            <location filename="../zscaler_api_client.py" line="5424" />
            <location filename="../zscaler_api_client.py" line="5425" />
            <source>AI connection</source>
            <translation>AI 연결</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5410" />
            <source>Local catalog assistant is ready.</source>
            <translation>지역 카탈로그 도우미가 준비되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5413" />
            <source>Enter an AI endpoint first.</source>
            <translation>먼저 AI 엔드포인트를 입력하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5422" />
            <source>AI connection succeeded.</source>
            <translation>AI 연결에 성공했습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5425" />
            <source>AI connection failed: {error}</source>
            <translation>AI connection failed: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5439" />
            <source>ZIA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZIA Cloud: URL 접두사 제거(호스트 이름만 필요함)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5446" />
            <source>ZPA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZPA Cloud: URL 접두사 제거됨(호스트 이름만 필요함)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5452" />
            <source>{product} Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>{product} Cloud: Removed URL prefix (only hostname needed)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5457" />
            <source>ZPA: Customer ID is empty — required for most ZPA endpoints</source>
            <translation>ZPA: 고객 ID가 비어 있습니다. 대부분의 ZPA 엔드포인트에 필요합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5459" />
            <source>ZPA: Customer ID should be numeric (got '{value}')</source>
            <translation>ZPA: Customer ID should be numeric (got '{value}')</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5467" />
            <source>OneAPI: Removed URL prefix from vanity domain</source>
            <translation>OneAPI: 베니티 도메인에서 URL 접두사 제거</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5471" />
            <source>OneAPI: Removed .zslogin.net suffix — only the prefix is needed (e.g. 'acme')</source>
            <translation>OneAPI: .zslogin.net 접미사 제거 — 접두사만 필요합니다(예: 'acme')</translation>
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
            <translation>ZIdentity: 도메인에서 URL 접두사 제거됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5499" />
            <source>ZIA is enabled but Cloud is empty</source>
            <translation>ZIA가 활성화되었지만 클라우드가 비어 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5501" />
            <source>ZCC is enabled but Cloud host is empty</source>
            <translation>ZCC가 활성화되었지만 클라우드 호스트가 비어 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5503" />
            <source>OneAPI is enabled but Vanity Domain is empty</source>
            <translation>OneAPI가 활성화되었지만 가상 도메인이 비어 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5505" />
            <source>OneAPI is enabled but Client ID is empty</source>
            <translation>OneAPI가 활성화되었지만 클라이언트 ID가 비어 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5520" />
            <source>Settings Validation</source>
            <translation>설정 검증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5521" />
            <source>Some settings were adjusted or may need attention:</source>
            <translation>일부 설정이 조정되었거나 주의가 필요할 수 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5525" />
            <source>Save Anyway</source>
            <translation>어쨌든 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5526" />
            <source>Go Back</source>
            <translation>돌아가기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5551" />
            <source>Secure storage</source>
            <translation>안전한 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5551" />
            <source>The system keychain could not save one or more secrets. No secret changes were applied.</source>
            <translation>시스템 키체인은 하나 이상의 비밀을 저장할 수 없습니다. 비밀 변경 사항이 적용되지 않았습니다.</translation>
        </message>
    </context>
    <context>
        <name>SetupWizard</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4185" />
            <source>Getting Started Wizard</source>
            <translation>시작하기 마법사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4204" />
            <source>Back</source>
            <translation>뒤로</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4208" />
            <source>Open full settings</source>
            <translation>전체 설정 열기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4211" />
            <location filename="../zscaler_api_client.py" line="4334" />
            <source>Continue</source>
            <translation>계속</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4222" />
            <source>Abstract zero trust security network</source>
            <translation>추상 제로 트러스트 보안 네트워크</translation>
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
            <translation>기본</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4236" />
            <source>Advanced</source>
            <translation>고급</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4238" />
            <source>Setup mode:</source>
            <translation>설정 모드:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4246" />
            <source>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4247" />
            <source>Create an API client with the required roles in ZIdentity, then enter its details below.</source>
            <translation>ZIdentity에서 필요한 역할을 사용하여 API 클라이언트를 생성한 후 아래에 세부 정보를 입력하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4253" />
            <source>Vanity domain</source>
            <translation>허영 도메인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4255" />
            <source>Client ID</source>
            <translation>클라이언트 ID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4258" />
            <source>Client secret</source>
            <translation>클라이언트 비밀번호</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4260" />
            <source>Leave empty for production; use beta or alpha when applicable</source>
            <translation>생산을 위해 비워 두십시오. 해당되는 경우 베타 또는 알파를 사용하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4261" />
            <source>Cloud</source>
            <translation>클라우드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4263" />
            <source>Optional; required for many ZPA requests</source>
            <translation>선택사항; 많은 ZPA 요청에 필요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4264" />
            <source>ZPA customer ID</source>
            <translation>ZPA 고객 ID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4294" />
            <source>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4295" />
            <source>Choose a common operation. The wizard will load it into the request builder with required path variables highlighted.</source>
            <translation>일반적인 작업을 선택합니다. 마법사는 필수 경로 변수가 강조 표시된 요청 빌더에 이를 로드합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4353" />
            <source>Secure storage</source>
            <translation>안전한 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4353" />
            <source>The system keychain could not save the secret. Check the keychain service and try again.</source>
            <translation>시스템 키체인이 비밀을 저장할 수 없습니다. 키체인 서비스를 확인하고 다시 시도하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4285" />
            <location filename="../zscaler_api_client.py" line="4299" />
            <source>Just explore the API catalog</source>
            <translation>API 카탈로그를 살펴보세요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4166" />
            <source>ZIA · List users</source>
            <translation>ZIA · 사용자 목록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4167" />
            <source>ZIA · List URL categories</source>
            <translation>ZIA · URL 카테고리 목록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4168" />
            <source>ZIA · Check activation status</source>
            <translation>ZIA · 활성화 상태 확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4169" />
            <source>ZIA · List cloud firewall policies</source>
            <translation>ZIA · 클라우드 방화벽 정책 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4170" />
            <source>ZPA · List application segments</source>
            <translation>ZPA · 애플리케이션 세그먼트 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4171" />
            <source>ZPA · List segment groups</source>
            <translation>ZPA · 목록 세그먼트 그룹</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4172" />
            <source>ZPA · List connectors</source>
            <translation>ZPA · 목록 커넥터</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4173" />
            <source>ZDX · List devices and experience scores</source>
            <translation>ZDX · 장치 및 경험 점수 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4174" />
            <source>ZDX · List active alerts</source>
            <translation>ZDX · 활성 경고 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4175" />
            <source>ZDX · List monitored applications</source>
            <translation>ZDX · 모니터링되는 응용 프로그램 목록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4176" />
            <source>Client Connector · List devices</source>
            <translation>클라이언트 커넥터 · 장치 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4177" />
            <source>ZIdentity · List users</source>
            <translation>ZIdentity · 사용자 목록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4178" />
            <source>ZIdentity · List groups</source>
            <translation>ZIdentity · 목록 그룹</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4179" />
            <source>AI Security · List workloads</source>
            <translation>AI 보안 · 워크로드 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4303" />
            <source>Authenticate immediately after finishing</source>
            <translation>완료 후 바로 인증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4312" />
            <source>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4314" />
            <source>The API Explorer contains the complete bundled catalog. Use the Documentation tab for endpoint details, the Console tab for request activity, and Request History to replay safe, redacted requests.</source>
            <translation>API 탐색기에는 전체 번들 카탈로그가 포함되어 있습니다. 끝점 세부 정보를 보려면 문서 탭을 사용하고, 요청 활동을 보려면 콘솔 탭을 사용하고, 안전하고 수정된 요청을 재생하려면 요청 기록을 사용하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4332" />
            <source>Step {current} of {total}</source>
            <translation>Step {current} of {total}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4334" />
            <source>Finish</source>
            <translation>마침</translation>
        </message>
    </context>
    <context>
        <name>SocEntityGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Identity</source>
            <translation>아이덴티티</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Address</source>
            <translation>주소</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Device</source>
            <translation>장치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Application</source>
            <translation>신청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Policy</source>
            <translation>정책</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Service</source>
            <translation>서비스</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Endpoint</source>
            <translation>엔드포인트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Infrastructure</source>
            <translation>인프라</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Indicator</source>
            <translation>표시기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Activity</source>
            <translation>활동</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Environment</source>
            <translation>환경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3929" />
            <source>Resource</source>
            <translation>자원</translation>
        </message>
    </context>
    <context>
        <name>SplashScreen</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4408" />
            <source>Loading...</source>
            <translation>로드 중...</translation>
        </message>
    </context>
    <context>
        <name>WelcomeDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4010" />
            <source>Welcome to ZS API Client</source>
            <translation>ZS API 클라이언트에 오신 것을 환영합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4022" />
            <source>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</source>
            <translation>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4035" />
            <source>Supported APIs</source>
            <translation>지원되는 API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4038" />
            <source>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</source>
            <translation>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4054" />
            <source>Getting Started</source>
            <translation>시작하기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4057" />
            <source>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</source>
            <translation>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4070" />
            <source>Tips for Advanced Users</source>
            <translation>고급 사용자를 위한 팁</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4073" />
            <source>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4087" />
            <source>Documentation</source>
            <translation>문서</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4108" />
            <source>Show this dialog on startup</source>
            <translation>시작 시 이 대화 상자 표시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4116" />
            <source>Open Settings</source>
            <translation>설정 열기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4120" />
            <source>Get Started</source>
            <translation>시작하기</translation>
        </message>
    </context>
    <context>
        <name>owner</name>
        <message>
            <location filename="../zscaler_api_client.py" line="444" />
            <source>Default</source>
            <translation>기본값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="657" />
            <source>The response export is unavailable, is a symbolic link, or exceeds the configured transfer limit.</source>
            <translation>응답 내보내기를 사용할 수 없거나, 심볼릭 링크이거나, 구성된 전송 제한을 초과합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="658" />
            <source>The response export is not valid UTF-8 JSON.</source>
            <translation>응답 내보내기가 유효한 UTF-8 JSON이 아닙니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="659" />
            <source>This is not a supported ZS API response exchange file.</source>
            <translation>이는 지원되는 ZS API 응답 교환 파일이 아닙니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="660" />
            <source>The response exchange file is incomplete.</source>
            <translation>응답 교환 파일이 불완전합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="662" />
            <source>The response exchange file could not be opened.</source>
            <translation>응답 교환 파일을 열 수 없습니다.</translation>
        </message>
    </context>
    <context>
        <name>window</name>
        <message>
            <location filename="../zscaler_api_client.py" line="12246" />
            <source>Automatic Update Check</source>
            <translation>자동 업데이트 확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12248" />
            <source>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</source>
            <translation>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</translation>
        </message>
    </context>
</TS>