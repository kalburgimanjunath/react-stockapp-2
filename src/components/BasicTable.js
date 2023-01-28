import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name,
  short_name,
  current_price,
  bye_at,
  MaxSell,
  StopLoss,
  sector
) {
  return { name, short_name, current_price, MaxSell, StopLoss, sector };
}

const rows = [
  createData('Infosys', 'Infy', 159, 6.0, 24, 4.0, 'IT'),
  createData('Tata 3M India', '3M India', 237, 9.0, 37, 4.3, 'FMCG'),
  createData('Tata Motors', 'Tatamotors', 262, 16.0, 24, 6.0, 'Automobile'),
  createData('Tata Steel', 'Tatasteel', 305, 3.7, 67, 4.3, 'Steel'),
  createData('Wipro', 'wipro', 356, 16.0, 49, 3.9, 'IT'),
];

export default function BasicTable({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Stocks (Top serving)</TableCell>
              <TableCell align="right">Short Name</TableCell>
              <TableCell align="right">Current Price</TableCell>
              <TableCell align="right">Sell at</TableCell>
              <TableCell align="right">Stop Loss</TableCell>
              <TableCell align="right">Sector</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.short_name}</TableCell>
                <TableCell align="right">{row.current_price}</TableCell>
                <TableCell align="right">{row.MaxSell}</TableCell>
                <TableCell align="right">{row.StopLoss}</TableCell>
                <TableCell align="right">{row.sector}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
