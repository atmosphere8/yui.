//imports
import { createContext, useContext, useRef, useState } from "react";
import { TextInput } from "react-native";
import {
  create_note,
  list_notes,
  remove_note,
  update_note,
} from "@storage/notes-storage";

//types
import { IndexContextType } from "./index-context-types";
import { NoteType } from "@components/entities/note/note-types";

const index_context = createContext<IndexContextType | undefined>(undefined);

export const useIndex = () => {
  const context = useContext(index_context);
  if (!context) throw new Error("useIndex must be used within IndexProvider");
  return context;
};

export const IndexProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, set_notes] = useState<NoteType[]>(list_notes());
  const [current_note, set_current_note] = useState("");
  const create_input_ref = useRef<TextInput | null>(null);

  const create = () => {
    if (current_note.trim() === "") return;

    create_note({ id: Date.now().toString(), text: current_note });

    set_notes(list_notes());
    set_current_note("");

    create_input_ref.current?.blur();
  };

  const remove = (id: string) => {
    remove_note(id);
    set_notes(list_notes());
  };

  const update = (id: string, new_text: string) => {
    update_note(id, new_text);
    set_notes(list_notes());
  };

  return (
    <index_context.Provider
      value={{
        notes,
        set_notes,
        create,
        remove,
        current_note,
        set_current_note,
        update,
        create_input_ref,
      }}
    >
      {children}
    </index_context.Provider>
  );
};
