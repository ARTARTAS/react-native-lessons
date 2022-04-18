import React from "react";
import { View, Text } from "react-native";
import { globalStyle } from "./../styles/style";

export default function Main() {
  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.tittle}>Main Page</Text>
    </View>
  );
}
