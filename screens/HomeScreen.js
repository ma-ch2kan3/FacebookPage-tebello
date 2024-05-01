// HomeScreen.js
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const images = [
    require('../assets/pexels-chaikong2511-20258.jpg'),
    require('../assets/pexels-pixabay-163347.jpg'),
    require('../assets/football-7597932.jfif'),
    require('../assets/cristiano-ronaldo-8373364.jpg'),
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <ScrollView>
        {images.map((image, index) => (
          <View key={index} style={styles.storyContainer}>
            <Image source={image} style={styles.storyImage} />
            <Text style={styles.storyText}>Story {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  storyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  storyImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  storyText: {
    fontSize: 18,
  },
});

export default HomeScreen;
