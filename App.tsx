import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SearchBar from './android/app/src/components/SearchBar';
import Money from './android/app/src/components/Money';
import HorizontalBar from './android/app/src/components/HorizontalBar';
import ScrollMenu from './android/app/src/components/ScrollMenu';
import Card from './android/app/src/components/Card';
import Loader from './android/app/src/components/Loader';
import Count from './android/app/src/components/Count';

const fundjson = require('../testScreen/android/app/src/funds.json');

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState<
    {
      fundName: string;
      currentValue: string;
      investedValue: string;
      gainLoss: string;
      img: string;
    }[]
  >(fundjson);
  try {
    fetch('https://anapioficeandfire.com/api/houses/1').then(res => {
      if (res.status === 200) setIsLoading(false);
    });
  } catch (err) {
    console.log(err);
  }
  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
          <View>
            <View style={styles.flex}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://www.nicepng.com/png/full/266-2660273_expand-slideshow-white-back-icon-png.png',
                }}
              />
              <Text style={styles.text}> Mutual Funds </Text>
            </View>
            <View style={styles.search}>
              <SearchBar
                fundjson={fundjson}
                setFilteredData={setFilteredData}
              />
            </View>
            <Money />
            <View style={styles.container}>
              <HorizontalBar />
            </View>
            <ScrollMenu />
            <Count />
            <View>
              <ScrollView showsHorizontalScrollIndicator={false}>
                <FlatList
                  data={filteredData}
                  renderItem={obj => <Card data={obj.item} />}
                />
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    letterSpacing: 1,
  },
  icon: {
    marginTop: 5,
    width: 20,
    height: 15,
    marginRight: 110,
    resizeMode: 'contain',
  },
  flex: {
    padding: 20,
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  search: {
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
