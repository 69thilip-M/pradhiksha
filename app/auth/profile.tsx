import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import ArrowBack from "@/components/ArrowBack";
import LogoutIcon from "@/assets/icons/LogoutIcon";
import className from "twrnc";
import EditIcon from "@/assets/icons/EditIcon";
import MailIcon from "@/assets/icons/MailIcon";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import Post from "@/components/Post";
import data from "@/assets/data/postData.json";
import { Link } from "expo-router";
const profile = () => {
  return (
    <View style={className`flex-1 gap-5 p-5`}>
      <View style={className`flex-row justify-between items-center`}>
        <ArrowBack></ArrowBack>
        <Text style={className`text-2xl font-bold`}>Profile</Text>
        <View style={className`bg-red-500 p-2 rounded-xl w-10`}>
          <Link href="/auth/signIn">
            <LogoutIcon></LogoutIcon>
          </Link>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*  */}
        <View
          style={className`flex-col justify-center items-center mt-2 gap-1`}
        >
          <View style={className`flex-col justify-center items-center`}>
            <Image
              source={require("../../assets/profile2.jpg")}
              style={className`h-30 w-30 rounded-xl`}
            ></Image>
            <View
              style={className`p-1  bg-white shadow-lg absolute bottom-2 right-2 rounded-lg`}
            >
              <EditIcon></EditIcon>
            </View>
          </View>
          {/*  */}
          <Text style={className`font-semibold text-2xl`}>Zenitsu</Text>
          <Text style={className`font-bold text-gray-700`}>Demon Slayer</Text>
        </View>
        {/* details */}
        <View
          style={className`mb-2 mt-2 flex-row  justify-start items-center gap-2`}
        >
          <MailIcon></MailIcon>
          <Text style={className`text-lg font-semibold text-gray-500`}>
            zenitsu69@gmail.com
          </Text>
        </View>
        <View
          style={className`mb-2 flex-row  justify-start items-center gap-2`}
        >
          <PhoneIcon></PhoneIcon>
          <Text style={className`text-lg font-semibold text-gray-500`}>
            6345678989
          </Text>
        </View>
        <Text style={className`mb-2 text-xl font-semibold text-gray-500 ml-1`}>
          He Codes
        </Text>
        {/* posts */}

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Post
              key={item.id}
              name={item.name}
              date={item.date}
              image={{ uri: item.image }}
              title={item.title}
              postImage={{ uri: item.postImage }}
            />
          )}
        ></FlatList>
      </ScrollView>
    </View>
  );
};

export default profile;
