import { IconName } from "@fortawesome/fontawesome-svg-core";

export type ButtonWidth =
  | "min"
  | "one-fifth"
  | "one-fourth"
  | "one-third"
  | "half"
  | "two-third"
  | "three-fourth"
  | "four-fifth"
  | "full";

export type ButtonSize = "x-small" | "small" | "regular" | "large" | "x-large";

export type TButton = {
  label: string;
  color?: string;
  outlined?: boolean;
  iconRight?: boolean;
  loading?: boolean;
  blank?: boolean;
  className?: string;
  squared?: boolean;
  width?: ButtonWidth;
  icon?: IconName;
  size?: ButtonSize;
};
