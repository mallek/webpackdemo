module.exports = {
    entry: './main.js',
    output: {
        path: './build',
        publicPath: 'http://demome.com/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.coffee$/, loader: "coffee-loader" },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    }
};
