import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Screen1 = (props) => {
  return (
    <View className="bg-[#ffa339] w-full h-screen flex items-center  text-white ">
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
        <TouchableOpacity onPress={() => props.navigation.navigate("Screen2")}>
          <Text className="text-white text-center text-[16px] py-3 uppercase rounded-full px-16 bg-[#3a3dff]">
            get started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen1;
