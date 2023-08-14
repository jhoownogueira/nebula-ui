import { ReactNode } from "react";
import { TextAreaDarkContainer } from "./styles";

export interface TextAreaDarkProps {
  children: ReactNode;
  disabled?: boolean;
  height?: string;
}

export function TextAreaDark({ children, height, disabled }: TextAreaDarkProps) {

  return <TextAreaDarkContainer height={height} disabled={disabled}>{children}</TextAreaDarkContainer>;
}
