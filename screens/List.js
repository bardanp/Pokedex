import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from "react-native";

import { POKEMON } from "../assets/pokemon_data";
import { TextInput } from 'react-native-gesture-handler';
import Card from "../components/Card"; 

function List(props) {
  const [filter, setFilter] = useState("");
  const [display, setDisplay] = useState(POKEMON);

  const updateFilter = (txt) => {
    setFilter(txt);
    let filterPokemon = POKEMON.filter(t => t.name.toLowerCase().includes(txt.toLowerCase()));
    setDisplay(filterPokemon);


  }

  const clearFilter = () => {
    setFilter("");
    setDisplay(POKEMON);
  }


  const renderCard = ({ item }) => (
    <Card 
      pokemon={item} 
      onPress={() => props.navigation.navigate("Details", { pokemon: item })}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.filterInput} onChangeText={updateFilter}>{filter}</TextInput>
        <Button title='Clear' onPress={clearFilter}/>
      </View>


      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        data={display}
        renderItem={renderCard}
        style={{ width: '100%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    filterInput: {
      backgroundColor: 'white',
      borderWidth: 2,
      borderRadius: 10,
      borderColor: 'black',
      padding: 8,
      flex: 1,
    }
});

export default List;
