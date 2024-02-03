import { ButtonHTMLAttributes } from "react";
import { SizeRadius, SizeButton, OutlineButtonContainer } from "./styles";

export interface OutlineButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  $variantRadius: "px" | "xs" | "sm" | "md" | "lg" | "full";
  $variantSize: "xs" | "sm" | "md" | "lg";
  $color:
    | "flash_black"
    | "flash_black_box"
    | "flash_white"
    | "sup_solar_yellow100"
    | "sup_ruby_pink100"
    | "success"
    | "sup_fire_red100"
    | "sup_mist_aquamarine100"
    | "alert"
    | "info"
    | "highlight"
    | "sup_mocha_brown100"
    | "gray_200"
    | "gray_300"
    | "gray_700"
    | "gray_900"
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

export function OutlineButton({
  $variantRadius,
  $variantSize,
  children,
  $wFull,
  disabled,
  $color,
  ...props
}: OutlineButtonProps) {
  const { $radius } = SizeRadius[$variantRadius];
  const { $height, $fontSizes, $paddingSize } = SizeButton[$variantSize];
  return (
    <OutlineButtonContainer
      $wFull={$wFull}
      $radius={$radius}
      $height={$height}
      $fontSize={$fontSizes}
      disabled={disabled}
      $paddingSize={$paddingSize}
      $color={$color}
      {...props}
    >
      {children}
    </OutlineButtonContainer>
  );
}
OutlineButton.displayName = "OutlineButton";
