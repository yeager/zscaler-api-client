# ZS API Client for iPad

This is the native SwiftUI iPad foundation for ZS API Client. It uses the iOS
Keychain for the OneAPI client secret and keeps OAuth access tokens in memory
only. Requests are restricted to HTTPS.

## Build a sideloadable IPA on macOS

1. Install [XcodeGen](https://github.com/yonaskolb/XcodeGen), then run
   `xcodegen generate` in `ios/ZSAPIClient`.
2. Open `ZSAPIClient.xcodeproj` in Xcode, choose your Apple Development team,
   and build for a connected iPad or archive the app.
3. Export the signed archive as an IPA using Xcode's Organizer.

The Linux desktop build host cannot sign iOS applications or produce a valid
IPA; iOS signing and archiving intentionally happen only on macOS with Xcode.
