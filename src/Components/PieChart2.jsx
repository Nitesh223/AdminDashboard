import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { label: 'Electronics', value: 400, color: '#0088FE' },
  { label: 'Fashion', value: 300, color: '#00C49F' },
  { label: 'Home & Kitchen', value: 300, color: '#FFBB28' },
  { label: 'Grocery', value: 200, color: '#FF8042' },
];

const settings = {
  margin: { right: 5  },
  width: 170,
  height: 170,
  hideLegend: true,
};

export default function PieChart2() {
  return (
    <PieChart className='mt-3'
      series={[{ innerRadius: 40, outerRadius: 80, data, arcLabel: 'value' }]}
      {...settings}
    />
  );
}