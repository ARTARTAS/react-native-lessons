import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { globalStyle } from "../styles/style";

export default function FullInfo({ route, navigation }) {
  return (
    <View style={globalStyle.main}>
      <Image
        style={Styles.stretch}
        source={{
          width: "100%",
          height: 120,
          uri: route.params.img,
        }}
      />

      <Text style={globalStyle.tittle}>{route.params.name}</Text>
      <Text style={Styles.full}>{route.params.full}</Text>

      {/* <Button
        title="Открыть страницу Main"
        onPress={() => navigation.goBack()} //простое возвращение назад
      /> */}
    </View>
  );
}

const Styles = StyleSheet.create({
  full: {
    fontFamily: "mtLight",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "black",
  },
  stretch: {
    width: "auto",
    height: 200,
    resizeMode: "stretch",
  },
});
