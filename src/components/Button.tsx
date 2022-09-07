import React from 'react'
import {TouchableOpacity,Text,StyleSheet} from 'react-native'
import {COLORS} from "../common/Color"
import {FONTNAME} from "../common/FontName"

const Button = ({children,onPress}:any)=>{
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        marginTop:10,
        alignSelf:"center",
        width:110,
        height:30,
        backgroundColor:COLORS.success
    },
    buttonText:{
        padding:6,
        fontFamily:FONTNAME.InterBold,
        fontWeight:"bold",
        alignSelf:"center",
        color:"white"
    }
})

export default Button;