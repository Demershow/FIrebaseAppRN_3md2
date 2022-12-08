import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.bloco}>
      <Text style={styles.texto}>Seja Bem Vindo</Text>

      <View>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.txtBotao}>Cadastro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.txtBotao}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bloco: {
    marginTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 30,
  },
  botao: {
    backgroundColor: "#B0C4DE",
    width: 110,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  txtBotao: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
  },
});
