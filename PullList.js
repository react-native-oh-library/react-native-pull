'use strict';

import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Pullable from './Pullable';

export default class extends Pullable {

    constructor(props) {
        super(props);
        this.getMetrics = this.getMetrics.bind(this);
        this.scrollTo = this.scrollTo.bind(this);
        this.scrollToEnd = this.scrollToEnd.bind(this);
    }

    getMetrics(args) {
        this.scroll.getMetrics(args);
    }

    scrollTo(...args) {
        console.log(...args);
        this.scroll.scrollTo(...args);
    }

    scrollToEnd(args) {
        this.scroll.scrollToEnd(args);
    }

    getScrollable() {
        return (
            <FlatList  ref={(c) => {this.scroll = c;}}  scrollEnabled={this.state.scrollEnabled} onScroll={this.onScroll} {...this.props} />
        );
    }
}
