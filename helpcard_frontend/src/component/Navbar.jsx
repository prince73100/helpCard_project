import React from 'react'
import { SiAbstract } from "react-icons/si";
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className=' flex justify-between px-10 items-center bg-black text-white h-16 '>
            <div className='flex  items-center gap-x-4  '>
                <SiAbstract size={"30px"} />
                <p className='text-xl font-semibold'>Abstract | <span className='text-base'>Help Center</span></p>
            </div>
            <div>
                <Link to={'/addcard'} className='border-2 border-slate-400 py-1 px-4 rounded-lg bg-zinc-700'>Submit a request</Link>
            </div>
        </div>
    )
}

export default Navbar
