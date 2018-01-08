import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 0,
  },
  row1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2F9688',
    // backgroundColor: '#f0f0f5',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
  },
  row1col1: {
    flex: 1,
    flexDirection: 'column',
    borderRightWidth: 1,
    borderRightColor: '#ffffff',
  },
  signalView:{
    flex: 1,
    justifyContent: 'center',
  },
  entertaiment: {
    flexDirection: 'column',
    flex: 1,
  },
  entertaimentView: {
    flex: 1,
    justifyContent: 'center',
  },
  row1col2: {
    flex: 9,
    // justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  infromationView: {
    flex: 7,
    flexDirection: 'row',
    borderRightWidth: 1,
    borderRightColor: '#ffffff',
  },
  informationDetail: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#262626',
    padding: 10,
    borderWidth: 4,
    borderColor: '#ffffff',
    alignItems: 'center',
  },
  titleAbsolute: {
    position: 'absolute',
    width: 20,
    height: 25,
    top: 10,
    right: 2,
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
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'gray',
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff',
    paddingRight: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  energyInfo: {
    height: null,
    minWidth: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewControl: {
    flex: 9,
    justifyContent: 'center', //Doc
    alignItems: 'center', // Ngang
    backgroundColor: '#007399',
  },
  viewControlRight: {
    flex: 9,
    // justifyContent: 'center', //Doc
    // alignItems: 'center', // Ngang
    backgroundColor: '#007399',
    flexDirection: 'row',
  },
  viewControlAbsolute: {
    backgroundColor: '#004d66',
    position: 'absolute',
    top: 10,
    right: 50,
    left: 50,
    bottom: 10,
    borderBottomLeftRadius: 200,
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    borderBottomRightRadius: 200,
  },
  viewButtonTop: {
    justifyContent: 'flex-end',
    flex: 4
  },
  viewButtonBottom: {
    justifyContent: 'flex-start',
    flex: 4
  },
  viewButtonLeft: {
    alignItems: 'flex-end',
    flex: 4,
    justifyContent: 'center', //Doc
  },
  viewButtonRight: {
    alignItems: 'flex-start',
    flex: 4,
    justifyContent: 'center', //Doc
  },
  thumbStyle: {
    height: 35,
    width: 35,
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: '#b30000'
  },
  styleControl: {
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: '#262626',
  }
});

/** export module */
module.exports = globalStyles
