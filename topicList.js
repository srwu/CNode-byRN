/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var topicDetail = require('./topicDetail');
var {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} = React;

var REQUEST_URL = 'https://cnodejs.org/api/v1/topics'

var topicList = React.createClass({
    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        }),
    loaded: false,
  };
},

componentDidMount: function() {
    this.fetchData();
},

fetchData: function() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
        this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.data),
        loaded: true,
        });
    })
    .done();
},

render: function() {
    if (!this.state.loaded) {
        return this.renderLoadingView();
    }

    return (
        <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTopic}
        style={styles.listView}
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

renderTopic: function(topic,sectionId,rowId) {
    return (
             <TouchableHighlight onPress={() => this.pressRow(rowId,topic)}>
                <View style={ rowId%2 ? styles.container1 : styles.container2}>
                    <Image
                        source={{uri: topic.author.avatar_url}}
                        style={styles.avatar}
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{topic.title}</Text>
                        <Text style={styles.time}>{topic.last_reply_at}</Text>
                    </View>
                </View>
             </TouchableHighlight>
            );
    },
pressRow: function(rowId,topic) {
  this.props.navigator.push({
              title: '主题详情',
              component: topicDetail,
              //backButtonTitle: '返回',
              passProps: {topicId:topic.id},
            });
},

});

var styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height:80,
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCFFCC',
        height:80,
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        marginLeft:8,
        marginBottom: 8,
        textAlign: 'left',
    },
    time: {
        marginRight:8,
        textAlign: 'right',
    },
    avatar: {
        marginLeft:8,
        width: 52,
        height: 52,
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },

});

module.exports = topicList;
