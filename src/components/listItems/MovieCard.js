import { Box, Button, Center, Divider, Heading, Image, Text, VStack, Flex } from 'native-base'
import { APP_KEY, BASE_URL } from '../../config/api_config';

const MovieCard = (props) => {
    const { id, original_title, original_name, isMovie, popularity, release_date, poster_path, showMovie } = props;

    const title = isMovie ? original_title : original_name;

    return(
        <Box mb={2} paddingX={4}>
            <Flex direction="row" alignItems='center'>
                <Box mr={2}>
                    <Image alt={title} source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}  width={100} height={120} />
                </Box>

                <Box>
                    <Heading size='xs' mb={1}>{title}</Heading>
                    
                    <Text>
                        <Text>Popularity: </Text>
                        <Text>{popularity}</Text>
                    </Text>

                    <Text>
                        <Text>Release Date: </Text>
                        <Text>{release_date}</Text>
                    </Text>

                    <Button onPress={() => showMovie(id)} width={200}>More Details</Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default MovieCard;