import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Component1 extends React.Component{
    
    onPress(){
        console.log("pressed 1");
    }
    constructor(){
        super();
        this.state = {
            name: 'supriya',
            showName : true
        }
    }
    render(){
        let name = this.state.showName ? this.state.name : "No name";
        return (
            <View style = {styles.myview}>
                <TouchableHighlight onPress = {this.onPress}>
                    <Text style = {styles.mytext}>{this.props.value}</Text>
                </TouchableHighlight>
                <Text>{name}</Text>
            </View>
        );
    }
}

const styles = new StyleSheet.create({
    myview : {
        backgroundColor : 'red'
    },
    mytext : {
        color : 'yellow'
    }
});

AppRegistry.registerComponent('Component1', () => Component1);
