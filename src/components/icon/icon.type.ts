import { IconName } from "@fortawesome/fontawesome-svg-core";

export type IconSize = "x-small" | "small" | "regular" | "large" | "x-large";

export type TIcon = {
  name: IconName;
  color?: string;
  className?: string;
  size?: IconSize;
  type?: string;
};
