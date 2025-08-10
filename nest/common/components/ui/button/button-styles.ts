//imports
import { StyleSheet } from "react-native";

//globals
import colors from "../../../assets/globals/colors";
import indents from "../../../assets/globals/indents";

const styles = StyleSheet.create({
  button: {
    borderColor: colors.color4,
    borderWidth: indents.indent1,
    borderRadius: indents.indent16,
    maxHeight: 50,
    maxWidth: 50,
    minHeight: 50,
    minWidth: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
