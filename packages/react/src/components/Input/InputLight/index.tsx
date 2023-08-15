import { ReactNode } from "react";
import { InputLightContainer } from "./styles";

export interface InputLightProps {
  children: ReactNode;
  disabled?: boolean;
}

export function InputLight({ children, disabled }: InputLightProps) {

  return <InputLightContainer disabled={disabled}>{children}</InputLightContainer>;
}
InputLight.displayName = "InputLight";