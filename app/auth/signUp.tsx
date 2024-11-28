import { View, Text, Pressable } from "react-native";
import React from "react";
import className from "twrnc";
import Arrowleft from "@/assets/icons/Arrowleft";
import ArrowBack from "@/components/ArrowBack";
import InputName from "@/components/InputName";
import InputPassword from "@/components/InputPassword";
import InputEmail from "@/components/InputEmail";
import Button from "@/components/Button";
import { Link } from "expo-router";
const signUp = () => {
  return (
    <View style={className`p-5 flex-1 gap-5`}>
      <ArrowBack></ArrowBack>
      <Text style={className`text-4xl font-bold text-gray-900`}>
        Let's {"\n"}Get Started
      </Text>
      <Text style={className`text-md font-bold`}>
        Please fill the details to create an Account
      </Text>
      <InputName></InputName>
      <InputEmail></InputEmail>
      <InputPassword></InputPassword>
      <View style={className`items-center`}>
        <Button title="Sign Up" href="auth/signIn"></Button>
        <Text style={className`text-gray-700 text-center mt-5  text-lg `}>
          Already have an Account ?
          <Link
            href="/auth/signIn"
            style={className`font-semibold text-violet-500 ml-1`}
          >
            Login
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default signUp;
