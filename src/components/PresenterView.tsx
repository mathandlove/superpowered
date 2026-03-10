import { useState, useCallback, useEffect, useRef } from 'react';
import { sampleDeck } from '../data/deck';
import PresenterSlide from './PresenterSlide';
import './PresenterView.css';

const DECK = sampleDeck;

export default function PresenterView() {
  const [index, setIndex] = useState(0);
  const [startTime] = useState(() => Date.now());
  const [elapsed, setElapsed] = useState(0);
  const notesPanelRef = useRef<HTMLDivElement>(null);

  const slide = DECK.slides[index];
  const total = DECK.slides.length;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const goNext = useCallback(() => {
    if (!isLast) setIndex((i) => i + 1);
  }, [isLast]);

  const goPrev = useCallback(() => {
    if (!isFirst) setIndex((i) => i - 1);
  }, [isFirst]);

  useEffect(() => {
    const t = setInterval(() => setElapsed(Math.floor((Date.now() - startTime) / 1000)), 1000);
    return () => clearInterval(t);
  }, [startTime]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setIndex(total - 1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goNext, goPrev, total]);

  /* Scroll notes panel to top when slide changes */
  useEffect(() => {
    notesPanelRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [index]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="presenter-view">
      <header className="presenter-view__bar">
        <span className="presenter-view__title">{DECK.title}</span>
        <span className="presenter-view__progress">
          {index + 1} <span className="presenter-view__progress-sep">/</span> {total}
        </span>
        <span className="presenter-view__timer" aria-label="Elapsed time">
          {formatTime(elapsed)}
        </span>
      </header>

      <div className="presenter-view__panels">
        <aside className="presenter-view__notes-panel" ref={notesPanelRef}>
          <div className="presenter-view__notes-label">Speaker notes</div>
          <div className="presenter-view__notes-content">
            {slide.speakerNotes}
          </div>
        </aside>

        <main className="presenter-view__slide-panel">
          <div className="presenter-view__slide-wrap">
            <PresenterSlide slide={slide} designSize={false} />
          </div>
        </main>
      </div>

      <nav className="presenter-view__nav">
        <button
          type="button"
          className="presenter-view__nav-btn"
          onClick={goPrev}
          disabled={isFirst}
          aria-label="Previous slide"
        >
          ← Previous
        </button>
        <span className="presenter-view__nav-hint">← → or Space to move</span>
        <button
          type="button"
          className="presenter-view__nav-btn"
          onClick={goNext}
          disabled={isLast}
          aria-label="Next slide"
        >
          Next →
        </button>
      </nav>
    </div>
  );
}
