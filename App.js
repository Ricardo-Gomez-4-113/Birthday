import React from 'react';
import { StyleSheet, SafeAreaView, Button, Text, TouchableOpacity} from 'react-native';
import {Header, Title, View} from "native-base";
import Inputs from "./components/Inputs";

export default function App() {
  return (
    <>
    <SafeAreaView>
    <Header style={styles.head} >
        <Title>Cumpleaños</Title>
    </Header>
    <Inputs />
    <View style={styles.vi}>
    <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Enviar</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  head:{
    alignItems: "center",
    backgroundColor: "#0F40CE",
  },
  btn:{
    backgroundColor: "#0F40CE",
    padding: 16,
    borderRadius: 20,
    width: "75%",
    
  },
  text:{
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#000",
    borderRadius: 50,
    textAlign: "center",
  },
  vi:{
    alignItems: "center",
    justifyContent: "center",
    height: 900,
  },
  


})
