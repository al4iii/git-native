import React from "react";
import { StyleSheet, View, TextInput, Button, Image, Text } from "react-native";
import Preloader from "./Preloader";
import { useSelector } from "react-redux";
import { isFetchingSelector, isFoundSelector, userNameSelector } from "../redux/users-selector";
import User from "./User";

const UserProfile = () => {
  const isFound = useSelector(isFoundSelector);
  const user = useSelector(userNameSelector);
  const isFetching = useSelector(isFetchingSelector);
  return (
    <View>
      {isFetching ? (
        <Preloader />
      ) : !isFound ? (
        <View style={styles.not_found}>
          <Text> User "{user}" not Found </Text>
        </View>
      ) : (
        // <User />
       null
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserProfile;
