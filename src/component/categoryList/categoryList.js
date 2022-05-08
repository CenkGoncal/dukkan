import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import useFetch from '../../customhooks/useFetch';
import styles from './categoryListStyle';

const CategoryList = ({categoryChange}) => {
  const {data, error, isLoading} = useFetch(
    'https://fakestoreapi.com/products/categories',
    [],
    false,
  );
  if (!data.includes('Tüm Kategoriler')) data.push('Tüm Kategoriler');

  if (error) {
    return <Text>{error}</Text>;
  }

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  const onCategoryRender = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.category}
        onPress={() => categoryChange(item)}>
        <Text style={styles.categoryText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={onCategoryRender}
        keyExtractor={item => item}
        numColumns={2}
      />
    </View>
  );
};

export default CategoryList;
