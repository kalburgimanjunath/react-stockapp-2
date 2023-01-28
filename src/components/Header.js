import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Header({ children }) {
  return (
    <>
      {/* <div className="logo">StockToBye</div>
      <div className="right">right</div> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Item>StockToBye</Item>
          </Grid>

          <Grid item xs={3}>
            <Item>{children}</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
