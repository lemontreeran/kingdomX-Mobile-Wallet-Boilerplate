import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    /* tslint:disable-next-line */
    render() {
      return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* tslint:disable-next-line */
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
