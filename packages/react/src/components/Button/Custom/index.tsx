import { ButtonHTMLAttributes } from "react";
import { SizeRadius, SizeButton, CustomButtonContainer } from "./styles";

export interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variantRadius: "px" | "xs" | "sm" | "md" | "lg" | "full";
  variantSize: "xs" | "sm" | "md" | "lg";
  color: string;
  backgroundColor: string;
  wFull?: boolean;
}

export function CustomButton({
  variantRadius,
  variantSize,
  children,
  disabled,
  color,
  backgroundColor,
  wFull,
}: CustomButtonProps) {
  const { radius } = SizeRadius[variantRadius];
  const { height, fontSizes, paddingSize } = SizeButton[variantSize];
  return (
    <CustomButtonContainer
      color={color}
      backgroundColor={backgroundColor}
      radius={radius}
      height={height}
      fontSize={fontSizes}
      disabled={disabled}
      paddingSize={paddingSize}
      wFull={wFull}
    >
      {children}
    </CustomButtonContainer>
  );
}
