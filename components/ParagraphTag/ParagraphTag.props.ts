import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ParagraphTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: "small" | "medium" | "large";
  children: ReactNode;
}
