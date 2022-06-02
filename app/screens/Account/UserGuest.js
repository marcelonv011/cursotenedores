import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"

export default function UserGuest() {
    
    const navigation = useNavigation();

    return(
       <ScrollView centerContent={true} style={styles.scrollvista}>
           <Image 
                source={require("../../../assets/img/user-guest.jpg")}
                resizeMode="contain"
                style={styles.imagenvista}
           />
           <Text style={styles.titulo}> Consulta tu perfil de 5 tenedores </Text>
           <Text style={styles.descripcion}>
               ¿Como describirías tu mejor restaurante? Buscar y visualiza los mejores
               restaurantes de una forma sencilla, vota cual te ha gustado más y
               comenta como ha sido tu experiencia.
           </Text>
           <View style={styles.estiloviewboton}>
               <Button
                    title="Ver tu perfil"
                    buttonStyle={styles.botonestilo}
                    containerStyle={styles.conteinerestilo}
                    onPress={() => navigation.navigate("login")}
               />
           </View>
       </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollvista: {
        marginLeft: 30,
        marginRigth: 30,
    },
    imagenvista: {
        height: 300,
        width: "100%",
        marginBottom: 40,
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center",
    },
    descripcion: {
        textAlign: "center",
        marginBottom: 20,
    },
    estiloviewboton: {
        flex: 1,
        alignItems: "center",
    },
    botonestilo: {
        backgroundColor: "#00a680",
    },
    conteinerestilo: {
        width: "70%",
    },
});