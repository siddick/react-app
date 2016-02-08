/*global requirejs:true*/
'use strict';

requirejs.config({
    paths: {
        jquery: '../components/jquery/dist/jquery',
        react: '../components/react/react-with-addons',
        'react-dom': '../components/react/react-dom',
        'react-router': '../components/ReactRouter/index',
        history: '../components/History/index',
        nprogress: '../components/nprogress/nprogress',
        templates: '../templates'
    }
});

require(['jquery', 'nprogress'], function ($, NProgress) {
    NProgress.start();
    $(document).on('page:fetch',   function() { NProgress.start(); });
    $(document).on('page:change',  function() { NProgress.done(); });
    $(document).on('page:restore', function() { NProgress.remove(); });
});

require([
    'templates/routes',
    'react',
    'react-dom',
    'react-router',
    'history',
    'nprogress'
], function (routes, React, ReactDOM, RR, history, NProgress) {
    NProgress.start();
    var content = document.getElementById('content');

    RR.browserHistory.setState(JSON.parse(content.getAttribute('data-state')));

    ReactDOM.render(React.createElement(RR.Router, {
        history: RR.browserHistory,
        onUpdate: function () {
            NProgress.done();
        }
    }, routes.Routes), content, function () {
        NProgress.done();
    });
});

