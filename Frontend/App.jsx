import { StyleSheet, Text, View } from 'react-native';
import { useFonts, AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface';
import { PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';

import AppNavigator from './src/app/navigation/AppNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
