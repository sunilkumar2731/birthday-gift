/* ============================================================
   OUR BEAUTIFUL MEMORIES — Photo Memories & Final Surprise
   Cinematic interactive photo gallery extension for the
   birthday experience.
   ============================================================ */

/**
 * ------------------------------------------------------------
 * 1. MEMORIES CONFIGURATION
 * ------------------------------------------------------------
 * You can easily add your own photographs by placing them in
 * the 'public/images/' folder and updating the image paths below.
 * If an image file does not exist or is missing, a beautiful
 * romantic placeholder will automatically be displayed!
 */
export const memories = [
  {
    id: 1,
    title: "Memory 01",
    tag: "First Spark",
    image: "./images/memory1.jpg",
    caption: "The day our story began & smiles became unforgettable",
    date: "A Beautiful Beginning",
    color: "#ff8fa3"
  },
  {
    id: 2,
    title: "Memory 02",
    tag: "Playful Smiles",
    image: "./images/memory2.jpg",
    caption: "Every little laugh and silly face we share together",
    date: "Pure Happiness",
    color: "#ffb4a2"
  },
  {
    id: 3,
    title: "Memory 03",
    tag: "Timeless Us",
    image: "./images/memory3.jpg",
    caption: "Classic, beautiful, and forever etched in my heart",
    date: "Captured Moments",
    color: "#e5989b"
  },
  {
    id: 4,
    title: "Memory 04",
    tag: "In Your Eyes",
    image: "./images/memory4.jpg",
    caption: "Looking at you and knowing every moment together is a treasure",
    date: "Under Open Skies",
    color: "#ffcbf2"
  },
  {
    id: 5,
    title: "Memory 05",
    tag: "Floating Hearts",
    image: "./images/memory5.jpg",
    caption: "Surrounded by little hearts, sweet smiles, and pure happiness",
    date: "Cherished Moments",
    color: "#fec5bb"
  },
  {
    id: 6,
    title: "Memory 06",
    tag: "Holding Hands",
    image: "./images/memory6.jpg",
    caption: "Hand in hand, looking at you and knowing you're my favorite",
    date: "Side by Side",
    color: "#fcd5ce"
  },
  {
    id: 7,
    title: "Memory 07",
    tag: "Growing Closer",
    image: "./images/memory7.jpg",
    caption: "Every day learning more about the beautiful person you are",
    date: "Side by Side",
    color: "#e8aeec"
  },
  {
    id: 8,
    title: "Memory 08",
    tag: "Forever & Always",
    image: "./images/memory8.jpg",
    caption: "Here's to a lifetime of celebrating you, every single year",
    date: "Happy Birthday",
    color: "#f4a261"
  }
];

// Helper to generate elegant romantic SVG placeholders when images aren't uploaded yet
export function getPlaceholderSvg(item) {
  const gradients = [
    ['#ffe5ec', '#ffb3c6', '#fb6f92', '#851d41'],
    ['#fff1e6', '#fde2e4', '#fbb1bd', '#a22a57'],
    ['#f8edeb', '#fae1dd', '#e8a598', '#7b2cbf'],
    ['#f0efeb', '#ffe5d9', '#ffcad4', '#d81159'],
    ['#fff0f3', '#ffccd5', '#ff758f', '#590d22'],
    ['#f7ede2', '#f5cac3', '#f28482', '#6b2d5c'],
    ['#edf2f4', '#fec5bb', '#fa8072', '#4a0e2e'],
    ['#fff8e7', '#ffd6a5', '#ff9f1c', '#9e2a2b']
  ];
  const g = gradients[(item.id - 1) % gradients.length];

  return `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="600" height="750">
      <defs>
        <radialGradient id="bg" cx="50%" cy="40%" r="75%">
          <stop offset="0%" stop-color="${g[0]}" />
          <stop offset="40%" stop-color="${g[1]}" />
          <stop offset="78%" stop-color="${g[2]}" />
          <stop offset="100%" stop-color="${g[3]}" />
        </radialGradient>
        <radialGradient id="glow" cx="50%" cy="38%" r="45%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85" />
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.25" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="600" height="750" fill="url(#bg)" />
      
      <!-- Decorative circles / bokeh -->
      <circle cx="120" cy="180" r="90" fill="#ffffff" opacity="0.18" filter="url(#soft)" />
      <circle cx="480" cy="220" r="110" fill="#ffffff" opacity="0.14" filter="url(#soft)" />
      <circle cx="300" cy="380" r="160" fill="url(#glow)" />
      <circle cx="200" cy="520" r="80" fill="#ffffff" opacity="0.12" filter="url(#soft)" />
      
      <!-- Center romantic camera / heart emblem -->
      <g transform="translate(300, 290)">
        <!-- Outer glowing ring -->
        <circle r="72" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.6" stroke-dasharray="6,4" />
        <circle r="60" fill="#ffffff" opacity="0.22" />
        <circle r="52" fill="#ffffff" opacity="0.32" />
        
        <!-- Heart in camera icon -->
        <path d="M 0,22 C -24,2 -40,-12 -40,-26 C -40,-38 -30,-48 -18,-48 C -9,-48 -2,-42 0,-34 C 2,-42 9,-48 18,-48 C 30,-48 40,-38 40,-26 C 40,-12 24,2 0,22 Z"
              fill="#ffffff" opacity="0.95" />
        
        <!-- Sparkle accents -->
        <path d="M -54,-54 Q -48,-48 -48,-42 Q -48,-48 -42,-54 Q -48,-54 -48,-60 Q -48,-54 -54,-54 Z" fill="#fff" opacity="0.9" />
        <path d="M 50,-50 Q 55,-45 55,-40 Q 55,-45 60,-50 Q 55,-50 55,-55 Q 55,-50 50,-50 Z" fill="#fff" opacity="0.85" />
      </g>
      
      <!-- Labels -->
      <text x="300" y="420" text-anchor="middle" font-family="'Cormorant Garamond', Georgia, serif" font-size="19" font-style="italic" font-weight="600" letter-spacing="4" fill="#ffffff" opacity="0.9">
        ${item.tag.toUpperCase()}
      </text>
      
      <text x="300" y="468" text-anchor="middle" font-family="'Fraunces', Georgia, serif" font-size="34" font-weight="700" letter-spacing="1" fill="#ffffff">
        ${item.title}
      </text>
      
      <line x1="230" y1="492" x2="370" y2="492" stroke="#ffffff" stroke-width="1.8" opacity="0.55" />
      
      <text x="300" y="525" text-anchor="middle" font-family="'Cormorant Garamond', Georgia, serif" font-size="20" font-style="italic" fill="#ffffff" opacity="0.95">
        &ldquo;${item.date}&rdquo;
      </text>
      
      <g transform="translate(300, 640)">
        <rect x="-120" y="-18" width="240" height="36" rx="18" fill="#ffffff" opacity="0.25" />
        <text x="0" y="6" text-anchor="middle" font-family="'Cormorant Garamond', Georgia, serif" font-size="14" font-weight="600" letter-spacing="2" fill="#ffffff">
          TAP TO VIEW MEMORY
        </text>
      </g>
    </svg>
  `)}`;
}

/**
 * ------------------------------------------------------------
 * 2. STATE & GLOBALS
 * ------------------------------------------------------------
 */
let currentCarouselIndex = 0;
let currentLightboxIndex = 0;
let isCarouselAnimating = false;
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

/**
 * ------------------------------------------------------------
 * 3. INITIALIZE MEMORIES SECTION
 * ------------------------------------------------------------
 */
export function initMemoriesSection() {
  const container = document.getElementById('memoriesSection');
  if (!container) return;

  renderCarousel();
  renderMemoryWall();
  initLightbox();
  initPetalRain();
  setupEventListeners();

  // Expose global hooks for birthday.js
  window.showMemoriesPrompt = showTransitionPrompt;
  window.resetMemories = resetMemories;
}

/**
 * ------------------------------------------------------------
 * 4. RENDER 3D CAROUSEL
 * ------------------------------------------------------------
 */
function renderCarousel() {
  const track = document.getElementById('carouselTrack');
  const dotsContainer = document.getElementById('carouselDots');
  if (!track || !dotsContainer) return;

  track.innerHTML = '';
  dotsContainer.innerHTML = '';

  memories.forEach((item, index) => {
    // Card element
    const card = document.createElement('div');
    card.className = 'mem-card';
    card.setAttribute('data-index', index);

    const placeholder = getPlaceholderSvg(item);

    card.innerHTML = `
      <div class="mem-card__inner">
        <div class="mem-card__photo-frame">
          <img src="${item.image}" alt="${item.caption}" class="mem-card__img"
               onerror="this.onerror=null; this.src='${placeholder}';" />
          <div class="mem-card__pin" aria-hidden="true"></div>
          <div class="mem-card__tag">${item.tag}</div>
        </div>
        <div class="mem-card__details">
          <span class="mem-card__num">${item.title}</span>
          <p class="mem-card__caption">${item.caption}</p>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      if (index === currentCarouselIndex) {
        openLightbox(index);
      } else {
        updateCarousel(index);
      }
    });

    track.appendChild(card);

    // Dot element
    const dot = document.createElement('button');
    dot.className = `mem-dot ${index === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to ${item.title}`);
    dot.setAttribute('data-index', index);
    dot.addEventListener('click', () => updateCarousel(index));
    dotsContainer.appendChild(dot);
  });

  updateCarousel(0);
}

function updateCarousel(newIndex) {
  if (isCarouselAnimating) return;
  isCarouselAnimating = true;

  const cards = document.querySelectorAll('.mem-card');
  const dots = document.querySelectorAll('.mem-dot');
  const count = memories.length;

  currentCarouselIndex = (newIndex + count) % count;

  cards.forEach((card, i) => {
    const offset = (i - currentCarouselIndex + count) % count;

    card.classList.remove(
      'center',
      'left-1',
      'left-2',
      'right-1',
      'right-2',
      'hidden'
    );

    if (offset === 0) {
      card.classList.add('center');
    } else if (offset === 1) {
      card.classList.add('right-1');
    } else if (offset === 2) {
      card.classList.add('right-2');
    } else if (offset === count - 1) {
      card.classList.add('left-1');
    } else if (offset === count - 2) {
      card.classList.add('left-2');
    } else {
      card.classList.add('hidden');
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentCarouselIndex);
  });

  // Update info below carousel
  const infoTitle = document.getElementById('carouselInfoTitle');
  const infoSubtitle = document.getElementById('carouselInfoSubtitle');
  const infoDate = document.getElementById('carouselInfoDate');

  if (infoTitle && infoSubtitle) {
    infoTitle.style.opacity = '0';
    infoSubtitle.style.opacity = '0';
    if (infoDate) infoDate.style.opacity = '0';

    setTimeout(() => {
      const current = memories[currentCarouselIndex];
      infoTitle.textContent = current.title + " — " + current.tag;
      infoSubtitle.textContent = `"${current.caption}"`;
      if (infoDate) infoDate.textContent = `♥ ${current.date} ♥`;

      infoTitle.style.opacity = '1';
      infoSubtitle.style.opacity = '1';
      if (infoDate) infoDate.style.opacity = '1';
    }, 240);
  }

  setTimeout(() => {
    isCarouselAnimating = false;
  }, 500);
}

/**
 * ------------------------------------------------------------
 * 5. RENDER POLAROID MEMORY WALL
 * ------------------------------------------------------------
 */
function renderMemoryWall() {
  const wall = document.getElementById('memoryWallGrid');
  if (!wall) return;

  wall.innerHTML = '';

  const rotations = [-2.5, 1.8, -1.2, 2.8, -2.0, 1.5, -1.8, 2.2];

  memories.forEach((item, index) => {
    const polaroid = document.createElement('div');
    polaroid.className = 'polaroid-item';
    polaroid.setAttribute('data-index', index);
    const rot = rotations[index % rotations.length];
    polaroid.style.setProperty('--rot', `${rot}deg`);

    const placeholder = getPlaceholderSvg(item);

    polaroid.innerHTML = `
      <div class="polaroid-item__tape" aria-hidden="true"></div>
      <div class="polaroid-item__img-wrap">
        <img src="${item.image}" alt="${item.caption}" class="polaroid-item__img"
             onerror="this.onerror=null; this.src='${placeholder}';" />
        <span class="polaroid-item__badge">${item.tag}</span>
      </div>
      <div class="polaroid-item__caption">
        <span class="polaroid-item__num">${item.title}</span>
        <p class="polaroid-item__text">${item.caption}</p>
        <span class="polaroid-item__date">${item.date}</span>
      </div>
    `;

    polaroid.addEventListener('click', () => openLightbox(index));
    wall.appendChild(polaroid);
  });
}

/**
 * ------------------------------------------------------------
 * 6. FULLSCREEN LIGHTBOX VIEWER
 * ------------------------------------------------------------
 */
function initLightbox() {
  const modal = document.getElementById('memoriesLightbox');
  if (!modal) return;

  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => navigateLightbox(-1));
  nextBtn?.addEventListener('click', () => navigateLightbox(1));

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox__backdrop')) {
      closeLightbox();
    }
  });

  // Lightbox touch swipe
  modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleLightboxSwipe();
  }, { passive: true });
}

function openLightbox(index) {
  const modal = document.getElementById('memoriesLightbox');
  if (!modal) return;

  currentLightboxIndex = index;
  updateLightboxContent();

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
}

function closeLightbox() {
  const modal = document.getElementById('memoriesLightbox');
  if (!modal) return;

  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
}

function navigateLightbox(dir) {
  const count = memories.length;
  currentLightboxIndex = (currentLightboxIndex + dir + count) % count;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = memories[currentLightboxIndex];
  const imgEl = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const captionEl = document.getElementById('lightboxCaption');
  const counterEl = document.getElementById('lightboxCounter');
  const dateEl = document.getElementById('lightboxDate');
  const tagEl = document.getElementById('lightboxTag');

  if (!item || !imgEl) return;

  const placeholder = getPlaceholderSvg(item);

  imgEl.style.opacity = '0';
  imgEl.style.transform = 'scale(0.96)';

  setTimeout(() => {
    imgEl.src = item.image;
    imgEl.onerror = () => { imgEl.onerror = null; imgEl.src = placeholder; };
    imgEl.alt = item.caption;

    if (titleEl) titleEl.textContent = item.title;
    if (captionEl) captionEl.textContent = item.caption;
    if (counterEl) counterEl.textContent = `${currentLightboxIndex + 1} of ${memories.length}`;
    if (dateEl) dateEl.textContent = item.date;
    if (tagEl) tagEl.textContent = item.tag;

    imgEl.style.opacity = '1';
    imgEl.style.transform = 'scale(1)';
  }, 180);
}

function handleLightboxSwipe() {
  const diffX = touchStartX - touchEndX;
  const diffY = touchStartY - touchEndY;
  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
    if (diffX > 0) navigateLightbox(1);
    else navigateLightbox(-1);
  }
}

/**
 * ------------------------------------------------------------
 * 7. TRANSITION PROMPT LOGIC
 * ------------------------------------------------------------
 */
export function showTransitionPrompt() {
  const banner = document.getElementById('memoriesPromptBanner');
  if (!banner) return;

  banner.classList.add('is-visible');
}

export function openMemoriesSection() {
  const section = document.getElementById('memoriesSection');
  const promptBanner = document.getElementById('memoriesPromptBanner');
  if (!section) return;

  // Fade prompt banner
  if (promptBanner) promptBanner.classList.remove('is-visible');

  // Allow body scrolling
  document.body.classList.add('has-memories');

  // Smoothly scroll down to the memories experience
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Trigger reveal animations
  triggerRevealAnimations();
}

function resetMemories() {
  const banner = document.getElementById('memoriesPromptBanner');
  const section = document.getElementById('memoriesSection');
  if (banner) banner.classList.remove('is-visible');
  document.body.classList.remove('has-memories');
  closeLightbox();
}

/**
 * ------------------------------------------------------------
 * 8. EVENT LISTENERS & GESTURES
 * ------------------------------------------------------------
 */
function setupEventListeners() {
  // Transition prompt button click
  const openBtn = document.getElementById('btnOpenMemories');
  openBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openMemoriesSection();
  });

  // Carousel navigation arrows
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');

  prevBtn?.addEventListener('click', () => updateCarousel(currentCarouselIndex - 1));
  nextBtn?.addEventListener('click', () => updateCarousel(currentCarouselIndex + 1));

  // Carousel swipe gestures
  const track = document.getElementById('carouselContainer');
  track?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  track?.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) updateCarousel(currentCarouselIndex + 1);
      else updateCarousel(currentCarouselIndex - 1);
    }
  }, { passive: true });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('memoriesLightbox');
    const isLightboxOpen = modal?.classList.contains('is-open');

    if (isLightboxOpen) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') navigateLightbox(-1);
      else if (e.key === 'ArrowRight') navigateLightbox(1);
    } else {
      // In carousel when scrolled into view
      const section = document.getElementById('memoriesSection');
      if (section && section.getBoundingClientRect().top < window.innerHeight * 0.7) {
        if (e.key === 'ArrowLeft') updateCarousel(currentCarouselIndex - 1);
        else if (e.key === 'ArrowRight') updateCarousel(currentCarouselIndex + 1);
      }
    }
  });

  // Scroll back to tree button
  const backBtn = document.getElementById('btnBackToTree');
  backBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Final replay full journey button
  const finalReplayBtn = document.getElementById('btnFinalReplay');
  finalReplayBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const replayBtn = document.getElementById('replay');
      if (replayBtn) replayBtn.click();
    }, 600);
  });
}

/**
 * ------------------------------------------------------------
 * 9. FLOATING PETALS & GLOWING PARTICLES
 * ------------------------------------------------------------
 */
function initPetalRain() {
  const container = document.getElementById('memoriesPetals');
  if (!container) return;

  container.innerHTML = '';
  const petalCount = 20;

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.className = 'floating-petal';

    const size = 12 + Math.random() * 18;
    const left = Math.random() * 100;
    const delay = Math.random() * 12;
    const duration = 10 + Math.random() * 14;
    const drift = (Math.random() - 0.5) * 120;

    petal.style.width = `${size}px`;
    petal.style.height = `${size * 0.9}px`;
    petal.style.left = `${left}%`;
    petal.style.animationDelay = `${delay}s`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.setProperty('--drift', `${drift}px`);

    container.appendChild(petal);
  }
}

/**
 * ------------------------------------------------------------
 * 10. SCROLL REVEAL ANIMATIONS
 * ------------------------------------------------------------
 */
function triggerRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    observer.observe(el);
  });
}
