// //imports
import { View, TextInput, Pressable, Text, FlatList } from "react-native";
import { Header } from "../common/components/fragments";
import { Input, Button } from "../common/components/ui";
import { Note } from "../common/components/entities";

// hooks
import { useState } from "react";

// styles
import styles from "./app-styles";

//globals
import indents from "../common/assets/globals/indents";

export default function App() {
  const [notes, set_notes] = useState<string[]>([]);
  const [current_note, set_current_note] = useState("");

  const add_to_notes = () => {
    if (current_note.trim() === "") return;

    set_notes((prev) => [...prev, current_note]);
    set_current_note("");
  };

  return (
    <View style={styles.main}>
      <Header />
      <View style={styles.notes}>
        <View style={styles.actions}>
          <Input
            style={styles.input}
            value={current_note}
            on_change={set_current_note}
          />
          <Button action={add_to_notes} />
        </View>
        <FlatList
          data={notes}
          renderItem={({ item }) => <Note text={item} />}
          keyExtractor={(index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ height: indents.indent16 }} />
          )}
        ></FlatList>
      </View>
    </View>
  );
}
