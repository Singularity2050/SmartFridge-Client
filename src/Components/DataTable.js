import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {rows} from "../DummyData/dummyFile"

export default function DataTable() {
    const height = window.innerHeight;
    const columns = [
        { field: 'item', headerName: 'Item', width: height/10 },
        { field: 'quantity', headerName: 'Quantity', width: 80 },
        {
            field: 'exp',
            headerName: 'Expire Data',
            width: 90,
        },
    ];
    return (
        <div style={{ height: window.innerHeight-230, width: '90%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pamountSize={4}
                rowsPerPamountOptions={[4]}
                checkboxSelection
            />
        </div>
    );
}