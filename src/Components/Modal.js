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
    console.log(props.data);
    return (
        <div>
            {props.data.map((ele) => (
                <>
                    <AlignItemsList handler={handleOpen} heart={props.heart} data={ele}/>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: window.innerWidth-70 }}>
                        <h3 id="parent-modal-title" style={{color:"white"}}>{ele.foodName}</h3>
                        <h3 id="parent-modal-title" style={{color:"white"}}>Ingredients</h3>
                        {ele.ingredients.map((igd) =>(
                            <p id="parent-modal-description" style={{color:"white"}}>
                                [{igd.quantity}] {igd.itemName}
                            </p>
                        ))}
                        <h2 id="parent-modal-title" style={{color:"white"}}>Instructions</h2>
                        {ele.instructions.map((instruction,idx) =>(
                            <p id="parent-modal-description" style={{color:"white"}}>
                                {idx+1}:  {instruction}
                            </p>
                        ))}
                        <Button onClick={handleClose}>Close</Button>
                    </Box>
                </Modal>
                </>
                ))}
        </div>
    );
}