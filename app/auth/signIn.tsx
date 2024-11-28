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

const signIn = () => {
  return (
    <View style={className`p-5 flex-1 gap-5`}>
      <ArrowBack></ArrowBack>
      <Text style={className`text-4xl font-bold text-gray-900`}>
        Hey, {"\n"}Welcome back
      </Text>
      <Text style={className`text-md font-bold`}>Please login to continue</Text>

      <InputEmail></InputEmail>
      <InputPassword></InputPassword>
      <View style={className`items-end mr-3`}>
        <Text style={className`text-lg font-semibold text-violet-500 mt-2`}>
          Forget password ?
        </Text>
      </View>
      <View style={className`items-center`}>
        <Button title="SignIn" href="auth/home"></Button>
        <Text style={className`text-gray-700 text-center mt-5  text-lg `}>
          Yet have an Account ?
          <Link
            href="/auth/signIn"
            style={className`font-semibold text-violet-500 ml-1`}
          >
            SignUp
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default signIn;
