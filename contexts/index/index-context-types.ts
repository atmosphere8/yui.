//imports
import { Dispatch, SetStateAction } from "react";

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
};
