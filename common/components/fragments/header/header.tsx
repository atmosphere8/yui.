//imports
import { View, Text } from "react-native";

//styles
import styles from "./header-styles";

//icons
import LogoText from "@icons/logo_text.svg";

export default () => {
  return (
    <View style={styles.header}>
      <LogoText height={75} width={150} />
    </View>
  );
};
