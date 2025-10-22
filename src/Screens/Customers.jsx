import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chance from 'chance';

const chance = new Chance(42); 

function createData(id) {
  return {
    id,
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    phone: chance.phone(),
    state: chance.state({ full: true }),
  };
}

const columns = [
  { label: 'First Name', dataKey: 'firstName' },
  { label: 'Last Name', dataKey: 'lastName' },
  { label: 'Age', dataKey: 'age' },
  { label: 'State', dataKey: 'state' },
  { label: 'Phone Number', dataKey: 'phone' },
];

const rows = Array.from({ length: 50 }, (_, index) => createData(index)); // 50 sample rows

export default function SimpleMuiTable() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.dataKey}>{col.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((col) => (
                <TableCell key={col.dataKey}>{row[col.dataKey]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
