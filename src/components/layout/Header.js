import { Box, HStack, Text } from 'native-base';
import { StatusBar } from 'react-native';
import colors from '../theme/colors';

const Header = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.darkBlue} barStyle='light-content' />
      <Box safeAreaTop backgroundColor={colors.darkBlue}>
        <HStack bg={colors.darkBlue} px={1} py={3} alignItems='center' justifyContent='center'>
          <Text color={colors.white} fontSize={20} fontWeight='bold'>
            Movies App
          </Text>
        </HStack>
      </Box>
    </>
  )
}

export default Header
