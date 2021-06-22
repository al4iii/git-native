import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Image, Text } from "react-native";
import { getRepos } from "../redux/users-reduser";
import { currentPageSelector, pageSizeSelector, reposSelector,
  totalCountSelector, userNameSelector, userProfileSelector } from "../redux/users-selector";
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
    <View>
      <View>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: profile.avatar_url,
            }}
          />
          <View style={styles.name}>
            <Text>{profile.name}</Text>
          </View>
          <View style={styles.login}>
            <Text>{profile.login}</Text>
          </View>
          <View style={styles.followers}>
            <Text>{profile.followers} followers</Text>
            <Text>{profile.following} following</Text>
          </View>
        </View>
      </View>
      <View>
        <View>
          {totalItemsCount === 0 ? (
            <Text> </Text>
          ) : (
            <Text>Repositories({totalItemsCount})</Text>
          )}
        </View>
        <View style={styles.rep}>
          {totalItemsCount === 0 ? (
            <>
              <Text>Repository list is emply</Text>
            </>
          ) : (
            repos.map((rep) => <Repos key={rep.id} rep={rep} />)
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
  name: {},
  login: {},
  followers: {},
  rep: {},
  tinyLogo: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: "5%",
    marginTop: "5%",
  },
});

export default User;
