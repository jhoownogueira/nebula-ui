import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PaginationLight, PaginationLightProps } from "@orioncore/react";

export default {
  title: "Components/PaginationLight",
  component: PaginationLight,
} as Meta;

export const LightPagination: StoryObj<PaginationLightProps> = (args: any) => {
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
      <PaginationLight
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        page={currentPage.toString()}
        totalPages="10"
      />
    </>
  );
};

LightPagination.args = {
  handleNextPage: () => {},
  handlePreviousPage: () => {},
  page: "1",
  totalPages: "10",
};
