//npx expo install react-dom react-native-web and npx expo start

import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import PrimeiroComponente from "./components/PrimeiroComponente";
import InputNumero from "./components/inputNumero";

export default function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [resultado, setResultado] = useState(0);

  const calcular = () => {
    const n1 = Number(a);
    const n2 = Number(b);
    setResultado(n1 + n2);
  };

  return (
    <View style={styles.container}>
      <PrimeiroComponente texto="Calculadora"></PrimeiroComponente>

      <InputNumero
        value={a}
        onChangeText={setA}
        keyboardType="numeric"
        placeholder="Valor A"
      />

      <InputNumero
        value={b}
        onChangeText={setB}
        keyboardType="numeric"
        placeholder="Valor B"
      />

      <Pressable style={styles.botao} onPress={calcular}>
        <Text style={styles.botaoTexto}>Calcular</Text>
      </Pressable>

      <Text style={[styles.resultado, resultado >= 0 ? styles.positivo : styles.negativo]}>
        Seu Resultado é: {resultado}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  botao: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  resultado: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
  },
  positivo: {
    color: "green",
  },
  negativo: {
    color: "red",
  },
});
