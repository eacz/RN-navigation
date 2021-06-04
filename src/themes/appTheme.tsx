import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    globalMargin: {
      marginHorizontal: 20
    },
    title: {
      fontSize: 30,
      marginBottom: 10
    },
    button:{
      width: 100,
      height: 100,
      backgroundColor: 'red',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
    },
    avatarContainer: {
      alignItems: 'center',
      marginTop: 20
    },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 100,
    },
    menuContainer: {
      marginVertical: 20,
      marginHorizontal: 50,
    },
    menuItem: {
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    menuItemText: {
      fontSize: 18
    },
    menuButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
    }
});

export const colors = {
  primary: '#5856d6'
}

export default styles