import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './TextInputStyle';

const TextInputComponent = ({
  placeholder,
  handleText,
  value,
  iconName,
  color,
  isSecure,
  isBorder,
  enable = true,
}) => {
  const [secure, setSecure] = useState(isSecure);
  const [isTouchText, setTouchText] = useState(false);
  const [isKeyPress, setKeyPress] = useState(false);

  const LabelContainer = () => {
    return(
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{placeholder}</Text>
      </View>
    )
  }

  const OnTextOut = () => {
    setTouchText(false);

    if(!value)
      setKeyPress(false);
  }


  return (
    <View style={styles.container}>
      <Icon name={iconName} size={20} background="white" color={color} />

      {(isBorder &&  isKeyPress && enable) && <LabelContainer />}

      <TextInput
        onFocus={() => setTouchText(true)}
        onBlur={OnTextOut}
        onKeyPress={() => setKeyPress(value ? true : false)}
        placeholder={placeholder}
        style={styles.text(isBorder, isTouchText)}
        onChangeText={handleText}
        value={value}
        secureTextEntry={secure}
        editable={enable}
      />

      {isSecure && (
        <TouchableOpacity
          style={styles.eyebtn(secure)}
          onPress={() => setSecure(!secure)}>
          <Icon
            name="remove-red-eye"
            size={20}
            background="white"
            color={color}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputComponent;
