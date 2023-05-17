import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
interface SearchBarProps {
  fundjson: {
    fundName: string;
    currentValue: string;
    investedValue: string;
    gainLoss: string;
    img: string;
  }[];
  setFilteredData: any;
}
const SearchBar: React.FC<SearchBarProps> = ({fundjson, setFilteredData}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const newData = fundjson.filter(item => {
      const itemData = item.fundName.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://assets.stickpng.com/images/585e4ae1cb11b227491c3393.png',
        }}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder={`Search mutual funds`}
        onChangeText={handleSearch}
        placeholderTextColor="#A8A8A8"
        value={searchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#A8A8A8',
    borderRadius: 30,
    paddingHorizontal: 10,
    margin: 25,
  },
  input: {
    height: 45,
    color: '#fff',
    marginLeft: 30,
  },
  image: {
    position: 'absolute',
    top: 15,
    left: 15,
    height: 15,
    width: 15,
  },
});

export default SearchBar;
