var React = require('react'),
    RR = require('react-router');

var NavTab = React.createClass({
    contextTypes: {
        location: React.PropTypes.object.isRequired
    },
    render: function () {
        console.log(this);
        var className = this.context.location.pathname === this.props.to ? 'active' : '';
        return (
            <li className={className}>
                <RR.Link {...this.props}>{this.props.children}</RR.Link>
            </li>
        );
    }
});

var Page = React.createClass({
    render: function () {
        return (
            <div>
                <div className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        <ul className="nav navbar-nav">
                            <NavTab to="/" activeClassName="active">Home</NavTab>
                            <NavTab to="/about" activeClassName="active">About</NavTab>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Page;
