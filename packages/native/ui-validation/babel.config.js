module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './',
            's2mangas-native': '../src',
            '@s2mangas/core': '../../core',
          },
        },
      ],
    ],
  };
};
