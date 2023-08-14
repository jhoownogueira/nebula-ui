import { ReactNode } from "react";
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

export interface RowTableBodyProps {
  children: ReactNode;
  hoverColor?: string;
}

export interface TableHeaderProps {
  children: ReactNode;
}

export interface TableBodyProps {
  children: ReactNode;
}

export function TableRoot({ children }: TableProps) {
  return <TableRootContainer>{children}</TableRootContainer>;
}

export function TableHeader({ children }: TableHeaderProps) {
  return <TableHeaderContainer>{children}</TableHeaderContainer>;
}

export function TableBody({ children }: TableBodyProps) {
  return <TableBodyContainer>{children}</TableBodyContainer>;
}

export function RowTableBody({ children, hoverColor }: RowTableBodyProps) {
  return <RowTableBodyContainer hoverColor={hoverColor}>{children}</RowTableBodyContainer>;
}

export function TableFooter() {
  return <TableFooterContainer />;
}
