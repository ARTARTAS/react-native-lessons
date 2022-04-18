import React, { useState } from "react";
import { View, Text, TouchableHighlight, FlatList } from "react-native";
import { globalStyle } from "./../styles/style";

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    { name: "Google", anonce: "Google!!!!", full: "Google is cool!" },
    { name: "Apple", anonce: "Apple!!!!", full: "Apple is cool!" },
    { name: "Facebook", anonce: "Facebook!!!!", full: "Facebook is cool!" },
  ]);

  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.tittle}>Main Page</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => {
          return (
            <TouchableHighlight
              onPress={() => navigation.navigate("FullInfo", item)}
            >
              <Text>{item.name}</Text>
            </TouchableHighlight>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <Button
        title="Открыть страницу Contacts"
        onPress={() => navigation.navigate("Contacts")} //переход на конкретную страницу
      /> */}
    </View>
  );
}
