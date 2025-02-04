
const cloudName =  process.env.REACT_APP_COLUDINARY_CLOUD_NAME;
const uploadPreset = process.env.REACT_APP_COLUDINARY_API_PRESET;

const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;


export async function uploadImage(file){
    const data = new FormData();
    data.append('file',file);
    data.append('upload_preset', uploadPreset);
    return fetch(url, {
        method: 'POST',
        body: data,
    }).then((res) => res.json())
    .then((data) => data.url);
}




