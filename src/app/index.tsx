import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.header, { paddingTop: insets.top }]}>
      <Image
        source={require('../../assets/images/logo/icon-black.png')}
        style={{ width: 40, height: 40 }}
      />
      <Text style={[styles.zalandoFont, { fontSize: 28 }]}>BullForge</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 140,
    backgroundColor: '#fefb3b',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4
  },
  zalandoFont: {
    fontFamily: 'Zalando',
  }
});
