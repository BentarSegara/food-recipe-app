import React from "react";
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
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
        style={styles.featureIconContainer}
      >
        <Icon size={18} color={"#F97316"} />
      </View>
      <View>
        <Text style={styles.featureName}>{name}</Text>
        <Text style={{ fontSize: 12 }}>{children}</Text>
      </View>
    </View>
  );
};
const About = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <View
          style={styles.cardContainer}
        >
          <View
            style={[
              styles.avatarContainer,
              { width: width * 0.21, height: height * 0.1 },
            ]}
          >
            <ChefHat size={35} color={"#FFFFFF"} />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.appTitle}>
              What's in My Fridge?
            </Text>
            <Text style={{ color: "#4B5563" }}>Version 1.0</Text>
          </View>
        </View>

        <View
          style={styles.cardContainer}
        >
          <View
            style={styles.sectionHeader}
          >
            <Info color={"#F97316"} />
            <Text style={styles.sectionTitle}>
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
          style={styles.cardContainer}
        >
          <View
            style={styles.sectionHeader}
          >
            <Heart color={"#F97316"} />
            <Text style={styles.sectionTitle}> Features</Text>
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
          style={styles.cardContainer}
        >
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.sectionTitle}>
              Technology Stack
            </Text>
          </View>
          <View
            style={styles.techStackWrapper}
          >
            <View
              style={styles.techBadge}
            >
              <Text style={styles.techBadgeText}>
                React Native
              </Text>
            </View>

            <View
              style={styles.techBadge}
            >
              <Text style={styles.techBadgeText}>
                Node JS
              </Text>
            </View>

            <View
              style={styles.techBadge}
            >
              <Text style={styles.techBadgeText}>
                TheMealDB
              </Text>
            </View>

            <View
              style={styles.techBadge}
            >
              <Text style={styles.techBadgeText}>
                Lucide Icons
              </Text>
            </View>
          </View>
        </View>

        <View
          style={styles.cardContainer}
        >
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.sectionTitle}>
              Contact & Support
            </Text>
          </View>
          <View>
            <View
              style={styles.contactRow}
            >
              <Mail color={"#F97316"} />
              <Text style={{ color: "#4B5563" }}>
                {"  "}Segarabuana@gmail.com
              </Text>
            </View>

            <View
              style={styles.contactRow}
            >
              <Github color={"#F97316"} />
              <Text style={{ color: "#4B5563" }}>
                {"  "}github.com/BentarSegara
              </Text>
            </View>
          </View>
        </View>

        <View
          style={styles.footerCard}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7ED",
  },
  cardContainer: {
    marginTop: 15,
    marginHorizontal: 15,
    padding: 15,
    elevation: 5,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  avatarContainer: {
    marginBottom: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F97316",
  },
  appTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionHeader: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  featureIconContainer: {
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEDD5",
  },
  featureName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  techStackWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  techBadge: {
    margin: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#FFEDD5",
  },
  techBadgeText: {
    fontWeight: "bold",
    color: "#F97316",
  },
  contactRow: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  footerCard: {
    margin: 15,
    padding: 15,
    elevation: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F97316",
  },
});

export default About;
