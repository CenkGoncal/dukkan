import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        justifyContent:"flex-end"
    },
    row:{
        flexDirection:"row",
        alignSelf:"flex-end",
        margin:5
    },
    text: (IsActive) => {

        let styles = {
            marginRight:10,
            fontSize:18
        }

        if(IsActive)
        {
            styles.borderBottomColor="orange";
            styles.borderBottomWidth = 2;
            styles.color= "orange";
        }
        
        return styles;
    },
    innerSearchBox:{
        padding:10,
        backgroundColor:"#ede7f6"
    },
    searchContainer:{
        flexDirection:"row"
    },
    searchIcon:{
        padding:10
    },
    searchBox:{
        flexDirection:"row",
        backgroundColor:"white",
        borderRadius:10,
        flex:1
    }
});