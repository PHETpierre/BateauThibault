import React from 'react'
import { StyleSheet,TouchableOpacity,Image,Text, View } from 'react-native'
import {} from './ContextAccueil'
import { stylesBtn } from './Style'
const Bateau = (props) => {
    //const styles=useContext(ContextAccueil)
    console.log(props.styles)
    return (
        <View >
        <View style={stylesBtn.block}>
      {/* Add the text inside to describe his entreprise */}

            <TouchableOpacity style={stylesBtn.combImgText}>
                <Image style={stylesBtn.image}
                source={require('../../App_Resources/iOS/ancre.png')} />
                <Text style={stylesBtn.text}> Bateau</Text>
            </TouchableOpacity>
        </View>

    {/* It will be use in
    <Image source={require('../../App_Resources/iOS/background.png')}
     style={styles.imageBack}/>*/}
    </View>
    )
}

export default Bateau
