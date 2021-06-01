import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import LateralFancyMenu from './src/navigation/LateralFancyMenu';
//import StackNavigator from './src/navigation/StackNavigator';
//import LateralMenu from './src/navigation/LateralMenu';

const App = () => {
  return (
    <NavigationContainer >
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        {/*<StackNavigator />*/}
        {/*<LateralMenu />*/}
        <LateralFancyMenu />
    </NavigationContainer>
  )
}

export default App
