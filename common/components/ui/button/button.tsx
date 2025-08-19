//imports
import { Pressable } from "react-native";

//styles
import styles from "./button-styles";

//types
import { Props } from "./button-types";

export default ({ action, icon: Icon, style }: Props) => {
  return (
    <Pressable style={[styles.button, style]} onPress={action}>
      {Icon}
    </Pressable>
  );
};
