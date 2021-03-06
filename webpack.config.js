var path = require('path');

module.exports = {
    entry: "./src/main.ts",
    module: {
        loaders: [
            { test: /\.ts$/,
                exclude:path.resolve(__dirname, "node_modules"),
                loader: "babel-loader!awesome-typescript-loader" }
        ],
    },
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.ts', '.js'],
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js',
        publicPath : 'dist'
    },
    devServer:{
        contentBase: __dirname
    },
    devtool: "source-map"
};
