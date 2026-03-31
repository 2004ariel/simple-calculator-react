import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function PublicacaoScreen({ route }) {
  const foto = route.params?.foto;

  if (!foto) {
    return (
      <View style={styles.emptyWrap}>
        <Text style={styles.emptyText}>Publicacao nao encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.userRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{foto.iniciais}</Text>
        </View>
        <View>
          <Text style={styles.userText}>{foto.usuario}</Text>
          <Text style={styles.timeText}>ha poucos minutos</Text>
        </View>
      </View>

      <Image source={{ uri: foto.urlFull }} style={styles.image} />

      <View style={styles.actions}>
        <Ionicons name="heart-outline" size={40} color="#d84d4d" />
        <Ionicons name="chatbubble-outline" size={33} color="#4a4a4a" />
        <Ionicons name="paper-plane-outline" size={33} color="#4a4a4a" />
      </View>

      <View style={styles.textArea}>
        <Text style={styles.likes}>{foto.curtidas} curtidas</Text>
        <Text style={styles.caption}>
          <Text style={styles.userText}>{foto.usuario}</Text> {foto.legenda}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc",
    backgroundColor: "#f7f7f7",
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#e34f4f",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  userText: {
    color: "#141414",
    fontWeight: "700",
    fontSize: 17,
  },
  timeText: {
    color: "#8f8f8f",
    fontSize: 12,
    marginTop: 2,
  },
  image: {
    width: "100%",
    height: 500,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  textArea: {
    paddingHorizontal: 12,
    paddingTop: 6,
  },
  likes: {
    color: "#121212",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
  caption: {
    color: "#121212",
    fontSize: 16,
    lineHeight: 22,
  },
  emptyWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  emptyText: {
    color: "#222",
    fontSize: 16,
  },
});