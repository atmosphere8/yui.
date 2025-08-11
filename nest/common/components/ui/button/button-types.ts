import { IconProps } from "phosphor-react-native";
import { ReactElement } from "react";

export type props = {
  action: () => void;
  icon: ReactElement<IconProps>;
  style?: object;
};
