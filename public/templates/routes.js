var IndexPage = require('./index'),
    AboutPage = require('./about'),
    Layout = require('./layout'),
    Page = require('./page'),
    React = require('react'),
    jQuery = require('jquery'),
    RR = require('react-router');

function loadState(location, callback) {
    if (!location.state && location.action === 'PUSH') {
        jQuery.getJSON(location.pathname + location.search, function (json) {
            RR.browserHistory.setState(json);
        });
    } else {
        callback(null, Page);
    }
}

function pageStart() {
    typeof document !== 'undefined' && jQuery(document).trigger('page:fetch');
}

function pageStop() {
    typeof document !== 'undefined' && jQuery(document).trigger('page:restore');
}

module.exports.Routes = (
    <RR.Route path="/" getComponent={loadState}>
        <RR.IndexRoute component={IndexPage}/>
        <RR.Route path="about" component={AboutPage}/>
    </RR.Route>
);

module.exports.Dummy = React.createClass({
    render: function () {
        return this.props.children;
    }
});

module.exports.RoutesWithLayout = <RR.Route component={Layout}>{module.exports.Routes}</RR.Route>;
