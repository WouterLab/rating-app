import { AdditionTagProps } from "./AdditionTag.props";
import styles from "./AdditionTag.module.scss";
import cn from "classnames";

export const AdditionTag = ({
  size = "medium",
  children,
  color = "ghost",
  href,
  className,
  ...props
}: AdditionTagProps) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.grey]: color === "grey",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
