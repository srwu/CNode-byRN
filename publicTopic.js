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
    TextInput,
} = React;

var publicTopic = React.createClass({
    
render: function() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          placeholder="主题名"
          autoCorrect={false}
          // onFocus={() => this.updateText('onFocus')}
          // onBlur={() => this.updateText('onBlur')}
          // onChange={(event) => this.updateText(
          //   'onChange text: ' + event.nativeEvent.text
          // )}
          // onEndEditing={(event) => this.updateText(
          //   'onEndEditing text: ' + event.nativeEvent.text
          // )}
          // onSubmitEditing={(event) => this.updateText(
          //   'onSubmitEditing text: ' + event.nativeEvent.text
          // )}
          style={styles.textInput}/>

          <TextInput
          autoCapitalize="none"
          placeholder="主题名"
          autoCorrect={false}
          // onFocus={() => this.updateText('onFocus')}
          // onBlur={() => this.updateText('onBlur')}
          // onChange={(event) => this.updateText(
          //   'onChange text: ' + event.nativeEvent.text
          // )}
          // onEndEditing={(event) => this.updateText(
          //   'onEndEditing text: ' + event.nativeEvent.text
          // )}
          // onSubmitEditing={(event) => this.updateText(
          //   'onSubmitEditing text: ' + event.nativeEvent.text
          // )}
          style={styles.textInput2}/>

        
      </View>
    );
},

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        //justifyContent: 'flex-start',
    },

    textInput: {
        
        borderWidth: 0.5,
        borderColor: '#0000ff',
        padding: 20,
        fontSize: 14,
        top:84,
        left:10,
        height: 40,
        width:300,
      },

      textInput2: {
        marginTop: 100,
        borderWidth: 0.5,
        borderColor: '#ff0000',
        padding: 20,
        //flex: 1,
        fontSize: 20,
        left:10,
        height: 200,
        //marginRight:10,
        width:300,
      },
    title:{
      fontFamily: 'Cochin',
    },
});

module.exports = publicTopic;
