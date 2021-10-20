import React ,{useContext} from 'react'
import { TouchableOpacity,Image,StyleSheet, Text, View } from 'react-native'
//import {ContextAccueil} from './ContextAccueil';
const Produit = () => {
  //const styles=useContext(ContextAccueil)
  return (
    <View >
    <View style={styles.block}>
      {/* Add the text inside to describe his entreprise */}
      <View style={styles.descripText}>
        <Text>Le Bateau de Thibault</Text>
        <Text>Vente en direct de notre bateau</Text>
        <Text>Vente en direct de notre bateaulksd</Text>
        <Text>Vente en direct de notre bateau</Text>
      </View>
      <TouchableOpacity style={styles.combImgText}>
        <Image style={styles.image} source={require('../../App_Resources/iOS/poisson.png')} />
        <Text style={styles.text}> Produits et promotions</Text>
      </TouchableOpacity>
    </View>

    {/* It will be use in 
    <Image source={require('../../App_Resources/iOS/background.png')}
     style={styles.imageBack}/>*/}
    </View>
  )
}

export default Produit

const styles = StyleSheet.create({
    block:{
    flex:1,
    flexDirection:'column',
    justifyContent : 'space-between',
    padding: "2%",
  },
  padd:{
    padding: '2%',
    /*position:'relative'*/
  },
  descripText:{
    /*width: 100,*/
    height: 150,
    textAlign: 'center',
    backgroundColor:'gray',
    opacity: 0.5,
    alignSelf:'center'
  },
  combImgText:{
    /*width:70,
    height:60,*/
    flexDirection:'row',
    backgroundColor: 'blue',
    borderRadius:1,
    /*position: 'relative',
    zIndex:2*/
  },
  text:{
     /*width: "100%", 
     height: "100%",*/
     textAlign:'center',
     paddingTop: 10,
     fontSize:15
     /*backgroundColor:"red"*/
  },
  image:{
    width:50,
    height: 50,
    borderColor:'50%',
  },
})

