import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabBar from "./src/navigator/BottomTabBar";
import Home from "./src/tab/home";
import SideBar from "./src/navigator/side-bar";
import Detail from "./src/tab/detail";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SideBar"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SideBar" component={SideBar} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
