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
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <Stack>
       <Stack.Screen name="index" options={{ headerShown: false }} />
       <Stack.Screen name='how-it-works' options={{headerShown: false}} />
        <Stack.Screen name='information' options={{headerShown: false}} />
        <Stack.Screen name='information2' options={{headerShown: false}} />
        <Stack.Screen name='information3' options={{headerShown: false}} />
        <Stack.Screen name='information4' options={{headerShown: false}} />
        <Stack.Screen name='information5' options={{headerShown: false}} />
        <Stack.Screen name='information6' options={{headerShown: false}} />
        <Stack.Screen name='information7' options={{headerShown: false}} />
        <Stack.Screen name='information8' options={{headerShown: false}} />
        <Stack.Screen name='information9' options={{headerShown: false}} />
        <Stack.Screen name='information10' options={{headerShown: false}} />
        <Stack.Screen name='information11' options={{headerShown: false}} />
        <Stack.Screen name='information12' options={{headerShown: false}} />
        <Stack.Screen name='information13' options={{headerShown: false}} />
        <Stack.Screen name='information14' options={{headerShown: false}} />
        <Stack.Screen name='information15' options={{headerShown: false}} />
        <Stack.Screen name='information16' options={{headerShown: false}} />
        <Stack.Screen name='information17' options={{headerShown: false}} />
        <Stack.Screen name='information18' options={{headerShown: false}} />
        <Stack.Screen name='information19' options={{headerShown: false}} />
        <Stack.Screen name='information20' options={{headerShown: false}} />
        <Stack.Screen name='information21' options={{headerShown: false}} />
        <Stack.Screen name='information22' options={{headerShown: false}} />
        <Stack.Screen name='information23' options={{headerShown: false}} />
       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
