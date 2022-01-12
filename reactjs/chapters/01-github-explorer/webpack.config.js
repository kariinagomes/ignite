const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

// exportando um objeto de configurações
module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  // arquivo inicial da aplicação
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  // arquivo que vou gerar com o webpack (bundle.js)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // ler arquivos desses tipos
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  // indicar onde fica o conteúdo estático da aplicação
  devServer: {
    static: path.resolve(__dirname, 'public'),
    hot: true,
  },
  // melhorar o fluxo da aplicação (injeta o arquivo js no html para nao precisar ficar criando a tag script)
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ].filter(Boolean),
  // configurações de como aplicação vai se importar conforme cada tipo de arquivo
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
