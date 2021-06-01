import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import styles from '../themes/appTheme';

const Drawer = createDrawerNavigator();

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

const MenuContent = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image 
        style={styles.avatar}
        source={{uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder-480x480.gif' }} 
        />
      </View>
    </DrawerContentScrollView>
  )
}

export default LateralFancyMenu;