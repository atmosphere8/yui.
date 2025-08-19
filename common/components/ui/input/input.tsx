//imports
import { TextInput } from "react-native";

//styles
import styles from "./input-styles";

//types
import { Props } from "./input-types";

export default ({ style, value, on_change }: Props) => {
  return (
    <TextInput
      placeholder="write here..."
      style={[styles.input, style]}
      value={value}
      onChangeText={on_change}
    />
  );
};
