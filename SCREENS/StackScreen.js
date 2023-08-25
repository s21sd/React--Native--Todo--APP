import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import MainSrceen from './MainSrceen';
const Stack = createNativeStackNavigator();

const StackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={
                    {
                        headerShown: false,
                    }
                }


            />

            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={
                    {
                        headerShown: false,
                    }
                } />

            <Stack.Screen
                name="MainScreen"
                component={MainSrceen}
                options={
                    {
                        headerShown: false,
                    }
                } />
        </Stack.Navigator>

    );
};
export default StackScreen;