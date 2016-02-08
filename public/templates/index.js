'use strict';

var React = require('react');

var IndexPage = React.createClass({
    getInitialState: function () {
        return this.props.location.state || {};
    },
    render: function () {
        return <h1>Hello {this.state.name}!</h1>;
    }
});

module.exports = IndexPage;
