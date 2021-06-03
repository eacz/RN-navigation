import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';
import { colors } from '../themes/appTheme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
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
        }
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color,}) => {
          let iconName:string = '';
          switch(route.name){
            case 'Tab1':
              iconName = 'T1'
              break;
            case 'Tab2':
              iconName= 'T2'
              break;
            case 'StackNavigator':
              iconName= 'ST'
              break;
          } 
          return <Text style={{color}}>{iconName}</Text>
        }
      })}
    >
      {/* una manera de agregar iconos, en la misma definicion del tab */}
      {/*<Tab.Screen name="Tab1" options={{title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen} />*/}
      <Tab.Screen name="Tab1" options={{title: 'Tab1'}} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{title: 'Tab2'}} component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </Tab.Navigator>
  );
}

export default Tabs