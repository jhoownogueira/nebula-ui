import { HTMLProps, ReactNode } from "react";
import {
  RowTableBodyContainer,
  TableBodyContainer,
  TableFooterContainer,
  TableHeaderContainer,
  TableRootContainer,
} from "./styles";

export interface TableProps {
  children: ReactNode;
}

export interface TableBodyProps extends TableProps {
  $breakPointMobile?: string;
  $maxHeightMobile?: string;

  $breakPointTablet?: string;
  $maxHeightTablet?: string;

  $breakPointSm?: string;
  $maxHeightSm?: string;

  $breakPointMd?: string;
  $maxHeightMd?: string;

  $breakPointLg?: string;
  $maxHeightLg?: string;
}

export interface RowTableBodyProps extends Omit<TableProps, 'children'>, HTMLProps<HTMLTableRowElement> {
  $hoverColor?: string;
}

export interface TableHeaderProps {
  children: ReactNode;
}

export function TableRoot({ children }: TableProps) {
  return <TableRootContainer>{children}</TableRootContainer>;
}
TableRoot.displayName = "TableRoot";

export function TableHeader({ children }: TableHeaderProps) {
  return <TableHeaderContainer>{children}</TableHeaderContainer>;
}
TableHeader.displayName = "TableHeader";

export function TableBody({
  children,
  $breakPointMobile,
  $maxHeightMobile,
  $breakPointTablet,
  $maxHeightTablet,
  $breakPointLg,
  $maxHeightLg,
  $breakPointMd,
  $maxHeightMd,
  $breakPointSm,
  $maxHeightSm,
}: TableBodyProps) {
  return (
    <TableBodyContainer
      $breakPointMobile={$breakPointMobile}
      $maxHeightMobile={$maxHeightMobile}
      $breakPointTablet={$breakPointTablet}
      $maxHeightTablet={$maxHeightTablet}
      $breakPointLg={$breakPointLg}
      $maxHeightLg={$maxHeightLg}
      $breakPointMd={$breakPointMd}
      $maxHeightMd={$maxHeightMd}
      $breakPointSm={$breakPointSm}
      $maxHeightSm={$maxHeightSm}
    >
      {children}
    </TableBodyContainer>
  );
}
TableBody.displayName = "TableBody";

export function RowTableBody({ children, $hoverColor, ...props }: RowTableBodyProps) {
  return (
    <RowTableBodyContainer $hoverColor={$hoverColor} {...props}>
      {children}
    </RowTableBodyContainer>
  );
}
RowTableBody.displayName = "RowTableBody";

export function TableFooter() {
  return <TableFooterContainer />;
}
TableFooter.displayName = "TableFooter";
