import { FlatList } from 'native-base';
import MovieCard from '../listItems/MovieCard';

const MovieList = (props) => {
    const { navigation, data, isMovie, showMovie } = props
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => item.key}
      renderItem={({ item }) => (
        <MovieCard
            isMovie={isMovie}
            showMovie={showMovie}
            id={item.id}
            original_title={item.original_title}
            original_name={item.original_name}
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