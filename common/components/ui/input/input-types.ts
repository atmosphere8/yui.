//imports
import { Dispatch, SetStateAction } from "react";

export type Props = {
  style: object;
  on_change: Dispatch<SetStateAction<string>>;
  value: string;
};
