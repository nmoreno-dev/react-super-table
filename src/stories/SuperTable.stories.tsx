import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {SuperTable} from '../components/SuperTable';
import {ISuperTableProps} from '../types/SuperTable.types';
import {heavyData} from './TestData/heavyData';
import {simpleData} from './TestData/simpleData';

export default {
  title: 'React Super Table Components/SuperTable',
  component: SuperTable,
} as ComponentMeta<typeof SuperTable>;

const Template: ComponentStory<typeof SuperTable> = (args: ISuperTableProps) => (
  <SuperTable {...args} />
);

export const SmokeTest = Template.bind({});
SmokeTest.args = {
  columns: simpleData.columns,
  data: [],
};

export const SimpleData = Template.bind({});
SimpleData.args = {
  columns: simpleData.columns,
  data: simpleData.data,
};

export const Pagination = Template.bind({});
Pagination.args = {
  columns: heavyData.columns,
  data: heavyData.data,
  pagination: true,
};
