import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import {
  currentPageSelector,
  pageSizeSelector,
  reposSelector,
  totalCountSelector,
  userNameSelector,
  userProfileSelector,
} from "../redux/users-selector";
import Repos from "./Repos";

const User = () => {
  const totalItemsCount = useSelector(totalCountSelector);
  const dispatch = useDispatch();
  const profile = useSelector(userProfileSelector);
  const repos = useSelector(reposSelector);
  // const pageSize = useSelector(pageSizeSelector);
  // const currentPage = useSelector(currentPageSelector);
  // const onPageChenged = (pageNumber, page) => {
  //   const login = profile.login;
  //   dispatch(getRepos(pageNumber, page, login));
  // };
  // let userName = useSelector(userNameSelector);
  return (
    <View style={styles.conteiner}>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Image
            style={styles.logo}
            source={{
              uri: profile.avatar_url,
            }}
          />
        </View>
        <View style={styles.name}>
          <Text style={styles.text}>{profile.name}</Text>
        </View>
        <View style={styles.login}>
          <Text>Login: {profile.login}</Text>
        </View>
        <View style={styles.followers}>
          <Text>
            {profile.followers} followers {profile.following} following
          </Text>
        </View>
      </View>
      <View>
        <View>
          {totalItemsCount === 0 ? (
            <Text> </Text>
          ) : (
            <View style={styles.repos}>
              <Text style={styles.text}>Repositories({totalItemsCount})</Text>
            </View>
          )}
        </View>
        <View style={styles.rep}>
          {totalItemsCount === 0 ? (
            <View style={styles.repos}>
              <Text>Repository list is emply</Text>
            </View>
          ) : (
            <ScrollView>
              {repos.map((rep) => (
                <Repos key={rep.id} rep={rep} />
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userprofile: {},
  profile: {},
  img: {},
  name: {
    width: "100%",
    height: 20,
    marginVertical: 5,
    alignItems: "center",
  },
  login: {
    width: "100%",
    height: 20,
    alignItems: "center",
    marginVertical: 5,
  },
  followers: {
    width: "100%",
    height: 20,
    alignItems: "center",
    marginVertical: 5,
  },
  repos: {
    width: "100%",
    height: 20,
    alignItems: "center",
    marginVertical: 15,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginHorizontal: "40%",
    marginTop: "3%",
  },
  conteiner: {},
  avatar: {},
  text: {
    fontSize: 20,
  },
});

export default User;
