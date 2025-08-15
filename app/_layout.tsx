//imports
import { Tabs } from "expo-router";
import { GearIcon, HouseSimpleIcon } from "phosphor-react-native";

//globals
import colors from "@globals/colors";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          headerShown: false,
          sceneStyle: {
            backgroundColor: "#fff",
          },
          tabBarActiveTintColor: colors.color5,
          tabBarInactiveTintColor: colors.color3,
          tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "main",
            tabBarIcon: ({ size, color }) => (
              <HouseSimpleIcon size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "settings",
            tabBarIcon: ({ size, color }) => (
              <GearIcon size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Layout;
