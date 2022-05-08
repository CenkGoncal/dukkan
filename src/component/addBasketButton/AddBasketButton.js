import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import {AddBasket} from '../../utils/common';
import {useDispatch} from 'react-redux';

import styles from "./AddBasketButtonStyle";

const AddBasketButton = ({item}) => {

    const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => dispatch(AddBasket(item,true))}>
      <Text style={styles.buttonText}>Sepete Ekle</Text>
    </TouchableOpacity>
  );
};

export default AddBasketButton;
