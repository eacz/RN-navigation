import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Icon from 'react-native-vector-icons/Ionicons';
import StackNavigator from './StackNavigator';
import  { colors } from '../themes/appTheme';
import { Platform } from 'react-native';
import TopTabElements from './TopTabNavigator';

const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIosElements /> : <TabAndroidElements />
}

//TODO: separar TabAdroid y TabIos en diferentes archivos
const TabAndroid = createMaterialBottomTabNavigator();

const TabAndroidElements = () => {
  return (
    <TabAndroid.Navigator
     sceneAnimationEnabled={true}
     barStyle={{
       backgroundColor: colors.primary
     }}
     screenOptions={({route}) => ({
      tabBarIcon: ({color,}) => {
        let iconName:string = '';
        switch(route.name){
          case 'Tab1':
            iconName = 'logo-javascript'
            break;
          case 'Tab2':
            iconName= 'logo-react'
            break;
          case 'StackNavigator':
            iconName= 'file-tray-stacked-outline'
            break;
        } 
        return <Icon name={iconName} size={20} color={color} />
      }
    })}
    >
      <TabAndroid.Screen name="Tab1" options={{title: 'Tab1'}} component={Tab1Screen} />
      <TabAndroid.Screen name="Tab2" options={{title: 'Tab2'}} component={TopTabElements} />
      <TabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </TabAndroid.Navigator>
  );
}


const TabIos = createBottomTabNavigator();

const TabsIosElements = () => {
  return (
    <TabIos.Navigator
      sceneContainerStyle = {{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          elevation: 0,
          borderTopColor: colors.primary,
          borderTopWidth: 0
        },
        labelStyle: {
          fontSize: 15
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color,}) => {
          let iconName:string = '';
          switch(route.name){
            case 'Tab1':
              iconName = 'logo-javascript'
              break;
            case 'Tab2':
              iconName= 'logo-react'
              break;
            case 'StackNavigator':
              iconName= 'file-tray-stacked-outline'
              break;
          } 
          return <Icon name={iconName} size={20} color={color} />
        }
      })}
    >
      {/* una manera de agregar iconos, en la misma definicion del tab */}
      {/*<Tab.Screen name="Tab1" options={{title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen} />*/}
      <TabIos.Screen name="Tab1" options={{title: 'Tab1'}} component={Tab1Screen} />
      <TabIos.Screen name="Tab2" options={{title: 'Tab2'}} component={TopTabElements} />
      <TabIos.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </TabIos.Navigator>
  );
}

export default Tabs