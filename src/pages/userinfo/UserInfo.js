import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './UserInfoStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';

const UserInfo = ({navigation}) => {
  const dispact = useDispatch();

  const headerMenu = [
    {
      menuId: 1,
      menuName: 'Kullancı Bilgilerim',
      iconName: 'account',
      link: 'UpdateUserInfoPage',
    },
    {
      menuId: 2,
      menuName: 'Adres Bilgilerim',
      iconName: 'comment-text',
      link: 'UserDetailPage',
    },
    {
      menuId: 3,
      menuName: 'Kayıtlı Kartlarım',
      iconName: 'reload',
      link: 'UserDetailPage',
    },
    {
      menuId: 4,
      menuName: 'E-posta Değişikliği',
      iconName: 'shopping-search',
      link: 'UpdateUserEmailPage',
    },
    {
      menuId: 5,
      menuName: 'Şifre Değişikliği',
      iconName: 'cellphone-arrow-down',
      link: 'UserDetailPage',
    },
    {
      menuId: 6,
      menuName: 'Duyuru Tercihlerim',
      iconName: 'message-text-outline',
      link: 'UserDetailPage',
    },
    {
      menuId: 7,
      menuName: 'Ülke Değiştir',
      iconName: 'office-building-outline',
      link: 'UserDetailPage',
    },
    {
      menuId: 8,
      menuName: 'Çıkış',
      iconName: 'star-four-points',
      link: () => {
        dispact({type: 'CHANGE_TOKEN', payload: {user: null}});
      },
    },
  ];

  const onNavigate = link => {
    if (typeof like === 'string') {
      navigation.navigate(link);
    } else {
      link();
    }
  };

  const Item = ({item}) => {
    return (
      <View style={styles.itemBox}>
        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => onNavigate(item.link)}>
          <Icon
            name={item.iconName}
            size={23}
            background="white"
            color="gray"
            style={styles.icon}
          />
          <Text style={styles.itemBoxText}>{item.menuName}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.UserInfo}
      data={headerMenu}
      renderItem={Item}
      keyExtractor={item => item.menuId.toString()}
    />
  );
};

export default UserInfo;
