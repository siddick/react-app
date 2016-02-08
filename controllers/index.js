'use strict';
var path = require('path');

require('babel/register')({
    only: path.join(__dirname, '../public/templates')
});

var IndexModel = require('../models/index'),
    routes = require('../public/templates/routes'),
    React = require('react'),
    RR = require('react-router'),
    ReactDOM = require('react-dom/server');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {
        renderPage(model, req, res);
    });

    router.get('/about', function (req, res) {
        renderPage({}, req, res);
    });

};

function renderPage(model, req, res) {
    if (req.xhr) {
        res.send(model);
    } else {
        RR.match({
            routes: routes.RoutesWithLayout,
            location: req.url
        }, function (error, redirectLocation, renderProps){
            renderProps.location.state = model;
            res.send(ReactDOM.renderToStaticMarkup(React.createElement(RR.RouterContext, renderProps)));
        });
    }
}
