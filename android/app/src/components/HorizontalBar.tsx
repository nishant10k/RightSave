import React from 'react';
import {View, StyleSheet} from 'react-native';

const HorizontalBar = () => {
  return <View style={styles.bar} />;
};
const styles = StyleSheet.create({
  bar: {
    height: 1,
    width: 375,
    backgroundColor: '#808080',
    marginBottom: 50,
    marginTop: 80,
    opacity: 0.3,
  },
});

export default HorizontalBar;
