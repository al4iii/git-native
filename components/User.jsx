import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, TextInput, Button, Image, Text } from "react-native";
import { getRepos } from "../redux/users-reduser";
import {
  currentPageSelector,
  pageSizeSelector,
  reposSelector,
  totalCountSelector,
  userNameSelector,
  userProfileSelector,
} from "../redux/users-selector";

const User = () => {
  const totalItemsCount = useSelector(totalCountSelector);
  const pageSize = useSelector(pageSizeSelector);
  const currentPage = useSelector(currentPageSelector);
  const dispatch = useDispatch();
  const profile = useSelector(userProfileSelector);
  const onPageChenged = (pageNumber, page) => {
    const login = profile.login;
    dispatch(getRepos(pageNumber, page, login));
  };
  const repos = useSelector(reposSelector);
  let userName = useSelector(userNameSelector);
  console.log(profile.avatar_url);
  return (
    <View>
      <View>
        <View>
        {/* <Image
        style={styles.tinyLogo}
        source={{
          uri: profile.avatar_url
        }}
      /> */}
          <View style={styles.name}>
            <Text>{profile.name}</Text>
          </View>
          <View style={styles.login}>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://github.com/${userName}`}
            >
              {profile.login}
            </a>
          </View>
          <View style={styles.followers}>
            {profile.followers} followers
            {profile.following} following
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  userprofile: {},
  profile: {},
  img: {},
  name: {},
  login: {},
  followers: {},
  rep: {},
  tinyLogo:{
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: "5%",
  }
});

export default User;
