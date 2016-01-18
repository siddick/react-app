var React = require('react');

var Layout = React.createClass({
    render: function () {
        return <html>
            <head>
                <title>{this.props.title}</title>
                <link rel="stylesheet" href="/css/app.css" />
            </head>
            <body>
                {this.props.children}
                <script data-main="/js/app" src="/components/requirejs/require.js" />
            </body>
        </html>;
    }
});

var RenderLayout = React.createClass({
    render: function () {
        return <Layout {...this.props}>{this.getTemplate()}</Layout>
    },
    getTemplate: function () {
        return React.createElement('div', {
                'data-react-template': this.props.template,
                'data-react-data': JSON.stringify(this.props.data)
            }, React.createElement(require('./' + this.props.template), this.props.data));
    }
});

module.exports = RenderLayout;
