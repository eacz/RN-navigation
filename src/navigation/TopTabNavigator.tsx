import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../themes/appTheme';
import { Text } from 'react-native';

const TopTab = createMaterialTopTabNavigator();

const TopTabElements = () => {
  const {top} = useSafeAreaInsets()
  return (
    <TopTab.Navigator 
      style={{marginTop: top}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        pressColor: colors.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colors.primary
        },
        style: {
          elevation: 0,
          shadowColor: 'transparent'
        }
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName:string = '';
          switch(route.name){
            case 'Chat':
              iconName = 'Ch'
              break;
            case 'Contacts':
              iconName= 'Co'
              break;
            case 'Album':
              iconName= 'Al'
              break;
          } 
          return <Text style={{color}}>{iconName}</Text>
        }
      })}
    >
      <TopTab.Screen name="Chat" component={ChatScreen} />
      <TopTab.Screen name="Contacts" component={ContactsScreen} />
      <TopTab.Screen name="Album" component={AlbumsScreen} />
    </TopTab.Navigator>
  );
}

export default TopTabElements;