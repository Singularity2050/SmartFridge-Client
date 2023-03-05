import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {rows} from "../DummyData/dummyFile"
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import {useState} from "react";
export default function DataTable() {
    const navigate = useNavigate();
    const height = window.innerHeight;
    const [loading,setLoading] = useState(false);
    const columns = [
        { field: 'item', headerName: 'Item', width: height/10 },
        { field: 'quantity', headerName: 'Quantity', width: 80 },
        {field: 'exp', headerName: 'Expire Data', width: 90},
    ];
    const onClickHandeler = async () =>{
        setLoading(true);
        await new Promise(r => setTimeout(r, 5000));
        navigate('/recipes');
    }
    return (
        <div style={{ height: window.innerHeight-230, width: '90%' }}>
            <LoadingButton variant="contained" color="success" loading={loading} onClick={onClickHandeler}>
                Generate Recipe
            </LoadingButton>
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