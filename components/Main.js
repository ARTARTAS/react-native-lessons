import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { globalStyle } from "./../styles/style";

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: "Google",
      anonce: "Google info",
      full: "Google — американская транснациональная корпорация в составе холдинга Alphabet, инвестирующая в интернет-поиск, облачные вычисления и рекламные технологии.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/220px-Google_2015_logo.svg.png",
    },
    {
      name: "Apple",
      anonce: "Apple info",
      full: "Apple — американская корпорация, производитель персональных и планшетных компьютеров, аудиоплееров, смартфонов, программного обеспечения. Один из пионеров в области персональных компьютеров и современных многозадачных операционных систем с графическим интерфейсом.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png",
    },
    {
      name: "Facebook",
      anonce: "Facebook info",
      full: "Facebook — крупнейшая социальная сеть в мире, которой владеет компания Meta (до 28 октября 2021 года — Facebook Inc.). Была основана 4 февраля 2004 года Марком Цукербергом и его соседями по комнате во время обучения в Гарвардском университете — Эдуардо Саверином, Дастином Московицем и Крисом Хьюзом.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png",
    },
  ]);

  return (
    <View style={globalStyle.main}>
      <Text style={[globalStyle.tittle, Styles.header]}>Статьи</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={Styles.item}
              onPress={() => navigation.navigate("FullInfo", item)}
            >
              <Image
                style={Styles.stretch}
                source={{
                  width: "100%",
                  height: 200,
                  uri: item.img,
                }}
              />
              <Text style={Styles.tittle}>{item.name}</Text>
              <Text style={Styles.anons}>{item.anonce}</Text>
            </TouchableOpacity>
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

const Styles = StyleSheet.create({
  header: {
    fontSize: 30,
    marginBottom: 30,
  },
  item: {
    width: "100%",
    marginBottom: 30,
  },
  tittle: {
    fontFamily: "mtBold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  anons: {
    fontFamily: "mtLight",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
  stretch: {
    width: "auto",
    height: 200,
    resizeMode: "stretch",
  },
});
