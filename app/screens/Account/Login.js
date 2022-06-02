import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements"
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import LoginForm from "../../components/account/LoginForm";


export default function Login() {
    const toastRef = useRef();
    return(
        <ScrollView>
            <Image 
                source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
                resizeMode="contain"
                style={styles.logo}
            />
            <View style={styles.viewcontainer}>
                <LoginForm toastRef={toastRef}/>
                <CreateAccount />
            </View>
            <Divider style={styles.divisor} />
            <Text>Social Login</Text>
            <Toast 
                ref={toastRef}
                position="center"
                opacity={0.9}
            />
        </ScrollView>
    );
}

function CreateAccount() {

    const navigation = useNavigation();

    return(
        <Text style={styles.textregister}> 
            ¿Aún no tienes una cuenta?{" "}
            <Text 
                style={styles.botonregistro}
                onPress={() => navigation.navigate("register")}
            >
                Regístrate
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20,
    },
    viewcontainer: {
        marginRight: 40,
        marginLeft: 40,
    },
    textregister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    botonregistro: {
        color: "#00a680",
        fontWeight: "bold",
    },
    divisor: {
        backgroundColor: "#00a680",
        margin: 40,
    },
});