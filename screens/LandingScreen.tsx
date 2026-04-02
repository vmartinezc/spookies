import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Image } from 'expo-image'
import { Video, ResizeMode } from 'expo-av'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function LandingScreen({ navigation }: any) {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.root, { marginBottom: -insets.bottom }]}>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={1}
        onPress={() => navigation.replace('Main')}
      >
        <Image
          source={require('../assets/vhs-shelf.jpg')}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
        />
        <Video
          source={require('../assets/vhs-static.mp4')}
          style={StyleSheet.absoluteFill}
          resizeMode={ResizeMode.COVER}
          isLooping
          isMuted={false}
          shouldPlay
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
  },
})