import React from 'react';
import {Button,StyleSheet,Text,View,} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Details from './screens/Details';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/MainScreen';

const Drawer = createDrawerNavigator();

const App = () =>{
  return (
    <NavigationContainer>

    {/*---------------------------------------------------------------------------- Lazy Loading */}
      <Drawer.Navigator initialRouteName="MainScreen">
        {/* <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Details" component={Details} /> */}
        <Drawer.Screen name="MainScreen" component={MainScreen} />
      </Drawer.Navigator>

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
