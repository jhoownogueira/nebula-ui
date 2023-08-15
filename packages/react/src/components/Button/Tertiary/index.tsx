import { ButtonHTMLAttributes } from "react";
import { SizeRadius, SizeButton, TertiaryButtonContainer } from "./styles";

export interface TertiaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variantRadius: "px" | "xs" | "sm" | "md" | "lg" | "full";
  variantSize: "xs" | "sm" | "md" | "lg";
  wFull?: boolean;
}

export function TertiaryButton({ variantRadius, variantSize, children, wFull, disabled }: TertiaryButtonProps) {
  const { radius } = SizeRadius[variantRadius];
  const { height, fontSizes, paddingSize } = SizeButton[variantSize];
  return <TertiaryButtonContainer wFull={wFull} radius={radius} height={height} fontSize={fontSizes} disabled={disabled} paddingSize={paddingSize}>{children}</TertiaryButtonContainer>;
}
TertiaryButton.displayName = "TertiaryButton";