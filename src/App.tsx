import { useState, type FormEvent } from 'react'
import './App.css'

const projects = [
  {
    tag: 'Product',
    title: 'PulseBoard',
    description:
      'A real-time analytics dashboard for operations teams, with live metrics, role-based views, and weekly reports.',
    stack: ['React', 'TypeScript', 'Vite'],
  },
  {
    tag: 'Commerce',
    title: 'Northline Shop',
    description:
      'A fast storefront with search, filters, and a checkout flow built for phones first.',
    stack: ['React', 'CSS', 'REST'],
  },
  {
    tag: 'Internal tool',
    title: 'HireKit',
    description:
      'A hiring workspace that keeps job posts, candidate notes, and interview schedules in one place.',
    stack: ['React', 'TypeScript'],
  },
]

const skills = [
  { group: 'Frontend', items: 'React, TypeScript, HTML, CSS' },
  { group: 'Tooling', items: 'Vite, Git, npm' },
  { group: 'Practices', items: 'Responsive UI, accessibility, component design' },
]

function App() {
  const [sent, setSent] = useState(false)

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)
      .value
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`)
    window.location.href = `mailto:hello@siraj.dev?subject=${encodeURIComponent('Portfolio inquiry')}&body=${body}`
    setSent(true)
  }

  return (
    <div className="page">
      <header className="nav">
        <a className="logo" href="#top">
          Siraj
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <p className="eyebrow">Frontend engineer</p>
        <h1>Siraj</h1>
        <p className="lede">
          I build clean, useful web apps with React and TypeScript, from the
          first layout to a polished, responsive product.
        </p>
        <div className="actions">
          <a className="btn primary" href="#work">
            View selected work
          </a>
          <a className="btn" href="#contact">
            Get in touch
          </a>
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-head">
          <h2>Selected work</h2>
          <p>
            A few projects that show how I think about product, UI, and delivery.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <span className="tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="chips">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="section-head">
          <h2>About</h2>
          <p>
            I care about clarity: readable code, honest copy, and interfaces that
            stay fast on a phone as well as a desktop.
          </p>
        </div>
        <div className="about-grid">
          <p>
            I work end to end on the frontend: structure, styling, state, and
            the small details that make an app feel finished. I like turning a
            rough idea into something a teammate or customer can open and
            understand in seconds.
          </p>
          <div className="skill-list">
            {skills.map((skill) => (
              <div key={skill.group}>
                <h3>{skill.group}</h3>
                <p>{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="section-head">
          <h2>Let's work together</h2>
          <p>
            Open to freelance, full-time, and collaboration. Send a note and I
            will get back to you.
          </p>
        </div>
        {sent ? (
          <p className="thanks">Thanks. Your email app should open with the message.</p>
        ) : (
          <form className="contact-form" onSubmit={handleContact}>
            <label>
              Name
              <input name="name" type="text" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="you@email.com"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                required
                rows={4}
                placeholder="What are you building?"
              />
            </label>
            <button className="btn primary" type="submit">
              Send message
            </button>
          </form>
        )}
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Siraj</p>
        <a href="mailto:hello@siraj.dev">hello@siraj.dev</a>
      </footer>
    </div>
  )
}

export default App
