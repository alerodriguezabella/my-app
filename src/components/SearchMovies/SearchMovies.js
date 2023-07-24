import React, {useState} from "react";
import './style.css'

export default function SearchMovies(){

const [query, setQuery] = useState('')
const [movies, setMovies] = useState([])

const searchMovies = async(e) => {
  e.preventDefault()

  const url = `https://api.themoviedb.org/3/search/movie?api_key=e9f96629786f3bb3109298150df36034&language=en-US&query=${query}&page=1&include_adult=false`;
  
  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
    setMovies(data.results)
  } catch(err) {
    console.error(err)
  }
}

  return(
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">Movie name</label>
        <input className="input" type='text' name="query" placeholder="I.e. The Ugly Truth" value={query} onChange={(e) => setQuery(e.target.value)}></input>
        <button className="button" type="submit">Search</button>
      </form>
      <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => {
          return (
            <div className="card" key={movie.id}>
              <img alt={movie.title + 'poster'} className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}/>
              <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                <p><small>RATING: {movie.vote_average}</small></p>
                <p>{movie.overview}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}