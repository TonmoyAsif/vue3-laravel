const path = require('path');

let plugins = [];

module.exports = {
    resolve: {
        alias: {
            '@scripts': path.resolve(__dirname, 'resources/scripts'),
            '@images': path.resolve(__dirname, 'resources/assets/images'),
        },
    },
    plugins,
};