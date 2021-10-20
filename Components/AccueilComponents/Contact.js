import React from 'react'
import { StyleSheet,TouchableOpacity,Image,Text, View } from 'react-native'
//import { ContextAccueil} from './ContextAccueil'
const Contact = () => {
    //const styles=useContext(ContextAccueil)
    return (
        <View /*style={styles.padd}*/>
        <View style={styles.block}>
      {/* Add the text inside to describe his entreprise */}
            
            <TouchableOpacity style={styles.combImgText}>
                <Image style={styles.image} 
                source={require('../../App_Resources/iOS/tourteau.png')} />
                <Text style={styles.text}> Contact</Text>
            </TouchableOpacity>
        </View>

    {/* It will be use in 
    <Image source={require('../../App_Resources/iOS/background.png')}
     style={styles.imageBack}/>*/}
    </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    block:{
    flex:1,
    flexDirection:'column',
    justifyContent : 'flex-start',
    padding: "2%",
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
     fontSize:20
     /*backgroundColor:"red"*/
  },
  image:{
    width:50,
    height: 50,
    borderColor:'50%',
  },
})
