import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {SuperTable} from '../components/SuperTable';
import {ISuperTableProps} from '../components/SuperTable/SuperTable.types';
import {heavyData} from './testData/heavyData';

export default {
  title: 'React Super Table Components/SuperTable',
  component: SuperTable,
} as ComponentMeta<typeof SuperTable>;

const Template: ComponentStory<typeof SuperTable> = (args: ISuperTableProps) => (
  <SuperTable {...args} />
);

export const SmokeTest = Template.bind({});
SmokeTest.args = {
  columns: [
    {
      _index: 0,
      title: 'First Name',
      selector: (row: {[key: string]: any}) => row.firstName,
    },
    {
      _index: 1,
      title: 'Last Name',
      selector: (row: {[key: string]: any}) => row.lastName,
    },
    {
      _index: 2,
      title: 'Age',
      selector: (row: {[key: string]: any}) => row.age,
    },
    {
      _index: 3,
      title: 'Balance',
      selector: (row: {[key: string]: any}) => row.balance,
    },
    {
      _index: 4,
      title: 'Email',
      selector: (row: {[key: string]: any}) => row.email,
    },
    {
      _index: 5,
      title: 'Phone',
      selector: (row: {[key: string]: any}) => row.phone,
    },
  ],
  data: [],
};

export const SimpleData = Template.bind({});
SimpleData.args = {
  columns: [
    {
      _index: 0,
      title: 'First Name',
      selector: (row: {[key: string]: any}) => row.firstName,
    },
    {
      _index: 1,
      title: 'Last Name',
      selector: (row: {[key: string]: any}) => row.lastName,
    },
    {
      _index: 2,
      title: 'Age',
      selector: (row: {[key: string]: any}) => row.age,
    },

    {
      _index: 3,
      title: 'Email',
      selector: (row: {[key: string]: any}) => row.email,
    },
    {
      _index: 4,
      title: 'Phone',
      selector: (row: {[key: string]: any}) => row.phone,
    },
    {
      _index: 5,
      title: 'Balance',
      selector: (row: {[key: string]: any}) => row.balance,
      textAlign: 'right',
    },
  ],
  data: [
    {
      _id: '6231ae96f250fb59eb6b311f',
      balance: '$3,806.82',
      age: 36,
      firstName: 'Angie',
      lastName: 'Holman',
      email: 'angieholman@quordate.com',
      phone: '+1 (838) 457-3167',
    },
    {
      _id: '6231ae96d2843b6dc654b17e',
      balance: '$3,809.59',
      age: 21,
      firstName: 'Katie',
      lastName: 'Cohen',
      email: 'katiecohen@quordate.com',
      phone: '+1 (932) 560-3032',
    },
    {
      _id: '6231ae96c132e7fc26b5a6fb',
      balance: '$1,881.97',
      age: 25,
      firstName: 'Laverne',
      lastName: 'Head',
      email: 'lavernehead@quordate.com',
      phone: '+1 (951) 579-2100',
    },
    {
      _id: '6231ae967feeb237576aa034',
      balance: '$1,296.93',
      age: 26,
      firstName: 'Janet',
      lastName: 'Flowers',
      email: 'janetflowers@quordate.com',
      phone: '+1 (860) 512-3303',
    },
    {
      _id: '6231ae96312d2136aea816a2',
      balance: '$1,216.02',
      age: 29,
      firstName: 'Paula',
      lastName: 'Mcleod',
      email: 'paulamcleod@quordate.com',
      phone: '+1 (835) 580-3848',
    },
    {
      _id: '6231ae9665d260b5da01c743',
      balance: '$1,239.71',
      age: 39,
      firstName: 'Cabrera',
      lastName: 'Dixon',
      email: 'cabreradixon@quordate.com',
      phone: '+1 (869) 513-2039',
    },
    {
      _id: '6231ae960c5b14e21db92bd2',
      balance: '$1,689.35',
      age: 36,
      firstName: 'Pena',
      lastName: 'Mullins',
      email: 'penamullins@quordate.com',
      phone: '+1 (873) 414-3600',
    },
    {
      _id: '6231ae96f832fd2264fad54a',
      balance: '$1,243.59',
      age: 32,
      firstName: 'Henderson',
      lastName: 'Rollins',
      email: 'hendersonrollins@quordate.com',
      phone: '+1 (925) 528-2633',
    },
    {
      _id: '6231ae96a9f31f2ea8680fdc',
      balance: '$1,869.13',
      age: 22,
      firstName: 'Concepcion',
      lastName: 'Neal',
      email: 'concepcionneal@quordate.com',
      phone: '+1 (960) 546-3345',
    },
    {
      _id: '6231ae96ed7fec821c902c7f',
      balance: '$3,480.44',
      age: 35,
      firstName: 'Marion',
      lastName: 'Mcmahon',
      email: 'marionmcmahon@quordate.com',
      phone: '+1 (982) 548-3865',
    },
  ],
};

export const Pagination = Template.bind({});
Pagination.args = {
  columns: [
    {
      _index: 0,
      title: 'First Name',
      selector: (row: {[key: string]: any}) => row.firstName,
    },
    {
      _index: 1,
      title: 'Last Name',
      selector: (row: {[key: string]: any}) => row.lastName,
    },
    {
      _index: 2,
      title: 'Age',
      selector: (row: {[key: string]: any}) => row.age,
    },

    {
      _index: 3,
      title: 'Email',
      selector: (row: {[key: string]: any}) => row.email,
    },
    {
      _index: 4,
      title: 'Phone',
      selector: (row: {[key: string]: any}) => row.phone,
    },
    {
      _index: 5,
      title: 'Balance',
      selector: (row: {[key: string]: any}) => row.balance,
      textAlign: 'right',
    },
  ],
  data: heavyData,
};
