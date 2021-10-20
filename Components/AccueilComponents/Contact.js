import React from 'react'
import { TouchableOpacity,Image,Text, View } from 'react-native'
import { stylesBtn } from './Style'
//import { ContextAccueil} from './ContextAccueil'
const Contact = () => {
    //const stylesBtn=useContext(ContextAccueil)
    return (
        <View /*style={stylesBtn.padd}*/>
        <View style={stylesBtn.block}>
      {/* Add the text inside to describe his entreprise */}
            
            <TouchableOpacity style={stylesBtn.combImgText}>
                <Image style={stylesBtn.image} 
                source={require('../../App_Resources/iOS/tourteau.png')} />
                <Text style={stylesBtn.text}> Contact</Text>
            </TouchableOpacity>
        </View>

    {/* It will be use in 
    <Image source={require('../../App_Resources/iOS/background.png')}
     style={stylesBtn.imageBack}/>*/}
    </View>
    )
}

export default Contact

