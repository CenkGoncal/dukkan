import React  from "react";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconButton = ({iconName,size,color,style,handlePress}) => {

    return(
        <TouchableOpacity style={style} onPress={handlePress}>
            <Icon name={iconName} size={size} background="white" color={color} />
        </TouchableOpacity>
    )
}

export default IconButton;