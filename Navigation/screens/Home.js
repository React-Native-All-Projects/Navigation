import React from 'react';
import {Button,StyleSheet,Text,View,} from 'react-native';

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

export default Home;
