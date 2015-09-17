/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var TopicList = require('./topicList');
var publicTopic = require('./publicTopic');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var cnode = React.createClass({
  render: function() {
    return (
      <NavigatorIOS ref="nav" style={styles.container}
      initialRoute={{
          component: TopicList,
          title: 'cnode',
          passProps: { myProp: 'foo' },
          rightButtonTitle: '创建主题',
          onRightButtonPress: () => {
            this.refs.nav.navigator.push({
            title: "创建主题",
            component: publicTopic,
          });
        }
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
