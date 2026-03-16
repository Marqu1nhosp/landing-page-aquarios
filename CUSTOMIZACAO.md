# 🎨 Guia de Customização Rápida

## 🚀 As 5 Primeiras Customizações

### 1️⃣ Mudar Nome da Academia (2 minutos)

**Arquivo: `src/components/Navbar.jsx`**

Encontre (linha ~40):
```jsx
<span className="text-white font-display text-xl">
  AquaFit
</span>
```

Mude para:
```jsx
<span className="text-white font-display text-xl">
  SEU NOME AQUI
</span>
```

**Também em `src/components/Footer.jsx`** (linha ~50):
```jsx
<span className="text-white font-display text-lg font-bold">
  SEU NOME AQUI
</span>
```

**E em `index.html`** (linha ~7):
```html
<title>SEU NOME AQUI - Sua Academia de Transformação</title>
```

---

### 2️⃣ Alterar Esquema de Cores (5 minutos)

**Arquivo: `tailwind.config.js`**

Procure por:
```js
colors: {
  neon: {
    purple: "#a855f7",     // Roxo ← MUDE AQUI
    blue: "#0ea5e9",       // Azul ← MUDE AQUI
    pink: "#ec4899",       // Rosa
    green: "#10b981",      // Verde
  },
}
```

**Exemplos de Paletas:**

**Opção 1: Verde Neon (Moderno)**
```js
purple: "#10b981",  // Verde emerald
blue: "#06b6d4",    // Cyan
pink: "#06b6d4",    // Cyan
green: "#10b981",   // Verde
```

**Opção 2: Laranja Quente (Energético)**
```js
purple: "#f97316",  // Laranja
blue: "#ec4899",    // Rosa
pink: "#ef4444",    // Vermelho
green: "#f97316",   // Laranja
```

**Opção 3: Azul Profissional**
```js
purple: "#2563eb",  // Azul royal
blue: "#1d4ed8",    // Azul escuro
pink: "#0284c7",    // Azul claro
green: "#0ea5e9",   // Cyan
```

---

### 3️⃣ Trocar Textos da Página (10 minutos)

#### Hero Section - `src/components/Hero.jsx`

Encontre (linha ~40):
```jsx
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight">
  <span className="block text-white">Transforme seu</span>
  <span className="gradient-text block">corpo e sua mente</span>
</h1>
```

Mude para seu texto:
```jsx
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight">
  <span className="block text-white">Seu Título</span>
  <span className="gradient-text block">Seu Subtítulo</span>
</h1>
```

#### Subtítulo Hero (linha ~50):
```jsx
<p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
  MUDE ESTE TEXTO AQUI - Seu slogan
</p>
```

#### Benefícios - `src/components/Benefits.jsx`

Procure por `const benefits` (linha ~5) e edite:
```jsx
const benefits = [
  {
    icon: Dumbbell,
    title: 'Seu Benefício Aqui',           // Mude
    description: 'Sua descrição aqui',     // Mude
  },
  // ... mais benefícios
];
```

#### Planos - `src/components/Pricing.jsx`

Procure por `const plans` (linha ~5):
```jsx
const plans = [
  {
    name: 'Novo Nome',
    price: 'R$ 199',                    // Mude preço
    period: '/mês',
    description: 'Nova descrição',
    // ... features
  },
];
```

#### Depoimentos - `src/components/Testimonials.jsx`

Procure por `const testimonials` (linha ~5):
```jsx
const testimonials = [
  {
    name: 'Novo Nome',
    role: 'Nova Profissão',
    avatar: '👨',                       // Mude emoji
    rating: 5,
    text: 'Novo depoimento aqui',
  },
];
```

#### Classes - `src/components/Classes.jsx`

Procure por `const classes` (linha ~5):
```jsx
const classes = [
  {
    name: 'Novo Treino',
    description: 'Nova descrição',
    color: 'from-red-500 to-pink-600',  // Mude cores
    icon: '💪',                         // Mude emoji
  },
];
```

---

### 4️⃣ Adicionar Imagens (15 minutos)

#### Hero Section Image

**Arquivo: `src/components/Hero.jsx`** (linha ~110)

Atual:
```jsx
<div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-blue rounded-2xl overflow-hidden">
  <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
    <div className="text-center">
      <p className="text-white/60 text-lg">Imagem Hero</p>
    </div>
  </div>
</div>
```

Substitua por:
```jsx
<div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-blue rounded-2xl overflow-hidden">
  <img 
    src="/images/hero.jpg" 
    alt="Academia fitness"
    className="w-full h-full object-cover"
  />
</div>
```

Ou use URL direta (Unsplash):
```jsx
<img 
  src="https://images.unsplash.com/photo-1534438327276-14e5436077a9?w=1920&q=80" 
  alt="Mulher treinando"
  className="w-full h-full object-cover"
/>
```

#### Galeria - `src/components/Gallery.jsx`

Encontre a div com `Imagem Hero` (linha ~60) e substitua:

```jsx
{/* Placeholder for gallery image */}
<div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex...">
  {/* Aqui */}
</div>
```

Por:

```jsx
<img 
  src="/images/sala-musculacao.jpg" 
  alt={img.title}
  className="w-full h-full object-cover"
/>
```

---

### 5️⃣ Trocar Redes Sociais e Contatos (5 minutos)

**Arquivo: `src/components/Footer.jsx`**

Encontre (linha ~150):
```jsx
<a href="https://facebook.com" ...>
```

Mude para:
```jsx
<a href="https://facebook.com/sua-pagina" ...>
```

**WhatsApp Link - `src/components/CTA.jsx`** (linha ~70):

Encontre:
```jsx
className="💬 Falar no WhatsApp"
```

Mude para:
```jsx
href="https://wa.me/5511999999999?text=Quero%20agendar%20uma%20aula!"
```

**Telefone - `src/components/Footer.jsx`** (linha ~150):

```jsx
<a href="tel:+5511999999999">
  (11) 9999-9999
</a>
```

**Endereço - `src/components/Footer.jsx`** (linha ~140):

```jsx
<span>
  Av. Copacabana, 240<br />
  Zabelê
</span>
```

---

## 🎯 Customizações Avançadas

### Adicionar Google Analytics

**Arquivo: `index.html`** (antes de `</head>`):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Alterar Fonte Tipográfica

**Arquivo: `index.html`** (linha ~10):

```html
<!-- Adicione novas fontes -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
```

Depois em `tailwind.config.js`:
```js
theme: {
  extend: {
    fontFamily: {
      display: ['Playfair Display', 'sans-serif'],
    },
  },
}
```

### Adicionar Seção Nova

1. Crie `src/components/NovaSecao.jsx`
2. Copie estrutura de outro componente
3. Mude o conteúdo
4. Importe em `App.jsx`

**Exemplo:**
```jsx
// Em App.jsx
import NovaSecao from './components/NovaSecao';

function App() {
  return (
    <div className="bg-dark-950">
      <Navbar />
      <Hero />
      <Benefits />
      <NovaSecao />  {/* ← Nova seção */}
      <Pricing />
      {/* ... resto */}
    </div>
  );
}
```

---

## 🔧 Atalhos Manutenção

### Alterar Tema de Botões

**Arquivo: `src/index.css`**

```css
/* Encontre: */
.btn-glow {
  @apply relative overflow-hidden transition-all duration-300 hover:shadow-lg;
}

/* Adicione mais estilos: */
.btn-primary {
  @apply bg-gradient-neon hover:shadow-glow-purple;
}

.btn-secondary {
  @apply glass-effect glass-effect-hover;
}
```

### Alterar Velocidade de Animações

**Arquivo: `src/components/*.jsx`**

Procure por `transition={{ duration: 0.6 }}` e altere o número:
- `0.3` = Rápido
- `0.6` = Normal
- `0.8` = Lento
- `1.0` = Muito lento

---

## 📱 Responsive Breakpoints

Se quiser alterar pontos de parada:

**Arquivo: `tailwind.config.js`**

```js
theme: {
  screens: {
    'sm': '640px',    // <- Mobile grande
    'md': '768px',    // <- Tablet
    'lg': '1024px',   // <- Desktop
    'xl': '1280px',   // <- Desktop grande
  },
}
```

---

## 🎨 Paletas de Cores Prontas

### Paleta 1: Gaming (Purple/Cyan)
```js
purple: "#9d4edd"
blue: "#00d9ff"
green: "#3a86ff"
```

### Paleta 2: Tropical (Green/Orange)
```js
purple: "#ff006e"
blue: "#00f5ff"
green: "#05ffa1"
```

### Paleta 3: Corporativo (Blue/Teal)
```js
purple: "#0066ff"
blue: "#00d4ff"
green: "#00ff88"
```

---

## ✅ Checklist de Customização

- [ ] Nome da academia alterado (3 locais)
- [ ] Cores personalizadas (tailwind.config.js)
- [ ] Textos das seções atualizados
- [ ] Imagens adicionadas
- [ ] Redes sociais configuradas
- [ ] Contato e localização atualizados
- [ ] WhatsApp link funcionando
- [ ] Testado em mobile
- [ ] Build gerado sem erros

---

**Dica**: Guarde uma cópia dos valores originais antes de mudar tudo!

Execute `npm run dev` e veja as mudanças em tempo real! 🎉

---

**Desenvolvido por Marcos Porto** | Especialista em React & Frontend Moderno
