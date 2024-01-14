import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import SwipeGesture from "react-native-swipe-gestures";
import { useNavigation } from "@react-navigation/native";

const RideScreen03 = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate("RideScreen01");
  };
  const onSwipeRight = () => {
    navigation.navigate("RideScreen02");
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <SwipeGesture
      onSwipeRight={onSwipeRight}
      config={config}
      style={{ flex: 1, backgroundColor: "#F0195F" }}
    >
      <View className="bg-[#ffa339] w-full h-screen mt-10 flex items-center text-white ">
        <View>
          <View>
            <Image
              source={require("../../assets/delivery-bike.png")}
              style={{ width: 90, height: 90 }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Image
              source={require("../../assets/ride1.png")}
              style={{ width: 310, height: 310 }}
              resizeMode="contain"
            />
          </View>
          <View className="w-48">
            <Text className="text-white text-3xl font-semibold text-center">
              Enjoy your ride!
            </Text>
            <Text className="text-white text-center pt-2 text-[16px]">
              You can pay fir rent after finishing your ride
            </Text>
          </View>
          <View className=" mt-10">
            <TouchableOpacity onPress={handleButtonPress}>
              <Text className="text-white text-center text-[16px] py-3 uppercase rounded-full px-16 bg-[#3a3dff]">
                get started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SwipeGesture>
  );
};

export default RideScreen03;
