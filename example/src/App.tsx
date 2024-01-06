import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MultiProgressBar from 'react-native-multi-progress-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView />

      <Text style={styles.heading}>React Native Multi Progress Bar</Text>
      <Text style={styles.subHeading}>react-native-multi-progress-bar</Text>
      <Text style={styles.title}>Example progress bar type 1</Text>
      <MultiProgressBar
        arrayOfProgressObjects={[
          { color: '#03045e', value: 0.1 }, // If there are multiple bars then value should be always less than 1
          { color: '#0077b6', value: 0.2 }, // Sum of all the values should be less than or equal to 1
          { color: '#00b4d8', value: 0.3 },
          { color: '#90e0ef', value: 0.4 },
        ]}
        barStyle={{ borderRadius: 30, marginBottom: 30 }}
      />

      <Text style={styles.title}>Example progress bar type 2</Text>
      <MultiProgressBar
        arrayOfProgressObjects={[
          { color: '#03045e', value: 0.2 },
          { color: '#0077b6', value: 0.1 }
        ]}
        barContainerStyle={{ marginBottom: 30, backgroundColor: '#e5e5e5' }} // This includes changing styles of the container of the bar for example height, background colour.
        barStyle={{ borderRadius: 30 }} // This includes changing styles of the bar for ex border radius.
      />

      <Text style={styles.title}>Example progress bar type 3</Text>
      <MultiProgressBar
        arrayOfProgressObjects={[
          { color: '#03045e', value: 0.1 },
          { color: '#0077b6', value: 0.2 },
          { color: '#00b4d8', value: 0.3 },
          { color: '#90e0ef', value: 0.4 },
        ]}
        barContainerStyle={{ height: 30 }}
        barStyle={{ borderRadius: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
