import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface AdditionTagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "medium" | "large";
  color?: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
  children: ReactNode;
}
