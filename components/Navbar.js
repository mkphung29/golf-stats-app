import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const {data : session, status } = useSession (); 
  return ( 
    <div className="bg-gray-800">
        <div className='h-16 px-8 flex items-center'>
            <p className="text-white font-bold flex-auto">Golf Stats Management System</p>
            {session && (
              <div className="flex item-center sm:space-x-2 justify-end">
                <img 
                onClick={signOut}
                className="rounded-full cursor-pointer"
                src={session.user.image}
                height="30"
                width="30"
                layout="fixed"
                title="Click to Logout"></img>
                <p className="text-white font-bold">{session?.user.name}</p>
              </div>
            )}
        </div>
    </div>
  );
};

export default Navbar;