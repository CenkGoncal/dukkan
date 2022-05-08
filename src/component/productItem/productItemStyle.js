import {StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        margin:5,
        borderRadius:10,
        padding:5,
        minHeight:200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageContainer:{
        alignItems:"center",
        position:"relative"
    },
    favorite:{
        position:"absolute",
        right: 0,
        borderRadius:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        padding:5
    },
    image:{
        width:100,
        height:100,
    },
    innerContainer:{
        width: Dimensions.get("window").width / 2.2,
        flex:1,
        padding:5,
        marginTop:10
    },
    title:{
        fontWeight:"bold",
        color:"black"
    },
    price:{
        color:"#ff3d00"
    },
    rateContainer:{
        flexDirection:"row"
    },
    star:{
        width: 100,
        height: 20,
        marginBottom: 5,
    },
    button:{
        borderWidth:1,
        borderColor:"#ff3d00",
        borderRadius:10,
        padding:10,
        alignItems:"center",
        marginTop:10,
        marginBottom:10
    },
    buttonText:{
        color:"#ff3d00"
    }
});