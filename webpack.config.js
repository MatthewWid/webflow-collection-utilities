const path = require("path");

const BASEDIR = path.resolve(__dirname);

module.exports = (env) => ({
	mode: env.production ? "production" : "development",
	watch: !Boolean(env.production),
	devtool: "inline-source-map",
	entry: {
		index: path.join(BASEDIR, "./src/index.ts"),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "[name].js",
		path: path.join(BASEDIR, "./build/"),
		library: "WebflowUtils",
		libraryTarget: "umd",
	},
});
