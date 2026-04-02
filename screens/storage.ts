import AsyncStorage from '@react-native-async-storage/async-storage'
import { Movie } from '../models/Movie'

const KEY = 'spookies_movies'

export async function getMovies(): Promise<Movie[]> {
  const raw = await AsyncStorage.getItem(KEY)
  return raw ? JSON.parse(raw) : []
}

export async function saveMovie(movie: Movie): Promise<void> {
  const existing = await getMovies()
  const updated = [movie, ...existing]
  await AsyncStorage.setItem(KEY, JSON.stringify(updated))
}