import React from "react";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import Header from "../component/header";
import {
  BookmarkPlus,
  ChefHat,
  Github,
  Heart,
  Info,
  Mail,
  Search,
} from "lucide-react-native";

const Features = ({ style, icon, name, children }) => {
  const Icon = icon;
  return (
    <View style={[{ flexDirection: "row" }, style]}>
      <View
        style={{
          marginRight: 10,
          padding: 10,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFEDD5",
        }}
      >
        <Icon size={18} color={"#F97316"} />
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ fontSize: 12 }}>{children}</Text>
      </View>
    </View>
  );
};
const About = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF7ED" }}>
      <Header navigation={navigation} />
      <ScrollView>
        <View
          style={{
            marginTop: 15,
            marginHorizontal: 15,
            padding: 15,
            elevation: 5,
            borderRadius: 10,
            alignItems: "center",
            backgroundColor: "#FFFFFF",
          }}
        >
          <View
            style={{
              width: width * 0.21,
              height: height * 0.1,
              marginBottom: 15,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F97316",
            }}
          >
            <ChefHat size={35} color={"#FFFFFF"} />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              What's in My Fridge?
            </Text>
            <Text style={{ color: "#4B5563" }}>Version 1.0</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 15,
            marginHorizontal: 15,
            padding: 15,
            elevation: 5,
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: 15,
              alignItems: "center",
            }}
          >
            <Info color={"#F97316"} />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {" "}
              About Application
            </Text>
          </View>
          <View>
            <Text style={{ color: "#4B5563" }}>
              What's in My Fridge is a recipe search app that helps you find
              recipes based on the ingredients available in your refrigerator.
              {"\n"}
            </Text>
            <Text style={{ color: "#4B5563" }}>
              No more confusion about what to cook! Just enter the ingredients
              you have, and we'll give you the perfect recipe recommendations.
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 15,
            marginHorizontal: 15,
            padding: 15,
            elevation: 5,
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: 15,
              alignItems: "center",
            }}
          >
            <Heart color={"#F97316"} />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}> Features</Text>
          </View>
          <View>
            <Features icon={Search} name={"Search by the Ingredients"}>
              Find meal by ingredients in your fridge
            </Features>

            <Features
              style={{ marginVertical: 15 }}
              icon={BookmarkPlus}
              name={"Save Favorite"}
            >
              Save your favorite meal for quick access
            </Features>

            <Features icon={ChefHat} name={"Thousands Meals"}>
              collect meals from any countries and categories
            </Features>
          </View>
        </View>

        <View
          style={{
            marginTop: 15,
            marginHorizontal: 15,
            padding: 15,
            elevation: 5,
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
          }}
        >
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Technology Stack
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View
              style={{
                margin: 5,
                padding: 5,
                borderRadius: 10,
                backgroundColor: "#FFEDD5",
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#F97316" }}>
                React Native
              </Text>
            </View>

            <View
              style={{
                margin: 5,
                padding: 5,
                borderRadius: 10,
                backgroundColor: "#FFEDD5",
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#F97316" }}>
                Node JS
              </Text>
            </View>

            <View
              style={{
                margin: 5,
                padding: 5,
                borderRadius: 10,
                backgroundColor: "#FFEDD5",
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#F97316" }}>
                TheMealDB
              </Text>
            </View>

            <View
              style={{
                margin: 5,
                padding: 5,
                borderRadius: 10,
                backgroundColor: "#FFEDD5",
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#F97316" }}>
                Lucide Icons
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 15,
            marginHorizontal: 15,
            padding: 15,
            elevation: 5,
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
          }}
        >
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Contact & Support
            </Text>
          </View>
          <View>
            <View
              style={{
                marginVertical: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Mail color={"#F97316"} />
              <Text style={{ color: "#4B5563" }}>
                {"  "}Segarabuana@gmail.com
              </Text>
            </View>

            <View
              style={{
                marginVertical: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Github color={"#F97316"} />
              <Text style={{ color: "#4B5563" }}>
                {"  "}github.com/BentarSegara
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            margin: 15,
            padding: 15,
            elevation: 5,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F97316",
          }}
        >
          <Text style={{ color: "#FFFFFF" }}>Made with ❤️ for food lovers</Text>

          <Text style={{ color: "#FFFFFF" }}>
            © 2025 What's in My Fridge. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
