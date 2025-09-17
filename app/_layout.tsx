import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName='information4'>
        <Stack.Screen name='index' options={{headerShown: false}} />
        <Stack.Screen name='how-it-works' options={{headerShown: false}} />
        <Stack.Screen name='information' options={{headerShown: false}} />
        <Stack.Screen name='information2' options={{headerShown: false}} />
        <Stack.Screen name='information3' options={{headerShown: false}} />
        <Stack.Screen name='information4' options={{headerShown: false}} />
        <Stack.Screen name='information5' options={{headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
