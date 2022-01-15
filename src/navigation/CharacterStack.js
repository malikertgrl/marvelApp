import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import Characters from '../screens/characters/Characters'
import CharacterDetails from '../screens/characters/CharacterDetails'



const CharacterStack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator >
            <Stack.Screen name="Characters" component={Characters} options={{ headerShown: false }} />
            <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
        </Stack.Navigator>
    );
}
export default CharacterStack