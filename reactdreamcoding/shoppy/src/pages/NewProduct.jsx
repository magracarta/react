import React, { useState } from 'react';
import { addNewProduct } from '../api/firebase';
import { uploadImage } from '../api/uploader';
import Button from '../components/ui/Button';

export default function NewProduct() {
    const [product, setProduct] = useState({});
    const [file, setFile] = useState();
    const [isUploading, setIsUploading] = useState(false);
    const [success,setSuccess] = useState();
    const handleChange = (e) => { 
        const {name, value, files}= e.target;
        if(name === "file"){
            setFile(files && files[0]);
            console.log(files[0]);
            return;
        }
        setProduct(product=> ({ ...product, [name]: value }));
     };
    const handleSubmit = (e) => { 
        e.preventDefault();
        setIsUploading(true);
        uploadImage(file)
            .then(url =>{
                //제품 사지을 Cloudinary에 업로드 하고 URL을 획득
                console.log(url);
                //Firebase에 새로운 제품을 추가함.
                addNewProduct(product, url).then(()=>{
                    setSuccess("성공적으로 제품이 추가되었습니다.");
                    setTimeout(()=>{setSuccess(null)},4000);
                    setFile(null);
                });
            }).finally(()=>{
                setIsUploading(false);
            });
     };
    return (
        <section className='w-full text-center'>
            <h2 className='text-2xl font-bold my-4'>새로운 제품 등록</h2>
            {success && <p className='my-2'>👍{success}</p>}
            {file && <img className='w-96 mx-auto mb-2' src={URL.createObjectURL(file)} alt="Local file"/>}
            <form onSubmit={handleSubmit} className="flex flex-col px-12">
                <input 
                type="file" 
                accept='image/*' 
                name="file" 
                required 
                onChange={handleChange}/>
                <input type="text" name="title" vlaue={product.title??''} placeholder="제품명" required onChange={handleChange}/>
                <input type="number" name="price" vlaue={product.price??''} placeholder="가격" required onChange={handleChange}/>
                <input type="text" name="category" vlaue={product.category??''} placeholder="카테고리" required onChange={handleChange}/>
                <input type="text" name="description" vlaue={product.description??''} placeholder="제품 설명" required onChange={handleChange}/>
                <input type="text" name="options" vlaue={product.options??''} placeholder="옵션들(콤마(,)로 구분)" required onChange={handleChange}/>
                <Button text={isUploading?'업로드중....':'제품 등록하기'}
                    disabled={isUploading}
                />
            </form>
        </section>
    );
}

