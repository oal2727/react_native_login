import React from "react"
import {COLORS} from "../../common/Color"
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from "react-native"
import ImageButton from "components/ImageButton"
import {FONTNAME} from "../../common/FontName"
import BoxText from "components/BoxText"
import {AuthContext} from "../../context/AuthContext"

const Home = ()=>{

    const {logout,authUser}:any = React.useContext(AuthContext)
    const [selectedId,setSelectedId] = React.useState(null)
    const details=[
        {id:1,description:"Descubre",detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
    {id:2,description:"Descubre",detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
      ]

      let dataHeader=[
        {id:1,image:require("../../../assets/images/image-5.png"),description:"Carrito"},
        {id:2,image:require("../../../assets/images/image-2.png"),description:"Compras"},
        {id:3,image:require("../../../assets/images/image-3.png"),description:"Salud"},
        {id:4,image:require("../../../assets/images/image-4.png"),description:"Aniversario"},
        {id:5,image:require("../../../assets/images/image-1.png"),description:"WhatsApp"},
        {id:6,image:require("../../../assets/images/image-6.png"),description:"Envio"},
    ]


    const logoutAuth = ()=>{
        logout();
    }

    return( 
        <View>
            <View style={styles.header}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={styles.textHeader}>Opciones - {authUser.auth}</Text>
                    <TouchableOpacity onPress={()=>logoutAuth()} >
                        <Text style={styles.textExit}>Salir</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                data={dataHeader}
                numColumns={3}
                style={{alignSelf:"center"}}
                keyExtractor={(item:any)=>item.id}
                extraData={selectedId}
                    renderItem={({item}:any)=>(
                    <ImageButton image={item.image} description={item.description}/>
                    )}
                />
            </View>
            <View style={{marginTop:5}}>
                <FlatList
                    data={details}
                    keyExtractor={(item:any)=>item.id}
                    extraData={selectedId}
                        renderItem={({item}:any)=>(
                        <BoxText 
                        selectedId={selectedId}  setSelectedId={setSelectedId}
                        item={item}/>
                        )}
                    />
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    header:{
        backgroundColor:COLORS.boxHome,
        height:350
    },
    textHeader:{
        margin:15,
        color:COLORS.textColor,
        fontFamily:FONTNAME.InterSemiBold,
        fontSize:20
    },
    textExit:{
        color:COLORS.danger,
        margin:15,fontSize:20,fontFamily:FONTNAME.InterBold
    },
    
})
export default Home;