import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { getMovies } from './storage'
import { Movie } from '../models/Movie'
import { useFonts } from 'expo-font'
import { GHOST } from './Theme.style'
import {s} from './FeedScreen.style'



function MovieCard({ movie }: { movie: Movie }) {
  const date = new Date(movie.watchedAt).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  })

  return (
    <View style={s.card}>
      <View style={s.cardTitleBar}>
        <Text style={s.cardTitleText} numberOfLines={1}>{movie.title}</Text>
        <Text style={s.cardGhosts}>{GHOST.repeat(movie.spooks)}</Text>
      </View>
      <View style={s.cardBody}>
        <View style={s.cardMeta}>
          <Text style={s.cardMetaText}>logged by: {movie.addedBy}</Text>
          <Text style={s.cardMetaText}>{date}</Text>
        </View>
        {movie.note && (
          <View style={s.noteBox}>
            <Text style={s.noteText}>"{movie.note}"</Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default function FeedScreen() {
  const [movies, setMovies] = useState<Movie[]>([])

  const [fontsLoaded] = useFonts({
    VT323: require('../assets/VT323-Regular.ttf'),
  })

  useFocusEffect(
    useCallback(() => {
      getMovies().then(setMovies)
    }, [])
  )

  if (!fontsLoaded) return null

  return (
    <View style={s.bg}>
      <View style={s.window}>

        <View style={s.titleBar}>
          <Text style={s.titleBarText}>{GHOST} spookies — the vault</Text>
          <View style={s.titleBtns}>
            <View style={s.titleBtn}><Text style={s.titleBtnText}>_</Text></View>
            <View style={s.titleBtn}><Text style={s.titleBtnText}>□</Text></View>
            <View style={s.titleBtn}><Text style={s.titleBtnText}>✕</Text></View>
          </View>
        </View>

        <View style={s.statusBar}>
          <View style={s.statusCell}>
            <Text style={s.statusText}>{movies.length} movies logged</Text>
          </View>
          <View style={s.statusCell}>
            <Text style={s.statusText}>
              avg: {movies.length
                ? (movies.reduce((a, m) => a + m.spooks, 0) / movies.length).toFixed(1)
                : '--'} {GHOST}
            </Text>
          </View>
        </View>

      </View>

      <FlatList
        data={movies}
        keyExtractor={(m) => m.id}
        renderItem={({ item }) => <MovieCard movie={item} />}
        contentContainerStyle={s.list}
        ListEmptyComponent={
          <View style={s.empty}>
            <Text style={s.emptyText}>no movies logged yet...</Text>
            <Text style={s.emptyText}>go watch something scary {GHOST}</Text>
          </View>
        }
      />
    </View>
  )
}