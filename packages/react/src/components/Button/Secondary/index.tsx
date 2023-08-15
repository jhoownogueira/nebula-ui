import { ButtonHTMLAttributes } from "react";
import { SecondaryButtonContainer, SizeRadius, SizeButton } from "./styles";

export interface SecondaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variantRadius: "px" | "xs" | "sm" | "md" | "lg" | "full";
  variantSize: "xs" | "sm" | "md" | "lg";
  wFull?: boolean;
}

export function SecondaryButton({
  variantRadius,
  variantSize,
  children,
  wFull,
  disabled,
  ...props
}: SecondaryButtonProps) {
  const { radius } = SizeRadius[variantRadius];
  const { height, fontSizes, paddingSize } = SizeButton[variantSize];
  return (
    <SecondaryButtonContainer
      wFull={wFull}
      radius={radius}
      height={height}
      fontSize={fontSizes}
      disabled={disabled}
      paddingSize={paddingSize}
      {...props}
    >
      {children}
    </SecondaryButtonContainer>
  );
}
SecondaryButton.displayName = "SecondaryButton";
