import { DrawerScreenProps } from '@react-navigation/drawer'
import React from 'react'
import {  Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../themes/appTheme'

interface Props extends DrawerScreenProps<any, any>{
  person: {
    id: number,
    name: string
  },
  backgroundColor?: string
}

const ButtonWithArgument = ({person, navigation, backgroundColor='red' }: Props) => {
  return (
    <TouchableOpacity
    style={{...styles.button, backgroundColor}}
    onPress={() => navigation.navigate("Person", person)}
    >
      <Text style={styles.buttonText}>{person.name}</Text>
    </TouchableOpacity>
  )
}

export default ButtonWithArgument
