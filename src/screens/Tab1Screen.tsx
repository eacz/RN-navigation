import React from 'react'
import { View, Text } from 'react-native'
import styles from '../themes/appTheme'
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Text>Select your favorite icon!</Text>
      <Text>
        <TouchableIcon iconName="eye-outline" color="red" />
        <TouchableIcon iconName="eye-off-outline"  />
        <TouchableIcon iconName="alarm-outline" color="blue" />
        <TouchableIcon iconName="add-outline" color="green" />
        <TouchableIcon iconName="game-controller-outline" color="coral" />
        <TouchableIcon iconName="laptop-outline" color="cadetblue"  />
        <TouchableIcon iconName="power-outline" color="darkorange" />
      </Text>
    </View>
  )
}

export default Tab1Screen
