import { FlatList } from 'native-base';
import MovieCard from '../listItems/MovieCard';

const MovieList = (props) => {
    const { navigation, movies } = props
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieCard
          original_title={item.original_title}
          popularity={item.popularity}
          release_date={item.release_date}
          poster_path={item.poster_path}
          navigation={navigation}
        />
      )}
    />
  )
}

export default MovieList;