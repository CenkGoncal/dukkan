import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    position: 'relative',
    maxHeight: Dimensions.get('window').height / 9,
    zIndex: 4,
  },
  totalContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    padding: 10,
  },
  price: {
    color: '#ff3d00',
    fontSize: 15,
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderColor: '#ff3d00',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
  },
  buttonText: {
    color: '#ff3d00',
  },
  iconbutton: {
    justifyContent: 'center',
  },
  expand: {
    backgroundColor: '#eeeeee',
    position: 'absolute',
    bottom: Dimensions.get('window').height / 9,
    width: Dimensions.get('window').width,
    padding: 10,
  },
  expandRow: {
    flexDirection: 'row',
  },
  ExpandItem: {
      flex:0.6,
      justifyContent:"center"
  },
});
