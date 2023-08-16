import { PillCustomContainer } from "./styles";

export interface PillCustomProps {
  $text: string;
  $color:
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
  $backgroundColor:
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
    $borderColor:
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
}

export function PillCustom({
  $text,
  $color,
  $backgroundColor,
  $borderColor,
}: PillCustomProps) {
  return (
    <PillCustomContainer $color={$color} $backgroundColor={$backgroundColor} $borderColor={$borderColor}>
      <span>
       {$text}
      </span>
    </PillCustomContainer>
  );
}
PillCustom.displayName = "PillCustom";
