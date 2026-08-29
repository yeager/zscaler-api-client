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
            <location filename="../zscaler_api_client.py" line="4443" />
            <source>About ZS API Client</source>
            <translation>ZS API 클라이언트 정보</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4469" />
            <source>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</source>
            <translation>&lt;p&gt;A Postman-like desktop application for exploring and testing Zscaler APIs (ZIA and ZPA).&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4502" />
            <source>Disclaimer</source>
            <translation>면책조항</translation>
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
            <translation>일괄 작업</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5736" />
            <source>Import a CSV file to perform batch operations. The CSV should have columns matching the API parameters.</source>
            <translation>일괄 작업을 수행하려면 CSV 파일을 가져오세요. CSV에는 API 매개변수와 일치하는 열이 있어야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5745" />
            <source>Select CSV file...</source>
            <translation>CSV 파일 선택...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5748" />
            <source>Browse...</source>
            <translation>찾아보기...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5760" />
            <source>Operation:</source>
            <translation>작동:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5764" />
            <source>Create Users (ZIA)</source>
            <translation>사용자 생성(ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5765" />
            <source>Update Users (ZIA)</source>
            <translation>사용자 업데이트(ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5766" />
            <source>Delete Users (ZIA)</source>
            <translation>사용자 삭제(ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5767" />
            <source>Create Locations (ZIA)</source>
            <translation>위치 생성(ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5768" />
            <source>URL Lookup (ZIA)</source>
            <translation>URL 조회(ZIA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5769" />
            <source>Create App Segments (ZPA)</source>
            <translation>앱 세그먼트 생성(ZPA)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5795" />
            <source>Select CSV File</source>
            <translation>CSV 파일 선택</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5825" />
            <source>Error</source>
            <translation>오류</translation>
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
            <translation>새로운 소식</translation>
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
            <translation>향후 업데이트 후에는 표시하지 않음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4597" />
            <source>*Changelog not found*</source>
            <translation>*변경 로그를 찾을 수 없음*</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4618" />
            <source>*Could not load changelog: {error}*</source>
            <translation>*Could not load changelog: {error}*</translation>
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
            <translation>환경 프로필</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5974" />
            <source>Each environment keeps separate tenant hosts, client identifiers, enabled products, and keychain credentials. Creating a profile copies only non-secret configuration. Activating a profile clears every in-memory API session.</source>
            <translation>각 환경은 별도의 테넌트 호스트, 클라이언트 식별자, 활성화된 제품 및 키체인 자격 증명을 유지합니다. 프로필을 생성하면 비밀이 아닌 구성만 복사됩니다. 프로필을 활성화하면 모든 메모리 내 API 세션이 지워집니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5975" />
            <source>Active</source>
            <translation>활성</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5975" />
            <source>Name</source>
            <translation>이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5975" />
            <source>Default API</source>
            <translation>기본 API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5975" />
            <source>Configured host</source>
            <translation>구성된 호스트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5975" />
            <source>Keychain secrets</source>
            <translation>키체인 비밀</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5978" />
            <location filename="../zscaler_api_client.py" line="6011" />
            <source>Create profile</source>
            <translation>프로필 만들기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5979" />
            <location filename="../zscaler_api_client.py" line="6023" />
            <source>Rename profile</source>
            <translation>프로필 이름 바꾸기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5980" />
            <location filename="../zscaler_api_client.py" line="6034" />
            <location filename="../zscaler_api_client.py" line="6035" />
            <source>Delete profile</source>
            <translation>프로필 삭제</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5981" />
            <source>Activate profile</source>
            <translation>프로필 활성화</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5982" />
            <source>Close</source>
            <translation>닫기</translation>
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
            <translation>프로필 이름:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6015" />
            <location filename="../zscaler_api_client.py" line="6026" />
            <source>Enter a unique profile name without path separators (maximum 60 characters).</source>
            <translation>경로 구분 기호 없이 고유한 프로필 이름을 입력하세요(최대 60자).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6018" />
            <source>The profile was created with non-secret settings only. Open Settings after activation to add its keychain credentials.</source>
            <translation>프로필이 비밀이 아닌 설정으로만 생성되었습니다. 활성화 후 설정을 열어 키체인 자격 증명을 추가하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6034" />
            <source>The default or active profile cannot be deleted. Activate another profile first.</source>
            <translation>기본 또는 활성 프로필은 삭제할 수 없습니다. 먼저 다른 프로필을 활성화하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6035" />
            <source>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</source>
            <translation>Delete profile “{name}” and all of its keychain credentials? This cannot be undone.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6037" />
            <source>Secure storage</source>
            <translation>안전한 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6037" />
            <source>The profile could not be deleted because its keychain credentials could not be removed.</source>
            <translation>키체인 자격 증명을 제거할 수 없기 때문에 프로필을 삭제할 수 없습니다.</translation>
        </message>
    </context>
    <context>
        <name>ErrorCodesDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5666" />
            <source>API Error Codes Reference</source>
            <translation>API 오류 코드 참조</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5672" />
            <source>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;🔴 Zscaler API Error Codes&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5675" />
            <source>Common error codes and their meanings for each API.</source>
            <translation>각 API에 대한 일반적인 오류 코드 및 의미.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5688" />
            <source>Code</source>
            <translation>코드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5688" />
            <source>Name</source>
            <translation>이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5688" />
            <source>Description</source>
            <translation>설명</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5708" />
            <source>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;p&gt;&lt;b&gt;💡 Tips:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;401/403:&lt;/b&gt; Re-authenticate using the Auth button&lt;/li&gt;&lt;li&gt;&lt;b&gt;429:&lt;/b&gt; Wait 60 seconds before retrying&lt;/li&gt;&lt;li&gt;&lt;b&gt;500:&lt;/b&gt; Check Zscaler status page for outages&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5719" />
            <source>Close</source>
            <translation>닫기</translation>
        </message>
    </context>
    <context>
        <name>ExperienceJourneyGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3969" />
            <source>No journey telemetry in the current response</source>
            <translation>현재 응답에는 여정 원격 분석이 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3988" />
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
            <location filename="../zscaler_api_client.py" line="3800" />
            <source>Value</source>
            <translation>가치</translation>
        </message>
    </context>
    <context>
        <name>HistoryDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="5846" />
            <source>Request History</source>
            <translation>요청 내역</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5855" />
            <source>Search:</source>
            <translation>검색:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5857" />
            <source>Filter by URL or method...</source>
            <translation>URL 또는 방법으로 필터링...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5862" />
            <source>Current environment: {name}</source>
            <translation>Current environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5863" />
            <source>All environments</source>
            <translation>모든 환경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5867" />
            <location filename="../zscaler_api_client.py" line="5944" />
            <source>Clear History</source>
            <translation>기록 지우기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5876" />
            <source>Time</source>
            <translation>시간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5876" />
            <source>Method</source>
            <translation>방법</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5876" />
            <source>URL</source>
            <translation>URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5876" />
            <source>Environment</source>
            <translation>환경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5877" />
            <source>Status</source>
            <translation>상태</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5877" />
            <source>Duration</source>
            <translation>기간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5889" />
            <source>Load Request</source>
            <translation>로드 요청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5893" />
            <source>Close</source>
            <translation>닫기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5917" />
            <source>Default</source>
            <translation>기본값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5945" />
            <source>Are you sure you want to clear all request history?</source>
            <translation>모든 요청 기록을 삭제하시겠습니까?</translation>
        </message>
    </context>
    <context>
        <name>MainWindow</name>
        <message>
            <location filename="../zscaler_api_client.py" line="8612" />
            <location filename="../zscaler_api_client.py" line="8630" />
            <source>API Explorer</source>
            <translation>API 탐색기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8633" />
            <location filename="../zscaler_api_client.py" line="9970" />
            <location filename="../zscaler_api_client.py" line="11594" />
            <source>Product</source>
            <translation>제품</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8643" />
            <source>Auth</source>
            <translation>인증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8644" />
            <source>Authenticate with selected API (Ctrl+Shift+A)</source>
            <translation>선택한 API로 인증(Ctrl+Shift+A)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8654" />
            <source>🔍 Filter endpoints...</source>
            <translation>🔍 엔드포인트 필터링...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8665" />
            <source>Endpoints</source>
            <translation>엔드포인트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8671" />
            <source>Output</source>
            <translation>출력</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8677" />
            <source>Authentication status, requests, and audit info...</source>
            <translation>인증 상태, 요청, 감사 정보...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8688" />
            <source>Request Builder</source>
            <translation>요청 작성기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8711" />
            <source>Enter URL or select endpoint...</source>
            <translation>URL을 입력하거나 엔드포인트를 선택하세요...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8715" />
            <source>Send</source>
            <translation>보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8716" />
            <source>Send request (Ctrl+Return)</source>
            <translation>요청 보내기(Ctrl+Return)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8724" />
            <source>cURL</source>
            <translation>cURL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8725" />
            <source>Copy request as cURL command (Ctrl+Shift+C)</source>
            <translation>요청을 cURL 명령으로 복사(Ctrl+Shift+C)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8731" />
            <source>GraphQL request</source>
            <translation>GraphQL 요청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8732" />
            <source>Send the request body as a GraphQL query and preserve data, errors, and extensions.</source>
            <translation>요청 본문을 GraphQL 쿼리로 보내고 데이터, 오류 및 확장을 보존합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8751" />
            <source>Saved GraphQL query name</source>
            <translation>저장된 GraphQL 쿼리 이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8755" />
            <source>Save query</source>
            <translation>쿼리 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8758" />
            <source>Load query</source>
            <translation>쿼리 로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8761" />
            <source>Rename query</source>
            <translation>쿼리 이름 바꾸기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8764" />
            <source>Delete query</source>
            <translation>쿼리 삭제</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8767" />
            <source>Introspect schema</source>
            <translation>스키마 점검</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8770" />
            <source>Load saved schema</source>
            <translation>저장된 스키마 로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8797" />
            <location filename="../zscaler_api_client.py" line="8806" />
            <source>Key</source>
            <translation>열쇠</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8797" />
            <location filename="../zscaler_api_client.py" line="8806" />
            <location filename="../zscaler_api_client.py" line="8866" />
            <location filename="../zscaler_api_client.py" line="8941" />
            <source>Value</source>
            <translation>가치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8800" />
            <source>Params</source>
            <translation>매개변수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8809" />
            <location filename="../zscaler_api_client.py" line="8934" />
            <source>Headers</source>
            <translation>헤더</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8842" />
            <location filename="../zscaler_api_client.py" line="10677" />
            <source>Request body (JSON)...</source>
            <translation>요청 본문(JSON)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8846" />
            <location filename="../zscaler_api_client.py" line="8933" />
            <source>Body</source>
            <translation>본체</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8853" />
            <location filename="../zscaler_api_client.py" line="8866" />
            <source>Variable</source>
            <translation>변수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8869" />
            <source>Path Variables</source>
            <translation>경로 변수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8891" />
            <location filename="../zscaler_api_client.py" line="10582" />
            <source>Response</source>
            <translation>응답</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8906" />
            <source>Pretty</source>
            <translation>꽤</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8909" />
            <source>Toggle pretty-print JSON (Ctrl+P)</source>
            <translation>예쁜 인쇄 JSON 전환(Ctrl+P)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8914" />
            <location filename="../zscaler_api_client.py" line="10089" />
            <location filename="../zscaler_api_client.py" line="10108" />
            <location filename="../zscaler_api_client.py" line="10113" />
            <location filename="../zscaler_api_client.py" line="10121" />
            <source>Export response</source>
            <translation>응답 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8917" />
            <source>Preview export</source>
            <translation>내보내기 미리보기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8937" />
            <source>Table</source>
            <translation>테이블</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8939" />
            <source>Chart</source>
            <translation>차트</translation>
        </message>
        <message>
            <source>JSON structure</source>
            <translation type="vanished">JSON 구조</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8943" />
            <source>Tree</source>
            <translation>나무</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8946" />
            <source>Heatmap</source>
            <translation>히트맵</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8949" />
            <source>Topology</source>
            <translation>토폴로지</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8953" />
            <source>Schema</source>
            <translation>스키마</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8958" />
            <location filename="../zscaler_api_client.py" line="9024" />
            <source>AI Assistant</source>
            <translation>AI 어시스턴트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8961" />
            <source>Ask a OneAPI question, e.g. list ZPA application segments</source>
            <translation>OneAPI 질문을 해보세요. ZPA 애플리케이션 세그먼트 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8965" />
            <source>Choose a guided AI example…</source>
            <translation>가이드형 AI 예시를 선택하세요…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8971" />
            <source>Find API request</source>
            <translation>API 요청 찾기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8974" />
            <source>Run selected request</source>
            <translation>선택한 요청 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8977" />
            <source>Export result</source>
            <translation>결과 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8981" />
            <location filename="../zscaler_api_client.py" line="11791" />
            <source>Ask in plain language. Sensitive values are masked before display or export.</source>
            <translation>쉬운 언어로 물어보세요. 민감한 값은 표시하거나 내보내기 전에 마스크됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8987" />
            <source>AI request preview appears here before execution.</source>
            <translation>실행 전에 AI 요청 미리보기가 여기에 표시됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8993" />
            <source>Bar chart</source>
            <translation>막대 차트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8994" />
            <source>Line chart</source>
            <translation>꺾은선형 차트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8995" />
            <source>Pie chart</source>
            <translation>원형 차트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9004" />
            <source>Help</source>
            <translation>도움말</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9022" />
            <source>Documentation</source>
            <translation>문서</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9023" />
            <source>Console</source>
            <translation>콘솔</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9040" />
            <source>Ready</source>
            <translation>준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9049" />
            <source>&amp;File</source>
            <translation>파일(&amp;F)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9051" />
            <source>&amp;Settings...</source>
            <translation>설정(&amp;S)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9056" />
            <source>&amp;Batch Operations...</source>
            <translation>&amp;일괄 작업...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9063" />
            <source>Request &amp;History...</source>
            <translation>요청 및 내역...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9072" />
            <source>&amp;Quit</source>
            <translation>&amp;종료</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9078" />
            <source>&amp;Edit</source>
            <translation>편집(&amp;E)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9080" />
            <source>Copy as c&amp;URL</source>
            <translation>c&amp;URL로 복사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9085" />
            <source>Copy &amp;Response</source>
            <translation>복사 및 응답</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9092" />
            <source>C&amp;lear Request</source>
            <translation>요청 지우기(&amp;L)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9097" />
            <source>&amp;Request</source>
            <translation>&amp;요청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9099" />
            <source>&amp;Send Request</source>
            <translation>&amp;요청 보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9106" />
            <source>Authenticate &amp;ZIA</source>
            <translation>&amp;ZIA 인증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9110" />
            <source>Authenticate Z&amp;PA</source>
            <translation>Z&amp;PA 인증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9116" />
            <source>&amp;Logout All Sessions</source>
            <translation>모든 세션 로그아웃(&amp;R)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9120" />
            <source>&amp;Operations</source>
            <translation>&amp;작업</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9121" />
            <source>Operations &amp;Center...</source>
            <translation>운영 및 센터...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9129" />
            <source>Environment &amp;Profiles...</source>
            <translation>환경 및 프로필...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9134" />
            <source>&amp;Language</source>
            <translation>&amp;언어</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9143" />
            <source>&amp;Help</source>
            <translation>&amp;도움말</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9145" />
            <source>&amp;Welcome Guide...</source>
            <translation>&amp;환영 가이드...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9149" />
            <source>&amp;About...</source>
            <translation>정보(&amp;A)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9154" />
            <source>About &amp;Qt...</source>
            <translation>&amp;Qt 정보...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9161" />
            <source>ZIA API &amp;Documentation</source>
            <translation>ZIA API 및 문서</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9165" />
            <source>ZPA API D&amp;ocumentation</source>
            <translation>ZPA API 문서(&amp;O)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9169" />
            <source>Zscaler API &amp;Portal</source>
            <translation>Zscaler API 및 포털</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9173" />
            <source>API &amp;Error Codes...</source>
            <translation>API 및 오류 코드...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9179" />
            <source>Check for &amp;Updates...</source>
            <translation>업데이트 확인(&amp;U)...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9249" />
            <source>{count} operations · {groups} groups</source>
            <translation>{count} operations · {groups} groups</translation>
        </message>
        <message>
            <source>Create new profile…</source>
            <translation type="vanished">새 프로필 만들기…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9607" />
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
            <translation>안내 예제가 로드되었습니다. API 요청을 찾아 미리보기를 검토한 후 실행 여부를 선택하세요.</translation>
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
            <translation>오류</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9793" />
            <source>ZIA credentials not configured. Please go to Settings.</source>
            <translation>ZIA 자격 증명이 구성되지 않았습니다. 설정으로 이동하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9822" />
            <source>ZCC credentials not configured. Please go to Settings.</source>
            <translation>ZCC 자격 증명이 구성되지 않았습니다. 설정으로 이동하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9848" />
            <source>{api_type} credentials not configured. Please go to Settings.</source>
            <translation>{api_type} credentials not configured. Please go to Settings.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9912" />
            <source>OneAPI credentials not configured. Please go to Settings.</source>
            <translation>OneAPI 자격 증명이 구성되지 않았습니다. 설정으로 이동하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9953" />
            <source>No matching API operation was found. Try product and resource names.</source>
            <translation>일치하는 API 작업을 찾을 수 없습니다. 제품 및 리소스 이름을 사용해 보세요.</translation>
        </message>
        <message>
            <source>Suggested request: {method} {name}. Review path variables before running.</source>
            <translation type="vanished">Suggested request: {method} {name}. Review path variables before running.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9970" />
            <source>Operation</source>
            <translation>작동</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9970" />
            <location filename="../zscaler_api_client.py" line="11594" />
            <source>Method</source>
            <translation>방법</translation>
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
            <translation>먼저 AI 비서에게 요청을 요청하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10007" />
            <source>Review AI request</source>
            <translation>AI 요청 검토</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10008" />
            <source>Review the URL, path variables, and parameters in the preview before sending. Send this request now?</source>
            <translation>보내기 전에 미리보기에서 URL, 경로 변수, 매개변수를 검토하세요. 지금 이 요청을 보내시겠습니까?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10031" />
            <location filename="../zscaler_api_client.py" line="10036" />
            <source>Asking configured LLM…</source>
            <translation>구성된 LLM을 요청하는 중…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10034" />
            <source>LLM unavailable; using the local catalog assistant.</source>
            <translation>LLM을 이용할 수 없습니다. 로컬 카탈로그 도우미를 사용합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10045" />
            <source>Configure an AI endpoint and model in Settings.</source>
            <translation>설정에서 AI 엔드포인트 및 모델을 구성하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10049" />
            <source>AI endpoint must use HTTP or HTTPS.</source>
            <translation>AI 엔드포인트는 HTTP 또는 HTTPS를 사용해야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10051" />
            <source>External AI is disabled. Enable it explicitly in Settings.</source>
            <translation>외부 AI가 비활성화되었습니다. 설정에서 명시적으로 활성화하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10053" />
            <source>External AI endpoints must use HTTPS.</source>
            <translation>외부 AI 엔드포인트는 HTTPS를 사용해야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10055" />
            <source>AI question is too long (maximum 2000 characters).</source>
            <translation>AI 질문이 너무 깁니다(최대 2000자).</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10077" />
            <location filename="../zscaler_api_client.py" line="10083" />
            <source>Save binary response</source>
            <translation>바이너리 응답 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10078" />
            <source>Binary content cannot be inspected or obfuscated as text. Save the original response only if you trust this endpoint and destination?</source>
            <translation>바이너리 콘텐츠는 텍스트로 검사하거나 난독화할 수 없습니다. 이 엔드포인트와 대상을 신뢰하는 경우에만 원래 응답을 저장하시겠습니까?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10083" />
            <source>All files (*)</source>
            <translation>모든 파일(*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10086" />
            <source>Original binary response saved</source>
            <translation>원본 바이너리 응답이 저장되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10135" />
            <source>Masked response exported</source>
            <translation>마스크된 응답을 내보냈습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10241" />
            <source>Binary content is not included in this preview.</source>
            <translation>이 미리보기에는 바이너리 콘텐츠가 포함되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10243" />
            <location filename="../zscaler_api_client.py" line="10249" />
            <source>Export preview</source>
            <translation>미리보기 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10244" />
            <source>Original binary export requires a separate confirmation.</source>
            <translation>원본 바이너리 내보내기에는 별도의 확인이 필요합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10250" />
            <source>Sensitive fields are masked in every export.</source>
            <translation>모든 내보내기에서는 민감한 필드가 마스킹됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10304" />
            <location filename="../zscaler_api_client.py" line="10313" />
            <location filename="../zscaler_api_client.py" line="10321" />
            <source>Export AI result</source>
            <translation>AI 결과 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10113" />
            <location filename="../zscaler_api_client.py" line="10121" />
            <location filename="../zscaler_api_client.py" line="10313" />
            <location filename="../zscaler_api_client.py" line="10321" />
            <source>No chart data is available to export.</source>
            <translation>내보낼 수 있는 차트 데이터가 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10330" />
            <source>AI result exported</source>
            <translation>AI 결과 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10589" />
            <source>No tabular datasets</source>
            <translation>테이블 형식 데이터세트 없음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10598" />
            <source>Nodes</source>
            <translation>노드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10598" />
            <source>Connections</source>
            <translation>연결</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10600" />
            <source>No nodes or connections were found in this response.</source>
            <translation>이 응답에서는 노드나 연결을 찾을 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10661" />
            <source>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</source>
            <translation>Visualized {count} records as a masked table. Export is available from the AI Assistant tab.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10678" />
            <source>Raw request body...</source>
            <translation>원시 요청 본문...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10679" />
            <source>Form fields as JSON or an encoded key=value string...</source>
            <translation>JSON 또는 인코딩된 키=값 문자열 형식의 필드...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10680" />
            <source>Optional multipart fields as a JSON object...</source>
            <translation>JSON 객체로서의 선택적 멀티파트 필드...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10686" />
            <source>Select upload file</source>
            <translation>업로드 파일 선택</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9445" />
            <location filename="../zscaler_api_client.py" line="10735" />
            <source>Yes</source>
            <translation>예</translation>
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
            <location filename="../zscaler_api_client.py" line="9445" />
            <location filename="../zscaler_api_client.py" line="10735" />
            <source>No</source>
            <translation>아니요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10297" />
            <location filename="../zscaler_api_client.py" line="10299" />
            <source>Response drift comparison</source>
            <translation>응답 드리프트 비교</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10297" />
            <source>Binary responses cannot be structurally compared. Export and inspect the original file with an appropriate tool.</source>
            <translation>이진 반응은 구조적으로 비교할 수 없습니다. 적절한 도구를 사용하여 원본 파일을 내보내고 검사합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10299" />
            <source>Send a request or open a response export before comparing drift.</source>
            <translation>드리프트를 비교하기 전에 요청을 보내거나 응답 내보내기를 엽니다.</translation>
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
            <translation>GraphQL 본문은 쿼리 문자열을 포함하는 JSON 객체여야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10764" />
            <source>Choose operationName because the document contains multiple GraphQL operations.</source>
            <translation>문서에 여러 GraphQL 작업이 포함되어 있으므로 OperationName을 선택합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10766" />
            <source>GraphQL operationName does not match a named operation in the query.</source>
            <translation>GraphQL OperationName이 쿼리의 명명된 작업과 일치하지 않습니다.</translation>
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
            <translation>문서화된 GraphQL 스키마</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10813" />
            <source>The current Automation Hub page has no executable query example. Open its documentation or use schema introspection.</source>
            <translation>현재 Automation Hub 페이지에는 실행 가능한 쿼리 예제가 없습니다. 해당 문서를 열거나 스키마 검사를 사용하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10827" />
            <source>Loaded documented ZInsights query. Review time ranges, filters, and fields before sending.</source>
            <translation>문서화된 ZInsights 쿼리를 로드했습니다. 보내기 전에 시간 범위, 필터, 필드를 검토하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10863" />
            <source>Enter a name before saving the GraphQL query.</source>
            <translation>GraphQL 쿼리를 저장하기 전에 이름을 입력하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10867" />
            <location filename="../zscaler_api_client.py" line="10908" />
            <location filename="../zscaler_api_client.py" line="10921" />
            <location filename="../zscaler_api_client.py" line="10940" />
            <source>Secure storage</source>
            <translation>안전한 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10867" />
            <source>The system keychain could not save the GraphQL query.</source>
            <translation>시스템 키체인이 GraphQL 쿼리를 저장할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10873" />
            <source>GraphQL query saved securely</source>
            <translation>GraphQL 쿼리가 안전하게 저장됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10879" />
            <source>Saved GraphQL query is unavailable.</source>
            <translation>저장된 GraphQL 쿼리를 사용할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10908" />
            <source>The system keychain could not rename the GraphQL query.</source>
            <translation>시스템 키체인이 GraphQL 쿼리의 이름을 바꿀 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10921" />
            <source>The system keychain could not delete the GraphQL query.</source>
            <translation>시스템 키체인이 GraphQL 쿼리를 삭제할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10932" />
            <source>GraphQL introspection query prepared. Review the endpoint before sending.</source>
            <translation>GraphQL 내부 검사 쿼리가 준비되었습니다. 보내기 전에 엔드포인트를 검토하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10940" />
            <source>The system keychain could not save the GraphQL schema.</source>
            <translation>시스템 키체인이 GraphQL 스키마를 저장할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10942" />
            <source>GraphQL schema saved securely</source>
            <translation>안전하게 저장된 GraphQL 스키마</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11003" />
            <location filename="../zscaler_api_client.py" line="11520" />
            <source>Read only</source>
            <translation>읽기 전용</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11003" />
            <location filename="../zscaler_api_client.py" line="11520" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>읽기 전용 모드는 쓰기 요청을 차단합니다. 계속하려면 Operations Center에서 로컬 역할을 변경하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11039" />
            <source>Configure a base URL for the selected product before sending a relative API path.</source>
            <translation>상대 API 경로를 보내기 전에 선택한 제품에 대한 기본 URL을 구성하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11117" />
            <source>Select an available local file before sending.</source>
            <translation>전송하기 전에 사용 가능한 로컬 파일을 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11122" />
            <source>Multipart fields must be a JSON object: {error}</source>
            <translation>Multipart fields must be a JSON object: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11125" />
            <source>Multipart fields must be a JSON object.</source>
            <translation>멀티파트 필드는 JSON 객체여야 합니다.</translation>
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
            <location filename="../zscaler_api_client.py" line="11512" />
            <source>Batch validation failed: </source>
            <translation>일괄 검증 실패: </translation>
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
            <translation>배치 확인</translation>
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
            <translation>요청 내역</translation>
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
            <translation>이 요청은 다른 환경에 속합니다. 해당 환경 프로필을 로드하기 전에 활성화하십시오.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11650" />
            <location filename="../zscaler_api_client.py" line="11669" />
            <source>Multipart request loaded. Select the local file again before sending.</source>
            <translation>멀티파트 요청이 로드되었습니다. 보내기 전에 로컬 파일을 다시 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11741" />
            <source>Masked cURL command copied to clipboard</source>
            <translation>마스크된 cURL 명령이 클립보드에 복사되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11746" />
            <source>Binary response</source>
            <translation>바이너리 응답</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11746" />
            <source>Binary response content is not copied to the clipboard. Use Export to save the original file.</source>
            <translation>바이너리 응답 콘텐츠는 클립보드에 복사되지 않습니다. 내보내기를 사용하여 원본 파일을 저장하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11755" />
            <source>Masked response copied to clipboard</source>
            <translation>마스킹된 응답이 클립보드에 복사되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8951" />
            <location filename="../zscaler_api_client.py" line="10947" />
            <source>GraphQL schema</source>
            <translation>GraphQL 스키마</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10947" />
            <source>No saved introspection result exists for this endpoint.</source>
            <translation>이 끝점에 대해 저장된 자체 검사 결과가 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10988" />
            <source>{count} GraphQL errors</source>
            <translation>{count} GraphQL errors</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10990" />
            <source>extensions included</source>
            <translation>확장 기능 포함</translation>
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
            <translation>경고</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8509" />
            <source>ZIA · List users</source>
            <translation>ZIA · 사용자 목록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8509" />
            <source>List ZIA users with pagination</source>
            <translation>페이지 매김을 사용하여 ZIA 사용자 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8510" />
            <source>ZIA · Find URL categories</source>
            <translation>ZIA · URL 카테고리 찾기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8510" />
            <source>Search ZIA URL categories for social media</source>
            <translation>소셜 미디어용 ZIA URL 카테고리 검색</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8511" />
            <source>ZIA · Review firewall policies</source>
            <translation>ZIA · 방화벽 정책 검토</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8511" />
            <source>List ZIA cloud firewall policies</source>
            <translation>ZIA 클라우드 방화벽 정책 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8512" />
            <source>ZPA · Application segments</source>
            <translation>ZPA · 응용 분야</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8512" />
            <source>List ZPA application segments</source>
            <translation>ZPA 애플리케이션 세그먼트 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8513" />
            <source>ZPA · Connector inventory</source>
            <translation>ZPA · 커넥터 인벤토리</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8513" />
            <source>List ZPA connectors</source>
            <translation>ZPA 커넥터 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8514" />
            <source>ZDX · Experience overview</source>
            <translation>ZDX · 체험개요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8514" />
            <source>List ZDX devices and experience scores</source>
            <translation>ZDX 장치 및 경험 점수 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8515" />
            <source>ZDX · Active alerts</source>
            <translation>ZDX · 활성 경고</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8515" />
            <source>List active ZDX alerts with pagination</source>
            <translation>페이지 매김을 사용하여 활성 ZDX 알림 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8516" />
            <source>ZDX · Application monitoring</source>
            <translation>ZDX · 애플리케이션 모니터링</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8516" />
            <source>List monitored ZDX applications</source>
            <translation>모니터링되는 ZDX 애플리케이션 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8517" />
            <source>Client Connector · Devices</source>
            <translation>클라이언트 커넥터 · 장치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8517" />
            <source>List Client Connector devices</source>
            <translation>클라이언트 커넥터 장치 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8518" />
            <source>ZIdentity · Users</source>
            <translation>ZIdentity · 사용자</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8518" />
            <source>List ZIdentity users with pagination</source>
            <translation>페이지 매김을 사용하여 ZIdentity 사용자 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8519" />
            <source>ZIdentity · Groups</source>
            <translation>ZID · 그룹</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8519" />
            <source>List ZIdentity groups</source>
            <translation>ZIdentity 그룹 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8520" />
            <source>AI Security · Workloads</source>
            <translation>AI 보안 · 워크로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8520" />
            <source>List AI Security workloads</source>
            <translation>AI 보안 워크로드 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8574" />
            <source>ZS API Client</source>
            <translation>ZS API 클라이언트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8581" />
            <source>Explore APIs, review changes, and operate safely</source>
            <translation>API를 탐색하고, 변경 사항을 검토하고, 안전하게 운영하세요.</translation>
        </message>
        <message>
            <source>1 · Environment</source>
            <translation type="vanished">1 · 환경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8587" />
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
            <location filename="../zscaler_api_client.py" line="8595" />
            <source>Open policy diff and policy-as-code export</source>
            <translation>개방형 정책 차이점 및 코드형 정책 내보내기</translation>
        </message>
        <message>
            <source>Operations Center</source>
            <translation type="vanished">운영센터</translation>
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
            <location filename="../zscaler_api_client.py" line="8618" />
            <source>Settings</source>
            <translation>설정</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8720" />
            <source>Cancel</source>
            <translation>취소</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8721" />
            <source>Stop before the next page or chain step; the current HTTP request is allowed to finish safely.</source>
            <translation>다음 페이지 또는 체인 단계 전에 중지하십시오. 현재 HTTP 요청이 안전하게 완료되도록 허용됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8736" />
            <source>Fetch all pages</source>
            <translation>모든 페이지 가져오기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8737" />
            <source>Follow only the pagination parameters documented for the selected read operation.</source>
            <translation>선택한 읽기 작업에 대해 문서화된 페이지 매기기 매개변수만 따르세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8739" />
            <source>Page size:</source>
            <translation>페이지 크기:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8743" />
            <source>Maximum pages:</source>
            <translation>최대 페이지 수:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8776" />
            <source>Documented ZInsights query…</source>
            <translation>문서화된 ZInsights 쿼리…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8781" />
            <source>Load documented query</source>
            <translation>문서화된 쿼리 로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8784" />
            <source>Browse documented schema</source>
            <translation>문서화된 스키마 찾아보기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8815" />
            <source>Body type:</source>
            <translation>체형:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8817" />
            <source>JSON</source>
            <translation>JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8818" />
            <source>Raw text</source>
            <translation>원시 텍스트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8819" />
            <source>Form URL encoded</source>
            <translation>인코딩된 양식 URL</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8820" />
            <location filename="../zscaler_api_client.py" line="11117" />
            <source>Multipart file upload</source>
            <translation>멀티파트 파일 업로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8828" />
            <source>File field:</source>
            <translation>파일 필드:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8832" />
            <source>Upload file:</source>
            <translation>파일 업로드:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8835" />
            <source>Select a local file; its path is never saved in history</source>
            <translation>로컬 파일을 선택하십시오. 그 경로는 역사에 저장되지 않습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8837" />
            <source>Browse…</source>
            <translation>찾아보기…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8851" />
            <source>Extract typed variables from the selected GraphQL operation. Values are inserted into the JSON request body, never into the URL.</source>
            <translation>선택한 GraphQL 작업에서 입력된 변수를 추출합니다. 값은 JSON 요청 본문에 삽입되며 URL에는 삽입되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8853" />
            <location filename="../zscaler_api_client.py" line="8878" />
            <source>Type</source>
            <translation>유형</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8853" />
            <location filename="../zscaler_api_client.py" line="8878" />
            <source>Required</source>
            <translation>필수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8853" />
            <location filename="../zscaler_api_client.py" line="8879" />
            <source>Default</source>
            <translation>기본값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8853" />
            <source>JSON value</source>
            <translation>JSON 값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8857" />
            <source>Extract variables from query</source>
            <translation>쿼리에서 변수 추출</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8858" />
            <location filename="../zscaler_api_client.py" line="10755" />
            <location filename="../zscaler_api_client.py" line="11771" />
            <source>No GraphQL variables extracted.</source>
            <translation>추출된 GraphQL 변수가 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8859" />
            <location filename="../zscaler_api_client.py" line="11108" />
            <location filename="../zscaler_api_client.py" line="11158" />
            <source>GraphQL Variables</source>
            <translation>GraphQL 변수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8873" />
            <location filename="../zscaler_api_client.py" line="11776" />
            <source>Select a documented endpoint to inspect its request contract.</source>
            <translation>요청 계약을 검사하려면 문서화된 끝점을 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8878" />
            <source>Location</source>
            <translation>위치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8878" />
            <location filename="../zscaler_api_client.py" line="11594" />
            <source>Name</source>
            <translation>이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8879" />
            <source>Description</source>
            <translation>설명</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8884" />
            <source>API Guide</source>
            <translation>API 가이드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8898" />
            <source>Dataset:</source>
            <translation>데이터세트:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8920" />
            <source>Open export</source>
            <translation>내보내기 열기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8921" />
            <source>Compare drift</source>
            <translation>드리프트 비교</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8941" />
            <source>Field</source>
            <translation>필드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9067" />
            <source>Open response export…</source>
            <translation>공개 응답 내보내기…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9068" />
            <source>Compare response drift…</source>
            <translation>응답 드리프트 비교…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9125" />
            <source>PAC &amp;Workspace...</source>
            <translation>PAC 및 작업 공간...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9405" />
            <location filename="../zscaler_api_client.py" line="9419" />
            <source>Required value</source>
            <translation>필수값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9405" />
            <location filename="../zscaler_api_client.py" line="9419" />
            <source>Optional value</source>
            <translation>선택적 값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9453" />
            <source>body template available</source>
            <translation>바디 템플릿 사용 가능</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9453" />
            <source>no body template</source>
            <translation>본문 템플릿 없음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9454" />
            <source>not listed</source>
            <translation>목록에 없음</translation>
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
            <translation>URL이 수동으로 편집되었습니다. 문서화된 요청 계약을 첨부하려면 엔드포인트를 다시 선택하세요.</translation>
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
            <translation>선택한 환경 프로필을 사용할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9621" />
            <source>Environment profile active: {name}. Sessions and request data were cleared.</source>
            <translation>Environment profile active: {name}. Sessions and request data were cleared.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9665" />
            <source>Write request prepared</source>
            <translation>쓰기 요청 준비됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9666" />
            <source>The documented write template is ready. Review the API Guide, parameters, and body, then choose Send explicitly.</source>
            <translation>문서화된 쓰기 템플릿이 준비되었습니다. API 가이드, 매개변수 및 본문을 검토한 후 명시적으로 보내기를 선택합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="9960" />
            <source>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</source>
            <translation>Suggested request: {method} {name}. Review the attached API Guide and all template values before running.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10108" />
            <source>No tabular response data is available to export.</source>
            <translation>내보낼 수 있는 표 형식 응답 데이터가 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="10258" />
            <location filename="../zscaler_api_client.py" line="10269" />
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
            <location filename="../zscaler_api_client.py" line="10292" />
            <source>Response export opened locally; no API request was sent.</source>
            <translation>응답 내보내기가 로컬에서 열렸습니다. API 요청이 전송되지 않았습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11007" />
            <source>Please enter a URL</source>
            <translation>URL을 입력하세요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11028" />
            <source>Missing Path Variables</source>
            <translation>누락된 경로 변수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11029" />
            <source>Enter values for: {names}</source>
            <translation>Enter values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11093" />
            <source>Missing documented parameters</source>
            <translation>문서화된 매개변수 누락</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11094" />
            <source>Enter required values for: {names}</source>
            <translation>Enter required values for: {names}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11164" />
            <source>Sending request...</source>
            <translation>요청을 보내는 중...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11195" />
            <source>Pagination unavailable</source>
            <translation>페이지 매김을 사용할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11195" />
            <source>Select a documented paginated GET operation before fetching all pages.</source>
            <translation>모든 페이지를 가져오기 전에 문서화된 페이지 매기기 GET 작업을 선택하세요.</translation>
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
            <translation>취소가 요청되었습니다. 현재 HTTP 요청이 안전하게 완료되기를 기다리는 중…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11239" />
            <source>Request cancelled before completion</source>
            <translation>완료되기 전에 요청이 취소되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11287" />
            <source>Safe read retries: {count}</source>
            <translation>Safe read retries: {count}</translation>
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
            <location filename="../zscaler_api_client.py" line="11360" />
            <source>Request successful</source>
            <translation>요청 성공</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11370" />
            <source>ZIA authenticated successfully</source>
            <translation>ZIA가 성공적으로 인증되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11379" />
            <source>ZPA authenticated successfully</source>
            <translation>ZPA가 성공적으로 인증되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11383" />
            <source>ZDX authenticated successfully</source>
            <translation>ZDX가 성공적으로 인증되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11387" />
            <source>ZCC authenticated successfully</source>
            <translation>ZCC가 성공적으로 인증되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11391" />
            <source>ZIdentity authenticated successfully</source>
            <translation>ZIdentity가 성공적으로 인증되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11395" />
            <source>ZTW authenticated successfully</source>
            <translation>ZTW가 성공적으로 인증되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11399" />
            <source>ZWA authenticated successfully</source>
            <translation>ZWA가 성공적으로 인증되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11403" />
            <source>EASM authenticated successfully</source>
            <translation>EASM이 성공적으로 인증되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11407" />
            <source>OneAPI authenticated successfully</source>
            <translation>OneAPI가 성공적으로 인증되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11412" />
            <source>Authenticated successfully</source>
            <translation>성공적으로 인증됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11445" />
            <location filename="../zscaler_api_client.py" line="11451" />
            <source>Request failed</source>
            <translation>요청 실패</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11512" />
            <location filename="../zscaler_api_client.py" line="11515" />
            <location filename="../zscaler_api_client.py" line="11569" />
            <source>Batch</source>
            <translation>배치</translation>
        </message>
        <message>
            <source>Processing {count} items...</source>
            <translation type="vanished">Processing {count} items...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11671" />
            <source>Request loaded from history</source>
            <translation>기록에서 로드된 요청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11738" />
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
            <location filename="../zscaler_api_client.py" line="11757" />
            <source>No response to copy</source>
            <translation>복사에 대한 응답이 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11793" />
            <source>Request cleared</source>
            <translation>요청이 삭제되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11806" />
            <location filename="../zscaler_api_client.py" line="11857" />
            <source>Missing Credentials</source>
            <translation>누락된 자격 증명</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11807" />
            <source>Please configure ZIA credentials in Settings first.</source>
            <translation>먼저 설정에서 ZIA 자격 증명을 구성하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11829" />
            <source>ZIA auth request prepared. Click Send to authenticate.</source>
            <translation>ZIA 인증 요청이 준비되었습니다. 보내기를 클릭하여 인증하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11858" />
            <source>Please configure ZPA credentials in Settings first.</source>
            <translation>먼저 설정에서 ZPA 자격 증명을 구성하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11871" />
            <source>ZPA auth request prepared. Click Send to authenticate.</source>
            <translation>ZPA 인증 요청이 준비되었습니다. 보내기를 클릭하여 인증하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11876" />
            <source>All sessions cleared</source>
            <translation>모든 세션이 삭제되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11899" />
            <source>Language Changed</source>
            <translation>언어가 변경되었습니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11900" />
            <source>The application needs to restart to apply the new language.

Restart now?</source>
            <translation>새 언어를 적용하려면 애플리케이션을 다시 시작해야 합니다.

지금 다시 시작하시겠습니까?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="11948" />
            <source>Checking for updates...</source>
            <translation>업데이트 확인 중...</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12021" />
            <source>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</source>
            <translation>&lt;p&gt;&lt;i&gt;⚠️ This is a pre-release version&lt;/i&gt;&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12025" />
            <source>Update Available</source>
            <translation>업데이트 가능</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12027" />
            <source>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Release:&lt;/b&gt; {name}&lt;/p&gt;{prerelease}&lt;p style='color: #666; font-size: 11px;'&gt;✓ Verified from github.com/{repo}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</source>
            <translation>&lt;h3&gt;A new version is available!&lt;/h3&gt;&lt;p&gt;&lt;b&gt;Current version:&lt;/b&gt; {current}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Latest version:&lt;/b&gt; {latest}&lt;/p&gt;&lt;p&gt;&lt;b&gt;Release:&lt;/b&gt; {name}&lt;/p&gt;{prerelease}&lt;p style='color: #666; font-size: 11px;'&gt;✓ Verified from github.com/{repo}&lt;/p&gt;&lt;p&gt;Would you like to open the download page?&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12047" />
            <source>Update available: v{version}</source>
            <translation>Update available: v{version}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12050" />
            <source>You are up to date (v{version})</source>
            <translation>You are up to date (v{version})</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12055" />
            <source>Update Check Failed</source>
            <translation>업데이트 확인 실패</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12056" />
            <source>Could not check for updates:
{error}</source>
            <translation>Could not check for updates:
{error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12058" />
            <source>Update check failed</source>
            <translation>업데이트 확인 실패</translation>
        </message>
    </context>
    <context>
        <name>OperationsDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="6170" />
            <source>Operations Center</source>
            <translation>운영센터</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6193" />
            <source>Requests</source>
            <translation>요청사항</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6193" />
            <source>Success rate</source>
            <translation>성공률</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6193" />
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Audit integrity</source>
            <translation>감사 무결성</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6193" />
            <source>Active environment</source>
            <translation>활동적인 환경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6205" />
            <source>Recent request outcomes</source>
            <translation>최근 요청 결과</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6210" />
            <location filename="../zscaler_api_client.py" line="6288" />
            <location filename="../zscaler_api_client.py" line="6292" />
            <location filename="../zscaler_api_client.py" line="6332" />
            <location filename="../zscaler_api_client.py" line="6388" />
            <location filename="../zscaler_api_client.py" line="6405" />
            <source>Time</source>
            <translation>시간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6210" />
            <source>Activity</source>
            <translation>활동</translation>
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
            <translation>상태</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6211" />
            <source>Recent activity</source>
            <translation>최근 활동</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6214" />
            <source>Refresh dashboard</source>
            <translation>대시보드 새로고침</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6218" />
            <source>Dashboard</source>
            <translation>대시보드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6221" />
            <source>Previous policy JSON</source>
            <translation>이전 정책 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6222" />
            <source>Proposed policy JSON</source>
            <translation>제안된 정책 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6229" />
            <source>Compare policies</source>
            <translation>정책 비교</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6231" />
            <source>Export policy as JSON</source>
            <translation>정책을 JSON으로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6232" />
            <source>Export policy as YAML</source>
            <translation>정책을 YAML로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6233" />
            <source>Run compliance checks</source>
            <translation>규정 준수 검사 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6234" />
            <location filename="../zscaler_api_client.py" line="7626" />
            <source>Policy diff</source>
            <translation>정책 차이</translation>
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
            <translation>정책 시뮬레이션(로컬에만 해당)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6244" />
            <location filename="../zscaler_api_client.py" line="7674" />
            <source>Simulation</source>
            <translation>시뮬레이션</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6247" />
            <source>CSV data, e.g. name,email
Ada,ada@example.com</source>
            <translation>CSV 데이터(예: 이름, 이메일
에이다,ada@example.com</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6250" />
            <source>Required columns (comma separated)</source>
            <translation>필수 열(쉼표로 구분)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6252" />
            <source>Validate bulk import</source>
            <translation>대량 가져오기 검증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6253" />
            <source>Bulk operations</source>
            <translation>대량 작업</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <source>Administrator</source>
            <translation>관리자</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <source>Analyst</source>
            <translation>분석가</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6256" />
            <location filename="../zscaler_api_client.py" line="7409" />
            <source>Read only</source>
            <translation>읽기 전용</translation>
        </message>
        <message>
            <source>Optional local automation script; never runs without approval</source>
            <translation type="vanished">선택적 로컬 자동화 스크립트; 승인 없이는 절대 실행되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <source>Local role:</source>
            <translation>로컬 역할:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <source>Alert threshold (errors):</source>
            <translation>경고 기준(오류):</translation>
        </message>
        <message>
            <source>Webhook endpoint (disabled until approved):</source>
            <translation type="vanished">웹훅 엔드포인트(승인될 때까지 비활성화됨):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <source>Local automation:</source>
            <translation>로컬 자동화:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6264" />
            <source>Save governance settings</source>
            <translation>거버넌스 설정 저장</translation>
        </message>
        <message>
            <source>Read-only mode blocks write requests. Webhooks and local automation are saved only; this app will ask before any execution.</source>
            <translation type="vanished">읽기 전용 모드는 쓰기 요청을 차단합니다. 웹훅과 로컬 자동화만 저장됩니다. 이 앱은 실행 전에 묻습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6266" />
            <location filename="../zscaler_api_client.py" line="7683" />
            <location filename="../zscaler_api_client.py" line="7686" />
            <location filename="../zscaler_api_client.py" line="7689" />
            <location filename="../zscaler_api_client.py" line="7697" />
            <source>Governance</source>
            <translation>거버넌스</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6269" />
            <source>Official integrations are optional. Credentials remain in the system keychain and no command runs automatically.</source>
            <translation>공식 통합은 선택 사항입니다. 자격 증명은 시스템 키체인에 남아 있으며 어떤 명령도 자동으로 실행되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6270" />
            <source>Integration</source>
            <translation>통합</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6270" />
            <source>Recommended use</source>
            <translation>권장 용도</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6273" />
            <source>Check local integrations</source>
            <translation>로컬 통합 확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6274" />
            <source>Prepare Terraform import</source>
            <translation>Terraform 가져오기 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6275" />
            <source>Prepare MCP connection</source>
            <translation>MCP 연결 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6276" />
            <source>Prepare SDK configuration</source>
            <translation>SDK 구성 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6277" />
            <source>Send masked webhook test</source>
            <translation>마스킹된 웹훅 테스트 보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6279" />
            <source>Copy reviewed command</source>
            <translation>검토된 명령 복사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6289" />
            <location filename="../zscaler_api_client.py" line="7736" />
            <location filename="../zscaler_api_client.py" line="7756" />
            <source>Integrations</source>
            <translation>통합</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6292" />
            <source>Event</source>
            <translation>이벤트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6288" />
            <location filename="../zscaler_api_client.py" line="6292" />
            <location filename="../zscaler_api_client.py" line="6305" />
            <source>Details</source>
            <translation>세부정보</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6294" />
            <source>Refresh audit trail</source>
            <translation>감사 추적 새로 고침</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6295" />
            <location filename="../zscaler_api_client.py" line="6490" />
            <source>Schedule report</source>
            <translation>일정보고</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6296" />
            <source>Create redacted support bundle</source>
            <translation>수정된 지원 번들 생성</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6297" />
            <source>Audit &amp; automation</source>
            <translation>감사 및 자동화</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6300" />
            <source>Local security posture uses redacted request history and audit integrity. It is an operational signal, not a tenant security assessment.</source>
            <translation>로컬 보안 상태는 수정된 요청 기록 및 감사 무결성을 사용합니다. 이는 테넌트 보안 평가가 아닌 운영 신호입니다.</translation>
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
            <translation>심각도</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6305" />
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>Finding</source>
            <translation>찾기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6306" />
            <source>Refresh security posture</source>
            <translation>보안 태세 새로 고침</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6307" />
            <source>Security posture</source>
            <translation>보안 태세</translation>
        </message>
        <message>
            <source>Build a redacted local investigation timeline. Prepared chains never send API requests automatically.</source>
            <translation type="vanished">수정된 지역 조사 타임라인을 구축하세요. 준비된 체인은 API 요청을 자동으로 보내지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6322" />
            <source>Investigation:</source>
            <translation>조사:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6323" />
            <source>API failure investigation</source>
            <translation>API 실패 조사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6323" />
            <source>Change activity review</source>
            <translation>변경 활동 검토</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6323" />
            <source>Slow response investigation</source>
            <translation>느린 응답 조사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6324" />
            <source>Prepare investigation chain</source>
            <translation>조사 체인 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6332" />
            <location filename="../zscaler_api_client.py" line="6344" />
            <source>Source</source>
            <translation>소스</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6313" />
            <location filename="../zscaler_api_client.py" line="6332" />
            <location filename="../zscaler_api_client.py" line="6458" />
            <source>Evidence</source>
            <translation>증거</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6175" />
            <source>Data scope:</source>
            <translation>데이터 범위:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6178" />
            <source>Active environment: {name}</source>
            <translation>Active environment: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6182" />
            <source>All environments (cross-tenant overview)</source>
            <translation>모든 환경(교차 테넌트 개요)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6184" />
            <source>Analytics are tenant-isolated by default. Cross-tenant scope is explicit and available in Advanced mode.</source>
            <translation>분석은 기본적으로 테넌트 격리됩니다. 테넌트 간 범위는 명시적이며 고급 모드에서 사용할 수 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6193" />
            <source>Open alerts</source>
            <translation>공개 알림</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6208" />
            <source>Recent request latency (ms)</source>
            <translation>최근 요청 지연 시간(ms)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6210" />
            <location filename="../zscaler_api_client.py" line="6292" />
            <location filename="../zscaler_api_client.py" line="6405" />
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Environment</source>
            <translation>환경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6215" />
            <source>Auto-refresh local signals</source>
            <translation>자동 새로 고침 로컬 신호</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6216" />
            <source>Every 30 seconds</source>
            <translation>30초마다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6216" />
            <source>Every minute</source>
            <translation>매분</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6216" />
            <source>Every 5 minutes</source>
            <translation>5분마다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6225" />
            <source>Policy rule overview</source>
            <translation>정책 규칙 개요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6227" />
            <location filename="../zscaler_api_client.py" line="6228" />
            <location filename="../zscaler_api_client.py" line="6242" />
            <source>Rule</source>
            <translation>규칙</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6227" />
            <location filename="../zscaler_api_client.py" line="6242" />
            <source>Action</source>
            <translation>액션</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6227" />
            <source>Conditions</source>
            <translation>조건</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6227" />
            <source>State</source>
            <translation>상태</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6228" />
            <source>Best-practice finding</source>
            <translation>모범 사례 찾기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6242" />
            <source>Order</source>
            <translation>주문</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6242" />
            <source>Decision</source>
            <translation>결정</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6260" />
            <source>Show webhook endpoint</source>
            <translation>웹훅 엔드포인트 표시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6262" />
            <source>Absolute path to a reviewed local Python automation</source>
            <translation>검토된 로컬 Python 자동화에 대한 절대 경로</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6263" />
            <source>Webhook endpoint (stored in system keychain):</source>
            <translation>웹훅 끝점(시스템 키체인에 저장됨):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6265" />
            <source>Read-only mode blocks write requests and local automation. Every webhook or local automation execution requires explicit approval.</source>
            <translation>읽기 전용 모드는 쓰기 요청 및 로컬 자동화를 차단합니다. 모든 웹훅 또는 로컬 자동화 실행에는 명시적인 승인이 필요합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6278" />
            <source>Run reviewed local automation</source>
            <translation>검토된 로컬 자동화 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6280" />
            <source>Send current masked alerts</source>
            <translation>현재 마스킹된 알림 보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6287" />
            <source>Webhook delivery history</source>
            <translation>웹훅 전달 내역</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6288" />
            <source>Delivery</source>
            <translation>배송</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6310" />
            <source>Local alerts evaluate retained, redacted request history only. They do not monitor the tenant in real time or send data externally.</source>
            <translation>로컬 알림은 보관되고 수정된 요청 기록만 평가합니다. 테넌트를 실시간으로 모니터링하거나 외부로 데이터를 전송하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6313" />
            <source>Alert</source>
            <translation>경고</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6313" />
            <source>Count</source>
            <translation>개수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6314" />
            <source>Refresh local alerts</source>
            <translation>지역 알림 새로 고침</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6315" />
            <source>Copy masked alert summary</source>
            <translation>마스킹된 경고 요약 복사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6316" />
            <source>Export alerts as JSON</source>
            <translation>경고를 JSON으로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6317" />
            <source>Export alerts as Markdown</source>
            <translation>경고를 Markdown으로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6318" />
            <source>Alert Center</source>
            <translation>알림 센터</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6331" />
            <source>Security investigation evidence map</source>
            <translation>보안조사 증거지도</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6352" />
            <source>Refresh investigation</source>
            <translation>조사 새로고침</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6353" />
            <location filename="../zscaler_api_client.py" line="6827" />
            <source>Export incident evidence</source>
            <translation>사건 증거 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6355" />
            <source>Incident investigation</source>
            <translation>사건 조사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6432" />
            <source>Create a local review from Policy diff. Approval records intent only; no policy, Terraform, or Git change is applied automatically.</source>
            <translation>정책 차이에서 로컬 리뷰를 만듭니다. 승인은 의도만 기록합니다. 정책, Terraform 또는 Git 변경 사항은 자동으로 적용되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Change ticket or reference</source>
            <translation>티켓 또는 참조 변경</translation>
        </message>
        <message>
            <source>Reviewer name</source>
            <translation type="vanished">리뷰어 이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Reference:</source>
            <translation>참조:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Reviewer:</source>
            <translation>검토자:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6438" />
            <source>Prepare change review</source>
            <translation>변경 검토 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6439" />
            <source>Record local approval</source>
            <translation>현지 승인 기록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6440" />
            <location filename="../zscaler_api_client.py" line="7133" />
            <source>Export Git review</source>
            <translation>Git 검토 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6441" />
            <location filename="../zscaler_api_client.py" line="7129" />
            <source>Export rollback plan</source>
            <translation>롤백 계획 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6443" />
            <location filename="../zscaler_api_client.py" line="7093" />
            <location filename="../zscaler_api_client.py" line="7115" />
            <location filename="../zscaler_api_client.py" line="7118" />
            <location filename="../zscaler_api_client.py" line="7127" />
            <source>Change control</source>
            <translation>변경 제어</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6470" />
            <source>Generate local, redacted reports for leadership, SOC, or operations. Reports contain no credentials and are not sent automatically.</source>
            <translation>리더십, SOC 또는 운영에 대한 현지 수정 보고서를 생성합니다. 보고서에는 자격 증명이 포함되어 있지 않으며 자동으로 전송되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6471" />
            <source>Report type:</source>
            <translation>보고서 유형:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <location filename="../zscaler_api_client.py" line="7270" />
            <location filename="../zscaler_api_client.py" line="7293" />
            <location filename="../zscaler_api_client.py" line="7900" />
            <location filename="../zscaler_api_client.py" line="8001" />
            <source>CISO security summary</source>
            <translation>CISO 보안 요약</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <location filename="../zscaler_api_client.py" line="7270" />
            <location filename="../zscaler_api_client.py" line="7293" />
            <location filename="../zscaler_api_client.py" line="7900" />
            <source>SOC investigation summary</source>
            <translation>SOC 조사 요약</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6472" />
            <location filename="../zscaler_api_client.py" line="7270" />
            <location filename="../zscaler_api_client.py" line="7293" />
            <location filename="../zscaler_api_client.py" line="7900" />
            <source>Operations health summary</source>
            <translation>운영 상태 요약</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6473" />
            <source>Generate report</source>
            <translation>보고서 생성</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6475" />
            <source>Security posture report artwork</source>
            <translation>보안 상태 보고서 아트워크</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6478" />
            <location filename="../zscaler_api_client.py" line="7336" />
            <source>Export report as Markdown</source>
            <translation>보고서를 마크다운으로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6479" />
            <location filename="../zscaler_api_client.py" line="7330" />
            <source>Export report as JSON</source>
            <translation>보고서를 JSON으로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6480" />
            <location filename="../zscaler_api_client.py" line="7333" />
            <source>Export visual report as HTML</source>
            <translation>시각적 보고서를 HTML로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6481" />
            <source>Scheduled reports</source>
            <translation>예약된 보고서</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Name</source>
            <translation>이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Type</source>
            <translation>유형</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Cadence</source>
            <translation>케이던스</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Next run</source>
            <translation>다음 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6483" />
            <source>Mode</source>
            <translation>모드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6491" />
            <source>Run selected now</source>
            <translation>지금 선택 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6492" />
            <source>Enable or pause</source>
            <translation>활성화 또는 일시중지</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6493" />
            <source>Remove schedule</source>
            <translation>일정 삭제</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6494" />
            <source>Refresh schedules</source>
            <translation>새로 고침 일정</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6496" />
            <source>Reports</source>
            <translation>보고서</translation>
        </message>
        <message>
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and every run requires approval.</source>
            <translation type="vanished">활성 인증 환경에 대해 검토된 시퀀스를 실행합니다. 체인은 20단계로 제한되고 선택한 제품 호스트에 유지되며 모든 실행에는 승인이 필요합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6500" />
            <source>Chain JSON</source>
            <translation>체인 JSON</translation>
        </message>
        <message>
            <source>A JSON list of API requests. Relative paths use the active product host.</source>
            <translation type="vanished">API 요청의 JSON 목록입니다. 상대 경로는 활성 제품 호스트를 사용합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6508" />
            <source>Stop after the first failed step</source>
            <translation>첫 번째 실패한 단계 후 중지</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6509" />
            <source>Validate chain</source>
            <translation>체인 검증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6510" />
            <location filename="../zscaler_api_client.py" line="7415" />
            <source>Run approved chain</source>
            <translation>승인된 체인 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6511" />
            <source>Cancel chain</source>
            <translation>체인 취소</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6512" />
            <location filename="../zscaler_api_client.py" line="7487" />
            <source>Export masked chain results</source>
            <translation>마스킹된 체인 결과 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6513" />
            <location filename="../zscaler_api_client.py" line="7405" />
            <location filename="../zscaler_api_client.py" line="7411" />
            <location filename="../zscaler_api_client.py" line="7482" />
            <location filename="../zscaler_api_client.py" line="7486" />
            <source>API chains</source>
            <translation>API 체인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6516" />
            <source>Build a local digital twin of policy order. It explains decisions, highlights overlap and shadowing, estimates change blast radius, and never applies a policy.</source>
            <translation>정책 순서의 로컬 디지털 트윈을 구축합니다. 결정을 설명하고, 중복 및 음영을 강조하고, 폭발 반경 변경을 추정하고, 정책을 적용하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6518" />
            <source>Policy rules JSON or an object containing a rules list</source>
            <translation>정책 규칙 JSON 또는 규칙 목록이 포함된 객체</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6519" />
            <source>Analyze policy twin</source>
            <translation>정책 쌍 분석</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6520" />
            <location filename="../zscaler_api_client.py" line="7571" />
            <source>Export twin evidence</source>
            <translation>쌍 증거 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6521" />
            <source>Load proposed policy</source>
            <translation>제안된 정책 로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6522" />
            <source>Test context:</source>
            <translation>테스트 컨텍스트:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6522" />
            <source>Request context JSON</source>
            <translation>요청 컨텍스트 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6523" />
            <source>Explain decision</source>
            <translation>결정을 설명하라</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Rules</source>
            <translation>규칙</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Conflicts</source>
            <translation>충돌</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Shadowed</source>
            <translation>그림자</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6525" />
            <source>Blast radius</source>
            <translation>폭발 반경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6529" />
            <source>Policy order and conflict graph</source>
            <translation>정책 순서 및 충돌 그래프</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>Earlier rule</source>
            <translation>이전 규칙</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>Later rule</source>
            <translation>이후 규칙</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6344" />
            <location filename="../zscaler_api_client.py" line="6349" />
            <location filename="../zscaler_api_client.py" line="6370" />
            <location filename="../zscaler_api_client.py" line="6384" />
            <location filename="../zscaler_api_client.py" line="6408" />
            <location filename="../zscaler_api_client.py" line="6531" />
            <source>Explanation</source>
            <translation>설명</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6207" />
            <location filename="../zscaler_api_client.py" line="6360" />
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Latency</source>
            <translation>대기 시간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6321" />
            <source>Correlate retained local activity with every object in the current masked REST or GraphQL response. Paths are investigation hypotheses, never proof of compromise, and prepared chains never run automatically.</source>
            <translation>유지된 로컬 활동을 현재 마스킹된 REST 또는 GraphQL 응답의 모든 객체와 연관시킵니다. 경로는 조사 가설이며 타협의 증거가 아니며 준비된 체인은 자동으로 실행되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6325" />
            <source>Include current API/GraphQL response</source>
            <translation>현재 API/GraphQL 응답 포함</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6326" />
            <source>Correlate entities</source>
            <translation>엔터티 상관</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6333" />
            <source>Evidence timeline</source>
            <translation>증거 타임라인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6337" />
            <source>Entities</source>
            <translation>엔터티</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6337" />
            <source>Relationships</source>
            <translation>관계</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6337" />
            <source>Potential paths</source>
            <translation>잠재적 경로</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6337" />
            <source>High-risk entities</source>
            <translation>고위험 단체</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6341" />
            <source>Filter entities:</source>
            <translation>엔터티 필터링:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6341" />
            <source>Name, type, risk, or evidence source</source>
            <translation>이름, 유형, 위험 또는 증거 소스</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6342" />
            <source>SOC entity and potential attack-path graph</source>
            <translation>SOC 엔터티 및 잠재적 공격 경로 그래프</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6343" />
            <location filename="../zscaler_api_client.py" line="6773" />
            <source>Select an entity to inspect its local evidence.</source>
            <translation>현지 증거를 조사할 개체를 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6344" />
            <source>Target</source>
            <translation>대상</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6344" />
            <source>Hops</source>
            <translation>홉</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6345" />
            <source>Entity graph</source>
            <translation>엔터티 그래프</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6348" />
            <source>Explainable signals are derived only from retained local evidence and the selected response. Validate them against authoritative product telemetry.</source>
            <translation>설명 가능한 신호는 보유된 지역 증거와 선택된 응답에서만 파생됩니다. 신뢰할 수 있는 제품 원격 측정을 통해 유효성을 검사합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6349" />
            <source>Signal</source>
            <translation>신호</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6349" />
            <source>Entity</source>
            <translation>엔터티</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6350" />
            <source>Correlated signals</source>
            <translation>상관 신호</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6354" />
            <location filename="../zscaler_api_client.py" line="6836" />
            <source>Export entity graph</source>
            <translation>엔터티 그래프 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6358" />
            <source>Trace observed digital experience from user and device through network and service edge to the application. The parser consumes the complete current REST or GraphQL response, marks missing stages explicitly, and never queries the tenant automatically.</source>
            <translation>관찰된 디지털 경험을 사용자와 장치에서 네트워크와 서비스 에지를 거쳐 애플리케이션까지 추적합니다. 파서는 현재 REST 또는 GraphQL 응답 전체를 사용하고 누락된 단계를 명시적으로 표시하며 자동으로 테넌트를 쿼리하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6360" />
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Experience score</source>
            <translation>경험치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6360" />
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Packet loss</source>
            <translation>패킷 손실</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6360" />
            <source>Journey issues</source>
            <translation>여행 문제</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6364" />
            <source>Observed user-to-application experience journey</source>
            <translation>관찰된 사용자-애플리케이션 경험 여정</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6367" />
            <source>Trend metric:</source>
            <translation>추세 지표:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6368" />
            <source>Observed value</source>
            <translation>관찰된 값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6370" />
            <source>Stage</source>
            <translation>무대</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6370" />
            <source>Metric</source>
            <translation>미터법</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6372" />
            <source>Analyze current experience response</source>
            <translation>현재 경험 반응 분석</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6373" />
            <location filename="../zscaler_api_client.py" line="6901" />
            <source>Export masked journey</source>
            <translation>마스크된 여행 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6374" />
            <source>Experience journey</source>
            <translation>여행을 경험하세요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6392" />
            <source>Build and test explainable detections against retained local request history. Rules use a bounded declarative grammar—no Python, eval, tenant writes, network calls, or automatic remediation.</source>
            <translation>보관된 로컬 요청 기록에 대해 설명 가능한 탐지를 구축하고 테스트합니다. 규칙은 Python, 평가, 테넌트 쓰기, 네트워크 호출 또는 자동 수정이 아닌 제한된 선언적 문법을 사용합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6393" />
            <source>Template:</source>
            <translation>템플릿:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <source>Server errors</source>
            <translation>서버 오류</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <source>Rate-limit responses</source>
            <translation>속도 제한 응답</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <source>High request latency</source>
            <translation>높은 요청 대기 시간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <source>Write activity</source>
            <translation>쓰기 활동</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6394" />
            <source>Authentication failures</source>
            <translation>인증 실패</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Anomaly sensitivity:</source>
            <translation>이상 민감도:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Relaxed</source>
            <translation>편안한</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Balanced</source>
            <translation>균형 잡힌</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6397" />
            <source>Sensitive</source>
            <translation>민감한</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6398" />
            <source>Declarative detection rule JSON</source>
            <translation>선언적 탐지 규칙 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6399" />
            <source>Validate rule</source>
            <translation>규칙 검증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6400" />
            <source>Run local detection</source>
            <translation>로컬 감지 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6401" />
            <source>Analyze adaptive anomalies</source>
            <translation>적응형 이상 분석</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6402" />
            <location filename="../zscaler_api_client.py" line="7011" />
            <source>Export masked detection evidence</source>
            <translation>마스킹된 탐지 증거 내보내기</translation>
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
            <translation>엔드포인트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6408" />
            <source>Observed</source>
            <translation>관찰됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6409" />
            <source>Detection lab</source>
            <translation>탐지 연구실</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6446" />
            <source>Continuously evaluate a transparent local evidence baseline. Framework mappings are navigational aids—not certification—and no tenant query or remediation runs automatically.</source>
            <translation>투명한 현지 증거 기준선을 지속적으로 평가합니다. 프레임워크 매핑은 인증이 아닌 탐색 보조 도구이며 테넌트 쿼리 또는 수정이 자동으로 실행되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6447" />
            <source>Framework view:</source>
            <translation>프레임워크 보기:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <source>All local controls</source>
            <translation>모든 로컬 컨트롤</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <source>NIST CSF 2.0 functions</source>
            <translation>NIST CSF 2.0 기능</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6448" />
            <source>CISA Zero Trust pillars</source>
            <translation>CISA 제로 트러스트 핵심 요소</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6449" />
            <source>Include proposed policy from Policy diff</source>
            <translation>정책 차이에서 제안된 정책 포함</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6450" />
            <source>Evaluate now</source>
            <translation>지금 평가하기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <location filename="../zscaler_api_client.py" line="7305" />
            <source>Assurance score</source>
            <translation>보증 점수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Passed</source>
            <translation>합격</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <location filename="../zscaler_api_client.py" line="7203" />
            <source>Not evaluated</source>
            <translation>평가되지 않음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <source>Evidence coverage</source>
            <translation>증거 범위</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6458" />
            <source>Control</source>
            <translation>제어</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6458" />
            <source>Control objective</source>
            <translation>제어 목적</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6458" />
            <source>Framework mapping</source>
            <translation>프레임워크 매핑</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6458" />
            <source>Recommendation</source>
            <translation>추천</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6459" />
            <source>Leadership narrative</source>
            <translation>리더십 내러티브</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6428" />
            <location filename="../zscaler_api_client.py" line="6461" />
            <source>Score</source>
            <translation>점수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6281" />
            <source>JSON Lines (SIEM/SOAR)</source>
            <translation>JSON 라인(SIEM/SOAR)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6282" />
            <location filename="../zscaler_api_client.py" line="7743" />
            <source>Export masked security events</source>
            <translation>마스킹된 보안 이벤트 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6283" />
            <location filename="../zscaler_api_client.py" line="7749" />
            <source>Export read-only MCP manifest</source>
            <translation>읽기 전용 MCP 매니페스트 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6284" />
            <location filename="../zscaler_api_client.py" line="7757" />
            <source>Export Terraform review handoff</source>
            <translation>Terraform 검토 전달 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6377" />
            <source>Inspect the complete current REST or GraphQL response for explicit internet exposure, vulnerability severity and broad or write-capable access. Findings are local hypotheses and deception suggestions are never deployed automatically.</source>
            <translation>명시적인 인터넷 노출, 취약성 심각도 및 광범위하거나 쓰기 가능한 액세스에 대해 전체 현재 REST 또는 GraphQL 응답을 검사합니다. 결과는 지역적 가설이며 속임수 제안은 자동으로 배포되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>Exposure signals</source>
            <translation>노출 신호</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>High-risk assets</source>
            <translation>고위험자산</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>Access findings</source>
            <translation>발견 항목에 액세스</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6379" />
            <source>Broad privileges</source>
            <translation>광범위한 권한</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6383" />
            <source>Asset</source>
            <translation>자산</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6383" />
            <source>Risk score</source>
            <translation>위험 점수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6383" />
            <source>Observed factors</source>
            <translation>관찰된 요인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6384" />
            <source>Subject</source>
            <translation>주제</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6384" />
            <source>Permission field</source>
            <translation>권한 필드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6385" />
            <source>Defensive deception opportunities</source>
            <translation>방어적인 속임수 기회</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6386" />
            <source>Analyze current exposure and access</source>
            <translation>현재 노출 및 액세스 분석</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6386" />
            <location filename="../zscaler_api_client.py" line="6934" />
            <source>Export masked exposure evidence</source>
            <translation>마스킹된 노출 증거 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <location filename="../zscaler_api_client.py" line="6952" />
            <location filename="../zscaler_api_client.py" line="6954" />
            <source>Investigation notebook</source>
            <translation>조사노트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <source>Note title</source>
            <translation>메모 제목</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <source>Comma-separated tags</source>
            <translation>쉼표로 구분된 태그</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6387" />
            <source>Masked investigation observations, decisions and follow-up</source>
            <translation>마스킹된 조사 관찰, 결정 및 후속 조치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>Save local note</source>
            <translation>지역 메모 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <location filename="../zscaler_api_client.py" line="6959" />
            <source>Export masked notebook</source>
            <translation>마스킹된 노트 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>Title</source>
            <translation>제목</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>Tags</source>
            <translation>태그</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6388" />
            <source>Preview</source>
            <translation>미리보기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6389" />
            <source>Exposure &amp; access</source>
            <translation>노출 및 접근</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6413" />
            <source>Use guided, locally tracked response and recovery checklists. A completed step records only operator intent in the local audit trail; it never changes a tenant or closes an authoritative incident.</source>
            <translation>현지에서 추적되는 안내식 대응 및 복구 체크리스트를 사용하세요. 완료된 단계는 로컬 감사 추적에 운영자의 의도만 기록합니다. 테넌트를 변경하거나 권위 있는 사건을 종료하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6414" />
            <source>Playbook:</source>
            <translation>플레이북:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>API/service disruption</source>
            <translation>API/서비스 중단</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>High-risk policy change</source>
            <translation>고위험 정책 변경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>Digital experience degradation</source>
            <translation>디지털 경험 저하</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>Possible credential exposure</source>
            <translation>가능한 자격 증명 노출</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6415" />
            <source>Ransomware containment support</source>
            <translation>랜섬웨어 억제 지원</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6418" />
            <source>Mark selected step complete</source>
            <translation>선택한 단계를 완료로 표시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6419" />
            <location filename="../zscaler_api_client.py" line="7053" />
            <source>Export masked playbook evidence</source>
            <translation>마스킹된 플레이북 증거 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6421" />
            <source>Guidance</source>
            <translation>안내</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6421" />
            <source>Local evidence</source>
            <translation>지역적 증거</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6422" />
            <source>Smart API planner (review only)</source>
            <translation>스마트 API 플래너(검토 전용)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6423" />
            <source>Describe a goal to rank documented Automation Hub operations deterministically. Read operations are preferred; tenant values are never guessed and nothing runs automatically.</source>
            <translation>문서화된 Automation Hub 작업의 순위를 결정적으로 지정하는 목표를 설명합니다. 읽기 작업이 선호됩니다. 테넌트 값은 절대 추측되지 않으며 자동으로 실행되는 것은 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6424" />
            <source>Example: investigate slow ZDX application experience</source>
            <translation>예: 느린 ZDX 애플리케이션 경험 조사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6425" />
            <source>Plan documented operations</source>
            <translation>문서화된 작업 계획</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6426" />
            <source>Copy safe reads to API Chains</source>
            <translation>API 체인에 안전한 읽기 복사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6428" />
            <source>Product</source>
            <translation>제품</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6428" />
            <source>Operation</source>
            <translation>작동</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6429" />
            <location filename="../zscaler_api_client.py" line="7045" />
            <source>Response playbooks</source>
            <translation>대응 플레이북</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Change owner</source>
            <translation>소유자 변경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Independent reviewer</source>
            <translation>독립 리뷰어</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6433" />
            <source>Owner:</source>
            <translation>소유자:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Maintenance window confirmed</source>
            <translation>유지보수 기간이 확인되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <source>Local simulation reviewed</source>
            <translation>로컬 시뮬레이션 검토</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6434" />
            <source>Rollback prepared</source>
            <translation>롤백 준비됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6436" />
            <source>Gate</source>
            <translation>게이트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6436" />
            <source>Required</source>
            <translation>필수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6442" />
            <location filename="../zscaler_api_client.py" line="7140" />
            <location filename="../zscaler_api_client.py" line="7144" />
            <location filename="../zscaler_api_client.py" line="7145" />
            <source>Verify rollback artifact</source>
            <translation>롤백 아티팩트 확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6462" />
            <source>Local baseline:</source>
            <translation>로컬 기준:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6463" />
            <source>Save assessment baseline</source>
            <translation>평가 기준 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6464" />
            <location filename="../zscaler_api_client.py" line="7243" />
            <source>Export signed evidence</source>
            <translation>서명된 증거 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6465" />
            <location filename="../zscaler_api_client.py" line="7250" />
            <source>Verify signed evidence</source>
            <translation>서명된 증거 확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6467" />
            <location filename="../zscaler_api_client.py" line="7174" />
            <location filename="../zscaler_api_client.py" line="7230" />
            <source>Continuous assurance</source>
            <translation>지속적인 보증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6532" />
            <location filename="../zscaler_api_client.py" line="7591" />
            <location filename="../zscaler_api_client.py" line="7595" />
            <location filename="../zscaler_api_client.py" line="7597" />
            <location filename="../zscaler_api_client.py" line="7609" />
            <source>Policy time travel</source>
            <translation>정책 시간 여행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6534" />
            <source>Save snapshot</source>
            <translation>스냅샷 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6535" />
            <source>Use as baseline</source>
            <translation>기준으로 사용</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6536" />
            <source>Load snapshot</source>
            <translation>스냅샷 로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6537" />
            <source>Delete snapshot</source>
            <translation>스냅샷 삭제</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6539" />
            <location filename="../zscaler_api_client.py" line="7526" />
            <location filename="../zscaler_api_client.py" line="7561" />
            <location filename="../zscaler_api_client.py" line="7586" />
            <source>Policy twin</source>
            <translation>정책 쌍</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6581" />
            <source>All environments</source>
            <translation>모든 환경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6597" />
            <source>Showing local evidence for: {name}</source>
            <translation>Showing local evidence for: {name}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6599" />
            <source>Cross-tenant overview is active. Exports and integrations will include all local environments.</source>
            <translation>테넌트 간 개요가 활성 상태입니다. 내보내기 및 통합에는 모든 로컬 환경이 포함됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6605" />
            <location filename="../zscaler_api_client.py" line="6969" />
            <location filename="../zscaler_api_client.py" line="7375" />
            <source>Invalid JSON: </source>
            <translation>잘못된 JSON: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6625" />
            <source>Audit chain is valid</source>
            <translation>감사 체인이 유효합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6625" />
            <source>Audit chain needs review</source>
            <translation>감사 체인 검토 필요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6631" />
            <source>Success</source>
            <translation>성공</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6631" />
            <source>Other</source>
            <translation>기타</translation>
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
            <translation>심각</translation>
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
            <translation>높음</translation>
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
            <translation>중간</translation>
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
            <translation>낮음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6647" />
            <location filename="../zscaler_api_client.py" line="6809" />
            <location filename="../zscaler_api_client.py" line="7285" />
            <location filename="../zscaler_api_client.py" line="7543" />
            <location filename="../zscaler_api_client.py" line="7637" />
            <source>Info</source>
            <translation>정보</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6651" />
            <source>Audit integrity needs review</source>
            <translation>감사 무결성에 대한 검토가 필요함</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6651" />
            <source>The local audit chain did not verify.</source>
            <translation>로컬 감사 체인이 확인되지 않았습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6652" />
            <source>Repeated API failures</source>
            <translation>반복되는 API 실패</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6652" />
            <source>{count} failed requests are in local history.</source>
            <translation>{count} failed requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6653" />
            <source>API failures observed</source>
            <translation>API 오류가 관찰되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6653" />
            <source>{count} request(s) need review.</source>
            <translation>{count} request(s) need review.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6654" />
            <source>Change activity burst</source>
            <translation>변경 활동 버스트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6654" />
            <source>{count} write requests are in local history.</source>
            <translation>{count} write requests are in local history.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6655" />
            <source>Slow API responses</source>
            <translation>느린 API 응답</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6655" />
            <source>{count} request(s) took ten seconds or more.</source>
            <translation>{count} request(s) took ten seconds or more.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6656" />
            <source>No local telemetry yet</source>
            <translation>아직 로컬 원격 측정이 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6656" />
            <source>Send or import redacted requests to establish a local baseline.</source>
            <translation>로컬 기준을 설정하기 위해 수정된 요청을 보내거나 가져옵니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6677" />
            <source>{count} local alert(s) · error threshold: {threshold}</source>
            <translation>{count} local alert(s) · error threshold: {threshold}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6683" />
            <source>The local audit chain needs review.</source>
            <translation>현지 감사 체인에 대한 검토가 필요합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6684" />
            <source>Local failed requests reached the configured threshold.</source>
            <translation>실패한 로컬 요청이 구성된 임계값에 도달했습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6685" />
            <source>API rate limiting was observed in local history.</source>
            <translation>로컬 기록에서 API 속도 제한이 관찰되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6686" />
            <source>A response reported no remaining API rate-limit capacity.</source>
            <translation>응답에서 남은 API 속도 제한 용량이 없다고 보고했습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6687" />
            <source>The latest request failed after successful requests to the same endpoint.</source>
            <translation>동일한 엔드포인트에 대한 요청이 성공한 후 최신 요청이 실패했습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6688" />
            <source>The latest endpoint response was much slower than its local baseline.</source>
            <translation>최신 엔드포인트 응답은 로컬 기준보다 훨씬 느렸습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6689" />
            <source>Three or more local requests took ten seconds or more.</source>
            <translation>3개 이상의 로컬 요청에는 10초 이상이 소요되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6707" />
            <source>Local alert summary</source>
            <translation>지역 경고 요약</translation>
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
            <translation>지역 알림이 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6711" />
            <source>Count: {count}</source>
            <translation>Count: {count}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6716" />
            <source>Export local alerts</source>
            <translation>지역 알림 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6745" />
            <source>Normal</source>
            <translation>보통</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6750" />
            <source>Observed relationship chain across local evidence; validate before treating it as an exploitable attack path.</source>
            <translation>지역 증거 전반에 걸쳐 관찰된 관계 사슬 악용 가능한 공격 경로로 취급하기 전에 검증하십시오.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6756" />
            <source>Endpoint failure evidence</source>
            <translation>엔드포인트 실패 증거</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6756" />
            <source>Relationship concentration</source>
            <translation>관계 집중</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6756" />
            <source>Security indicator observed</source>
            <translation>보안 지표가 관찰됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6758" />
            <source>The endpoint has locally retained server or network failure evidence.</source>
            <translation>엔드포인트에는 서버 또는 네트워크 오류 증거가 로컬로 보관되어 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6759" />
            <source>The entity is connected to an unusually broad set of locally observed relationships.</source>
            <translation>개체는 지역적으로 관찰되는 비정상적으로 광범위한 관계 집합과 연결되어 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6760" />
            <source>A threat, exposure, vulnerability, or indicator-like object was present in the response.</source>
            <translation>위협, 노출, 취약성 또는 지표와 유사한 개체가 응답에 존재했습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6769" />
            <source>The graph reached its local safety limit; use the filter or export the evidence for complete review.</source>
            <translation>그래프가 로컬 안전 한계에 도달했습니다. 완전한 검토를 위해 필터를 사용하거나 증거를 내보냅니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6771" />
            <source>No correlatable entities are available in the selected local scope.</source>
            <translation>선택한 로컬 범위에서는 상관 가능한 엔터티를 사용할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6793" />
            <source>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</source>
            <translation>{type}: {label} · risk {risk} · {evidence} evidence item(s) · {relationships} relationship(s) · sources: {sources}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6812" />
            <source>Request</source>
            <translation>요청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6812" />
            <source>Audit</source>
            <translation>감사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6818" />
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
            <location filename="../zscaler_api_client.py" line="6819" />
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
            <location filename="../zscaler_api_client.py" line="6820" />
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
            <location filename="../zscaler_api_client.py" line="6869" />
            <source>{value:g} ms</source>
            <translation>{value:g} ms</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6875" />
            <source>User</source>
            <translation>사용자</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6875" />
            <source>Device</source>
            <translation>장치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6875" />
            <source>Network</source>
            <translation>네트워크</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6875" />
            <source>Service edge</source>
            <translation>서비스 엣지</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6875" />
            <source>Application</source>
            <translation>신청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Device score</source>
            <translation>기기 점수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Application score</source>
            <translation>지원 점수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Service-edge score</source>
            <translation>서비스 에지 점수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Jitter</source>
            <translation>지터</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>DNS time</source>
            <translation>DNS 시간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>TCP connect time</source>
            <translation>TCP 연결 시간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Page fetch time</source>
            <translation>페이지 가져오기 시간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Availability</source>
            <translation>가용성</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>CPU</source>
            <translation>CPU</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6879" />
            <source>Memory</source>
            <translation>메모리</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Overall experience score is below 70</source>
            <translation>전체 경험치 점수가 70점 미만입니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Device score is below 70</source>
            <translation>장치 점수가 70점 미만입니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Application score is below 70</source>
            <translation>지원 점수가 70점 미만입니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Service-edge score is below 70</source>
            <translation>서비스 에지 점수가 70점 미만입니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Observed latency exceeds 250 ms</source>
            <translation>관찰된 지연 시간이 250ms를 초과합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Observed packet loss exceeds 2%</source>
            <translation>관찰된 패킷 손실은 2%를 초과합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Observed jitter exceeds 40 ms</source>
            <translation>관찰된 지터가 40ms를 초과합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6883" />
            <source>Observed availability is below 99%</source>
            <translation>관찰된 가용성은 99% 미만입니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6889" />
            <source>Schema-tolerant local interpretation of observed API fields. Thresholds are transparent operational hints, not Zscaler health verdicts or SLA determinations.</source>
            <translation>관찰된 API 필드의 스키마 허용 로컬 해석. 임계값은 Zscaler 상태 판정이나 SLA 결정이 아닌 투명한 운영 힌트입니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6890" />
            <source>No current API or GraphQL response is available. Run or import a ZDX/OneAPI query, then analyze again.</source>
            <translation>현재 API 또는 GraphQL 응답을 사용할 수 없습니다. ZDX/OneAPI 쿼리를 실행하거나 가져온 후 다시 분석하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6890" />
            <source>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</source>
            <translation>Observed {stages} of 5 journey stages across {samples} metric sample(s). {disclaimer}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6924" />
            <source>Explicit broad or write-capable access observed; validate least privilege and assignment context.</source>
            <translation>명시적인 광범위 또는 쓰기 가능 액세스가 관찰되었습니다. 최소 권한 및 할당 컨텍스트를 검증합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6929" />
            <source>Consider a monitored decoy resource near exposed paths</source>
            <translation>노출된 경로 근처에서 모니터링되는 미끼 리소스를 고려하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6929" />
            <source>Consider a non-production canary permission for privileged-path monitoring</source>
            <translation>권한 있는 경로 모니터링을 위해 비프로덕션 카나리아 권한을 고려하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6929" />
            <source>Maintain an exposure and least-privilege baseline</source>
            <translation>노출 및 최소 권한 기준 유지</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6952" />
            <source>Select one environment before saving an investigation note.</source>
            <translation>조사 메모를 저장하기 전에 하나의 환경을 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6977" />
            <source>Rule is valid and can be evaluated locally.</source>
            <translation>규칙이 유효하며 로컬로 평가할 수 있습니다.</translation>
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
            <translation>중앙값 절대 편차(MAD), 10%/10ms 노이즈 플로어에서 1.4826으로 스케일링</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7006" />
            <source>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</source>
            <translation>Adaptive analysis evaluated {endpoints} endpoint(s) and found {findings} explainable anomaly hint(s). Method: {method}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Confirm scope from retained failures</source>
            <translation>보유된 오류의 범위 확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Check rate-limit and service-health evidence</source>
            <translation>속도 제한 및 서비스 상태 증거 확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Collect read-only product status</source>
            <translation>읽기 전용 제품 상태 수집</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Correlate affected entities</source>
            <translation>영향을 받은 엔터티 상관관계</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Export masked incident evidence</source>
            <translation>마스킹된 사건 증거 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7026" />
            <source>Record closure decision</source>
            <translation>기록 폐쇄 결정</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Capture current policy baseline</source>
            <translation>현재 정책 기준 캡처</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Run policy diff and best-practice checks</source>
            <translation>정책 차이점 및 모범 사례 확인 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Run Policy Twin and decision simulation</source>
            <translation>정책 쌍 및 의사 결정 시뮬레이션 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Prepare rollback artifact</source>
            <translation>롤백 아티팩트 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Record independent review</source>
            <translation>독립적인 검토 기록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7027" />
            <source>Export change package</source>
            <translation>변경 패키지 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Identify affected user and application scope</source>
            <translation>영향을 받는 사용자 및 애플리케이션 범위 식별</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Inspect device metrics</source>
            <translation>장치 지표 검사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Inspect network latency, loss and jitter</source>
            <translation>네트워크 대기 시간, 손실 및 지터 검사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Inspect service-edge path</source>
            <translation>서비스 에지 경로 검사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Compare application response</source>
            <translation>애플리케이션 응답 비교</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7028" />
            <source>Export masked journey evidence</source>
            <translation>마스크된 여행 증거 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Stop copying or exporting raw material</source>
            <translation>원자재 복사 또는 수출 중단</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Rotate the affected credential outside this client</source>
            <translation>이 클라이언트 외부에서 영향을 받은 자격 증명을 순환합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Clear in-memory sessions</source>
            <translation>메모리 내 세션 지우기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Review masked audit evidence</source>
            <translation>마스킹된 감사 증거 검토</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Validate least-privilege access</source>
            <translation>최소 권한 액세스 검증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7029" />
            <source>Record containment and recovery</source>
            <translation>기록의 격리 및 복구</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Validate the alert in authoritative security tooling</source>
            <translation>권위 있는 보안 도구로 경고를 검증하세요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Identify users, devices and applications</source>
            <translation>사용자, 장치, 애플리케이션 식별</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Preserve masked evidence</source>
            <translation>은폐된 증거 보존</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Prepare containment changes for independent approval</source>
            <translation>독립적인 승인을 위해 격리 변경 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Track recovery prerequisites</source>
            <translation>트랙 복구 전제조건</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7030" />
            <source>Record lessons learned</source>
            <translation>배운 내용을 기록하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7033" />
            <source>Complete</source>
            <translation>완료</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7033" />
            <source>Pending</source>
            <translation>보류 중</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7034" />
            <source>Recorded in local audit trail</source>
            <translation>현지 감사 추적에 기록됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7034" />
            <source>No completion evidence</source>
            <translation>완료 증거 없음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7045" />
            <source>Select a playbook step first.</source>
            <translation>먼저 플레이북 단계를 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7049" />
            <source>Mark step complete</source>
            <translation>단계 완료로 표시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7049" />
            <source>Record this step as completed in the local audit trail? This does not perform the action or update an authoritative incident.</source>
            <translation>로컬 감사 추적에 이 단계를 완료된 것으로 기록하시겠습니까? 이는 작업을 수행하거나 신뢰할 수 있는 사건을 업데이트하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7060" />
            <source>Describe an administrative or investigation goal first.</source>
            <translation>먼저 관리 또는 조사 목표를 설명하십시오.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7069" />
            <source>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</source>
            <translation>Found {matches} documented match(es); proposed {proposed}, including {writes} write operation(s). Review parameters and documentation before creating a chain.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7075" />
            <source>Smart API planner</source>
            <translation>스마트 API 플래너</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7075" />
            <source>Create a plan with at least one read operation first.</source>
            <translation>먼저 하나 이상의 읽기 작업이 포함된 계획을 만듭니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7077" />
            <source>Planner output copied for review. Validate the chain, supply required path values, and approve it separately before execution.</source>
            <translation>검토를 위해 Planner 출력이 복사되었습니다. 체인을 검증하고 필요한 경로 값을 제공하며 실행 전에 별도로 승인합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Review policy diff</source>
            <translation>정책 차이점 검토</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Run local simulation</source>
            <translation>로컬 시뮬레이션 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Record reviewer approval</source>
            <translation>레코드 검토자 승인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Export Git/Terraform review</source>
            <translation>Git/Terraform 검토 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7097" />
            <source>Apply outside this client only after approval</source>
            <translation>승인 후에만 이 고객 외부에서 신청하십시오.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7099" />
            <source>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</source>
            <translation>Change risk: {risk} · {score}/100 · {blocking} blocking gate(s)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Change reference recorded</source>
            <translation>기록된 변경 참조</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Change owner recorded</source>
            <translation>소유자 변경이 기록되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Independent reviewer recorded</source>
            <translation>독립 리뷰어가 녹음됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Local policy simulation reviewed</source>
            <translation>지역 정책 시뮬레이션 검토</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Rollback artifact prepared</source>
            <translation>롤백 아티팩트 준비됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7102" />
            <source>Local approval recorded</source>
            <translation>현지 승인 기록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Yes</source>
            <translation>예</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>No</source>
            <translation>아니요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Blocked</source>
            <translation>차단됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7104" />
            <source>Optional</source>
            <translation>선택사항</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7118" />
            <source>Enter a reviewer before recording approval.</source>
            <translation>녹음 승인 전 검토자를 입력하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7120" />
            <source>Local approval recorded. External apply remains disabled.</source>
            <translation>현지 승인이 기록되었습니다. 외부 적용은 비활성화된 상태로 유지됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7144" />
            <source>Rollback artifact integrity verified. This does not authorize applying it.</source>
            <translation>롤백 아티팩트 무결성이 확인되었습니다. 이는 적용을 승인하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7145" />
            <source>Rollback verification failed: {reason}</source>
            <translation>Rollback verification failed: {reason}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7155" />
            <source>No comparison baseline</source>
            <translation>비교 기준 없음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7160" />
            <source>{time} · score {score}/100</source>
            <translation>{time} · score {score}/100</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7183" />
            <source>Audit evidence integrity</source>
            <translation>증거 무결성 감사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7183" />
            <source>Review and restore the local hash-linked audit trail.</source>
            <translation>로컬 해시 연결 감사 추적을 검토하고 복원합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7184" />
            <source>Operational evidence available</source>
            <translation>사용 가능한 운영 증거</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7184" />
            <source>Collect or import masked read-only evidence for the selected environment.</source>
            <translation>선택한 환경에 대해 마스킹된 읽기 전용 증거를 수집하거나 가져옵니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7185" />
            <source>API health and anomaly monitoring</source>
            <translation>API 상태 및 이상 모니터링</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7185" />
            <source>Investigate repeated failures, latency regressions, and rate limiting.</source>
            <translation>반복되는 실패, 대기 시간 회귀 및 속도 제한을 조사합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7186" />
            <source>Least-privilege policy baseline</source>
            <translation>최소 권한 정책 기준</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7186" />
            <source>Constrain unconditional allow rules and validate order in Policy Twin.</source>
            <translation>정책 쌍에서 무조건 허용 규칙을 제한하고 순서를 검증합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7187" />
            <source>Reviewed write activity</source>
            <translation>쓰기 활동을 검토했습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7187" />
            <source>Require a recorded review and rollback artifact for write activity.</source>
            <translation>쓰기 활동에 대해 기록된 검토 및 롤백 아티팩트가 필요합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7188" />
            <source>Incident evidence readiness</source>
            <translation>사건 증거 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7188" />
            <source>Prepare and export masked investigation evidence for unresolved failures.</source>
            <translation>해결되지 않은 실패에 대한 숨겨진 조사 증거를 준비하고 내보냅니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7189" />
            <source>Recovery evidence available</source>
            <translation>회복 증거 이용 가능</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7189" />
            <source>Save a policy snapshot or reviewed rollback artifact before change.</source>
            <translation>변경하기 전에 정책 스냅샷 또는 검토된 롤백 아티팩트를 저장하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7203" />
            <source>Pass</source>
            <translation>패스</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7203" />
            <source>Fail</source>
            <translation>실패</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7216" />
            <location filename="../zscaler_api_client.py" line="7273" />
            <location filename="../zscaler_api_client.py" line="7319" />
            <source>Local assurance requires attention</source>
            <translation>현지 보증에는 주의가 필요합니다</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7216" />
            <location filename="../zscaler_api_client.py" line="7273" />
            <location filename="../zscaler_api_client.py" line="7319" />
            <source>No failing controls in the evaluated local scope</source>
            <translation>평가된 로컬 범위에는 실패한 컨트롤이 없습니다.</translation>
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
            <translation>우선순위 조치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7222" />
            <source>Local evidence limitation: validate results against authoritative tenant and governance records.</source>
            <translation>로컬 증거 제한: 신뢰할 수 있는 테넌트 및 거버넌스 기록을 기준으로 결과를 검증합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7226" />
            <source>Now</source>
            <translation>지금</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7227" />
            <source>Assessment {identifier} · {frameworks} · local evidence only, not certification.</source>
            <translation>Assessment {identifier} · {frameworks} · local evidence only, not certification.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7230" />
            <source>Select one environment before saving an assurance baseline.</source>
            <translation>보증 기준선을 저장하기 전에 하나의 환경을 선택하십시오.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7240" />
            <location filename="../zscaler_api_client.py" line="7242" />
            <location filename="../zscaler_api_client.py" line="7259" />
            <location filename="../zscaler_api_client.py" line="7261" />
            <source>Signed evidence</source>
            <translation>서명된 증거</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7240" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>시스템 키체인이 증거 서명 키를 저장할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7242" />
            <source>The protected evidence signing key is invalid. Rotate it in Settings before signing.</source>
            <translation>보호된 증거 서명 키가 잘못되었습니다. 서명하기 전에 설정에서 회전하세요.</translation>
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
            <translation>경영진 보증 설명</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7301" />
            <source>Posture score</source>
            <translation>자세 점수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7302" />
            <source>Local requests</source>
            <translation>현지 요청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7303" />
            <source>Failed requests</source>
            <translation>실패한 요청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7432" />
            <source>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</source>
            <translation>Safe read retry {attempt} of {maximum} in {seconds} second(s)…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7438" />
            <source>Cancellation requested; the current HTTP request will finish and no new chain step will start.</source>
            <translation>취소가 요청되었습니다. 현재 HTTP 요청이 완료되고 새 체인 단계가 시작되지 않습니다.</translation>
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
            <translation>모든 단계가 시작되기 전에 체인이 취소되었습니다. 완료된 결과가 유지되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7486" />
            <source>Run a chain before exporting its masked results.</source>
            <translation>마스크된 결과를 내보내기 전에 체인을 실행하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7510" />
            <source>No baseline (analyze current policy only)</source>
            <translation>기준 없음(현재 정책만 분석)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7536" />
            <source>Unconditional allow</source>
            <translation>무조건 허용</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7536" />
            <source>Shadowed conflict</source>
            <translation>그림자 갈등</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7536" />
            <source>Redundant shadow</source>
            <translation>중복된 그림자</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7536" />
            <source>Overlapping actions</source>
            <translation>겹치는 작업</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7536" />
            <source>Duplicate rule name</source>
            <translation>규칙 이름이 중복되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7538" />
            <source>An unconditional allow rule can expose every later matching scope.</source>
            <translation>무조건 허용 규칙은 이후 일치하는 모든 범위를 노출할 수 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7539" />
            <source>The later rule can never decide because an earlier rule covers all of its matches.</source>
            <translation>이전 규칙이 모든 일치 항목을 다루기 때문에 이후 규칙은 결코 결정할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7540" />
            <source>The rules can match the same context but have different actions; order decides the outcome.</source>
            <translation>규칙은 동일한 컨텍스트와 일치할 수 있지만 작업은 다를 수 있습니다. 순서가 결과를 결정합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7541" />
            <source>Duplicate rule names make reviews, evidence, and rollback ambiguous.</source>
            <translation>규칙 이름이 중복되면 검토, 증거 및 롤백이 모호해집니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7550" />
            <source>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</source>
            <translation>Policy twin: {rules} rule(s), {findings} finding(s), blast radius {score}/100, {changed} changed rule(s) versus baseline.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7557" />
            <source>Request context must be a JSON object.</source>
            <translation>요청 컨텍스트는 JSON 객체여야 합니다.</translation>
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
            <translation>정책 스냅샷을 저장하기 전에 하나의 환경을 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7597" />
            <source>Policy snapshots are limited to 2 MB.</source>
            <translation>정책 스냅샷은 2MB로 제한됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7598" />
            <source>Save policy snapshot</source>
            <translation>정책 스냅샷 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7598" />
            <source>Snapshot name:</source>
            <translation>스냅샷 이름:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7609" />
            <source>Select a saved policy snapshot first.</source>
            <translation>먼저 저장된 정책 스냅샷을 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7615" />
            <source>Delete policy snapshot</source>
            <translation>정책 스냅샷 삭제</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7615" />
            <source>Delete the selected local policy snapshot?</source>
            <translation>선택한 로컬 정책 스냅샷을 삭제하시겠습니까?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7686" />
            <source>Local automation must be an existing absolute path to a non-symlinked .py file no larger than 1 MiB.</source>
            <translation>로컬 자동화는 1MiB 이하의 심볼릭 링크가 아닌 .py 파일에 대한 기존 절대 경로여야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7689" />
            <location filename="../zscaler_api_client.py" line="7853" />
            <source>Webhook endpoints must use HTTPS (or local HTTP) and must not contain credentials in the URL.</source>
            <translation>웹훅 엔드포인트는 HTTPS(또는 로컬 HTTP)를 사용해야 하며 URL에 자격 증명을 포함해서는 안 됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7693" />
            <source>Secure storage</source>
            <translation>안전한 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7693" />
            <source>The system keychain could not save the webhook endpoint. Check the keychain service and try again.</source>
            <translation>시스템 키체인이 웹훅 엔드포인트를 저장할 수 없습니다. 키체인 서비스를 확인하고 다시 시도하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7709" />
            <source>Connectivity test</source>
            <translation>연결 테스트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7709" />
            <source>Alert snapshot</source>
            <translation>알림 스냅샷</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7710" />
            <source>Started</source>
            <translation>시작됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7470" />
            <location filename="../zscaler_api_client.py" line="7710" />
            <source>Succeeded</source>
            <translation>성공함</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6499" />
            <source>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</source>
            <translation>Run a reviewed sequence against the active authenticated environment. Chains are limited to 20 steps, stay on the selected product host, and can reference earlier JSON values with {{stepId.path.0.value}}. Every run requires approval.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6502" />
            <source>A JSON list of API requests. Relative paths use the active product host; references can use only completed step IDs.</source>
            <translation>API 요청의 JSON 목록입니다. 상대 경로는 활성 제품 호스트를 사용합니다. 참조는 완료된 단계 ID만 사용할 수 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6421" />
            <location filename="../zscaler_api_client.py" line="6505" />
            <source>Step</source>
            <translation>단계</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6405" />
            <location filename="../zscaler_api_client.py" line="6428" />
            <location filename="../zscaler_api_client.py" line="6505" />
            <source>Method</source>
            <translation>방법</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6505" />
            <source>Records</source>
            <translation>기록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6405" />
            <location filename="../zscaler_api_client.py" line="6505" />
            <source>Duration</source>
            <translation>기간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6452" />
            <location filename="../zscaler_api_client.py" line="7470" />
            <location filename="../zscaler_api_client.py" line="7710" />
            <source>Failed</source>
            <translation>실패</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7743" />
            <source>All files (*)</source>
            <translation>모든 파일(*)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7746" />
            <source>Exported {count} masked local event(s) as {format}. No data was sent automatically.</source>
            <translation>Exported {count} masked local event(s) as {format}. No data was sent automatically.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7762" />
            <source>Created a non-executable Terraform review handoff. Run terraformer and terraform plan only after independent review; this client never applies it.</source>
            <translation>실행 불가능한 Terraform 검토 핸드오프를 만들었습니다. 독립적인 검토 후에만 Terraformer 및 Terraform 계획을 실행하십시오. 이 클라이언트는 이를 적용하지 않습니다.</translation>
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
            <translation>로컬 자동화</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7788" />
            <source>Read-only mode blocks local automation.</source>
            <translation>읽기 전용 모드는 로컬 자동화를 차단합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7791" />
            <source>Configure a valid local Python automation in Governance first.</source>
            <translation>먼저 거버넌스에서 유효한 로컬 Python 자동화를 구성하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7793" />
            <source>Local automation is already running.</source>
            <translation>로컬 자동화가 이미 실행 중입니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7799" />
            <source>Run the reviewed Python file with masked local posture and alert data? The process receives no API credentials.</source>
            <translation>마스크된 로컬 상태 및 경고 데이터를 사용하여 검토된 Python 파일을 실행하시겠습니까? 프로세스는 API 자격 증명을 받지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7827" />
            <source>Local automation exceeded the 15-second limit and was stopped.</source>
            <translation>로컬 자동화가 15초 제한을 초과하여 중지되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7837" />
            <source>Local automation completed with exit code {code}.</source>
            <translation>Local automation completed with exit code {code}.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7842" />
            <source>Local automation failed to start.</source>
            <translation>로컬 자동화를 시작하지 못했습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7848" />
            <source>Send the current masked local alert snapshot to the configured webhook endpoint?</source>
            <translation>현재 마스킹된 로컬 알림 스냅샷을 구성된 웹훅 엔드포인트로 보내시겠습니까?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7854" />
            <location filename="../zscaler_api_client.py" line="7856" />
            <location filename="../zscaler_api_client.py" line="7860" />
            <location filename="../zscaler_api_client.py" line="7880" />
            <location filename="../zscaler_api_client.py" line="7887" />
            <source>Webhook delivery</source>
            <translation>웹훅 전달</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7856" />
            <source>A webhook delivery is already running.</source>
            <translation>웹훅 전달이 이미 실행 중입니다.</translation>
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
            <translation>배경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7916" />
            <source>App only</source>
            <translation>앱 전용</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7917" />
            <source>Paused</source>
            <translation>일시중지됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7929" />
            <source>Select a scheduled report first.</source>
            <translation>먼저 예약된 보고서를 선택하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7947" />
            <source>The scheduled report was generated locally.</source>
            <translation>예약된 보고서가 로컬에서 생성되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7949" />
            <source>The scheduled report could not be generated. Check its output folder and the audit trail.</source>
            <translation>예약된 보고서를 생성할 수 없습니다. 출력 폴더와 감사 추적을 확인하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7963" />
            <source>The operating-system schedule could not be updated. No state was changed.</source>
            <translation>운영 체제 일정을 업데이트할 수 없습니다. 상태가 변경되지 않았습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7979" />
            <source>The report is paused and cannot generate output, but the operating-system job cleanup needs manual review.</source>
            <translation>보고서가 일시 중지되어 출력을 생성할 수 없지만 운영 체제 작업 정리를 수동으로 검토해야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7985" />
            <source>Remove the selected scheduled report?</source>
            <translation>선택한 예약 보고서를 삭제하시겠습니까?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7998" />
            <source>The report was removed, but the operating-system job could not be removed. It can no longer generate a report because its schedule ID is no longer active.</source>
            <translation>보고서가 제거되었지만 운영 체제 작업을 제거할 수 없습니다. 일정 ID가 더 이상 활성화되지 않으므로 더 이상 보고서를 생성할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8001" />
            <source>Report name:</source>
            <translation>보고서 이름:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8014" />
            <source>Run this report even when ZS API Client is closed? This creates a user-level operating-system schedule and requires no administrator privileges.</source>
            <translation>ZS API 클라이언트가 닫힌 경우에도 이 보고서를 실행하시겠습니까? 이렇게 하면 사용자 수준 운영 체제 일정이 생성되며 관리자 권한이 필요하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8028" />
            <source>The operating-system schedule could not be created. The report was not scheduled.</source>
            <translation>운영 체제 일정을 만들 수 없습니다. 보고서가 예약되지 않았습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8036" />
            <source>Scheduled report saved. It will run in the background even when the application is closed.</source>
            <translation>예약된 보고서가 저장되었습니다. 애플리케이션이 종료되어도 백그라운드에서 실행됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8036" />
            <source>Scheduled report saved. It will run locally while the application is open.</source>
            <translation>예약된 보고서가 저장되었습니다. 애플리케이션이 열려 있는 동안 로컬로 실행됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7901" />
            <location filename="../zscaler_api_client.py" line="8004" />
            <source>Hourly</source>
            <translation>시간별</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7901" />
            <location filename="../zscaler_api_client.py" line="8004" />
            <source>Daily</source>
            <translation>매일</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7901" />
            <location filename="../zscaler_api_client.py" line="8004" />
            <source>Weekly</source>
            <translation>주간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8005" />
            <source>Report cadence:</source>
            <translation>보고서 주기:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8008" />
            <source>Choose report output folder</source>
            <translation>보고서 출력 폴더 선택</translation>
        </message>
        <message>
            <source>Scheduled report saved. Reports run locally while the application is open.</source>
            <translation type="vanished">예약된 보고서가 저장되었습니다. 보고서는 애플리케이션이 열려 있는 동안 로컬로 실행됩니다.</translation>
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
            <translation>유효</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7271" />
            <location filename="../zscaler_api_client.py" line="7304" />
            <source>Needs review</source>
            <translation>검토 필요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7271" />
            <source>Incident signals</source>
            <translation>사고 신호</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7275" />
            <source>Executive actions</source>
            <translation>행정 조치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7275" />
            <source>Review high-risk findings and approval records.</source>
            <translation>고위험 조사 결과 및 승인 기록을 검토합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7275" />
            <source>Use the Security Posture and Change Control workspaces for evidence.</source>
            <translation>증거를 위해 보안 상태 및 변경 제어 작업 공간을 사용하십시오.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7277" />
            <source>SOC next steps</source>
            <translation>SOC의 다음 단계</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7277" />
            <source>Use Incident Investigation to prepare a review chain.</source>
            <translation>사고 조사를 사용하여 검토 체인을 준비합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7277" />
            <source>Export masked evidence before escalation.</source>
            <translation>에스컬레이션하기 전에 마스킹된 증거를 내보냅니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7279" />
            <source>Operations next steps</source>
            <translation>운영 다음 단계</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7279" />
            <source>Review slow responses and API failures.</source>
            <translation>느린 응답 및 API 오류를 검토하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7279" />
            <source>Confirm rate limits and service health with read-only queries.</source>
            <translation>읽기 전용 쿼리로 속도 제한과 서비스 상태를 확인하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7379" />
            <source>Configure a host for the active product before running a chain.</source>
            <translation>체인을 실행하기 전에 활성 제품에 대한 호스트를 구성하십시오.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7389" />
            <source>Each chain step must stay on the active product host.</source>
            <translation>각 체인 단계는 활성 제품 호스트에 있어야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7405" />
            <source>Fix the chain validation errors before running it.</source>
            <translation>실행하기 전에 체인 유효성 검사 오류를 수정하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7409" />
            <source>Read-only mode blocks write requests. Change the local role in Operations Center to continue.</source>
            <translation>읽기 전용 모드는 쓰기 요청을 차단합니다. 계속하려면 Operations Center에서 로컬 역할을 변경하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7411" />
            <source>Authenticate the active product before running a chain.</source>
            <translation>체인을 실행하기 전에 활성 제품을 인증하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7412" />
            <source>Run {count} API step(s) sequentially against the active environment?</source>
            <translation>Run {count} API step(s) sequentially against the active environment?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7414" />
            <source>The chain contains write operations; review and approve before continuing.</source>
            <translation>체인에는 쓰기 작업이 포함되어 있습니다. 계속하기 전에 검토하고 승인하세요.</translation>
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
            <translation type="vanished">측정항목은 로컬이며 자격 증명을 포함하지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7649" />
            <source>Policy export</source>
            <translation>정책 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7650" />
            <source>Export policy</source>
            <translation>수출 정책</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7659" />
            <source>Compliance</source>
            <translation>규정 준수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7683" />
            <source>Alert threshold must be a positive integer.</source>
            <translation>경고 임계값은 양의 정수여야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7697" />
            <source>Governance settings saved.</source>
            <translation>거버넌스 설정이 저장되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>Use OneAPI or legacy clients locally</source>
            <translation>OneAPI 또는 레거시 클라이언트를 로컬에서 사용</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>AI-assisted, tool-scoped exploration</source>
            <translation>AI 지원, 도구 범위 탐색</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7701" />
            <source>Export existing ZIA/ZPA configuration to Terraform</source>
            <translation>기존 ZIA/ZPA 구성을 Terraform으로 내보내기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7704" />
            <source>Available</source>
            <translation>가능</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7704" />
            <source>Not installed</source>
            <translation>설치되지 않음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7736" />
            <source>Prepare an integration first.</source>
            <translation>먼저 통합을 준비하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6701" />
            <location filename="../zscaler_api_client.py" line="7739" />
            <source>Copied to clipboard</source>
            <translation>클립보드에 복사됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7481" />
            <source>The chain stopped after the first failed step.</source>
            <translation>첫 번째 단계 실패 후 체인이 중지되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7633" />
            <location filename="../zscaler_api_client.py" line="7917" />
            <source>Enabled</source>
            <translation>활성화됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7633" />
            <source>Disabled</source>
            <translation>장애인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7639" />
            <source>Allow rule has no conditions</source>
            <translation>허용 규칙에 조건이 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7639" />
            <source>Rule is disabled</source>
            <translation>규칙이 비활성화되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7640" />
            <source>Rule name is duplicated</source>
            <translation>규칙 이름이 중복되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7640" />
            <source>Rule action is unspecified</source>
            <translation>규칙 작업이 지정되지 않았습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7669" />
            <source>Rules evaluated</source>
            <translation>평가된 규칙</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7669" />
            <source>Matched rule</source>
            <translation>일치하는 규칙</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7672" />
            <source>Matched</source>
            <translation>일치함</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7672" />
            <source>Not matched</source>
            <translation>일치하지 않음</translation>
        </message>
        <message>
            <source>Webhook test</source>
            <translation type="vanished">웹훅 테스트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7853" />
            <source>Configure a webhook endpoint in Governance first.</source>
            <translation>먼저 거버넌스에서 웹훅 엔드포인트를 구성하세요.</translation>
        </message>
        <message>
            <source>Webhook endpoints must use HTTPS unless they are local.</source>
            <translation type="vanished">웹훅 엔드포인트는 로컬이 아닌 이상 HTTPS를 사용해야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="7845" />
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
            <translation>예정된 보고서</translation>
        </message>
        <message>
            <source>Report name and cadence:</source>
            <translation type="vanished">보고서 이름 및 흐름:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8040" />
            <source>Save support bundle</source>
            <translation>지원 번들 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8045" />
            <source>Support bundle</source>
            <translation>지원 번들</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8045" />
            <source>A redacted support bundle was created.</source>
            <translation>수정된 지원 번들이 생성되었습니다.</translation>
        </message>
    </context>
    <context>
        <name>PacWorkspaceDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="8112" />
            <location filename="../zscaler_api_client.py" line="8437" />
            <source>PAC Workspace</source>
            <translation>PAC 작업공간</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8116" />
            <source>Create and verify PAC files locally. API operations are prepared in the request editor and are never sent or deployed automatically.</source>
            <translation>PAC 파일을 로컬에서 생성하고 확인합니다. API 작업은 요청 편집기에서 준비되며 자동으로 전송되거나 배포되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8121" />
            <source>PAC experience:</source>
            <translation>PAC 경험:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8123" />
            <source>Guided (recommended)</source>
            <translation>안내됨(권장)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8124" />
            <source>Advanced</source>
            <translation>고급</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8141" />
            <source>PAC name:</source>
            <translation>PAC 이름:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8142" />
            <source>Change note:</source>
            <translation>변경 사항:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8143" />
            <source>Hosted PAC URL (optional for ZCC):</source>
            <translation>호스팅된 PAC URL(ZCC의 경우 선택 사항):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8144" />
            <source>Existing ZIA PAC ID (for lifecycle actions):</source>
            <translation>기존 ZIA PAC ID(수명 주기 작업용):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8145" />
            <source>ZIA PAC version:</source>
            <translation>ZIA PAC 버전:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8146" />
            <source>ZIA version action:</source>
            <translation>ZIA 버전 작업:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8153" />
            <source>Start with a safe baseline. Enter only internal destinations that must bypass Zscaler; all other traffic uses the selected gateway and failover.</source>
            <translation>안전한 기준선부터 시작하세요. Zscaler를 우회해야 하는 내부 대상만 입력하세요. 다른 모든 트래픽은 선택한 게이트웨이와 장애 조치를 사용합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8161" />
            <source>Direct-bypass host patterns (one per line):</source>
            <translation>직접 우회 호스트 패턴(한 줄에 하나씩):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8162" />
            <source>Primary gateway:</source>
            <translation>기본 게이트웨이:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8163" />
            <source>Secondary gateway:</source>
            <translation>보조 게이트웨이:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8166" />
            <source>Create guided PAC</source>
            <translation>안내형 PAC 생성</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8167" />
            <source>Load safe example</source>
            <translation>로드 세이프 예시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8170" />
            <source>Generated PAC preview (read-only):</source>
            <translation>Generated PAC preview (read-only):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8177" />
            <source>Guided setup</source>
            <translation>안내 설정</translation>
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
            <translation>PAC 로드…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8189" />
            <source>Save PAC…</source>
            <translation>PAC 저장…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8190" />
            <source>Save local draft</source>
            <translation>로컬 초안 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8193" />
            <source>Author</source>
            <translation>작성자</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8196" />
            <source>Variables (JSON). Standard Zscaler names: </source>
            <translation>변수(JSON). 표준 Zscaler 이름: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8200" />
            <source>Test URL:</source>
            <translation>테스트 URL:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8202" />
            <source>Apply variables</source>
            <translation>변수 적용</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8203" />
            <source>Run static verification</source>
            <translation>정적 검증 실행</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8204" />
            <source>Preview decision</source>
            <translation>미리보기 결정</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8207" />
            <source>Verify</source>
            <translation>확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8210" />
            <source>PAC reference and review help. The verifier never executes JavaScript; validate in ZIA and test a pilot group before deployment.</source>
            <translation>PAC 참조 및 검토 도움말. 검증자는 절대로 JavaScript를 실행하지 않습니다. ZIA에서 검증하고 배포 전에 파일럿 그룹을 테스트합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8211" />
            <source>Variable or function</source>
            <translation>변수 또는 함수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8211" />
            <source>Purpose / guidance</source>
            <translation>목적 / 안내</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8219" />
            <source>Roll out in stages: validate, test representative URLs, stage to a small pilot group, then deploy. Prefer host-pattern checks; avoid DNS helpers in Client Connector PAC files where possible.</source>
            <translation>단계별 출시: 대표 URL을 검증하고 테스트하고 소규모 파일럿 그룹으로 단계화한 후 배포합니다. 호스트 패턴 검사를 선호합니다. 가능하면 클라이언트 커넥터 PAC 파일에 DNS 도우미를 사용하지 마세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8221" />
            <source>Help and reference</source>
            <translation>도움말 및 참조</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8224" />
            <source>Map supplied ZIA PAC metadata to ZCC forwarding-profile actions. Matches use hosted PAC URLs or an inline PAC content fingerprint; names alone are never treated as a match.</source>
            <translation>제공된 ZIA PAC 메타데이터를 ZCC 전달 프로필 작업에 매핑합니다. 일치 항목은 호스팅된 PAC URL 또는 인라인 PAC 콘텐츠 지문을 사용합니다. 이름만으로는 결코 일치 항목으로 처리되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8227" />
            <source>ZIA PAC list JSON</source>
            <translation>ZIA PAC 목록 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8229" />
            <source>ZCC forwarding-profile list JSON</source>
            <translation>ZCC 전달 프로필 목록 JSON</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8233" />
            <source>Build PAC mappings</source>
            <translation>PAC 매핑 구축</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8234" />
            <location filename="../zscaler_api_client.py" line="8269" />
            <source>Prepare ZIA PAC list</source>
            <translation>ZIA PAC 목록 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8235" />
            <location filename="../zscaler_api_client.py" line="8261" />
            <source>Prepare ZCC profile list</source>
            <translation>ZCC 프로필 목록 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>ZCC profile</source>
            <translation>ZCC 프로필</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>Action / network</source>
            <translation>액션/네트워크</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>PAC type</source>
            <translation>PAC 유형</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>PAC reference</source>
            <translation>PAC 참조</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>ZIA status</source>
            <translation>ZIA 상태</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>Mapping result</source>
            <translation>매핑 결과</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8238" />
            <source>Profile ID</source>
            <translation>프로필 ID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8241" />
            <location filename="../zscaler_api_client.py" line="8350" />
            <source>PAC mappings</source>
            <translation>PAC 매핑</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8244" />
            <source>Search the bundled Zscaler Configuration Center index of Cloud Enforcement Node ranges, proxy/VPN hostnames, GRE and extranet virtual IP addresses. The PAC editor shows a help balloon when a line references an indexed endpoint.</source>
            <translation>Cloud Enforcement Node 범위, 프록시/VPN 호스트 이름, GRE 및 엑스트라넷 가상 IP 주소의 번들 Zscaler Configuration Center 색인을 검색하세요. PAC 편집기는 라인이 색인화된 끝점을 참조할 때 도움말 풍선을 표시합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8248" />
            <source>Search city, CIDR, hostname, GRE or VPN address</source>
            <translation>도시, CIDR, 호스트 이름, GRE 또는 VPN 주소 검색</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8249" />
            <source>Search data centers</source>
            <translation>데이터 센터 검색</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>Continent</source>
            <translation>대륙</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>Data center</source>
            <translation>데이터 센터</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>CIDR range</source>
            <translation>CIDR 범위</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>Proxy hostname</source>
            <translation>프록시 호스트 이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>VPN hostname</source>
            <translation>VPN 호스트 이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>GRE VIP</source>
            <translation>GRE VIP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>Extranet VIP</source>
            <translation>엑스트라넷 VIP</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8252" />
            <source>Coordinates</source>
            <translation>좌표</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8255" />
            <source>Zscaler data centers</source>
            <translation>Zscaler 데이터 센터</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8258" />
            <source>Paste a forwarding profile returned by ZCC, or first prepare the profile-list request. Existing profile fields are preserved when PAC fields are updated.</source>
            <translation>ZCC에서 반환된 전달 프로필을 붙여넣거나 먼저 프로필 목록 요청을 준비하세요. PAC 필드가 업데이트되면 기존 프로필 필드가 유지됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8262" />
            <source>Prepare ZCC update</source>
            <translation>ZCC 업데이트 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8264" />
            <source>ZCC / Mobile Portal</source>
            <translation>ZCC / 모바일 포털</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8267" />
            <source>Prepare ZIA validation</source>
            <translation>ZIA 검증 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8268" />
            <source>Prepare ZIA hosted PAC upload</source>
            <translation>ZIA 호스팅 PAC 업로드 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8270" />
            <source>Prepare ZIA version action</source>
            <translation>ZIA 버전 작업 준비</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8271" />
            <source>Close</source>
            <translation>닫기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8290" />
            <source>Guided mode creates a minimal, reviewable PAC. Switch to Advanced to edit JavaScript, update ZCC profiles, or prepare ZIA lifecycle actions.</source>
            <translation>안내 모드는 최소한의 검토 가능한 PAC를 생성합니다. JavaScript를 편집하거나, ZCC 프로필을 업데이트하거나, ZIA 수명 주기 작업을 준비하려면 고급으로 전환하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8291" />
            <source>Advanced mode exposes the PAC editor, ZCC profile patching, and ZIA version lifecycle actions. Every write remains explicit.</source>
            <translation>고급 모드에서는 PAC 편집기, ZCC 프로필 패치 및 ZIA 버전 수명 주기 작업을 노출합니다. 모든 쓰기는 명시적으로 유지됩니다.</translation>
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
            <translation>가이드 PAC</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8342" />
            <source>Guided PAC created. Review the verification findings, test a URL, then prepare ZIA validation.</source>
            <translation>가이드 PAC가 생성되었습니다. 검증 결과를 검토하고 URL을 테스트한 후 ZIA 검증을 준비하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8350" />
            <source>Both mapping inputs must be valid JSON: </source>
            <translation>두 매핑 입력 모두 유효한 JSON이어야 합니다. </translation>
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
            <translation>PAC 변수</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8389" />
            <source>Variables must be valid JSON: </source>
            <translation>변수는 유효한 JSON이어야 합니다. </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8391" />
            <source>Variables must be a JSON object with text or numeric values.</source>
            <translation>변수는 텍스트 또는 숫자 값이 포함된 JSON 개체여야 합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8400" />
            <source>none</source>
            <translation>없음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8401" />
            <source>Detected variables: </source>
            <translation>감지된 변수: </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8405" />
            <source>Improvement tips:</source>
            <translation>개선 팁:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8417" />
            <source>Variables applied.</source>
            <translation>변수가 적용되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8417" />
            <source>Variables applied; missing values were retained: </source>
            <translation>변수가 적용되었습니다. 누락된 값이 유지되었습니다. </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8422" />
            <source>Preview</source>
            <translation>미리보기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8437" />
            <source>PAC draft saved locally.</source>
            <translation>PAC 초안이 로컬에 저장되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8440" />
            <location filename="../zscaler_api_client.py" line="8445" />
            <source>Load PAC</source>
            <translation>PAC 로드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8448" />
            <location filename="../zscaler_api_client.py" line="8453" />
            <source>Save PAC</source>
            <translation>PAC 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8461" />
            <source>PAC request prepared</source>
            <translation>PAC 요청 준비됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8461" />
            <source>The request was placed in the main editor. Review it and explicitly select Send Request; no deployment action has been performed.</source>
            <translation>요청이 메인 편집기에 배치되었습니다. 이를 검토하고 요청 보내기를 명시적으로 선택하십시오. 배포 작업이 수행되지 않았습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8466" />
            <source>PAC verification</source>
            <translation>PAC 검증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8466" />
            <source>Resolve PAC errors before preparing an API write.</source>
            <translation>API 쓰기를 준비하기 전에 PAC 오류를 해결하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8482" />
            <source>ZIA PAC lifecycle</source>
            <translation>ZIA PAC 수명주기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8482" />
            <source>Enter a numeric PAC ID and version before preparing a lifecycle action.</source>
            <translation>수명 주기 작업을 준비하기 전에 숫자로 된 PAC ID와 버전을 입력하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8496" />
            <location filename="../zscaler_api_client.py" line="8498" />
            <source>ZCC forwarding profile</source>
            <translation>ZCC 전달 프로필</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8496" />
            <source>Profile must be valid JSON: </source>
            <translation>프로필은 유효한 JSON이어야 합니다. </translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="8498" />
            <source>Paste one ZCC forwarding profile object with its id before preparing an update.</source>
            <translation>업데이트를 준비하기 전에 하나의 ZCC 전달 프로필 객체를 해당 ID와 함께 붙여넣으세요.</translation>
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
            <translation>응답 드리프트 비교</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6057" />
            <source>Compare the active masked response with a local ZS API Exchange baseline. Matching records are aligned by id, UUID, resourceId, key, or name. No API request is sent.</source>
            <translation>활성 마스킹된 응답을 로컬 ZS API Exchange 기준과 비교합니다. 일치하는 레코드는 ID, UUID, ResourceId, 키 또는 이름을 기준으로 정렬됩니다. API 요청이 전송되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6060" />
            <source>Baseline:</source>
            <translation>기준:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6061" />
            <source>Choose a masked response exchange file</source>
            <translation>마스크된 응답 교환 파일 선택</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6062" />
            <source>Open baseline…</source>
            <translation>기준선 열기…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6065" />
            <source>Ignore volatile fields:</source>
            <translation>휘발성 필드를 무시합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6067" />
            <source>Comma-separated field names ignored at every JSON depth. Secrets are always masked independently.</source>
            <translation>모든 JSON 깊이에서 쉼표로 구분된 필드 이름이 무시됩니다. 비밀은 항상 독립적으로 마스킹됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6068" />
            <source>Compare responses</source>
            <translation>응답 비교</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6070" />
            <source>Open a baseline to calculate drift.</source>
            <translation>드리프트를 계산하려면 기준선을 엽니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>Impact</source>
            <translation>영향</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>Change</source>
            <translation>변경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>JSON path</source>
            <translation>JSON 경로</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>Identity</source>
            <translation>아이덴티티</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>Baseline value</source>
            <translation>기준값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6073" />
            <source>Current value</source>
            <translation>현재 가치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6077" />
            <source>Export masked drift…</source>
            <translation>마스킹된 드리프트 내보내기…</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6078" />
            <source>Close</source>
            <translation>닫기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6087" />
            <location filename="../zscaler_api_client.py" line="6092" />
            <source>Open response baseline</source>
            <translation>개방형 응답 기준</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6115" />
            <source>Open a baseline response exchange first.</source>
            <translation>먼저 기본 응답 교환을 엽니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6122" />
            <source>No drift found in the compared scope.</source>
            <translation>비교된 범위에서 드리프트가 발견되지 않았습니다.</translation>
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
            <translation>추가됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6129" />
            <source>Removed</source>
            <translation>삭제됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6129" />
            <source>Changed</source>
            <translation>변경됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6129" />
            <source>High impact</source>
            <translation>높은 영향</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="6145" />
            <source>Export masked drift</source>
            <translation>마스킹된 드리프트 내보내기</translation>
        </message>
    </context>
    <context>
        <name>SettingsDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4626" />
            <source>Settings</source>
            <translation>설정</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4632" />
            <source>Basic</source>
            <translation>기본</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4635" />
            <source>Interface mode:</source>
            <translation>인터페이스 모드:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4652" />
            <source>ZIA (Zscaler Internet Access)</source>
            <translation>ZIA(Zscaler 인터넷 액세스)</translation>
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
            <translation>활성화됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4686" />
            <source>ZPA (Zscaler Private Access)</source>
            <translation>ZPA(Zscaler 개인 액세스)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4718" />
            <source>ZDX (Zscaler Digital Experience)</source>
            <translation>ZDX(Zscaler 디지털 경험)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4752" />
            <source>ZCC (Client Connector)</source>
            <translation>ZCC(클라이언트 커넥터)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4780" />
            <source>OneAPI (Unified v3 Framework)</source>
            <translation>OneAPI(통합 v3 프레임워크)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4817" />
            <source>ZIdentity (Identity &amp; Access)</source>
            <translation>ZIdentity(ID 및 액세스)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4844" />
            <source>ZTW (Zero Trust Workloads)</source>
            <translation>ZTW(제로 트러스트 워크로드)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4871" />
            <source>ZWA (Workflow Automation)</source>
            <translation>ZWA(워크플로우 자동화)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4898" />
            <source>EASM (Attack Surface Management)</source>
            <translation>EASM(공격 표면 관리)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4930" />
            <location filename="../zscaler_api_client.py" line="5205" />
            <source>Credentials</source>
            <translation>자격 증명</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4937" />
            <source>Network</source>
            <translation>네트워크</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4945" />
            <source>Request Timeout (seconds):</source>
            <translation>요청 시간 초과(초):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4953" />
            <location filename="../zscaler_api_client.py" line="4969" />
            <location filename="../zscaler_api_client.py" line="5017" />
            <location filename="../zscaler_api_client.py" line="5023" />
            <location filename="../zscaler_api_client.py" line="5041" />
            <location filename="../zscaler_api_client.py" line="5065" />
            <source>Disabled</source>
            <translation>장애인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4970" />
            <source>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</source>
            <translation>&lt;small&gt;&lt;i&gt;⚠️ Only disable for testing&lt;/i&gt;&lt;/small&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4975" />
            <source>SSL Verification:</source>
            <translation>SSL 확인:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4980" />
            <source>Proxy</source>
            <translation>프록시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4986" />
            <source>No Proxy</source>
            <translation>프록시 없음</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4986" />
            <source>System Proxy</source>
            <translation>시스템 프록시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4986" />
            <source>Manual</source>
            <translation>매뉴얼</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4988" />
            <source>Proxy Mode:</source>
            <translation>프록시 모드:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4992" />
            <source>Proxy Host:</source>
            <translation>프록시 호스트:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4997" />
            <source>Proxy Port:</source>
            <translation>프록시 포트:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5000" />
            <location filename="../zscaler_api_client.py" line="5005" />
            <source>Optional</source>
            <translation>선택사항</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5001" />
            <source>Proxy Username:</source>
            <translation>프록시 사용자 이름:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5006" />
            <source>Proxy Password:</source>
            <translation>프록시 비밀번호:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5011" />
            <source>Behavior</source>
            <translation>행동</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5018" />
            <source>Auto-authenticate on startup:</source>
            <translation>시작 시 자동 인증:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5024" />
            <source>Save request history:</source>
            <translation>요청 기록 저장:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5030" />
            <source>History limit:</source>
            <translation>기록 한도:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5036" />
            <source>Default API:</source>
            <translation>기본 API:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5042" />
            <source>Check for updates on startup:</source>
            <translation>시작 시 업데이트를 확인하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4633" />
            <location filename="../zscaler_api_client.py" line="5047" />
            <source>Advanced</source>
            <translation>고급</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4742" />
            <source>API version:</source>
            <translation>API 버전:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4950" />
            <source>Maximum upload/download (MB):</source>
            <translation>최대 업로드/다운로드(MB):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4954" />
            <source>Retry only GET, HEAD, and OPTIONS after transient network errors or HTTP 408, 429, 502, 503, and 504. Write requests are never retried automatically.</source>
            <translation>일시적인 네트워크 오류 또는 HTTP 408, 429, 502, 503 및 504 후에는 GET, HEAD 및 OPTIONS만 다시 시도하십시오. 쓰기 요청은 자동으로 다시 시도되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4955" />
            <source>Retry safe reads:</source>
            <translation>안전 읽기 재시도:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4959" />
            <source>Maximum read retries:</source>
            <translation>최대 읽기 재시도 횟수:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4963" />
            <source>Maximum seconds to honor from Retry-After; shorter exponential backoff is used when the server omits it.</source>
            <translation>Retry-After에서 적용되는 최대 시간(초)입니다. 서버가 이를 생략하는 경우 더 짧은 지수 백오프가 사용됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4964" />
            <source>Maximum retry wait (seconds):</source>
            <translation>최대 재시도 대기 시간(초):</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5053" />
            <source>Response Display</source>
            <translation>응답 표시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5060" />
            <source>JSON Indentation:</source>
            <translation>JSON 들여쓰기:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5066" />
            <source>Word Wrap:</source>
            <translation>단어 줄 바꿈:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5072" />
            <source>Font Size:</source>
            <translation>글꼴 크기:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5077" />
            <source>Light</source>
            <translation>빛</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5077" />
            <source>Dark</source>
            <translation>어둠</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5077" />
            <source>System</source>
            <translation>시스템</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5078" />
            <source>Theme:</source>
            <translation>테마:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5083" />
            <source>Display</source>
            <translation>디스플레이</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5088" />
            <location filename="../zscaler_api_client.py" line="5123" />
            <location filename="../zscaler_api_client.py" line="5200" />
            <location filename="../zscaler_api_client.py" line="5205" />
            <source>Privacy</source>
            <translation>개인정보 보호</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5091" />
            <source>Secrets only (identifiers visible)</source>
            <translation>비밀만(식별자 표시)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5092" />
            <source>Obfuscate exports and external integrations (recommended)</source>
            <translation>난독화 내보내기 및 외부 통합(권장)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5093" />
            <source>Obfuscate exports, integrations, and on-screen data</source>
            <translation>내보내기, 통합 및 화면 데이터를 난독화합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5095" />
            <source>Identifier obfuscation:</source>
            <translation>식별자 난독화:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5096" />
            <source>Credentials and authentication material are always masked. Identifier pseudonyms are stable until the local pseudonym key is rotated; no original-to-pseudonym mapping is stored.</source>
            <translation>자격 증명 및 인증 자료는 항상 마스크됩니다. 식별자 가명은 로컬 가명 키가 교체될 때까지 안정적입니다. 원본-가명 매핑은 저장되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5098" />
            <source>Usernames, display names, and email addresses</source>
            <translation>사용자 이름, 표시 이름, 이메일 주소</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5099" />
            <source>IPv4 and IPv6 addresses</source>
            <translation>IPv4 및 IPv6 주소</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5100" />
            <source>Hostnames, domains, and URL hosts</source>
            <translation>호스트 이름, 도메인 및 URL 호스트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5101" />
            <source>Tenant, customer, organization, and environment names</source>
            <translation>테넌트, 고객, 조직 및 환경 이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5102" />
            <source>Object IDs, UUIDs, GUIDs, and client identifiers</source>
            <translation>개체 ID, UUID, GUID 및 클라이언트 식별자</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5103" />
            <source>Policy, application, group, location, and resource names</source>
            <translation>정책, 애플리케이션, 그룹, 위치 및 리소스 이름</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5110" />
            <source>Rotate local pseudonym key</source>
            <translation>로컬 가명 키 순환</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5111" />
            <source>Creates new pseudonyms for future views and exports. Existing files are not modified.</source>
            <translation>향후 보기 및 내보내기를 위해 새로운 가명을 만듭니다. 기존 파일은 수정되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5114" />
            <location filename="../zscaler_api_client.py" line="5236" />
            <location filename="../zscaler_api_client.py" line="5242" />
            <source>Rotate evidence signing key</source>
            <translation>증거 서명 키 순환</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5115" />
            <source>Creates a new Ed25519 key in the system keychain. Existing signed packages remain verifiable with their embedded public keys.</source>
            <translation>시스템 키체인에 새로운 Ed25519 키를 생성합니다. 기존의 서명된 패키지는 내장된 공개 키를 통해 계속해서 검증될 수 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5118" />
            <location filename="../zscaler_api_client.py" line="5200" />
            <source>Obfuscation preview</source>
            <translation>난독화 미리보기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5120" />
            <source>Preview of exported or externally shared data using synthetic examples:</source>
            <translation>합성 예제를 사용하여 내보냈거나 외부에 공유된 데이터 미리보기:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5128" />
            <location filename="../zscaler_api_client.py" line="5167" />
            <location filename="../zscaler_api_client.py" line="5200" />
            <location filename="../zscaler_api_client.py" line="5205" />
            <source>Language</source>
            <translation>언어</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5131" />
            <source>System default</source>
            <translation>시스템 기본값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5134" />
            <source>Application language:</source>
            <translation>응용 언어:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5135" />
            <source>System default follows your operating system language. Restart after saving to apply a change.</source>
            <translation>시스템 기본값은 운영 체제 언어를 따릅니다. 변경 사항을 적용하려면 저장 후 다시 시작하세요.</translation>
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
            <translation>지역 카탈로그 도우미</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5142" />
            <source>OpenAI-compatible cloud</source>
            <translation>OpenAI 호환 클라우드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5143" />
            <source>Local OpenAI-compatible server</source>
            <translation>로컬 OpenAI 호환 서버</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5144" />
            <source>AI provider:</source>
            <translation>AI 제공업체:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5147" />
            <source>AI endpoint:</source>
            <translation>AI 엔드포인트:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5149" />
            <source>Model:</source>
            <translation>모델:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5152" />
            <source>Stored securely in your system keychain</source>
            <translation>시스템 키체인에 안전하게 저장됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5153" />
            <source>API key:</source>
            <translation>API 키:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5154" />
            <source>Allow this app to send the masked question and catalog metadata to an external AI service</source>
            <translation>이 앱이 마스킹된 질문과 카탈로그 메타데이터를 외부 AI 서비스로 보내도록 허용합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5157" />
            <source>Clear AI key</source>
            <translation>AI 키 지우기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5160" />
            <source>Test AI connection</source>
            <translation>AI 연결 테스트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5224" />
            <location filename="../zscaler_api_client.py" line="5233" />
            <source>Rotate pseudonym key</source>
            <translation>가명 키 순환</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5225" />
            <source>Rotate the local pseudonym key? Future pseudonyms will change and will no longer correlate with previous exports.</source>
            <translation>로컬 가명 키를 순환하시겠습니까? 향후 가명은 변경되며 더 이상 이전 내보내기와 연관되지 않습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5233" />
            <source>The local pseudonym key was rotated. No credentials or source identifiers were stored.</source>
            <translation>로컬 가명 키가 순환되었습니다. 자격 증명이나 소스 식별자가 저장되지 않았습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5236" />
            <source>Create a new local evidence signing identity? Existing signed packages remain verifiable, but future packages will have a different public-key fingerprint.</source>
            <translation>새로운 로컬 증거 서명 ID를 만드시겠습니까? 기존의 서명된 패키지는 계속 검증 가능하지만 향후 패키지는 다른 공개 키 지문을 갖게 됩니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5239" />
            <source>Signed evidence</source>
            <translation>서명된 증거</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5239" />
            <source>The system keychain could not store the evidence signing key.</source>
            <translation>시스템 키체인이 증거 서명 키를 저장할 수 없습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5242" />
            <source>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</source>
            <translation>A new signing key was stored in the system keychain. Public-key fingerprint: {fingerprint}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5248" />
            <source>Restore Defaults</source>
            <translation>기본값 복원</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5249" />
            <source>This will reset all advanced settings to defaults. Continue?</source>
            <translation>그러면 모든 고급 설정이 기본값으로 재설정됩니다. 계속하다?</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5371" />
            <source>Configured securely in your system keychain</source>
            <translation>시스템 키체인에 안전하게 구성됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5378" />
            <source>AI key cleared</source>
            <translation>AI 키가 삭제되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5384" />
            <location filename="../zscaler_api_client.py" line="5387" />
            <location filename="../zscaler_api_client.py" line="5395" />
            <location filename="../zscaler_api_client.py" line="5396" />
            <source>AI connection</source>
            <translation>AI 연결</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5384" />
            <source>Local catalog assistant is ready.</source>
            <translation>지역 카탈로그 도우미가 준비되었습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5387" />
            <source>Enter an AI endpoint first.</source>
            <translation>먼저 AI 엔드포인트를 입력하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5393" />
            <source>AI connection succeeded.</source>
            <translation>AI 연결에 성공했습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5396" />
            <source>AI connection failed: {error}</source>
            <translation>AI connection failed: {error}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5410" />
            <source>ZIA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZIA Cloud: URL 접두사 제거(호스트 이름만 필요함)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5417" />
            <source>ZPA Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>ZPA Cloud: URL 접두사 제거됨(호스트 이름만 필요함)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5423" />
            <source>{product} Cloud: Removed URL prefix (only hostname needed)</source>
            <translation>{product} Cloud: Removed URL prefix (only hostname needed)</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5428" />
            <source>ZPA: Customer ID is empty — required for most ZPA endpoints</source>
            <translation>ZPA: 고객 ID가 비어 있습니다. 대부분의 ZPA 엔드포인트에 필요합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5430" />
            <source>ZPA: Customer ID should be numeric (got '{value}')</source>
            <translation>ZPA: Customer ID should be numeric (got '{value}')</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5438" />
            <source>OneAPI: Removed URL prefix from vanity domain</source>
            <translation>OneAPI: 베니티 도메인에서 URL 접두사 제거</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5442" />
            <source>OneAPI: Removed .zslogin.net suffix — only the prefix is needed (e.g. 'acme')</source>
            <translation>OneAPI: .zslogin.net 접미사 제거 — 접두사만 필요합니다(예: 'acme')</translation>
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
            <translation>ZIdentity: 도메인에서 URL 접두사 제거됨</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5470" />
            <source>ZIA is enabled but Cloud is empty</source>
            <translation>ZIA가 활성화되었지만 클라우드가 비어 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5472" />
            <source>ZCC is enabled but Cloud host is empty</source>
            <translation>ZCC가 활성화되었지만 클라우드 호스트가 비어 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5474" />
            <source>OneAPI is enabled but Vanity Domain is empty</source>
            <translation>OneAPI가 활성화되었지만 가상 도메인이 비어 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5476" />
            <source>OneAPI is enabled but Client ID is empty</source>
            <translation>OneAPI가 활성화되었지만 클라이언트 ID가 비어 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5491" />
            <source>Settings Validation</source>
            <translation>설정 검증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5492" />
            <source>Some settings were adjusted or may need attention:</source>
            <translation>일부 설정이 조정되었거나 주의가 필요할 수 있습니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5496" />
            <source>Save Anyway</source>
            <translation>어쨌든 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5497" />
            <source>Go Back</source>
            <translation>돌아가기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5522" />
            <source>Secure storage</source>
            <translation>안전한 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="5522" />
            <source>The system keychain could not save one or more secrets. No secret changes were applied.</source>
            <translation>시스템 키체인은 하나 이상의 비밀을 저장할 수 없습니다. 비밀 변경 사항이 적용되지 않았습니다.</translation>
        </message>
    </context>
    <context>
        <name>SetupWizard</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4172" />
            <source>Getting Started Wizard</source>
            <translation>시작하기 마법사</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4191" />
            <source>Back</source>
            <translation>뒤로</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4195" />
            <source>Open full settings</source>
            <translation>전체 설정 열기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4198" />
            <location filename="../zscaler_api_client.py" line="4321" />
            <source>Continue</source>
            <translation>계속</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4209" />
            <source>Abstract zero trust security network</source>
            <translation>추상 제로 트러스트 보안 네트워크</translation>
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
            <translation>기본</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4223" />
            <source>Advanced</source>
            <translation>고급</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4225" />
            <source>Setup mode:</source>
            <translation>설정 모드:</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4233" />
            <source>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;Connect your Zscaler tenant&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4234" />
            <source>Create an API client with the required roles in ZIdentity, then enter its details below.</source>
            <translation>ZIdentity에서 필요한 역할을 사용하여 API 클라이언트를 생성한 후 아래에 세부 정보를 입력하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4240" />
            <source>Vanity domain</source>
            <translation>허영 도메인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4242" />
            <source>Client ID</source>
            <translation>클라이언트 ID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4245" />
            <source>Client secret</source>
            <translation>클라이언트 비밀번호</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4247" />
            <source>Leave empty for production; use beta or alpha when applicable</source>
            <translation>생산을 위해 비워 두십시오. 해당되는 경우 베타 또는 알파를 사용하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4248" />
            <source>Cloud</source>
            <translation>클라우드</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4250" />
            <source>Optional; required for many ZPA requests</source>
            <translation>선택사항; 많은 ZPA 요청에 필요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4251" />
            <source>ZPA customer ID</source>
            <translation>ZPA 고객 ID</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4281" />
            <source>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;What would you like to do first?&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4282" />
            <source>Choose a common operation. The wizard will load it into the request builder with required path variables highlighted.</source>
            <translation>일반적인 작업을 선택합니다. 마법사는 필수 경로 변수가 강조 표시된 요청 빌더에 이를 로드합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4340" />
            <source>Secure storage</source>
            <translation>안전한 저장</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4340" />
            <source>The system keychain could not save the secret. Check the keychain service and try again.</source>
            <translation>시스템 키체인이 비밀을 저장할 수 없습니다. 키체인 서비스를 확인하고 다시 시도하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4272" />
            <location filename="../zscaler_api_client.py" line="4286" />
            <source>Just explore the API catalog</source>
            <translation>API 카탈로그를 살펴보세요</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4153" />
            <source>ZIA · List users</source>
            <translation>ZIA · 사용자 목록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4154" />
            <source>ZIA · List URL categories</source>
            <translation>ZIA · URL 카테고리 목록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4155" />
            <source>ZIA · Check activation status</source>
            <translation>ZIA · 활성화 상태 확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4156" />
            <source>ZIA · List cloud firewall policies</source>
            <translation>ZIA · 클라우드 방화벽 정책 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4157" />
            <source>ZPA · List application segments</source>
            <translation>ZPA · 애플리케이션 세그먼트 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4158" />
            <source>ZPA · List segment groups</source>
            <translation>ZPA · 목록 세그먼트 그룹</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4159" />
            <source>ZPA · List connectors</source>
            <translation>ZPA · 목록 커넥터</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4160" />
            <source>ZDX · List devices and experience scores</source>
            <translation>ZDX · 장치 및 경험 점수 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4161" />
            <source>ZDX · List active alerts</source>
            <translation>ZDX · 활성 경고 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4162" />
            <source>ZDX · List monitored applications</source>
            <translation>ZDX · 모니터링되는 응용 프로그램 목록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4163" />
            <source>Client Connector · List devices</source>
            <translation>클라이언트 커넥터 · 장치 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4164" />
            <source>ZIdentity · List users</source>
            <translation>ZIdentity · 사용자 목록</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4165" />
            <source>ZIdentity · List groups</source>
            <translation>ZIdentity · 목록 그룹</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4166" />
            <source>AI Security · List workloads</source>
            <translation>AI 보안 · 워크로드 나열</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4290" />
            <source>Authenticate immediately after finishing</source>
            <translation>완료 후 바로 인증</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4299" />
            <source>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</source>
            <translation>&lt;h2&gt;You are ready to make your first request&lt;/h2&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4301" />
            <source>The API Explorer contains the complete bundled catalog. Use the Documentation tab for endpoint details, the Console tab for request activity, and Request History to replay safe, redacted requests.</source>
            <translation>API 탐색기에는 전체 번들 카탈로그가 포함되어 있습니다. 끝점 세부 정보를 보려면 문서 탭을 사용하고, 요청 활동을 보려면 콘솔 탭을 사용하고, 안전하고 수정된 요청을 재생하려면 요청 기록을 사용하세요.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4319" />
            <source>Step {current} of {total}</source>
            <translation>Step {current} of {total}</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4321" />
            <source>Finish</source>
            <translation>마침</translation>
        </message>
    </context>
    <context>
        <name>SocEntityGraph</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Identity</source>
            <translation>아이덴티티</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Address</source>
            <translation>주소</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Device</source>
            <translation>장치</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Application</source>
            <translation>신청</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Policy</source>
            <translation>정책</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Service</source>
            <translation>서비스</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Endpoint</source>
            <translation>엔드포인트</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Infrastructure</source>
            <translation>인프라</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Indicator</source>
            <translation>표시기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Activity</source>
            <translation>활동</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Environment</source>
            <translation>환경</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="3916" />
            <source>Resource</source>
            <translation>자원</translation>
        </message>
    </context>
    <context>
        <name>SplashScreen</name>
        <message>
            <location filename="../zscaler_api_client.py" line="4395" />
            <source>Loading...</source>
            <translation>로드 중...</translation>
        </message>
    </context>
    <context>
        <name>WelcomeDialog</name>
        <message>
            <location filename="../zscaler_api_client.py" line="3997" />
            <source>Welcome to ZS API Client</source>
            <translation>ZS API 클라이언트에 오신 것을 환영합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4009" />
            <source>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</source>
            <translation>&lt;p style='font-size: 14px; color: #666;'&gt;A Postman-like tool for exploring Zscaler APIs&lt;/p&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4022" />
            <source>Supported APIs</source>
            <translation>지원되는 API</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4025" />
            <source>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</source>
            <translation>&lt;table cellspacing='10'&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌐 ZIA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Internet Access – Web security, URL filtering, firewall&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔒 ZPA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Private Access – Zero trust application access&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;📊 ZDX&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zscaler Digital Experience – User experience monitoring&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;💻 ZCC&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Client Connector – Device management and compliance&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔑 ZIdentity&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Identity &amp; Access Management – Users, groups, SCIM, IdPs&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🌿 ZTW&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Zero Trust Workloads – Branch connectors, service edges&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;⚡ ZWA&lt;/b&gt;&lt;/td&gt;&lt;td&gt;Workflow Automation – Automated policies and triggers&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;🔍 EASM&lt;/b&gt;&lt;/td&gt;&lt;td&gt;External Attack Surface Management – Asset discovery, vulnerabilities&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4041" />
            <source>Getting Started</source>
            <translation>시작하기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4044" />
            <source>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</source>
            <translation>&lt;ol&gt;&lt;li&gt;&lt;b&gt;Configure Credentials&lt;/b&gt; – Go to &lt;i&gt;File → Settings&lt;/i&gt; and enter your API credentials&lt;/li&gt;&lt;li&gt;&lt;b&gt;Select API&lt;/b&gt; – Choose from ZIA, ZPA, ZDX, ZCC, ZIdentity, ZTW, ZWA, or EASM&lt;/li&gt;&lt;li&gt;&lt;b&gt;Browse Endpoints&lt;/b&gt; – Click on an endpoint in the tree to load it&lt;/li&gt;&lt;li&gt;&lt;b&gt;Send Request&lt;/b&gt; – Modify parameters if needed, then click Send&lt;/li&gt;&lt;li&gt;&lt;b&gt;View Response&lt;/b&gt; – JSON response will appear with syntax highlighting&lt;/li&gt;&lt;/ol&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4057" />
            <source>Tips for Advanced Users</source>
            <translation>고급 사용자를 위한 팁</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4060" />
            <source>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</source>
            <translation>&lt;ul&gt;&lt;li&gt;&lt;b&gt;Ctrl+Enter&lt;/b&gt; – Send request quickly&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+Shift+C&lt;/b&gt; – Copy request as cURL command&lt;/li&gt;&lt;li&gt;&lt;b&gt;Ctrl+H&lt;/b&gt; – View request history&lt;/li&gt;&lt;li&gt;&lt;b&gt;Batch Operations&lt;/b&gt; – Import CSV for bulk API calls&lt;/li&gt;&lt;li&gt;&lt;b&gt;Request menu&lt;/b&gt; – Quick authentication helpers for each API&lt;/li&gt;&lt;li&gt;&lt;b&gt;Themes&lt;/b&gt; – Switch between Light/Dark/System in Settings&lt;/li&gt;&lt;/ul&gt;</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4074" />
            <source>Documentation</source>
            <translation>문서</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4095" />
            <source>Show this dialog on startup</source>
            <translation>시작 시 이 대화 상자 표시</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4103" />
            <source>Open Settings</source>
            <translation>설정 열기</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="4107" />
            <source>Get Started</source>
            <translation>시작하기</translation>
        </message>
    </context>
    <context>
        <name>owner</name>
        <message>
            <location filename="../zscaler_api_client.py" line="431" />
            <source>Default</source>
            <translation>기본값</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="644" />
            <source>The response export is unavailable, is a symbolic link, or exceeds the configured transfer limit.</source>
            <translation>응답 내보내기를 사용할 수 없거나, 심볼릭 링크이거나, 구성된 전송 제한을 초과합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="645" />
            <source>The response export is not valid UTF-8 JSON.</source>
            <translation>응답 내보내기가 유효한 UTF-8 JSON이 아닙니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="646" />
            <source>This is not a supported ZS API response exchange file.</source>
            <translation>이는 지원되는 ZS API 응답 교환 파일이 아닙니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="647" />
            <source>The response exchange file is incomplete.</source>
            <translation>응답 교환 파일이 불완전합니다.</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="649" />
            <source>The response exchange file could not be opened.</source>
            <translation>응답 교환 파일을 열 수 없습니다.</translation>
        </message>
    </context>
    <context>
        <name>window</name>
        <message>
            <location filename="../zscaler_api_client.py" line="12210" />
            <source>Automatic Update Check</source>
            <translation>자동 업데이트 확인</translation>
        </message>
        <message>
            <location filename="../zscaler_api_client.py" line="12212" />
            <source>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</source>
            <translation>&lt;p&gt;Would you like to automatically check for updates when the app starts?&lt;/p&gt;&lt;p&gt;This will connect to GitHub to check for new versions.&lt;/p&gt;</translation>
        </message>
    </context>
</TS>