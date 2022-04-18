import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import "react-native-gesture-handler";

import Navigate from "./navigate";

const fonts = () =>
  Font.loadAsync({
    mtBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    mtLight: require("./assets/fonts/Montserrat-Light.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);
  if (font) {
    return <Navigate />;
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}
