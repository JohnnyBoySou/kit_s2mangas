// packages/native/example/metro.config.js
const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');

const projectRoot = __dirname;                       // packages/native/example
const nativeRoot  = path.resolve(projectRoot, '..'); // packages/native
const coreRoot    = path.resolve(projectRoot, '..', '..', 'core'); // packages/core
const repoRoot    = path.resolve(projectRoot, '..', '..', '..');   // kit_s2mangas (raiz)

const config = getDefaultConfig(projectRoot);

// ver pastas do monorepo
config.watchFolders = [nativeRoot, coreRoot];

// resolver p/ pnpm + 1 cópia de react/RN
config.resolver = {
  ...config.resolver,
  unstable_enableSymlinks: true,
  unstable_enablePackageExports: true,
  nodeModulesPaths: [
    path.join(projectRoot, 'node_modules'),
    path.join(repoRoot, 'node_modules'),
  ],
  extraNodeModules: {
    react: path.join(projectRoot, 'node_modules/react'),
    'react-native': path.join(projectRoot, 'node_modules/react-native'),
  },
  // opcional: usar código-fonte direto durante o dev
  alias: {
    '@s2mangas/core': path.join(coreRoot, 'src'),
    // se quiser consumir o src da lib também:
    // '@s2mangas/native': path.join(nativeRoot, 'src'),
  },
};

// plataformas (se quiser manter web)
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

module.exports = config;
