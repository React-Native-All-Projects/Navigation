
import React from 'react';
import {Button,StyleSheet,Text,View,} from 'react-native';

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


export default Details;