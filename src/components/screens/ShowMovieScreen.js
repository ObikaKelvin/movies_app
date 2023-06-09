import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Select, VStack,  } from 'native-base';
import { useIsFocused } from "@react-navigation/native";

import { APP_KEY, BASE_URL } from '../../config/api_config';
import Loading from '../layout/Loading';
import ShowDetails from '../layout/ShowDetails';

const ShowMovieScreen = props => {
    const isFocused = useIsFocused();
    const { route, navigation, original_title, original_name } = props;
    const { id, isMovie, type } = route.params;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if(navigation) {
            navigation.setOptions({
                headerShown: true,
            });

            navigation.getParent()?.setOptions({
                tabBarStyle: {
                  display: "none",
                }
            });
              
            return () => navigation.getParent()?.setOptions({
                tabBarStyle: {
                    display: 'flex'
                }
            });
        }
    }, [isFocused]);

    useEffect(() => {
        if(movie) {
            navigation.setOptions({
                title: isMovie ? movie.original_title : movie.original_name,
                headerBackTitle: "back to list",
                headerBackTitleVisible: false
            });

        }
    }, [movie]);

    const getMovies = async () => {
        const url = `${BASE_URL}/${type}/${id}?api_key=${APP_KEY}`;
        const response = await axios.get(url);
        setMovie(response.data)
    }

    useEffect(() => {
        getMovies()
    }, [])


    const displayMovie = () => {
        if(movie) {
            return (
                <ShowDetails data={movie} isMovie={isMovie} />
            )
        }
    
        return(<Loading />)
    }

    return (
        <VStack alignItems="center" paddingY={10} space={10}>

            {displayMovie()}
        </VStack>
    )

}

export default ShowMovieScreen;