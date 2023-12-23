import React from 'react'
import { SafeAreaView, View, Text, Image, StatusBar, TextInput, ToastAndroid, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth1 } from './FirebaseAuth';
import { useState } from 'react'
const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfpassword, setCnfPassword] = useState('');
    const hadleRegister = () => {
        if (password !== cnfpassword) {
            alert("Passwords do not match");
            return;
        }
        createUserWithEmailAndPassword(auth1, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                ToastAndroid.show('Registation successful', ToastAndroid.SHORT);
                navigation.navigate('LoginScreen');

            })
            .catch((console.error()));

    }
    return (

        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <StatusBar style="light" />
            <Image source={require('../SRC/img/leaves.jpg')} style={{ position: 'absolute', width: '100%', height: '100%' }} blurRadius={50} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ fontFamily: 'Roboto', fontSize: 28, fontWeight: '500', color: '#ffffff', margin: 30 }}>Register</Text>
                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, margin: 20 }}>
                    <Entypo name="user" size={24} color="black" style={{ marginRight: 5 }} />
                    <TextInput onChangeText={text => setName(text)} placeholder='Name' style={{ flex: 1, paddingVertical: 0 }} />
                </View>

                {/* <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, margin: 20 }}>
                    <MaterialIcons name="date-range" size={24} color="black" style={{ marginRight: 5 }} />
                    <TextInput placeholder='Date of Birth' style={{ flex: 1, paddingVertical: 0 }} />
                </View> */}

                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, margin: 20 }}>
                    <MaterialIcons name="alternate-email" size={24} color="black" style={{ marginRight: 5 }} />
                    <TextInput onChangeText={text => setEmail(text)} placeholder='Email ID' style={{ flex: 1, paddingVertical: 0 }} keyboardType="email-address" />
                </View>

                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, margin: 20 }}>
                    <Ionicons name="lock-closed" size={24} color="black" />
                    <TextInput onChangeText={text => setPassword(text)} placeholder='Password' style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} />
                </View>

                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, margin: 20 }}>
                    <Ionicons name="lock-closed" size={24} color="black" />
                    <TextInput onChangeText={text => setCnfPassword(text)} placeholder='Confirm-Password' style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} />


                </View>

                <TouchableOpacity onPress={hadleRegister} style={{ backgroundColor: 'black', padding: 20, margin: 20, borderRadius: 10, marginBottom: 30 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 16, color: '#ffffff' }}>Register</Text>
                </TouchableOpacity>

                <Text style={{ textAlign: 'center', color: '#edebe4', marginBottom: 30 }}>Or, register with...</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                    <TouchableOpacity>
                        <AntDesign name="google" size={35} color='#f5f3f0' />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Entypo name="facebook" size={35} color='#f5f3f0' />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <AntDesign name="twitter" size={35} color='#f5f3f0' />
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20, marginTop: 30 }}>
                    <Text>Already, registered?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={{ color: '#ffffff', fontWeight: '700' }}>  Login</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterScreen;
