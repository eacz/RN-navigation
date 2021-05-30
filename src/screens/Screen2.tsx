import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core';
import { View, Text, Button } from 'react-native'
import styles from '../themes/appTheme';

const Screen2 = () => {
  const navigator = useNavigation()
  
  useEffect(() => {
    navigator.setOptions({
      headerBackTitle: '',
      title: 'Something else'
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 2</Text>
      <Button title="screen 3" onPress={() => navigator.navigate("Screen3")}/>

    </View>
  )
}

export default Screen2
