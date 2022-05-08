import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "./productHeaderStyle";
import Icon from 'react-native-vector-icons/AntDesign';
import IconButton from "../iconButton";


const ProductHeader = ({ IsActive, handlePress, handleSearch, categoryName }) => {

    return (
        <View style={styles.container}>
            <View style={styles.innerSearchBox}>
                <View style={styles.searchContainer}>
                    <View style={styles.searchBox}>
                        <Icon style={styles.searchIcon} name={"search1"} size={25} background="white" color={"black"} />
                        <TextInput style={styles.searchText} onChangeText={handleSearch} placeholder="Marka, ürün veya kategori ara" multiline={true} />
                    </View>
                    <IconButton style={styles.searchIcon} iconName={"notifications"} size={25}  color="black" />

                </View>
            </View>
            <TouchableOpacity style={styles.row} onPress={handlePress}>
                <Text style={styles.text(IsActive)} >{categoryName}</Text>
                <Icon name={IsActive ? "upcircleo" : "downcircleo"} color="orange" size={20}></Icon>
            </TouchableOpacity>
        </View>
    )
}

export default ProductHeader;