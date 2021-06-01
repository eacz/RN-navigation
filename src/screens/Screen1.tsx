import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import styles from '../themes/appTheme'

interface Props extends DrawerScreenProps<any, any> {}

const Screen1 = (props: Props) => {
  const {navigation} = props;


  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
          <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      )
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 1</Text>
      <Button title="screen 2" onPress={() => navigation.navigate("Screen2")}/>

      <Text>Navigation with arguments</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
        style={{...styles.button, backgroundColor:'#5856d6'}}
        onPress={() => navigation.navigate("Person", {
          id: 1,
          name: 'Pepe'
        })}
        >
          <Text style={styles.buttonText}>Pepe</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Person", {
          id: 2,
          name: 'Marie'
        })}
        >
          <Text style={styles.buttonText}>Marie</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Screen1
