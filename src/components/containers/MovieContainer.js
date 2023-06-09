import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Select, VStack,  } from 'native-base';

import { APP_KEY, BASE_URL } from '../../config/api_config';
import MovieList from '../lists/MovieList';
import Loading from '../layout/Loading';

const MovieContainer = props => {

    const { filters, type, isMovie, navigation } = props;
    const [movies, setMovies] = useState(null);
    const [activeFilter, setActiveFilter] = useState(filters[0]);

    const titleCase = (s) => s.replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c.toUpperCase() : ' ' + d.toUpperCase())

    const getMovies = async () => {
        const url = `${BASE_URL}/${type}/${activeFilter}?api_key=${APP_KEY}`;
        const response = await axios.get(url);
        setMovies(response.data.results)
    }

    const showMovie = (id) => {
        navigation.navigate("ShowMovie", { id, isMovie, type})
        console.log(id)
    }

    useEffect(() => {
        setMovies(null);
        getMovies()
    }, [activeFilter])

    const displayOptions = () => {
        return filters.map((filter, index) => {
            return (
                <Select.Item key={index} label={titleCase(filter)} value={filter} />
            )
        })
    }

    const displayMovies = () => {
        if(movies) {
            return (
                <MovieList data={movies} isMovie={isMovie} showMovie={showMovie} />
            )
        }
    
        return(<Loading />)
    }

    return (
        <VStack alignItems="center" paddingY={10} space={10}>
            <Box width={150}>
                <Select 
                    selectedValue={activeFilter} 
                    minWidth="200" 
                    accessibilityLabel="Choose Service" 
                    placeholder="Choose Service" 
                    mt={1}
                    onValueChange={itemValue => setActiveFilter(itemValue)}
                >
                    {displayOptions()}
                </Select>
            </Box>

            {displayMovies()}
        </VStack>
    )

}

export default MovieContainer;