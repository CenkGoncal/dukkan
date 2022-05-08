import React,{useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

import styles from './loginStyle';
import usePost from '../../customhooks/usePost/usePost';
import LoginButton from '../../component/loginButton/LoginButton';
import TextInputComponent from '../../component/textInput/TextInput';

const Login = ({navigation}) => {
  const {data, error, isLoading, post} = usePost("CHANGE_TOKEN");
  const dispact = useDispatch();
console.log(data); console.log(isLoading);

  if (error) {
    Alert.alert('Trendsol', 'Kullanıcı bulunamadı');
    dispact({type: 'CHANGE_TOKEN', payload: {user: null}});
  } else if (Array.isArray(data) && isLoading == 1) 
  {
    debugger;
    dispact({type: 'CHANGE_TOKEN', payload: {user: data[0] }});
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Icon name="shopping-cart" size={30} color="white" />
        <Text style={styles.logotext}>TrendSol</Text>
      </View>

      <Formik
        initialValues={{username: 'johnd', password: 'm38rmF$'}}
        onSubmit={values => {
          post('https://fakestoreapi.com/auth/login', values);
        }}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.loginBox}>
            <TextInputComponent
              placeholder="UserName"
              iconName="person"
              value={values.username}
              handleText={handleChange('username')}
            />

            <TextInputComponent
              placeholder="Password"
              iconName="vpn-key"
              isSecure={true}
              value={values.password}
              handleText={handleChange('password')}
            />

            <LoginButton
              isLoading={isLoading}
              handleSubmit={handleSubmit}
              text={'Login'}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
