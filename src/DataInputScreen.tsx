import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DataInputStyles from './styles/DataInputStyles';
// Import the useNavigation hook from @react-navigation/native
import {useNavigation} from '@react-navigation/native';

const DataInputScreen: React.FC = () => {
  //navigation is a hook that gives you access to the navigation object. This is used to navigate between screens
  const navigation = useNavigation();
  // State to store the input value
  const [data, setData] = useState('');
  // State to store the date value
  const [date, setDate] = useState(new Date());
  // State to store the visibility of the date picker
  const [showDatePicker, setShowDatePicker] = useState(false);
  // Function to handle date change
  const onDateChange = (event: Event, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    // Hide the date picker
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (!data.trim()) {
      Alert.alert('Error', 'Please enter the amount');
      return;
    }
    // Check if a date is selected
    if (!date) {
      Alert.alert('Error', 'Please select a date');
      return;
    }

    const amount = parseFloat(data); // Use parseFloat if you want to accept decimal amounts
    // Check if amount is a number and not NaN
    if (isNaN(amount)) {
      Alert.alert('Error', 'Please enter a valid amount');
      return;
    }
    // Handle the data here
    console.log('Amount:', amount);
    console.log('Date:', date.getDay());
    const formData = {
      amount: amount,
      date: date.getDay(),
    };
    navigation.navigate('Dashboard', {formData});
    // Reset input field or navigate to another screen upon successful submission
    setData('');
  };

  return (
    <View style={DataInputStyles.container}>
      <Text style={DataInputStyles.title}>💸 Track Your Spending 💸</Text>
      <Text style={DataInputStyles.second_title}>Enter Spending Amount</Text>
      <View style={DataInputStyles.inputContainer}>
        <Text style={DataInputStyles.dollarSign}>$</Text>
        <TextInput
          onChangeText={text => setData(text)}
          keyboardType="numeric"
          value={data}
          placeholder="Enter Amount"
          style={[DataInputStyles.input, {flex: 1}]} // Ensure the input field takes up remaining space
        />
      </View>
      <>
        <TouchableOpacity
          onPress={showDatepicker}
          style={DataInputStyles.dateButton}>
          <Text style={{color: '#FFFFFF', fontSize: 18}}>Pick a Date</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            style={DataInputStyles.dateButtonPicker}
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onDateChange}
          />
        )}
      </>
      <TouchableOpacity onPress={handleSubmit} style={DataInputStyles.button}>
        <Text style={{color: '#FFFFFF', fontSize: 18}}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DataInputScreen;
