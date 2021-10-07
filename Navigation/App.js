import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({navigation}) => {
  return (
    <View style={Styles.MainPageView}>
    <Text>Home Page </Text>
    <Button title = "Go To Details" 
      onPress={() => navigation.navigate('Details')}
    />
    </View>
  );
};

const Styles = StyleSheet.create({
  MainPageView :{
    flex:1,
    justifyContent : 'center',
    alignItems:'center'
  },
});

const Details = ({navigation}) => {
  return (
    <View style={Styles.MainPageView}>
    <Text>Details</Text>
        <Button title = "Go To Details ... Again" 
      onPress={() => navigation.push('Details')}
    />
        <Button title = "Go To Home" 
      onPress={() => navigation.navigate('Home')}
    />
        <Button title = "Go Back" 
      onPress={() => navigation.goBack()}
    />
        <Button title = "Go To First Screen" 
      onPress={() => navigation.popToTop()}
    />
    </View>
  );
};

const Stack = new createNativeStackNavigator();
const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
