import { ReactNode } from "react";
import { SizeRadius, SizeButton, TertiaryButtonContainer } from "./styles";

export interface TertiaryButtonProps {
  variantRadius: "px" | "xs" | "sm" | "md" | "lg" | "full";
  variantSize: "xs" | "sm" | "md" | "lg";
  children: ReactNode;
  disabled?: boolean;
}

export function TertiaryButton({ variantRadius, variantSize, children, disabled }: TertiaryButtonProps) {
  const { radius } = SizeRadius[variantRadius];
  const { height, fontSizes, paddingSize } = SizeButton[variantSize];
  return <TertiaryButtonContainer radius={radius} height={height} fontSize={fontSizes} disabled={disabled} paddingSize={paddingSize}>{children}</TertiaryButtonContainer>;
}