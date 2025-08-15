//imports
import { StyleSheet } from "react-native";

//globals
import indents from "@globals/indents";
import colors from "@globals/colors";

const styles = StyleSheet.create({
  note: {
    position: "relative",
    width: "100%",
    height: 150,
    borderRadius: indents.indent16,
    borderWidth: indents.indent1,
    borderColor: colors.color4,
    padding: indents.indent8,
  },
  actions: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    gap: indents.indent4,
    position: "absolute",
    padding: 8,
    right: 8,
    bottom: 8,
    height: 40,
    borderRadius: indents.indent16,
    borderWidth: indents.indent1,
    borderColor: colors.color4,
  },
  button: {
    maxWidth: 30,
    minWidth: 30,
    maxHeight: 30,
    minHeight: 30,
    borderRadius: indents.indent8,
  },
  remove_button: {
    backgroundColor: colors.color_red,
  },
  apply_button: {
    backgroundColor: colors.color_blue,
  },
  text_input: {
    padding: 0,
    margin: 0,
  },
});

export default styles;
