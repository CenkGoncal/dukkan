import React, {useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';

import UseFetch from '../../customhooks/useFetch';
import styles from './productDetailStyle';
import Star from 'react-native-star-view/lib/Star';
import IconButton from '../../component/iconButton';
import Card from '../../component/card/Card';
import { useDispatch } from 'react-redux';
import AddBasketButton from '../../component/addBasketButton';

function ProductDetail({navigation, route}) {
  const {params} = route;
  const {data, error, isLoading} = UseFetch(
    `https://fakestoreapi.com/products/${params.id}`,
    [],
    false,
  );
  const [isFavorite, setFavorite] = useState(false);
  const dispatch = useDispatch();

  if (error) {
    return <Text>{error}</Text>;
  }

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  const onFavoriteChanged = (data) => {
    setFavorite(!isFavorite);
    dispatch({type:!isFavorite ? "ADD_FAVORITE" : "REMOVE_FAVORITE", payload: { item: data }});
    console.log("deneme");
}


  return (
    <>
      <ScrollView style={styles.container}>
        <View style={[styles.imageContainer, styles.border]}>
          <View style={styles.Innertool}>
            <IconButton
              style={styles.back}
              handlePress={() => navigation.navigate('ProductPage')}
              iconName="arrow-back"
              size={25}
              color={'black'}
            />
            <IconButton
              style={styles.favorite}
              handlePress={() => onFavoriteChanged(data)}
              iconName={isFavorite ? 'favorite' : 'favorite-border'}
              size={25}
              color={isFavorite ? 'red' : 'black'}
            />
          </View>
          <Image source={{uri: data.image}} style={styles.image}></Image>
        </View>

        <Card>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.rateContainer}>
            <Text>{data.rating.rate}</Text>
            <Star score={data.rating.rate} style={styles.star} />
            <Text> | {data.rating.count} Değerlendirme</Text>
          </View>
        </Card>

        <Card isBorder={true}>
          <Text style={[styles.DescCaption, styles.border]}>Ürün Detayı</Text>
          <Text style={styles.descritionText}>{data.description}</Text>
        </Card>
      </ScrollView>

      <Card isRow={true} isBorder={true}>
        <Text style={styles.price}>{data.price} TL</Text>
        <AddBasketButton item={data} /> 
      </Card>
    </>
  );
}

export default ProductDetail;
