export default {
    "expo": {
      "name": "TestFlipper",
      "slug": "TestFlipper",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/icon.png",
      "userInterfaceStyle": "light",
      "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
      },
      "assetBundlePatterns": [
        "**/*"
      ],
      "ios": {
        "supportsTablet": true
      },
      "plugins": [
        [
          "expo-build-properties",
          {
            "ios": {
              "flipper": true
            }
          }
        ]
      ],
      "android": {
        package: "com.test.flipper",
        versionCode: 1,
        "adaptiveIcon": {
          "foregroundImage": "./assets/adaptive-icon.png",
          "backgroundColor": "#ffffff"
        }
      },
      "web": {
        "favicon": "./assets/favicon.png"
      },
      "extra": {
        apiUrl: process.env.API_URL,
        "eas": {
          "projectId": "2374f634-c409-42fb-8c3b-c3d4d4bac9ca"
        }
      }
    }
  }