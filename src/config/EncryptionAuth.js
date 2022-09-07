import CryptoJS  from "crypto-js"
import {Enviroments} from "../config/Enviroments"
export class EncryptionAuth{
    static encryption(message){
        return CryptoJS.AES.encrypt(message,Enviroments.secretPassword).toString()
    }
    static desencryption(message){
        var bytes = CryptoJS.AES.decrypt(message,Enviroments.secretPassword)
        return bytes.toString(CryptoJS.enc.Utf8);
    }

}