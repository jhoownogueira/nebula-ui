import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PaginationDark, PaginationDarkProps } from "@orioncore/react";

export default {
  title: "Components/PaginationDark",
  component: PaginationDark,
} as Meta;

export const DarkPagination: StoryObj<PaginationDarkProps> = (args: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage) {
      if (currentPage < 10) {
        setCurrentPage(currentPage + 1);
      }
    }
  };
  const handlePreviousPage = () => {
    if (currentPage) {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };
  return (
    <>
      <PaginationDark
        $handleNextPage={handleNextPage}
        $handlePreviousPage={handlePreviousPage}
        $page={currentPage.toString()}
        $totalPages="10"
      />
    </>
  );
};

DarkPagination.args = {
  $handleNextPage: () => {},
  $handlePreviousPage: () => {},
  $page: "1",
  $totalPages: "10",
};
