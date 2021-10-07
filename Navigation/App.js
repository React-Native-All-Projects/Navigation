import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import icons from 'react-native-vector-icons/Ionicons';

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

const HomeStock = new createNativeStackNavigator();
const DetailsStock = new createNativeStackNavigator();

const Stack = new createNativeStackNavigator();
const Drawer = createDrawerNavigator();


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
          //Error
          // headerLeft:()=>(
          //   // <Icon.Button name='ios-menu' size={25}></Icon.Button>
          //   // <Icon.Button name='ios-menu' size={25} backgroundColor='red' onPress={()=>navigation.openDrawer()}></Icon.Button>
          // )
    }}
      >
        <Stack.Screen name="Home" component={Home} 
        />
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

const App = () =>{
  return (
    <NavigationContainer>

    {/*---------------------------------------------------------------------------- Lazy Loading */}
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStockScreen} />
        <Drawer.Screen name="Details" component={DetailsStockScreen} />
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
