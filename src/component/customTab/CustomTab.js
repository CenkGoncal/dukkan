import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Product from '../../pages/product';
import ProductDetail from '../../pages/productDetail';
import Favorite from '../../pages/favorite';
import basket from '../../pages/basket';
import user from '../../pages/user';
import userinfo from '../../pages/userinfo';
import ChangeUserInfo from '../../pages/changeUserInfo/ChangeUserInfo';

const Tab = createBottomTabNavigator();

const CustomTab = () => {
  const Stack = createNativeStackNavigator();

  const Home = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ProductPage" component={Product} />
        <Stack.Screen name="ProductDetailPage" component={ProductDetail} />
      </Stack.Navigator>
    );
  };

  const User = () => {
    return (
      <Stack.Navigator  >
        <Stack.Screen name="UserPage" component={user} options={{headerShown: false}} />
        <Stack.Screen name="UserDetailPage" component={userinfo} options={{title:"Hesap Bilgileri"}} />
        <Stack.Screen name="UpdateUserInfoPage" component={ChangeUserInfo} options={{title:"Hesap Bilgileri"}} />
        <Stack.Screen name="UpdateUserEmailPage" component={ChangeUserInfo} options={{title:"E=Posta Değişikliği"}} />

      </Stack.Navigator>
    );
  };

  


  const customTabOption = (title, iconName, badgeCount) => {
    let option = {
      title: title,
      tabBarIcon: ({focused, color, size}) => {
        return (
          <Icon
            name={iconName}
            size={size}
            background="white"
            color={focused ? 'tomato' : 'black'}
          />
        );
      },
    };

    if (badgeCount > 0) option.tabBarBadge = badgeCount;

    return option;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="HomePage"
        component={Home}
        options={customTabOption('Anasayfa', 'home', 0)}
      />

      <Tab.Screen
        name="FavPage"
        component={Favorite}
        options={customTabOption(
          'Favoriler',
          'favorite',
          useSelector(s => s.favorities).length,
        )}
      />
      <Tab.Screen
        name="BasketPage"
        component={basket}
        options={customTabOption(
          'Sepetim',
          'shopping-basket',
          useSelector(s => s.basketlist).length,
        )}
      />
      <Tab.Screen
        name="UserStackPage"
        component={User}
        options={customTabOption('Sepetim', 'person', 0)}
      />
    </Tab.Navigator>
  );
};

export default CustomTab;
