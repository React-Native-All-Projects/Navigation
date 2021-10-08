import React from 'react';
import {Button,StyleSheet,Text,View,} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Details from './screens/Details';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/MainScreen';
import DrawerContent from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';

import RootStackScreen from './screens/RootStackScreen';
const Drawer = createDrawerNavigator();

const App = () =>{
  return (
    <NavigationContainer>
    <RootStackScreen />
    
    {/*---------------------------------------------------------------------------- Lazy Loading */}
      {/* <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="MainScreen" component={MainScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator> */}

    {/*---------------------------------------------------------------------------- Normal Loading */}
      {/* <Stack.Navigator

      //Change All Style Page In That Stack
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
        <Stack.Screen name="Home" component={Home} 

        //Set Style For That Page Header
        // options ={{
        //   headerStyle :{
        //     backgroundColor : '#009387'
        //   },
        //   headerTintColor:'#fff',
        //   headerTitleStyle :{
        //     fontWeight :'bold'
        //   }
        // }}

        //Change Title Page
        options ={{title:'Main Page'}}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator> */}
   


    </NavigationContainer>
  );
}

export default App;
