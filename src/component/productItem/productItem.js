import React,{useState} from "react";
import { Text, View, Image } from "react-native";
import Star from "react-native-star-view/lib/Star";
import { useDispatch } from "react-redux";

import styles from "./productItemStyle";
import IconButton from "../iconButton";
import AddBasketButton from "../addBasketButton";

function ProductItem({ item }) {

    const [isFavorite,setFavorite] = useState(false);
    const dispatch = useDispatch();

    const onFavoriteChanged = (data) => {
        setFavorite(!isFavorite);
        dispatch({type:!isFavorite ? "ADD_FAVORITE" : "REMOVE_FAVORITE", payload: { item: data }});
    }

    
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <IconButton style={styles.favorite} handlePress={ () => onFavoriteChanged(item)}
                            iconName={isFavorite ? "favorite" : "favorite-border"} size={20}
                            color={isFavorite ? "red" : "black"} />

                <Image source={{ uri: item.image }} style={styles.image}></Image>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                <View style={styles.rateContainer}>
                    <Star score={item.rating.rate} style={styles.star} />
                    <Text>({item.rating.count})</Text>
                </View>
                <Text>Sepette İndirimli</Text>
                <Text style={styles.price}>{item.price} TL</Text>
            </View>

            <AddBasketButton item={item} /> 
        </View>
    );
}

export default ProductItem;