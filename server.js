const React = require('react');

module.exports = function serverRenderer({ clientStats, serverStats, title }) {
    return (req, res, next) => {
        res.status(200).send(`
            <!doctype html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="description" content="Edtern Landing Page">
                <meta name="author" content="Edtern Pte Ltd">
                <link rel="icon" href="/images/logo.png">
                <title>${title}</title>
                <!-- CSS Vendor -->
                <link rel="stylesheet" href="/stylesheets/bootstrap.min.css"/>
                <!-- CSS -->
                <link rel='stylesheet' href='/stylesheets/style.css'/>
            </head>
            <body>
                <div id="main"></div>
                <!-- Vendor -->
                <script src="/js/jquery-3.2.1.min.js"></script>
                <script src="/js/bootstrap.min.js"></script>
                <!-- Application -->
                <script src="/client.js"></script>
            </body>
            </html>
        `);
    };
}