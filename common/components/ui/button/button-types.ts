import { IconProps } from "phosphor-react-native";
import { ReactElement } from "react";

export type Props = {
  action: () => void;
  icon: ReactElement<IconProps>;
  style?: object;
};
