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
    edgeToEdgeEnabled: true,
  },
  web: {
    favicon: `${icons}/logo.png`,
  },
  plugins: ["expo-router"],
};

export default config;
