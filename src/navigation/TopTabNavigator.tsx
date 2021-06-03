import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';

const TopTab = createMaterialTopTabNavigator();

const TopTabElements = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Chat" component={ChatScreen} />
      <TopTab.Screen name="Contacts" component={ContactsScreen} />
      <TopTab.Screen name="Album" component={AlbumsScreen} />
    </TopTab.Navigator>
  );
}

export default TopTabElements;