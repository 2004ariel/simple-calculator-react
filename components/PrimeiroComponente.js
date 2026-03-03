import { Text, StyleSheet } from "react-native";

function PrimeiroComponente({ texto }) {
  return <Text style={styles.titulo}>{texto}</Text>;
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default PrimeiroComponente;
