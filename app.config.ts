import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "yui",
  slug: "yui",
  owner: "atmosphere8",
  version: "1.0.0",
  orientation: "portrait",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    icon: "./common/assets/icons/logo.png",
    splash: {
      image: "./common/assets/icons/logo.png",
      resizeMode: "contain",
      backgroundColor: "#fff",
    },
  },
  android: {
    edgeToEdgeEnabled: true,
    icon: "./common/assets/icons/logo.png",
    splash: {
      image: "./common/assets/icons/logo.png",
      resizeMode: "contain",
      backgroundColor: "#fff",
    },
  },
  web: {
    favicon: "./common/assets/icons/logo.png",
  },
  plugins: ["expo-router"],
};

export default config;
