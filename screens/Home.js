import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

function Home(props) {

  const goToPokemonList = () => {
    props.navigation.navigate("PokeDex");
  };

  const goToFavorites = () => {
    props.navigation.navigate("Favorites");
  };

  const goToSettings = () => {
    props.navigation.navigate("Settings");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the         PokeDex</Text>
      <Pressable style={styles.button} onPress={goToPokemonList}>
        <Text style={styles.buttonText}>View PokeDex</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={goToFavorites}>
        <Text style={styles.buttonText}>View Favorites</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={goToSettings}>
        <Text style={styles.buttonText}>Settings</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 40,
    color: '#333',
  },
  button: {
    backgroundColor: '#6390F0',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
