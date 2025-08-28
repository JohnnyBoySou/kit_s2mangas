#!/bin/bash

set -e

echo "🚀 Iniciando deploy do S2Mangas Kit..."
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para log colorido
log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ] || [ ! -f "pnpm-workspace.yaml" ]; then
    error "Execute este script no diretório raiz do kit_s2mangas"
    exit 1
fi

# 1. Verificar dependências
log "📦 Verificando dependências..."
if [ ! -d "node_modules" ]; then
    log "Instalando dependências..."
    pnpm install
else
    log "Dependências já instaladas"
fi

# 2. Executar verificações
log "🔍 Executando verificações..."
log "Lint..."
pnpm lint

log "Typecheck..."
pnpm typecheck

log "Testes..."
pnpm test

log "Build..."
pnpm build

# 3. Verificar se há changesets
log "📝 Verificando changesets..."
if ! pnpm changeset status | grep -q "No changesets present"; then
    log "Changesets encontrados, prosseguindo com deploy..."
else
    warn "Nenhum changeset encontrado!"
    echo ""
    echo "Para criar um changeset, execute:"
    echo "  pnpm changeset"
    echo ""
    read -p "Deseja criar um changeset agora? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        pnpm changeset
    else
        error "Deploy cancelado. Crie um changeset primeiro."
        exit 1
    fi
fi

# 4. Confirmar deploy
echo ""
warn "⚠️  ATENÇÃO: Você está prestes a fazer deploy para produção!"
echo ""
echo "Pacotes que serão publicados:"
pnpm changeset status
echo ""

read -p "Confirma o deploy? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    log "Deploy cancelado pelo usuário"
    exit 0
fi

# 5. Executar deploy
log "🚀 Executando deploy..."
pnpm release-npm

# 6. Verificar resultado
log "✅ Deploy concluído!"
echo ""
log "Verificando versões publicadas:"
echo ""

# Verificar versões dos pacotes
PACKAGES=("@s2mangas/core" "@s2mangas/native" "@s2mangas/react")

for package in "${PACKAGES[@]}"; do
    if npm view "$package" version >/dev/null 2>&1; then
        version=$(npm view "$package" version)
        log "$package: $version"
    else
        warn "$package: não encontrado"
    fi
done

echo ""
log "🎉 Deploy realizado com sucesso!"
log "Os pacotes estão disponíveis no npm registry"
