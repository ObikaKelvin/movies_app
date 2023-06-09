import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../theme/colors';

import SearchStack from './SearchStack';
import MovieStack from './MovieStack';
import TvStack from './TvStack';

const AppTopBar = (props) => {

    const appTab = createMaterialTopTabNavigator();

    const createScreenOptions = (navigation) => {
        const { route } = navigation;
        const routeName = route.name.toLowerCase();
        const title = `${routeName.charAt(0).toUpperCase()}${routeName.slice(1)}`;
        return {
            title,
            tabBarActiveTintColor: colors.darkBlue,
            tabBarInactiveTintColor: colors.grey,
            tabBarIndicatorStyle: {
                borderBottomColor: colors.darkBlue,
                borderBottomWidth: 3
            }
        }
    };

    return (
        <NavigationContainer>
            <appTab.Navigator 
                screenOptions={createScreenOptions}
                backBehavior="history"
            >
                <appTab.Screen name="Movies" component={MovieStack} />
                <appTab.Screen name="Search Results" component={SearchStack} />
                <appTab.Screen name="Tv Shows" component={TvStack} />
            </appTab.Navigator>
        </NavigationContainer>

    )
}

export default AppTopBar;