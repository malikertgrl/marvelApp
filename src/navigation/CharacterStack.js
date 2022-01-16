import React from "react"
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Characters from '../screens/characters/Characters'
import CharacterDetails from '../screens/characters/CharacterDetails'



const CharacterStack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
        //  screenOptions={{
        //     //gestureEnabled: true screenOptions içerisinde çalıştırmak lazım bir de
        //     //gestureDirection ile yön belirtmek gerekiyor.
        //     gestureDirection: 'horizontal',
        //     gestureEnabled: true,
        //     cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        //     // headerStyle: { backgroundColor: blueColor },
        //     headerTitleAlign: "center",
        //     // headerTintColor: "#fff"

        // }} 

        // burayı açtığımda içerdeki horizontal flatlist bozuldu. 
        >
            <Stack.Screen name="Characters" component={Characters} options={{ headerShown: false }} />
            <Stack.Screen name="CharacterDetails" component={CharacterDetails} options={{
                title: 'Karakter Detayı'
            }} />
        </Stack.Navigator>
    );
}
export default CharacterStack