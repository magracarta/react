import React from 'react';
import { useParams } from 'react-router';

export default function CityDetail() {
    const {citydetail} = useParams();
    return (
        <div>
            CityDetail {citydetail} 
        </div>
    );
}

