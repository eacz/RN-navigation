import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import ButtonWithArgument from '../components/ButtonWithArgument'
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

      <Text style={{marginVertical: 20, fontSize: 20}}>Navigation with arguments</Text>
      <View style={{flexDirection: 'row'}}>
        <ButtonWithArgument backgroundColor='#5856d6' person={{id: 1, name: 'Marie'} } {...props} />
        <ButtonWithArgument backgroundColor='#ede342' person={{id: 2, name: 'Pepe'} } {...props} />
        <ButtonWithArgument person={{id: 3, name: 'Juana'} } {...props} />
      </View>
    </View>
  )
}

export default Screen1
