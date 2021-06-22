import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Image } from "react-native";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/users-reduser";

const Navbar = () => {
  const dispatch = useDispatch();
  let [user, setUser] = useState("");
  const onStatusChenge = (e) => setUser(e.currentTarget.value);
  const searchUser = () => {
    dispatch(getUsers(user));
    console.log(user)
    setUser("");
  };
  return (
    <View style={styles.navbar}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://w7.pngwing.com/pngs/800/537/png-transparent-github-webhook-computer-icons-logo-github-mammal-cat-like-mammal-carnivoran.png",
        }}
      />
      <TextInput
        placeholder="enter user name"
        autoCorrect={false}
        style={styles.input}
        onChange={onStatusChenge}
        value={user}
      />
      <Button
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
    backgroundColor: "#0064EB",
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: "5%",
  },
  button: {
    marginLeft: "5%",
  },
  input: {
    borderRadius: 20,
    backgroundColor: "#fff",
    marginRight: 10,
    paddingLeft: 10,
  },
});

export default Navbar;
