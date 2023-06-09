import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from "../screens/HomeScreen";
import {AddScreen} from "../screens/AddScreen";
import {SearchScreen} from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export function BottomNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Add Book" component={AddScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
    );
}
