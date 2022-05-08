import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    UserInfo:{
       // position:"absolute",
        backgroundColor:"white",
        maxHeight: (Dimensions.get("window").height / 3 ) * 2
      },
    icon:{
        marginRight:20
    },
    itemButton:{
        flexDirection:"row", 
        padding:10
    },  
    
    itemBoxText:{
      margin:5,
      color:"darkgray",
      fontSize:15
    }
});
