import {
  Button,
  Image,
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
import Modal from "react-native-modal";
import reservaIcon from "../assets/Images/Reserva.com.png"; 

const HomeScreen = () => {
  //storing our selected date inside a state when it's selected  using the useState hook
  const [selectedDates, setSelectedDates] = useState();
  // console.warn(selectedDates)
  //initializing states for the rooms, adults and children so it can be updated when the state changes
  const [rooms, setRooms] = useState(1);
  const [children, setChildren] = useState(0);
  const [adults, setAdults] = useState(2);
  //intializing a state to check if the modal is visible or not when the state changes
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
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
    <>
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
            onPress={()=> navigation.navigate("Search")}
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
              <TextInput
                placeholderTextColor="black"
                placeholder="Enter your Destination"
              />
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
                placeholder={"Select Your Dates..."}
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
              onPress={toggleModal}
            >
              <Ionicons name="ios-person-outline" size={24} color="black" />
              <TextInput
                placeholderTextColor="red"
                placeholder={`${rooms} room * ${adults} adults * ${children} children`}
              />
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
                  fontSize: 15,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>
          <Text
            style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "500" }}
          >
            Travel More spend less
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: "#2c3968",
                borderRadius: 10,
                padding: 10,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                Genius
              </Text>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
                You are at genius level one in our loyalty program
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                borderColor: "#E0E0E0",
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                20% Discounts
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
               Complete 5 stays to unlock level 2
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                borderColor: "#E0E0E0",
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                15% Discounts
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Enjoy discounts at various properties in Nigeria
              </Text>
            </Pressable>
          </ScrollView>
          <Pressable style={{marginTop:20, justifyContent:"center", alignItems:"center" }}>
            <Image style={{width:200, height:50, resizeMode:"cover"}}
              source={reservaIcon}
            />
          </Pressable>
        </ScrollView>
      </View>
      <Modal
        swipeThreshold={200}
        swipeDirection={["up", "down"]}
        isVisible={isModalVisible}
        animationIn="slideInUp"
        animationInTiming={2000}
        animationOut="slideOutDown"
        animationOutTiming={2000}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        style={{
          flex: 1,
          backgroundColor: "white",
          marginTop: 430,
          position: "relative",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              padding: 4,
              borderBottomWidth: 0.5,
              borderBottomColor: "#000",
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Select rooms and guests
            </Text>
          </View>
          <View style={{ width: "90%", height: 310, marginHorizontal: 15 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
              <Pressable
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Pressable
                  onPress={() => setRooms(Math.max(1, rooms - 1))}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    -
                  </Text>
                </Pressable>
                <Pressable>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "500",
                      paddingHorizontal: 6,
                    }}
                  >
                    {rooms}
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setRooms((c) => c + 1)}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
              <Pressable
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Pressable
                  onPress={() => setAdults(Math.max(1, adults - 1))}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    -
                  </Text>
                </Pressable>
                <Pressable>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "500",
                      paddingHorizontal: 6,
                    }}
                  >
                    {adults}
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setAdults((c) => c + 1)}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
              <Pressable
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Pressable
                  onPress={() => setChildren(Math.max(0, children - 1))}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    -
                  </Text>
                </Pressable>
                <Pressable>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "500",
                      paddingHorizontal: 6,
                    }}
                  >
                    {children}
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setChildren((c) => c + 1)}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>
            </View>
          </View>
        </View>
        {/* //The parent component must have the relative tag and button should have an absolute tag. */}
        <Button
          title="Hide modal"
          onPress={toggleModal}
          style={{ position: "relative", bottom: 0 }}
          color="#0047AB"
        />
      </Modal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
