#!/usr/bin/env node

/**
 * Script para preparar pacotes para publicação
 * Substitui workspace:* por versões específicas
 */

const fs = require('fs');
const path = require('path');

// Versões dos pacotes
const PACKAGE_VERSIONS = {
  '@s2mangas/core': '1.0.1',
  '@s2mangas/native': '0.0.3',
  '@s2mangas/react': '0.0.2'
};

// Pacotes que dependem de outros pacotes do monorepo
const PACKAGES_TO_FIX = [
  'packages/native',
  'packages/react'
];

function updatePackageJson(packagePath) {
  const packageJsonPath = path.join(packagePath, 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    console.log(`⚠️  package.json não encontrado em ${packagePath}`);
    return;
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  let updated = false;

  // Verificar e corrigir dependencies
  if (packageJson.dependencies) {
    for (const [dep, version] of Object.entries(packageJson.dependencies)) {
      if (version === 'workspace:*' && PACKAGE_VERSIONS[dep]) {
        console.log(`🔄 Atualizando ${dep} de workspace:* para ^${PACKAGE_VERSIONS[dep]} em ${packagePath}`);
        packageJson.dependencies[dep] = `^${PACKAGE_VERSIONS[dep]}`;
        updated = true;
      }
    }
  }

  // Verificar e corrigir devDependencies
  if (packageJson.devDependencies) {
    for (const [dep, version] of Object.entries(packageJson.devDependencies)) {
      if (version === 'workspace:*' && PACKAGE_VERSIONS[dep]) {
        console.log(`🔄 Atualizando ${dep} de workspace:* para ^${PACKAGE_VERSIONS[dep]} em ${packagePath}`);
        packageJson.devDependencies[dep] = `^${PACKAGE_VERSIONS[dep]}`;
        updated = true;
      }
    }
  }

  // Verificar e corrigir peerDependencies
  if (packageJson.peerDependencies) {
    for (const [dep, version] of Object.entries(packageJson.peerDependencies)) {
      if (version === 'workspace:*' && PACKAGE_VERSIONS[dep]) {
        console.log(`🔄 Atualizando ${dep} de workspace:* para ^${PACKAGE_VERSIONS[dep]} em ${packagePath}`);
        packageJson.peerDependencies[dep] = `^${PACKAGE_VERSIONS[dep]}`;
        updated = true;
      }
    }
  }

  if (updated) {
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log(`✅ ${packagePath} atualizado`);
  } else {
    console.log(`ℹ️  ${packagePath} não precisa de atualizações`);
  }
}

function restoreWorkspaceDependencies(packagePath) {
  const packageJsonPath = path.join(packagePath, 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    return;
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  let updated = false;

  // Restaurar dependencies
  if (packageJson.dependencies) {
    for (const [dep, version] of Object.entries(packageJson.dependencies)) {
      if (PACKAGE_VERSIONS[dep] && version.startsWith('^')) {
        console.log(`🔄 Restaurando ${dep} para workspace:* em ${packagePath}`);
        packageJson.dependencies[dep] = 'workspace:*';
        updated = true;
      }
    }
  }

  // Restaurar devDependencies
  if (packageJson.devDependencies) {
    for (const [dep, version] of Object.entries(packageJson.devDependencies)) {
      if (PACKAGE_VERSIONS[dep] && version.startsWith('^')) {
        console.log(`🔄 Restaurando ${dep} para workspace:* em ${packagePath}`);
        packageJson.devDependencies[dep] = 'workspace:*';
        updated = true;
      }
    }
  }

  // Restaurar peerDependencies
  if (packageJson.peerDependencies) {
    for (const [dep, version] of Object.entries(packageJson.peerDependencies)) {
      if (PACKAGE_VERSIONS[dep] && version.startsWith('^')) {
        console.log(`🔄 Restaurando ${dep} para workspace:* em ${packagePath}`);
        packageJson.peerDependencies[dep] = 'workspace:*';
        updated = true;
      }
    }
  }

  if (updated) {
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log(`✅ ${packagePath} restaurado`);
  }
}

function main() {
  const command = process.argv[2];

  if (command === 'prepare') {
    console.log('🚀 Preparando pacotes para publicação...');
    PACKAGES_TO_FIX.forEach(updatePackageJson);
    console.log('✅ Preparação concluída!');
  } else if (command === 'restore') {
    console.log('🔄 Restaurando dependências workspace...');
    PACKAGES_TO_FIX.forEach(restoreWorkspaceDependencies);
    console.log('✅ Restauração concluída!');
  } else {
    console.log('Uso: node scripts/prepare-publish.js [prepare|restore]');
    console.log('');
    console.log('Comandos:');
    console.log('  prepare  - Substitui workspace:* por versões específicas');
    console.log('  restore  - Restaura workspace:* nas dependências');
    process.exit(1);
  }
}

main();
