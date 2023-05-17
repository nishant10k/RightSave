import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Count = () => {
  return (
    <View style={styles.flex}>
      <Text style={styles.text}>4 Funds</Text>
      <Text style={[styles.text, {color: '#79ea86'}]}>Filter & Sort</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: 'bold',
    opacity: 0.5,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
  },
});
export default Count;
