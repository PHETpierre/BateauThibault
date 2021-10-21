import React from 'react'
import {TouchableOpacity,ImageBackground ,Image, StyleSheet, Text, View } from 'react-native'
//import 
const CatProduit = ({navigation}) => {
    return (
        <View style={styles.entier}>
            <ImageBackground
                source={require('../../App_Resources/iOS/background.png')}
                style={styles.background} >

                {/* Header Application */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerLeft}
                    onPress = {()=>{
                      navigation.navigate('Acceuil');
                    }}>
                         <Image style={styles.headerImg}
                        source={require('../../App_Resources/iOS/HomeLogo.png')} />
                    </TouchableOpacity>
                    <View style={styles.headerLeft}>
                         <Image style={styles.headerImg}
                        source={require('../../App_Resources/iOS/navbarbg.png')} />
                    </View>
                    <TouchableOpacity style={styles.headerLeft}
                    onPress = {()=>{
                      navigation.navigate('Achat des produits');
                    }}>
                         <Image style={styles.headerImg}
                        source={require('../../App_Resources/iOS/cartLogo.png')} />
                    </TouchableOpacity>
                </View>
                
                <Text >Voici la liste des produits de la semaine</Text>
                <View style={styles.block}>

                    <TouchableOpacity style={styles.combImgText}
                    onPress = {()=>{
                      //navigation.navigate('Recettes');
                    }}>
                        <Image style={styles.image}
                        source={require('../../App_Resources/iOS/poulpe.png')} />
                        <Text style={styles.text}> Poissons</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.block}>

                    <TouchableOpacity style={styles.combImgText}
                    onPress = {()=>{
                      //this.props.navigation.navigate('Profil du gerant');
                    }}>
                        <Image style={styles.image}
                        source={require('../../App_Resources/iOS/poulpe.png')} />
                        <Text style={styles.text}> Coquillages</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.block}>
                    <TouchableOpacity style={styles.combImgText}
                    onPress = {()=>{
                      //navigation.navigate('Recettes');
                    }}>
                        <Image style={styles.image}
                        source={require('../../App_Resources/iOS/poulpe.png')} />
                        <Text style={styles.text}> Crustacés</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.block}>
                    <TouchableOpacity style={styles.combImgText}
                    onPress = {()=>{
                      //this.props.navigation.navigate('Profil du gerant');
                    }}>
                        <Image style={styles.image}
                        source={require('../../App_Resources/iOS/poulpe.png')} />
                        <Text style={styles.text}> Promotions</Text>
                    </TouchableOpacity>
                </View>
                
            </ImageBackground>
        </View>
    )
}

export default CatProduit

const styles = StyleSheet.create({
    entier:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    header:{
        flex:0.2,
        flexDirection:'row',
        justifyContent:'flex-start',
        backgroundColor: 'black',
        /*opacity: 0.4*/
    },
    headerLeft:{
        flex:1,
    },
    headerMiddle:{
       flex:10,
    },
    headerRight:{
       flex:1,
    },
    headerImg:{
        widht:"100%"/*20*/,
        height:"100%",
        /*backgroundColor:'red',*/
        resizeMode:'contain'
    },
    headerImg1:{
        widht:20,
        height:20,
        backgroundColor:'green',
        resizeMode:'contain'
    },
    block:{
    flex:1,
    flexDirection:'column',
    justifyContent : 'space-between',
    /*padding: "2%",*/
    
  },
  combImgText:{
    /*width:70,
    height:60,*/
    flexDirection:'row',
    backgroundColor: 'gray',
    borderRadius:1,
    flex:0.9
    /*position: 'relative',
    zIndex:2*/
  },
  text:{
     /*width: "100%", 
     height: "100%",*/
     textAlign:'center',
     paddingTop: 1,
     fontSize:25,
     alignSelf:'center'
     /*paddingRight:10,*/
     /*backgroundColor:"red"*/
  },
  image:{
    width:60,
    height: 60,
    borderColor:'50%',
    marginLeft:10,
    marginTop:30,
    marginBottom:10
  },
  background: {
    flex:1
  }
})
