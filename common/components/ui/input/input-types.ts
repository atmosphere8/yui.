//imports
import { Dispatch, SetStateAction } from "react";

export type props = {
  style: object;
  on_change: Dispatch<SetStateAction<string>>;
  value: string;
};
