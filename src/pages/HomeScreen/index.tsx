import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>What would you like to order</Text>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 38,
    fontFamily: 'IBMPlexSans-Bold',
  }
})

export default App;