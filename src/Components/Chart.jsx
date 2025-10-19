
import * as React from 'react';
import Box from '@mui/material/Box';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LineHighlightPlot, LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';

import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { ChartsAxisHighlight } from '@mui/x-charts/ChartsAxisHighlight';
// import alphabetStock from '../dataset/GOOGL.json';

var alphabetStock = [
  {
    "date": "2024-01-02",
    "open": 140.22,
    "high": 142.05,
    "low": 139.60,
    "close": 141.95,
    "volume": 18234000
  },
  {
    "date": "2024-01-03",
    "open": 141.80,
    "high": 143.10,
    "low": 140.75,
    "close": 142.55,
    "volume": 19458000
  },
  {
    "date": "2024-01-04",
    "open": 142.70,
    "high": 145.20,
    "low": 142.10,
    "close": 144.85,
    "volume": 21034000
  },
  {
    "date": "2024-01-05",
    "open": 144.90,
    "high": 147.00,
    "low": 144.10,
    "close": 146.70,
    "volume": 18876000
  },
  {
    "date": "2024-01-08",
    "open": 146.50,
    "high": 147.80,
    "low": 145.00,
    "close": 147.55,
    "volume": 20122000
  },
  {
    "date": "2024-01-09",
    "open": 147.60,
    "high": 148.75,
    "low": 146.20,
    "close": 147.90,
    "volume": 17894000
  },
  {
    "date": "2024-01-10",
    "open": 147.85,
    "high": 149.00,
    "low": 147.00,
    "close": 148.50,
    "volume": 16500000
  },
  {
    "date": "2024-01-11",
    "open": 148.45,
    "high": 149.90,
    "low": 147.50,
    "close": 149.75,
    "volume": 17254000
  },
  {
    "date": "2024-01-12",
    "open": 149.80,
    "high": 150.50,
    "low": 148.60,
    "close": 150.10,
    "volume": 16048000
  },
  {
    "date": "2024-01-15",
    "open": 150.20,
    "high": 151.00,
    "low": 149.30,
    "close": 150.80,
    "volume": 17123000
  },
  {
    "date": "2024-01-16",
    "open": 150.90,
    "high": 152.20,
    "low": 150.10,
    "close": 151.95,
    "volume": 18045000
  },
  {
    "date": "2024-01-17",
    "open": 151.80,
    "high": 153.00,
    "low": 150.70,
    "close": 152.85,
    "volume": 17499000
  },
  {
    "date": "2024-01-18",
    "open": 152.90,
    "high": 153.75,
    "low": 151.80,
    "close": 153.10,
    "volume": 16982000
  },
  {
    "date": "2024-01-19",
    "open": 153.00,
    "high": 154.10,
    "low": 152.30,
    "close": 153.85,
    "volume": 16534000
  },
  {
    "date": "2024-01-22",
    "open": 153.70,
    "high": 154.80,
    "low": 152.90,
    "close": 154.60,
    "volume": 15822000
  }
]

const series = [
  {
    type: 'bar',
    yAxisId: 'volume',
    label: '',
    color: '#3b82f6',
    data: alphabetStock.map((day) => day.volume),
    highlightScope: { highlight: 'item' },
  },
  {
    type: 'line',
    yAxisId: 'price',
    color: 'red',
    label: 'Low',
    data: alphabetStock.map((day) => day.low),
    highlightScope: { highlight: 'item' },
  },
  {
    type: 'line',
    yAxisId: 'price',
    color: 'green',
    label: 'High',
    data: alphabetStock.map((day) => day.high),
  },
];

export default function Chart() {
  return (
    <Box sx={{ width: '100%', height: 400 }}>
      <ChartContainer
        series={series}
        xAxis={[
          {
            id: 'date',
            data: alphabetStock.map((day) => new Date(day.date)),
            scaleType: 'band',
            valueFormatter: (value) => value.toLocaleDateString(),
            height: 40,
          },
        ]}
        yAxis={[
          { id: 'price', scaleType: 'linear', position: 'left', width: 50 },
          {
            id: 'volume',
            scaleType: 'linear',
            position: 'right',
            valueFormatter: (value) => `${(value / 1000000).toLocaleString()}M`,
            width: 55,
          },
        ]}
      >
        <ChartsAxisHighlight x="line" />
        <BarPlot />
        <LinePlot />
        <LineHighlightPlot />
        <ChartsXAxis
          label="Date"
          axisId="date"
          tickInterval={(value, index) => {
            return index % 30 === 0;
          }}
          tickLabelStyle={{
            fontSize: 10,
          }}
        />
        <ChartsYAxis
          label=""
          axisId="price"
          tickLabelStyle={{ fontSize: 10 }}
        />
        <ChartsYAxis
          label="Volume"
          axisId="volume"
          tickLabelStyle={{ fontSize: 10 }}
        />
        <ChartsTooltip />
      </ChartContainer>
    </Box>
  );
}