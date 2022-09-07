import {IActions} from "../interfaces/action"
export const AuthReducer = (state,action)=>{
    switch(action.type){
        case IActions.AUTH_TOKEN:
                return {
                    ...state,
                    userToken: action.payload,
                  };
        case IActions.TOGGLE_MESSAGE:
                    return {
                        ...state,
                        message:{
                            description:action.payload.description,
                            show:action.payload.show
                        }
                      };
        case IActions.ME_FIREBASE:
            return{
                ...state,auth:action.payload
            }
        default:
            return state
    }  
}