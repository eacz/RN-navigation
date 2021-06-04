import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ButtonWithArgument from '../components/ButtonWithArgument'
import styles, { colors } from '../themes/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> {}

const Screen1 = (props: Props) => {
  const {navigation} = props;


  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
          <TouchableOpacity style={styles.menuButton} onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu-outline" size={50} color={colors.primary}  />
          </TouchableOpacity>
      )
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 1</Text>
      <Button title="screen 2" onPress={() => navigation.navigate("Screen2")}/>

      <Text style={{marginVertical: 20, fontSize: 20}}>Navigation with arguments</Text>
      <View style={{flexDirection: 'row'}}>
        <ButtonWithArgument iconName="woman-outline" backgroundColor='#5856d6' person={{id: 1, name: 'Marie'} } {...props} />
        <ButtonWithArgument backgroundColor='#ede342' person={{id: 2, name: 'Pepe'} } {...props} />
        <ButtonWithArgument iconName="woman-outline" person={{id: 3, name: 'Juana'} } {...props} />
      </View>
    </View>
  )
}

export default Screen1
