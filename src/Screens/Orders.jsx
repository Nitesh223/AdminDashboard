import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const rows = [
  {
    orderId: "ORD-10231",
    store: "FreshMart - Sector 22",
    method: "Delivery",
    created: "2025-10-21 10:32 AM",
    status: "Delivered",
  },
  {
    orderId: "ORD-10232",
    store: "ElectroWorld - Downtown",
    method: "Pickup",
    created: "2025-10-21 11:10 AM",
    status: "Ready for Pickup",
  },
  {
    orderId: "ORD-10233",
    store: "TrendyWear - City Mall",
    method: "Delivery",
    created: "2025-10-21 12:25 PM",
    status: "In Transit",
  },
  {
    orderId: "ORD-10234",
    store: "GadgetHub - Tech Park",
    method: "Pickup",
    created: "2025-10-21 01:45 PM",
    status: "Completed",
  },
  {
    orderId: "ORD-10235",
    store: "DailyNeeds - Green Street",
    method: "Delivery",
    created: "2025-10-21 02:30 PM",
    status: "Pending",
  },
  {
    orderId: "ORD-10236",
    store: "HomeDecor - Lake View",
    method: "Pickup",
    created: "2025-10-21 03:00 PM",
    status: "Cancelled",
  },
  {
    orderId: "ORD-10237",
    store: "MegaMart - City Center",
    method: "Delivery",
    created: "2025-10-22 09:15 AM",
    status: "Delivered",
  },
  {
    orderId: "ORD-10238",
    store: "BookWorld - Central Plaza",
    method: "Pickup",
    created: "2025-10-22 10:10 AM",
    status: "Ready for Pickup",
  },
  {
    orderId: "ORD-10239",
    store: "PharmaPlus - Main Market",
    method: "Delivery",
    created: "2025-10-22 11:45 AM",
    status: "Out for Delivery",
  },
  {
    orderId: "ORD-10240",
    store: "PetZone - Garden Road",
    method: "Pickup",
    created: "2025-10-22 12:30 PM",
    status: "Completed",
  },
];

export default function BasicTable() {
  return (
    <>
      <div className='h-full w-full flex flex-col '>
        <div className='w-[100%] h-[10%]  '>
          <h1 className='text-3xl font-bold py-2 ml-6'> Orders</h1>
        </div>
        <div className='w-[100%] h-[90%] flex items-center justify-center '>
          <div className='w-[80%] h-[90%] rounded-xl shadow-2xl overflow-auto '>
            <TableContainer component={Paper} sx={{
              maxHeight: '100%' ,      
              overflowY: 'auto',
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              '-ms-overflow-style': 'none',
            }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow >
                    <TableCell align="right" sx={{ fontWeight: 700 ,fontSize: "17px" }}>Order ID&nbsp;</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700, fontSize: "17px" , textAlign:'center'}}>Store&nbsp;</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 ,fontSize: "17px"}}>Method&nbsp;</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 ,fontSize: "17px"}}>Created&nbsp;</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 ,fontSize: "17px"}}>Last Status&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                    >

                      <TableCell align="right">{row.orderId}</TableCell>
                      <TableCell align="right">{row.store}</TableCell>
                      <TableCell align="right">{row.method}</TableCell>
                      <TableCell align="right">{row.created}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>

  );
}