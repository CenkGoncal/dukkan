import {StyleSheet} from "react-native";

export default StyleSheet.create({
    card : (isBorder, isRow) =>  
    {
        let styles = {
            padding:10,
            marginTop:10,
            backgroundColor:"white"
        };

        if(isBorder)
        {
            styles.borderBottomColor = "gray";
            styles.borderBottomWidth = 0.8;
        }

        if(isRow)
        {
            styles.flexDirection = "row";
        }

        return styles;
    }
})