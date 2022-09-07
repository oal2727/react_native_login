import React from "react"
import {View,Text,StyleSheet} from "react-native"
import {FONTNAME} from "../common/FontName"
import {COLORS} from "../common/Color"


const MessageError = ({children}:any)=>{
    return(
            <Text style={styles.text}>* {children}</Text>
    )
}

const styles = StyleSheet.create({
    text:{
        color: COLORS.danger,
        fontFamily:FONTNAME.InterSemiBold,
        fontSize:12
    }
})
export default MessageError;