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
  const [accumulatedData, setAccumulatedData] = useState({
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0], // initializing spending for each day with 0
      },
    ],
  });

  useEffect(() => {
    // Update the accumulated spending data when formData changes
    if (formData) {
      const newDataArray = [...accumulatedData.datasets[0].data];

      newDataArray[formData.date] += formData.amount;

      // Update the accumulatedData state only if the new data is different
      if (
        JSON.stringify(newDataArray) !==
        JSON.stringify(accumulatedData.datasets[0].data)
      ) {
        setAccumulatedData(prevState => ({
          ...prevState,
          datasets: [
            {
              ...prevState.datasets[0],
              data: newDataArray,
            },
          ],
        }));
      }
    }
    //formData is a dependency for this effect which means the effect will run whenever formData changes
  }, [formData]);

  const handleReset = () => {
    setAccumulatedData({
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      datasets: [
        {
          data: [0, 0, 0, 0, 0, 0, 0], // Reset spending for each day to 0
        },
      ],
    });
    // Additionally, you might want to reset any other related state here, if necessary
  };

  return (
    <View style={DashboardStyles.container}>
      <Text style={DashboardStyles.title}>📊 Weekly $ Analytics 📊</Text>
      {/* Bar chart */}
      <View style={DashboardStyles.chartContainer}>
        <BarChart
          data={accumulatedData}
          width={Dimensions.get('window').width - 50}
          height={Dimensions.get('window').height - 350}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#F3FDF3',
            backgroundGradientFrom: '#F3FDF3',
            backgroundGradientTo: '#F3FDF3',
            decimalPlaces: 2, // optional, defaults to 2dp
            barPercentage: 1, // Bar width as a percentage of the available space
            color: (opacity = 1) => `rgba(2, 48, 32, ${opacity})`, // Set the color of the bars
            labelColor: (opacity = 1) => `rgba(2, 48, 32, ${opacity})`, // Set the color of the labels
            style: {
              borderRadius: 16, // Optional: Set the bar chart background to rounded corners
            },
            propsForLabels: {
              fontSize: 14,
              fontWeight: 'bold',
            },
          }}
          fromZero // Start Y-axis from 0
          verticalLabelRotation={90} // Rotate the labels on the Y-axis
          showValuesOnTopOfBars // Show bar values on top of each bar
        />
      </View>
      <TouchableOpacity onPress={handleReset} style={DashboardStyles.button}>
        <Text style={DashboardStyles.buttonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;
