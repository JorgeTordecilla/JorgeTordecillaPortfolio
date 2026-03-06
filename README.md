# Jorge Iván Tordecilla — Portfolio

Portfolio personal de **Jorge Iván Tordecilla**, Software Engineer con 5+ años de experiencia especializado en automatización, agentes IA y chatbots multicanal. Construido desde cero con Vite + Three.js, sin frameworks UI.

🔗 **Live:** [jorgetordecilla.github.io/JorgeTordecillaPortfolio](https://jorgetordecilla.github.io/JorgeTordecillaPortfolio/)

---

## 👨‍💻 Sobre el autor

| | |
|---|---|
| **Rol actual** | Automation Developer @ **Juju** — Chatbots, IA & Low Code |
| **Experiencia** | 5+ años en desarrollo web y móvil |
| **Ubicación** | Medellín, Colombia 🇨🇴 |
| **Empresas anteriores** | Ceiba Software (2021–2023) · Oderman (2023) |
| **Contacto** | jorge.tordecilla166@gmail.com |

### 🎓 Educación

- **Ingeniería de Software** — Corporación Universitaria Iberoamericana (2023)
- **Tecnólogo en Mecatrónica** — Institución Universitaria Pascual Bravo (2017)
- **Diploma en Programación** — Samsung Innovation Campus & Pontificia Universidad Javeriana (2021)

---

## ✨ Features del sitio

### 3D & Animación
- **Rubik’s Cube 3D** (Three.js) que se resuelve progresivamente al hacer scroll
- **Custom cursor** con punto y anillo seguidor animado
- **Magnetic buttons** — los CTAs se atraen hacia el cursor
- **Gradient mesh** animado en el fondo del hero
- **Divider animado** entre secciones con glow accent
- **Scroll reveal** con `IntersectionObserver` y easing personalizado

### Secciones
- **Hero** con stats counter animado (5+ años · 12+ proyectos · 30% más rápido)
- **About** — grid asimétrico, foto con anillo giratorio, badge *Disponible para proyectos* con dot pulsante
- **Skills** — 28 chips agrupados por categoría con tooltips de experiencia al hover. En la primera entrada, el primer chip hace un beacon pulse para enseñar la interacción. En mobile los tooltips son siempre visibles.
- **Projects** — card destacada (Juju, full-width con métricas laterales) + grid de proyectos con número de orden
- **Contact** — email como elemento tipográfico grande, links sociales

### UX & Polish
- **Section nav lateral** que resalta la sección activa durante el scroll
- **Loader** con barra de progreso animada
- **Float pill** “Hablemos” que se oculta al llegar a Contacto
- **Focus-visible** para navegación por teclado
- **`document.hidden` guard** — render loop se pausa con el tab en segundo plano
- **OG / Twitter card** configuradas para compartir en redes
- Diseño 100% responsivo · dark mode nativo

### 🥚 Easter egg

<details>
<summary>Spoiler (solo para devs curiosos)</summary>

Escribe `jorge` en el teclado (cualquier case) en cualquier parte del portfolio. Los 27 cubitos del Rubik explotan en dirección opuesta al origen, flotan 1.5 s, y vuelven a ensamblarse con spring physics.

Hay una pista visual en la sección de Contacto que aparece después de 3 segundos.

</details>

---

## 🛠️ Stack

| Capa | Tecnología |
|---|---|
| Build | Vite 6 |
| 3D / Animación | Three.js + GSAP |
| Estilos | CSS puro (custom properties, grid, clamp) |
| Fonts | DM Serif Display + DM Sans (Google Fonts) |
| Deploy | GitHub Pages (gh-pages) |

### Tecnologías del autor

**Backend & Cloud**
`Python` `Node.js` `NestJS` `FastAPI` `ExpressJS` `Docker` `Kubernetes` `Kafka`

**Frontend**
`React` `TypeScript` `JavaScript (ES2024)` `Bootstrap`

**Bases de datos**
`PostgreSQL` `MongoDB`

**IA & Automatización**
`OpenAI` `Gemini` `Agentes IA` `N8N` `Make` `WhatsApp Business API` `Twilio`

**Metodologías**
`Clean Architecture` `Hexagonal` `TDD` `DDD` `OpenAPI` `GitFlow`

---

## 🚀 Desarrollo local

```bash
npm install
npm run dev
```

## 📦 Build & Deploy

```bash
npm run build     # genera /dist
npm run deploy    # publica en GitHub Pages
```

---

## 📁 Estructura

```
src/
├── animations/
│   ├── ScrollController.js   # sincroniza scroll con animación del cubo
│   ├── magneticButton.js     # efecto magnético en botones
│   ├── gradientMesh.js       # fondo animado del hero
│   ├── divider.js            # línea divisora con glow animado
│   └── jorgeEasterEgg.js     # easter egg: explosión de cubitos al escribir “jorge”
├── cube/
│   ├── RubikCube.js          # geometría, materiales y lógica del cubo
│   ├── LayerRotation.js      # rotación de capas con GSAP
│   └── scramble.js           # secuencia de mezcla inicial
├── scene/
│   └── SceneSetup.js         # cámara, renderer, luces
├── sections/
│   ├── skills.js             # chips con tooltips + beacon hint
│   ├── projects.js           # tarjetas de proyectos (featured + grid)
│   └── stats.js              # contadores animados
├── styles/
│   ├── main.css              # tokens, hero, layout global
│   └── sections.css          # estilos por sección
└── main.js                   # punto de entrada, orquesta todo
```

---

© 2026 Jorge Iván Tordecilla · Medellín, Colombia
