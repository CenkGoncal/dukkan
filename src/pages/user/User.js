import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './UserStyle';

import IconButton from '../../component/iconButton';
import UserHeader from '../../component/userHeader';
import UserMenu from '../../component/userMenu/UserMenu';

const User = ({navigation}) => {
  const user = useSelector(s => s.user);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{user.email}</Text>
        <IconButton
          style={styles.searchIcon}
          iconName={'notifications'}
          size={25}
          color="white"
        />
      </View>

      <UserHeader />

      <View style={styles.contentMenu}>
        <UserMenu navigation={navigation} />
      </View>
    </View>
  );
};

export default User;
