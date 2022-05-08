import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './userHeaderStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserHeader = () => {

  const headerMenu = [
    {menuId: 1, menuName: 'Trendyol Cüzdanım', iconName: 'local-mall'},
    {menuId: 2, menuName: 'İndirim Kuponlarım', iconName: 'wysiwyg'},
    {menuId: 3, menuName: 'Trendyol Asistan', iconName: 'sms'},
    {menuId: 4, menuName: 'Hediye Çeki Satın Al', iconName: 'sensor-window'},
  ];

  const Item = ({item}) => {
    return (
      <View style={styles.itemBox}>
        <TouchableOpacity style={styles.itemButton}>
          <Icon
            name={item.iconName}
            size={23}
            background="white"
            color="#ff3d00"
          />
          <Text style={styles.itemBoxText}>{item.menuName}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
      <FlatList
        style={styles.headerMenu}
        data={headerMenu}
        horizontal={true}
        renderItem={Item}
        keyExtractor={item => item.menuId.toString()}
      />
  );
};

export default UserHeader;
