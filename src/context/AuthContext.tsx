import React from 'react'
import {AuthReducer} from "../actions/AuthReducer"
import {IActions} from "../interfaces/action"
import {EncryptionAuth} from "../config/EncryptionAuth"
import {Auth} from "../api/auth"
import {IUser} from "../interfaces/User"
import DeviceStorage from "../config/DeviceStorage"
import {Enviroments} from "../config/Enviroments"
import NavigationPublic from "../navigation/NavigationPublic"
import NavigationPrivate from "../navigation/NavigationPrivate"
import { useNavigation } from '@react-navigation/native';

export const AuthContext = React.createContext();
const AuthContextProvider = ()=>{

    const initialState:any={
        auth:null,
        message:{show:false,description:null},
        userToken:false,
    };

    const [authUser,dispatch] = React.useReducer(AuthReducer,initialState)
    const navigation = useNavigation(); 

    const authContext = React.useMemo(
        ()=>({
            register:async(form:IUser)=>{
                Auth.exist(form.user).then(querySnapshot =>{
                    const response = querySnapshot.docs.map(item => item.data())[0]
                    if(response){
                        let message={description:"El usuario ya existe",show:true}
                        dispatch({type:IActions.TOGGLE_MESSAGE,payload:message})
                    }else{
                        const message = EncryptionAuth.encryption(form.password)
                        const user={user:form.user,password:message}
                        Auth.register(user)
                        navigation.navigate("Login")
                    }
                })
            },
            login:async (form:IUser)=>{
                 Auth.exist(form.user).then(querySnapshot =>{
                    const response = querySnapshot.docs.map(item => item.data())[0]
                    if(response){
                        const textOriginalPassword = EncryptionAuth.desencryption(response.password)
                        if(form.password === textOriginalPassword){
                            DeviceStorage.save(Enviroments.keyAuth,response.user)
                            dispatch({type:IActions.AUTH_TOKEN,payload:true})
                            dispatch({type:IActions.ME_FIREBASE,payload:response.user})
                        }else{
                            let message={description:"La contraseña no es valida",show:true}
                            dispatch({type:IActions.TOGGLE_MESSAGE,payload:message})
                        }
                    }else{
                        let message={description:"El usuario no existe",show:true}
                        dispatch({type:IActions.TOGGLE_MESSAGE,payload:message})
                    }
                    
                }).catch((error)=>{
                    console.log("error"+error)
                })
            },
            me:async()=>{
                const name = await DeviceStorage.get(Enviroments.keyAuth)
                dispatch({type:IActions.ME_FIREBASE,payload:name})
            },
            logout:async()=>{
                await DeviceStorage.delete(Enviroments.keyAuth)
                const message={description:null,show:false}
                dispatch({type:IActions.TOGGLE_MESSAGE,payload:message});
                dispatch({type:IActions.AUTH_TOKEN,payload:false})
                dispatch({type:IActions.ME_FIREBASE,payload:null})
                navigation.navigate("Login")
            },
            cleanField:()=>{
                const message={description:null,show:false}
                dispatch({type:IActions.TOGGLE_MESSAGE,payload:message});
            },
            authUser
        }),[authUser]
    )

    React.useEffect(()=>{
        const initial =async()=>{
          try{
            const userToken =await DeviceStorage.get(Enviroments.keyAuth)
            let boolean = userToken != null ? true : false
            dispatch({type:IActions.ME_FIREBASE,payload:userToken})
            dispatch({type:IActions.AUTH_TOKEN,payload:boolean})
          }catch(err){
            console.log(err)
          } 
        }
        initial()
    },[])
    
   return(
    <AuthContext.Provider value={authContext}>
        {
          authUser.userToken  ?
          <NavigationPrivate/>
          : 
          <NavigationPublic/>
        }
    </AuthContext.Provider>
   )
}
export default AuthContextProvider