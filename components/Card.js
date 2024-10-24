import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { getBackground } from '../utils/getBackground';

function Card({ pokemon, onPress }) {
    // uses the utill function to get the background color for the card
  const backgroundColor = getBackground(pokemon.types[0].name);

  return (
    <Pressable style={[styles.card, { backgroundColor }]} onPress={() => onPress(pokemon)}>
      <Image style={styles.image} source={{ uri: pokemon.image }} />
      <Text style={styles.name}>{pokemon.name}</Text>
      <View style={styles.typesContainer}>
        {pokemon.types.map((type, index) => (
          <View key={index} style={styles.typeBadge}>
            <Text >{type.name}</Text>
          </View>
        ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 5,
    borderRadius: 15,
  },
  image: {
    width: 120,
    height: 120,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  typesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 5,
  },
  typeBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    marginVertical: 3,
  },
});

export default Card;
