import { View, Text, Pressable } from "react-native";
import React from "react";
import Arrowleft from "../assets/icons/Arrowleft";
import className from "twrnc";
import { useRouter } from "expo-router";
const ArrowBack = () => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.back()}
      style={className`bg-gray-300 p-2 rounded-lg w-10`}
    >
      <Arrowleft></Arrowleft>
    </Pressable>
  );
};

export default ArrowBack;
