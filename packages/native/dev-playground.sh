#!/bin/bash

echo "🎨 S2Mangas Native - Modo Desenvolvimento"
echo ""

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Execute este script no diretório packages/native"
    exit 1
fi

echo "📦 Verificando dependências..."
if [ ! -d "node_modules" ]; then
    echo "Instalando dependências..."
    pnpm install
fi

echo ""
echo "🔧 Opções de visualização:"
echo ""
echo "1. 📱 Playground Local (Recomendado)"
echo "   - Cria um projeto React Native local"
echo "   - Visualização completa no dispositivo/emulador"
echo ""
echo "2. 🌐 Expo Snack (Online)"
echo "   - Funciona no navegador"
echo "   - Não precisa instalar nada"
echo "   - Acesse: https://snack.expo.dev/"
echo ""
echo "3. 🧪 Testes Unitários"
echo "   - Executa testes dos componentes"
echo ""

read -p "Escolha uma opção (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Iniciando Playground Local..."
        echo "📱 Isso pode demorar alguns minutos na primeira vez..."
        echo ""
        node playground.js
        ;;
    2)
        echo ""
        echo "🌐 Abrindo Expo Snack..."
        echo "📋 Copie o código do arquivo expo-snack.md"
        echo ""
        open https://snack.expo.dev/
        ;;
    3)
        echo ""
        echo "🧪 Executando testes..."
        pnpm test
        ;;
    *)
        echo "❌ Opção inválida"
        exit 1
        ;;
esac
