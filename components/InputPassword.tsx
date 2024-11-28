import { View, Text, TextInput } from "react-native";
import React from "react";
import className from "twrnc";
import LockIcon from "@/assets/icons/LockIcon";
const InputPassword = () => {
  return (
    <View
      style={className`border border-gray-500 rounded-2xl flex-row justify-start items-center gap-3 pl-3`}
    >
      <LockIcon></LockIcon>
      <TextInput secureTextEntry={true}
        placeholder="Enter your password"
        style={className`text-lg text-gray-500 p-3 rounded-2xl flex-1`}
      ></TextInput>
    </View>
  );
};

export default InputPassword;
