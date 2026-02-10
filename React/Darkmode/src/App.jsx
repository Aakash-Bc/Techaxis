import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="app-container">
      <header className="header">
        <nav className="nav-container">
          <div className="logo">Lumina</div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button className="order-btn">Order Now</button>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <section id="home" className="hero-section">
          <h1 className="hero-title">Experience the <br />Future of Design</h1>
          <p className="hero-subtitle">
            Creating beautiful, responsive, and light/dark mode optimized web experiences for the modern era.
          </p>
          <div className="nav-actions">
            <button className="order-btn" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>Get Started</button>
          </div>
        </section>

        <section id="about" className="about-section">
          <h2>About Us</h2>
          <div className="content-grid">
            <div className="card">
              <h3>Our Mission</h3>
              <p>We believe in creating digital products that are not only functional but also visually stunning and easy to use.</p>
            </div>
            <div className="card">
              <h3>Our Vision</h3>
              <p>To be the leading agency in modern web development, pushing the boundaries of what's possible with CSS and React.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <div className="card" style={{ maxWidth: '600px', margin: '40px auto' }}>
            <p style={{ marginBottom: '20px' }}>Have a project in mind? We'd love to hear from you!</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input 
                type="text" 
                placeholder="Name" 
                style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)' }} 
              />
              <input 
                type="email" 
                placeholder="Email" 
                style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)' }} 
              />
              <textarea 
                placeholder="Message" 
                rows="4"
                style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)' }} 
              ></textarea>
              <button className="order-btn" type="button">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <div className="logo" style={{ marginBottom: '16px' }}>Lumina</div>
            <p style={{ opacity: 0.7 }}>Elevating digital experiences through innovative design and technology.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul className="footer-links">
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Lumina Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
