/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
} = React;

var publicTopic = React.createClass({
    
render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {'发布主题(开发中)'}
        </Text>
      </View>
    );
},

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height:80,
    },

    title:{
      fontFamily: 'Cochin',
    },
});

module.exports = publicTopic;
