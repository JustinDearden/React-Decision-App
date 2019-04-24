//Entry point -> output
const path = require('path'); //node function

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    //set up the loader for babel
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,       //this is a regular expression - we are targeting every file that ends in .js, the $ ensures its the extension
            exclude: /node_modules/    //this lets use exclude all .js files in the node_modules folder - it would cause issues 
        }, {
            test:/\.s?css$/,
            use: [ //select the loaders to use
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
 

