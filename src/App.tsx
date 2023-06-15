import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
      <NativeBaseProvider>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar />
        </View>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
