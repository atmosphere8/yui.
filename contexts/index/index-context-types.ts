//imports
import { Dispatch, RefObject, SetStateAction } from "react";
import { TextInput } from "react-native";

//types
import { NoteType } from "@components/entities/note/note-types";

export type IndexContextType = {
  notes: NoteType[];
  set_notes: Dispatch<SetStateAction<NoteType[]>>;
  create: () => void;
  remove: (id: string) => void;
  current_note: string;
  set_current_note: Dispatch<SetStateAction<string>>;
  update: (id: string, new_text: string) => void;
  create_input_ref: RefObject<TextInput | null>;
};
