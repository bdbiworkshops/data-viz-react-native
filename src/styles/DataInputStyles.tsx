import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3FDF3', // Added a light background color
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: '#000000', // Set the color of the title to Dodger Blue
    width: '100%',
    textAlign: 'center', // Center the title text,
    fontWeight: 'bold', // Added bold font weight
  },
  second_title: {
    fontSize: 18,
    marginBottom: 20,
    color: '#097969', // Set the color of the title to Dodger Blue
  },
  input: {
    height: 50, // Made the input taller for easier touch
    borderColor: '#1E90FF', // Color of the border to Dodger Blue
    borderWidth: 2, // Made the border thicker
    borderRadius: 10, // Rounded corners for the input
    paddingHorizontal: 15, // Increased padding for the text inside
    width: '100%', // Ensure the input stretches to the container width
    backgroundColor: '#FFFFFF', // Set input background to white
    fontSize: 18, // Increased font size for better readability
  },
  button: {
    width: '30%', // Adjust width relative to container for better aesthetics
    height: 50, // Increased button height for a better touch area
    justifyContent: 'center', // Vertically center the text inside the button
    alignItems: 'center', // Horizontally center the text
    backgroundColor: '#097969', // Set button color to Dodger Blue
    borderRadius: 25, // Rounded corners for the button
    marginTop: 10, // Added margin top for spacing from the input field
    shadowColor: '#000', // Shadow for button to elevate it from the background
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Ensures vertical center alignment of children
    justifyContent: 'center', // Centers children horizontally
    width: '50%', // Adjust based on your preference
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  dollarSign: {
    fontSize: 20,
    marginRight: 5, // Adjust space between the dollar sign and the TextInput
    fontWeight: 'bold', // Make the dollar sign italic
  },
  dateButton: {
    width: '30%', // Adjust width relative to container for better aesthetics
    padding: 10, // Increased button height for a better touch area
    justifyContent: 'center', // Vertically center the text inside the button
    alignItems: 'center', // Horizontally center the text
    backgroundColor: '#808080', // Set button color to Dodger Blue
    borderRadius: 10, // Rounded corners for the button
    marginTop: 10, // Added margin top for spacing from the input field
    shadowColor: '#000', // Shadow for button to elevate it from the background
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dateButtonPicker: {
    paddingBottom: 20, // Add margin top for spacing from the button
  },
});
