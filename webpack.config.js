// -- Модуль JS, который работает с путями
const path = require("path");
// -- Подключение HTMLWebPlugin
const HTMLPlugin = require("html-webpack-plugin");
// -- Подключение CleanWebpackPlugin
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	// --  Точка входа
	entry: "./src/app.js",
	// -- Точка выхода (это то, во что преобразовывает webpack все наши файлы/коды)
	output: {
		filename: "bundle.[chunkhash].js",
		path: path.resolve(__dirname, "public"),
	},
	devServer: {
		port: 3000,
	},
	// -- Плагины
	plugins: [
		new HTMLPlugin({
			// -- Шаблон, на основе которого генерируется итоговая сборка
			template: "./src/index.html",
		}),
		// -- Очистка папки перед сборкой
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
