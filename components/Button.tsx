import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import className from "twrnc";
import { Link } from "expo-router";
const Button = ({ title, href }) => {
  return (
    <TouchableOpacity>
      <Link
        href={href}
        style={className`bg-violet-500 text-white text-2xl font-semibold p-4 w-76 text-center rounded-2xl`}
      >
        {title}
      </Link>
    </TouchableOpacity>
  );
};

export default Button;
