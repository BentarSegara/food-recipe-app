import { NavigationContainer } from "@react-navigation/native";
import SideBar from "./src/navigator/side-bar";
import { useEffect } from "react";
import { connectDB, createMealsTable } from "./src/storage/sqlite";

export default function App() {
  const connectingToDB = async () => {
    try {
      const db = await connectDB();
      await createMealsTable(db);
    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    connectingToDB();
  }, []);

  return (
    <NavigationContainer>
      <SideBar />
    </NavigationContainer>
  );
}
