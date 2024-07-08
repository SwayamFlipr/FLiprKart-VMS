import React from 'react';
import { useNavigate } from 'react-router-dom';
import PAGE_ROUTES from '../enum/page-routes';
import VInput from '../@ui/VInput';
import VImage from '../@ui/VImage';

import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const credentials = {
      rtsp1: formData.get('rtsp1')?.toString(),
      rtsp2: formData.get('rtsp2')?.toString(),
      password: formData.get('password')?.toString()
    };
    if (!credentials.rtsp1 || !credentials.rtsp2) return toast.error('RTSP Stream is required');

    if (credentials.password !== '1234') return toast.error('Invalid Credentials');
    window.Main.setRTSPStream({ rtsp1: credentials.rtsp1, rtsp2: credentials.rtsp2 });

    toast.success('Login Successful!');
    navigate(PAGE_ROUTES.DASHBOARD);
  };
  return (
    <div className=" bg-[#e8ecf5] flex h-full">
      <div className="w-6/12 pl-16">
        <div className="bg-[#f5f6fa] h-full flex flex-col gap-8 py-20">
          <div className="flex justify-center items-center w-full">
            <VImage alt="supermart-logo" name="supermartLogo" />
          </div>
          <div className="text-center text-2xl bold font-black">Welcome, Sign in to dashboard</div>
          <form className="flex flex-col h-full px-20 justify-around" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <VInput name="rtsp1" placeholder="Enter Camera Stream 1" type="text" label="RTSP Stream 1" />
              <VInput name="rtsp2" placeholder="Enter Camera Stream 2" type="text" label="RTSP Stream 2" />
              <VInput name="password" placeholder="Enter Password" type="password" label="Password" />
            </div>
            <input
              className="bg-[#24a94a] py-4 rounded-md text-white text-xl font-semibold cursor-pointer"
              type="submit"
              value={'Login'}
            />
          </form>
        </div>
      </div>
      <div className={`w-6/12 login-right`}>
        <div className="bg-green-400 h-full w-full bg-opacity-80 flex flex-col justify-center">
          <div className="ml-12 flex flex-col gap-4 text-white ">
            <div className="font-black text-5xl text-opacity-100">
              Ease Grocery
              <br /> Delivery Process
            </div>
            <div className="text-xl font-semibold">Flipkart Grocery Delivery Admin Panel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
