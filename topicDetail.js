/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    WebView,
} = React;

var REQUEST_URL = 'https://cnodejs.org/topic/'

var topicDetail = React.createClass({
    getInitialState: function() {
        return {
          loaded: false,
          data:null,
        };
},

componentDidMount: function() {
  
},

render: function() {
    // if (!this.state.loaded) {
    //     return this.renderLoadingView();
    // }

    return (
        <WebView
          ref={'webview'}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          //html={this.state.data.content}
          url = {REQUEST_URL+this.props.topicId}
          startInLoadingState={true}
        />
    );
},

renderLoadingView: function() {
    return (
        <View style={styles.container}>
            <Text>
                加载中...
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
});

module.exports = topicDetail;
