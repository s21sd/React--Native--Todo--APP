import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, StatusBar, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './FirebaseAuth';
const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const hadleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        // console.log(user.email)
        // alert("Login successful");
        ToastAndroid.show('Login successful', ToastAndroid.SHORT);
        navigation.navigate('MainScreen');

      })
    // .catch((console.error()));

  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <StatusBar style="light" />
      <Image source={require('../SRC/img/leaves.jpg')} style={{ position: 'absolute', width: '100%', height: '100%' }} blurRadius={50} />
      <View>
        <Text style={{ fontFamily: 'Roboto', fontSize: 28, fontWeight: '500', color: '#ffffff', margin: 30 }}>Login</Text>
        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, margin: 25 }}>
          <MaterialIcons name="alternate-email" size={24} color="black" style={{ marginRight: 5 }} />
          <TextInput onChangeText={text => setEmail(text)} placeholder='Email ID' style={{ flex: 1, paddingVertical: 0 }} keyboardType="email-address" />
        </View>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, margin: 25 }}>
          <Ionicons name="lock-closed" size={24} color="black" />
          <TextInput onChangeText={text => setPassword(text)} placeholder='Password' style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} />

          <TouchableOpacity onPress={() => { }}>
            <Text style={{ color: '#ffffff', fontWeight: '700' }}>Forgot?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={hadleLogin} style={{ backgroundColor: 'black', padding: 20, margin: 20, borderRadius: 10, marginBottom: 30 }}>
          <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 16, color: '#ffffff' }}>Login</Text>
        </TouchableOpacity>


        <Text style={{ textAlign: 'center', color: '#edebe4', marginBottom: 30 }}>Or, login with...</Text>

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

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={{ color: '#ffffff', fontWeight: '700' }}>  Register</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
