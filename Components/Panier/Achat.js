import React from 'react'
import {TouchableOpacity, ImageBackground ,Image, StyleSheet, Text, View } from 'react-native'
import { Button, ScrollView} from 'react-native'
import { AppContext } from '../ContextApp/ContextApp'
//import data from '../../Constantes/Produits.json'

//array Fish
/*const arrFish=["Filet Bar de ligne", "Bar de ligne portion", "Aile de raie",
                "Lieu jaune de ligne", "Filet Julienne", "Bar de ligne"]*/

//fitler Json Fish
const filterElt=(jsonElt)=>{
    return jsonElt.category==2
}
//console.log(data)
//console.log(data.filter(filterFish).map(elt=>elt.name))

//const {data,list}=useContext(AppContext)
//Instance of any click
//const [fishElement, fishClik]=useState([]);
//console.log(fishElement)

class Achat extends React.Component {

    constructor(props){
      super(props)
      this.state={totalPrice:0}
    }

    render() {
      const ProductList=this.context.productItems.map(
        (elt,ind)=><View style={styles.block} key={ind}>
                          <View style={styles.combImgText}>
                              <Image style={styles.image}
                              source={require('../../App_Resources/iOS/poulpe.png')} />
                              
                              <View style={styles.gatherText}>
                                  <Text style={styles.text}> {elt.name}</Text>
                                  <Text style={styles.text}>{elt.nbreItimes}x{elt.price}={elt.amount}€</Text>
                              </View>
                              <View style={styles.clickAllBtn}>
                                <TouchableOpacity style={styles.eachClick}  onPress={()=>{
                                this.context.addNumItems(elt.name)
                                console.log("ajout dand",elt.name)
                                }}><Text>Add</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.eachClick}  onPress={()=>{
                                    this.context.decreaseNumItems(elt.name)
                                    console.log("click")
                                }}><Text>Reduce</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.eachClick} onPress={()=>{
                                    this.context.removeItems(elt.name)
                                    console.log(this.context.productItems)
                                    console.log("click")
                                }}><Text>Remove</Text></TouchableOpacity>
                              </View>
                              
                          </View>
                      </View>);
      //<Text key={ind}>{elt.name} ldjfkdj {elt.price}</Text>)

      return (
          <View style={styles.entier}>
              {/* Header Application */}
              <View style={styles.header}>
                  <View style={styles.headerComp}>
                      {/* Touchable redirects to Home page */}
                      <TouchableOpacity style={styles.headerLeft}
                      onPress = {()=>{
                          this.props.navigation.navigate('Acceuil');
                      }}>
                          <Image style={styles.headerImg}
                          source={require('../../App_Resources/iOS/homeLogo.png')} />
                      </TouchableOpacity>

                      {/* logo */}
                      <View style={styles.headerLeft}>
                              <Image style={styles.headerImg}
                          source={require('../../App_Resources/iOS/navbarbg.png')} />
                      </View>

                      {/* Touchable redirects to Price page */}
                      <TouchableOpacity style={styles.headerLeft}
                      onPress = {()=>{
                          this.props.navigation.navigate('Achat des produits');
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
                    <ScrollView style={styles.entier}>
                      <Text style={styles.descripText}>Choisissez Vos produit</Text>

                      {/* Poissons */}

                      {ProductList}

                    </ScrollView>
                  </ImageBackground>
              </View>
          </View>
      );
    }
}

Achat.contextType = AppContext;
export default Achat

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
    width:"100%",
    height: 500,
    flexDirection:'row',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius:1,
    flex:1
    /*position: 'relative',
    zIndex:2*/
  },
  gatherText:{
    flex:1,
    flexDirection:'row',
    justifyContent:"space-between"
  },
  text:{
     /*width: "100%",
     height: "100%",*/
     textAlign:'center',
     /*paddingTop: 1,*/
     fontSize:15,
     alignSelf:'center'
     /*paddingRight:10,*/
     /*backgroundColor:"red"*/
  },
  image:{
    width:60,
    height: 60,
    marginLeft:10,
    /*marginTop:30,
    marginBottom:10*/
    resizeMode:'contain',
    alignSelf:'center'
  },
  clickAllBtn:{
      flex:0.4,
      flexDirection:'column',
      justifyContent:'space-between',
      fontSize:1,
  },
  eachClick:{
    flex:1,
    textAlign:'center',
    backgroundColor:"blue"
  }


})
