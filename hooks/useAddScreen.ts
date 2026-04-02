import { useState } from 'react'
import { Alert } from 'react-native'
import { useFonts } from 'expo-font'
import { saveMovie } from '../screens/storage'
import { Movie } from '../models/Movie'

export function useAddScreen(navigation: any) {
  const [title, setTitle] = useState('')
  const [addedBy, setAddedBy] = useState('')
  const [spooks, setSpooks] = useState<1|2|3|4|5>(3)
  const [note, setNote] = useState('')

  const [fontsLoaded] = useFonts({
    VT323: require('../assets/VT323-Regular.ttf'),
  })

  async function handleSubmit() {
    if (!title.trim() || !addedBy.trim()) {
      Alert.alert('missing fields', 'please enter a title and your name')
      return
    }
    const movie: Movie = {
      id: Date.now().toString(),
      title: title.trim(),
      addedBy: addedBy.trim(),
      spooks,
      note: note.trim() || undefined,
      watchedAt: new Date().toISOString(),
    }
    await saveMovie(movie)
    setTitle('')
    setAddedBy('')
    setSpooks(3)
    setNote('')
    navigation.navigate('Feed')
  }

  return {
    title, setTitle,
    addedBy, setAddedBy,
    spooks, setSpooks,
    note, setNote,
    fontsLoaded,
    handleSubmit,
  }
}