import React from "react";
import { View, Text, Image, Button } from "react-native";
import SwipeGesture from "react-native-swipe-gestures";
import { useNavigation } from "@react-navigation/native";

const RideScreen02 = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate("RideScreen03");
  };
  const onSwipeLeft = () => {
    navigation.navigate("RideScreen03");
  };
  const onSwipeRight = () => {
    navigation.navigate("RideScreen01");
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <SwipeGesture
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      config={config}
      style={{ flex: 1, backgroundColor: "#F0195F" }}
    >
      <View className="bg-[#ffa339] min-h-full  ">
        <View>
          <View
            style={{
              // borderWidth: 2,
              marginTop: -120,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Add your logo image here */}
            <Image
              source={require("../../assets/delivery-bike.png")}
              style={{
                width: 90,
                height: 90,
              }}
              resizeMode="contain"
            />
            {/* Your existing onboarding content */}
            <Image
              source={require("../../assets/battery.jpg")}
              style={{ width: 310, height: 310 }}
              resizeMode="contain"
              className="rounded-full"
            />
          </View>
          <View className="w-52 -mt-12">
            <Text className="text-white text-[28px] font-semibold text-center">
              Always full charged
            </Text>
          </View>
          <View className="w-64 mt-2 ">
            <Text className="text-white text-center  px-5 pt-2 text-[16px]">
              you don't need to worry about the scooter charging
            </Text>
          </View>
        </View>
        <Button
          title=">"
          className="bg-[#F0195F]"
          onPress={handleButtonPress}
        />
      </View>
    </SwipeGesture>
  );
};

export default RideScreen02;
