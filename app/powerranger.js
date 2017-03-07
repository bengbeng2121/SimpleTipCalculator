/**
 * Created by binhlt on 07/03/2017.
 */

import React, {Component} from 'react';
import {Navigator, Text} from 'react-native';
import CustomNavBar from './customnavbar';
import Calculator from './calculator';
import Setting from './setting';

export default class PowerRanger extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{id: 'CalculatorPage'}}
                renderScene={this.renderScene.bind(this)}
                configureScene={this.configureScene.bind(this)}
                navigationBar={CustomNavBar}/>
        );
    }

    renderScene(route, navigator) {
        switch (route.id) {
            case 'CalculatorPage':
                return <Calculator navigator={navigator}/>;
            case 'SettingPage':
                return <Setting navigator={navigator}/>;
        }
    }

    configureScene(route, routeStack) {
        if (route.sceneConfig) {
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
    }

}

module.exports = PowerRanger;