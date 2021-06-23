import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Image } from "react-native";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/users-reduser";
import logo from "../img/vector.png";

const Navbar = () => {
  const dispatch = useDispatch();
  let [user, setUser] = useState("");
  const searchUser = () => {
    dispatch(getUsers(user));
    setUser("");
  };
  return (
    <View style={styles.navbar}>
      <Image style={styles.logo} source={logo} />
      <TextInput
        placeholder="enter user name"
        autoCorrect={false}
        style={styles.input}
        onChangeText={setUser}
        value={user}
      />
      <Button
        color="#00BFFF"
        title="Search"
        style={styles.button}
        onPress={searchUser}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    backgroundColor: "#1E90FF",
    width: "100%",
    height: 85,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: "5%",
  },
  button: {
    color: "#ccc",
  },
  input: {
    width: "40%",
    borderRadius: 20,
    backgroundColor: "#FFFAF0",
    marginRight: 10,
    paddingLeft: 10,
  },
});

export default Navbar;
