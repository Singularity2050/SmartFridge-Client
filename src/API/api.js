import axios from 'axios';

const url = "http://localhost:3333";


const api = axios.create({
    baseURL: url
});

export const processingOCR = payload => {
    return api.get(`/OCR/OCRData/${payload}`).then(
        (res) =>{
            console.log(res);
        }
    );
}
const requests = {
    processingOCR,
}
export default requests;