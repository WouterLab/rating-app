import { ReactNode } from "react";

export interface HeadingTagProps {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}
