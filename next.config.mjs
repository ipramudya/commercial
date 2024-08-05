const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.pdf$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "static/documents",
                    publicPath: "/_next/static/documents",
                },
            },
        });

        return config;
    },
};

export default nextConfig;
