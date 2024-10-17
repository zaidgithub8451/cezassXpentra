import { Image, Text, Pressable, View, StyleSheet, TouchableOpacity, Button, StatusBar } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import homescreenImage from "../assets/homescreen.png"
import { TextInput } from 'react-native-paper';

export default function Login() {
    const navigation = useNavigation()

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: '#1C396C' }}>
            <StatusBar backgroundColor={'#1C396C'} />
            <View style={{ alignItems: 'center', justifyContent: "center", marginTop: 30 }}>
                <Image
                    style={{
                        width: 300,
                        height: 300
                    }}
                    source={homescreenImage}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    label="User ID"
                    value={userId}
                    onChangeText={setUserId}
                    style={styles.input}
                    mode="outlined"
                    outlineStyle={{
                        borderWidth: 0,
                        borderBottomWidth: 1,
                        backgroundColor: 'white',
                        marginHorizontal: 10
                    }}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    right={<TextInput.Icon icon="eye" onPress={() => setShowPassword(!showPassword)} />}
                    style={styles.input}
                    mode="outlined"
                    outlineStyle={{
                        borderWidth: 0,
                        borderBottomWidth: 1,
                        backgroundColor: 'white',
                        marginHorizontal: 10
                    }}

                />
                <Pressable style={{ marginLeft: 35, marginTop: 40 }} onPress={() => navigation.navigate('ForgetPassword')}>
                    <Text style={{ color: '#3A69B2' }}>Forgot your password?</Text>
                </Pressable>

                <Pressable style={{ width: '100%', backgroundColor: '#707070', height: 50, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0 }}>
                    <Text style={{color: 'white'}}>Log In</Text>
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
        borderWidth: 0,
        marginHorizontal: 20
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