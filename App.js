import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SideBar from "./src/navigator/side-bar";
export default function App() {
  return (
    <NavigationContainer>
      <SideBar />
    </NavigationContainer>
  );
}
