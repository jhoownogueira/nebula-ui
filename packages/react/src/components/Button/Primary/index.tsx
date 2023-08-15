import { ButtonHTMLAttributes } from "react";
import { PrimaryButtonContainer, SizeRadius, SizeButton } from "./styles";

export interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variantRadius: "px" | "xs" | "sm" | "md" | "lg" | "full";
  variantSize: "xs" | "sm" | "md" | "lg";
  wFull?: boolean;
}

export function PrimaryButton({ variantRadius, variantSize, children, wFull, ...props }: PrimaryButtonProps) {
  const { radius } = SizeRadius[variantRadius];
  const { height, fontSizes, paddingSize } = SizeButton[variantSize];
  return <PrimaryButtonContainer wFull={wFull} radius={radius} height={height} fontSize={fontSizes} paddingSize={paddingSize}  {...props}>{children}</PrimaryButtonContainer>;
}
PrimaryButton.displayName = "PrimaryButton";
