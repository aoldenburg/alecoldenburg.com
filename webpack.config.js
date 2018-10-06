var webpack = resolve('webpack');
var path = resolve('path');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './src/client');

const config = {
    entry: {
        main: APP_DIR + '/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR,
    },
    module: {
        rules: [
            {
                test: /(\.css|.scss)$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.(jsx|js)?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['react', 'es2015'],
                        }
                    }
                ]
            }
        ]
    }
}

modules.export = config;