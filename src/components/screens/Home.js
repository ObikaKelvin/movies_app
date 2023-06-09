import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { APP_KEY, BASE_URL } from '../../config/api_config';
import MovieList from '../lists/MovieList';
import { Box, Select,  } from 'native-base';

const Home = props => {

    const filters = ['now_playing', 'popular', 'top_rated', 'upcoming'];
    const [activeFilter, setActiveFilter] = useState(filters[0]);
    const [movies, setMovies] = useState(null);

    const getMovies = async () => {
        const url = `${BASE_URL}/movie/${activeFilter}?api_key=${APP_KEY}`;
        const response = await axios.get(url);
        setMovies(response.data.results)
    }

    useEffect(() => {
        getMovies()
    }, [activeFilter])

    if(movies) {
        return (
            <Box paddingY={8}>
                <Select 
                    selectedValue={activeFilter} 
                    minWidth="200" 
                    accessibilityLabel="Choose Service" 
                    placeholder="Choose Service" 
                    _selectedItem={{bg: "teal.600" }} 
                    mt={1} 
                    onValueChange={itemValue => setActiveFilter(itemValue)}
                >
                    <Select.Item label="UX Research" value="ux" />
                </Select>
                <MovieList movies={movies} />
            </Box>
        )
    }

    return(<></>)
}

export default Home;