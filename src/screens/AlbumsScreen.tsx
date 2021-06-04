import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../themes/appTheme'
import { AuthContext } from '../context/AuthContext';

const AlbumsScreen = () => {
  const {authState: {isLoggedIn},logOut} = useContext(AuthContext)
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Albums</Text>
      {
        isLoggedIn && <Button title="Log out" onPress={logOut} />  
      }
      
    </View>
  )
}

export default AlbumsScreen
