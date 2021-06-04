import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import LateralFancyMenu from './src/navigation/LateralFancyMenu';
import { AuthProvider } from './src/context/AuthContext';
//import StackNavigator from './src/navigation/StackNavigator';
//import LateralMenu from './src/navigation/LateralMenu';

const App = () => {
  return (
      <NavigationContainer >
        <AppState>
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          {/*<StackNavigator />*/}
          {/*<LateralMenu />*/}
          <LateralFancyMenu />
        </AppState>
      </NavigationContainer>  
  )
}

const AppState = ({children} : {children: JSX.Element[]}) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App
