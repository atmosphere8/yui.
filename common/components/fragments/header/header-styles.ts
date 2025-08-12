// imports
import { StyleSheet } from "react-native";

// globals
import indents from "@globals/indents";
import colors from "@globals/colors";

const styles = StyleSheet.create({
  header: {
    marginTop: 20, //change
    paddingHorizontal: indents.indent32,
    paddingVertical: indents.indent16,
    borderBottomWidth: indents.indent1,
    borderColor: colors.color4,
  },
  title: {
    fontSize: indents.indent64,
  },
});

export default styles;
