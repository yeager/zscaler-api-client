import Foundation

actor OneAPIClient {
    private let session: URLSession

    init(session: URLSession = .shared) { self.session = session }

    func authenticate(profile: OneAPIProfile, secret: String) async throws -> String {
        guard !profile.clientID.isEmpty, !secret.isEmpty else { throw ClientError.missingCredentials }
        guard let url = profile.tokenURL else { throw ClientError.invalidURL }
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/x-www-form-urlencoded", forHTTPHeaderField: "Content-Type")
        request.httpBody = form(["grant_type": "client_credentials", "client_id": profile.clientID, "client_secret": secret, "audience": "https://api.zscaler.com"])
        let (data, response) = try await session.data(for: request)
        let status = (response as? HTTPURLResponse)?.statusCode ?? 0
        guard (200 ..< 300).contains(status) else { throw ClientError.server(status, safeText(data)) }
        guard let payload = try JSONSerialization.jsonObject(with: data) as? [String: Any], let token = payload["access_token"] as? String else {
            throw ClientError.unexpectedResponse
        }
        return token
    }

    func send(_ input: APIRequest, token: String) async throws -> APIExchange {
        guard let url = URL(string: input.path), url.scheme?.lowercased() == "https" else { throw ClientError.insecureURL }
        var request = URLRequest(url: url)
        request.httpMethod = input.method
        request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        request.setValue("application/json", forHTTPHeaderField: "Accept")
        if !input.body.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty {
            request.setValue("application/json", forHTTPHeaderField: "Content-Type")
            request.httpBody = Data(input.body.utf8)
        }
        let (data, response) = try await session.data(for: request)
        let status = (response as? HTTPURLResponse)?.statusCode ?? 0
        let body = safeText(data)
        guard (200 ..< 300).contains(status) else { throw ClientError.server(status, body) }
        return APIExchange(method: input.method, url: url.absoluteString, status: status, body: body)
    }

    private func form(_ values: [String: String]) -> Data? {
        values.map { key, value in "\(key.urlEncoded)=\(value.urlEncoded)" }.sorted().joined(separator: "&").data(using: .utf8)
    }

    private func safeText(_ data: Data) -> String {
        String(data: data, encoding: .utf8) ?? "<binary response: \(data.count) bytes>"
    }
}

private extension String {
    var urlEncoded: String { addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? self }
}
