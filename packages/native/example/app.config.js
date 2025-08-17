module.exports = {
  expo: {
    name: "example",
    slug: "example",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "s2mangasnative.example"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      edgeToEdgeEnabled: true,
      package: "s2mangasnative.example"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    scheme: "example",
    experiments: {
      tsconfigPaths: true
    },
    extra: {
      EXPO_ROUTER_APP_ROOT: "./src/app"
    },
    plugins: [
      "expo-router"
    ]
  }
};
