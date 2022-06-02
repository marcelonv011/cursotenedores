import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import Loading from "../Loading";
import { validateEmail } from "../../utils/Validations"
import { size, isEmpty } from "lodash";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native"



export default function RegisterForm(props) {
    const { toastRef } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [formData, setFormData] = useState(defaultaFormValue());
    const [loading, setloading] = useState(false);
    const navigation = useNavigation();

    const onSubmit = () => {
        if (
            isEmpty(formData.email) ||
            isEmpty(formData.password) ||
            isEmpty(formData.repeatPassword)
        ) {
            toastRef.current.show("Todos los campos son obligatorios");
        } else if (!validateEmail(formData.email)) {
            toastRef.current.show("El email no es correcto");
        } else if(formData.password !== formData.repeatPassword){
            toastRef.current.show("Las contraseñas tienen que ser iguales");
        } else if (size(formData.password) < 6) {
            toastRef.current.show("La contraseña tiene que tener al menos 6 caracteres");
        } else {
            setloading(true);
            firebase
            .auth()
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then(() => {
                setloading(false);
                navigation.navigate("account");
            })
            .catch(() => {
                setloading(false);
                toastRef.current.show("El email ya esta en uso, pruebe con otro");
            })
        }
    };

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text })
    };

    return(
        <View style={styles.formcontainer}>
            <Input
                placeholder="Correo electronico"
                containerStyle={styles.inputform}
                onChange={e => onChange(e, "email")}
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
                containerStyle={styles.inputform}
                password={true}
                secureTextEntry={showPassword ? false : true}
                onChange={e => onChange(e, "password")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.iconoestilo}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Input
                placeholder="Repetir contraseña"
                containerStyle={styles.inputform}
                password={true}
                secureTextEntry={showRepeatPassword ? false : true}
                onChange={e => onChange(e, "repeatPassword")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.iconoestilo}
                        onPress={() => setShowRepeatPassword(!showRepeatPassword)}
                    />
                }
            />
            <Button
                title="Unirse"
                containerStyle={styles.botoncontainer}
                buttonStyle={styles.botonregistro}
                onPress={onSubmit}
            />
            <Loading isVisible={loading} text="Creando cuenta" />
        </View>
    );
}

function defaultaFormValue() {
    return{
        email: "",
        password: "",
        repeatPassword: "",
    };
}


const styles = StyleSheet.create({
    formcontainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    inputform: {
        width: "100%",
        marginTop: 20,
    },
    botoncontainer: {
        marginTop: 20,
        width:"95%",
    },
    botonregistro: {
        backgroundColor: "#00a680",
    },
    iconoestilo:{
        color: "#c1c1c1",
    },
});