import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyle } from "../styles/style";

export default function FullInfo({ route, navigation }) {
  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.tittle}>{route.params.name}</Text>
      <Text>{route.params.full}</Text>

      {/* <Button
        title="Открыть страницу Main"
        onPress={() => navigation.goBack()} //простое возвращение назад
      /> */}
    </View>
  );
}
