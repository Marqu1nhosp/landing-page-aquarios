# Guia de Implementação - Landing Page Aquários

## 🎯 Passo a Passo para Começar

### 1. Instalação Inicial

```bash
# Instalar Node.js (se não tiver)
# Download em: nodejs.org

# Navegar até a pasta do projeto
cd f:\Projetos\landing-page-aquarios

# Instalar dependências
npm install
```

### 2. Desenvolvendo Localmente

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Abrir no navegador
# http://localhost:5173
```

### 3. Estrutura de Arquivo

Todos os componentes já estão criados:
- `src/components/Navbar.jsx` - Navegação superior
- `src/components/Hero.jsx` - Seção principal
- `src/components/Benefits.jsx` - 6 benefícios
- `src/components/Classes.jsx` - 4 modalidades
- `src/components/Pricing.jsx` - 3 planos
- `src/components/Testimonials.jsx` - Depoimentos
- `src/components/Gallery.jsx` - Galeria
- `src/components/CTA.jsx` - Chamada final
- `src/components/Footer.jsx` - Rodapé

### 4. Customizando o Projeto

#### Alterar Nome da Academia

No arquivo `src/components/Navbar.jsx`, altere (já pré-configurado para "Aquários"):
```jsx
<span className="text-white font-display text-xl hidden sm:inline-block">
  Aquários  {/* Já configurado */}
</span>
```

#### Alterar Cores

Edite `tailwind.config.js`:
```js
neon: {
  purple: "#a855f7",   // Roxo (principais)
  blue: "#0ea5e9",     // Azul
  pink: "#ec4899",     // Rosa
  green: "#10b981",    // Verde
}
```

#### Alterar Conteúdo de Texto

Cada componente tem dados hardcoded. Para modificar:
- **Hero**: Busque por "Transforme seu corpo" em `Hero.jsx`
- **Planos**: Busque por "plans =" em `Pricing.jsx`
- **Depoimentos**: Busque por "testimonials =" em `Testimonials.jsx`

#### Adicionar Imagens

Substitua placeholders em:
1. **Hero**: `src/components/Hero.jsx` (linha ~80)
2. **Galeria**: `src/components/Gallery.jsx` (linha ~60)
3. **Depoimentos**: `src/components/Testimonials.jsx` (linha ~100)

### 5. Deploy

#### Para Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Acompanhe as instruções
```

#### Para Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

#### Para GitHub Pages

```bash
# Build
npm run build

# Copiar arquivos de dist/ para gh-pages branch
```

### 6. Adicionar Funcionalidades

#### Enviar Formulário de Contato

Edite `src/components/CTA.jsx`:
```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  // Integre com backend/email service
  console.log('Form submitted');
};
```

#### Integrar WhatsApp

No `src/components/CTA.jsx`:
```jsx
<a href="https://wa.me/5511999999999?text=Quero agendar uma aula!" 
   className="...">
   💬 Falar no WhatsApp
</a>
```

#### Integrar Calendário (Calendly)

Instale: `npm install react-calendly`

```jsx
import { InlineWidget } from "react-calendly";

<InlineWidget url="https://calendly.com/seu-link" />
```

### 7. SEO e Meta Tags

Edite `index.html`:
```html
<meta name="description" content="Academia fitness premium...">
<meta name="keywords" content="fitness, academia, treino...">
<meta property="og:image" content="imagem-social.jpg">
<meta property="og:title" content="Aquários - Academia Fitness">
```

### 8. Analytics

Adicione Google Analytics em `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### 9. Troubleshooting

**Erro: "node_modules not found"**
```bash
npm install
```

**Env não atualiza no dev server**
```bash
# Reinicie o servidor
npm run dev
```

**Build falha**
```bash
# Limpe cache
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### 10. Performance

Para otimizar:

1. Comprimir imagens (https://tinypng.com)
2. Usar formatos modernos (WebP)
3. Lazy load de imagens
4. Minificar CSS/JS (automático no build)

## 📊 Monitorar Conversões

### Google Analytics 4

Rastreie:
- Cliques em "Aula Experimental"
- Cliques em WhatsApp
- Tempo na página
- Taxa de bounce

### Hotjar

Veja heatmaps de cliques e sessões dos usuários.

## 💡 Próximas Melhorias

- [ ] Integrar com sistema de agendamento
- [ ] Adicionar blog de fitness
- [ ] Chat ao vivo com suporte
- [ ] Programa de referência
- [ ] App mobile (React Native)
- [ ] Integração com sistema de pagamento (Stripe)

## 📞 Links Úteis

- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Lucide React**: https://lucide.dev
- **Unsplash**: https://unsplash.com
- **Vite**: https://vitejs.dev

---

Pronto para lançar sua landing page! 🚀
