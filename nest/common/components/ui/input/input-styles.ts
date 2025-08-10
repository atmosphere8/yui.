//imports
import { StyleSheet } from "react-native";

//globals
import indents from "../../../assets/globals/indents";
import colors from "../../../assets/globals/colors";

const styles = StyleSheet.create({
  input: {
    borderWidth: indents.indent1,
    borderColor: colors.color4,
    borderRadius: indents.indent16,
    paddingHorizontal: indents.indent8,
    maxHeight: 50,
    minHeight: 50,
  },
});

export default styles;
