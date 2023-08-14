import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalClose, ModalContent, ModalHeader, ModalTitle, Overlay } from "./styles";

export interface ModalDarkProps {
  title?: string;
  iconTitle?: ReactNode;
  iconColor?:
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
  iconBgColor?:
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
  children: ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  width?: string;
}

export function ModalDark({
  children,
  isOpen,
  onOpenChange,
  title,
  iconTitle,
  iconColor,
  iconBgColor,
  width,
}: ModalDarkProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
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
            <ModalClose></ModalClose>
          </ModalHeader>
          {children}
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
