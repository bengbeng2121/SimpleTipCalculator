/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Calculator from './app/calculator';

export default class SimpleTipCalculator extends Component {
    render() {
        return (
            <View style={{padding: 10}}>
                <Calculator />
            </View>
        );
    }
}

AppRegistry.registerComponent('SimpleTipCalculator', () => SimpleTipCalculator);
