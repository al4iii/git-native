import React from "react";
import { StyleSheet, View, Image } from "react-native";
import loader from "./../img/loader.svg"

const Preloader = () => {
  return (
    <View className={styles.loader}>
      <Image src={loader} alt={"loader"} />
    </View>
  );
};

const styles = StyleSheet.create({
    loader: {
        justifyContent: "center",
    }
  });
  
export default Preloader;