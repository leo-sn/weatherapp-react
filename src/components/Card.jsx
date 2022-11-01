import React from 'react';

function Card({data}) {

    console.log(data)
    const { name } = data;
    const { icon, description } = data.weather[0];
    const country = data.sys.country
    const temp = Math.round(data.main.temp);

    return(
        <div className='bg-white p-8 mt-7 rounded-lg shadow-xl min-w-[250px]'>
            <div className='text-center text-slate-800'>
                <span className='block text-4xl'>{name}</span>
                <span className='text-md text-slate-500'>{country}</span>
            </div>
            
            <div className='text-center font-bold text-slate-800 flex justify-center mb-3'>
                <span className='text-8xl'>{temp}</span>
                <span className='text-2xl mt-2'>°C</span>
            </div>
            <div className='text-center flex flex-col items-center justify-center'>
                <img className='relative' src={`https://openweathermap.org/img/wn/${icon}.png`} alt={`${description} icon`}/>
                <span className='text-slate-800 font-medium'>{description}</span>
            </div>
        </div>
    )
}

export default Card