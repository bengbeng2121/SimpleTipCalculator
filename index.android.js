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
            <Calculator />
        );
    }
}

AppRegistry.registerComponent('SimpleTipCalculator', () => SimpleTipCalculator);
