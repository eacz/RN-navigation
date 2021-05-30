import React from 'react'
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import styles from '../themes/appTheme';

interface Props extends StackScreenProps<any, any>{}

const Screen3 = (props: Props) => {
  const {navigation} = props
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 3</Text>
      <Button title="go back" onPress={() => navigation.pop()}/>
      <Button title="screen 1" onPress={() => navigation.popToTop()}/>
    </View>
  )
}

export default Screen3
