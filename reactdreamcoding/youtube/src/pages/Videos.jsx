import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import VideosCard from '../components/VideosCard';
import Youtube, { search } from '../api/youtube';
import FakeYoutube from '../api/fakeYoutube';

export default function Videos() {
    const {keyword} = useParams();
    const {isLoading, error, data:videos} = useQuery({
        queryKey:['videos', keyword],
        queryFn: ()=> {
            const youtube = new FakeYoutube();
            return youtube.search(keyword);
        },
        staleTime:1000*60*10
    });
    
    return (
        <>
            <div>Videos {keyword? `🔎 ${keyword}` : '🔥'}</div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong</p>}
            {videos && <ul>
                    {videos.map(video => <VideosCard key={video.id} video={video} />)}
                </ul>}
        </>
    );
}

