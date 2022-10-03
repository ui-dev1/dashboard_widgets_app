import { Box } from '@mui/material';
import React from 'react';
import Appbar from './Appbar/Appbar';
import Drawer from './Drawer/Drawer';
import './layout.scss';

const Layout = (props) => {
  return (
    <div className='layout'>
      <Drawer />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          overflow: 'auto',
        }}
      >
        <Appbar />
        <div className='layout-container'>{props.children}</div>
      </Box>
    </div>
  );
};

export default Layout;
