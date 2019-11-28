module.exports = {
    "mode": "development",
    "entry": __dirname+"/src/index.js",
    "output": {
        "path": __dirname+'/dist',
        "filename": "bundle.js",
    },
    "module": {
        "rules": [
            {
                "enforce": "pre",
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": "eslint-loader"
            },
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "@babel/env",
                            "@babel/react"
                        ]
                    }
                }
            },
            {
                "test": /\.styl$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    "stylus-loader"
                ]
            }
        ]
    }
}