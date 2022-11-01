const KEY = '227a4a80a3c9c232031a19bcb4034764';

const fecthData = async (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`
    const fetchResponse = await fetch(URL);
    const data = await fetchResponse.json();
    
    return data;

}
export default fecthData;