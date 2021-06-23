import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import store from "./redux/redux-store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navbar style={styles.navbar} />
        <Content style={styles.content} />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 28,
    backgroundColor: "#fff",
  },
  navbar: {
    flex: 0.3,
  },
  content: {
    flex: 0.7,
  },
  button: {},
});
