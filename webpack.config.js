import webpack from 'webpack';

export default (webpackConfig, env) => {

    webpackConfig.module.rules.push({ test: /\.scss$/, use: ['style', 'css', 'postcss', 'sass-loader'] });

    return webpackConfig;
}