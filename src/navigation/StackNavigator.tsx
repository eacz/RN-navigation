import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen 1" component={Screen1} />
      <Stack.Screen name="Screen 2" component={Screen2} />
      <Stack.Screen name="Screen 3" component={Screen3} />
    </Stack.Navigator>
  );
}
export default StackNavigator