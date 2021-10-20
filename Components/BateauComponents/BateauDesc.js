import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Data from '../../Constantes/dataBateaux.json';


var btn_id = 0;

var x = Data[btn_id]["name"];
var y = Data[btn_id]["imageUrl"];



const BateauDesc = ({ navigation }) => {
  return (
      <ImageBackground source={require('../../App_Resources/iOS/background.png')} style={{ width: "100%", height: "100%" }} resizeMode="cover" >
        <Text>{x}</Text>
        <Text>XXX YYY ZZZ</Text>
        <Text>Nos bateaux partenaires</Text>
        <Image source={y}
        style={styles.photo}/>
      </ImageBackground>
  )
}

export default BateauDesc

const styles = StyleSheet.create({
  combine_components:{
    marginTop:'40%',
    width: '50%',
    height: '50%',
    color:'blue',
    display: 'flex',
    flexDirection:'row'
  },
  photo:{
    width: '40%',
    height: '100%',
    borderColor:'50%'
  },
  btn:{
    width: '60%',
    height: '100%',
    borderColor:'50%'
  },
  backgroundImage: {
    flex: 1,
    //width: undefined,
    //height: undefined,
    //flexDirection: 'column',
    //backgroundColor:'transparent',
    //justifyContent: 'flex-start',


},
})