import React from 'react';

export default function VideosCard({video}) {
    return (
        <div>
            {video.snippet.title}
        </div>
    );
}


