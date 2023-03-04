import React, {useRef } from "react";
import Webcam from "react-webcam";
import CameraBackGround from "./CameraIcon";
import IconButton from '@mui/material/IconButton';
import SurroundSoundIcon from '@mui/icons-material/SurroundSound';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import CamaraIconPNG from "../Image/Camera.jpeg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import ButtonForReceipt from "./ButtonForReceipt"
const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

let basicImages =
    {
        url: CamaraIconPNG,
        title: 'Camera',
        width: '30%',
    }
;
const videoConstraints = {
    width: 540,
    facingMode: "environment"
};

const Camera = () => {
    const webcamRef = useRef(null);
    const [image, setImage] = React.useState(basicImages);
    const [onCamera, setOnCamera] = React.useState(false);
    const setOnCameraController = () => setOnCamera(true);
    const setOffCameraController = () =>setOnCamera(false);
    const [mode,setMode] = React.useState("basicMode"); // There are two mode: basic mode and capture mode ("basicMode", "capturedMode")
    const setModeController = (mode) => setMode(mode);

    const capturePhoto = React.useCallback(async () => {
        console.log("captured");
        setModeController("capturedMode");
        setOffCameraController();
        const imageSrc = webcamRef.current.getScreenshot();
        let image =
            {
                url: imageSrc,
                title: '',
                width: '30%',
            }
        ;
        setImage(image);
    }, [webcamRef]);

    const onUserMedia = (e) => {
        console.log(e);
    };

    return (
        <>
            {onCamera ?
                <>
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    onUserMedia={onUserMedia}
                    width={window.innerWidth}
                    height={window.innerHeight-110}
                />
                <IconButton onClick={capturePhoto} style={{position:"absolute", left:window.innerWidth/2-25, top:window.innerHeight-230}}>
                    <SurroundSoundIcon style={{fontSize: "xxx-large"}}fontSize={"large"}/>
                </IconButton>
                {/*<button onClick={() => setUrl(null)}>Refresh</button>*/}
                </>
                :
                mode == "basicMode" ?
                <CameraBackGround controller={setOnCameraController} image={image} mode={mode}/>:
                <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: window.innerWidth, minHeight: window.innerHeight-60 }}>
                    <ImageSrc style={{ backgroundImage: `url(${image.url})`, minWidth:window.innerWidth, minHeight:window.innerHeight-60}}/>
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image sx={{minWidth:window.innerWidth, minHeight:window.innerHeight-60}}>
                    </Image>
                    <ButtonForReceipt/>
                </Box>

            }
            {/*{url && (*/}
            {/*    <div>*/}
            {/*        <img src={url} alt="Screenshot" />*/}
            {/*    </div>*/}
            {/*)}*/}
        </>
    );
};

export default Camera;