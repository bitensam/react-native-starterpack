import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useCombinedStore } from './store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function App() {
  const pokemonList = useCombinedStore(state => state.pokemon);

  return (
    <SafeAreaProvider style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar />
    </SafeAreaProvider>
  );
}
