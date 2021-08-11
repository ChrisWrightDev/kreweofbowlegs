module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/sigma-vue' : '/',
	devServer: {
		proxy: "http://localhost:5000/",
	}
}