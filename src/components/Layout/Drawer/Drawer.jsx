import { Box, ListItem } from '@mui/material';
import React from 'react';
import { colors } from '../../shared/constants/colors';

const Drawer = () => {
  return (
    <Box sx={{ height: '100vh', width: '20%' }}>
      <ListItem
        sx={{
          marginTop: '32px',
          background: colors.lightBlueBg,
          borderRight: `2px solid ${colors.lightBlue}`,
          color: colors.lightBlue,
        }}
      >
        Dashboard
      </ListItem>
    </Box>
  );
};

export default Drawer;
