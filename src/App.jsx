import React from 'react';
import Card from './components/Card'
import fetchData from './services/api'

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData('Vancouver')
    .then((resp) => {
      console.log(resp)

    })
  }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center"> 
      <form onSubmit={handleSubmit}>
        <input 
          type="text"  
          placeholder="City"
          className='p-3 pl-5 rounded-3xl outline-none text-slate-800 shadow-xl'/>
        <button 
          type="submit"
          className='bg-gray-300 p-3 rounded-3xl ml-3 font-bold text-slate-800 shadow-xl'>
          Search
        </button>
      </form>
      <Card />
    </div>
  )
}

export default App;
