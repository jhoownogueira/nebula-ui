import { ReactNode } from "react";
import { PrimaryButtonContainer, SizeRadius, SizeButton } from "./styles";

export interface PrimaryButtonProps {
  variantRadius: "px" | "xs" | "sm" | "md" | "lg" | "full";
  variantSize: "xs" | "sm" | "md" | "lg";
  children: ReactNode;
  disabled?: boolean;
}

export function PrimaryButton({ variantRadius, variantSize, children, disabled }: PrimaryButtonProps) {
  const { radius } = SizeRadius[variantRadius];
  const { height, fontSizes, paddingSize } = SizeButton[variantSize];
  return <PrimaryButtonContainer radius={radius} height={height} fontSize={fontSizes} disabled={disabled} paddingSize={paddingSize}>{children}</PrimaryButtonContainer>;
}
