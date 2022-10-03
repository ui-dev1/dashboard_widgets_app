import * as React from 'react';
import { DataGrid, GridOverlay } from '@mui/x-data-grid';
import { Box } from '@mui/material';

function Table({ data, columns }) {
  return (
    <Box sx={{ height: 500 }}>
      <DataGrid
        aria-label='data grid'
        rows={data}
        columns={columns}
        disableSelectionOnClick
        disableColumnMenu
        showCellRightBorder={false}
        showColumnRightBorder={false}
        getRowId={(data) => data?.id}
        sx={{
          '& .MuiDataGrid-columnHeaderTitle': { fontWeight: 600 },
          '& .MuiPagination-ul': { justifyContent: 'center' },
          '& .MuiDataGrid-footerContainer': { justifyContent: 'center' },
          '& .MuiDataGrid-cell': {
            whiteSpace: 'normal !important',
            wordWrap: 'break-word',
          },
        }}
      />
    </Box>
  );
}

export default Table;
