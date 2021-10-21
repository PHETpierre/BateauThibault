import { StyleSheet } from 'react-native'

const globalStyle = StyleSheet.create({
  red: {
    color: 'red'
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  backgroundImage: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  containerButton: {
    padding: 5,
    justifyContent: 'left',
  },
  button: {
    padding: 20,
    backgroundColor: 'rgba(145, 145, 145, 0.5)',
    alignItems: 'start',
    borderWidth: 1,
    borderColor: 'rgb(82, 82, 82)',
  },
  txtBtn: {
    alignSelf:'center',
    paddingLeft:5,
  },
  image:{
    width:50,
    height: 50,
    borderColor:'50%',
  },
  w50percent: {
    width: '50%',
  },
  w70percent: {
    width: '70%',
  },
  w100percent: {
    width: '100%',
  },
  ml20percent: {
    marginLeft: '20%',
  },
})

export { globalStyle }
