import { ReactNode } from "react";
import { InputDarkContainer } from "./styles";

export interface InputDarkProps {
  children: ReactNode;
  disabled?: boolean;
}

export function InputDark({ children, disabled }: InputDarkProps) {

  return <InputDarkContainer disabled={disabled}>{children}</InputDarkContainer>;
}
InputDark.displayName = "InputDark";
