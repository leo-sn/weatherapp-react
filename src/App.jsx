import React from 'react';
import Card from './components/Card'

function App() {

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center"> 

      <form>
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

// https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}

export default App;
