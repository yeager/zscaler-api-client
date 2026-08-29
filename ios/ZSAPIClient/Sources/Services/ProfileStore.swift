import Foundation

/// Stores only non-secret connection preferences. Credentials remain in Keychain.
enum ProfileStore {
    private static let vanityKey = "oneapi.vanity-domain"
    private static let clientIDKey = "oneapi.client-id"
    private static let cloudKey = "oneapi.cloud"

    static func load() -> OneAPIProfile {
        OneAPIProfile(
            vanityDomain: UserDefaults.standard.string(forKey: vanityKey) ?? "",
            clientID: UserDefaults.standard.string(forKey: clientIDKey) ?? "",
            cloud: UserDefaults.standard.string(forKey: cloudKey) ?? ""
        )
    }

    static func save(_ profile: OneAPIProfile) {
        UserDefaults.standard.set(profile.vanityDomain, forKey: vanityKey)
        UserDefaults.standard.set(profile.clientID, forKey: clientIDKey)
        UserDefaults.standard.set(profile.cloud, forKey: cloudKey)
    }
}
