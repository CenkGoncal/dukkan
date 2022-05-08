import React,{useState, useEffect} from "react";

import { Text, View, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import CategoryList from "../../component/categoryList";
import ProductHeader from "../../component/productHeader";

import ProductItem from "../../component/productItem";
import UseFetch from "../../customhooks/useFetch/useFetch";

function Product({ navigation }) {

    const [active, setActive] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [filter, setFilter] = useState([]);
   // const [favoriteList, setFavoriteList] = useState([]);

    const [categoryName, setCategoryName] = useState("Tüm Kategoriler");
    const [url, setUrl] = useState("https://fakestoreapi.com/products");
    const { data, error, isLoading } = UseFetch(url,filter,refresh);


    const onCategoryChange = (category) => {     
       setRefresh(!refresh);
       setActive(false);
       setCategoryName(category);
       setUrl(category === "Tüm Kategoriler" ? "https://fakestoreapi.com/products" : `https://fakestoreapi.com/products/category/${category}`);
    }

    const onChangeProduct = (productName) => {
        
        if(productName)
        {
            var filteredData = data.filter(f=>f.title.toLowerCase().includes(productName.toLowerCase()));
            console.log(filteredData);
            setFilter(filteredData);
        }
        else
        {
            setFilter([]);
        }

        setRefresh(!refresh);
    }

    const onProductRender = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("ProductDetailPage",{id:item.id})}>
                <ProductItem item={item}  />
            </TouchableOpacity>
        );
    }

    if(error)
    {
        return <Text>{error}</Text>
    }

    if(isLoading)
    {
        return <ActivityIndicator size="large" />
    }

    return (
        <View >
            <ProductHeader IsActive={active} categoryName={categoryName}
                           handlePress={()=>setActive(!active)} handleSearch={onChangeProduct} />
            { active ?
                <CategoryList categoryChange={onCategoryChange} /> :
                <FlatList
                data={data}
                renderItem={onProductRender}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
            />
            }
        </View>
    );
}

export default Product;
