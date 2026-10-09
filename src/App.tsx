import { useState } from 'react'
import Inventory from './Inventory'
import { projects } from './projects'

const email = 'victor.hugofdantas@gmail.com'
const navigation = [
  ['home', 'Home'],
  ['projetos', 'Projetos'],
  ['sobre', 'Sobre'],
  ['contato', 'Contato'],
]

type Project = (typeof projects)[number]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="card-top">
        <span>{project.category}</span>
        <span className="project-number" aria-hidden="true">
          {project.mark}
        </span>
      </div>
      <p className="project-status">{project.status}</p>
      <h3>{project.name}</h3>
      <p className="project-result">{project.result}</p>
      <p className="project-description">{project.description}</p>
      <details className="project-details">
        <summary>Recursos e contribuições</summary>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </details>
      <div className="tags">
        {project.stack.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <a
        className="project-link"
        href={`mailto:${email}?subject=${encodeURIComponent(project.subject)}`}
      >
        {project.label}
        <span className="sr-only"> — {project.name}</span>
      </a>
    </article>
  )
}

function CompactProject({ project }: { project: Project }) {
  return (
    <article className="project-row">
      <div>
        <div className="card-top compact-card-top">
          <span>{project.category}</span>
          <span className="project-number" aria-hidden="true">
            {project.mark}
          </span>
        </div>
        <p className="project-status">{project.status}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
      </div>
      <div className="compact-project-meta">
        <p className="project-result">{project.result}</p>
        {project.stack.length > 0 && (
          <div className="tags">
            {project.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
        <a
          className="project-link"
          href={`mailto:${email}?subject=${encodeURIComponent(project.subject)}`}
        >
          {project.label}
          <span className="sr-only"> — {project.name}</span>
        </a>
      </div>
    </article>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  const featuredProjects = projects.slice(0, 3)
  const secondaryProjects = projects.slice(3)

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header>
        <nav className="container navigation" aria-label="Navegação principal">
          <a className="brand" href="#home" aria-label="Victor Hugo Dantas, início">
            vhd<span>.</span>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen(!open)}
          >
            {open ? 'Fechar' : 'Menu'}
          </button>
          <div id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
            {navigation.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </div>
          <a className="nav-contact" href={`mailto:${email}`}>
            Vamos conversar
          </a>
        </nav>
      </header>

      <main id="conteudo">
        <section id="home" className="container hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow">TI / AUTOMAÇÃO / DESENVOLVIMENTO</p>
            <h1 id="hero-title">
              Tecnologia que
              <br />
              resolve o <span>dia a dia.</span>
            </h1>
            <p className="intro">
              Sou Victor Hugo Dantas. Conecto desenvolvimento web, automação e infraestrutura
              para transformar processos operacionais em soluções úteis.
            </p>
            <div className="actions">
              <a className="button primary" href="#projetos">
                Explorar projetos
              </a>
              <a className="text-link" href="#sobre">
                Conheça meu trabalho
              </a>
            </div>
            <div className="hero-signature">
              <span className="signature-line" />
              Victor Hugo Ferreira Dantas
            </div>
          </div>

          <aside className="focus-panel" aria-label="Áreas de atuação">
            <div className="panel-top">
              <span>DA OPERAÇÃO AO SOFTWARE</span>
              <span aria-hidden="true">⌘</span>
            </div>
            <h2 className="focus-title">Software aplicado à operação.</h2>
            <p className="focus-copy">
              Desenvolvimento web, automação, dados e infraestrutura tratados como partes do
              mesmo problema — sem camadas visuais desnecessárias.
            </p>
            <div className="focus-list" aria-label="Competências principais">
              <span>Web</span>
              <span>Automação</span>
              <span>Dados</span>
              <span>Infraestrutura</span>
            </div>
          </aside>
        </section>

        <section id="projetos" className="container section projects-section" aria-labelledby="projects-title">
          <div className="projects-heading">
            <div>
              <p className="eyebrow">01 / PROJETOS</p>
              <h2 id="projects-title">Soluções em prática.</h2>
            </div>
            <p>
              Três projetos em destaque.
              <br />
              Os demais continuam disponíveis sem ocupar a página toda.
            </p>
          </div>

          <div className="project-grid featured-projects">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          <details className="more-projects">
            <summary>
              <span>Outros projetos e conceitos</span>
              <strong>{secondaryProjects.length}</strong>
            </summary>
            <div className="compact-project-grid">
              {secondaryProjects.map((project) => (
                <CompactProject key={project.name} project={project} />
              ))}
            </div>
          </details>
        </section>

        <Inventory />

        <section id="sobre" className="container section" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">02 / SOBRE</p>
            <h2 id="about-title">
              Entre o código
              <br />
              e a operação.
            </h2>
          </div>
          <div className="about-content">
            <p className="lead">
              Meu trabalho começa entendendo o processo — e termina em uma ferramenta que faz
              sentido para quem usa.
            </p>
            <p>
              Desenvolvo aplicações web, automações e integrações de dados para organizar
              rotinas, tornar informações rastreáveis e apoiar a operação de TI. Meu foco está
              na conexão entre software, infraestrutura e necessidades de negócio.
            </p>
            <p>
              Atuo desde ferramentas internas até produtos próprios. No Hughes Web, uma
              iniciativa própria virou uma plataforma operacional; no Inventário TI, a evolução
              já alcança recursos de ITAM, CMDB e Digital Twin.
            </p>
            <div className="skills">
              <div>
                <h3>Desenvolvimento</h3>
                <p>React · TypeScript · JavaScript · Vite</p>
              </div>
              <div>
                <h3>Automação e dados</h3>
                <p>Python · Playwright · SQL / PostgreSQL · Supabase · APIs REST</p>
              </div>
              <div>
                <h3>Infraestrutura e operação</h3>
                <p>Docker · Git · Integrações operacionais · automação de processos</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="container section contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">03 / CONTATO</p>
            <h2 id="contact-title">
              Vamos construir
              <br />
              a próxima solução<span>?</span>
            </h2>
            <p>Oportunidades profissionais, desenvolvimento de soluções ou uma conversa sobre os projetos.</p>
          </div>
          <div className="contact-list">
            <a href={`mailto:${email}`}>
              <span>E-MAIL</span>
              <strong>{email}</strong>
            </a>
            <a
              href="https://www.linkedin.com/in/victor-hugo-dantas-523372211"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LINKEDIN</span>
              <strong>Victor Hugo Dantas</strong>
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <a href="https://github.com/meczvic" target="_blank" rel="noopener noreferrer">
              <span>GITHUB</span>
              <strong>meczvic</strong>
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="container">
        <span>© {new Date().getFullYear()} Victor Hugo Dantas</span>
        <a href="#home">Voltar ao início</a>
        <span>Feito para conectar ideias à prática.</span>
      </footer>
    </>
  )
}
