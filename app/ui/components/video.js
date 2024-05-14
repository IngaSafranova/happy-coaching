import React from 'react'

export default function Video() {
    return (
      <div>
        <video className='mx-auto w-3/4 lg:w-768 lg:h-560' controls  preload="auto">
          <source src="/catVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
}


