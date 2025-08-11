//imports
import { PencilSimpleIcon, TrashSimpleIcon } from "phosphor-react-native";
import { View, Text } from "react-native";
import { Button } from "../../ui/index";

//styles
import styles from "./note-styles";

//types
import { props } from "./note-types";

//globals
import colors from "../../../assets/globals/colors";

export default ({ text, remove }: props) => {
  return (
    <View style={styles.note}>
      <Text>{text}</Text>
      <View style={styles.actions}>
        <Button
          style={styles.button}
          action={remove}
          icon={<PencilSimpleIcon size={24} color={`${colors.color5}`} />}
        />
        <Button
          style={[styles.button, styles.remove_button]}
          action={remove}
          icon={<TrashSimpleIcon size={24} color={`${colors.color1}`} />}
        />
      </View>
    </View>
  );
};
