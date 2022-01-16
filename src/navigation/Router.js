import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharacterStack from './CharacterStack'
import ComicStack from './ComicStack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { Colors } from '../constants/Colors';






const Router = () => {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer >
            <Tab.Navigator initialRouteName='CharacterStack' screenOptions={
                //     ({ route }) => ({
                //     tabBarIcon: ({ focused, color, size }) => {
                //         let iconName;

                //         if (route.name === 'CharacterStack') {
                //             iconName = focused
                //                 ? 'book'
                //                 : 'book-open';
                //         } else if (route.name === 'ComicStack') {
                //             iconName = focused ? 'book'
                //                 : 'book-open';;
                //         }

                //         // You can return any component that you like here!
                //         return <FontAwesome5 name={iconName} size={size} color={color} />;
                //     },
                //     tabBarActiveTintColor: 'tomato',
                //     tabBarInactiveTintColor: 'gray',
                // }),

                { headerShown: false }}>
                <Tab.Screen name="CharacterStack" component={CharacterStack} />
                <Tab.Screen name="ComicStack" component={ComicStack} />
            </Tab.Navigator>

        </NavigationContainer>
    );
}
export default Router