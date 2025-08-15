//imports
import { CaretCircleDoubleRightIcon } from "phosphor-react-native";
import { View, FlatList } from "react-native";
import { Header } from "@components/fragments/index";
import { Input, Button } from "@components/ui/index";
import { Note } from "@components/entities/index";
import { useState } from "react";

//styles
import styles from "@appstyles/index-styles";

//globals
import indents from "@globals/indents";

//types
import { note } from "@components/entities/note/note-types";

const Index = () => {
  const [notes, set_notes] = useState<note[]>([]);
  const [current_note, set_current_note] = useState("");

  const add = () => {
    if (current_note.trim() === "") return;

    set_notes((prev) => [
      ...prev,
      { id: Date.now().toString(), text: current_note },
    ]);
    set_current_note("");
  };

  const remove = (item: note) => {
    set_notes((prev) => prev.filter((note) => note.id !== item.id));
  };

  const update = (id: string, new_text: string) => {
    set_notes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, text: new_text } : note))
    );
  };

  return (
    <View>
      <Header />
      <View style={styles.notes}>
        <View style={styles.actions}>
          <Input
            style={styles.input}
            value={current_note}
            on_change={set_current_note}
          />
          <Button
            action={add}
            icon={<CaretCircleDoubleRightIcon size={28} />}
          />
        </View>
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <Note
              text={item.text}
              remove={() => remove(item)}
              update={(new_text) => update(item.id, new_text)}
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
};

export default Index;
