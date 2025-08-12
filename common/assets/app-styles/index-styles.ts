//imports
import { StyleSheet } from "react-native";

//globals
import indents from "@globals/indents";

const styles = StyleSheet.create({
  main: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  notes: {
    display: "flex",
    gap: indents.indent48,
    paddingVertical: indents.indent16,
    paddingHorizontal: indents.indent32,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    gap: indents.indent24,
  },
  input: {
    flex: 1,
  },
});

export default styles;
