import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import styles from "./Button.module.scss";
import { TButton } from "./button.type";
import Icon from "../icon";

const Button: FC<
  TButton &
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = ({
  color = "primary",
  size = "small",
  outlined = false,
  loading = false,
  squared = false,
  blank = false,
  iconRight = false,
  icon,
  width = "one-fifth",
  label,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={[
        styles["od-button"],
        className && className,
        color && styles[`is-${color}`],
        size && styles[`is-${size}`],
        width && styles[`is-${width}`],
        outlined && !blank && styles["is-outlined"],
        loading && styles["is-loading"],
        blank && styles["is-blank"],
        squared && styles["is-squared"],
      ]
        .join(" ")
        .replaceAll(" false", "")}
      {...props}
    >
      {loading ? (
        <Icon name="spinner" size={size} />
      ) : (
        <>
          {icon && !iconRight && (
            <Icon className="icon-left" name={icon} size={size} />
          )}
          <span className="label">{label}</span>
          {label && icon && iconRight && (
            <Icon className="icon-right" name={icon} size={size} />
          )}
        </>
      )}
      {children}
    </button>
  );
};

export default Button;
