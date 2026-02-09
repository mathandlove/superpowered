import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      
      <div className="hero">
        <div className="hero-inner">
          <h1>AI can help students think better, <span>if they learn how to use it.</span></h1>
          <p>Most students have never been shown how to use AI well. Not to copy and paste. To get unstuck, think clearly, practice skills, and solve real problems they're facing.</p>
          <div className="hero-cta-group">
            <a href="#" className="primary-btn">Book a Free Session</a>
            <span className="hero-note">Limited spots available</span>
          </div>
          <p className="intro-name">I'm <strong style={{ color: '#fff' }}>Elliott Hedman</strong>, an MIT researcher, and I'm offering free 1:1 sessions where I work directly with your student to do exactly that.</p>
        </div>
      </div>

      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-label">How it works</div>
          <h2>Simple. Real. Immediately useful.</h2>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Bring a Challenge</h3>
              <p>Your student shows up with a real challenge—something they actually care about. No hypothetical scenarios.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Solve Together</h3>
              <p>We open AI and solve it together. I teach them a repeatable method: how to ask better questions and test ideas.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Personal Playbook</h3>
              <p>They leave with a concrete framework they can reuse on school, sports, social stress, and motivation.</p>
            </div>
          </div>

          <div className="highlight-box">
            <p>No lectures. No homework. Just their problem, and a new way to tackle it.</p>
          </div>
        </div>
      </section>

      <section id="stories" className="quotes-section">
        <div className="container">
          <div className="section-label">What students have brought so far</div>
          <h2>Real problems. Real sessions.</h2>
          <div className="quote-grid">
            <div className="quote-card">
              <div className="quote-icon">⚽️</div>
              <p>"How do I get more playing time on my soccer team?"</p>
            </div>
            <div className="quote-card">
              <div className="quote-icon">🎙️</div>
              <p>"How can I give better podcasts?"</p>
            </div>
            <div className="quote-card">
              <div className="quote-icon">🧮</div>
              <p>"Help me practice math, out loud, not on paper."</p>
            </div>
            <div className="quote-card">
              <div className="quote-icon">🎒</div>
              <p>"How should I handle my first day of class?"</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="why-different">
        <div className="container">
          <div className="section-label">Why this is different</div>
          <h2>AI is the tool. Your student is the driver.</h2>
          <div className="text-content">
            <p>The default way students use AI is to skip the thinking. That doesn't build confidence or skill. What I teach is a reframe: AI is the tool, your student is the driver.</p>
            <p>Once it clicks that they can point AI at something they're struggling with and actually make progress, everything changes.</p>
          </div>
        </div>
      </section>

      <section className="why-free">
        <div className="container">
          <div className="section-label">Why free?</div>
          <h2>A good trade.</h2>
          <div className="text-content">
            <p>I'm deep in this research at MIT and preparing for a talk at SXSW; working with real students is how I make the work better.</p>
            <p>Your student gets a free hour with an MIT researcher. I learn from real sessions. Good trade.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Book a free session</h2>
          <p className="subtitle">One hour. One real problem. A new way to get unstuck.</p>
          <a href="#" className="cta-btn">Book a Session</a>
          <p className="cta-note">Want to sit in as a parent? Totally fine.</p>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
