import "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FeedScreen from "./src/screens/FeedScreen";
import BuscaScreen from "./src/screens/BuscaScreen";
import PublicacaoScreen from "./src/screens/PublicacaoScreen";
import DrawerContent from "./src/components/DrawerContent";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const feedHeaderTitleStyle = {
  color: "#ffffff",
  fontStyle: "italic",
  fontWeight: "700",
  fontSize: 20,
};

const feedHeaderStyle = {
  backgroundColor: "#121417",
};

const publicationHeaderStyle = {
  backgroundColor: "#f0f0f0",
};

const tabScreenOptions = {
  tabBarActiveTintColor: "#e34f4f",
  tabBarInactiveTintColor: "#9b9b9b",
  tabBarStyle: {
    height: 74,
    paddingBottom: 10,
    paddingTop: 6,
    backgroundColor: "#efefef",
    borderTopColor: "#d2d2d2",
    borderTopWidth: 1,
  },
  headerShown: false,
  tabBarLabelStyle: {
    fontSize: 13,
    fontWeight: "600",
  },
};

function menuButton(navigation) {
  return (
    <TouchableOpacity
      onPress={() => navigation.getParent()?.dispatch(DrawerActions.toggleDrawer())}
      style={{ marginRight: 16 }}
    >
      <Ionicons name="menu" size={30} color="#ffffff" />
    </TouchableOpacity>
  );
}

function tabIcon(name) {
  return ({ color, size }) => <Ionicons name={name} size={size + 4} color={color} />;
}

function FeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FeedHome"
        component={FeedScreen}
        options={({ navigation }) => ({
          title: "Instaclone",
          headerTitleStyle: feedHeaderTitleStyle,
          headerStyle: feedHeaderStyle,
          headerShadowVisible: false,
          headerLeft: () => menuButton(navigation),
        })}
      />

      <Stack.Screen
        name="Publicacao"
        component={PublicacaoScreen}
        options={{
          title: "Publicacao",
          headerStyle: publicationHeaderStyle,
          headerTintColor: "#222",
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={tabScreenOptions}
    >
      <Tab.Screen
        name="Feed"
        component={FeedStack}
        options={{
          tabBarIcon: tabIcon("grid"),
        }}
      />

      <Tab.Screen
        name="Busca"
        component={BuscaScreen}
        options={{
          tabBarIcon: tabIcon("search"),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: "front",
          drawerStyle: {
            width: 300,
          },
        }}
      >
        <Drawer.Screen name="MainTabs" component={Tabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
