import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from '../themes/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RouteStackParams } from '../navigation/StackNavigator';
import { AuthContext } from '../context/AuthContext';

//forma rapida de tipar parametros de una ruta
//interface RouteParams {
  //id: number,
  //name: string
//}

interface Props extends StackScreenProps <RouteStackParams , 'Person'>{}

const PersonScreen = ({navigation, route}: Props) => {

  //const params = route.params as RouteParams
  const params = route.params

  const {changeUsername} = useContext(AuthContext)

  useEffect(() => {
    navigation.setOptions({title: params.name})
  }, [])
  
  useEffect(() => {
    changeUsername(params.name)
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title} >
        {JSON.stringify(params, null,3)}
      </Text>
    </View>
  )
}

export default PersonScreen
