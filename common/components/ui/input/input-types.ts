//imports
import { Dispatch, RefObject, SetStateAction } from "react";
import { TextInput } from "react-native";

export type Props = {
  style: object;
  on_change: Dispatch<SetStateAction<string>>;
  value: string;
  ref: RefObject<TextInput | null>;
};
