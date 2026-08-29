import Foundation

struct OneAPIProfile: Codable, Equatable {
    var vanityDomain = ""
    var clientID = ""
    var cloud = ""

    var tokenURL: URL? {
        let vanity = vanityDomain.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !vanity.isEmpty else { return nil }
        let suffix = cloud.trimmingCharacters(in: .whitespacesAndNewlines)
        let authority = suffix.isEmpty || suffix.uppercased() == "PRODUCTION" ? "\(vanity).zslogin.net" : "\(vanity).zslogin\(suffix.lowercased()).net"
        return URL(string: "https://\(authority)/oauth2/v1/token")
    }
}

struct APIRequest: Identifiable {
    let id = UUID()
    var method = "GET"
    var path = "https://api.zsapi.net/zia/api/v1/users"
    var body = ""
}

struct APIExchange: Identifiable {
    let id = UUID()
    let timestamp = Date()
    let method: String
    let url: String
    let status: Int
    let body: String
}

enum ClientError: LocalizedError {
    case invalidURL
    case insecureURL
    case missingCredentials
    case unexpectedResponse
    case server(Int, String)

    var errorDescription: String? {
        switch self {
        case .invalidURL: return "The API URL is invalid."
        case .insecureURL: return "Only HTTPS API endpoints are allowed."
        case .missingCredentials: return "Enter a client ID and client secret first."
        case .unexpectedResponse: return "The API returned an unexpected response."
        case let .server(status, message): return "API request failed (\(status)): \(message)"
        }
    }
}
