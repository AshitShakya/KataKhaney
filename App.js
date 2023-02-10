import { Text, StyleSheet, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import ResturantsScreen from "./src/features/resturant/screens/resturants.screen";

export default function App() {
  return (
    <>
    
    <ResturantsScreen/>
    
     <StatusBar style="auto" /></>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // // justifyContent: "center",
  },
});
