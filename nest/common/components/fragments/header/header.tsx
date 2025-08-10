//imports
import { View, Text } from "react-native";

//styles
import styles from "./header-styles";

export default () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>yui.</Text>
    </View>
  );
};
