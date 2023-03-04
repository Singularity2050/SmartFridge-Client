import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {rows} from "../DummyData/dummyFile"
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'item', headerName: 'Item', width: 130 },
    { field: 'quantity', headerName: 'Quantity', width: 130 },
    {
        field: 'exp',
        headerName: 'Expire Data',
        type: 'number',
        width: 90,
    },
];


export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pamountSize={5}
                rowsPerPamountOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}