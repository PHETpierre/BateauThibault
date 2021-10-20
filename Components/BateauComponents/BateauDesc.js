import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Data from '../../Constantes/dataBateaux.json';

function BateauDesc({props, route}){
  var id = route.params.id;
  var x = Data[id]["name"];
  var y = Data[id]["imageUrl"];
  return (
      <ImageBackground source={require('../../App_Resources/iOS/background.png')} style={styles.backgroundImage} resizeMode="cover" >
        <Text style={{marginLeft: '30%', fontSize: '215%', marginTop: '15%'}}>{x}</Text>
        <Image source={require('../../App_Resources/iOS/'+y)}
        style={styles.photo}/>
        <Text style={{marginTop: '5%',
    marginLeft: '35%', fontSize:'100%'}}>XXX YYY ZZZ</Text>
        <Text style={{marginLeft: '32.5%', fontSize: '50%'}}>{Data[id]["description"]}</Text>
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
    width: '70%',
    height: '40%',
    borderColor:'50%', 
    marginTop: '5%',
    marginLeft: '15%'
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