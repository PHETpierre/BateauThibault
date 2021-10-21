import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Data from '../../Constantes/dataRestaurants.json';

function RestaurantDesc({props, route}){
  var id = route.params.id;
  var x = Data[id]["name"];
  var y = Data[id]["image"];
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

export default RestaurantDesc

const styles = StyleSheet.create({
  photo:{
    width: '100%',
    height: '25%',
    borderColor:'50%', 
    marginTop: '15%',
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  title:{
    textAlign: 'center',
    fontSize: '175%',
    marginTop: '15%',
    color:'white'
  },
  subtitle:{
    marginTop: '25%',
    textAlign: 'center',
    fontSize:'100%'
  },
  description:{
    textAlign:'center',
    fontSize: '75%'
  }
})