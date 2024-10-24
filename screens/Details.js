import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { getBackground } from '../utils/getBackground';
import { useLayoutEffect } from 'react';
import FavButton from '../components/favButton';

function Details(props) {
  const { pokemon } = props.route.params;
  const backgroundColor = getBackground(pokemon.types[0].name);

  const handleButton = () => {
    console.log("Clicked")
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return <FavButton icon="heart-outline" color="red" onPress={handleButton} />;
      },
    });
  }, [props.navigation]);

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: pokemon.image }} />
        <Text style={styles.name}>{pokemon.name}</Text>
        <View style={styles.typesContainer}>
          {pokemon.types.map((type, index) => (
            <View key={index} style={styles.typeBadge}>
              <Text style={styles.typeText}>{type.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  image: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
  typesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
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
  typeText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Details;
