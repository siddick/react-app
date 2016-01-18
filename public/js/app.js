/*global requirejs:true*/
'use strict';


requirejs.config({
    paths: {
        jquery: '../components/jquery/dist/jquery',
        react: '../components/react/react-with-addons',
        'react-dom': '../components/react/react-dom',
        'templates': '../templates'
    }
});

require(['react', 'react-dom', 'jquery'], function (React, ReactDOM, $) {
    $('div[data-react-template]').each(function () {
        var element = this,
            $element = $(element),
            name = $element.attr('data-react-template'),
            data = JSON.parse($element.attr('data-react-data'));

        $element.removeAttr('data-react-template');
        $element.removeAttr('data-react-data');

        require(['templates/' + name], function (template) {
            ReactDOM.render(React.createElement(template, data), element);
        });
    });
});
