import { ReactNode, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalTitle,
  Overlay,
} from "./styles";

export interface ModalDarkProps {
  title?: string;
  iconTitle?: ReactNode;
  iconColor?:
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
  iconBgColor?:
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
  children: ReactNode;
  isOpen: boolean;
  onOpenChange?: (open: boolean) => void;
  width?: string;
  closable?: boolean;
}

export function ModalDark({
  children,
  isOpen,
  onOpenChange,
  closable,
  title,
  iconTitle,
  iconColor,
  iconBgColor,
  width,
}: ModalDarkProps) {
  return (
    <Dialog.Root open={isOpen}  onOpenChange={closable ? onOpenChange : undefined}>
      <Dialog.Portal>
        <Overlay />
        <ModalContent width={width}>
          <ModalHeader iconColor={iconColor} iconBgColor={iconBgColor}>
            <ModalTitle>
              <div className="withIcon">
                <div className="icon">{iconTitle}</div>
                <h3>{title}</h3>
              </div>
            </ModalTitle>
            {closable && <ModalClose />}
          </ModalHeader>
          {children}
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
ModalDark.displayName = "ModalDark";
