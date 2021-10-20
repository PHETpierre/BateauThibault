import React from 'react'
import { Image,StyleSheet, Text, View } from 'react-native'

const Produit = (props) => {
  return (
    <View style={styles.combine_components}>
      <Image source={require('../../App_Resources/iOS/poisson@3x.png')}
        style={styles.photo}/>
      
      <button> Produits et promotions</button>
    </View>
  )
}

export default Produit

const styles = StyleSheet.create({
  combine_components:{
    marginTop:'40%',
    width: '100%',
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
})

