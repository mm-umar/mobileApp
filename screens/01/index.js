import { View, Text, Image } from "react-native";
import React from "react";

const RideScreen01 = () => {
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
          source={require("../../assets/ride1.png")}
          style={{ width: 310, height: 310 }}
          resizeMode="contain"
        />
      </View>
      <View className="w-52 -mt-16">
        <Text className="text-white text-[28px] font-semibold text-center">
          Available scooters
        </Text>
      </View>
      <View className="w-64 mt-2 ">
        <Text className="text-white text-center  px-5 pt-2 text-[16px]">
          Search for available scooters around you on a handy interactive map
        </Text>
      </View>
    </View>
  );
};

export default RideScreen01;
