import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import className from "twrnc";
const Arrowleft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      style={className`w-6`}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
};

export default Arrowleft;
