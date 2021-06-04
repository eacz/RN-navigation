import React from 'react'
import { View, Text } from 'react-native'
import styles from '../themes/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../themes/appTheme';

const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <Icon name="eye-outline" size={80} color={colors.primary} />
        <Icon name="eye-off-outline" size={80} color={colors.primary} />
        <Icon name="alarm-outline" size={80} color={colors.primary} />
        <Icon name="add-outline" size={80} color={colors.primary} />
        <Icon name="game-controller-outline" size={80} color={colors.primary} />
        <Icon name="laptop-outline" size={80} color={colors.primary} />
        <Icon name="power-outline" size={80} color={colors.primary} />
      </Text>
    </View>
  )
}

export default Tab1Screen
