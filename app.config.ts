import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "yui",
  slug: "yui",
  version: "1.0.0",
  orientation: "portrait",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
  },
  android: {
    edgeToEdgeEnabled: true,
  },
  plugins: ["expo-router"],
};

export default config;
