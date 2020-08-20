import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen
        name='Quiz'
        component={Quiz}
        options={{
          title: 'Swift Quiz',
          headerShown: true,
          headerTintColor: '#FF4800',
          headerLeft: () => '',
          headerStyle: {
            backgroundColor: '#FFFFFF',
            shadowRadius: 0,
            shadowOffset: {
              height: 0
            }
          }
        }}
      />
      <Stack.Screen
        name='Result'
        component={Result}
        options={{
          title: 'Resultado',
          headerShown: true,
          headerTintColor: '#FFF',
          headerLeft: () => '',
          headerStyle: {
            backgroundColor: '#FF4800'
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
