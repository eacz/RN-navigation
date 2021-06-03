import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {  DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import styles from '../../themes/appTheme';

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
          onPress={() => navigation.navigate('Tabs')}
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

export default MenuContent