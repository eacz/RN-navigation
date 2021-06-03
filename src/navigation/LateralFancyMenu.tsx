import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import {useWindowDimensions } from 'react-native';
import MenuContent from '../components/navigation/MenuContent';
import Tabs from './Tabs';
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
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


export default LateralFancyMenu;