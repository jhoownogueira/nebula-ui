import { ReactNode } from "react";
import { SecondaryButtonContainer, SizeRadius, SizeButton } from "./styles";

export interface SecondaryButtonProps {
  variantRadius: "px" | "xs" | "sm" | "md" | "lg" | "full";
  variantSize: "xs" | "sm" | "md" | "lg";
  children: ReactNode;
  disabled?: boolean;
}

export function SecondaryButton({ variantRadius, variantSize, children, disabled }: SecondaryButtonProps) {
  const { radius } = SizeRadius[variantRadius];
  const { height, fontSizes, paddingSize } = SizeButton[variantSize];
  return <SecondaryButtonContainer radius={radius} height={height} fontSize={fontSizes} disabled={disabled} paddingSize={paddingSize}>{children}</SecondaryButtonContainer>;
}