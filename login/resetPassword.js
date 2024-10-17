import { Image, Text, Pressable, View, StyleSheet , StatusBar} from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import loginSuccessful from "../assets/loginSuccessful.png"
import successTick from "../assets/successTick.png"
import tick from "../assets/Tick.png"
import { TextInput } from 'react-native-paper';

export default function Login() {
    const navigation = useNavigation()

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const checkPassword = (newPass, confirmPass) => {
        if (newPass != confirmPass) {
            setShowErrorMessage(true)
        }
        else {
            setShowSuccessMessage(true)
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#1C396C' }}>
                        <StatusBar backgroundColor={'#1C396C'}/>
            <View style={{ alignItems: 'center', justifyContent: "center", marginTop: 30 }}>
                <Image
                    style={{
                        width: 300,
                        height: 300
                    }}
                    source={loginSuccessful}
                    resizeMode="contain"
                />
                <Text style={{ color: 'white', fontSize: 15, marginHorizontal: 25, marginVertical: 15 }}>It is mandatory for you to set a new password, which is not the same as the password provided by the admin.</Text>
            </View>
            
            <View style={styles.container}>
                {
                    showSuccessMessage ? 
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                    style={{
                        width: 60,
                        height: 60,
                        marginVertical: 30
                    }}
                    source={successTick}
                    resizeMode="contain"
                />
                <Text style={{color: '#313131', fontSize: 20, marginBottom: 10}}>Password reset successfully!</Text>
                <Text>Your password has been successfully reset.</Text>
                <Text>Click below to Login with new credential!</Text>
                    </View> 
                    :
                    <>
                    <Text style={{ color: '#1D1D1D', fontSize: 18, marginLeft: 20 }}>Set new password?</Text>
                    <TextInput
                        label="Old password"
                        value={oldPassword}
                        onChangeText={setOldPassword}
                        secureTextEntry={!showOldPassword}
                        right={<TextInput.Icon icon="eye" onPress={() => setShowOldPassword(!showOldPassword)} />}
                        style={[styles.input, { marginTop: 20 }]}
                        mode="outlined"
                        outlineStyle={{
                            borderWidth: 0,
                            borderBottomWidth: 1,
                            backgroundColor: 'white',
                            borderColor: showErrorMessage ? 'red' : '',
                            marginHorizontal: 15,
                        }}
                    />
                    <TextInput
                        label="New password"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry={!showNewPassword}
                        right={<TextInput.Icon icon="eye" onPress={() => setShowNewPassword(!showNewPassword)} />}
                        style={styles.input}
                        mode="outlined"
                        outlineStyle={{
                            borderWidth: 0,
                            borderBottomWidth: 1,
                            backgroundColor: 'white',
                            borderColor: showErrorMessage ? 'red' : '',
                            marginHorizontal: 15
                        }}
                    />
                    <TextInput
                        label="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!showConfirmPassword}
                        right={<TextInput.Icon icon="eye" onPress={() => setShowConfirmPassword(!showConfirmPassword)} />}
                        style={styles.input}
                        mode="outlined"
                        outlineStyle={{
                            borderWidth: 0,
                            borderBottomWidth: 1,
                            backgroundColor: 'white',
                            borderColor: showErrorMessage ? 'red' : '',
                            marginHorizontal: 15
                        }}
    
                    />
                    {
                    oldPassword.length > 0 && newPassword.length > 0 && confirmPassword.length > 0 &&
                        newPassword === confirmPassword ?
                            <View style={{ flexDirection: 'row', alignItems: 'center' , marginLeft: 20, marginTop: 15}}>
                                <Image
                                    style={{
                                        width: 25,
                                        height: 30
                                    }}
                                    source={tick}
                                    resizeMode="contain"
                                />
                                <Text style={{ color: '#1D1D1D', fontSize: 14, marginLeft: 5 }}>Allow user to set their own password on first login.</Text></View> : null
                    }
    
                    {
                        showErrorMessage ? <Text style={{ color: '#FF0001', fontSize: 14, marginLeft: 20 }}>The passwords do not match</Text> : null
                    }
                                        </>
                }
                <Pressable onPress={() => checkPassword(newPassword, confirmPassword)} disabled={oldPassword.length === 0 || newPassword.length != confirmPassword.length} style={{ width: '100%', backgroundColor: oldPassword.length > 0 && newPassword.length === confirmPassword.length ? '#69B76F' : '#707070', height: 50, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0 }}>
                    <Text style={{ color: 'white' }}>{showSuccessMessage ? 'Log In' : 'Set new password'}</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingTop: 30

    },
    form: {
        width: '90%',
        maxWidth: 400,
        backgroundColor: 'white',
        padding: 20,
    },
    input: {
        marginBottom: 10,
    },
    forgotPassword: {
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: '#4a90e2',
    },
    button: {
        marginTop: 10,
        backgroundColor: '#808080',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});