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

export default function Customers() {
  return (
    <div className=' w-full h-full flex items-center justify-center shadow-4xl'>
      
      <div className=''>
        <h1 className='py-4 mt-0 font-bold text-3xl text-center'>Customers</h1>
        <TableContainer component={Paper} sx={{  maxHeight: 550,        
            width: '100%' , boxShadow:5, borderRadius: 2 , '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
            '-ms-overflow-style': 'none', }}>
          <Table stickyHeader sx={{ minWidth: 1000 }} aria-label="customers table">
            <TableHead>
              <TableRow>
                {columns.map((col) => (
                  <TableCell key={col.dataKey} sx={{ fontWeight: 700, fontSize:20, fontFamily:'-moz-initial'}}>{col.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} >
                  {columns.map((col) => (
                    <TableCell key={col.dataKey} >{row[col.dataKey]} </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </div>

  );
}
