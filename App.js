import { NavigationContainer } from "@react-navigation/native";
import SideBar from "./src/navigator/side-bar";
import { useEffect } from "react";
import {
  connectDB,
  createMealsTable,
  selectFavMeal,
} from "./src/storage/sqlite";
export default function App() {
  // useEffect(() => {
  //   const connectingToDB = async () => {
  //     const db = await connectDB();
  //     const favmeals = await selectFavMeal(db);
  //     console.log(favmeals);
  //   };
  //   connectingToDB();
  // }, []);
  return (
    <NavigationContainer>
      <SideBar />
    </NavigationContainer>
  );
}
