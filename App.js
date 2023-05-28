import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const apiUrl = Constants.expoConfig.extra.apiUrl;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{apiUrl}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
