import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import elliottPhoto from './assets/elliottHedman.webp'
import soccerIcon from './assets/icons/np_soccer_7761881_000000.png'
import podcastIcon from './assets/icons/np_podcast_4869882_000000.png'
import mathIcon from './assets/icons/np_dyslexia_5268619_000000.png'
import friendIcon from './assets/icons/np_friend_7374996_000000.png'
import jobIcon from './assets/icons/np_employee_8253921_000000.png'
import universityIcon from './assets/icons/np_university_5953089_000000.png'

function App() {
  return (
    <>
      <Navbar />
      
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <h1><span className="hero-headline">AI can help students think better,</span> <span>if they learn how to use it.</span></h1>
            <p>Most students have never been shown how to use AI well. Not to copy and paste.<br />To get unstuck, think clearly, practice skills, and solve real problems they're facing.</p>
            <div className="hero-cta-group">
              <a href="https://outlook.office365.com/book/Superpower@robotsandpencils.com" target="_blank" rel="noopener noreferrer" className="primary-btn">Book a Free Session</a>
              <span className="hero-note">10 spots available</span>
            </div>
            <div className="intro-block">
              <img src={elliottPhoto} alt="Elliott Hedman" className="profile-photo" />
              <p className="intro-name">I’m <strong style={{ color: 'var(--comic-blue)' }}>Dr. Elliott Hedman</strong> (MIT Media Lab). In my day job, I advise companies on how to use AI. Now I’m teaching students those same skills.</p>
            </div>
          </div>
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
              <p>You show up with a real challenge—something you actually care about. No hypothetical scenarios.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Solve Together</h3>
              <p>We open AI and solve it together. I teach you a repeatable method: how to ask better questions and test ideas.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Personal Playbook</h3>
              <p>You leave with a concrete framework you can reuse on school, sports, social stress, and motivation.</p>
            </div>
          </div>

          <div className="highlight-box">
            <p>No lectures. No homework. Just your problem, and a new way to tackle it.</p>
          </div>
        </div>
      </section>

      <section id="stories" className="quotes-section">
        <div className="container">
          <div className="section-label">What students have brought so far</div>
          <h2>Real problems. Real sessions.</h2>
          <div className="quote-grid">
            <div className="quote-card">
              <div className="quote-icon">
                <img src={soccerIcon} alt="Soccer" />
              </div>
              <p>"How do I get more playing time on my soccer team?"</p>
            </div>
            <div className="quote-card">
              <div className="quote-icon">
                <img src={podcastIcon} alt="Microphone" />
              </div>
              <p>"How can I give better podcasts?"</p>
            </div>
            <div className="quote-card">
              <div className="quote-icon">
                <img src={mathIcon} alt="Math" />
              </div>
              <p>"Help me practice math, out loud, not on paper."</p>
            </div>
            <div className="quote-card">
              <div className="quote-icon">
                <img src={friendIcon} alt="Backpack" />
              </div>
              <p>"How should I handle my first day of class?"</p>
            </div>
            <div className="quote-card">
              <div className="quote-icon">
                <img src={universityIcon} alt="Academics" />
              </div>
              <p>"Should I switch majors?"</p>
            </div>
            <div className="quote-card">
              <div className="quote-icon">
                <img src={jobIcon} alt="Interview" />
              </div>
              <p>"How can I prepare for my job interview?"</p>
            </div>
          </div>
        </div>
      </section>

      <section id="why-different" className="why-different">
        <div className="container">
          <div className="section-label">Why this is different</div>
          <h2>AI is the tool. You are the driver.</h2>
          <div className="text-content">
            <p>The default way students use AI is to skip the thinking. That doesn't build confidence or skill. What I teach is a reframe: AI is the tool, you are the driver.</p>
            <p>Once it clicks that you can point AI at something you're struggling with and actually make progress, everything changes.</p>
          </div>
        </div>
      </section>

      <div className="combined-section">
        <div className="halftone-bg">
          <div className="halftone-dots"></div>
        </div>

        <section className="why-free">
          <div className="container">
            <div className="section-label">Why free?</div>
            <h2>A good trade.</h2>
            <div className="text-content">
              <p>I'm deep in this research and preparing for a talk at SXSW; working with real students is how I make the work better.</p>
              <p>You get a free AI researcher from MIT. I get to learn what is important to you.</p>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container">
          <div className="section-label">About the Founder</div>
          <h2>Dr. Elliott Hedman</h2>
          <div className="text-content">
            <p>Dr. Elliott Hedman is an MIT Media Lab PhD who helps students learn how to use AI as a coach—so they can think better, get unstuck, and take ownership of their learning. He’s worked at Google and IDEO and has helped organizations like LEGO and McGraw Hill build for the students and teachers they serve. Now he offers free 1:1 sessions where students bring a real challenge and learn a practical, repeatable way to use AI responsibly—without replacing their own work or voice.</p>
            <div className="about-links" style={{ marginTop: '32px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <a href="https://buildempathy.com/portfolio" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--comic-blue)', fontWeight: 600, textDecoration: 'none' }}>Link to Elliott’s Portfolio →</a>
              <a href="https://www.linkedin.com/in/customerobsession/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--comic-blue)', fontWeight: 600, textDecoration: 'none' }}>LinkedIn Profile →</a>
            </div>
          </div>
        </div>
      </section>
      </div>

      <section className="cta-section">
        <div className="container">
          <h2>Book a free session</h2>
          <p className="subtitle">One hour. One real problem. A new way to get unstuck.</p>
          <a href="https://outlook.office365.com/book/Superpower@robotsandpencils.com" target="_blank" rel="noopener noreferrer" className="cta-btn">Book a Session</a>
          <p className="cta-note">Want to sit in as a parent? Totally fine.</p>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
