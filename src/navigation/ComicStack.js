import React from "react"
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Comics from '../screens/comics/Comics'
import ComicDetails from '../screens/comics/ComicDetails'



const ComicsStack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
        // screenOptions={{
        //     //gestureEnabled: true screenOptions içerisinde çalıştırmak lazım bir de
        //     //gestureDirection ile yön belirtmek gerekiyor.
        //     gestureDirection: 'horizontal',
        //     gestureEnabled: true,
        //     cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        //     // headerStyle: { backgroundColor: blueColor },
        //     headerTitleAlign: "center",
        //     // headerTintColor: "#fff"

        // }}
        >
            <Stack.Screen name="Comics" component={Comics} options={{ headerShown: false }} />
            <Stack.Screen name="ComicDetails" component={ComicDetails} options={{
                title: 'Çizgi Roman Detayı'
            }} />
        </Stack.Navigator>
    );
}
export default ComicsStack