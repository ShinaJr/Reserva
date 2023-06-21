import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const SearchScreen = () => {
    //initializing a state to track what the user is typing in the input field
    const [input, setInput] = useState("");
    
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          margin: 15,
          borderWidth:3,
          borderRadius:10,
          borderColor:"#FFC40C"
        }}
      >
        <TextInput value={input} onChangeText={(text) => setInput(text)} placeholder="Enter Your Destination" />
        <Ionicons name="search" size={22} color="black" />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
