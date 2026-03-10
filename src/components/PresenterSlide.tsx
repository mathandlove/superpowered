import { useRef, useEffect, useState } from 'react';
import type { Slide as SlideType } from '../data/deck';
import './PresenterSlide.css';

interface PresenterSlideProps {
  slide: SlideType;
  /** When true, render at 1920×1080 design size (for export/fullscreen); when false, scale to fit container */
  designSize?: boolean;
  className?: string;
}

/**
 * Renders a single slide following presentation best practices:
 * - One main idea per slide
 * - Minimal text, large type (readable from back of room)
 * - Clear visual hierarchy
 * - Content auto-scales to fit slide boundaries
 */
export default function PresenterSlide({ slide, designSize = false, className = '' }: PresenterSlideProps) {
  const isTitle = slide.layout === 'title';
  const isSection = slide.layout === 'section';
  const isClosing = slide.layout === 'closing';
  const isQuote = slide.layout === 'quote';
  const hasBullets = slide.layout === 'bullet' && slide.bullets?.length;

  const cardRef = useRef<HTMLDivElement>(null);
  const contentAreaRef = useRef<HTMLDivElement>(null);
  const contentScaleRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (designSize) {
      setScale(1);
      return;
    }
    const card = cardRef.current;
    const contentArea = contentAreaRef.current;
    const content = contentScaleRef.current;
    if (!card || !contentArea || !content) return;

    const measure = () => {
      const availableHeight = contentArea.clientHeight;
      const availableWidth = contentArea.clientWidth;
      const contentHeight = content.scrollHeight;
      const contentWidth = content.scrollWidth;
      if (availableHeight <= 0 || availableWidth <= 0) return;
      const scaleH = contentHeight > 0 ? availableHeight / contentHeight : 1;
      const scaleW = contentWidth > 0 ? availableWidth / contentWidth : 1;
      const newScale = Math.min(1, scaleH, scaleW);
      setScale(newScale);
    };

    measure();
    const raf = requestAnimationFrame(() => measure());
    const ro = new ResizeObserver(measure);
    ro.observe(contentArea);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [slide.id, designSize]);

  return (
    <div
      className={`presenter-slide ${className}`}
      data-layout={slide.layout}
      data-design-size={designSize ? 'true' : undefined}
    >
      <div className="presenter-slide__burst" aria-hidden="true" />

      <div className="presenter-slide__card" ref={cardRef}>
        <div
          ref={contentAreaRef}
          className="presenter-slide__content-area"
          style={designSize ? undefined : { overflow: 'hidden' }}
        >
          <div
            ref={contentScaleRef}
            className="presenter-slide__content-scale"
            style={
              designSize
                ? undefined
                : { transform: `scale(${scale})`, transformOrigin: 'center center' }
            }
          >
            {/* Section / divider slides: bold number + title */}
            {(isSection || isClosing) && (
              <div className="presenter-slide__section">
                {!isClosing && <span className="presenter-slide__section-label">Section</span>}
                <h1 className="presenter-slide__headline presenter-slide__headline--large">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className="presenter-slide__subtitle">{slide.subtitle}</p>
                )}
              </div>
            )}

            {/* Title slide */}
            {isTitle && (
              <div className="presenter-slide__title-block">
                <span className="presenter-slide__badge">SXSW</span>
                <h1 className="presenter-slide__headline presenter-slide__headline--title">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className="presenter-slide__subtitle presenter-slide__subtitle--title">
                    {slide.subtitle}
                  </p>
                )}
              </div>
            )}

            {/* Quote slide */}
            {isQuote && (
              <div className="presenter-slide__quote-block">
                <blockquote className="presenter-slide__quote">{slide.title}</blockquote>
              </div>
            )}

            {/* Content / bullet slides */}
            {(slide.layout === 'content' || hasBullets) && (
              <div className="presenter-slide__content-block">
                <h2 className="presenter-slide__headline presenter-slide__headline--content">
                  {slide.title}
                </h2>
                {slide.subtitle && (
                  <p className="presenter-slide__subtitle">{slide.subtitle}</p>
                )}
                {hasBullets && (
                  <ul className="presenter-slide__bullets">
                    {slide.bullets!.map((line, i) => (
                      <li key={i} className="presenter-slide__bullet">
                        {line}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer on every slide */}
        <div className="presenter-slide__footer">
          <span className="presenter-slide__brand">Superpowered</span>
          <span className="presenter-slide__speaker">Elliott Hedman</span>
        </div>
      </div>
    </div>
  );
}
