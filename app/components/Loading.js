//recibe props la funcion loading. en un return el condicional dentro de llaves linea de text &&
import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Overlay} from "react-native-elements";

export default function Loading(props) {
    const { isVisible, text} = props;

    return(
        <Overlay 
            isVisible={isVisible}
            windowBackgroundColor="rgba(0, 0, 0, 0.5)"
            overlayBackgroundColor="transparent"
            overlayStyle={styles.primeroverlay}
        >
            <View style={styles.viewestilo}>
                <ActivityIndicator size="large" color="#00a680" />
                {text && <Text style={styles.textestilo}>{text}</Text>}
            </View>
        </Overlay>
    )
}


const styles = StyleSheet.create({
    primeroverlay: {
        height: 100,
        width: 200,
        backgroundColor: "#fff",
        borderColor: "#00a680",
        borderWidth: 2,
        borderRadius: 10,
    },
    viewestilo: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textestilo: {
        color: "#00a680",
        textTransform: "uppercase",
        marginTop: 10,
    },
});