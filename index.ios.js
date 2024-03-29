/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 // #TODO: タブバーの切り替えを可能にする
 // #TODO: 検索機能の実装
 // #TODO: Android版の作成
 // #TODO: お気に入り機能の実装
 // #TODO: Realmを使ってデータを管理する
'use strict';
import React, { Component } from 'react';
import FeaturedTab from './FeaturedTab.js';
import SearchTab from './SearchTab.js';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';

// コンポーネント
var QiitaViewer = React.createClass({
    // インスタンスが生成された時に呼ばれる
        // 初期画面はFeaturedTabに固定
    getInitialState: function() {
        return(
            {
                selectedTab: 'FeaturedTab'
            }
        );
    },
    render: function() {
        return(
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'FeaturedTab'}
                    systemIcon = "featured"
                    onPress={() => {
                        this.setState(
                            {selectedTab: 'FeaturedTab'}
                        );
                    }}
                >
                    <FeaturedTab />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'SearchTab'}
                    systemIcon ="search"
                    onPress={() => {
                        this.setState(
                            {selectedTab: 'SearchTab'}
                        );
                    }}
                >
                    <SearchTab />
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }

});

// スタイル
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('QiitaViewer', () => QiitaViewer);
