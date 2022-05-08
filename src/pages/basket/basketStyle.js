import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    container:{
        marginTop:10,
        flex:1
    },
    basketcontainer:
    {
        padding:10,
        marginLeft:10,
        marginRight:10,
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
        marginTop:10,
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
    TextGroupFlex:{
        flexDirection:"row",
        flex:1, 
    } ,
    priceGroup:{
        flexDirection:"row",
    },
    ButtonContainer: {
        flex:1
    },
    ButtonGroup: {
        flexDirection:"row",
        borderColor:"lightgray",
        borderRadius:10,
        borderWidth:1,
        padding:5,   
        maxWidth:80
    },
    OrderCount:{
        backgroundColor:"#ff3d00",
        borderRadius:15,
        padding:5,
        paddingLeft:7,
        paddingRight:7,
        color:"white",
        textAlign:"right"
    },

    flexFunct : (flexVal) => {
        return{
            flex: flexVal
        }
    }
})