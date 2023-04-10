# FODMAP Checker App
By Zhiyan Hu
## Description
This app is designed for people who are following a low FODMAP diet or experiencing IBS symptoms. It enables users to search for foods and check if they are low FODMAP or not. Additionally, users can save their favorite low FODMAP foods and be reminded to avoid high FODMAP ones. The app is compatible with both iOS and Android mobile devices.
## SETUP
### iOS simulator
1. Download Xcode from the App Store
2. Open Xcode and go to Preferences
3. Select the Locations tab
4. Select the latest version of Xcode in the Command Line Tools dropdown

Shortcuts
○ ctrl + d, then command + d - open developer menu
r - reload

### Android simulator
1. Download and Install Android Studio

Go to the Android Studio download page.
Download the installer for your operating system (Windows, macOS, or Linux).
Run the installer and follow the installation instructions.
Start Android Studio after the installation is complete.
2. Install Android SDK and AVD Manager

Open Android Studio, and it will prompt you to install the Android SDK if it's not already installed.
Follow the installation instructions to install the Android SDK.
In Android Studio, click on "Configure" (at the bottom right corner of the welcome screen) and then select "SDK Manager."
Install the desired Android SDK version (API level) by selecting the checkbox next to it and clicking "Apply" or "OK."
Switch to the "SDK Tools" tab and ensure "Android Emulator" and "Android SDK Platform-Tools" are selected. Click "Apply" or "OK" to install them.
3. Create an Android Virtual Device (AVD)

In Android Studio, click on "Configure" and select "AVD Manager."
Click on the "Create Virtual Device" button at the bottom left corner of the AVD Manager window.
Choose a device definition (e.g., Pixel 3) and click "Next."
Select a system image (e.g., the latest Android version) and click "Next." If the system image is not downloaded yet, click "Download" and wait for the download to complete.
Verify the device configuration and click "Finish" to create the AVD.
4. Start the Android Simulator

Open the AVD Manager in Android Studio by clicking on "Configure" and selecting "AVD Manager."
Find the AVD you created in the list and click on the green "Play" button to the right.
The Android emulator will start, and you'll see the Android device's home screen.


### Run the project
1. Downlod the project from Github
2. Open the terminal at FodmapChecker directory
3. npm install
4. npm start
5. Scan the QR code with your mobile device
6. press i to run the app on iOS simulator
7. press a to run the app on Android simulator
8. ctrl+c to stop the server

### Libraries and tools
1. React Native
2. Expo CLI
   sudo npm install -g expo-cli
   expo init my-project
3. React Native Paper
   npm install react-native-paper
4. AsyncStorage
   npm install @react-native-community/async-storage



