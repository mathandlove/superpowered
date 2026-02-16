import { useEffect, useRef, useCallback, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { toPng } from 'html-to-image';
import './TalkSlide.css';

const TalkSlide = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);

  const rescale = useCallback(() => {
    const el = frameRef.current;
    if (!el) return;
    const scaleX = window.innerWidth / 1920;
    const scaleY = window.innerHeight / 1080;
    const scale = Math.min(scaleX, scaleY);
    el.style.transform = `scale(${scale})`;
  }, []);

  useEffect(() => {
    rescale();
    window.addEventListener('resize', rescale);
    return () => window.removeEventListener('resize', rescale);
  }, [rescale]);

  const handleDownload = useCallback(async () => {
    const el = frameRef.current;
    const page = el?.parentElement;
    if (!el || !page) return;
    setExporting(true);

    // Save current inline styles so we can restore later
    const savedFrameStyle = el.style.cssText;
    const savedPageStyle = page.style.cssText;

    // Pause burst animation
    const burst = el.querySelector('.slide-burst') as HTMLElement | null;
    const savedBurstStyle = burst?.style.cssText || '';
    if (burst) {
      burst.style.animation = 'none';
      burst.style.transform = 'translate(-50%, -50%)';
    }

    // Place the frame at native 1920×1080 at the top-left of the viewport
    page.style.cssText = `
      position: fixed; inset: 0; z-index: 9999;
      overflow: hidden; background: transparent;
      display: block;
    `;
    el.style.cssText = `
      width: 1920px; height: 1080px;
      position: absolute; top: 0; left: 0;
      overflow: hidden;
      background: var(--comic-yellow);
      transform: none;
      transform-origin: top left;
    `;

    // Let the browser reflow
    await new Promise(r => setTimeout(r, 200));

    try {
      const dataUrl = await toPng(el, {
        width: 1920,
        height: 1080,
        pixelRatio: 1,
        cacheBust: true,
      });

      const link = document.createElement('a');
      link.download = 'talk-slide-1920x1080.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      // Restore everything
      el.style.cssText = savedFrameStyle;
      page.style.cssText = savedPageStyle;
      if (burst) burst.style.cssText = savedBurstStyle;
      rescale();
      setExporting(false);
    }
  }, [rescale]);

  return (
    <div className="slide-page">
      <div className="slide-frame" ref={frameRef}>
        {/* Animated comic burst */}
        <div className="slide-burst" />

        {/* Main card */}
        <div className="slide-card">
          <div className="slide-label">Upcoming Talk</div>

          <h1 className="slide-title">
            AI as a Coach,
            <span className="slide-title-accent">Not a Shortcut</span>
          </h1>

          <div className="slide-date">
            <span className="slide-date-badge">Monday, March 2 &middot; 6:00 PM &middot; AERO N240</span>
          </div>

          {/* QR code */}
          <div className="slide-qr">
            <QRCodeSVG
              value="https://superpowered.buildempathy.com"
              size={180}
              bgColor="#ffffff"
              fgColor="#1a1a2e"
              level="M"
            />
            <span className="slide-qr-label">superpowered.buildempathy.com</span>
          </div>

          {/* Bottom branding bar */}
          <div className="slide-footer">
            <span className="slide-brand">Superpowered</span>
            <span className="slide-speaker">Elliott Hedman</span>
          </div>
        </div>
      </div>

      {/* Download button — floats outside the slide frame */}
      <button
        className="slide-download-btn"
        onClick={handleDownload}
        disabled={exporting}
      >
        {exporting ? 'Exporting…' : 'Download 16:9 PNG'}
      </button>
    </div>
  );
};

export default TalkSlide;
