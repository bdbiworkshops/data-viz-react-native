import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DataInputScreen from './src/DataInputScreen';
import DashboardScreen from './src/DashboardScreen';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hide the header by default
      }}>
      <Tab.Screen name="New Entry" component={DataInputScreen} />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        initialParams={{formData: {amount: '', date: ''}}}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
export default App;
