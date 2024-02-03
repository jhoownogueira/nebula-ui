import { PillCustomContainer } from "./styles";

export interface PillCustomProps {
  $text: string;
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
  $borderColor:
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
}

export function PillCustom({
  $text,
  $color,
  $backgroundColor,
  $borderColor,
}: PillCustomProps) {
  return (
    <PillCustomContainer
      $color={$color}
      $backgroundColor={$backgroundColor}
      $borderColor={$borderColor}
    >
      <span>{$text}</span>
    </PillCustomContainer>
  );
}
PillCustom.displayName = "PillCustom";
