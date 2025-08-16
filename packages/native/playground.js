#!/usr/bin/env node

import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🎨 Iniciando S2Mangas Native Playground...\n');

// Verificar se o React Native CLI está instalado
try {
  execSync('npx react-native --version', { stdio: 'ignore' });
} catch (error) {
  console.log('📦 Instalando React Native CLI...');
  execSync('npm install -g @react-native-community/cli', { stdio: 'inherit' });
}

// Verificar se existe um projeto de exemplo
const examplePath = path.join(__dirname, 'example');
if (!fs.existsSync(examplePath)) {
  console.log('🚀 Criando projeto de exemplo...');
  execSync('npx react-native init S2MangasExample --template react-native-template-typescript', { 
    cwd: __dirname,
    stdio: 'inherit' 
  });
  
  // Mover para pasta example
  execSync('mv S2MangasExample example', { cwd: __dirname, stdio: 'inherit' });
  
  // Instalar dependências do kit
  console.log('📦 Instalando dependências do kit...');
  execSync('npm install ../../', { cwd: examplePath, stdio: 'inherit' });
  
  // Copiar playground para o projeto
  console.log('📝 Configurando playground...');
  const playgroundContent = fs.readFileSync(path.join(__dirname, 'playground.tsx'), 'utf8');
  fs.writeFileSync(path.join(examplePath, 'App.tsx'), playgroundContent);
}

console.log('🎯 Iniciando Metro bundler...');
console.log('📱 Abra o app no seu dispositivo ou emulador');
console.log('🌐 Ou acesse: http://localhost:8081');

// Executar o projeto
execSync('npx react-native start', { 
  cwd: examplePath,
  stdio: 'inherit' 
});
