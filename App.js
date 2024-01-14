// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen_1 from "./screens/rideApp/Screen_1";
import Screen_2 from "./screens/rideApp/Screen_2";

function HomeScreen1() {
  return (
    <View className="bg-[#ff0101] w-full h-screen text-white ">
      <Text className="text-white">Home </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen1} /> */}
        {/* First Screen */}
        <Stack.Screen name="Screen1" component={Screen_1} />
        {/* Second Screen  */}

        <Stack.Screen name="Screen2" component={Screen_2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
