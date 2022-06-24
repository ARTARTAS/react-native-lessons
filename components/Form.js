import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import { Formik } from "formik";

export const Form = ({ addArticle }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        anonce: "",
        full: "",
        img: "",
      }}
      onSubmit={(values, action) => {
        addArticle(values);
        action.resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <View>
          <TextInput
            style={Styles.input}
            value={values.name}
            placeholder="Название статьи"
            onChangeText={handleChange("name")}
          />
          <TextInput
            style={Styles.input}
            value={values.anonce}
            multiline //несколько строк текста
            placeholder="Анонс"
            onChangeText={handleChange("anonce")}
          />
          <TextInput
            style={Styles.input}
            value={values.full}
            multiline //несколько строк текста
            placeholder="Текст статьи"
            onChangeText={handleChange("full")}
          />
          <TextInput
            style={Styles.input}
            value={values.img}
            placeholder="URL Картинки"
            onChangeText={handleChange("img")}
          />
          <Button title="Добавить" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const Styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    padding: 5,
  },
});
