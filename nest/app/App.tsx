//imports
import { View, TextInput, Pressable, Text, FlatList } from "react-native";
import { Header } from "../common/components/fragments";
import { Input, Button } from "../common/components/ui";
import { Note } from "../common/components/entities";
import { useState } from "react";

//styles
import styles from "./app-styles";

//globals
import indents from "../common/assets/globals/indents";
import { CaretCircleDoubleRightIcon } from "phosphor-react-native";

//types
import { note } from "../common/components/entities/note/note-types";

export default function App() {
  const [notes, set_notes] = useState<note[]>([]);
  const [current_note, set_current_note] = useState("");

  const add_to_notes = () => {
    if (current_note.trim() === "") return;

    set_notes((prev) => [
      ...prev,
      { id: Date.now().toString(), text: current_note },
    ]);
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
          <Button
            action={add_to_notes}
            icon={<CaretCircleDoubleRightIcon size={28} />}
          />
        </View>
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <Note
              text={item.text}
              remove={() => {
                set_notes((prev) => prev.filter((note) => note.id !== item.id));
              }}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ height: indents.indent16 }} />
          )}
        ></FlatList>
      </View>
    </View>
  );
}
