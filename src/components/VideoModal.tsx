import React, { useEffect, useRef } from 'react';
// import useOnCLickOutside from '../hooks/admin/useOnCLickOutside';

interface IProps {
  url?: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const VideoModal: React.FC<IProps> = ({ setModal, url }) => {
  const videoContainerRef = useRef<HTMLVideoElement>(null);

  const handleClose = () => {
    setModal(false);
  };

  return (
    <div className="h-screen w-screen absolute backdrop-blur-sm top-0 right-0 flex items-center justify-center">
      <div className="relative">
        <button className="text-5xl font-black z-10 text-red-400 cursor-pointer absolute right-2" onClick={handleClose}>
          X
        </button>
        <video
          id="videoPlayer"
          ref={videoContainerRef}
          src={url}
          className="border-2 border-white"
          controls
          autoPlay
          onError={() => {
            console.log('Wait For The Video To Be Loaded');
          }}
        ></video>
      </div>
    </div>
  );
};

export default VideoModal;
