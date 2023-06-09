import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../theme/colors';

import Home from '../screens/Home';

const AppNavigator = (props) => {

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
                <appTab.Screen name="Movies" component={Home} />
                <appTab.Screen name="Search Results" component={Home} />
                <appTab.Screen name="Tv Shows" component={Home} />
            </appTab.Navigator>
        </NavigationContainer>

    )
}

export default AppNavigator;