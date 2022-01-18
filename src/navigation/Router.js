import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharacterStack from './CharacterStack'
import ComicStack from './ComicStack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../constants/Colors';






const Router = () => {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer >
            <Tab.Navigator initialRouteName='CharacterStack' screenOptions={
                { headerShown: false, }}>

                <Tab.Screen name="CharacterStack" component={CharacterStack} options={{
                    tabBarLabel: 'Characters',
                    tabBarActiveTintColor: "#1d3557",

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="user-shield" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="ComicStack" component={ComicStack} options={{
                    tabBarLabel: 'Comics',
                    tabBarActiveTintColor: "#7f0000",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="book-open" color={color} size={size} />
                    ),

                }} />
            </Tab.Navigator>

        </NavigationContainer>
    );
}
export default Router