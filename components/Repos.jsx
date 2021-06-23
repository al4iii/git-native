import React from "react";
import { useSelector } from "react-redux";
import { userNameSelector } from "../redux/users-selector";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Repos = (props) => {
  let userName = useSelector(userNameSelector);
  return (
    <TouchableOpacity>
      <View style={styles.repos}>
        <Text style={styles.name}>{props.rep.name}</Text>
        <Text style={styles.description}>{props.rep.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  repos: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#394999",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  name: {
    fontSize: 18,
    color: "#aaa",
  },
  description: {},
});
export default Repos;
