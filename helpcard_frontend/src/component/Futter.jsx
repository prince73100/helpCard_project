import React from 'react'
import { SiAbstract } from "react-icons/si";
import { LiaCopyright } from "react-icons/lia";
function Futter() {

    return (
        <div className='relative bottom-0 h-fit bg-current w-full'>
            <div className="grid grid-cols-5 text-white w-11/12 relative left-20 py-5">
                <div className='py-5'>
                    <h1 className='font-bold '>Abstract</h1>
                    <div className='py-2 text-sm'>
                        <p>branches</p>
                    </div>
                </div>
                <div className='py-5'>
                    <h1 className='font-bold'>Resources</h1>
                    <div className="py-2 text-sm'">
                        <p>Blog</p>
                        <p>Help Center</p>
                        <p>Release Notes</p>
                        <p>Status</p>
                    </div>
                </div>
                <div className='py-5'>
                    <h1 className='font-bold'>Community</h1>
                    <div className='py-2 text-sm'>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                        <p>Facebook</p>
                        <p>Dribbble</p>
                        <p>Podcast</p>
                    </div>
                </div>
                <div className='py-5'>
                    <h1 className='font-bold'>Company</h1>
                    <div className='py-2 text-sm'>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Legal</p>
                    </div>
                </div>
                <div className='py-5'>
                    <h1 className='font-bold'>Contact Us</h1>
                    <div className='py-2 text-sm'>
                        <p>info@abstract.com</p>
                    </div>
                </div>
            </div>
            <div className='text-white  mt-2 w-fit' style={{ position: "relative", left: "516px" }}  >
                <div className='flex gap-x-4 py-4'>
                    <SiAbstract size={"30px"} />
                    <p>Abstract Studio Design, Inc.</p>
                </div>
                <div className='text-white flex gap-x-1 items-center'>
                    <LiaCopyright />
                    <p>Copyright 2024   All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Futter
