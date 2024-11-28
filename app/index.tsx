import { View, Text, Image } from "react-native";
import React from "react";
import className from "twrnc";
import Button from "@/components/Button";
import { Link } from "expo-router";
const index = () => {
  return (
    <View style={className`flex-1 p-5 justify-evenly items-center`}>
      <Image
        source={require("../assets/welcom.png")}
        style={className`h-76 w-70`}
      ></Image>
      {/* view txt */}
      <View>
        <Text
          style={className`text-center mb-5 text-4xl font-bold text-violet-500 `}
        >
          CONNECTED
        </Text>
        <Text style={className`text-center text-lg text-gray-700`}>
          Where every thought finds a home and every image tells a story
        </Text>
      </View>
      {/* view button */}
      <View>
        <Button title="Getting Started" href="auth/signUp"></Button>
        <Text style={className`text-gray-700 text-center mt-5 text-lg `}>
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

export default index;
