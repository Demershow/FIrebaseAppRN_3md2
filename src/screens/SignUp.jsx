import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebase from "../Services/firebaseConnection";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargo, setCargo] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSignUp() {
    if (email != "" && cargo != "" && password != "" && confirmPassword != "") {
      if (password == confirmPassword) {
        let usuarios = await firebase.database().ref("usuarios");
        let chave = usuarios.push().key;
        usuarios
          .child(chave)
          .set({
            cargo: cargo,
            email: email,
            senha: password,
          })
          .then(() => {
            navigation.navigate("User");
          });
        alert("Usuário cadastrado com sucesso!");
      } else {
        alert("As senhas não conferem!");
      }
    } else {
      alert("Preencha todos os campos!");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cargo"
        value={cargo}
        onChangeText={(text) => setCargo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme Senha"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          handleSignUp();
        }}
      >
        <Text style={styles.txtBotao}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.txtBotao}>Ja possuo uma conta</Text>
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
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
  },
  botao: {
    backgroundColor: "#B0C4DE",
    width: 200,
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
