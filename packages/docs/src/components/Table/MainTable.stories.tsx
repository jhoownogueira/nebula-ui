import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  TableBody,
  TableFooter,
  TableHeader,
  TableRoot,
  RowTableBody,
  TableBodyProps,
  RowTableBodyProps,
} from "@orioncore/react";

type BasicTableProps = TableBodyProps & RowTableBodyProps;

export default {
  title: "Data Display/Table",
  component: TableRoot,
  argTypes: {},
} as Meta;

export const BasicTable: StoryObj<BasicTableProps> = ({
  hoverColor,
  breakPointMobile,
  maxHeightMobile,
  breakPointTablet,
  maxHeightTablet,
  breakPointLg,
  maxHeightLg,
  breakPointMd,
  maxHeightMd,
  breakPointSm,
  maxHeightSm,
}) => (
  <TableRoot>
    <TableHeader>
      <table>
        <thead>
          <tr>
            <th style={{ width: "100%" }}>Name</th>
            <th style={{ width: "100px" }}>Age</th>
          </tr>
        </thead>
      </table>
    </TableHeader>
    <TableBody
      breakPointMobile={breakPointMobile}
      maxHeightMobile={maxHeightMobile}
      breakPointTablet={breakPointTablet}
      maxHeightTablet={maxHeightTablet}
      breakPointLg={breakPointLg}
      maxHeightLg={maxHeightLg}
      breakPointMd={breakPointMd}
      maxHeightMd={maxHeightMd}
      breakPointSm={breakPointSm}
      maxHeightSm={maxHeightSm}
    >
      <table>
        <tbody>
          <RowTableBody hoverColor={hoverColor}>
            <td style={{ width: "100%" }}>John</td>
            <td style={{ width: "100px" }}>30</td>
          </RowTableBody>
          <RowTableBody hoverColor={hoverColor}>
            <td style={{ width: "100%" }}>John</td>
            <td style={{ width: "100px" }}>30</td>
          </RowTableBody>
        </tbody>
      </table>
    </TableBody>
    <TableFooter />
  </TableRoot>
);

BasicTable.args = {
  breakPointMobile: "480px",
  maxHeightMobile: "328px",
  breakPointTablet: "800px",
  maxHeightTablet: "350px",
  breakPointLg: "1025px",
  maxHeightLg: "328px",
  breakPointMd: "1370px",
  maxHeightMd: "328px",
  breakPointSm: "1536px",
  maxHeightSm: "500px",
  hoverColor: "#E7E7E7",
};
