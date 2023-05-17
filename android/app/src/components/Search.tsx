import React, {useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';

interface SearchBarProps {
  jsonData: {id: number; name: string}[];
}

const SearchBar: React.FC<SearchBarProps> = ({jsonData}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState<
    {id: number; name: string}[]
  >([]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const newData = jsonData.filter(item => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  };

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          paddingHorizontal: 10,
        }}
        onChangeText={handleSearch}
        value={searchQuery}
        placeholder="Search..."
      />
      <FlatList
        data={filteredData}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
