import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';

export default function ButtonForReceipt() {
    const [loading, setLoading] = React.useState(false);
    function handleClick() {
        setLoading(true);
    }

    return (
        <Box sx={{ '& > button': { m: 1 } }} style={{position: "absolute", left: window.innerWidth/2-50, bottom:window.innerHeight/10}}>
            <LoadingButton
                onClick={handleClick}
                endIcon={<SendIcon />}
                loading={loading}
                loadingPosition="end"
                variant="contained"
            >
                <span>SCAN</span>
            </LoadingButton>
        </Box>
    );
}