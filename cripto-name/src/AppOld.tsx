import { useState, useEffect, useReducer } from 'react'

import './App.css'

const getRandomNumberFromApi = async():Promise<number> => {
  const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
  const numberString = await res.text();
  return +numberString
}


export const App = () => {
  const [number, setNUmber] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [key, forceRefetch] = useReducer(number => number+1 ,0)

  useEffect(() => {
    setIsLoading(true)
    getRandomNumberFromApi().then(setNUmber)
  }, [key])

  useEffect(() => {
    if(number) setIsLoading(false)
  }, [number])
  
  

  return (
    <div>
        { isLoading ?
          (<h2>Cargando...</h2>)
          : (<h2>Número Aleatorio: {number} </h2>)
        }
        
        <button onClick={forceRefetch} disabled={isLoading}>
          { isLoading ? '...' : 'Nuevo número'}
        </button>

    </div>
  )
}

