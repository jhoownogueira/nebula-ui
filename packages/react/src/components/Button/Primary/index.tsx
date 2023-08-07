import { PrimaryButtonContainer, SizeRadius, SizeButton } from "./styles";

export interface PrimaryButtonProps {
  variantRadius: "px" | "xs" | "sm" | "md" | "lg" | "full";
  variantSize: "xs" | "sm" | "md" | "lg";
}

export function PrimaryButton({ variantRadius, variantSize }: PrimaryButtonProps) {
  const { radius } = SizeRadius[variantRadius];
  const { height, fontSizes, paddingSize } = SizeButton[variantSize];
  return <PrimaryButtonContainer radius={radius} height={height} fontSize={fontSizes} paddingSize={paddingSize}>Primary Button</PrimaryButtonContainer>;
}
