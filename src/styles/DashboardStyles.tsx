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
  button: {
    width: '20%', // Adjust width relative to container for better aesthetics
    height: 50, // Increased button height for a better touch area
    justifyContent: 'center', // Vertically center the text inside the button
    alignItems: 'center', // Horizontally center the text
    backgroundColor: '#C70039', // Set button color to Dodger Blue
    borderRadius: 25, // Rounded corners for the button
    marginTop: 10, // Added margin top for spacing from the input field
    shadowColor: '#000', // Shadow for button to elevate it from the background
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.10,
    shadowRadius: 3,
  },
  // Add this new style to your existing styles
  chartContainer: {
    paddingVertical: 25, // Adjust the padding value as needed
    backgroundColor: 'transparent', // Optional: Set the background to transparent if the chart should have no color
    borderRadius: 16, // Optional: If you want rounded corners for the chart background
  },
  buttonText: {
    color: '#FFFFFF', // Set button text color to white
    fontSize: 18, // Set button text size
    fontWeight: 'bold', // Set button text to bold
  }
});
