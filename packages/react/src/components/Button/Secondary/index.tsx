import { SecondaryButtonContainer, SizeRadius, SizeButton } from "./styles";

export interface SecondaryButtonProps {
  variantRadius: "px" | "xs" | "sm" | "md" | "lg" | "full";
  variantSize: "xs" | "sm" | "md" | "lg";
}

export function SecondaryButton({ variantRadius, variantSize }: SecondaryButtonProps) {
  const { radius } = SizeRadius[variantRadius];
  const { height, fontSizes, paddingSize } = SizeButton[variantSize];
  return <SecondaryButtonContainer radius={radius} height={height} fontSize={fontSizes} paddingSize={paddingSize}>Secondary Button</SecondaryButtonContainer>;
}
