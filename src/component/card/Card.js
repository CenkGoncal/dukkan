import React  from "react";
import { View } from "react-native";
import styles from "./CardStyle";

const Card = ({cardStyle, isBorder = false, isRow = false, children}) => {

    return(
        <View style={[styles.card(isBorder,isRow),cardStyle]} >
            {
                children
            }
        </View>
    )
}

export default Card;