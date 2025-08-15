//imports
import { useState } from "react";
import {
  CheckIcon,
  PencilSimpleIcon,
  TrashSimpleIcon,
} from "phosphor-react-native";
import { View, Text, TextInput } from "react-native";
import { Button } from "@components/ui/index";

//styles
import styles from "./note-styles";

//types
import { props } from "./note-types";

//globals
import colors from "@globals/colors";

export default ({ text, remove, update }: props) => {
  const [is_editing, set_is_editing] = useState(false);
  const [new_text, set_new_text] = useState(text);

  const edit = () => {
    set_is_editing(!is_editing);
  };

  const apply = () => {
    update(new_text);
    set_is_editing(false);
  };

  return (
    <View style={styles.note}>
      {is_editing ? (
        <TextInput
          style={styles.text_input}
          value={new_text}
          onChangeText={(value) => set_new_text(value)}
          autoFocus={true}
        />
      ) : (
        <Text>{text}</Text>
      )}
      <View style={styles.actions}>
        {is_editing ? (
          <Button
            style={[styles.button, styles.apply_button]}
            action={apply}
            icon={<CheckIcon size={24} color={`${colors.color1}`} />}
          />
        ) : (
          <Button
            style={styles.button}
            action={edit}
            icon={<PencilSimpleIcon size={24} color={`${colors.color5}`} />}
          />
        )}
        <Button
          style={[styles.button, styles.remove_button]}
          action={remove}
          icon={<TrashSimpleIcon size={24} color={`${colors.color1}`} />}
        />
      </View>
    </View>
  );
};
