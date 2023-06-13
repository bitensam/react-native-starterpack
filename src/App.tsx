import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useCombinedStore } from './store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const queryClient = new QueryClient();

export function App() {
  const pokemonList = useCombinedStore(state => state.pokemon);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
