import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import DashboardStyles from './styles/DashboardStyles';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParamList'; // Import the type for your stack navigator

// Import the BarChart component from react-native-chart-kit
import {BarChart} from 'react-native-chart-kit';

// Define the type for the route and navigation props
type DashboardScreenRouteProp = RouteProp<RootStackParamList, 'Dashboard'>;
type DashboardScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

// Define the props type for the DashboardScreen component
type Props = {
  route: DashboardScreenRouteProp;
  navigation: DashboardScreenNavigationProp;
};

// Define the DashboardScreen component
const DashboardScreen: React.FC<Props> = ({route}) => {
  // Extract the formData from the route params
  const formData = route.params.formData;

  // State to store the accumulated spending data
  //CODE HERE!

  useEffect(() => {
    // Update the accumulated spending data when formData changes
    //CODE HERE!
    //formData is a dependency for this effect which means the effect will run whenever formData changes
  }, [formData]);

  const handleReset = () => {
    // Reset the accumulated spending data
    //CODE HERE!
    // Additionally, you might want to reset any other related state here, if necessary
  };

  return (
    <View style={DashboardStyles.container}>
      <Text style={DashboardStyles.title}>📊 Weekly $ Analytics 📊</Text>
      {/* Bar chart */}
      <View style={DashboardStyles.chartContainer}>
        {/* CODE BAR CHART! */}
      </View>
      <TouchableOpacity onPress={handleReset} style={DashboardStyles.button}>
        <Text style={DashboardStyles.buttonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;
