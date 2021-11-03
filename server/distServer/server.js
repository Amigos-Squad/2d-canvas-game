/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config/index.ts":
/*!*************************!*\
  !*** ./config/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initServerConfig = exports.initClientConfig = exports.ENVS = void 0;
var webpack_1 = __webpack_require__(/*! ./webpack */ "./config/webpack/index.ts");
Object.defineProperty(exports, "ENVS", ({ enumerable: true, get: function () { return webpack_1.ENVS; } }));
Object.defineProperty(exports, "initClientConfig", ({ enumerable: true, get: function () { return webpack_1.initClientConfig; } }));
Object.defineProperty(exports, "initServerConfig", ({ enumerable: true, get: function () { return webpack_1.initServerConfig; } }));


/***/ }),

/***/ "./config/webpack/assets/dir.ts":
/*!**************************************!*\
  !*** ./config/webpack/assets/dir.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CLIENT_DIR = exports.SERVER_DIR = exports.DIST_DIR = exports.ROOT_DIR_FROM_WEBPACK = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const path_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! path */ "path"));
exports.ROOT_DIR_FROM_WEBPACK = path_1.default.join(__dirname, '../../../');
exports.DIST_DIR = path_1.default.join(exports.ROOT_DIR_FROM_WEBPACK, 'dist');
exports.SERVER_DIR = path_1.default.join(exports.ROOT_DIR_FROM_WEBPACK, 'server');
exports.CLIENT_DIR = path_1.default.join(exports.ROOT_DIR_FROM_WEBPACK, 'src');


/***/ }),

/***/ "./config/webpack/assets/env.ts":
/*!**************************************!*\
  !*** ./config/webpack/assets/env.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GLOBAL_ARGS = exports.ENVS = exports.env = void 0;
exports.env = process.env.NODE_ENV || 'development';
exports.ENVS = {
    __DEV__: exports.env === 'development',
    __PROD__: exports.env === 'production',
    __TEST__: exports.env === 'testing',
};
exports.GLOBAL_ARGS = Object.assign(Object.assign({}, exports.ENVS), { 'process.env': Object.assign(Object.assign({}, exports.ENVS), { NODE_ENV: JSON.stringify(exports.env), PORT: process.env.PORT || 4007 }) });


/***/ }),

/***/ "./config/webpack/assets/index.ts":
/*!****************************************!*\
  !*** ./config/webpack/assets/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ENVS = void 0;
var env_1 = __webpack_require__(/*! ./env */ "./config/webpack/assets/env.ts");
Object.defineProperty(exports, "ENVS", ({ enumerable: true, get: function () { return env_1.ENVS; } }));


/***/ }),

/***/ "./config/webpack/index.ts":
/*!*********************************!*\
  !*** ./config/webpack/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initClientConfig = exports.initServerConfig = exports.ENVS = void 0;
var assets_1 = __webpack_require__(/*! ./assets */ "./config/webpack/assets/index.ts");
Object.defineProperty(exports, "ENVS", ({ enumerable: true, get: function () { return assets_1.ENVS; } }));
var settings_1 = __webpack_require__(/*! ./settings */ "./config/webpack/settings/index.ts");
Object.defineProperty(exports, "initServerConfig", ({ enumerable: true, get: function () { return settings_1.initServerConfig; } }));
Object.defineProperty(exports, "initClientConfig", ({ enumerable: true, get: function () { return settings_1.initClientConfig; } }));


/***/ }),

/***/ "./config/webpack/loaders/css.ts":
/*!***************************************!*\
  !*** ./config/webpack/loaders/css.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CSS_LOADER = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const mini_css_extract_plugin_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! mini-css-extract-plugin */ "mini-css-extract-plugin"));
const env_1 = __webpack_require__(/*! ../assets/env */ "./config/webpack/assets/env.ts");
const { __DEV__ } = env_1.ENVS;
exports.CSS_LOADER = __DEV__
    ? {
        client: {
            test: /\.(css|scss|sass)$/i,
            use: ['css-hot-loader', 'style-loader', 'css-loader', 'sass-loader'],
        },
        server: {
            test: /\.css$/,
            loader: 'null-loader',
        },
    }
    : {
        client: {
            test: /\.(css|scss|sass)$/i,
            use: [mini_css_extract_plugin_1.default.loader, 'css-loader', 'sass-loader'],
        },
        server: {
            test: /\.css$/,
            loader: 'null-loader',
        },
    };


/***/ }),

/***/ "./config/webpack/loaders/file.ts":
/*!****************************************!*\
  !*** ./config/webpack/loaders/file.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FILE_LOADER = void 0;
const fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf)$/;
exports.FILE_LOADER = {
    client: {
        test: fileRegex,
        type: 'asset/resource',
    },
    server: {
        test: fileRegex,
        type: 'asset/resource',
    },
};


/***/ }),

/***/ "./config/webpack/loaders/index.ts":
/*!*****************************************!*\
  !*** ./config/webpack/loaders/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TS_LOADER = exports.CSS_LOADER = exports.FILE_LOADER = void 0;
var file_1 = __webpack_require__(/*! ./file */ "./config/webpack/loaders/file.ts");
Object.defineProperty(exports, "FILE_LOADER", ({ enumerable: true, get: function () { return file_1.FILE_LOADER; } }));
var css_1 = __webpack_require__(/*! ./css */ "./config/webpack/loaders/css.ts");
Object.defineProperty(exports, "CSS_LOADER", ({ enumerable: true, get: function () { return css_1.CSS_LOADER; } }));
var ts_1 = __webpack_require__(/*! ./ts */ "./config/webpack/loaders/ts.ts");
Object.defineProperty(exports, "TS_LOADER", ({ enumerable: true, get: function () { return ts_1.TS_LOADER; } }));


/***/ }),

/***/ "./config/webpack/loaders/ts.ts":
/*!**************************************!*\
  !*** ./config/webpack/loaders/ts.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TS_LOADER = void 0;
exports.TS_LOADER = {
    client: {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        use: 'ts-loader',
    },
    server: {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        use: 'ts-loader',
    },
};


/***/ }),

/***/ "./config/webpack/optimization/optimization.ts":
/*!*****************************************************!*\
  !*** ./config/webpack/optimization/optimization.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OPTIMIZATION = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const css_minimizer_webpack_plugin_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! css-minimizer-webpack-plugin */ "css-minimizer-webpack-plugin"));
const terser_webpack_plugin_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! terser-webpack-plugin */ "terser-webpack-plugin"));
const env_1 = __webpack_require__(/*! ../assets/env */ "./config/webpack/assets/env.ts");
const { __DEV__ } = env_1.ENVS;
exports.OPTIMIZATION = __DEV__
    ? {
        splitChunks: {
            chunks: 'all',
        },
    }
    : {
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [new css_minimizer_webpack_plugin_1.default(), new terser_webpack_plugin_1.default()],
    };


/***/ }),

/***/ "./config/webpack/plugins/plugins.ts":
/*!*******************************************!*\
  !*** ./config/webpack/plugins/plugins.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GET_PLUGINS = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const webpack_1 = __webpack_require__(/*! webpack */ "webpack");
const mini_css_extract_plugin_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! mini-css-extract-plugin */ "mini-css-extract-plugin"));
const html_webpack_plugin_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! html-webpack-plugin */ "html-webpack-plugin"));
const clean_webpack_plugin_1 = __webpack_require__(/*! clean-webpack-plugin */ "clean-webpack-plugin");
const duplicate_package_checker_webpack_plugin_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! duplicate-package-checker-webpack-plugin */ "duplicate-package-checker-webpack-plugin"));
const compression_webpack_plugin_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! compression-webpack-plugin */ "compression-webpack-plugin"));
const env_1 = __webpack_require__(/*! ../assets/env */ "./config/webpack/assets/env.ts");
const { __DEV__, __PROD__ } = env_1.ENVS;
const GET_PLUGINS = () => {
    const plugins = [
        new webpack_1.ProgressPlugin(),
        new clean_webpack_plugin_1.CleanWebpackPlugin(),
        new html_webpack_plugin_1.default({
            template: './public/index.html',
            title: '2d-canvas-game',
            minify: {
                collapseWhitespace: __PROD__,
            },
        }),
        new mini_css_extract_plugin_1.default({
            filename: `css/[name].css`,
        }),
        new webpack_1.DefinePlugin(env_1.GLOBAL_ARGS),
        new webpack_1.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
    ];
    if (__DEV__) {
        plugins.push(new webpack_1.HotModuleReplacementPlugin(), new compression_webpack_plugin_1.default({ minRatio: 1 }));
    }
    if (__PROD__) {
        plugins.push(new duplicate_package_checker_webpack_plugin_1.default());
    }
    return plugins;
};
exports.GET_PLUGINS = GET_PLUGINS;


/***/ }),

/***/ "./config/webpack/settings/index.ts":
/*!******************************************!*\
  !*** ./config/webpack/settings/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initServerConfig = exports.initClientConfig = void 0;
var initClientConfig_1 = __webpack_require__(/*! ./initClientConfig */ "./config/webpack/settings/initClientConfig.ts");
Object.defineProperty(exports, "initClientConfig", ({ enumerable: true, get: function () { return initClientConfig_1.initClientConfig; } }));
var initServerConfig_1 = __webpack_require__(/*! ./initServerConfig */ "./config/webpack/settings/initServerConfig.ts");
Object.defineProperty(exports, "initServerConfig", ({ enumerable: true, get: function () { return initServerConfig_1.initServerConfig; } }));


/***/ }),

/***/ "./config/webpack/settings/initClientConfig.ts":
/*!*****************************************************!*\
  !*** ./config/webpack/settings/initClientConfig.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initClientConfig = void 0;
const path_1 = __webpack_require__(/*! path */ "path");
const dir_1 = __webpack_require__(/*! ../assets/dir */ "./config/webpack/assets/dir.ts");
const env_1 = __webpack_require__(/*! ../assets/env */ "./config/webpack/assets/env.ts");
const plugins_1 = __webpack_require__(/*! ../plugins/plugins */ "./config/webpack/plugins/plugins.ts");
const loaders_1 = __webpack_require__(/*! ../loaders */ "./config/webpack/loaders/index.ts");
const optimization_1 = __webpack_require__(/*! ../optimization/optimization */ "./config/webpack/optimization/optimization.ts");
const { __DEV__ } = env_1.ENVS;
exports.initClientConfig = {
    name: `client`,
    target: 'web',
    devtool: 'source-map',
    entry: {
        index: [
            __DEV__ && 'react-hot-loader/patch',
            __DEV__ && 'webpack-hot-middleware/client',
            __DEV__ && 'css-hot-loader/hotModuleReplacement',
            (0, path_1.join)(dir_1.CLIENT_DIR, 'index'),
        ].filter(Boolean),
    },
    mode: __DEV__ ? 'development' : 'production',
    output: {
        path: dir_1.DIST_DIR,
        filename: `[name].js`,
        publicPath: '/',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            '@': dir_1.CLIENT_DIR,
            scss: `${dir_1.CLIENT_DIR}/styles`,
        },
    },
    module: {
        rules: [loaders_1.TS_LOADER.client, loaders_1.FILE_LOADER.client, loaders_1.CSS_LOADER.client],
    },
    plugins: (0, plugins_1.GET_PLUGINS)(),
    optimization: optimization_1.OPTIMIZATION,
};


/***/ }),

/***/ "./config/webpack/settings/initServerConfig.ts":
/*!*****************************************************!*\
  !*** ./config/webpack/settings/initServerConfig.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initServerConfig = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const dotenv_1 = __webpack_require__(/*! dotenv */ "dotenv");
const path_1 = __webpack_require__(/*! path */ "path");
const webpack_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! webpack */ "webpack"));
const webpack_node_externals_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! webpack-node-externals */ "webpack-node-externals"));
const dir_1 = __webpack_require__(/*! ../assets/dir */ "./config/webpack/assets/dir.ts");
const loaders_1 = __webpack_require__(/*! ../loaders */ "./config/webpack/loaders/index.ts");
const env_1 = __webpack_require__(/*! ../assets/env */ "./config/webpack/assets/env.ts");
(0, dotenv_1.config)();
const { __DEV__ } = env_1.ENVS;
exports.initServerConfig = {
    name: 'server',
    devtool: 'source-map',
    entry: (0, path_1.join)(dir_1.SERVER_DIR, 'index'),
    node: { __dirname: false },
    mode: __DEV__ ? 'development' : 'production',
    externalsPresets: { node: true },
    externals: [
        (0, webpack_node_externals_1.default)({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] }),
    ],
    resolve: {
        modules: [dir_1.ROOT_DIR_FROM_WEBPACK, 'node_modules'],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            '@': dir_1.CLIENT_DIR,
            scss: `${dir_1.CLIENT_DIR}/styles`,
        },
    },
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        publicPath: '/',
        path: (0, path_1.join)(dir_1.SERVER_DIR, 'distServer'),
    },
    module: {
        rules: [loaders_1.TS_LOADER.server, loaders_1.FILE_LOADER.server, loaders_1.CSS_LOADER.server],
    },
    performance: {
        hints: __DEV__ ? false : 'warning',
    },
    plugins: [
        new webpack_1.default.ProvidePlugin({
            window: (0, path_1.resolve)((0, path_1.join)(__dirname, '../mock/window.mock')),
            localStorage: (0, path_1.resolve)((0, path_1.join)(__dirname, '../mock/localStorage.mock')),
            document: 'global/document',
        }),
    ],
    optimization: {
        nodeEnv: false,
    },
};


/***/ }),

/***/ "./server/middlewares/index.ts":
/*!*************************************!*\
  !*** ./server/middlewares/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderMiddleware = exports.logger = exports.webpackHot = void 0;
var webpackHot_1 = __webpack_require__(/*! ./webpackHot */ "./server/middlewares/webpackHot.ts");
Object.defineProperty(exports, "webpackHot", ({ enumerable: true, get: function () { return webpackHot_1.webpackHot; } }));
var logger_1 = __webpack_require__(/*! ./logger */ "./server/middlewares/logger.ts");
Object.defineProperty(exports, "logger", ({ enumerable: true, get: function () { return logger_1.logger; } }));
var render_1 = __webpack_require__(/*! ./render */ "./server/middlewares/render/index.ts");
Object.defineProperty(exports, "renderMiddleware", ({ enumerable: true, get: function () { return render_1.renderMiddleware; } }));


/***/ }),

/***/ "./server/middlewares/logger.ts":
/*!**************************************!*\
  !*** ./server/middlewares/logger.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logger = void 0;
const logger = () => {
    return (req, _res, next) => {
        req.logger = () => {
            // eslint-disable-next-line
            console.log(req);
        };
        next();
    };
};
exports.logger = logger;


/***/ }),

/***/ "./server/middlewares/render/index.ts":
/*!********************************************!*\
  !*** ./server/middlewares/render/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderMiddleware = void 0;
const render_1 = __webpack_require__(/*! ./render */ "./server/middlewares/render/render.tsx");
const renderMiddleware = (req, res, next) => {
    /* const location = req.url; */
    res.send((0, render_1.renderHTML)());
    next();
};
exports.renderMiddleware = renderMiddleware;


/***/ }),

/***/ "./server/middlewares/render/render.tsx":
/*!**********************************************!*\
  !*** ./server/middlewares/render/render.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderHTML = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const react_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! react */ "react"));
const server_1 = __webpack_require__(/*! react-dom/server */ "react-dom/server");
function getPageHtml(content) {
    const html = (0, server_1.renderToStaticMarkup)(react_1.default.createElement("html", { lang: "en" },
        react_1.default.createElement("head", null,
            react_1.default.createElement("meta", { charSet: "UTF-8" }),
            react_1.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
            react_1.default.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "ie=edge" }),
            react_1.default.createElement("title", null, "SSR")),
        react_1.default.createElement("body", null,
            react_1.default.createElement("div", { id: "root" },
                "$",
                content),
            react_1.default.createElement("script", { src: "/index.js" }))));
    return `<!doctype html>${html}`;
}
const renderHTML = () => {
    return getPageHtml('12');
};
exports.renderHTML = renderHTML;


/***/ }),

/***/ "./server/middlewares/webpackHot.ts":
/*!******************************************!*\
  !*** ./server/middlewares/webpackHot.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.webpackHot = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const webpack_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! webpack */ "webpack"));
const webpack_dev_middleware_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware"));
const webpack_hot_middleware_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware"));
const webpackHot = (conf) => {
    const compiler = (0, webpack_1.default)(Object.assign(Object.assign({}, conf), { mode: 'development' }));
    return [
        (0, webpack_dev_middleware_1.default)(compiler, {
            publicPath: '/',
        }),
        (0, webpack_hot_middleware_1.default)(compiler, { path: '/__webpack_hmr' }),
    ];
};
exports.webpackHot = webpackHot;


/***/ }),

/***/ "./server/server.ts":
/*!**************************!*\
  !*** ./server/server.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const express_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! express */ "express"));
const middlewares_1 = __webpack_require__(/*! ./middlewares */ "./server/middlewares/index.ts");
const config_1 = __webpack_require__(/*! ../config */ "./config/index.ts");
const server = (0, express_1.default)();
if (config_1.ENVS.__DEV__) {
    server.use((0, middlewares_1.webpackHot)(config_1.initClientConfig));
}
server.get('/', (req, res) => {
    res.send(`<div>112</div>`);
});
exports["default"] = server;


/***/ }),

/***/ "./server/utils/index.ts":
/*!*******************************!*\
  !*** ./server/utils/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.startApp = void 0;
var startApp_1 = __webpack_require__(/*! ./startApp */ "./server/utils/startApp.ts");
Object.defineProperty(exports, "startApp", ({ enumerable: true, get: function () { return startApp_1.startApp; } }));


/***/ }),

/***/ "./server/utils/startApp.ts":
/*!**********************************!*\
  !*** ./server/utils/startApp.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.startApp = void 0;
const { PORT = 3000 } = process.env;
const APP_HOSTS = ['localhost'];
function startApp({ server }) {
    server.listen(PORT, () => {
        // eslint-disable-next-line
        console.log(`Server started on http://${APP_HOSTS[0]}:${PORT}`);
    });
}
exports.startApp = startApp;


/***/ }),

/***/ "clean-webpack-plugin":
/*!***************************************!*\
  !*** external "clean-webpack-plugin" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("clean-webpack-plugin");

/***/ }),

/***/ "compression-webpack-plugin":
/*!*********************************************!*\
  !*** external "compression-webpack-plugin" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("compression-webpack-plugin");

/***/ }),

/***/ "css-minimizer-webpack-plugin":
/*!***********************************************!*\
  !*** external "css-minimizer-webpack-plugin" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("css-minimizer-webpack-plugin");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "duplicate-package-checker-webpack-plugin":
/*!***********************************************************!*\
  !*** external "duplicate-package-checker-webpack-plugin" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("duplicate-package-checker-webpack-plugin");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("html-webpack-plugin");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("mini-css-extract-plugin");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "terser-webpack-plugin":
/*!****************************************!*\
  !*** external "terser-webpack-plugin" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("terser-webpack-plugin");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-node-externals");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const server_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! ./server */ "./server/server.ts"));
const utils_1 = __webpack_require__(/*! ./utils */ "./server/utils/index.ts");
(0, utils_1.startApp)({ server: server_1.default });

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=server.js.map