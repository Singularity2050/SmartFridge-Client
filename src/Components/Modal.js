import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AlignItemsList from "./RecipeList";
import {colors} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function ReceptModel(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <AlignItemsList handler={handleOpen} heart={props.heart}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: window.innerWidth-70 }}>
                    <h2 id="parent-modal-title" style={{color:"white"}}>Ketchup Butter Soup</h2>
                    <p id="parent-modal-description" style={{color:"white"}}>
                        [Two] Tomato
                    </p>
                    <p id="parent-modal-description" style={{color:"white"}}>
                        [1Kg] Butter
                    </p>
                    <p id="parent-modal-description" style={{color:"white"}}>
                        [200ml] Water
                    </p>
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </div>
    );
}