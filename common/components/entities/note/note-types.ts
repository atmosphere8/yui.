export type Props = {
  text: string;
  remove: () => void;
  update: (new_text: string) => void;
};

export type NoteType = {
  text: string;
  id: string;
};
