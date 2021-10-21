import React from 'react'
import {TouchableOpacity, ImageBackground ,Image, StyleSheet, Text, View } from 'react-native'
//import 
const CatProduit = ({navigation}) => {
    return (
        <View style={styles.entier}>
            {/* Header Application */}
            <View style={styles.header}>
                <View style={styles.headerComp}>
                    {/* Touchable redirects to Home page */}
                    <TouchableOpacity style={styles.headerLeft}
                    onPress = {()=>{
                        navigation.navigate('Acceuil');
                    }}>
                        <Image style={styles.headerImg}
                        source={require('../../App_Resources/iOS/HomeLogo.png')} />
                    </TouchableOpacity>

                    {/* logo */}
                    <View style={styles.headerLeft}>
                            <Image style={styles.headerImg}
                        source={require('../../App_Resources/iOS/navbarbg.png')} />
                    </View>

                    {/* Touchable redirects to Price page */}
                    <TouchableOpacity style={styles.headerLeft}
                    onPress = {()=>{
                        navigation.navigate('Achat des produits');
                    }}>
                            <Image style={styles.headerImg}
                        source={require('../../App_Resources/iOS/cartLogo.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.entierBtn}>
                
                <ImageBackground
                    source={require('../../App_Resources/iOS/background.png')}
                    style={styles.entier} >

                    
                    
                    <Text style={styles.descripText}>Voici la liste des produits 
                    de la semaine</Text>
                    
                    {/* Poissons */}
                    <View style={styles.block}>

                        
                        <TouchableOpacity style={styles.combImgText}
                        onPress = {()=>{
                        navigation.navigate('Produits correspondant Poissons')
                        }}>
                            <Image style={styles.image}
                            source={require('../../App_Resources/iOS/poulpe.png')} />
                            <Text style={styles.text}> Poissons</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Coquillage */}
                    <View style={styles.block}>

                        <TouchableOpacity style={styles.combImgText}
                        onPress = {()=>{
                        navigation.navigate('Produits correspondant Coquillages');
                        }}>
                            <Image style={styles.image}
                            source={require('../../App_Resources/iOS/poulpe.png')} />
                            <Text style={styles.text}> Coquillages</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Crustacés */}
                    <View style={styles.block}>
                        <TouchableOpacity style={styles.combImgText}
                        onPress = {()=>{
                        navigation.navigate('Produits correspondant Crustacés');
                        }}>
                            <Image style={styles.image}
                            source={require('../../App_Resources/iOS/poulpe.png')} />
                            <Text style={styles.text}> Crustacés</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Promotions */}
                    <View style={styles.block}>
                        <TouchableOpacity style={styles.combImgText}
                        onPress = {()=>{
                        navigation.navigate('Produits correspondant Promotions');
                        }}>
                            <Image style={styles.image}
                            source={require('../../App_Resources/iOS/poulpe.png')} />
                            <Text style={styles.text}> Promotions</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ImageBackground>
            </View>
        </View>
    )
}

export default CatProduit

const styles = StyleSheet.create({
    entier:{
        flex:1
    },
    header:{
        width:"100%",
        height:30,
        backgroundColor:'rgba(0,0,0,0.1)',
        padding:0
    },
    headerComp:{
        flex:1,
        
        flexDirection:'row',
        justifyContent:'flex-start',
        backgroundColor: 'black',
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
    descripText:{
        textAlign:"center"
    },
    entierBtn:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start'
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
  }
})
