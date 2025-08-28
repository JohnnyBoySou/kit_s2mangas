# Configuração de Secrets para Releases Automatizadas

Para que o sistema de releases automatizadas funcione, você precisa configurar os seguintes secrets no GitHub.

## 1. NPM_TOKEN

### Como obter o token NPM:

1. **Acesse [npmjs.com](https://www.npmjs.com/)**
2. **Faça login na sua conta**
3. **Vá para o seu perfil** → **Access Tokens**
4. **Clique em "Generate New Token"**
5. **Escolha "Automation"** (permite publicação via CI/CD)
6. **Copie o token gerado**

### Como adicionar no GitHub:

1. **Vá para o repositório no GitHub**
2. **Settings** → **Secrets and variables** → **Actions**
3. **Clique em "New repository secret"**
4. **Nome**: `NPM_TOKEN`
5. **Valor**: Cole o token NPM que você copiou
6. **Clique em "Add secret"**

## 2. GITHUB_TOKEN (Automático)

O `GITHUB_TOKEN` é fornecido automaticamente pelo GitHub Actions, não precisa ser configurado manualmente.

## Verificação

Após configurar os secrets, você pode verificar se estão funcionando:

1. **Faça um commit com changeset**
2. **Abra um PR para a branch `main`**
3. **Verifique se o workflow executa sem erros**

## Troubleshooting

### Erro: "npm ERR! 401 Unauthorized"
- Verifique se o `NPM_TOKEN` está configurado corretamente
- Verifique se o token tem permissões de "Automation"
- Verifique se você tem permissões para publicar os pacotes `@s2mangas/*`

### Erro: "Package name already exists"
- Os nomes dos pacotes devem ser únicos no NPM
- Se necessário, altere o nome dos pacotes nos `package.json`
- Ou configure um scope diferente (ex: `@seu-usuario/core`)

### Workflow não executa
- Verifique se o arquivo `.github/workflows/release.yml` está na branch `main`
- Verifique se há changesets pendentes: `pnpm changeset status`

## Permissões NPM

Certifique-se de que você tem permissões para publicar pacotes com o scope `@s2mangas`:

1. **Se o scope não existe**: Você pode criar os pacotes normalmente
2. **Se o scope existe**: Você precisa ser membro da organização NPM ou ter permissões

### Alternativa: Usar seu próprio scope

Se você não tem acesso ao scope `@s2mangas`, pode alterar para seu próprio scope:

1. **Altere os nomes nos `package.json`**:
   ```json
   {
     "name": "@seu-usuario/core",
     // ...
   }
   ```

2. **Atualize as dependências internas**:
   ```json
   {
     "dependencies": {
       "@seu-usuario/core": "workspace:*"
     }
   }
   ```

## Testando Localmente

Antes de fazer o primeiro release, teste localmente:

```bash
# Verificar se os pacotes podem ser buildados
pnpm build

# Verificar se os testes passam
pnpm test

# Verificar status dos changesets
pnpm changeset status

# Simular o processo de versioning (não publica)
pnpm version-packages
```