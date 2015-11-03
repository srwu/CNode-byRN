/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var cnode = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
       <View style={styles.view1}>
       </View>
       <View style={styles.view2}>
       </View>
       <View style={styles.view3}>
       </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        backgroundColor: 'red',
    },
    view1: {
        backgroundColor: 'blue',
        flex: 0.1,
    },
    view2: {
        backgroundColor: 'yellow',
        flex: 0.3,
    },
    view3: {
        backgroundColor: 'green',
        flex: 0.6,
    },
});

AppRegistry.registerComponent('cnode', () => cnode);
