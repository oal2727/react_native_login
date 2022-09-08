import React from "react"
import {View,Text,StyleSheet,TouchableOpacity,  Platform,
  UIManager,LayoutAnimation} from "react-native"
import {COLORS} from "../common/Color"
import {FONTNAME} from "../common/FontName"
import Icon from 'react-native-vector-icons/FontAwesome';

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const BoxText = ({item,selectedId,setSelectedId}:any)=>{

  const bg = item.id === selectedId ? COLORS.boxDetail : COLORS.footer;
    const active = item.id === selectedId ? true : false    

  const toogleShow=(id:any)=>{
      setSelectedId(id)
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }
  return(
   <>
    <TouchableOpacity style={styles.box} onPress={()=>toogleShow(item.id)} activeOpacity={5}>
         <View style={[styles.boxPadding,{backgroundColor:bg}]}>
        <Text style={styles.description}>{item.description}</Text>
        {
          active ?
          <Icon name={"caret-up"} style={{color:COLORS.textColor,fontSize:20}} />
        :
           <Icon name={"caret-down"} style={{color:COLORS.textColor,fontSize:20}}  />
        }
         </View>
         <View style={active ? {backgroundColor:COLORS.boxDetail} : {height:0}}>
          <Text style={styles.detail}>{item.detail}</Text>
        </View>

         </TouchableOpacity>
        
   </>
       
      
  )
}

const styles = StyleSheet.create({
  lineBorder:{
    borderBottomWidth:1,
    borderBottomColor:"#000000",
    height:30,
    width:"100%"
  },
  description:{
    fontSize:16,
    color:COLORS.textColor,
    fontFamily:FONTNAME.InterBold
  },
  detail:{
    padding:5,
    color:COLORS.textColor,
    paddingLeft:10,
    fontFamily:FONTNAME.InterMedium
  },
  box:{
    boxDetail:"#9FCBF6",
    marginBottom:10
  },
  boxPadding:{
    padding:12,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingRight:20
  },
  icon:{
    fontSize:18
  }
})


export default BoxText;