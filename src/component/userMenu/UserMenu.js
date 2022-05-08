import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './UserMenuStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserMenu = ({navigation}) => {
  const headerMenu = [
    {menuId: 1, menuName: 'Siparişlerim', iconName: 'cube-outline',link:"UserDetailPage"},
    {menuId: 2, menuName: 'Değerlendirmelerim', iconName: 'comment-text',link:"UserDetailPage"},
    {menuId: 3, menuName: 'Tekrar Satın Al', iconName: 'reload',link:"UserDetailPage"},
    {menuId: 4, menuName: 'Önceden Gezindiklerim', iconName: 'shopping-search',link:"UserDetailPage"},
    {menuId: 5, menuName: 'Dijital Servisler', iconName: 'cellphone-arrow-down',link:"UserDetailPage"},
    {menuId: 6, menuName: 'Mesajlarım', iconName: 'message-text-outline',link:"UserDetailPage"},
    {menuId: 7, menuName: 'Takip Ettiğim Mağazalar', iconName: 'office-building-outline',link:"UserDetailPage"},
    {menuId: 8, menuName: 'Trendyol Elite', iconName: 'star-four-points',link:"UserDetailPage"},
    {menuId: 9, menuName: 'Hesap Bilgilerim', iconName: 'cog',link:"UserDetailPage"},
    {menuId: 10, menuName: 'Yardım', iconName: 'chat-question',link:"HelpPage"},
  ];

  const onNavigate = (link) => {
    navigation.navigate(link);
  }

  const Item = ({item}) => {
    return (
      <View style={styles.itemBox}>
         <TouchableOpacity style={styles.itemButton} onPress={()=>onNavigate(item.link)}>
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
      style={styles.UserMenu}
      data={headerMenu}
      renderItem={Item}
      keyExtractor={item => item.menuId.toString()}
    />
  );
};

export default UserMenu;
