import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import className from "twrnc";
import ArrowBack from "@/components/ArrowBack";
import VideoIcon from "@/assets/icons/VideoIcon";
import ImageIcon from "@/assets/icons/ImageIcon";
import Button from "@/components/Button";
const create = () => {
  return (
    <View style={className`flex-1 p-5 gap-5`}>
      <View style={className`flex-row justify-between items-center`}>
        <ArrowBack></ArrowBack>
        <Text style={className`text-2xl font-bold`}></Text>
        <View></View>
      </View>

      {/* profile */}
      <View style={className`flex-row items-center justify-start gap-3`}>
        <Image
          source={require("../../assets/profile.jpeg")}
          style={className`h-12 w-12 rounded-xl border`}
        ></Image>
        <View>
          <Text style={className`font-semibold text-lg`}>Tobi</Text>
          <Text style={className`font-semibold text-gray-700`}>Date</Text>
        </View>
      </View>
      {/* textinput */}
      <TextInput
        placeholder="What's on your mind ?"
        style={className`p-3 border border-gray-300 rounded-xl font-semibold text-md text-gray-500 `}
      ></TextInput>
      {/* add your post */}
      <View
        style={className`p-3 border border-gray-300 rounded-xl flex-row justify-between`}
      >
        <Text style={className`text-lg font-semibold text-gray-500`}>
          Add to your post
        </Text>
        <View style={className`flex-row gap-3`}>
          <ImageIcon></ImageIcon>
          <VideoIcon></VideoIcon>
        </View>
      </View>
      {/* post button */}
      <View style={className`p-5`}>
        <Button title="Post" href="/auth/home"></Button>
      </View>
    </View>
  );
};

export default create;
