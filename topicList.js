/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
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
        if (rowId % 2) {
            return (

                    <View style={styles.container1}>
                        <Image
                            source={{uri: topic.author.avatar_url}}
                            style={styles.avatar}
                        />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{topic.title}</Text>
                            <Text style={styles.time}>{topic.last_reply_at}</Text>
                        </View>
                    </View>
                    );
        }
        else {

          return (

              <View style={styles.container2}>
                  <Image
                      source={{uri: topic.author.avatar_url}}
                      style={styles.avatar}
                  />
                  <View style={styles.rightContainer}>
                      <Text style={styles.title}>{topic.title}</Text>
                      <Text style={styles.time}>{topic.last_reply_at}</Text>
                  </View>
              </View>
              );
        }

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
