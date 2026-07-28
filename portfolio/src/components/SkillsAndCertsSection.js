import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { professionalSkills } from '../data/portfolioData';

const allCertificatesFile = require('../assets/certs/Ulrich_Snyman_All_Certificates.pdf');
const cvFile = require('../assets/certs/Ulrich_Snyman_CV_v2.pdf');

/** Tech-stack categories with icons */
const techCategories = {
  languages: [
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Sass/SCSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { name: 'Delphi', img: require('../assets/icons/delphi.png') },
  ],
  frameworks: [
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Django', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Spring', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'HTMX', img: require('../assets/icons/htmx.png') },
  ],
  databases: [
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Mongoose', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg' },
    { name: 'Microsoft Access', img: require('../assets/icons/MicrosoftAccess.png') },
  ],
  tools: [
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'WebGL', img: 'https://images.seeklogo.com/logo-png/31/1/webgl-logo-png_seeklogo-316725.png' },
    { name: 'GraphQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'Websockets', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
  ],
};

/** Certificate qualifications list, each paired with a representative logo */
const qualifications = [
  { name: 'Introduction to Programming', img: require('../assets/icons/programming.svg').default },
  { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'HTMX', img: require('../assets/icons/htmx.png') },
  { name: 'MERN Stack', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'SQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Java (Beginner)', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Java (Advanced)', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
];

/**
 * Builds the ordered list of skill/tech/cert blocks shown in the carousel:
 * 4 tech categories + 3 professional skill groups + 1 certificates block = 8 total.
 */
function buildSkillBlocks() {
  const blocks = [];

  // Tech categories (icon grid)
  Object.entries(techCategories).forEach(([name, techs]) => {
    blocks.push({
      id: name,
      title: name.charAt(0).toUpperCase() + name.slice(1),
      type: 'tech',
      items: techs,
    });
  });

  // Professional skill groups (bullet list)
  professionalSkills.forEach(group => {
    blocks.push({
      id: group.title,
      title: group.title,
      type: 'skills',
      icon: group.icon,
      items: group.skills,
    });
  });

  // Certificates block
  blocks.push({
    id: 'certificates',
    title: 'Certificates',
    type: 'certs',
    items: qualifications,
  });

  return blocks;
}

const skillBlocks = buildSkillBlocks();
const BLOCK_COUNT = skillBlocks.length;

function TechBlock({ block, style }, ref) {
  if (block.type === 'tech') {
    return (
      <div ref={ref} className="carousel-card-content tech-category" style={style}>
        <h3 className="category-title">{block.title}</h3>
        <div className="technologies-grid">
          {block.items.map(tech => (
            <div key={tech.name} className="technology-card" title={tech.name}>
              <img src={tech.img} alt={`${tech.name} logo`} className="technology-icon" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === 'skills') {
    return (
      <div ref={ref} className="carousel-card-content tech-category" style={style}>
        <h3 className="category-title">
          {block.icon && <img src={block.icon} alt="" className="category-title-icon" />}
          <span>{block.title}</span>
        </h3>
        <ul className="skill-card-list">
          {block.items.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }

  // certs
  return (
    <div ref={ref} className="carousel-card-content tech-category" style={style}>
      <h3 className="category-title">{block.title}</h3>
      <div className="technologies-grid">
        {block.items.map(cert => (
          <div key={cert.name} className="technology-card" title={cert.name}>
            <img src={cert.img} alt={`${cert.name} certificate logo`} className="technology-icon" />
            <span className="tech-name">{cert.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const ForwardedTechBlock = React.forwardRef(TechBlock);

/**
 * Returns the relative offset (-N..N) of a block's index from the active
 * index, wrapping around the ends of the list so the carousel loops.
 */
function relativeOffset(index, activeIndex, count) {
  let offset = index - activeIndex;
  if (offset > count / 2) offset -= count;
  if (offset < -count / 2) offset += count;
  return offset;
}

function SkillsAndCertsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxCardHeight, setMaxCardHeight] = useState(null);
  const wheelLockRef = useRef(false);
  const carouselRef = useRef(null);
  const cardContentRefs = useRef([]);
  const goNextRef = useRef(null);
  const goPrevRef = useRef(null);

  const goTo = useCallback((index) => {
    setActiveIndex(((index % BLOCK_COUNT) + BLOCK_COUNT) % BLOCK_COUNT);
  }, []);

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  goNextRef.current = goNext;
  goPrevRef.current = goPrev;

  // Measure every card's natural content height so every card in the
  // carousel can be resized to match the tallest one, regardless of which
  // block is currently active. Height is cleared (and remeasured) on resize
  // so it stays accurate across breakpoints.
  useLayoutEffect(() => {
    if (maxCardHeight !== null) return;
    const heights = cardContentRefs.current.map(el => (el ? el.scrollHeight : 0));
    const max = Math.max(0, ...heights);
    if (max > 0) setMaxCardHeight(max);
  }, [maxCardHeight]);

  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => setMaxCardHeight(null), 150);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Allow circulating through the collage by scrolling while the mouse is over
  // it. A native (non-passive) listener is required because React attaches
  // onWheel as a passive listener by default, which silently ignores
  // preventDefault() and lets the page scroll underneath the carousel.
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return undefined;

    const wheelHandler = (e) => {
      e.preventDefault();
      if (wheelLockRef.current) return;
      wheelLockRef.current = true;
      if (e.deltaY > 0 || e.deltaX > 0) {
        goNextRef.current();
      } else if (e.deltaY < 0 || e.deltaX < 0) {
        goPrevRef.current();
      }
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 350);
    };

    el.addEventListener('wheel', wheelHandler, { passive: false });
    return () => el.removeEventListener('wheel', wheelHandler);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      goNext();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goPrev();
    }
  }, [goNext, goPrev]);

  const activeBlock = skillBlocks[activeIndex];

  return (
    <section id="skills" className="skills-certs-section animate-slide-in">
      <h2>Skills, Technologies &amp; Certificates</h2>
      <p className="section-subtitle">Technologies, tools, professional skills, and qualifications</p>

      {/* ── Action buttons live at the top, under the header ── */}
      <div className="skills-cta-row">
        <a
          href={allCertificatesFile}
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-certs-btn"
          aria-label="View all certificates (PDF)"
        >
          View Certificates
        </a>
        <a
          href={cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-certs-btn view-cv-btn"
          aria-label="View CV (PDF)"
        >
          View CV
        </a>
      </div>

      {/* ── Collage-style carousel: click arrows or scroll over it to circulate ── */}
      <div
        className="skills-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Skills, technologies and certificates"
        tabIndex="0"
        ref={carouselRef}
        onKeyDown={handleKeyDown}
      >
        <button
          type="button"
          className="carousel-arrow carousel-arrow-prev"
          onClick={goPrev}
          aria-label="Show previous category"
        >
          &#10094;
        </button>

        <div className="carousel-stage">
          {skillBlocks.map((block, i) => {
            const offset = relativeOffset(i, activeIndex, BLOCK_COUNT);
            const isActive = offset === 0;
            return (
              <div
                key={block.id}
                className={`carousel-card${isActive ? ' active' : ''}`}
                style={{ '--offset': offset, '--abs-offset': Math.abs(offset) }}
                aria-hidden={!isActive}
                inert={!isActive}
              >
                <ForwardedTechBlock
                  block={block}
                  ref={(el) => { cardContentRefs.current[i] = el; }}
                  style={maxCardHeight ? { minHeight: `${maxCardHeight}px` } : undefined}
                />
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="carousel-arrow carousel-arrow-next"
          onClick={goNext}
          aria-label="Show next category"
        >
          &#10095;
        </button>
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Select category">
        {skillBlocks.map((block, i) => (
          <button
            key={block.id}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Show ${block.title}`}
            className={`carousel-dot${i === activeIndex ? ' active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <p className="carousel-current-label" aria-live="polite">{activeBlock.title}</p>
    </section>
  );
}

export default SkillsAndCertsSection;
