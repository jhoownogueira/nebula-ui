import { ButtonContainer, variantToColors } from "./styles";

export interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
}

export function Button({ variant }: ButtonProps) {
  const { bgColor } = variantToColors[variant];
  return <ButtonContainer bgColor={bgColor}>Button</ButtonContainer>;
}
