import React, { useState } from "react";
import axios from "axios";

import Form from "../forms/Form";
import { Box, Heading } from "native-base";
import { APP_KEY, BASE_URL } from "../../config/api_config";

import MovieList from '../lists/MovieList';

const SearchScreen = (props) => {
    const { navigation } = props;
    const [result, setResult] = useState(null);
    const [searchTerm, setSearchTerm] = useState('null');
    const [searchType, setSearchType] = useState('multi');

    const onInputChange = (value) => {
        setSearchTerm(value);
    }

    const onSubmit = async (e) => {
        console.log(searchTerm);
        console.log(searchType);
        const url = `${BASE_URL}/search/${searchType}?query=${searchTerm}&api_key=${APP_KEY}`;
        const response = await axios.get(url)
        setResult(response.data.results)
    }

    const showMovie = (id, media_type) => {
        navigation.navigate("ShowMovie", { id, media_type})
        console.log(id)
    }

    const displayResult = () => {
        if(result) {
            return (
                <MovieList data={result} showMovie={showMovie} />
            )
        }

        return(
            <Box paddingY={40} alignItems='center'>
                <Heading>Please initiate a search</Heading>
            </Box>
        )
    }

    return (
        <>
            <Form 
                onInputChange={onInputChange} 
                onSubmit={onSubmit} 
                setSearchType={setSearchType} 
                searchType={searchType}
            />
            {displayResult()}
        </>
    )

}

export default SearchScreen;