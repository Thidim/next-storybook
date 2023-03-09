import { TSize } from "@/types/common";
import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";

type ButtonType = "button" | "submit" | "reset";

export type TButton = {
  type?: ButtonType;
  label?: string;
  color?: string;
  outlined?: boolean;
  className?: string;
  iconOnly?: boolean;
  iconRight?: boolean;
  loading?: boolean;
  blank?: boolean;
  squared?: boolean;
  width?: string;
  icon?: IconDefinition;
  style?: string;
  onClick?: () => void;
  size?: TSize;
  children?: JSX.Element;
};
