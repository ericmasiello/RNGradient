/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
var LinearGradient = require('react-native-linear-gradient');

class RNGradient extends Component {
  login(){

  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.login}>
          <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
              Sign in with Facebook
            </Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    margin: 10,
    opacity: 0.8,
    backgroundColor: 'transparent'
  },
});

AppRegistry.registerComponent('RNGradient', () => RNGradient);
