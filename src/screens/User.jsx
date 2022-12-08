//UserScreen

import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function User({ navigation, data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>User</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={styles.txtBotao}>Bem vindo {}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 30,
  },
  botao: {
    backgroundColor: "#B0C4DE",
    width: 90,

    borderRadius: 10,
    marginTop: 20,
  },
  txtBotao: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
  },
});
