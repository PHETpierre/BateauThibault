import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BateauDesc from './BateauDesc';

const BateauHome = ({ navigation }) => {
  return (
      <ImageBackground source={require('../../App_Resources/iOS/background.png')} style={{ width: "100%", height: "100%" }} resizeMode="cover" >
        <Text>Nos bateaux partenaires</Text>

      <Text> Tous les eaux mènent à Thibault.</Text>
      <Text>     06.63.99.99.78 </Text>
      <Text>   lebateaudethibault@gmail.com</Text>
      <Text>www.facebook.com/lebateaudethibault</Text>

      <button> deLaBrise
        <Image source={require('../../App_Resources/iOS/deLaBrise_icon.png')}
        style={styles.photo}
        onPress={() => navigation.navigate('desc')}/>
      </button>
      <button> saphir
        <Image source={require('../../App_Resources/iOS/saphir_icon.png')}
        style={styles.photo}
        onPress={() => navigation.navigate('desc')}/>
      </button>
      <button> Gast Micher
        <Image source={require('../../App_Resources/iOS/gastMicher_icon.png')}
        style={styles.photo}
        onPress={() => navigation.navigate('desc')}/>
      </button>
      <button> Aquilon
        <Image source={require('../../App_Resources/iOS/Aquilon_icon.png')}
        style={styles.photo}
        onPress={() => navigation.navigate('desc')}/>
      </button>

      <button> Contact
        <Image source={require('../../App_Resources/iOS/ancre.png')}
        style={styles.photo}/>
      </button>
      <button> Contact
        <Image source={require('../../App_Resources/iOS/ancre.png')}
        style={styles.photo}/>
      </button>
      </ImageBackground>
      
  )
}

export default BateauHome

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

