import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function BuscaScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconWrap}>
          <Ionicons name="search" size={46} color="#bebebe" />
        </View>

        <Text style={styles.title}>Busca</Text>
        <Text style={styles.subtitle}>Em breve: buscar usuarios e publicacoes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ececec",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  card: {
    width: "100%",
    maxWidth: 420,
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 26,
    borderWidth: 1,
    borderColor: "#dfdfdf",
  },
  iconWrap: {
    borderWidth: 5,
    borderColor: "#c7c7c7",
    borderRadius: 44,
    width: 88,
    height: 88,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#121212",
    marginBottom: 7,
  },
  subtitle: {
    fontSize: 15,
    color: "#8a8a8a",
    textAlign: "center",
    lineHeight: 21,
  },
});