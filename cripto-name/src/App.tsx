import { useState, useEffect } from 'react'

import './App.css'

const getRandomNumberFromApi = async():Promise<number> => {
  const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
  const numberString = await res.text();
  return +numberString
}


export const App = () => {
  const [number, setNUmber] = useState<number>();

  useEffect(() => {
    getRandomNumberFromApi().then(num => setNUmber(num))
  }, [])
  

  return (
    <div>
        <h2>Número Aleatorio: {number} </h2>
    </div>
  )
}

