import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Characters from '../screens/characters/Characters'
import Comics from '../screens/comics'
// import { Colors } from '../constants/Colors';






const Router = () => {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer >
            <Tab.Navigator initialRouteName='Characters' screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Characters" component={Characters} />
                <Tab.Screen name="Comics" component={Comics} />
            </Tab.Navigator>

        </NavigationContainer>
    );
}
export default Router