import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/users-reduser";
import { userProfileSelector } from "../redux/users-selector";
import UserProfile from "./UserProfile";

const Content = () => {
  const profile = useSelector(userProfileSelector);
  const dispatch = useDispatch();
  const goBack = () => {
    dispatch(removeUser());
  };
  return (
    <View>
      <Button
        color="#00BFFF"
        title="Go back"
        style={styles.button}
        onPress={goBack}
      />
      {profile === null ? (
        <View style={styles.conteiner}>
          <Text style={styles.text}>Start with search a Github user</Text>
        </View>
      ) : (
        <UserProfile style={styles.profile} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  profile: {
    flex: 1,
  },
  conteiner: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {},
});

export default Content;
