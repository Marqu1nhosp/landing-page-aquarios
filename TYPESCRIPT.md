# 📘 Guia TypeScript - Landing Page Aquários

## ✅ TypeScript foi Adicionado!

O projeto agora tem suporte completo a **TypeScript** com todas as configurações prontas.

## 📦 O Que Foi Instalado

```bash
# Arquivos de Configuração
✅ tsconfig.json          - Configuração principal do TypeScript
✅ tsconfig.node.json     - Configuração para arquivos do Node
✅ vite.config.ts         - Vite config em TypeScript
✅ src/vite-env.d.ts      - Tipos para Vite

# Dependências Adicionadas
✅ typescript             - Compilador TypeScript
✅ @types/react           - Tipos do React
✅ @types/react-dom       - Tipos do React DOM
✅ @types/node            - Tipos do Node.js
```

## 🚀 Como Usar

### 1. Instale as Novas Dependências

```bash
npm install
```

### 2. Converter Componentes para TypeScript

Você pode converter arquivos `.jsx` para `.tsx` gradualmente.

#### Antes (JavaScript):
```jsx
// src/components/Button.jsx
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
```

#### Depois (TypeScript):
```tsx
// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
```

## 📝 Conversão de Componentes

### Passo a Passo

1. Renomear arquivo de `.jsx` para `.tsx`
2. Adicionar tipos para props
3. Adicionar tipos de retorno (opcional, TypeScript infere)
4. Adicionar tipos para state

### Exemplo Completo

```tsx
// Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title = "Transforme seu corpo e sua mente",
  subtitle = "Treinos personalizados..."
}) => {
  const [scrollY, setScrollY] = React.useState<number>(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>Scroll: {scrollY}px</p>
    </section>
  );
};

export default Hero;
```

## 🎯 Principais Tipos

### Componentes Funcionais

```tsx
// Forma 1: React.FC
const MyComponent: React.FC<Props> = (props) => {
  return <div>{props.children}</div>;
};

// Forma 2: Função normal com tipo
const MyComponent = (props: Props): JSX.Element => {
  return <div>{props.children}</div>;
};
```

### Props

```tsx
interface ButtonProps {
  // String obrigatória
  text: string;
  
  // String opcional
  className?: string;
  
  // Função
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  // Array
  items: string[];
  
  // Objeto
  config: { color: string; size: 'small' | 'medium' | 'large' };
  
  // React Node
  children?: React.ReactNode;
  
  // Union types
  variant: 'primary' | 'secondary' | 'danger';
}
```

### Eventos

```tsx
// Input onChange
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

// Button onClick
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log('Clicado');
};

// Form Submit
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};
```

### State com TypeScript

```tsx
// Sem tipo (TypeScript infere)
const [count, setCount] = useState(0);

// Com tipo explícito
const [user, setUser] = useState<User | null>(null);

// Array tipado
const [items, setItems] = useState<string[]>([]);

// Objeto complexo
interface AuthState {
  isLogged: boolean;
  user: { id: number; name: string } | null;
}
const [auth, setAuth] = useState<AuthState>({
  isLogged: false,
  user: null,
});
```

## 📚 Tipos Úteis para o Projeto

### Componentes da Landing Page

```tsx
// Tipo para benefícios
interface Benefit {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

// Tipo para planos de preço
interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  popular: boolean;
  badge?: string;
  features: string[];
}

// Tipo para depoimentos
interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

// Tipo para classe/modalidade
interface FitnessClass {
  name: string;
  description: string;
  color: string;
  icon: string;
}
```

### Use no Seu Componente

```tsx
import React from 'react';

interface BenefitsProps {
  items: Benefit[];
}

const Benefits: React.FC<BenefitsProps> = ({ items }) => {
  return (
    <div className="benefits">
      {items.map((benefit, index) => (
        <div key={index}>
          <benefit.icon size={32} />
          <h3>{benefit.title}</h3>
          <p>{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};
```

## 🔍 Verificar Tipos

Execute TypeScript em modo watch:

```bash
# Verificar tipos sem build
npx tsc --noEmit

# Com watch
npx tsc --noEmit --watch
```

## ⚙️ Configurações Recomendadas

### no `tsconfig.json`

```json
{
  "compilerOptions": {
    "strict": true,                      // Ativa todas as verificações
    "noUnusedLocals": true,             // Avisa sobre variáveis não usadas
    "noUnusedParameters": true,         // Avisa sobre parâmetros não usados
    "noImplicitAny": true,              // Obriga tipos explícitos
    "esModuleInterop": true,            // Importação compatível
    "skipLibCheck": true,               // Pula verificação de libs
    "forceConsistentCasingInFileNames": true
  }
}
```

## 🐛 Troubleshooting

### "Cannot find module"

```bash
# Verifique se o arquivo existe
# Certifique-se de usar .tsx/.ts na importação
import Button from './Button.tsx';  // Nem sempre necessário
```

### Erro de Tipos em Props

```tsx
// Errado
<Button text="Click" onClick="handleClick" />

// Certo
<Button text="Click" onClick={() => handleClick()} />
```

### Mixing JavaScript e TypeScript

✅ **Permitido**: Você pode ter arquivos `.jsx` e `.tsx` no mesmo projeto.

```
src/
  components/
    ├── Navbar.tsx      (TypeScript)
    ├── Hero.jsx        (JavaScript)
    ├── Footer.tsx      (TypeScript)
    └── Gallery.jsx     (JavaScript)
```

## 📚 Recursos Úteis

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Types for React](https://github.com/DefinitelyTyped/DefinitelyTyped)

## 🎯 Próximos Passos

1. **Converter Componentes Gradualmente**
   - Comece com componentes simples
   - Use interfaces para props
   - Teste aumentando `strict`

2. **Adicionar Tipos Globais**
   - Crie `src/types/index.ts` para tipos compartilhados
   - Organizre tipos por funcionalidade

3. **Usar Strict Mode**
   - Ative `"strict": true` no `tsconfig.json`
   - Resolva todos os erros de tipo

## 🚀 Seus Componentes com TypeScript

Aqui estão suas seções já tipadas:

### Navbar.tsx

```tsx
interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const navItems: NavItem[] = [
    { label: 'Início', href: '#inicio' },
    // ...
  ];
  // resto do componente
};
```

### Benefits.tsx

```tsx
interface Benefit {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

const Benefits: React.FC = () => {
  const benefits: Benefit[] = [
    { icon: Dumbbell, title: '...', description: '...' },
    // ...
  ];
  // resto do componente
};
```

---

## ✨ Resumo

TypeScript está 100% configurado e pronto para usar! Você pode:

✅ Usar `.tsx` para novos componentes
✅ Manter `.jsx` para componentes existentes
✅ Gradualmente migrar para TypeScript
✅ Aproveitar type-checking e autocompletar

**Comande para instalar e começar:**

```bash
npm install
npm run dev
```

---

**Desenvolvido por Marcos Porto** | Especialista em React & TypeScript
