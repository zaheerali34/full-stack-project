import React from 'react';
import Video from '/Design/video.mp4';

function VideoDesign() {
  return (
    <div className="w-full h-full flex items-center justify-center py-10 px-10 max-sm:px-4 max-sm:py-0">
      <video src={Video} className="rounded-2xl" loop autoPlay muted></video>
    </div>
  );
}

export default VideoDesign;
