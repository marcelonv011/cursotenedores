import React, {useEffect, useState} from "react";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function Account() {
    const [login, setLogin] = useState(null);

    
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(!user){
                setLogin(false);
            } else{
                setLogin(true);
            }
        })
    }, [])

    if( login === null){
        return <Loading isVisible={true} text="cargando..." />
   }

   if (login){
       return <UserLogged />
   }   else {
       return <UserGuest />
   }
}