//imports
import { CaretCircleDoubleRightIcon } from "phosphor-react-native";
import { View, FlatList } from "react-native";
import { Header } from "@components/fragments/index";
import { Input, Button } from "@components/ui/index";
import { Note } from "@components/entities/index";

//styles
import styles from "@appstyles/index-styles";

//globals
import indents from "@globals/indents";

//contexts
import { IndexProvider, useIndex } from "@contexts/index/index-context";

const Index = () => {
  const { notes, create, remove, current_note, set_current_note, update } =
    useIndex();

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
            action={create}
            icon={<CaretCircleDoubleRightIcon size={28} />}
          />
        </View>
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <Note
              text={item.text}
              remove={() => remove(item.id)}
              update={(new_text) => update(item.id, new_text)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ height: indents.indent16 }} />
          )}
        />
      </View>
    </View>
  );
};

const IndexWrapper = () => {
  return (
    <IndexProvider>
      <Index />
    </IndexProvider>
  );
};

export default IndexWrapper;
