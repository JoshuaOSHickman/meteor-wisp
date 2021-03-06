Package.describe({
  summary: "wisp is a homoiconic JavaScript dialect with Clojure syntax, s-expressions and macros."
});

Package._transitional_registerBuildPlugin({
  name: "compileWisp",
  use: [],
  sources: [
    'plugin/compile-wisp.js'
  ],
  npmDependencies: {"wisp": "0.9.0-beta3"}
});

Package.on_use(function (api) {
  Npm.depends({"wisp": "0.9.0-beta3"});

  api.add_files(['wispNamespace.js'], ['client', 'server']);
  api.export(['__wisp__'], ['client', 'server']);
});
