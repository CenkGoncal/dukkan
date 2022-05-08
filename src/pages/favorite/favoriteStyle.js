import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    container:{
        margin:10
    },
    favcontainer:
    {
        padding:10,
        flexDirection:"row",
        backgroundColor:"white",
        borderColor : "gray",
        borderRadius:10,
        marginBottom:10
    },
    title:{
        alignSelf:"center",
        fontSize:18,
        color:"black",
        flex:1
    },
    price:{
        color:"#ff3d00",
        fontSize:15,
        alignSelf:"center",
        flex:1,
        marginTop:10
    },
    button:{
        borderWidth:1,
        borderColor:"#ff3d00",
        borderRadius:10,
        padding:10,
        alignItems:"center",
    },
    buttonText:{
        color:"#ff3d00"
    },
    infoContainer:{
        flex:1,
        padding:5,
        position:"relative"
    },
    image:{
        width: Dimensions.get("window").width /3,
        height: Dimensions.get("window").height / 4,
        resizeMode:"contain"
    },
    buttonGroup:{
        flexDirection:"row"
    }
})