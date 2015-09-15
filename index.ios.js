/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var TopicList = require('./topicList');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var cnode = React.createClass({
  render: function() {
    return (
      <NavigatorIOS style={styles.container}
      initialRoute={{
        component: TopicList,
        title: 'cnode',
        passProps: { myProp: 'foo' },
      }}/>
    );
  }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

AppRegistry.registerComponent('cnode', () => cnode);
