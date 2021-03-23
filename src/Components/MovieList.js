import React from 'react';
import MovieCard from './MovieCard';
import AddMovie from "./AddMovie";


const MovieList = ({movies, addMovie,setSelectedMovie}) => {

    const allMovies = movies.map((movie, i) => {
return <MovieCard key={i} poster={movies[i].poster} title={movies[i].title} rate={movies[i].rate} overview={movies[i].overview} trailer={movies[i].trailer} setSelectedMovie={setSelectedMovie} />
    })
    return ( 
        <div className="main">
{allMovies}
<AddMovie addMovie={addMovie}/>
        </div>
     );
}
 
export default MovieList;