# Aquários - Landing Page Premium para Academia Fitness

Uma landing page moderna e responsiva para academia com design premium, animações suaves e otimizada para conversão.

## 🎯 Características

✨ **Design Moderno**
- Tema escuro com gradientes vibrantes (roxo, azul e verde neon)
- Glassmorphism effects
- Microinterações e hover animations
- 100% responsivo

🎬 **Animações com Framer Motion**
- Fade-in ao aparecer na tela
- Scroll reveal animations
- Hover effects sofisticados
- Parallax em imagens
- Transições suaves

🚀 **Componentes Bem Estruturados**
- Código limpo e reutilizável
- Componentes independentes
- Fácil de customizar
- Mantém boas práticas React

## 📁 Estrutura do Projeto

```
landing-page-academia/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Menu navegável com logo
│   │   ├── Hero.jsx           # Seção principal com CTA
│   │   ├── Benefits.jsx       # 6 benefícios principais
│   │   ├── Classes.jsx        # 4 modalidades de treino
│   │   ├── Pricing.jsx        # 3 planos com badges
│   │   ├── Testimonials.jsx   # Depoimentos com estrelas
│   │   ├── Gallery.jsx        # Galeria de fotos
│   │   ├── CTA.jsx            # Call-to-action final
│   │   └── Footer.jsx         # Rodapé com mapa e contato
│   ├── App.jsx                # Componente raiz
│   ├── main.jsx               # Ponto de entrada
│   └── index.css              # Estilos globais
├── index.html                 # Template HTML
├── package.json               # Dependências
├── tailwind.config.js         # Configuração Tailwind
├── postcss.config.js          # Configuração PostCSS
└── vite.config.js             # Configuração Vite
```

## 🚀 Como Começar

### Instalação

```bash
# 1. Clone ou navegue para o diretório
cd landing-page-academia

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

### Build para Produção

```bash
npm run build
```

## 🎨 Seções Incluídas

### 1. **Navbar**
- Logo da academia (AF - AquaFit)
- Links de navegação com efeito underline
- Botão CTA "Treinar Agora"
- Menu responsivo para mobile
- Efeito blur ao rolar

### 2. **Hero Section**
- Imagem de fundo com overlay gradiente
- Título impactante "Transforme seu corpo e sua mente"
- Subtítulo descritivo
- 2 CTAs principais
- Stats (500+ alunos, 50+ trainers, 10+ modalidades)
- Animações de entrada

### 3. **Benefícios**
- 6 cards com ícones Lucide
- Glassmorphism effect
- Hover animation com elevação
- Decorações animadas

### 4. **Modalidades de Treino**
- 4 cards: Musculação, Cross Training, Funcional, Cardio
- Gradientes diferentes para cada
- Overlay animado ao hover
- Emojis para visualização rápida

### 5. **Planos de Preço**
- 3 planos: Mensal, Trimestral, Anual
- Plano Anual destacado como "Mais Popular"
- Badge de destaque
- Lista de features com checkmarks
- Garantia de devolução em 7 dias

### 6. **Depoimentos**
- 3 cards com fotos, nome, profissão
- Sistema de 5 estrelas
- Citação com feedback positivo
- Stats de satisfação: 4.9★, 500+ clientes, 98% retenção

### 7. **Galeria**
- Grid de 6 imagens
- Efeito zoom ao hover
- Categorias e títulos
- Zoom icon ao passar mouse

### 8. **CTA Final**
- Fundo com gradiente animado
- Título poderoso
- 2 botões: Aula Experimental e WhatsApp
- Trust badges com check marks

### 9. **Footer**
- Logo e descrição
- Links do produto
- Links da empresa
- Links legais
- Endereço completo
- Telefone e horários
- Social media links

## 🎬 Recursos de Animação

### Framer Motion Implementado

- **Container Variants**: Staggered animations com delay
- **Scroll Reveal**: Elementos aparecem ao rolar
- **Hover Effects**: Scale, elevation, glow
- **Parallax**: Movimento suave em background
- **Floating**: Animação contínua em elementos
- **Transitions**: Smooth duration 0.3s - 0.8s

## 🎨 Customização de Cores

Edite `tailwind.config.js` para alterar o schema de cores:

```js
colors: {
  neon: {
    purple: "#a855f7",     // Roxo
    blue: "#0ea5e9",       // Azul
    pink: "#ec4899",       // Rosa
    green: "#10b981",      // Verde
  },
}
```

## 🖼️ Sugestões de Imagens

### Hero Section
- **Unsplash**: `unsplash.com/?query=fitness+gym+woman+muscular`
- **Pexels**: `pexels.com/search/gym+workout/`
- Resolução: 1920x1080 ou maior

### Galeria de Fotos

1. **Sala de Musculação**
   - Unsplash: `gym-weights`
   - Pexels: `weights-dumbbells`

2. **Área de Crossfit**
   - Unsplash: `crossfit-training`
   - Pexels: `crossfit-exercise`

3. **Estúdio de Aulas**
   - Unsplash: `fitness-class-group`
   - Pexels: `group-exercise-class`

4. **Piscina**
   - Unsplash: `swimming-pool-fitness`
   - Pexels: `swimming-pool`

5. **Academia Geral**
   - Unsplash: `modern-gym-interior`
   - Pexels: `gym-interior`

6. **Vestiários**
   - Unsplash: `modern-changing-room`
   - Pexels: `locker-room`

### Avatar dos Depoimentos
- Unsplash: `portrait-professional`
- Pexels: `people-headshots`
- Tamanho: 100x100px

## 🔧 Dependências

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.4",
  "lucide-react": "^0.263.1",
  "tailwindcss": "^3.3.6"
}
```

## 📱 Responsividade

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (lg, xl)

Todos os componentes foram testados para responsividade em diferentes tamanhos de tela.

## ✅ Checklist de Implementação

- [x] Navbar com links navegáveis
- [x] Hero section impactante
- [x] 6 cards de benefícios
- [x] 4 modalidades de treino
- [x] 3 planos de preço
- [x] 3 depoimentos com estrelas
- [x] Galeria com 6 imagens
- [x] CTA final com botões
- [x] Footer completo
- [x] Animações Framer Motion
- [x] Design responsivo
- [x] Dark tema com gradientes neon
- [x] Glassmorphism effects
- [x] Hover animations
- [x] Ícones Lucide-react
- [x] Tailwind CSS classes
- [x] Scroll smooth behavior

## 🎯 Dicas de Otimização

1. **Imagens**: Use formatos otimizados (WebP)
2. **Lazy Loading**: Implemente com `next/image` se usar Next.js
3. **Cache**: Configure headers HTTP apropriados
4. **Performance**: Use React DevTools Profiler
5. **SEO**: Adicione meta tags em `index.html`

## 📞 Contato e Suporte

Para customizações adicionais, ajustes de cores ou novas seções, verifique o código dos componentes - todos estão bem documentados e prontos para modificação.

## 📄 Licença

Projeto livre para uso pessoal e comercial.

---

**Desenvolvido com ❤️ por Marcos Porto para Academia Aquários**
