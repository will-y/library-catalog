import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from "../screens/HomeScreen";
import {AddScreen} from "../screens/AddScreen";
import {SearchScreen} from "../screens/SearchScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function BottomNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            unmountOnBlur: true
        }}>
            <Tab.Screen name="Library" component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="book-open" color={color} size={size} />
                ),
            }}/>
            <Tab.Screen name="Add Book" component={AddScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
                ),
            }}/>
            <Tab.Screen name="Search" component={SearchScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="book-search" color={color} size={size} />
                ),
            }}/>
        </Tab.Navigator>
    );
}
