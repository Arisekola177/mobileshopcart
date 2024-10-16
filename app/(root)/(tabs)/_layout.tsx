
import { icons } from "@/constants";
import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View } from "react-native";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-general-300" : ""}`}
  >
    <View
      className={`rounded-full w-6 h-6 items-center justify-center ${focused ? "bg-red-500" : ""}`}
    >
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        className="w-4 h-4"
      />
    </View>
  </View>
);

export default function Layout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#FF0000",
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#333333",
          paddingBottom: 0, // ios only
          padding: 20,
          height: 60,
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        },
        tabBarLabelStyle: {
          fontSize: 12, 
          fontWeight: "bold", 
          color: "white", 
          marginVertical: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        
        }}
      
      />
       <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.bag} focused={focused} />
          ),
        }}
      />
        <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.cart} focused={focused} />
          ),
        
        }}
      />
        <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.search} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.settings} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
