import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import Comics from '../screens/comics/Comics'
import ComicDetails from '../screens/comics/ComicDetails'



const ComicsStack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator >
            <Stack.Screen name="Comics" component={Comics} options={{ headerShown: false }} />
            <Stack.Screen name="ComicDetails" component={ComicDetails} />
        </Stack.Navigator>
    );
}
export default ComicsStack