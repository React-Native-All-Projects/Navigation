import React from 'react';
import {Button,StyleSheet,Text,View,StatusBar} from 'react-native';

import { useTheme } from '@react-navigation/native';

const Home = ({navigation}) => {

  const { colors } = useTheme();

    const theme = useTheme();

  return (
    <View style={Styles.MainPageView}>
            <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color: colors.text}}>Home</Text>
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
