import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const LateralMenu = () => {
  const {width} = useWindowDimensions()
  return (
    <Drawer.Navigator 
      drawerPosition="left"
      drawerType={width >=768 ? 'permanent' :'front'}
    >
      <Drawer.Screen options={{title:'Home'}} name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen options={{title:'Settings'}} name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default LateralMenu;