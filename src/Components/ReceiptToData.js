
import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import Camera from './Camera';
import CamaraIconPNG from "../Image/Camera.jpeg";

let basicImages =
    {
        url: CamaraIconPNG,
        title: 'Camera',
        width: '30%',
    }
;
const ReceiptToData = () => {

    const [text, setText] = useState('');
    const [imageFile, setImageFile] = useState(basicImages);

    const handleImageChange = (event) => {
        setImageFile(event.target.files[0]);
    };

    return (
        <div>
            <Camera setImage={setImageFile} image={imageFile} text={text} setText={setText} />
        </div>
    );
};

export default ReceiptToData;
