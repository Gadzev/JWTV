# React Native TV App that supports Android TV and tvOS

The code is based on: https://github.com/react-native-tvos/react-native-tvos

## Setup

    # Make sure you have the CLI installed globally (this only needs to be done once on your system)
    npm install -g react-native-cli
    # Clone the repo
    git clone git@github.com:Gadzev/JWTV.git
    # Install dependencies
    cd JWTV && yarn

## Running on tvOS

    react-native run-ios  --simulator "Apple TV" --scheme "JWTV-tvOS"

## Running on Android

    # First you would need to create a local.properties file in the /android folder with the path to your sdk.
    # On MacOS systems, this is typically:
    sdk.dir = /Users/<your_username_here>/Library/Android/sdk
    # After that, the easiest way would be to have an android tv emulator open and run:
    react-native run-android
