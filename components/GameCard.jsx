import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

export function GameCard({ game }) {
    return (
        <View key={game.slug} style={styles.card}>
            <Image source={{ uri: game.image }} style={styles.image} />
            <Text style={styles.title} >{game.title}</Text>
            <Text style={styles.description} >{game.description}</Text>
            <Text style={styles.score} >{game.score}</Text>
        </View>
    )
}

export function AnimateGameCard({ game, index }) {

    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 500,
            useNativeDriver: true
        }).start();
    },[ opacity, index ])

    return (
        <Animated.View style={{ opacity }} >
            <GameCard game={game} />
        </Animated.View>
    )

}

const styles = StyleSheet.create({
    card: {
      marginBottom: 42,
    },
    image: {
      width: 107,
      height: 147,
      borderRadius: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      color: '#fff',
    },  
    description: {
      fontSize: 16,
      color: '#eee',
    },
    score: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'green',
      marginBottom: 10,
    },
});
  
