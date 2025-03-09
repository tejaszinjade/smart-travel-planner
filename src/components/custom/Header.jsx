import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        localStorage.setItem("user", JSON.stringify(resp.data));
        setUser(resp.data);
        setOpenDialog(false);
      });
  };
  

  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    setUser(null);
  };

  return (
    <div className='fixed top-0 left-0 w-full backdrop-blur-lg bg-transparent shadow-lg p-4 flex justify-between items-center px-6 z-50'>
      {/* Logo */}
      <a href="/">
        <img src='/logo.png' className='h-[50px] w-[150px]' alt="Logo" />
      </a>

      {/* Navigation & Auth */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
             <a href='/my-trips'>
              <Button className="bg-[#0078FF] text-white font-bold rounded-full px-6 py-2 transition duration-300 hover:bg-[#FF6F61]">
                 + Add Itirnary
              </Button>
            </a>           
            <a href='/create-trip'>
              <Button className="bg-[#0078FF] text-white font-bold rounded-full px-6 py-2 transition duration-300 hover:bg-[#FF6F61]">
                ⚡Generate Trip
              </Button>
            </a>
            <a href='/my-trips'>
              <Button className="bg-[#0078FF] text-white font-bold rounded-full px-6 py-2 transition duration-300 hover:bg-[#FF6F61]">
                My Trips
              </Button>
            </a>
            
            <Popover>
              <PopoverTrigger>
                <img src={user?.picture} className='h-[40px] w-[40px] rounded-full border-2 border-white cursor-pointer' alt="User Profile" />
              </PopoverTrigger>
              <PopoverContent className="text-center p-3">
                <p className="text-sm font-semibold">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
                <hr className="my-2" />
                <button 
                  className="text-red-600 font-semibold hover:underline cursor-pointer" 
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </PopoverContent>
            </Popover>
          </>
        ) : (
          <Button onClick={() => setOpenDialog(true)} className="bg-[#44BEE4] text-white hover:bg-[#2A94B3]">
            Sign In
          </Button>
        )}
      </div>

      {/* Sign In Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="text-center">
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="Logo" className="mx-auto h-16" />
              <h2 className="font-bold text-lg mt-5 text-gray-900">Sign In with Google</h2>
              <p className="text-sm text-gray-500">Secure Google authentication</p>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center justify-center bg-[#44BEE4] text-white hover:bg-[#2A94B3] p-3 rounded-md"
              >
                <FcGoogle className="h-6 w-6" />
                Sign In with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
