import { DrawerScreenProps } from '@react-navigation/drawer'
import React from 'react'
import {  Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../themes/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends DrawerScreenProps<any, any>{
  person: {
    id: number,
    name: string
  },
  iconName?: string,
  backgroundColor?: string
}

const ButtonWithArgument = ({person, navigation, backgroundColor='red', iconName='man-outline' }: Props) => {
  return (
    <TouchableOpacity
    style={{...styles.button, backgroundColor}}
    onPress={() => navigation.navigate("Person", person)}
    >
      <Icon name={iconName} color="white" size={40} />
      <Text style={styles.buttonText}>{person.name}</Text>
    </TouchableOpacity>
  )
}

export default ButtonWithArgument
