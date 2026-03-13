const PROJECTS = [
  {
    name: 'Flow Builder — Juju',
    desc: 'Herramienta interna para automatizar la creación de flujos conversacionales en la plataforma de chatbots de Juju (programas de incentivos para 250+ empresas, 185k usuarios). Redujo el tiempo de implementación en un 30%. Co-diseñé la arquitectura multicanal completa de la solución.',
    highlight: '185k usuarios\n30% más rápido',
    tags: ['Python', 'Chatbots', 'LLM', 'Architecture', 'Automation'],
    github: null,
    demo: null,
    internal: true,
    featured: true,
  },
  {
    name: 'BeBudget',
    desc: 'Monorepo contract-first: API REST (FastAPI + SQLAlchemy), frontend (React + TypeScript) y generación automática de SDKs en TypeScript y Python desde specs OpenAPI. TDD end-to-end.',
    tags: ['FastAPI', 'React', 'TypeScript', 'OpenAPI', 'Python', 'TDD'],
    github: 'https://github.com/JorgeTordecilla/BudgetBuddy',
    demo: 'https://bebudgetapp.vercel.app/login',
  },
  {
    name: 'SEVAE',
    desc: 'Plataforma fullstack de gestión de eventos con notificaciones multicanal en tiempo real — SMS (Twilio), email (Nodemailer) y WebSockets (Socket.io). Backend Express + MongoDB con Change Streams; frontend React.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'Twilio', 'React'],
    github: 'https://github.com/JorgeTordecilla/sevae-Backend',
    github2: 'https://github.com/JorgeTordecilla/sevaeFrontend',
    demo: null,
  },
  {
    name: 'Seguimiento en tiempo real — Ceiba',
    desc: 'Sistema con brokers de mensajería para seguimiento de clientes, reservas, vuelos y datos contables en un dashboard unificado. Desarrollado en Ceiba Software para cliente enterprise.',
    tags: ['Kafka', 'NestJS', 'React', 'Docker', 'PostgreSQL'],
    github: null,
    demo: null,
    internal: true,
  },
];

export function renderProjects() {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;

  PROJECTS.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = p.featured
      ? 'project-card project-card--featured'
      : 'project-card';

    const orderNum = String(i + 1).padStart(2, '0');

    const links = [];
    if (p.github && p.github2) {
      links.push(`<a href="${p.github}"  target="_blank" rel="noopener">Backend &rarr;</a>`);
      links.push(`<a href="${p.github2}" target="_blank" rel="noopener">Frontend &rarr;</a>`);
    } else if (p.github) {
      links.push(`<a href="${p.github}" target="_blank" rel="noopener">GitHub &rarr;</a>`);
    }
    if (p.demo) {
      links.push(`<a href="${p.demo}" target="_blank" rel="noopener">Live &rarr;</a>`);
    } else if (p.demoSoon) {
      links.push(`<span class="card-link-soon">Demo próximamente</span>`);
    }
    if (p.internal) {
      links.push(`<span class="card-link-internal">Proyecto interno</span>`);
    }

    const tagsHTML = p.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
    const linksHTML = links.join('');

    if (p.featured) {
      const highlightLines = (p.highlight || '').split('\n').map(l =>
        `<span class="project-highlight-line">${l}</span>`
      ).join('');

      card.innerHTML = `
        <div class="featured-main">
          <span class="project-order">${orderNum}</span>
          <p class="project-title">${p.name}</p>
          <p class="project-desc">${p.desc}</p>
          <div class="project-tags">${tagsHTML}</div>
          <div class="card-links">${linksHTML}</div>
        </div>
        <aside class="featured-aside">
          ${highlightLines}
        </aside>`;
    } else {
      card.innerHTML = `
        <span class="project-order">${orderNum}</span>
        <p class="project-title">${p.name}</p>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">${tagsHTML}</div>
        <div class="card-links">${linksHTML}</div>`;
    }

    grid.appendChild(card);
  });
}
