module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  rules: [
    {
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
  ],
}
