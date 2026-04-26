import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import LandingScreen from './screens/LandingScreen'
import FeedScreen from './screens/FeedScreen'
import AddScreen from './screens/AddScreen'
import { verifyFirebaseConnectivity, verifyFirebaseInit } from './firebase/firebaseConfig'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#4a3d6b' } }}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  const [firebaseStatus, setFirebaseStatus] = useState('Checking Firebase...')

  useEffect(() => {
    const runFirebaseChecks = async () => {
      const initOk = verifyFirebaseInit()

      if (!initOk) {
        setFirebaseStatus('Firebase init failed ❌')
        Alert.alert('Firebase error', 'Initialization failed. Check your Firebase env vars.')
        return
      }

      const connectivityOk = await verifyFirebaseConnectivity()
      setFirebaseStatus(connectivityOk ? 'Firebase ready ✅' : 'Firebase connectivity failed ❌')

      if (!connectivityOk) {
        Alert.alert('Firebase error', 'Connectivity check failed. Check internet and Firebase setup.')
      }
    }

    void runFirebaseChecks()
  }, [])

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>

      <View style={styles.firebaseStatusBadge} pointerEvents="none">
        <Text style={styles.firebaseStatusText}>{firebaseStatus}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firebaseStatusBadge: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#00000099',
  },
  firebaseStatusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
})