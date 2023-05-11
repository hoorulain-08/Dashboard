const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// after modification 
// webpack.config.js
const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;
__webpack_public_path__ = process.env.BASE_PATH_URL;


module.exports = {
  output: {
    // public path before 
    // publicPath: "http://localhost:3003/",
    // public path after 

    publicPath: __webpack_public_path__,
    // publicPath: "/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
   
    historyApiFallback: true,
    // these following four lines are for deployment 
    allowedHosts: ["all"],
    host: "0.0.0.0",
     port: 3003,
    open: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(sass|less|css)$/i,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: "file-loader",
      // },
      {
        test: /\.json$/,
        loader: "json-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/env", "@babel/preset-react"] },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "test2",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        
        "./Admin": "./src/App.jsx"
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          // requiredVersion: deps.react, origional line commented by hoor
          requiredVersion: false,
        },
        "react-dom": {
          singleton: true,
          // requiredVersion: deps["react-dom"],origional
          requiredVersion: false,
        },
      },
    }),
    new Dotenv(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
