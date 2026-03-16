#!/bin/bash

# Script de Setup Automático - Landing Page Aquários
# Execute com: bash setup.sh

echo "🚀 Iniciando setup da Landing Page Aquários..."
echo ""

# Cores para terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 1. Verificar Node.js
echo -e "${BLUE}1️⃣  Verificando Node.js...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js não está instalado!${NC}"
    echo "Baixe em: https://nodejs.org/"
    exit 1
fi
NODE_VERSION=$(node -v)
echo -e "${GREEN}✅ Node.js $NODE_VERSION encontrado${NC}"
echo ""

# 2. Verificar npm
echo -e "${BLUE}2️⃣  Verificando npm...${NC}"
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm não está instalado!${NC}"
    exit 1
fi
NPM_VERSION=$(npm -v)
echo -e "${GREEN}✅ npm $NPM_VERSION encontrado${NC}"
echo ""

# 3. Instalar dependências
echo -e "${BLUE}3️⃣  Instalando dependências...${NC}"
npm install
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Dependências instaladas com sucesso${NC}"
else
    echo -e "${RED}❌ Erro ao instalar dependências${NC}"
    exit 1
fi
echo ""

# 4. Verificar estrutura de pastas
echo -e "${BLUE}4️⃣  Verificando estrutura de arquivos...${NC}"
if [ -f "src/App.jsx" ] && [ -f "src/components/Navbar.jsx" ]; then
    echo -e "${GREEN}✅ Estrutura de arquivos está correta${NC}"
else
    echo -e "${RED}❌ Arquivos não encontrados${NC}"
    exit 1
fi
echo ""

# 5. Menú de opções
echo -e "${BLUE}5️⃣  O que você gostaria de fazer?${NC}"
echo ""
echo "1) Iniciar servidor de desenvolvimento (npm run dev)"
echo "2) Build para produção (npm run build)"
echo "3) Preview do build (npm run preview)"
echo "4) Abrir documentação (README.md)"
echo "5) Sair"
echo ""
read -p "Escolha uma opção (1-5): " choice

case $choice in
    1)
        echo ""
        echo -e "${GREEN}🎉 Iniciando servidor de desenvolvimento...${NC}"
        echo -e "${YELLOW}Abra seu navegador em: http://localhost:5173${NC}"
        echo ""
        npm run dev
        ;;
    2)
        echo ""
        echo -e "${GREEN}🔨 Gerando build para produção...${NC}"
        npm run build
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✅ Build concluído! Pasta 'dist' está pronta para deploy${NC}"
        fi
        ;;
    3)
        echo ""
        echo -e "${GREEN}👀 Prévia do build...${NC}"
        npm run preview
        ;;
    4)
        echo ""
        echo -e "${BLUE}📖 Documentação:${NC}"
        echo "README.md - Visão geral completa"
        echo "INICIO_RAPIDO.md - Comece em 5 minutos"
        echo "CUSTOMIZACAO.md - Como modificar cores e textos"
        echo "IMPLEMENTACAO.md - Guia passo-a-passo de setup"
        echo "IMAGENS_E_RECURSOS.md - Encontre imagens"
        echo ""
        ;;
    5)
        echo -e "${YELLOW}Até logo!${NC}"
        exit 0
        ;;
    *)
        echo -e "${RED}Opção inválida!${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}✨ Setup concluído com sucesso!${NC}"
echo -e "${BLUE}📚 Próximos passos:${NC}"
echo "1. Abra INICIO_RAPIDO.md para começar a customizar"
echo "2. Edite src/components/Navbar.jsx para mudar o nome"
echo "3. Customize as cores em tailwind.config.js"
echo "4. Adicione suas imagens"
echo "5. Faça deploy com 'npm run build'"
echo ""
