import React from 'react';
import { useParams } from 'react-router';

export default function Videos() {
    const {keyword} = useParams();
    return (
        <div>Videos {keyword? `🔎 ${keyword}` : '🔥'}</div>
    );
}

