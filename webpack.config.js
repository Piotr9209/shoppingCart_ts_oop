const path = require("path");

module.exports = {
  mode: "development", // lub "production"
  devtool: "source-map",
  watch: true,
  entry: "./src/app.ts",
  output: {
    publicPath: "dist",
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

//wywalic css/scss. dodaj TS, uwzglednic pliki jest, by pliki testowe by nie byly bundlowane