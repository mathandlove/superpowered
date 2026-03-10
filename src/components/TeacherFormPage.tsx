import { useState, FormEvent } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './TeacherFormPage.css';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzBWzUMwlxVB2zgLqt-CkNu6u26TeFDfecJaM5XWZuRwCiBRrG2Llzf8CmjYAVipf-coQ/exec';

const TeacherFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!GOOGLE_SCRIPT_URL) {
      alert('Form submission not configured yet. Please set up Google Apps Script.');
      return;
    }

    setStatus('submitting');

    try {
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('school', formData.school);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      });

      setStatus('success');
      setFormData({ name: '', email: '', school: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Navbar hideCta />

      <div className="teacher-page">
        <div className="container">
          <div className="teacher-header">
            <div className="section-label">For Educators</div>
            <h1>Stay Connected</h1>
            <p className="teacher-intro">
              Sign up to get updates on my AI research, learn how to refer students for free sessions,
              and find out about volunteer opportunities.
            </p>
          </div>

          <div className="form-container">
            {status === 'success' ? (
              <div className="form-success">
                <h3>Thanks for reaching out!</h3>
                <p>We'll be in touch soon.</p>
                <button
                  className="submit-btn"
                  onClick={() => setStatus('idle')}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="teacher-form">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="your.email@school.edu"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="school">School / Organization</label>
                  <input
                    type="text"
                    id="school"
                    value={formData.school}
                    onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                    required
                    placeholder="Where do you teach?"
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending...' : 'Get in Touch'}
                </button>

                {status === 'error' && (
                  <p className="form-error">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TeacherFormPage;
