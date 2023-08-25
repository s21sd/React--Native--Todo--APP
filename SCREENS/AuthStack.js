import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './StackScreen';
const AuthStack = () => {

    return (
        <NavigationContainer>
            <StackScreen />
        </NavigationContainer>
    );
};
export default AuthStack;