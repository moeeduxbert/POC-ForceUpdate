import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CodePush from 'react-native-code-push';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Text>0.1.3</Text>
    </View>
  );
};

export default CodePush(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
