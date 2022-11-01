import React, { useState } from 'react';
import Card from './components/Card'
import fetchData from './services/api'
import initialData from './helpers/initalData'

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(city)
    .then((resp) => {
      setData(resp);
    })
  }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center"> 
      <form onSubmit={handleSubmit} className=" justify-center w-full flex p-4 wrap">
        <input 
          type="text"  
          placeholder="City"
          className='p-3 pl-5 rounded-3xl outline-none text-slate-800 shadow-xl'
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button 
          type="submit"
          className='bg-gray-300 p-3 rounded-3xl ml-3 font-bold text-slate-800 shadow-xl hover:bg-gray-400 hover:text-white'>
          Search
        </button>
      </form>
      <Card data={data}/>
    </div>
  )
}

export default App;
