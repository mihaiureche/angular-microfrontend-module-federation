const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "movies",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: {
            dataUrlCondition: {
                maxSize: 3 * 1024
            }
        }
      },
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "movies",
        filename: "remoteEntry.js",
        exposes: {
            './Shared': path.resolve(__dirname, './src/app/shared/test/test.component'),
            './Movies': path.resolve(__dirname, './src/app/movies/movies.module'),
        }, 

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "primeng": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "primeicons": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "useless-lib": { singleton: false },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
