import React from "react";
import { Text } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ChatList from './screens/ChatList';
import Chat from './screens/Chat';
import  Settings  from './screens/Settings';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
import {Provider} from 'react-native-paper'

const Stack=createNativeStackNavigator();

const Tabs=createBottomTabNavigator();

const TabsNavigator = () =>(
    <Tabs.Navigator screenOptions={({route}) => ({
      tabBarIcon:({ focused ,color,size}) => {
          return <Ionicons name={route.name=== "ChatList" ?"chatbubbles" :"settings"}
           color={color} 
           size={size}/>;
      }

    })}>
        <Tabs.Screen name="ChatList" component={ChatList}/>
        <Tabs.Screen name="Settings" component={Settings}/>
    </Tabs.Navigator>
)

const App = () => {
  return(
    <NavigationContainer>
      <Provider>
        <Stack.Navigator>
            <Stack.Screen 
              name="Main" 
              component={TabsNavigator}
              options={{headerShown:false}}
            />
            <Stack.Screen name="Chat" component={Chat}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
};
export default App;