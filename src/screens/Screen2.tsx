import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { View, Text, Button } from 'react-native'
import styles from '../themes/appTheme';

const Screen2 = () => {
  const navigator = useNavigation()
  
  return (
    <View style={styles.globalMargin}>
      <Text>Screen 2</Text>
      <Button title="screen 3" onPress={() => navigator.navigate("Screen3")}/>

    </View>
  )
}

export default Screen2
