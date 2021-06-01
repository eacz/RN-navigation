import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../themes/appTheme'

interface Props extends StackScreenProps<any, any> {}

const Screen1 = (props: Props) => {
  const {navigation} = props
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
