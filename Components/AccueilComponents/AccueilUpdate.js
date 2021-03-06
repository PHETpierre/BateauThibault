import React  from 'react'
import { ImageBackground, TouchableOpacity,Image,StyleSheet, Text, View } from 'react-native'
import { stylesBtn } from './Style'
import { globalStyle } from '../../styles'

export default class AccueilUpdate extends React.Component {
    render() {
        return (
            <ImageBackground
            source={require('../../App_Resources/iOS/background.png')}
            style={globalStyle.backgroundImage} >
              {/* first block */}
              <View>
                      <Text style={styles.title}>Le Bateau de Thibault</Text>
                      <Text style={styles.subtitle}>{"\tVente en direct de notre bateau\nProduits selon la saison, Livraisons sur Paris"}</Text>
                      <Text style={styles.description}>{"\t06.63.99.99.78\n  lebateaudethibault@gmail.com\nwww.facebook.com/lebateaudethibault"}</Text>
              </View>

              <View style={styles.container2}>
                <View style={[globalStyle.w100percent, globalStyle.containerButton]}>
                  <TouchableOpacity style={globalStyle.button}
                  onPress = {()=>{
                    this.props.navigation.navigate('Les produits de la semaine');
                  }}>
                    <View style={styles.container4}>
                      <Image style={styles.image} source={require('../../App_Resources/iOS/poisson.png')} />
                      <Text style={globalStyle.txtBtn}> Produits et promotions</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/* Second block Touchable */}
                <View style={[globalStyle.w50percent, globalStyle.containerButton]}>
                  <TouchableOpacity style={globalStyle.button}
                  onPress = {()=>{
                    this.props.navigation.navigate('Bateau');
                  }}>
                    <View style={styles.container4}>
                      <Image style={styles.image}
                      source={require('../../App_Resources/iOS/ancre.png')} />
                      <Text style={globalStyle.txtBtn}> Bateau</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={[globalStyle.w50percent, globalStyle.containerButton]}>
                  <TouchableOpacity style={globalStyle.button}
                  onPress = {()=>{
                    this.props.navigation.navigate('Restaurant Home');
                  }}>
                    <View style={styles.container4}>
                      <Image style={styles.image}
                      source={require('../../App_Resources/iOS/restaurant.png')} />
                      <Text style={globalStyle.txtBtn}> Restaurant</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* last block Touchable */}
                <View style={[globalStyle.w50percent, globalStyle.containerButton]}>
                    <TouchableOpacity style={globalStyle.button}
                    onPress = {()=>{
                      this.props.navigation.navigate('Recettes');
                    }}>
                      <View style={styles.container4}>
                        <Image style={styles.image}
                        source={require('../../App_Resources/iOS/recette.png')} />
                        <Text style={globalStyle.txtBtn}> Recettes</Text>
                      </View>
                    </TouchableOpacity>
                </View>
                <View style={[globalStyle.w50percent, globalStyle.containerButton]}>
                    <TouchableOpacity style={globalStyle.button}
                    onPress = {()=>{
                      this.props.navigation.navigate('Profil du gerant');
                    }}>
                      <View style={styles.container4}>
                        <Image style={styles.image}
                        source={require('../../App_Resources/iOS/tourteau.png')} />
                        <Text style={globalStyle.txtBtn}> Contact</Text>
                      </View>
                    </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
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
  container2: {
    height: 200,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'start',
  },
  container4: {
    flex: 1,
    flexDirection: 'row',
  },
  padd:{
    padding: '2%',
    /*position:'relative'*/
  },
  descripText:{
    /*width: 100,*/
    height: 400,
    textAlign: 'center',
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
  },
  title:{
    marginBottom: '80%',
    textAlign: 'center',
    fontSize: '150%',
    fontFamily: '"Didot',
    color: 'white'
  },
  subtitle:{
    marginBottom: '0%'
  },
  description:{
    opacity: 0.4,
    marginLeft: '10%'
  }
})
