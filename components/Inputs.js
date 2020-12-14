import React, {useState, useEffect}from 'react';
import { StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';
import firebase from "../utils/firebase";
export default function Inputs() {
    const [name, setName] = useState();
    const [dia, setDia] = useState();
    const [año, setaño] = useState();

    console.log(name);
    return (
        <View style={styles.viewform}>
             <View style={styles.viewInputs}>
                <TextInput placeholder="Nombre" style={styles.input}></TextInput>
                <TextInput placeholder="Año de nacimiento" keyboardType="numeric" style={styles.input}></TextInput>
            </View>
            <ScrollView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    viewInputs:{
        flexDirection: "row",
    },
    viewform:{
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        borderRadius: 30,
        height: 180,
        justifyContent: "center"
    },
    input:{
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
        width: "73%",
        marginRight: 5,
        marginLeft: -5,
        marginTop: 10,
        color: "#000",
        paddingHorizontal: 20,
        justifyContent: "center",


    },
})
