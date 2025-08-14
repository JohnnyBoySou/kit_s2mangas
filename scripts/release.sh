#!/bin/bash

# Script para facilitar o processo de release
# Uso: ./scripts/release.sh [patch|minor|major]

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🦋 S2Mangas Release Script${NC}"
echo "================================"

# Verificar se há mudanças não commitadas
if [[ -n $(git status --porcelain) ]]; then
    echo -e "${RED}❌ Erro: Há mudanças não commitadas no repositório${NC}"
    echo "Por favor, commit ou stash suas mudanças antes de fazer o release."
    exit 1
fi

# Verificar se estamos na branch main
CURRENT_BRANCH=$(git branch --show-current)
if [[ "$CURRENT_BRANCH" != "main" ]]; then
    echo -e "${YELLOW}⚠️  Aviso: Você não está na branch main (atual: $CURRENT_BRANCH)${NC}"
    read -p "Deseja continuar mesmo assim? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Verificar se há changesets pendentes
echo -e "${BLUE}📋 Verificando changesets pendentes...${NC}"
CHANGESET_STATUS=$(pnpm changeset status)

if echo "$CHANGESET_STATUS" | grep -q "NO packages to be bumped"; then
    echo -e "${YELLOW}⚠️  Não há changesets pendentes${NC}"
    echo ""
    echo "Para criar um novo release, você precisa:"
    echo "1. Criar um changeset: pnpm changeset"
    echo "2. Escolher os pacotes e tipo de mudança"
    echo "3. Executar este script novamente"
    echo ""
    echo "Ou se você quer forçar um release sem mudanças:"
    echo "pnpm changeset add"
    exit 1
fi

echo -e "${GREEN}✅ Changesets encontrados!${NC}"
echo "$CHANGESET_STATUS"

# Perguntar se quer continuar
read -p "Deseja prosseguir com o release? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Release cancelado${NC}"
    exit 1
fi

# Executar o processo de release
echo -e "${BLUE}🚀 Iniciando processo de release...${NC}"

# Preparar dependências para publicação
echo -e "${BLUE}🔧 Preparando dependências para publicação...${NC}"
node scripts/prepare-publish.js prepare

# Build dos pacotes
echo -e "${BLUE}📦 Fazendo build dos pacotes...${NC}"
pnpm build

# Executar testes
echo -e "${BLUE}🧪 Executando testes...${NC}"
pnpm test

# Fazer o release
echo -e "${BLUE}📤 Publicando pacotes...${NC}"
pnpm release

# Restaurar dependências workspace
echo -e "${BLUE}🔄 Restaurando dependências workspace...${NC}"
node scripts/prepare-publish.js restore

echo -e "${GREEN}✅ Release concluído com sucesso!${NC}"
echo ""
echo "Próximos passos:"
echo "1. Verifique se os pacotes foram publicados no npm"
echo "2. Verifique se o GitHub Release foi criado"
echo "3. Faça push das tags: git push --tags"
