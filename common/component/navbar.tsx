import Link from "next/link";
import { useState } from "react";
import { Bag, Country, Hamburger, Kakashi, Logo, Search } from "../svg/svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (<>
    <nav className={`flex justify-between ${open ? "items-start" : "items-center"}`}>
      <div className="w-auto">
        <div className="flex items-center">
          <button className='inline-flex p-3 hover:bg-slate-500 rounded lg:hidden text-gray-500 ml-auto hover:text-white'
            onClick={() => setOpen(!open)}
          >
            <Hamburger className="w-6 h-6" />
          </button>
          <div className="lg:hidden"><Search height="30" /></div>
        </div>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div className={`${open ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex 
                flex-col lg:h-auto'>
            <Link href='/'><a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-500 items-center 
                justify-center hover:bg-slate-400 hover:text-white hover:underline '> Men</a></Link>

            <Link href='/'><a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-500 items-center 
                justify-center hover:bg-slate-400 hover:text-white hover:underline'>Women</a></Link>

            <Link href='/'><a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-500 items-center 
              justify-center hover:bg-slate-400 hover:text-white hover:underline'>Company</a></Link>

            <Link href='/'><a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-500 items-center 
            justify-center hover:bg-slate-400 hover:text-white hover:underline'>Store</a></Link>
          </div>
        </div>
      </div>
      <div className=""><Logo color="#5649de" /></div>
      <div className="flex items-center xl:w-1/5 justify-between lg:w-auto h-12">
        <div className="items-center text-gray-500 hidden lg:flex"><Country height="35" /> IND</div>
        <div className="hidden lg:flex"><Search height="30" /></div>
        <div><Kakashi height="35" /></div>
        <div className="flex items-center"><Bag height="30" /> 0</div>
      </div>
    </nav>
    <hr className="my-5 rounded-xl border" />
  </>
  );
};

export default Navbar;
