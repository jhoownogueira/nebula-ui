import { ReactNode } from "react";
import { TextAreaLightContainer } from "./styles";

export interface TextAreaLightProps {
  children: ReactNode;
  disabled?: boolean;
  height?: string;
}

export function TextAreaLight({ children, height, disabled }: TextAreaLightProps) {

  return <TextAreaLightContainer height={height} disabled={disabled}>{children}</TextAreaLightContainer>;
}
TextAreaLight.displayName = "TextAreaLight";
