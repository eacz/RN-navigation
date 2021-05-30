import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../themes/appTheme'

interface Props extends StackScreenProps<any, any> {}

const Screen1 = (props: Props) => {
  const {navigation} = props
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 1</Text>
      <Button title="screen 2" onPress={() => navigation.navigate("Screen2")}/>
    </View>
  )
}

export default Screen1
