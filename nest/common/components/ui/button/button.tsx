//imports
import { CaretCircleDoubleRightIcon } from "phosphor-react-native";
import { Pressable, Text } from "react-native";

//styles
import styles from "./button-styles";

//types
import { props } from "./button-types";

export default ({ action }: props) => {
  return (
    <Pressable style={styles.button} onPress={action}>
      <CaretCircleDoubleRightIcon size={32} />
    </Pressable>
  );
};
