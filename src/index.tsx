import React, { memo, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

interface MultiProgressBar {
  arrayOfProgressObjects: Array<arrayOfProgressObjects>;
  barContainerStyle?: any;
  barStyle?: any;
}

interface arrayOfProgressObjects {
  color: string;
  value: number;
  nameToDisplay?: string;
}

const MultiProgressBar: React.FC<MultiProgressBar> = ({
  arrayOfProgressObjects,
  barContainerStyle,
  barStyle,
}) => {
  const [fillSpace, setFillSpace] = useState(false);

  useEffect(() => {
    var sumOfPercentage = 0;
    arrayOfProgressObjects.map((item) => {
      sumOfPercentage += item.value;
    });

    if (sumOfPercentage > 1) {
      throw new Error(
        'react-native-multi-progress-bar: The sum of all the values of arrayOfProgressObjects is greater than 1. Please make sure that sum of values of the objects in arrayOfProgressObjects should not be more than 1.'
      );
    }

    if (sumOfPercentage === 1) {
      setFillSpace(true);
    }
  }, [arrayOfProgressObjects]);

  return (
    <View style={[styles.container, barContainerStyle, barStyle]}>
      {arrayOfProgressObjects.map((item, index) => {
        return (
          <View
            style={[
              styles.bar,
              barStyle,
              { backgroundColor: item.color, width: `${item.value * 100}%` },
              arrayOfProgressObjects.length > 1 &&
                arrayOfProgressObjects.length - 1 !== index &&
                styles.barWithoutRightRadius,
              !fillSpace && styles.barWithoutRightRadius,
              index > 0 && styles.barWithoutLeftRadius,
            ]}
          />
        );
      })}
    </View>
  );
};

export default memo(MultiProgressBar);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 12,
    width: '100%',
    backgroundColor: 'grey',
  },
  bar: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'green',
    zIndex: 1,
  },
  barWithoutRightRadius: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  barWithoutLeftRadius: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
