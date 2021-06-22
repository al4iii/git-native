import React from "react";
import { useSelector } from "react-redux";
import { userNameSelector } from "../redux/users-selector";
import { StyleSheet, View, Text } from "react-native";

const Repos = (props) => {
  let userName = useSelector(userNameSelector);
  return (
    <View style={styles.repos}>
      <Text style={styles.name}>{props.rep.name}</Text>
      <Text style={styles.description}>{props.rep.description}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  repos: {},
  name: {},
  description: {},
});
export default Repos;
