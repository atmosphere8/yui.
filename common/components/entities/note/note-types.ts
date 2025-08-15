export type props = {
  text: string;
  remove: () => void;
  update: (new_text: string) => void;
};

export type note = {
  text: string;
  id: string;
};
