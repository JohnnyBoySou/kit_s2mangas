#!/bin/bash

echo "🚀 Iniciando Storybook para desenvolvimento..."
echo "📱 Acesse: http://localhost:7007"
echo "🔄 O Storybook irá recarregar automaticamente quando você editar os componentes"
echo ""

# Verificar se as dependências estão instaladas
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    pnpm install
fi

# Iniciar o Storybook
echo "🎨 Iniciando Storybook..."
pnpm storybook
