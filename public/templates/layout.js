var React = require('react'),
    RR = require('react-router');

var Layout = React.createClass({
    render: function () {
        return <html>
            <head>
                <title>Application</title>
                <link rel="stylesheet" href="/css/app.css" />
            </head>
            <body>
                <div id="content" data-state={JSON.stringify(this.props.location.state)}>
                    {this.props.children}
                </div>
                <script data-main="/js/app" src="/components/requirejs/require.js" />
            </body>
        </html>;
    }
});

module.exports = Layout;
