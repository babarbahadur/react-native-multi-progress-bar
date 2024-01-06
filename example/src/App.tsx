import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import MultiProgressBar from 'react-native-multi-progress-bar';

export default function App() {
  return (
    <View>
      <SafeAreaView />
      <Text>Multi Progress Bar Example</Text>
      <MultiProgressBar
        arrayOfProgressObjects={[
          { color: 'red', value: 0.1 }, // If there are multiple bars then value should be always less than 1
          { color: 'blue', value: 0.2 }, // Sum of all the values should be less than or equal to 1
          { color: 'pink', value: 0.3 },
          { color: 'pink', value: 0.4 },
        ]}
        barContainerStyle={{ height: 50 }} // This includes changing styles of the container of the bar for example height, background colour.
        barStyle={{ borderRadius: 30 }} // This includes changing styles of the bar for ex border radius.
      />
    </View>
  );
}
