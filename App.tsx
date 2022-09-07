import React from 'react';
import AuthContextProvider from "./src/context/AuthContext"
import NavigationPublic from "./src/navigation/NavigationPublic"
import NavigationPrivate from "./src/navigation/NavigationPrivate"
import { NavigationContainer } from '@react-navigation/native';
import DeviceStorage from "./src/config/DeviceStorage"
import {Enviroments} from "./src/config/Enviroments"
import {AuthContext} from "./src/context/AuthContext"

const App = ()=>{

  
  return(
    <NavigationContainer>
    <AuthContextProvider/>
    </NavigationContainer>
  )
}


export default App;
