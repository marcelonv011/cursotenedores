import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { isEmpty } from "lodash";
import { useNavigation } from "@react-navigation/native";
import * as firebase from "firebase";
import { validateEmail } from "../../utils/Validations";
import Loading from "../Loading";


export default function LoginForm(props) {
    const { toastRef } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(defaultaFormValue());
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation();

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text})
    }

    const onSubmit = () => {
        if(isEmpty(formData.email) || isEmpty(formData.password)) {
          toastRef.current.show("Todos los campos son obligatorios");
        } else if(!validateEmail(formData.email)) {
          toastRef.current.show("El email no es correcto");
        } else {
            setLoading(true);
            firebase
            .auth()
            .signInWithEmailAndPassword(formData.email, formData.password)
            .then(() => {
                setLoading(false);
                navigation.navigate("account");
            })
            .catch(() => {
                setLoading(false);
                toastRef.current.show("Email o contraseña incorrecta");
            });
        }
    };

    return(
        <View style={styles.formcontainer}>
            <Input
                placeholder="Correo electronico"
                containerStyle={styles.containerinput}
                onChange={(e) =>onChange(e, "email")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconoestilo}
                    />
                }
            />
            <Input
                placeholder="Contraseña"
                containerStyle={styles.containerinput}
                password={true}
                secureTextEntry={showPassword ? false : true}
                onChange={(e) =>onChange(e, "password")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.iconoestilo}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Button 
                title={"Iniciar sesión"}
                containerStyle={styles.botoncontainerlogin}
                buttonStyle={styles.botonlogin}
                onPress={onSubmit}
            />
            <Loading isVisible={loading} text="Iniciando sesión" />
        </View>
    );
}

function defaultaFormValue(){
    return{
        email: "",
        password: "",
    };
}

const styles = StyleSheet.create({
    formcontainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    containerinput: {
        width: "100%",
        marginTop: 20,
    },
    botoncontainerlogin: {
        marginTop: 20,
        width: "95%"
    },
    botonlogin: {
       backgroundColor: "#00a680",
    },
    iconoestilo:{
        color: "#c1c1c1",
    },
});

