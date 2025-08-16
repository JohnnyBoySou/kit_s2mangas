const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Adiciona os diretórios dos pacotes aos watchFolders
config.watchFolders = [
  path.resolve(__dirname, '../src'),
  path.resolve(__dirname, '../../core'),
  path.resolve(__dirname, './core'),
];

// Configura o resolver para incluir os diretórios dos pacotes
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(__dirname, '../src'),
  path.resolve(__dirname, '../../core'),
  path.resolve(__dirname, './core'),
];

// Adiciona alias para resolver @s2mangas/core
config.resolver.alias = {
  '@s2mangas/core': path.resolve(__dirname, './core'),
};

module.exports = config;
