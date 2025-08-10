//imports
import { StyleSheet } from "react-native";

//globals
import indents from "../../../assets/globals/indents";
import colors from "../../../assets/globals/colors";

const styles = StyleSheet.create({
  note: {
    width: "100%",
    height: 100,
    borderRadius: indents.indent16,
    borderWidth: indents.indent1,
    borderColor: colors.color4,
    padding: indents.indent8,
  },
});

export default styles;
