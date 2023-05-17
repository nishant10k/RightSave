import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Card = ({data}: any) => {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.heading}>
          <Image
            source={{
              uri: `${data.img}`,
            }}
            style={styles.image}
          />
          <Text style={styles.fund}>{data.fundName}</Text>
        </View>
        <View style={styles.dataHeading}>
          <View>
            <Text style={styles.menu}>Invested</Text>
            <Text style={styles.data}>₹{data.investedValue}K</Text>
          </View>
          <View>
            <Text style={styles.menu}>Current Value</Text>
            <Text style={styles.data}>₹{data.currentValue}K</Text>
          </View>
          <View>
            <Text style={styles.menu}>Gain/Loss</Text>
            <Text style={styles.data}>₹{data.gainLoss}K</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0D1011',
    marginHorizontal: 22,
    marginVertical: 5,
    padding: 10,
    borderRadius: 12,
    paddingRight: 15,
  },
  image: {
    width: 50,
    height: 50,
  },
  fund: {
    fontWeight: '400',
    color: '#fff',
    fontSize: 16,
    letterSpacing: 1,
    paddingLeft: 20,
    paddingBottom: 15,
    maxWidth: 300,
    lineHeight: 22,
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dataHeading: {
    paddingTop: 25,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  menu: {
    color: '#808080',
    fontSize: 14,
    letterSpacing: 1,
    paddingRight: 20,
    paddingBottom: 15,
  },
  data: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingRight: 20,
    paddingBottom: 15,
  },
});
export default Card;
