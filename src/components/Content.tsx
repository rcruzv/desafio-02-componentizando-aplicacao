import { MovieCard } from './MovieCard';
import { MovieProps } from "../interface/props";
interface ContentProps {
  movies: MovieProps[],
  title: string
}

export function Content(props: ContentProps) {

  const { movies, title} = props;

  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}