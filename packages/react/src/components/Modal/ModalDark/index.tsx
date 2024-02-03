import { CSSProperties, ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalTitle,
  Overlay,
} from "./styles";

export interface ModalDarkProps {
  $title?: string;
  $iconTitle?: ReactNode;
  $iconColor?:
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
  $iconBgColor?:
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
  children: ReactNode;
  $isOpen: boolean;
  $onOpenChange?: (open: boolean) => void;
  $width?: string;
  $closable?: boolean;
  $className?: string;
  style?: CSSProperties;
}

export function ModalDark({
  children,
  $isOpen,
  $onOpenChange,
  $closable,
  $title,
  $iconTitle,
  $iconColor,
  $iconBgColor,
  $width,
  $className,
  style,
}: ModalDarkProps) {
  return (
    <Dialog.Root
      open={$isOpen}
      onOpenChange={$closable ? $onOpenChange : undefined}
    >
      <Dialog.Portal>
        <Overlay />
        <ModalContent $width={$width} className={$className} style={style}>
          <ModalHeader $iconColor={$iconColor} $iconBgColor={$iconBgColor}>
            <ModalTitle>
              <div className="withIcon">
                <div className="icon">{$iconTitle}</div>
                <h3>{$title}</h3>
              </div>
            </ModalTitle>
            {$closable && <ModalClose />}
          </ModalHeader>
          {children}
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
ModalDark.displayName = "ModalDark";
