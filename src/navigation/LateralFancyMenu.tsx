import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import styles from '../themes/appTheme';
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

const MenuContent = ({navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image 
        style={styles.avatar}
        source={{uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder-480x480.gif' }} 
        />
      </View>

      {/* Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('StackNavigator')}
        >
          <Text style={styles.menuItemText}>Stack navigator</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}

export default LateralFancyMenu;