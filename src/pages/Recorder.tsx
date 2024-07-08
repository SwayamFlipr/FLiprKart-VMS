import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PAGE_ROUTES from '../enum/page-routes';

const Recorder: React.FC = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="flex justify-between px-20 items-center w-full h-32 mb-8">
      <div className="flex items-center gap-8"></div>

      <div className=" h-full pt-10">
        <button
          className={`text-green-400 text-xl border-2 rounded-full ${
            isRecording ? 'hover:bg-red-400' : 'hover:bg-green-400'
          } px-8 py-2 text-center  hover:text-white`}
          onClick={() => {
            setIsRecording(!isRecording);
            if (!isRecording) window.Main.startRecording({ scannerId: '0' });
            else window.Main.stopRecording({ scannerId: '0' });
          }}
        >
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>
        <button
          className="text-green-400 text-xl border-2 rounded-full px-8 py-2 text-center hover:bg-green-400 hover:text-white hover:delay-300"
          onClick={() => {
            window.Main.stopRecording({ scannerId: '0' });
            localStorage.removeItem('token');
            navigate(PAGE_ROUTES.LOGIN);
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default memo(Recorder);
