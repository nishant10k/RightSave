import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ScrollMenu = () => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.menu}>
        <Text style={styles.text}>My Funds</Text>
        <Text style={styles.text}>Invest</Text>
        <Text style={styles.text}>Transactions</Text>
        <Text style={styles.text}>Explore</Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    letterSpacing: 1,
    paddingHorizontal: 15,
    fontWeight: 'bold',
    opacity: 0.5,
  },
  menu: {
    marginLeft: 15,
    flexDirection: 'row',
    paddingVertical: 10,
    marginTop: 40,
    marginBottom: 50,
  },
});
export default ScrollMenu;
