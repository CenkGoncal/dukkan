import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    padding: 3,
  },
  labelContainer:{
      backgroundColor:"white",
      alignSelf: "flex-start", 
      position:"absolute",
      shadowColor: "white",
      zIndex:1,
     // elevation:1,
      marginStart: 50,
      top:-8,
      padding:3
},
labelText:{
    color:"tomato"
},
  text: (border,isTouch) => {

    var style = {
        color: 'gray',
        flex: 1,
        marginLeft:10,
        paddingLeft:20
      };

    if(border)
    {
        style.borderColor=isTouch ? "tomato" :  "#e0e0e0" ;
        style.borderWidth= 2;
        style.borderRadius= 5;

    }

    return style;
  },
  eyebtn: secure => {
    var style = {
      padding: 10,
      opacity: secure ? 0.8 : 0.5,
    };

    return style;
  },
});
