import './App.css'
import { useRandom } from './hooks/useRandomNumber'


export const App = () => {

  const query = useRandom();

  return (
    <div>
        { query.isFetching ?
          (<h2>Cargando...</h2>)
          : (<h2>Número Aleatorio: {query.data} </h2>)
        }
        {
          !query.isLoading && query.isError && (<h3>{`${query.error}`}</h3>)
        }
        <button onClick={ () => query.refetch()} disabled={query.isFetching}>
          { query.isFetching ? '...' : 'Nuevo número'}
        </button>

    </div>
  )
}

