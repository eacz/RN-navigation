import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styles from '../themes/appTheme'
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../themes/appTheme';

const SettingsScreen = () => {
  const insets = useSafeAreaInsets()

  const {authState} = useContext(AuthContext)



  return (
    <View style={{...styles.globalMargin, marginTop: insets.top}}>
      <Text style={styles.title}>Settings</Text>
      <Text>
        {JSON.stringify(authState, null,3)}
      </Text>
      {authState.favoriteIcon && 
        <>
        <Text>Este es tu icono favorito!</Text>
        <Icon name={authState.favoriteIcon} size={150} color={colors.primary} />
        </>
      }
    </View>
  )
}

export default SettingsScreen
