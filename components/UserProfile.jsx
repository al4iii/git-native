import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import {
  isFetchingSelector,
  isFoundSelector,
  userNameSelector,
} from "../redux/users-selector";
import User from "./User";

const UserProfile = () => {
  const isFound = useSelector(isFoundSelector);
  const user = useSelector(userNameSelector);
  const isFetching = useSelector(isFetchingSelector);
  return (
    <View>
      {isFetching ? (
        <ActivityIndicator size="large" />
      ) : isFound ? (
        <User />
      ) : (
        <View style={styles.notFound}>
          <Text style={styles.text}> User "{user}" not Found </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  notFound: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});

export default UserProfile;
