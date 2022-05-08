import {StyleSheet,Dimensions} from "react-native";

const loginBoxWidthMargin = Dimensions.get("window").width / 8  ;

export default StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#ffc246",
        alignItems:"center"
    },
    logo:{
        marginTop:Dimensions.get("window").height / 6,
        flexDirection:"row",
        justifyContent:"center"
    },
    logotext:
    {
        color:"white",
        fontSize:30,
    },
    loginBox:{
        position:"absolute",
        marginTop: Dimensions.get("window").height / 4,
        marginLeft: loginBoxWidthMargin,
        marginRight: loginBoxWidthMargin,
        backgroundColor:"#ff9100",
        width: Dimensions.get("window").width  - (loginBoxWidthMargin * 2),
        borderRadius:10,
        padding:20,
        paddingTop: 40
    },
    text:{
        color:"white",
        textAlign:"center",
        fontSize:20
    },
    loginBtn:{
        backgroundColor:"#bb4d00",
        borderRadius:10,
        padding:10,
    }
});


