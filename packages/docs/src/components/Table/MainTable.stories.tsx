import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  TableBody,
  TableFooter,
  TableHeader,
  TableRoot,
  RowTableBody,
  RowTableBodyProps,
} from "@orioncore/react";

export default {
  title: "Data Display/Table",
  component: TableRoot,
  argTypes: {
    
  },
} as Meta;

export const BasicTable: StoryObj<RowTableBodyProps> = (args: any) => (
  <TableRoot>
    <TableHeader>
      <table>
        <thead>
          <tr>
            <th style={{width: '100%'}}>Name</th>
            <th style={{width: '100px'}}>Age</th>
          </tr>
        </thead>
      </table>
    </TableHeader>
    <TableBody>
      <table>
        <tbody>
          <RowTableBody {...args}>
            <td style={{width: '100%'}}>John</td>
            <td style={{width: '100px'}}>30</td>
          </RowTableBody>
        </tbody>
      </table>
    </TableBody>
    <TableFooter />
  </TableRoot>
);

BasicTable.args = {
 hoverColor: "#E7E7E7",
};
