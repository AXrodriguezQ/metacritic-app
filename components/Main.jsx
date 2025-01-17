import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimateGameCard } from './GameCard';
import { Logo } from './Logo';

export default function Main() {

  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    })
  }, [])

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <View style={{ marginBottom: 20 }}>
            <Logo/>
        </View>
      {
        games.length === 0 
        ? <ActivityIndicator color={'#fff'} size={'large'} />
        : (
            <FlatList
                data={games}
                keyExtractor={game => game.slug}
                renderItem={({ item, index }) => <AnimateGameCard game={item} index={index} />}
            />
        )
      }
    </View>
  );
}
