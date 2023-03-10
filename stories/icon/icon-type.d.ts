import { TSize } from "@/types/common";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export type TIcon = {
  name: IconName;
  color?: string;
  className?: string;
  size?: TSize;
  type?: string;
};
