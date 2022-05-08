import React, {useState} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';

import TextInputComponent from '../../component/textInput/TextInput';
import LoginButton from '../../component/loginButton/LoginButton';
import usePut from '../../customhooks/usePut/usePut';

const ChangeUserInfo = () => {
  const { error, isLoading, put} = usePut("UPDATE_USER");
  const user = useSelector(s => s.user);

  //const user = eval(reduceUser._W[0]) !== 'undefined' ? eval(reduceUser._W[0]) : reduceUser;



  const dispact = useDispatch();

  if (error) {
    Alert.alert('Trendsol', 'Kullanıcı güncellenemedi');
  }  
  
  const logOut = () => {
    dispact({type: 'CHANGE_TOKEN', payload: { username: ''}});
  };

  return (
    <View style={{backgroundColor: 'white', padding: 10, paddingTop: 20}}>
      <Formik
        initialValues={{
          name: user.name ? `${user.name.firstname} ${user.name.lastname}` : "",
          email: user.email,
          cellphone: user.phone,
        }}
        onSubmit={values => {
          var dto = {
            email: 'John@gmail.com',
            username: 'johnd',
            password: 'm38rmF$',
            name: {
              firstname: values.name.split(' ')[0],
              lastname: values.name.split(' ')[1],
            },
            address: {
              city: 'kilcoole',
              street: '7835 new road',
              number: 3,
              zipcode: '12926-3874',
              geolocation: {
                lat: '-37.3159',
                long: '81.1496',
              },
            },
            phone: values.cellphone,
          };

          put(`https://fakestoreapi.com/users/${user.id}`, dto);
        }}>
        {({handleSubmit, handleChange, values}) => (
          <View>
            <TextInputComponent
              placeholder="Ad Soyad"
              iconName="person"
              value={values.name}
              handleText={handleChange('name')}
              isBorder={true}
              color="tomato"
            />
            <TextInputComponent
              placeholder="Email"
              iconName="email"
              value={values.email}
              handleText={handleChange('email')}
              isBorder={true}
              color="tomato"
              enable={false}
            />
            <TextInputComponent
              placeholder="Cep Telefonu"
              iconName="local-phone"
              value={values.cellphone}
              handleText={handleChange('cellphone')}
              isBorder={true}
              color="tomato"
            />

            <LoginButton
              handleSubmit={handleSubmit}
              text={'Güncelle'}
              isLoading={isLoading}
            />
            <TouchableOpacity onPress={logOut}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 5,
                  padding: 5,
                  fontSize: 15,
                }}>
                Hesabı Kapat
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ChangeUserInfo;
