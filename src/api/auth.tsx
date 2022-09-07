import firestore from '@react-native-firebase/firestore';
import {Enviroments} from "../config/Enviroments"
export class Auth{
    static async register(form:any){
        return await firestore()
        .collection(Enviroments.collectionAuth)
        .add(form)
    }
    static async exist(user:string){
        return await firestore()
        .collection(Enviroments.collectionAuth)
        .where('user', '==', user)
        .get()
    }
}