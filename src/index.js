import '~/config/DevToolsConfig';
import '~/config/ReactotronConfig';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>APP</Text>
  </View>
);

export default App;
