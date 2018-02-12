const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path')


module.exports = {
    context: __dirname + "/src",
    entry: './app.js',
    devtool: 'eval',
    // entry: 'webpack-dev-server/client?http://localhost:8080',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        // loaders: [
        //     {
        //       test: /\.jsx?$/,
        //       exclude: /node_modules/,
        //       loader: "babel-loader",
        //       query:
        //         {
        //             presets:['es2015', 'react']
        //         }
        //     },
        //     {
        //         test: /\.scss$/,
        //         loader: ExtractTextPlugin.extract("style-loader","css-loader")
        //     },
        //     {
        //       test: /\.html$/,
        //       loader: "file?name=[name].[ext]",
        //     }
        // ]
        rules: [
            {
                test   : /\.(js|jsx)$/,
                loaders: 'babel-loader',
                query:
                {
                    presets:['es2015', 'react']
                },
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/i,
                use: ExtractTextPlugin.extract( {
                    fallback: 'style-loader',
                    use: 'css-loader'
                } ),
            },
            {
                test: /\.scss$/i,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract( {
                    use: [ 'css-loader', 'sass-loader' ]
                } ),
                // include: path.join(__dirname, 'simple-dist')
            }
        ]
    },
    plugins:[
        // new CleanPlugin({
        //     files: ['simple-dist/*']
        // }),
        new ExtractTextPlugin("css/bundle.css")
    ]
    
}