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
           <View style={styles.view4}>

           </View>
           <View style={styles.view5}>

           </View>
       </View>
      </View>
    );
  }
});

//column
var styles = StyleSheet.create({
    container: {
        
        //flexDirection:"column",
        flexDirection:"row",
        backgroundColor: 'red',
        //height:200,
        flex:1,
        justifyContent:"center",
    },
    view1: {
        backgroundColor: 'blue',
       // flex: 0.1,
        height:100,
        width:100,
    },
    view2: {
        backgroundColor: 'yellow',
        //flex: 0.3,
         height:100,
         width:100,
    },
    view3: {
        backgroundColor: 'green',
        //flex: 0.6,
        height:100,
        width:100,
    },
    view4: {
        backgroundColor: 'black',
        flex: 0.2,
    },
    view5: {
        backgroundColor: 'green',
        flex: 0.4,
    },

});

AppRegistry.registerComponent('cnode', () => cnode);
