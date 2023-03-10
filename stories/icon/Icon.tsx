import { sizeToIconSizeMap } from "@/utils/size";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { TIcon } from "./icon-type";
import styles from "./Icon.module.scss";

const doUpFirstLetter = (str: string) =>
  str
    .replace(str[0], (match) => match.toUpperCase())
    .replace(/-[a-z]/gm, (match) => match[1].toUpperCase());

const Icon: FC<TIcon> = ({
  name,
  size = "small",
  color,
  type,
  className,
  ...props
}) => {
  return (
    <>
      <FontAwesomeIcon
        className={[
          styles["od-icon"],
          type && styles[`is-${type}`],
          className && className,
        ]
          .join(" ")
          .replaceAll(" false", "")}
        color={color}
        size={sizeToIconSizeMap[size]}
        icon={fas[`fa${doUpFirstLetter(name)}`]}
        {...props}
      />
    </>
  );
};

export default Icon;
