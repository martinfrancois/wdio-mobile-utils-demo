[![Build Status](https://travis-ci.com/martinfrancois/wdio-mobile-utils-demo.svg?token=8WqsSGJvE4SAqmHHx2Z7&branch=master)](https://travis-ci.com/martinfrancois/wdio-mobile-utils-demo)

# wdio-mobile-utils Demo App

# Table of Contents

- [Installation](#installation)
  - [Basic Installation](#basic-installation)
  - [iOS Real Device Build Installation](#ios-real-device-build-installation)
  - [Setup Tests on Sauce Labs](#setup-tests-on-sauce-labs)
- [Available Commands](#available-commands)
  - [Preview app](#preview-app)
  - [Run app locally](#run-app-locally)
    - [Android Emulator](#android-emulator)
    - [iOS Simulator](#ios-simulator)
  - [Build app locally](#build-app-locally)
    - [Android](#android)
    - [iOS Simulator](#ios-simulator-1)
    - [iOS Real Device](#ios-real-device)
  - [Run E2E Tests](#run-e2e-tests)
    - [Android](#android-1)
    - [iOS Simulator](#ios-simulator-2)
    - [iOS Real Device](#ios-real-device-1)
- [Fastlane Certificates](#fastlane-certificates)
- [Release](#release)

# Installation

Prerequisites:

- NodeJS 10 or 12
- NativeScript 6.4.1 or newer
  - follow the [CLI full setup guide](https://docs.nativescript.org/angular/start/quick-setup#full-setup) for your operating system

## Basic Installation

Run the following command:

```shell script
npm install
```

## iOS Real Device Build Installation

To be able to build an IPA file for deployment on real iOS devices, run the following command:

```shell script
npm run dev.ios.setup
```

Then copy the file `.env.default.template` as `.env.default` and fill out the missing environment variables in the section `# iOS Real Device Build`.

## Setup Tests on Sauce Labs

To be able to run the E2E tests on Sauce Labs, a few environment variables need to be set.

To do that, copy the file `.env.default.template` as `.env.default` and fill out the missing environment variables in the section `# E2E Tests on Sauce Labs`.

# Available Commands

To run anything iOS related, a macOS machine must be used.
Everything considering Android runs on Windows, Mac or Linux.

## Preview app

To preview the app on a real device using NativeScript's preview app, run the following command:

```shell script
npm run preview
```

## Run app locally

### Android Emulator

To run the app on the Android Emulator, run the following command:

```shell script
npm run run.android
```

### iOS Simulator

To run the app on the iOS Simulator, run the following command:

```shell script
npm run run.ios
```

## Build app locally

### Android

To build the app as an .apk file, run the following command:

```shell script
npm run build.android
```

You will then be able to find the built file in the following path:

```shell script
build/wdio-mobile-utils-demo.apk
```

### iOS Simulator

To build the app as an .app file to install on an iOS Simulator, run the following command:

```shell script
npm run build.ios.sim
```

You will then be able to find the built file in the following path:

```shell script
build/wdio-mobile-utils-demo.app
```

### iOS Real Device

To build the app as an .ipa file to install on a real iOS device, run the following command:

```shell script
npm run build.ios
```

You will then be able to find the built file in the following path:

```shell script
build/wdio-mobile-utils-demo.ipa
```

## Run E2E Tests

To run the E2E tests using WebdriverIO, run the following commands depending on the type.

### Android

```shell script
npm run e2e.android.run           # Runs the test locally
npm run e2e.android.debug         # Runs the test locally in debug mode
npm run e2e.android.sauce         # Runs the test on Sauce Labs RDC
```

### iOS Simulator

```shell script
npm run e2e.ios.sim.run           # Runs the test locally
npm run e2e.ios.sim.debug         # Runs the test locally in debug mode
npm run e2e.ios.sim.sauce         # Runs the test on Sauce Labs Virtual Devices
```

### iOS Real Device

```shell script
npm run e2e.ios.real.run           # Runs the test locally
npm run e2e.ios.real.debug         # Runs the test locally in debug mode
npm run e2e.ios.real.sauce         # Runs the test on Sauce Labs RDC
```

# Fastlane Certificates

To install or update iOS developer certificates using fastlane, run the following command:

```shell script
npm run dev.build.ios.setup
```

# Upload App to Sauce Labs

To upload the built app to Sauce Labs, use the following commands depending on the type.

## Android RDC

```shell script
npm run e2e.android.upload.sauce
```

## iOS RDC

```shell script
npm run e2e.ios.real.upload.sauce
```

## iOS Simulator

```shell script
npm run e2e.ios.sim.upload.sauce
```

# Release

To build a release, create a git tag on the master branch with the version number (in the format x.y.z) and push it.
Travis CI will then take care of the rest and publish a release on GitHub releases.

Example:

```shell script
git tag 1.0.0
git push --tags
```
