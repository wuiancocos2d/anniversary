module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      "import",
      {libraryName: "ant-design-vue", libraryDirectory: "es", style: true}
    ],
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      },
    ]
  ]
}
