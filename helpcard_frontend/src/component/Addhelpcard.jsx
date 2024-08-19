import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Addhelpcard() {

    const titleRef = useRef()
    const descriptionRef = useRef()
    const navigate = useNavigate()
    const handleSubmit = async () => {
        const title = titleRef.current.value
        const description = descriptionRef.current.value
        const data = {
            title: title,
            description: description
        }
        const res = await axios.post('http://localhost:3000/api/v1/helpcard/createhelpcard', data)
        const firstnum = res.data.status
        if (Math.floor(firstnum / 100) !== 2) {
            alert(res.data.message)
        }
        navigate('/')
    }
    
    return (
        <div className='h-80 w-1/3 bg-white shadow-lg shadow-indigo-500/50 absolute top-28 right-96 z-10 '>
            <div className="nav bg-black text-white h-8 flex justify-between px-5 py-2 items-center">
                <div>Add Request</div>
                <Link to={'/'} className='cursor-pointer'>X</Link>
            </div>
            <div className="relative top-12 left-32 ">
                <div className='border-2 w-fit p-2 my-4'>
                    <input type="text" placeholder=' Title Name' style={{ outline: "none", border: "none" }} ref={titleRef} />
                </div>
                <div className='border-2 w-fit p-2'>
                    <input type="text" placeholder=' Description ' style={{ outline: "none", border: "none" }} ref={descriptionRef} />
                </div>
                <div className="button my-8">
                    <button className='bg-black py-2 px-4 rounded-lg text-white font-bold' onClick={handleSubmit}>ADD</button>
                </div>
            </div>
        </div>
    )
}

export default Addhelpcard
