import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebase from "../Services/firebaseConnection";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (email != "" && password != "") {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((value) => {
          navigation.navigate("User");
        })
        .catch((error) => {
          alert("Email ou senha inválidos!");
        });
    } else {
      alert("Preencha todos os campos!");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.txtBotao}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.txtBotao}>Cadastrar</Text>
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
  input: {
    width: 300,

    height: 50,
    backgroundColor: "#FFF",
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    marginTop: 20,
  },
  botao: {
    width: 300,
    height: 50,
    backgroundColor: "#FF4500",
    borderRadius: 7,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  txtBotao: {
    fontSize: 17,

    color: "#FFF",
  },
});
