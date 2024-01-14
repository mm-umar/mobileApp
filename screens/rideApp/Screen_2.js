import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
  return (
    <View
      className={`h-2 w-2 rounded-full ${
        selected ? "bg-[#dbcdcd]" : "bg-[#9e9898]"
      } `}
      style={{
        marginHorizontal: 3,
        // backgroundColor,
      }}
    />
  );
};

const Screen_2 = ({ navigation }) => {
  return (
    <View className="bg-red-900 min-h-full  ">
      <Onboarding
        DotComponent={Dots}
        // backgroundColor="#ef195f"
        bottomBarColor="rgba(255, 255, 255, 0.0)" // Set opacity to 0
        showSkip={false}
        showNext={true}
        showDone={false}
        nextLabel={
          <View className="relative inset-0">
            <Image
              source={require("../../assets/istockphoto.png")}
              className="w-6 flex justify-center items-center h-6"
              resizeMode="contain"
            />
          </View>
        }
        pages={[
          {
            backgroundColor: "rgba(239, 25, 95, 0.1)",
            image: (
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
            ),
            title: (
              <View className="w-52 -mt-12">
                <Text className="text-white text-[28px] font-semibold text-center">
                  Always full charged
                </Text>
              </View>
            ),
            subtitle: (
              <View className="w-64 mt-2 ">
                <Text className="text-white text-center  px-5 pt-2 text-[16px]">
                  you don't need to worry about the scooter charging
                </Text>
              </View>
            ),
          },
          {
            backgroundColor: "#3a3dff",
            image: (
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
            ),
            title: (
              <View className="w-52 -mt-16">
                <Text className="text-white text-[28px] font-semibold text-center">
                  Available scooters
                </Text>
              </View>
            ),
            subtitle: (
              <View className="w-64 mt-2 ">
                <Text className="text-white text-center  px-5 pt-2 text-[16px]">
                  Search for available scooters around you on a handy
                  interactive map
                </Text>
              </View>
            ),
          },
        ]}
      />
    </View>
  );
};

export default Screen_2;
