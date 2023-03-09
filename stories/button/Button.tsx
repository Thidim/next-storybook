import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FC } from "react";
import styles from "./Button.module.scss";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { TButton } from "./button-type";
// import { TSize } from "@/types/common";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

// const buttonSizeToIconSizeMap: Record<TSize, SizeProp> = {
//   small: "sm",
//   regular: "sm",
//   large: "lg",
// };

const Button: FC<TButton> = ({
  type = "button",
  color = "primary",
  size = "small",
  outlined = false,
  loading = false,
  squared = false,
  blank = false,
  iconOnly = false,
  iconRight = false,
  icon,
  className,
  width = "min",
  label,
  style,
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={[
        styles["od-button"],
        className && className,
        color && styles[`is-${color}`],
        size && styles[`is-${size}`],
        width && styles[`is-${width}`],
        outlined && styles["is-outlined"],
        loading && styles["is-loading"],
        blank && styles["is-blank"],
        squared && styles["is-squared"],
        style && style,
      ]
        .join(" ")
        .replaceAll(" false", "")}
      onClick={onClick}
      {...props}
    >
      {loading || (iconOnly && icon) ? (
        // <FontAwesomeIcon
        //   icon={iconOnly && icon ? icon : faSpinner}
        //   size={buttonSizeToIconSizeMap[size]}
        // />
        <></>
      ) : (
        <>
          {icon && !iconRight && (
            // <FontAwesomeIcon
            //   className="icon-left"
            //   icon={icon}
            //   size={buttonSizeToIconSizeMap[size]}
            // />
            <></>
          )}
          {label && <span className="label">{label}</span>}
          {label && icon && iconRight && (
            // <FontAwesomeIcon
            //   className="icon-right"
            //   icon={icon}
            //   size={buttonSizeToIconSizeMap[size]}
            // />
            <></>
          )}
        </>
      )}
      {children}
    </button>
  );
};

export default Button;
