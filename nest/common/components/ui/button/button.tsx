//imports
import { Pressable } from "react-native";

//styles
import styles from "./button-styles";

//types
import { props } from "./button-types";

export default ({ action, icon: Icon, style }: props) => {
  return (
    <Pressable style={[styles.button, style]} onPress={action}>
      {Icon}
    </Pressable>
  );
};
