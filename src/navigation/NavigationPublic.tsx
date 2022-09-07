
import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/public/Login"
import Register from "../screens/public/Register"
import Home from "../screens/private/Home"

const NavigationPublic = ()=>{

    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator initialRouteName="Login"  screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}
export default NavigationPublic;