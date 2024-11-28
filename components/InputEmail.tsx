import { View, Text, TextInput } from "react-native";
import React from "react";
import className from "twrnc";
import MailIcon from "@/assets/icons/MailIcon";
const InputEmail = () => {
  return (
    <View
      style={className`border border-gray-500 rounded-2xl flex-row justify-start items-center gap-3 pl-3`}
    >
      <MailIcon></MailIcon>
      <TextInput
        placeholder="Enter your name"
        style={className`text-lg text-gray-500 p-3 rounded-2xl flex-1`}
      ></TextInput>
    </View>
  );
};

export default InputEmail;
