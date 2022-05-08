import React, {useState} from 'react';
import {Text, View, FlatList, Image, Share} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import ContextMenu from 'react-native-context-menu-view';

import AddBasketButton from '../../component/addBasketButton';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './favoriteStyle';
import { onShare } from '../../utils/common';

const Favorite = () => {
  const favlist = useSelector(s => s.favorities);
  const dispatch = useDispatch();

 
  const FavoriteItem = ({item}) => {
    return (
      <View style={styles.favcontainer}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.infoContainer}>
          <View style={styles.buttonGroup}>
            <Text style={styles.title}>{item.title}</Text>

            <ContextMenu
              actions={[{title: 'Paylaş'}, {title: 'Sil'}]}
              onPress={e => {                     
                e.nativeEvent.index == 0 ? 
                  onShare()
                  :
                  dispatch({type: "REMOVE_FAVORITE", payload: { item: item }})
              }}>
                <Icon name="ellipsis-v" size={20} background="white" />
            </ContextMenu>
          </View>

          <Text style={styles.price}>{item.price} TL</Text>

          <AddBasketButton item={item} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favlist}
        keyExtractor={(_, index) => index.toString()}
        renderItem={FavoriteItem}
      />
    </View>
  );
};

export default Favorite;
