import { Ionicons } from "@expo/vector-icons";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fotos } from "../data/dados";

function FeedCard({ item, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.95}
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.userRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.iniciais}</Text>
        </View>
        <Text style={styles.userText}>{item.usuario}</Text>
      </View>

      <Image source={{ uri: item.urlThumb }} style={styles.image} />

      <View style={styles.textArea}>
        <View style={styles.likesRow}>
          <Ionicons name="heart-outline" size={19} color="#d84d4d" />
          <Text style={styles.likes}>{item.curtidas} curtidas</Text>
        </View>
        <Text style={styles.caption}>
          <Text style={styles.userText}>{item.usuario}</Text> {item.legenda}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function FeedScreen({ navigation }) {
  const openPublication = (foto) => {
    navigation.navigate("Publicacao", { foto });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <FeedCard item={item} onPress={() => openPublication(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ececec",
  },
  listContent: {
    paddingTop: 10,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "#f8f8f8",
    marginBottom: 12,
    marginHorizontal: 10,
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#e34f4f",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  avatarText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  userText: {
    color: "#121212",
    fontSize: 15,
    fontWeight: "700",
  },
  image: {
    width: "100%",
    height: 360,
  },
  textArea: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  likesRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  likes: {
    fontSize: 16,
    fontWeight: "700",
    color: "#101010",
    marginLeft: 6,
  },
  caption: {
    fontSize: 15,
    color: "#141414",
    lineHeight: 21,
  },
});