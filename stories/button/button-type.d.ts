import { TSize, TWidth } from "@/types/common";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export type TButton = {
  label: string;
  color?: string;
  outlined?: boolean;
  iconRight?: boolean;
  loading?: boolean;
  blank?: boolean;
  className?: string;
  squared?: boolean;
  width?: TWidth;
  icon?: IconName;
  size?: TSize;
};
