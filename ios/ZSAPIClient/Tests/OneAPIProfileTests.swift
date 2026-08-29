import XCTest
@testable import ZS_API_Client

final class OneAPIProfileTests: XCTestCase {
    func testProductionVanityDomainUsesZsloginTokenEndpoint() {
        let profile = OneAPIProfile(vanityDomain: "acme", clientID: "client", cloud: "")
        XCTAssertEqual(profile.tokenURL?.absoluteString, "https://acme.zslogin.net/oauth2/v1/token")
    }

    func testNonProductionCloudUsesDocumentedCloudSuffix() {
        let profile = OneAPIProfile(vanityDomain: "acme", clientID: "client", cloud: "beta")
        XCTAssertEqual(profile.tokenURL?.absoluteString, "https://acme.zsloginbeta.net/oauth2/v1/token")
    }

    func testMissingVanityDomainCannotProduceAuthenticationURL() {
        XCTAssertNil(OneAPIProfile(clientID: "client").tokenURL)
    }
}
