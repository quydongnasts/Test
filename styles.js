import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  row1: {
    flex: 1,
    flexDirection: 'row',
  },
  row1col1: {
    flex: 1,
    flexDirection: 'column',
  },
  signalIcon:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  signalButton:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  row1col2: {
    flex: 9,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  row2: {
    flex: 4,
    flexDirection: 'row',
  },
  row2col1: {
    flex: 1,
    flexDirection: 'column',
  },
  row2col2: {
    flex: 1,
    flexDirection: 'column',
  },
  viewInfo: {
    flex: 1,
    justifyContent: 'center', //Doc
    alignItems: 'center', // Ngang
  },
  viewControl: {
    flex: 9,
    justifyContent: 'center', //Doc
    alignItems: 'center', // Ngang
    backgroundColor: 'blue',
  },
  thumbStyle: {
    height: 35,
    width: 35,
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: 'white'
  },
  styleControl: {
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: 'black',
  }
});

/** export module */
module.exports = globalStyles
