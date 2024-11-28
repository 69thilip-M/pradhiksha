import { View, Text, ScrollView } from "react-native";
import React from "react";
import className from "twrnc";
import Arrowleft from "@/assets/icons/Arrowleft";
import Message from "@/components/Message";
import ArrowBack from "@/components/ArrowBack";
const notification = () => {
  return (
    <View style={className`flex-1 gap-5 p-5 bg-gray-200`}>
      <View style={className`flex-row justify-between items-center`}>
        <ArrowBack></ArrowBack>
        <Text style={className`text-2xl font-bold`}>Notification</Text>
        <View></View>
      </View>
      {/* notification */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Message></Message>
        <Message></Message>
      </ScrollView>
      {/* notification */}
    </View>
  );
};

export default notification;
