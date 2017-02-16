var path = require('path');
var webpack = require('webpack');

var entries = {
	'SwitchTabs': "./js/SwitchTabs",
	'Tabs': "./js/Tabs"
};

var entiesVendorDistribution = entries;
entiesVendorDistribution.Vendor = ['jQuery'];

module.exports = [
	{
	    entry: entiesVendorDistribution,
	    module: {
	    	rules: [
		    	{
		    		test: /\.js$/,
		    		exclude: /node_modules/,
		    		enforce: 'pre',
		    		use: [{loader: 'eslint-loader', options: {rules: {semi: 0}, quiet:false, failOnError: true, fix: false}}]
		    	}
	    	]
	    },
	    output: {
	        path: path.join(__dirname, '/dist'),
	        filename: "[name].min.js",
	        library: 'CastleCSS_Tabs_[name]'
	    },
	    plugins: [
	    	new webpack.optimize.UglifyJsPlugin(),
			new webpack.optimize.CommonsChunkPlugin({name:"Vendor", filename:"Vendors.bundle.js"})
	    ]
	},
	{
	    entry: entries,
	    module: {
	    	rules: [
		    	{
		    		test: /\.js$/,
		    		exclude: /node_modules/,
		    		enforce: 'pre',
		    		use: [{loader: 'eslint-loader', options: {rules: {semi: 0}, quiet:false, failOnError: true, fix: false}}]
		    	}
	    	]
	    },
	    output: {
	        path: path.join(__dirname, '/dist'),
	        filename: "[name].external.vendors.min.js",
	      	library: 'CastleCSS_Tabs_[name]'
	    },
	    plugins: [
	    	new webpack.optimize.UglifyJsPlugin()
	    ],
	    externals: [
	    	'jquery', 'jQuery'
	    ]
	}
];