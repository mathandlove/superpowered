import './App.css'

function App() {
  return (
    <>
      <div className="hero">
        <div className="hero-inner">
          <h1>AI can help students think better — <span>if they learn how to use it.</span></h1>
          <p>Most students have never been shown how to use AI well. Not to copy and paste. To get unstuck, think clearly, practice skills, and solve real problems they're facing.</p>
          <p className="intro-name">I'm <strong style={{ color: '#fff' }}>Elliott Hedman</strong>, an MIT researcher, and I'm offering free 1:1 sessions where I work directly with your student to do exactly that.</p>
        </div>
      </div>

      <section className="how-it-works">
        <div className="container">
          <div className="section-label">How it works</div>
          <h2>Simple. Real. Immediately useful.</h2>
          <p>Your student shows up with a real challenge — something they actually care about. We open AI and solve it together. Along the way, I teach them a repeatable method: how to ask better questions, test ideas, and turn AI into a thinking partner — not a shortcut.</p>
          <p>No lectures. No homework. Just their problem, and a new way to tackle it.</p>
          <div className="highlight-box">
            They leave with a <strong>personal playbook</strong> — a short, concrete framework they can pull up anytime and reuse on school, sports, social stress, decisions, and motivation.
          </div>
        </div>
      </section>

      <section className="quotes-section">
        <div className="container">
          <div className="section-label">What students have brought so far</div>
          <h2>Real problems. Real sessions.</h2>
          <div className="quote-grid">
            <div className="quote-card">"How do I get more playing time on my soccer team?"</div>
            <div className="quote-card">"How can I give better podcasts?"</div>
            <div className="quote-card">"Help me practice math — out loud, not on paper."</div>
            <div className="quote-card">"How should I handle my first day of class?"</div>
          </div>
        </div>
      </section>

      <section className="why-different">
        <div className="container">
          <div className="section-label">Why this is different</div>
          <h2>AI is the tool. Your student is the driver.</h2>
          <p>The default way students use AI is to skip the thinking. That doesn't build confidence or skill. What I teach is a reframe: AI is the tool — your student is the driver. Once it clicks that they can point AI at something they're struggling with and actually make progress, everything changes.</p>
        </div>
      </section>

      <section className="why-free">
        <div className="container">
          <div className="section-label">Why free?</div>
          <h2>A good trade.</h2>
          <p>I'm deep in this research at MIT and preparing for a talk at SXSW — working with real students is how I make the work better. Your student gets a free hour with an MIT researcher. I learn from real sessions. Good trade.</p>
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

      <div className="footer">
        © 2026 Elliott Hedman · MIT Media Lab
      </div>
    </>
  )
}

export default App
