import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Details from './Details';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ExploreScreen from './ExploreScreen';
import SupportScreen from './SupportScreen';
import ProfileScreen from './ProfileScreen';

const HomeStock = new createNativeStackNavigator();
const DetailsStock = new createNativeStackNavigator();

const Stack = new createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MainScreen = () =>{
  return(
<Tab.Navigator
      initialRouteName="HomeStockScreen"
      activeColor='#fff'
    >
      <Tab.Screen
        name="HomeStockScreen"
        component={HomeStockScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-Home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="DetailsStockScreen"
        component={DetailsStockScreen}
        options={{
          tabBarLabel: 'Details',
                    tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={26} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
                    tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>

    
  
  )}


const HomeStockScreen = ({navigation}) => (
     <HomeStock.Navigator
          screenOptions ={{
                headerStyle :{
            backgroundColor : '#009387'
          },
          headerTintColor:'#fff',
          headerTitleStyle :{
            fontWeight :'bold'
          },
    }}
      >
        <Stack.Screen name="Home" component={Home} />
      </HomeStock.Navigator>
)

const DetailsStockScreen = ({navigation}) => (
     <DetailsStock.Navigator
          screenOptions ={{
                headerStyle :{
            backgroundColor : '#009387'
          },
          headerTintColor:'#fff',
          headerTitleStyle :{
            fontWeight :'bold'
          }
    }}
      >
        <Stack.Screen name="Details" component={Details} 
        />
      </DetailsStock.Navigator>
)




export default MainScreen;