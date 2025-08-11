//imports
import { View, Text } from "react-native";
import { useFonts } from "expo-font";

//styles
import styles from "./header-styles";

export default () => {
  const [fonst_loaded] = useFonts({
    "inter-italic": require("./../../../assets/fonts/inter-italic.otf"),
  });

  if (!fonst_loaded) return null;

  return (
    <View style={styles.header}>
      <Text style={[styles.title, { fontFamily: "inter-italic" }]}>yui.</Text>
    </View>
  );
};
