import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { userProfileSelector } from "../redux/users-selector";
import UserProfile from "./UserProfile";

const Content = () => {
  const profile = useSelector(userProfileSelector);
  return (
    <View>
      {profile === null ? (
        <Text style={styles.text}>Start with search a Github user</Text>
      ) : (
        <UserProfile />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {},
});

export default Content;
