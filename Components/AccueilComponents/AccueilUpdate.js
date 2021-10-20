import React  from 'react'
import { ImageBackground, TouchableOpacity,Image,StyleSheet, Text, View } from 'react-native'
import { stylesBtn } from './Style'
import { globalStyle } from '../../styles'

export default class AccueilUpdate extends React.Component {
    render() {
        return (
            <View style={globalStyle.container}>
              <ImageBackground
              source={require('../../App_Resources/iOS/background.png')}
              style={styles.background} >
                {/* first block */}
                <View style={styles.block}>

                    <View style={styles.descripText}>
                        <Text>Le Bateau de Thibault</Text>
                        <Text>Vente en direct de notre bateau</Text>
                        <Text>Vente en direct de notre bateaulksd</Text>
                        <Text>Vente en direct de notre bateau</Text>
                    </View>

                    <TouchableOpacity style={styles.combImgText}
                    onPress = {()=>{
                      //this.props.navigation.navigate('Profil du gerant');
                    }}>
                        <Image style={styles.image} source={require('../../App_Resources/iOS/poisson.png')} />
                        <Text style={styles.text}> Produits et promotions</Text>
                    </TouchableOpacity>
                </View>

                {/* Second block Touchable */}
                <View style={stylesBtn.block}>

                    <TouchableOpacity style={stylesBtn.combImgText}
                    onPress = {()=>{
                      //this.props.navigation.navigate('Profil du gerant');
                    }}>
                        <Image style={stylesBtn.image}
                        source={require('../../App_Resources/iOS/ancre.png')} />
                        <Text style={stylesBtn.text}> Bateau</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylesBtn.combImgText}
                    onPress = {()=>{
                      //this.props.navigation.navigate('Profil du gerant');
                    }}>
                        <Image style={stylesBtn.image}
                        source={require('../../App_Resources/iOS/restaurant.png')} />
                        <Text style={stylesBtn.text}> Restaurant</Text>
                    </TouchableOpacity>
                </View>

                {/* last block Touchable */}
                <View style={stylesBtn.block}>


                    <TouchableOpacity style={stylesBtn.combImgText}
                    onPress = {()=>{
                      this.props.navigation.navigate('Recettes');
                    }}>
                        <Image style={stylesBtn.image}
                        source={require('../../App_Resources/iOS/recette.png')} />
                        <Text style={stylesBtn.text}> Recettes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylesBtn.combImgText}
                    onPress = {()=>{
                      this.props.navigation.navigate('Profil du gerant');
                    }}>
                        <Image style={stylesBtn.image}
                        source={require('../../App_Resources/iOS/tourteau.png')} />
                        <Text style={stylesBtn.text}> Contact</Text>
                    </TouchableOpacity>

                </View>
              </ImageBackground>
            </View>
        )
    }
}

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
  background:{
      flex:1,
      resizeMode: 'cover',
  }
})
