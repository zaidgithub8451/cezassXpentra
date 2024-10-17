import { View, Text, Image , Pressable, StatusBar} from 'react-native'
import changePassword from "../assets/changePassword.png"
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function ForgetPassword() {
    const navigation = useNavigation()

    return (
        <Pressable onPress={() => navigation.navigate('ResetPassword')} style={{ flex: 1, backgroundColor: '#1C396C', alignItems: 'center', paddingTop: 100 }}>
                        <StatusBar backgroundColor={'#1C396C'}/>
            <Image
                style={{
                    width: 300,
                    height: 300
                }}
                source={changePassword}
                resizeMode="contain"
            />
            <View style={{paddingHorizontal: 30, alignItems: 'center', gap: 10}}>
                <Text style={{fontSize: 20, color: '#FFFFFF'}}>Contact your admin</Text>
                <Text style={{fontSize: 16, color: '#FFFFFF', textAlign: 'center'}}>Password can only be reset by your admin. Contact the admin and request them to reset your password.</Text>
                <Text style={{fontSize: 16, color: '#FFFFFF', textAlign: 'center'}}>For the admins assistance - to reset the password the admin will have to:</Text>
                <Text style={{fontSize: 16, color: '#FFFFFF', textAlign: 'center'}}>Open Q2Pay → Settings → Users → Select user → Reset password</Text>
            </View>

            <View style={{ width: '100%', backgroundColor: '#69B76F', height: 50, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0 }}>
                    <Text style={{color: 'white'}}>Log In</Text>
                </View>
        </Pressable>
    )
}