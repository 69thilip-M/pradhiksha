import { View, Text, Image } from "react-native";
import React from "react";
import className from "twrnc";
const Message = () => {
  return (
    <View
      style={className`bg-white p-3 rounded-2xl my-2 flex-row justify-between items-center gap-3`}
    >
      <Image
        source={require("../assets/profile.jpeg")}
        style={className`h-8 w-8`}
      ></Image>
      <View style={className`flex-1`}>
        <Text style={className`text-gray-600 font-semibold text-lg`}>
          John Doe
        </Text>
        <Text style={className`text-gray-600 font-semibold text-sm`}>
          Commented your post
        </Text>
      </View>
      <Text style={className`font-semibold`}>9 Aug</Text>
    </View>
  );
};

export default Message;
