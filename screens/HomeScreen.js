import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import DatePicker from "react-native-date-ranges";

const HomeScreen = () => {
  //storing our selcted date inside a state when it's selected  using the useState hook
  const [selectedDates, setSelectedDates] = useState();
  // console.warn(selectedDates)
  //initializing states for the rooms, adults and children so it can be updated when the state changes
  const [rooms, setRooms] = useState(1);
  const [children, setChildren] = useState(0);
  const [adults, setAdults] = useState(2);

  //initializing navigation
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Reserva.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#2c3968",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="submit"
      />
    );
  };
  return (
    <View>
      <Header />
      <ScrollView>
        <View
          style={{
            margin: 20,
            borderColor: "#FFC40C",
            borderWidth: 2,
            borderRadius: 6,
          }}
        >
          {/* Destination */}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "#FFC40C",
              borderWidth: 2,
              paddingVertical: 15,
            }}
          >
            <Ionicons name="search-sharp" size={24} color="black" />
            <TextInput placeholderTextColor="black" placeholder="Enter your Destination" />
          </Pressable>
          {/* Selected Dates */}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "#FFC40C",
              borderWidth: 2,
              paddingVertical: 15,
            }}
          >
            <Ionicons name="calendar-sharp" size={24} color="black" />
            <DatePicker
              style={{
                width: 350,
                height: 30,
                borderWidth: 0,
                borderColor: "transparent",
              }}
              customStyles={{
                placeholderText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                }, // placeHolder style
                headerStyle: {
                  backgroundColor: "#2c3968",
                },
                contentText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
              }}
              selectedBgColor="#0047AB"
              customButton={(onConfirm) => customButton(onConfirm)}
              onConfirm={(startDate, endDate) =>
                setSelectedDates(startDate, endDate)
              }
              allowFontScaling={false} // optional
              placeholder={"Jul 27, 2023 → Sep 10, 2023"}
              mode={"range"}
            />
          </Pressable>
          {/* Rooms and Guests */}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "#FFC40C",
              borderWidth: 2,
              paddingVertical: 15,
            }}
          >
            <Ionicons name="ios-person-outline" size={24} color="black" />
            <TextInput placeholderTextColor="red" placeholder="1 room * 2 adults * 0 children" />
          </Pressable>
          {/* Search Button */}
          <Pressable
            style={{
              paddingHorizontal: 10,
              borderColor: "#FFC40C",
              borderWidth: 2,
              paddingVertical: 15,
              backgroundColor: "#0047AB",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 17,
                fontWeight: "500",
                color: "white",
              }}
            >
              Search
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
