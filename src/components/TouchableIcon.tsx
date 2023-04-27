import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../themes/appTheme'
import { AuthContext } from '../context/AuthContext';

interface TouchableIconProps {
    iconName: string;
}

const TouchableIcon = ({ iconName }: TouchableIconProps) => {

    const { changeFavoriteIcon } = useContext(AuthContext)

    return (
        <TouchableOpacity
            onPress={() => changeFavoriteIcon(iconName)}
        >
            <Icon
                name={iconName}
                size={80}
                color={colors.primary}
            />
        </TouchableOpacity>
    )
}

export default TouchableIcon