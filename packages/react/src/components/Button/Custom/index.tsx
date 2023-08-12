import { ReactNode } from "react";
import { SizeRadius, SizeButton, CustomButtonContainer } from "./styles";

export interface CustomButtonProps {
  variantRadius: "px" | "xs" | "sm" | "md" | "lg" | "full";
  variantSize: "xs" | "sm" | "md" | "lg";
  color: string;
  backgroundColor: string;
  children: ReactNode;
  disabled?: boolean;
}

export function CustomButton({
  variantRadius,
  variantSize,
  children,
  disabled,
  color,
  backgroundColor,
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
    >
      {children}
    </CustomButtonContainer>
  );
}
