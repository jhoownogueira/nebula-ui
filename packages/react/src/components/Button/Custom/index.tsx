import { ButtonHTMLAttributes } from "react";
import { SizeRadius, SizeButton, CustomButtonContainer } from "./styles";

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  $variantRadius: "px" | "xs" | "sm" | "md" | "lg" | "full";
  $variantSize: "xs" | "sm" | "md" | "lg";
  $color:
    | "flash_black"
    | "flash_black_box"
    | "flash_white"
    | "success"
    | "alert"
    | "info"
    | "highlight"
    | "neutral_50"
    | "neutral_100"
    | "neutral_700"
    | "neutral_900"
    | "primary"
    | "primary_600"
    | "primary_100"
    | "primary_200"
    | "secondary"
    | "secondary_600"
    | "secondary_100"
    | "secondary_200"
    | "neutral"
    | "neutral_600"
    | "neutral_100"
    | "neutral_200";
  $backgroundColor:
    | "flash_black"
    | "flash_black_box"
    | "flash_white"
    | "success"
    | "alert"
    | "info"
    | "highlight"
    | "neutral_50"
    | "neutral_100"
    | "neutral_700"
    | "neutral_900"
    | "primary"
    | "primary_600"
    | "primary_100"
    | "primary_200"
    | "secondary"
    | "secondary_600"
    | "secondary_100"
    | "secondary_200"
    | "neutral"
    | "neutral_600"
    | "neutral_100"
    | "neutral_200";
  $wFull?: boolean;
}

export function CustomButton({
  $variantRadius,
  $variantSize,
  children,
  disabled,
  $color,
  $backgroundColor,
  $wFull,
  ...props
}: CustomButtonProps) {
  const { $radius } = SizeRadius[$variantRadius];
  const { $height, $fontSizes, $paddingSize } = SizeButton[$variantSize];
  return (
    <CustomButtonContainer
      $color={$color}
      $backgroundColor={$backgroundColor}
      $radius={$radius}
      $height={$height}
      $fontSize={$fontSizes}
      disabled={disabled}
      $paddingSize={$paddingSize}
      $wFull={$wFull}
      {...props}
    >
      {children}
    </CustomButtonContainer>
  );
}
CustomButton.displayName = "CustomButton";
