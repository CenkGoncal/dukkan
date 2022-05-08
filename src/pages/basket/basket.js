import React, {useState} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import IconButton from '../../component/iconButton';

import styles from './basketStyle';
import {AddBasket} from '../../utils/common';
import BasketTotalFooter from '../../component/basketTotalFooter';

const Basket = () => {
  const basketlist = useSelector(s => s.basketlist);
  const sumPrice = basketlist.reduce((sum,x) => sum + (x.OrderCount * x.price), 0);
  const dispatch = useDispatch();

 // console.log(basketlist);

  const onBasketItem = ({item}) => {
    const ArrangeOrder = isAdd => {
      dispatch(AddBasket(item, isAdd));
    };

    const DeleteOrder = () => {
      dispatch({type: 'REMOVE_BASKET', payload: {item: item}});
    };

    return (
      <View style={styles.basketcontainer}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.infoContainer}>
          <View style={styles.TextGroupFlex}>
            <Text style={styles.title}>{item.title}</Text>
            <IconButton
              iconName={'delete'}
              size={25}
              color="black"
              handlePress={DeleteOrder}
            />
          </View>
          <View style={styles.priceGroup}>
            <View style={styles.ButtonContainer}>
              <View style={styles.ButtonGroup}>
                <IconButton
                  iconName={'remove'}
                  size={25}
                  color="lightgray"
                  handlePress={() => ArrangeOrder(false)}
                />
                <Text style={styles.OrderCount}>{item.OrderCount}</Text>
                <IconButton
                  iconName={'add'}
                  size={25}
                  color="#ff3d00"
                  handlePress={() => ArrangeOrder(true)}
                />
              </View>
            </View>

            <Text style={styles.price}>{item.price * item.OrderCount} TL</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      
      <FlatList style={styles.flexFunct(0.8)}
        data={basketlist}
        keyExtractor={(_, index) => index.toString()}
        renderItem={onBasketItem}
      />
      {basketlist.length > 0 ? <BasketTotalFooter price={sumPrice} style={styles.flexFunct(0.2)} /> : null }
    </View>
  );
};

export default Basket;
