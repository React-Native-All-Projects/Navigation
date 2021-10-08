import React, { Profiler, useEffect } from 'react';
import {Button,StyleSheet,Text,View,ActivityIndicator} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Details from './screens/Details';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/MainScreen';
import DrawerContent from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import ProfileScreen from './screens/ProfileScreen';

import RootStackScreen from './screens/RootStackScreen';
import { AuthContext } from './Components/Context';
import AsyncStorage from '@react-native-community/async-storage';


const Drawer = createDrawerNavigator();

const App = () =>{

  // const [isLoading , setIsLoading] = React.useState(true);
  // const [userToken , setUserToken] = React.useState(true);

  const InitialLoginStatus = {
    isLoading : false,
    userName : null,
    userToken : null
  }

  const loginReduce = (PrevState,action)=>{
    switch(action.type){
      case 'RETRIEVE_TOKEN': {
        return {
          ...PrevState,
          userToken : action.token,
          isLoading: false,
        }
      }
      case 'LOGIN': {
        return {
          ...PrevState,
          userName : action.id,
          userToken : action.token,
          isLoading : false
        }
      }
            case 'LOGOUT': {
                return {
          ...PrevState,
          userName : null,
          userToken : null,
          isLoading : false
        }
      }
      case 'REGISTER': {
        return {
          ...PrevState,
          userName : action.id,
          userToken : action.token,
          isLoading : false
      }
    }
  }
}

const [loginState,dispatch] = React.useReducer(loginReduce,InitialLoginStatus);
  

  const authContext = React.useMemo(()=>({
    signIn:(userName,password)=>{
      console.log( userName + '   ' + password);
      let userToken = null;
      userToken = null;
      if(userName = 'user' && password == 'pass'){
        try{
        userToken = 'Token';
        AsyncStorage.setItem('userToken',userToken);
        }catch (e){
          console.log(e);
        }
      }
      dispatch({type : 'LOGIN',id : userName,token: userToken});
    },
    signOut: async()=>{
            try{
        await AsyncStorage.removeItem('userToken');
        }catch (e){
          console.log(e);
        }
        
            dispatch({type : 'LOGOUT'})
    },
    signUp:()=>{
      // setUserToken('Token')
      // setIsLoading(false)
    }
  }))

  useEffect(()=>{
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken');
        }catch (e){
          console.log(e);
        }
        
      dispatch({type:'REGISTER',token : userToken})
    }, (1000));
  },[]);

  if(loginState.isLoading){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator />
      </View>
    )
  }

  return (


        <AuthContext.Provider value={authContext}>
    <NavigationContainer >
      { loginState.userToken != null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
      )
    :
      <RootStackScreen/>
    }
    </NavigationContainer>
    </AuthContext.Provider>

    // <AuthContext.Provider value={authContext}>
    // <NavigationContainer>
    // <RootStackScreen />

    // {/*---------------------------------------------------------------------------- Lazy Loading */}
    //   {/* <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}>
    //     <Drawer.Screen name="MainScreen" component={MainScreen} />
    //     <Drawer.Screen name="SupportScreen" component={SupportScreen} />
    //     <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    //     <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
    //   </Drawer.Navigator> */}

    // {/*---------------------------------------------------------------------------- Normal Loading */}
    //   {/* <Stack.Navigator

    //   //Change All Style Page In That Stack
    //       screenOptions ={{
    //             headerStyle :{
    //         backgroundColor : '#009387'
    //       },
    //       headerTintColor:'#fff',
    //       headerTitleStyle :{
    //         fontWeight :'bold'
    //       }
    // }}
    //   >
    //     <Stack.Screen name="Home" component={Home} 

    //     //Set Style For That Page Header
    //     // options ={{
    //     //   headerStyle :{
    //     //     backgroundColor : '#009387'
    //     //   },
    //     //   headerTintColor:'#fff',
    //     //   headerTitleStyle :{
    //     //     fontWeight :'bold'
    //     //   }
    //     // }}

    //     //Change Title Page
    //     options ={{title:'Main Page'}}
    //     />
    //     <Stack.Screen name="Details" component={Details} />
    //   </Stack.Navigator> */}
   


    // </NavigationContainer>
    // </AuthContext.Provider>
  );
}

export default App;
