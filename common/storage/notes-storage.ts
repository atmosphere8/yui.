import { storage } from "./index";

import { NoteType } from "@components/entities/note/note-types";

export const list_notes = (): NoteType[] => {
  const notes_string = storage.getString("notes_storage");

  return notes_string ? JSON.parse(notes_string) : [];
};

export const create_note = (note: NoteType) => {
  const notes = list_notes();

  notes.push(note);
  storage.set("notes_storage", JSON.stringify(notes));
};

export const remove_note = (id: string) => {
  const notes = list_notes();
  const new_notes = notes.filter((note) => note.id !== id);

  storage.set("notes_storage", JSON.stringify(new_notes));
};

export const update_note = (id: string, new_text: string) => {
  const notes = list_notes();

  const updated_notes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, text: new_text };
    }
    return note;
  });

  storage.set("notes_storage", JSON.stringify(updated_notes));
};
