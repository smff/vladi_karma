const webpackConfig = require('../../webpack.config.js');
delete webpackConfig.entry;

webpackConfig.externals = undefined;
webpackConfig.module.rules = [
    {
        test: /fonts.*\.(woff|woff2|otf$|ttf|eot|svg)$/,
        use: [{
            loader: 'file-loader',
            options: { name: 'fonts/[hash].[ext]' }
        }]
    },
    {
        test: /\.tsx?$/,
        enforce: 'post',
        loader: 'istanbul-instrumenter-loader',
        exclude: [
            /node_modules/,
            /-test\.tsx?$/
        ]
    }
]

module.exports = webpackConfig;
