import { View, Text, Image } from "react-native";
import React from "react";
import className from "twrnc";
import SettingIcon from "@/assets/icons/SettingIcon";
import HeartIcon from "@/assets/icons/HeartIcon";
import CommentIcon from "@/assets/icons/CommentIcon";
import ShareIcon from "@/assets/icons/ShareIcon";
import { Link } from "expo-router";
interface Props {
  image: any;
  name: any;
  date: any;
  title: any;
  postImage: any;
}
const Post: React.FC<Props> = ({ image, name, date, title, postImage }) => {
  return (
    <View style={className`p-3 gap-3 rounded-2xl shadow-lg my-2`}>
      {/* post header */}
      <View style={className`gap-3 flex-row justify-between items-start`}>
        <Image
          source={image}
          style={className`h-10 w-10 rounded-lg border mt-1`}
        />
        <View style={className`flex-1`}>
          <Text style={className`font-semibold text-lg`}>{name}</Text>
          <Text style={className`font-semibold text-md`}>{date}</Text>
        </View>
        <SettingIcon />
      </View>
      <Text style={className`text-lg font-semibold`}>{title}</Text>
      {/* post image */}
      <Image source={postImage} style={className`w-full h-60 rounded-2xl`} />
      {/* option icons */}
      <View style={className`flex-row justify-start gap-2 py-2`}>
        <Link href="/auth/notification">
          <HeartIcon></HeartIcon>
        </Link>
        <Link href="/auth/create">
          <CommentIcon></CommentIcon>
        </Link>
        <Link href='/auth/profile'>
          <ShareIcon></ShareIcon>
        </Link>
      </View>
    </View>
  );
};

export default Post;
