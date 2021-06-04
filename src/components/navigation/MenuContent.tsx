import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {  DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import styles from '../../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


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
          <Icon style={{marginRight: 10}} name='compass-outline' color="black" size={24} />
          <Text style={styles.menuItemText}>Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Settings')}
        >
          <Icon style={{marginRight: 10}} name='settings-outline' color="black" size={24} />
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}

export default MenuContent