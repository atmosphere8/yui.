//imports
import { View, Text } from "react-native";

//styles
import styles from "./note-styles";

//types
import { props } from "./note-types";

export default ({ text }: props) => {
  return (
    <View style={styles.note}>
      <Text>{text}</Text>
    </View>
  );
};
