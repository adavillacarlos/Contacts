import { DataGrid } from '@mui/x-data-grid'
import React,{useState} from 'react'

export default function DataTable(
    rows,
    columns,
    loading,
    sx
) {
    const [pageSize, setPageSize] = useState(10); 
  return (
    <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        sx={sx}
        checkboxSelection
        pagination
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions = {[5,10,25]}
    />
  )
}
