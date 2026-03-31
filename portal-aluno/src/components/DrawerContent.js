import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
} from "@react-navigation/drawer";

export default function DrawerContent(props) {
  const { navigation } = props;

  const goToTab = (screen) => {
    navigation.navigate("MainTabs", { screen });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>IC</Text>
        </View>
        <Text style={styles.nome}>Instaclone</Text>
        <Text style={styles.info}>Projeto visual de fotos</Text>
      </View>

      <DrawerContentScrollView {...props} style={styles.itens}>
        <TouchableOpacity
          style={styles.itemBtn}
          onPress={() => goToTab("Feed")}
        >
          <Ionicons name="grid-outline" size={22} color="#202020" />
          <Text style={styles.itemTexto}>Feed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemBtn}
          onPress={() => goToTab("Busca")}
        >
          <Ionicons name="search-outline" size={22} color="#202020" />
          <Text style={styles.itemTexto}>Busca</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>

      <View style={styles.rodape}>
        <TouchableOpacity
          style={styles.sairBtn}
          onPress={() => navigation.closeDrawer()}
        >
          <Text style={styles.sairTexto}>Fechar menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f3f3" },
  header: { backgroundColor: "#121417", padding: 24, paddingTop: 58 },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#e34f4f",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  nome: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    fontStyle: "italic",
  },
  info: {
    color: "#adb2ba",
    fontSize: 14,
    marginTop: 4,
  },
  itens: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 14,
  },
  itemBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e3e3e3",
  },
  itemTexto: {
    marginLeft: 12,
    color: "#202020",
    fontSize: 16,
    fontWeight: "600",
  },
  rodape: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    padding: 16,
  },
  sairBtn: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  sairTexto: {
    color: "#A32D2D",
    fontSize: 14,
    fontWeight: "600",
  },
});
