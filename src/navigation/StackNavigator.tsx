import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="Screen1"
    screenOptions={{
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
      },
      cardStyle: {
        backgroundColor: 'white',
        opacity: 1, 
      },
    }}
    >
      <Stack.Screen name="Screen1" options={{title: 'Page 1'}} component={Screen1} />
      <Stack.Screen name="Screen2" options={{title: 'Page 2'}} component={Screen2} />
      <Stack.Screen name="Screen3" options={{title: 'Page 3'}} component={Screen3} />
    </Stack.Navigator>
  );
}
export default StackNavigator