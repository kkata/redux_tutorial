module.exports={
  mode: "development",
  entry: {
    app: './src/app.js',
    todo: './src/todo.js'
  },
  output: {
    path: __dirname+"/dist",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        resource: {
          test: /\.jsx?$/,
          exclude: /node_modules/
        },
        use: ["babel-loader"]
      }
    ]
  }
}
