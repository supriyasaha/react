/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

export default class test extends Component {
  render() {
        var views = [];
        for (var i = 0; i < 1000; i++) {
            views.push(<Text key={i}>Testing </Text>)
        }

        return (
            <ScrollView>
                <View >
                    {views}
                </View>
            </ScrollView>
        );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('test', () => test);
