import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
  size?: number,
  color?: string,
  iconName: string
}

const TouchableIcon = ({size=80, color = colors.primary, iconName} : Props) => {
  const {changeFavIcon} = useContext(AuthContext)

  return (
    <TouchableOpacity
      onPress={() => changeFavIcon(iconName)}
    >
      <Icon name={iconName} size={size} color={color} />
    </TouchableOpacity>
  
  )
}

export default TouchableIcon
