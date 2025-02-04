import React from 'react';
import ProductList from '../components/ProductList';

export default function Home() {
    return (
        <div>
            <div className='max-h-96 object-center overflow-hidden position: relative'>
                <img src="https://media.istockphoto.com/id/1735100420/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EB%8A%91%ED%95%9C-%ED%83%88%EC%9D%98%EC%8B%A4-%EC%97%AC%EC%84%B1%EC%9A%A9-%EA%B0%80%EC%9D%84-%EA%B2%A8%EC%9A%B8-%EA%B3%84%EC%A0%88-%EC%98%B7%EC%9D%84-%EC%9E%85%EC%9D%80-%EB%B0%94%EB%8B%A5-%EA%B1%B8%EC%9D%B4-%EC%BD%94%ED%8A%B8-%ED%92%80%EC%98%A4%EB%B2%84-%EC%9E%AC%ED%82%B7-%EC%85%94%EC%B8%A0-%EC%8B%A0%EB%B0%9C-%ED%8E%B8%EC%95%88%ED%95%9C-%EC%BA%90%EC%A3%BC%EC%96%BC-%EC%97%AC%EC%84%B1-%EC%9D%98%EB%A5%98.jpg?s=2048x2048&w=is&k=20&c=mGlIS0yhVxDYJ1b99VN5kmMcPmq1Vfg1OcUUvsLUWgU=" alt='배너 이미지'/>
                <h3 className='position: absolute z-1 left-1/2 top-1/2 text-white text-5xl -translate-x-1/2  -translate-y-1/2 '>SHOPPY</h3>
            </div>
            <ProductList/>
        </div>
    );
}

