import React from 'react'

function Help_card({title,description}) {
    return (
        <div className='w-80 rounded-xl bg-slate-100 border-2 m-5'>
            <div className='p-2'>
                <h1 className='font-bold'>{title}</h1>
            </div>
            <div className='border-b-2 w-full'></div>
            <div className='py-2 px-2'>
                <p>
                {description}
                </p>
            </div>
        </div>
    )
}

export default Help_card
