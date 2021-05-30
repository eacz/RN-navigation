import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer >
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <StackNavigator />
    </NavigationContainer>
  )
}

export default App
