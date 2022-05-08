import {StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        overflow:"scroll"
    },
    imageContainer:{
        backgroundColor:"white",
        borderBottomColor:"gray",
        borderBottomWidth:1,
        padding:10,
    },
    Innertool:{
        flexDirection:"row",
    },
    favorite:{
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        padding:5,
        position:"absolute",
        right:0,
        zIndex:1
    },

    back:{
        position:"absolute",
        left:0,
        zIndex:1
    },
    image:{
        width: Dimensions.get("window").width / 0.8,
        minHeight: Dimensions.get("window").height / 3,
        resizeMode:"center",
        alignSelf: 'center'
    },
    
    title:{
        fontWeight:"bold",
        color:"black",
        fontSize:20
    },
    rateContainer:{
        flexDirection:"row"
    },
    star:{
        width: 100,
        height: 20,
        marginBottom: 5,
    },
    DescCaption:{
        fontSize:20,
        fontWeight:"bold",
        color:"black",
        padding:10
    },
    border:{
        borderBottomColor:"gray",
        borderBottomWidth:0.8
    },

    descritionText:{
        padding:10
    },

    price:{
        color:"#ff3d00",
        fontSize:20,
        alignSelf:"center"
    },
    addBasket:{
        backgroundColor:"#ff3d00",
        flex:1,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginLeft:10
    },
    addBasketText:{
        fontSize:20,
        color: "white"
    }
})