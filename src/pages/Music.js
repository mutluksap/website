import React from 'react'
import SpotifyPlayer from 'react-spotify-player';



function Music() {

    const size = {
        width: '100%',
        height: 500,
    };
    const theme = 'black';
    const view = 'list'; // or 'coverart'

    return (
        <div className='container mx-auto'>
            <div className='p-6 lg:p-10 mb-6 border rounded-md bg-green-500/5 border-green-500/10'>
                <h2 className='text-xl lg:text-4xl font-bold lg:leading-[46px]'>Music</h2>
                <p className='text-[15px] lg:text-lg text-gray-400 py-4'>
                    On this page, you can view my playlist that I created for my website. If you share music from the music sharing area at the bottom, I can share the music I like here.
                </p>

            </div>
            <div className="mb-6">
                <SpotifyPlayer
                    view={view}
                    uri="spotify:playlist:7aXbmbihRPTetgzFsdXx4d"
                    size={size}
                    theme={theme}
                />
            </div>
        </div>
    )


}

export default Music