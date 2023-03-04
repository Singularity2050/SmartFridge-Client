import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {rows} from "../DummyData/dummyFile"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export default function DataTable() {
    const navigate = useNavigate();
    const height = window.innerHeight;
    const columns = [
        { field: 'item', headerName: 'Item', width: height/10 },
        { field: 'quantity', headerName: 'Quantity', width: 80 },
        {field: 'exp', headerName: 'Expire Data', width: 90},
    ];
    return (
        <div style={{ height: window.innerHeight-230, width: '90%' }}>
            <Button variant="contained" color="success" onClick={() => navigate('/recipes')}>
                Generate Recipe
            </Button>
            <DataGrid
                rows={rows}
                columns={columns}
                pamountSize={4}
                rowsPerPamountOptions={[4]}
                checkboxSelection
                style={{height:window.innerHeight-300}}
            />
        </div>
    );
}