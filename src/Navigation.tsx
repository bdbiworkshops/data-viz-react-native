import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DataInputScreen from './DataInputScreen';
import DashboardScreen from './DashboardScreen';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DataInputScreen"
        component={DataInputScreen}
        options={{title: 'New Entry'}}
      />
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{title: 'Dashboard'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
