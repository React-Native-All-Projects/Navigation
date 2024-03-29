import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


const SignUpScreen = ({navigation}) =>{

    
        const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const ChangeUserName = (UserName) => {
        if(UserName.length != 0){
            setData({
                ... data,
                username : UserName,
                check_textInputChange : true
            })
        }else{
            setData({
                ... data,
                username : UserName,
                check_textInputChange : false
            })
        }
    }

    const ChangePassword = (Password) =>{
        setData({
            ... data,
            password : Password
        })
    }
    const ChangeConfirmPassword = (Password) =>{
        setData({
            ... data,
            confirm_password : Password
        })
    }
        const ChangePasswordTextStatus = () =>{
        setData({
            ... data,
            secureTextEntry : !data.secureTextEntry
        })
    }
            const ChangeConfirmPasswordTextStatus = () =>{
        setData({
            ... data,
            confirm_secureTextEntry : !data.confirm_secureTextEntry
        })
    }


    return (
      <ScrollView style={styles.container}>
                <StatusBar backgroundColor='#fff' barStyle="light-content"/>

          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now</Text>
        </View>

        
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer]}
        >
            <Text style={[styles.text_footer]}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    // color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[styles.textInput]}
                    autoCapitalize="none"
                    onChangeText= {(UserName) => ChangeUserName(UserName)}
                />
                            {data.check_textInputChange ? 
                            <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
             : null}
            </View>

            <Text style={[styles.text_footer, {
                // color: colors.text,
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    // color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    style={[styles.textInput]}
                    autoCapitalize="none"
                    secureTextEntry = {data.secureTextEntry}
                    onChangeText = {(Password)=>{ChangePassword(Password)}}
                />
                <TouchableOpacity
                   onPress={ ChangePasswordTextStatus}
                >
                                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>

                        <Text style={[styles.text_footer, {
                // color: colors.text,
                marginTop: 35
            }]}>Confirm Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    // color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Confirm Your Password"
                    placeholderTextColor="#666666"
                    style={[styles.textInput]}
                    autoCapitalize="none"
                    secureTextEntry = {data.confirm_secureTextEntry}
                    onChangeText = {(Password)=>{ChangeConfirmPassword(Password)}}
                />
                <TouchableOpacity
                   onPress={ ChangeConfirmPasswordTextStatus}
                >
                                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            

            <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {}}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </ScrollView>
    )
}

export default SignUpScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });

