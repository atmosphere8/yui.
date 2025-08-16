import { ExpoConfig } from "expo/config";

const icons = "./common/assets/icons";

const config: ExpoConfig = {
  name: "yui",
  slug: "yui",
  owner: "atmosphere8",
  version: "1.0.0",
  orientation: "portrait",
  newArchEnabled: true,
  icon: `${icons}/logo.png`,
  splash: {
    image: `${icons}/logo_text.png`,
    resizeMode: "contain",
    backgroundColor: "#fff",
  },
  ios: {
    supportsTablet: true,
  },
  android: {
    package: "com.atmosphere8.yui",
    edgeToEdgeEnabled: true,
    adaptiveIcon: {
      foregroundImage: `${icons}/logo.png`,
      backgroundColor: "#fff",
    },
  },
  web: {
    favicon: `${icons}/logo.png`,
  },
  extra: {
    eas: {
      projectId: "e48036ad-be4c-4ebe-9951-137f8321b969",
    },
  },
  plugins: ["expo-router"],
};

export default config;
