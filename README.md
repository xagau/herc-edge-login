# herc-edge-login

This repo contains a basic app created by following the readme instructions at https://github.com/Airbitz/edge-login-ui/tree/develop/packages/edge-login-ui-rn

##### Min Requirements
- Node: Version 8.9.1
- yarn 1.2.3

Disclaimer: These documents were written on April 21, 2018 from a MacOS running High Sierra. These instructions were not tested on other OS.

# Things I needed to change
- gradle dependencies
- setting up android SDK
- making sure I had all the support files and the right ADK

# useful terminal commands like grepping and find

Tools you'll need: android studio SDK and genymotion.
1. In terminal, run 'adb'. If it works, then you've got androids SDK on the right path. Otherwise, you gotta follow expo docs to install genymotion.
2. in the terminal, run 'exp'. If it works, then you've got expo. Other wise, you gotta npm install -g exp.
3. In the temrinal, at project root, run 'yarn install' to install dependencies.
4. Open up Android studio
5. Do not load the root directory! Load from herc-edge-login/android/app. If it's the first time you are loading it, it should take Android studio like 5 minutes to build it.
6. Here is where you might run into some potential errors. The error messages are only sometimes helpful. If none of the following advice helps you, please reach out to me and we will debug it together!
  - Do you have all the support files? Go to preferences -> appearnce & behavior -> system settings -> android sdk -> click the tab 'SDK tools' in the middle. Scroll down to the bottom and make sure you have both Android Support Repository and Google Repository checked off.
  - Are the support files in the right directory? I ran into a problem where my support files were all in the wrong directory so I had to move them to the right one. Run the command 'find / -name runtime-1.0.0.pom' runtime-1.0.0.pom is a file in the support repository. If you have this file somewhere on your system, your other support files are near it, probably cached. I manually moved them with the command (mv) to the correct directory so that android studio will be able to find them.
  - Do you have the right Android SDK path? Go to preferences -> appearnce & behavior -> system settings -> android sdk. Copy the path next to 'Android SDK location'. It should look something like '/Users/georgedanforth/Library/Android/sdk' You will paste that path into your .bash_profile. Run the command 'nano ~/.bash_profile'. Type in :
  export ANDROID_NDK_HOME=/Users/georgedanforth/Library/Android/sdk/ndk-bundle
  export ANDROID_HOME=/Users/georgedanforth/Library/Android/sdk
  export PATH=/Users/georgedanforth/Library/Android/sdk/platform-tools:$PATH
  - Is your android over 6.0? Go to preferences -> appearnce & behavior -> system settings -> android sdk. I have android 8.1(oreo)
  -
7. To see if it will build, go to Build. Under build, click 'Clean Project', then click 'Rebuild Project'. If nothing happens, try clicking 'Make Project'.
