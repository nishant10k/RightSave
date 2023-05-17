import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Money = () => {
  return (
    <>
      <View style={styles.arrange}>
        <View>
          <View style={styles.columns}>
            <Text style={styles.text}>Current Amount</Text>
            <Text style={[styles.data, {color: '#79ea86'}]}>₹12.34K</Text>
          </View>
          <View style={styles.columns}>
            <Text style={styles.text}>Returns</Text>
            <Text style={styles.data}>₹+2.00K</Text>
          </View>
        </View>
        <View>
          <View style={styles.columns}>
            <Text style={styles.text}>Amount Invested</Text>
            <Text style={styles.data}>₹10.34K</Text>
          </View>
          <View style={styles.columns}>
            <Text style={styles.text}>Absolute Growth</Text>
            <Text style={styles.data}>3.2%</Text>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
    color: '#808080',
    fontSize: 16,
    letterSpacing: 1,
    paddingLeft: 20,
    paddingBottom: 15,
  },
  data: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 24,
    letterSpacing: 1,
    paddingLeft: 20,
  },
  arrange: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginTop: 15,
  },
  columns: {
    marginBottom: 20,
    marginRight: 20,
  },
});
export default Money;
