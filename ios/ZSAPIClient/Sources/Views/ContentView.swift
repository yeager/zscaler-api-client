import SwiftUI

@MainActor
final class ClientViewModel: ObservableObject {
    @Published var profile = OneAPIProfile() { didSet { ProfileStore.save(profile) } }
    @Published var secret = ""
    @Published var request = APIRequest()
    @Published var response = "Connect to OneAPI, then run a reviewed HTTPS request."
    @Published var exchanges: [APIExchange] = []
    @Published var authenticated = false
    @Published var busy = false
    private var token = ""
    private let client = OneAPIClient()

    init() {
        profile = ProfileStore.load()
        secret = (try? KeychainStore.read(account: "oneapi-client-secret")) ?? ""
    }

    func authenticate() async {
        await perform {
            try KeychainStore.save(self.secret, account: "oneapi-client-secret")
            self.token = try await self.client.authenticate(profile: self.profile, secret: self.secret)
            self.authenticated = true
            self.response = "Authenticated securely. The access token remains in memory only."
        }
    }

    func send() async {
        await perform {
            guard self.authenticated else { throw ClientError.missingCredentials }
            let exchange = try await self.client.send(self.request, token: self.token)
            self.exchanges.insert(exchange, at: 0)
            self.response = exchange.body
        }
    }

    private func perform(_ operation: @escaping () async throws -> Void) async {
        busy = true
        defer { busy = false }
        do { try await operation() } catch { response = error.localizedDescription }
    }
}

struct ContentView: View {
    @StateObject private var model = ClientViewModel()

    var body: some View {
        NavigationSplitView {
            Form {
                Section("OneAPI connection") {
                    TextField("Vanity domain", text: $model.profile.vanityDomain)
                        .textInputAutocapitalization(.never).autocorrectionDisabled()
                    TextField("Client ID", text: $model.profile.clientID)
                        .textInputAutocapitalization(.never).autocorrectionDisabled()
                    SecureField("Client secret", text: $model.secret)
                    TextField("Cloud (optional)", text: $model.profile.cloud)
                        .textInputAutocapitalization(.never).autocorrectionDisabled()
                    Button("Authenticate") { Task { await model.authenticate() } }
                        .disabled(model.busy)
                }
                Section("Recent requests") {
                    ForEach(model.exchanges) { item in
                        VStack(alignment: .leading) {
                            Text("\(item.method) \(item.status)").font(.headline)
                            Text(item.url).font(.caption).lineLimit(1)
                        }
                    }
                }
            }
            .navigationTitle("ZS API Client")
        } detail: {
            VStack(spacing: 12) {
                HStack {
                    Picker("Method", selection: $model.request.method) {
                        ForEach(["GET", "POST", "PUT", "PATCH", "DELETE"], id: \.self) { Text($0) }
                    }.pickerStyle(.segmented)
                    Button("Send") { Task { await model.send() } }.disabled(model.busy || !model.authenticated)
                }
                TextField("HTTPS URL", text: $model.request.path, axis: .vertical)
                    .textInputAutocapitalization(.never).autocorrectionDisabled().textFieldStyle(.roundedBorder)
                TextEditor(text: $model.request.body).font(.system(.body, design: .monospaced)).overlay(alignment: .topLeading) {
                    if model.request.body.isEmpty { Text("Optional JSON body").foregroundStyle(.secondary).padding(8).allowsHitTesting(false) }
                }
                ScrollView { Text(model.response).font(.system(.body, design: .monospaced)).textSelection(.enabled).frame(maxWidth: .infinity, alignment: .leading) }
                    .overlay(alignment: .topLeading) { if model.busy { ProgressView().padding() } }
            }
            .padding().navigationTitle("API Explorer")
        }
    }
}
