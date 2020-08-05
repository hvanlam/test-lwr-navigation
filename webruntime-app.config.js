/**
 * Web Runtime Sample App Configuration
 */
const { RoutingService } = require('@webruntime/navigation');
const { ComponentService, ImportMapService, AppBootstrapService } = require('@webruntime/services');

module.exports = {
    // Server and file system options
    server: {
        port: 3005,
    },

    // Application metadata
    app: {
        defaultComponent: 'hung/mainrouter',
        defaultTemplate: 'src/client/index.html',
    },
    moduleDir: 'src/client/modules',

    // Addressable services
    services: [
        ComponentService,
        RoutingService,
        ImportMapService,
        AppBootstrapService,
    ],

    // Shared Library management:
    // The webruntime_navigation modules have their own bundle, so the library can be shared
    // It is important that the library is shared, not duplicated, across bundles
    // Code duplication is bad for performance, and can cause bugs which are hard to trace
    bundle: ['@webruntime/app', 'webruntime_navigation/*', 'webruntime/*'],

    // These libraries are handled by the framework
    // They will not be added to any bundles
    externals: ['webruntime_loader/loader', '@babel/runtime/*', 'proxy-compat/*'],

    // Compiler configuration for component bundles
    compilerConfig: {
        format: 'amd',
        formatConfig: {
            amd: {
                // Use the LWR loader
                define: 'Webruntime.define',
            },
        },

        // The LWR AMD loader.
        lwcOptions: {
            experimentalDynamicComponent: {
                loader: 'webruntime_loader/loader'
            },
        },

        // Exclude lwc and the wire-service from being inlined into any module
        // These libraries are already defined in the @webruntime/app bundle
        inlineConfig: [
            {
                descriptor: '*/*',
                exclude: ['lwc', 'wire-service'],
            },
        ],

        // Enumerate all @lwc/compiler outputConfigs by which this project can be compiled
        // see: https://www.npmjs.com/package/@lwc/compiler#compiler-configuration-example
        // The keys in this object should match one of the available "compile modes":
        //  - dev
        //  - prod
        //  - compat
        //  - prod_compat
        outputConfigs: {
            dev: {
                compat: false,
                minify: false,
                env: {
                    NODE_ENV: 'development',
                },
            },
            prod: {
                compat: false,
                minify: true,
                env: {
                    NODE_ENV: 'production',
                },
            },
            compat: {
                compat: true,
                minify: false,
                env: {
                    NODE_ENV: 'compat',
                },
            },
            prod_compat: {
                compat: true,
                minify: true,
                env: {
                    NODE_ENV: 'production_compat',
                },
            },
        },
    },
};
