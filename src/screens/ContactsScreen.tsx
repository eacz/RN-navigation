import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../themes/appTheme'
import { AuthContext } from '../context/AuthContext';

const ContactsScreen = () => {
  const {signIn, authState: {isLoggedIn}} = useContext(AuthContext)
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts</Text>

      {
        !isLoggedIn && <Button title="Sign in" onPress={signIn} />  
      }
      
      
    </View>
  )
}

export default ContactsScreen
