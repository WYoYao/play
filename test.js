const webpack = {
    "devtool": "#cheap-module-eval-source-map",
    "entry": {
        "index": [
            "D:\\2018\\app\\node_modules\\_react-dev-utils@2.0.1@react-dev-utils\\webpackHotDevClient.js",
            ".\\src/index.js"
        ]
    },
    "output": {
        "path": "D:\\2018\\app\\dist",
        "filename": "[name].js",
        "publicPath": "/",
        "libraryTarget": "var",
        "chunkFilename": "[name].async.js"
    },
    "resolve": {
        "modules": [
            "D:\\2018\\app\\node_modules",
            "D:\\2018\\app\\node_modules\\_roadhog@1.3.4@roadhog\\node_modules",
            "node_modules"
        ],
        "extensions": [
            ".web.js",
            ".web.jsx",
            ".web.ts",
            ".web.tsx",
            ".js",
            ".json",
            ".jsx",
            ".ts",
            ".tsx"
        ]
    },
    "resolveLoader": {
        "modules": [
            "D:\\2018\\app\\node_modules",
            "D:\\2018\\app\\node_modules\\_roadhog@1.3.4@roadhog\\node_modules"
        ],
        "moduleExtensions": [
            "-loader"
        ]
    },
    "module": {
        "rules": [
            {
                "exclude": [
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                "loader": "url",
                "options": {
                    "limit": 10000,
                    "name": "static/[name].[hash:8].[ext]"
                }
            },
            {
                "test": {},
                "include": "D:\\2018\\app\\src",
                "loader": "babel",
                "options": {
                    "babelrc": false,
                    "presets": [
                        "D:\\2018\\app\\node_modules\\_babel-preset-es2015@6.24.1@babel-preset-es2015\\lib\\index.js",
                        "D:\\2018\\app\\node_modules\\_babel-preset-react@6.24.1@babel-preset-react\\lib\\index.js",
                        "D:\\2018\\app\\node_modules\\_babel-preset-stage-0@6.24.1@babel-preset-stage-0\\lib\\index.js"
                    ],
                    "plugins": [
                        "D:\\2018\\app\\node_modules\\_babel-plugin-add-module-exports@0.2.1@babel-plugin-add-module-exports\\lib\\index.js",
                        "D:\\2018\\app\\node_modules\\_babel-plugin-react-require@3.0.0@babel-plugin-react-require\\lib\\index.js",
                        "D:\\2018\\app\\node_modules\\_babel-plugin-syntax-dynamic-import@6.18.0@babel-plugin-syntax-dynamic-import\\lib\\index.js",
                        "dva-hmr",
                        "transform-runtime",
                        [
                            "import",
                            {
                                "libraryName": "antd",
                                "style": true
                            }
                        ]
                    ],
                    "cacheDirectory": true
                }
            },
            {
                "test": {},
                "use": [
                    "style",
                    {
                        "loader": "css",
                        "options": {
                            "importLoaders": 1,
                            "sourceMap": true,
                            "modules": true,
                            "localIdentName": "[local]___[hash:base64:5]"
                        }
                    },
                    {
                        "loader": "postcss"
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    "style",
                    {
                        "loader": "css",
                        "options": {
                            "importLoaders": 1,
                            "sourceMap": true,
                            "modules": true,
                            "localIdentName": "[local]___[hash:base64:5]"
                        }
                    },
                    {
                        "loader": "postcss"
                    },
                    {
                        "loader": "less",
                        "options": {
                            "modifyVars": {}
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    "style",
                    {
                        "loader": "css",
                        "options": {
                            "importLoaders": 1,
                            "sourceMap": true
                        }
                    },
                    {
                        "loader": "postcss"
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    "style",
                    {
                        "loader": "css",
                        "options": {
                            "importLoaders": 1,
                            "sourceMap": true
                        }
                    },
                    {
                        "loader": "postcss"
                    },
                    {
                        "loader": "less",
                        "options": {
                            "modifyVars": {}
                        }
                    }
                ]
            },
            {
                "test": {},
                "loader": "file",
                "options": {
                    "name": "[name].[ext]"
                }
            },
            {
                "test": {},
                "include": "D:\\2018\\app\\src",
                "use": [
                    {
                        "loader": "babel",
                        "options": {
                            "babelrc": false,
                            "presets": [
                                "D:\\2018\\app\\node_modules\\_babel-preset-es2015@6.24.1@babel-preset-es2015\\lib\\index.js",
                                "D:\\2018\\app\\node_modules\\_babel-preset-react@6.24.1@babel-preset-react\\lib\\index.js",
                                "D:\\2018\\app\\node_modules\\_babel-preset-stage-0@6.24.1@babel-preset-stage-0\\lib\\index.js"
                            ],
                            "plugins": [
                                "D:\\2018\\app\\node_modules\\_babel-plugin-add-module-exports@0.2.1@babel-plugin-add-module-exports\\lib\\index.js",
                                "D:\\2018\\app\\node_modules\\_babel-plugin-react-require@3.0.0@babel-plugin-react-require\\lib\\index.js",
                                "D:\\2018\\app\\node_modules\\_babel-plugin-syntax-dynamic-import@6.18.0@babel-plugin-syntax-dynamic-import\\lib\\index.js",
                                "dva-hmr",
                                "transform-runtime",
                                [
                                    "import",
                                    {
                                        "libraryName": "antd",
                                        "style": true
                                    }
                                ]
                            ],
                            "cacheDirectory": true
                        }
                    },
                    {
                        "loader": "awesome-typescript",
                        "options": {
                            "transpileOnly": true
                        }
                    }
                ]
            },
            {
                "test": {},
                "loader": "file",
                "options": {
                    "name": "static/[name].[hash:8].[ext]"
                }
            }
        ]
    },
    "plugins": [
        {
            "options": {},
            "fullBuildTimeout": 200,
            "requestTimeout": 10000
        },
        {
            "options": {},
            "pathCache": {
                "D:\\2018\\app": [
                    ".editorconfig",
                    ".eslintrc",
                    ".git",
                    ".gitignore",
                    ".roadhogrc",
                    ".roadhogrc.mock.js",
                    "mock",
                    "node_modules",
                    "package.json",
                    "public",
                    "src",
                    "webpack.config.js"
                ]
            },
            "fsOperations": 1
        },
        {
            "nodeModulesPath": "D:\\2018\\app\\node_modules"
        },
        {},
        {
            "definitions": {
                "process.env": {
                    "NODE_ENV": "\"development\""
                }
            }
        },
        {},
        {
            "options": {
                "options": {
                    "context": "D:\\2018\\app\\node_modules\\_roadhog@1.3.4@roadhog\\lib\\config",
                    "postcss": [
                        null
                    ]
                },
                "test": {}
            }
        }
    ],
    "node": {
        "fs": "empty",
        "net": "empty",
        "tls": "empty"
    }
};