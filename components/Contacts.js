import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyle } from "./../styles/style";

export default function Contacts({ navigation }) {
  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.tittle}>Contacts Page</Text>
      <Button
        title="Открыть страницу Main"
        onPress={() => navigation.goBack()} //простое возвращение назад
      />
    </View>
  );
}
