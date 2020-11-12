const path=require('path')
const HTMLWebpackPlugin= require('html-webpack-plugin')
const{CleanWebpackPlugin}= require('clean-webpack-plugin')
const { SplitChunksPlugin } = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin=require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin=require('terser-webpack-plugin')

const isDev =process.env.NODE_ENV === 'development'
const isProd= process.env.NODE_ENV === 'production'

const optimization=()=>{
  const config={  splitChunks:{
        chunks:'all'
    }
        }
        
        if(isProd){
            config.minimizer=[
                new OptimizeCssAssetWebpackPlugin(),
                new TerserWebpackPlugin()
            ]
            
        }
    return config
    }
    const file= ext => isDev ? `[name].${ext}`:`[name].[hash].${ext}`

    const cssloaders=extra=>{
        const loaders=[
            {
                loader:  MiniCssExtractPlugin.loader,
             options:{
hmr: isDev,
reloadAll:true
             }
         },'css-loader'
        ]
        if(extra){
            loaders.push(extra)
        }
        return loaders
    }

console.log('IS DEV :',isDev)
module.exports={
    context: path.resolve(__dirname, 'src'),
    mode: 'production',
    entry: {
       main: './index.js',
   analytics: './analytics.js',
 },
  output:{
        filename:'[name].[contenthash].js',
        publicPath:'./',
        path: path.resolve(__dirname, 'dist')
    },
    resolve:{
        extensions:['.js','.json','.png','.jpg',],
        alias:{
            '@models':path.resolve(__dirname,'src/models'),
            '@':path.resolve(__dirname,'src'),
        }
    },
    optimization: optimization(),
    devServer:
    {
      port:4200,  
      hot:isDev
    },
    
    plugins:[
        new HTMLWebpackPlugin({
            template:'./index.html',
            minify:{
                collapseWhitespace:isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
    filename: file('css')
        }),
    ],
    module:{
        rules:[
            {
                test: /\.css$/i,
                use:cssloaders()
            },
            {
                test: /\.less$/,
                use:cssloaders('less-loader'),
        
            },
            {
                test: /\.s[ac]ss$/,
                use:cssloaders('sass-loader'),
        
            },
            {
                test:/\.(png|jpg|svg|gif)$/,
                use:['file-loader']
            },
            {
                test:/\.(ttf|woff|woff2)$/,
                use:['file-loader']
            },
            {
                test:/\.xml$/,
                use:['xml-loader']
            },
            {
                test:/\.csv$/,
                use:['csv-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    }
}