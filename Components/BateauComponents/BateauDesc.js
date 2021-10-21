import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Data from '../../Constantes/dataBateaux.json';

function BateauDesc({props, route}){
  var id = route.params.id;
  var x = Data[id]["name"];
  var y = Data[id]["imageDesc"];
  return (
      <ImageBackground source={require('../../App_Resources/iOS/background.png')} style={styles.backgroundImage} resizeMode="cover" >
        <Text style={styles.title}>{x}</Text>
        <Image source={require('../../App_Resources/iOS/'+y)}
        style={styles.photo}/>
        <Text style={styles.subtitle}>XXX YYY ZZZ</Text>
        <Text style={styles.description}>{Data[id]["description"]}</Text>
      </ImageBackground>
  )
}

export default BateauDesc

const styles = StyleSheet.create({
  photo:{
    width: '70%',
    height: '40%',
    borderColor:'50%', 
    marginTop: '5%',
    marginLeft: '15%'
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  title:{
    marginLeft: '30%',
    fontSize: '215%',
    marginTop: '15%',
    color:'white'
  },
  subtitle:{
    marginTop: '5%',
    textAlign: 'center',
    fontSize:'100%'
  },
  description:{
    textAlign: 'center',
    fontSize: '75%'
  }
})