/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { SuperTable } from "../components/SuperTable";
import { simpleData } from "./TestData/simpleData";
import { heavyData } from "./TestData/heavyData";
import { SuperTableProps } from "../types/SuperTable.types";
import { Row } from "./TestData/types";

export default {
  title: "React Super Table Components/SuperTable",
  component: SuperTable,
} as ComponentMeta<React.FC<SuperTableProps<Row>>>;

const Template: ComponentStory<React.FC<SuperTableProps<Row>>> = (
  args: any
) => <SuperTable {...args} />;

export const _0_SmokeTest = Template.bind({});
_0_SmokeTest.args = {
  columns: simpleData.columns,
  rows: [],
};

export const _1_SimpleData = Template.bind({});
_1_SimpleData.args = {
  columns: simpleData.columns,
  rows: simpleData.data,
};

export const _2_Pagination = Template.bind({});
_2_Pagination.args = {
  columns: heavyData.columns,
  rows: heavyData.data,
  pagination: true,
  paginationOption: "simple_numbers",
};

export const _3_Search = Template.bind({});
_3_Search.args = {
  columns: heavyData.columns,
  rows: heavyData.data,
  searcher: true,
};
