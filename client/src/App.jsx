import { useState, useEffect } from 'react';
import { GoSearch } from 'react-icons/go';
import { MovieCard } from './MovieCard';
import { MutatingDots } from 'react-loader-spinner';
import './App.css';


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingIcon, setLoadingIcon] = useState(false);

  const searchMovies = async (title) => {

    const response = await fetch(`http://localhost:3000?title=${title}`);
    const data = await response.json();

    const moviesList = data?.Search;
    if (moviesList?.length > 9) {
      moviesList.length = 9;
    }
    setMovies(moviesList);
  };

  useEffect(() => {
    searchMovies('Spider man');
  }, []);

  const enterKey = (e) => {
    e.preventDefault();
    searchMovies(searchTerm)
  }

  return (
    <>
      <div className='app'>
        <MutatingDots
          height="100"
          width="100"
          color="#566778"
          secondaryColor='#455667'
          radius='12.5'
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loadingIcon}
        />
        <h1>CineFile</h1>
        <h2>10.000+ <span>Posters</span> para Baixar!</h2>

        <div className='search'>
          <form onSubmit={enterKey}>
            <input
              type='text'
              placeholder='Pesquisar'
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value) }}
            />
          </form>
          <GoSearch
            alt='search icon'
            onClick={() => searchMovies(searchTerm)}
            className='search_button'
          />
        </div>

        {movies?.length > 0
          ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movies={movie} key={movie.imdbID} />
              ))}
            </div>
          )
          : (<div className='empty'>
            <h2>Nenhum filme encontrado...</h2>
            <h3>Tente uma combinação diferente de palavras.</h3>
          </div>
          )
        }
      </div>
    </>
  );
}

export default App;