import React from 'react';
import {ActivityIndicator, TouchableOpacity, Text} from 'react-native';
import styles from "./LoginButtonStyle";

const LoginButton = ({handleSubmit,isLoading,text}) => {
  return (
    <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit} disabled={isLoading == 0}>
      {  isLoading == 0 ?
          <ActivityIndicator color="white" /> : 
          <Text style={styles.text}>{text}</Text>
      }
    </TouchableOpacity>
  );
};

export default LoginButton;
