import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './src/components/Greeting';
import Input from './src/components/Input';
import Layout from './src/components/Layout';
import List from './src/components/List';

class App extends Component {
  // state = {
  //   greeting: 'Selamat Datang. Welcome'
  // }

  render() {
    return (
      // <View style = {styles.container}>
      //   {/* <Greeting text={this.state.greeting} />
      //   <Text>{this.state.greeting}</Text>
      //   < Input /> */}
      //   {/* < Layout /> */}
        
      // </View>
      < List />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;