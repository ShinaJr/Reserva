import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SavedScreen from './screens/SavedScreen';
import BookingScreen from './screens/BookingScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    //creating a function for our bottom tab navigator to pass it as a prop to the Native Stack Navigator.
    function BottomTabs() {
        return (
          <Tab.Navigator screenOptions={{headerTitleAlign:"center"}} >
            <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel:"Home", headerShown:false, tabBarIcon:({focused}) => focused ? (  
                <Ionicons name="home-sharp" size={24} color="#2c3968" />
            ): (
                <Ionicons name="ios-home-outline" size={24} color="black" />
            )}} />
            <Tab.Screen name="Saved" component={SavedScreen} options={{tabBarLabel:"Saved", headerShown:false, tabBarIcon:({focused}) => focused ? (  
                <Ionicons name="heart" size={24} color="#2c3968" />
            ): (
                <Ionicons name="ios-heart-outline" size={24} color="black" />
            )}} />
            <Tab.Screen name="Bookings" component={BookingScreen} options={{tabBarLabel:"Bookings", headerShown:false, tabBarIcon:({focused}) => focused ? (  
                <Ionicons name="notifications-sharp" size={24} color="#2c3968" />
            ): (
                <Ionicons name="notifications-outline" size={24} color="black" />
            )}} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarLabel:"profile", headerShown:false, tabBarIcon:({focused}) => focused ? (  
                <Ionicons name="person-sharp" size={24} color="#2c3968" />
            ): (
                <Ionicons name="ios-person-outline" size={24} color="black" />
            )}} />
          </Tab.Navigator>
        );
      }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign:"center"}}>
        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown
        :false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})