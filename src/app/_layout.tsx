import { useFonts } from 'expo-font';
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from '.';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  //Font
  const [loaded] = useFonts({
    Zalando: require('../../assets/fonts/ZalandoSans.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      < ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme
      }>
        <HomeScreen />
      </ThemeProvider >
    </SafeAreaProvider>
  );
}
