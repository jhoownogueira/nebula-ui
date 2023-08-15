import { ButtonHTMLAttributes } from "react";
import { SizeRadius, SizeButton, CustomButtonContainer } from "./styles";

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variantRadius: "px" | "xs" | "sm" | "md" | "lg" | "full";
  variantSize: "xs" | "sm" | "md" | "lg";
  color:
    | "orion_black"
    | "orion_black_box"
    | "orion_white"
    | "sup_solar_yellow100"
    | "sup_ruby_pink100"
    | "sup_forest_green100"
    | "sup_fire_red100"
    | "sup_mist_aquamarine100"
    | "sup_rustic_bronze100"
    | "sup_eletric_blue100"
    | "sup_amethyst_purple100"
    | "sup_mocha_brown100"
    | "gray_200"
    | "gray_300"
    | "gray_700"
    | "gray_900"
    | "primary"
    | "primary_hover"
    | "primary_ghost"
    | "primary_ghost_text"
    | "secondary"
    | "secondary_hover"
    | "secondary_ghost"
    | "secondary_ghost_text"
    | "tertiary"
    | "tertiary_hover"
    | "tertiary_ghost"
    | "tertiary_ghost_text";
  backgroundColor:
    | "orion_black"
    | "orion_black_box"
    | "orion_white"
    | "sup_solar_yellow100"
    | "sup_ruby_pink100"
    | "sup_forest_green100"
    | "sup_fire_red100"
    | "sup_mist_aquamarine100"
    | "sup_rustic_bronze100"
    | "sup_eletric_blue100"
    | "sup_amethyst_purple100"
    | "sup_mocha_brown100"
    | "gray_200"
    | "gray_300"
    | "gray_700"
    | "gray_900"
    | "primary"
    | "primary_hover"
    | "primary_ghost"
    | "primary_ghost_text"
    | "secondary"
    | "secondary_hover"
    | "secondary_ghost"
    | "secondary_ghost_text"
    | "tertiary"
    | "tertiary_hover"
    | "tertiary_ghost"
    | "tertiary_ghost_text";
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
  ...props
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
      {...props}
    >
      {children}
    </CustomButtonContainer>
  );
}
CustomButton.displayName = "CustomButton";
