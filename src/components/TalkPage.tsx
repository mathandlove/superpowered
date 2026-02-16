import Navbar from './Navbar';
import Footer from './Footer';
import './TalkPage.css';
import elliottPhoto from '../assets/elliottHedman.webp';

const TalkPage = () => {
  return (
    <>
      <Navbar hideCta={true} hideBanner={true} />
      
      <div className="talk-hero">
        <div className="talk-hero-content">
          <div className="talk-label">Upcoming Talk</div>
          <h1>AI as a Coach, <span className="talk-title-accent">Not a Shortcut</span></h1>
          
          <div className="talk-details-card">
            <div className="talk-detail-item">
              <span className="detail-icon">📅</span>
              <div className="detail-text">
                <strong>Monday, March 2</strong>
                <span>6:00 PM - 7:00 PM</span>
              </div>
            </div>
            <div className="talk-detail-item">
              <span className="detail-icon">📍</span>
              <div className="detail-text">
                <strong>AERO N240</strong>
                <span>University of Colorado Boulder</span>
              </div>
            </div>
            <div className="talk-detail-item">
              <span className="detail-icon">🎤</span>
              <div className="detail-text">
                <strong>Dr. Elliott Hedman</strong>
                <span>Researcher, MIT Media Lab</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="talk-about">
        <div className="container">
          <div className="section-label">About the Talk</div>
          <h2>Why attend?</h2>
          <div className="text-content">
            <p>Most students use AI to skip the thinking—copying answers, generating essays, and bypassing the struggle of learning. But what if AI could do the opposite?</p>
            <p>In this talk, Dr. Elliott Hedman will show how AI can be used as a <strong>coach</strong>, not a shortcut. You'll learn practical techniques to:</p>
            <ul>
              <li>Use AI to get unstuck without giving away the answer.</li>
              <li>Practice critical thinking and problem-solving skills.</li>
              <li>Build confidence in your own abilities.</li>
            </ul>
            <p>Whether you're a student, educator, or parent, you'll leave with a new perspective on how to use these powerful tools responsibly and effectively.</p>
          </div>
        </div>
      </section>

      <section className="talk-speaker">
        <div className="container">
          <div className="section-label">About the Speaker</div>
          <div className="speaker-profile">
            <img src={elliottPhoto} alt="Elliott Hedman" className="speaker-photo" />
            <div className="speaker-bio">
              <h3>Dr. Elliott Hedman</h3>
              <p>Dr. Elliott Hedman is an MIT Media Lab PhD who helps students learn how to use AI as a coach. He’s worked at Google and IDEO and has helped organizations like LEGO and McGraw Hill build for the students and teachers they serve.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TalkPage;
