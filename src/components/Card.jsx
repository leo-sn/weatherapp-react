import React from 'react';

function Card() {
    return(
        <div className='bg-white p-8 mt-7 rounded-lg shadow-xl'>
            <div className='text-center text-slate-800'>
                <span className='block text-4xl ' >Vancouver</span>
                <span className='text-md text-slate-500'>BC, Canada</span>
            </div>
            
            <div className='text-center font-bold text-slate-800 flex justify-center mb-3'>
                <span className='text-8xl'>20</span>
                <span className='text-2xl mt-2'>°C</span>
            </div>
            <div className='text-center'>
                <span className='block'>Icon</span>
                <span className='text-slate-800 font-medium'>Description</span>
            </div>
        </div>
    )
}

export default Card