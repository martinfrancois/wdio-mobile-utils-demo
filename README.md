tns-demo-app documentation
================

# Table of Contents
- [Installation](#installation)
  - [Basic Installation](#basic-installation)
  - [iOS Real Device Build Installation](#ios-real-device-build-installation)
- [Available Commands](#available-commands)
  - [Preview app](#preview-app)
  - [Run app locally](#run-app-locally)
    - [Android Emulator](#android-emulator)
    - [iOS Simulator](#ios-simulator)
  - [Build app locally](#build-app-locally)
    - [Android](#android)
    - [iOS Simulator](#ios-simulator-1)
    - [iOS Real Device](#ios-real-device)
- [Fastlane Certificates](#fastlane-certificates)

# Installation

Prerequisites:
- NodeJS 10 or 12
- NativeScript 6.4.1 or newer
    - follow the [CLI full setup guide](https://docs.nativescript.org/angular/start/quick-setup#full-setup) for your operating system

## Basic Installation
Run the following command:
```
npm install
```

## iOS Real Device Build Installation
To be able to build an IPA file for deployment on real iOS devices, run the following command:
```
npm run dev.ios.setup
```

Then copy the file `.env.default.template` as `.env.default` and fill out the missing environment variables.

# Available Commands
To run anything iOS related, a macOS machine must be used.
Everything considering Android runs on Windows, Mac or Linux.

## Preview app
To preview the app on a real device using NativeScript's preview app, run the following command:
```
npm run preview
```

## Run app locally
### Android Emulator
To run the app on the Android Emulator, run the following command:
```
npm run run.android
```

### iOS Simulator
To run the app on the iOS Simulator, run the following command:
```
npm run run.ios
```

## Build app locally
### Android
To build the app as an .apk file, run the following command:
```
npm run build.android
```

You will then be able to find the built file in the following path:
```
build/tns-demo-app.apk
```

### iOS Simulator
To build the app as an .app file to install on an iOS Simulator, run the following command:
```
npm run build.ios.sim
```

You will then be able to find the built file in the following path:
```
build/tns-demo-app.app
```

### iOS Real Device
To build the app as an .ipa file to install on a real iOS device, run the following command:
```
npm run build.ios
```

You will then be able to find the built file in the following path:
```
build/tns-demo-app.ipa
```

# Fastlane Certificates
To install or update iOS developer certificates using fastlane, run the following command:
```
npm run dev.build.ios.setup
```