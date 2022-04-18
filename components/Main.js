import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Modal,
} from "react-native";
import { globalStyle } from "./../styles/style";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Form } from "./Form";

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

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [article, ...list];
    });
    setModalWindow(false);
  };

  const [modalWindow, setModalWindow] = useState(false);
  return (
    <View style={globalStyle.main}>
      <Modal visible={modalWindow}>
        <View style={globalStyle.main}>
          <AntDesign
            style={Styles.iconClose}
            name="closecircle"
            size={30}
            color="red"
            onPress={() => setModalWindow(false)}
          />
          <Text style={Styles.tittle}>Добавить статью</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>

      <Ionicons
        style={Styles.iconAdd}
        name="add-circle-sharp"
        size={30}
        color="green"
        onPress={() => setModalWindow(true)}
      />
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
                style={Styles.image}
                source={{
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
  iconClose: {
    textAlign: "center",
  },
  iconAdd: {
    textAlign: "center",
    marginBottom: 15,
  },
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
  image: {
    width: "auto",
    height: 200,
    resizeMode: "stretch",
  },
});
