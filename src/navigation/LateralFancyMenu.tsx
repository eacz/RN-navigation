import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import {useWindowDimensions } from 'react-native';
import MenuContent from '../components/navigation/MenuContent';
//import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

//const Stack = createStackNavigator();
//const SettingsStackScreen = () => {
//  return (
//    <Stack.Navigator>
//      <Stack.Screen name="Settings" component={SettingsScreen}/>
//    </Stack.Navigator>
//  )
//}

const LateralFancyMenu = () => {
  const {width} = useWindowDimensions()
  return (
    <Drawer.Navigator 
      drawerPosition="left"
      drawerType={width >=768 ? 'permanent' :'front'}
      drawerContent={props => <MenuContent {...props} />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


export default LateralFancyMenu;