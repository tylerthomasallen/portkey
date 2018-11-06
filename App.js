import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { View, StyleSheet } from 'react-native';
import RouteSearch from './src/components/route_search';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <RouteSearch />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    flex: 1
  },
  red: {
    color: 'red',
    flex: 1
  },
});

export default App;