import * as React from 'react';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Item A',
  'Item B',
  'Item C',
  'Item D',
  'Item E',
  'Item F',
  'Item G',
];

export default function LineChart1() {
  return (
    <Box sx={{ width: '100%', height: 250 }}>
      <BarChart
        series={[
          { data: pData, label: 'Revenue', id: 'pvId' },
          { data: uData, label: 'Order', id: 'uvId' },
        ]}
        xAxis={[{ data: xLabels }]}
        yAxis={[{ width: 50 }]}
         legend={{ visible: false }}  
      />
    </Box>
  );
}