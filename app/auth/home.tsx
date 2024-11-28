import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import className from "twrnc";
import HeartIcon from "@/assets/icons/HeartIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import Post from "@/components/Post";
import data from "@/assets/data/postData.json";
import { Link } from "expo-router";
const home = () => {
  return (
    <View style={className`p-5 flex-1 gap-5`}>
      {/* header */}
      <View style={className`flex-row justify-between items-center`}>
        <Text style={className`text-3xl font-bold`}>Connected</Text>
        <View style={className`flex-row gap-3 items-center`}>
          <Link href="/auth/notification">
            <HeartIcon></HeartIcon>
          </Link>
          <Link href="/auth/create">
            <PlusIcon></PlusIcon>
          </Link>
          <Link href="/auth/profile">
            <Image
              source={require("../../assets/profile.jpeg")}
              style={className`h-10 w-10 rounded-3xl border `}
            ></Image>
          </Link>
        </View>
      </View>
      {/* header */}
      {/* posts */}
      <ScrollView showsVerticalScrollIndicator={false}>
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
      {/* posts */}
    </View>
  );
};

export default home;
