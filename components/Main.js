import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyle } from "./../styles/style";

export default function Main({ navigation }) {
  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.tittle}>Main Page</Text>
      <Button
        title="Открыть страницу Contacts"
        onPress={() => navigation.navigate("Contacts")} //переход на конкретную страницу
      />
    </View>
  );
}
