import { ButtonHTMLAttributes } from "react";
import { SizeRadius, SizeButton, OutlineButtonContainer } from "./styles";

export interface OutlineButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variantRadius: "px" | "xs" | "sm" | "md" | "lg" | "full";
  variantSize: "xs" | "sm" | "md" | "lg";
  color:
    | "orion_black"
    | "orion_white"
    | "sup_solar_yellow100"
    | "sup_ruby_pink100"
    | "sup_forest_green100"
    | "sup_fire_red100"
    | "sup_mist_aquamarine100"
    | "sup_rustic_bronze100"
    | "sup_eletric_blue100"
    | "sup_amethyst_purple100"
    | "sup_mocha_brown100";
  wFull?: boolean;
}

export function OutlineButton({
  variantRadius,
  variantSize,
  children,
  wFull,
  disabled,
  color,
  ...props
}: OutlineButtonProps) {
  const { radius } = SizeRadius[variantRadius];
  const { height, fontSizes, paddingSize } = SizeButton[variantSize];
  return (
    <OutlineButtonContainer
      wFull={wFull}
      radius={radius}
      height={height}
      fontSize={fontSizes}
      disabled={disabled}
      paddingSize={paddingSize}
      color={color}
      {...props}
    >
      {children}
    </OutlineButtonContainer>
  );
}
