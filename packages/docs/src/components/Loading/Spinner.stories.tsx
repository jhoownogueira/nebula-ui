import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SpinnerLoading } from "@orioncore/react";

export default {
  title: "Loading/Spinner",
  component: SpinnerLoading,
} as Meta;

export const Spinner: StoryObj = (args: any) => {
  return (
    <>
      <SpinnerLoading />
    </>
  );
};

Spinner.args = {};
