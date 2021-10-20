import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Data from '../../Constantes/dataBateaux.json';
import BateauDesc from './BateauDesc';

var bateauxList = Data;

export default class BateauHome extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
        <ImageBackground source={require('../../App_Resources/iOS/background.png')} style={{ width: "100%", height: "100%" }} resizeMode="cover" >
          <Text>Nos bateaux partenaires</Text>

        <Text> Tous les eaux mènent à Thibault.</Text>
        <Text>     06.63.99.99.78 </Text>
        <Text>   lebateaudethibault@gmail.com</Text>
        <Text>www.facebook.com/lebateaudethibault</Text>

        {bateauxList.map((value, index)=>{
          return <Button
            title={value.name}
            key={index}
            onPress = {()=>{
              this.props.navigation.navigate('BateauDesc', {id:value.id});
            }}>{value.name} 
            <Image source={require('../../App_Resources/iOS/'+value.imageUrl)}
          style={styles.photo}/>
          </Button>
        })}
        </ImageBackground>
    )
  }
}


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

