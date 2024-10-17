// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login/login';
import ResetPassword from './login/resetPassword';
import ForgetPassword from './login/forgetPassword';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown: false}} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;