import { View, Text, Image } from "react-native";
import React from "react";

const RideScreen02 = () => {
  return (
    <View className="bg-[#ffa339] min-h-full  ">
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
  );
};

export default RideScreen02;
