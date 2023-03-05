import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import Tesseract from 'tesseract.js';
import Walmart from "../Image/receipt.jpeg"

export default function ButtonForReceipt({image}) {
    const [loading, setLoading] = React.useState(false);
    {
        setLoading(true);
    }
    const handleClick = async (event) => {
        event.preventDefault();
        handleLoading();
        const result = await Tesseract.recognize(Walmart, 'eng');
        const text=result.data.text.replace(/\n/g, '')

         const apiKey = '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';
         const model = 'text-davinci-002';
         const prompt = `${text}  I need to parse it to take out each item with quantity and cost into a json format.Just give me the json file!\n`;

         const response = await fetch('https://api.openai.com/v1/completions', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${apiKey}`
             },
             body: JSON.stringify({
                 prompt: prompt,
                 max_tokens: 2048,
                 n: 1,
                 model: model
             })
         });

        const { choices } = await response.json().then(setLoading(false));
        console.log(text);

    };
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