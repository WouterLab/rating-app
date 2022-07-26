import { ParagraphTagProps } from "./ParagraphTag.props";
import styles from "./ParagraphTag.module.scss";
import cn from "classnames";

export const ParagraphTag = ({
  size = "medium",
  children,
  className,
  ...props
}: ParagraphTagProps) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
