/**
 * icons.js — Shared SVG icons for all Info Cards blocks.
 * Used by:
 *   - blocks.js  (admin dashboard block cards)
 *   - options.js (parent selector UI)
 */

// Info Cards — Grid of cards icon
export const infoCardsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 576 512"
    fill="white"
  >
    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
  </svg>
);

// Player Cards — Person/player profile card icon
export const playerCardsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <rect width="24" height="24" rx="3" fill="#6a1b9a" />
    <circle cx="12" cy="9" r="3.5" fill="#fff" opacity="0.9" />
    <path d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="#fff" opacity="0.7" />
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      fill="none"
      stroke="#fff"
      strokeWidth="1"
      opacity="0.4"
    />
  </svg>
);

// News Cards — Newspaper/article card icon
export const newsCardsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <rect width="24" height="24" rx="3" fill="#00897b" />
    <rect x="4" y="4" width="16" height="4" rx="1" fill="#fff" opacity="0.9" />
    <rect
      x="4"
      y="10"
      width="10"
      height="2"
      rx="0.5"
      fill="#fff"
      opacity="0.6"
    />
    <rect
      x="4"
      y="14"
      width="12"
      height="2"
      rx="0.5"
      fill="#fff"
      opacity="0.5"
    />
    <rect
      x="4"
      y="18"
      width="8"
      height="2"
      rx="0.5"
      fill="#fff"
      opacity="0.4"
    />
  </svg>
);

// Magnifying Glass Cards — Search/zoom card icon
export const magnifyingGlassCardsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <rect width="24" height="24" rx="3" fill="#1565c0" />
    <circle
      cx="10.5"
      cy="10.5"
      r="5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.9"
    />
    <line
      x1="14.5"
      y1="14.5"
      x2="19"
      y2="19"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.9"
    />
    <rect x="8" y="9" width="5" height="1" rx="0.5" fill="#fff" opacity="0.5" />
    <rect
      x="8"
      y="11"
      width="3.5"
      height="1"
      rx="0.5"
      fill="#fff"
      opacity="0.4"
    />
  </svg>
);

// Expanding Flex Cards — Expandable panels icon
export const expandingFlexCardsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <rect width="24" height="24" rx="3" fill="#b5631f" />
    <rect x="3" y="4" width="4" height="16" rx="1" fill="#fff" opacity="0.5" />
    <rect
      x="8.5"
      y="4"
      width="7"
      height="16"
      rx="1"
      fill="#fff"
      opacity="0.9"
    />
    <rect x="17" y="4" width="4" height="16" rx="1" fill="#fff" opacity="0.5" />
  </svg>
);

// Expandable Animated Card Slider — Sliding cards icon
export const expandableAnimatedCardSliderIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <rect width="24" height="24" rx="3" fill="#3949ab" />
    <rect
      x="2"
      y="5"
      width="8"
      height="14"
      rx="1.5"
      fill="#fff"
      opacity="0.5"
    />
    <rect
      x="8"
      y="4"
      width="8"
      height="16"
      rx="1.5"
      fill="#fff"
      opacity="0.9"
    />
    <rect
      x="14"
      y="5"
      width="8"
      height="14"
      rx="1.5"
      fill="#fff"
      opacity="0.5"
    />
    <polygon points="4,12 6,10 6,14" fill="#fff" opacity="0.7" />
    <polygon points="20,12 18,10 18,14" fill="#fff" opacity="0.7" />
  </svg>
);

// Animated Gradient Cards — Gradient/colorful card icon
export const animatedGradientCardsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <defs>
      <linearGradient id="gradCard" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4CAF50" />
        <stop offset="100%" stopColor="#1B5E20" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="3" fill="url(#gradCard)" />
    <rect x="4" y="5" width="16" height="14" rx="2" fill="#fff" opacity="0.2" />
    <rect x="6" y="8" width="12" height="2" rx="1" fill="#fff" opacity="0.8" />
    <rect
      x="6"
      y="12"
      width="8"
      height="1.5"
      rx="0.75"
      fill="#fff"
      opacity="0.5"
    />
    <circle cx="17" cy="16" r="2" fill="#fff" opacity="0.6" />
  </svg>
);

// 3D Fold Out Reveal — Folding/3D card icon
export const foldOutRevealIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <rect width="24" height="24" rx="3" fill="#c38d35" />
    <path d="M4 5h7v14H4z" fill="#fff" opacity="0.9" />
    <path d="M11 5l6 2v10l-6 2z" fill="#fff" opacity="0.6" />
    <path d="M17 7l3 1v8l-3 1z" fill="#fff" opacity="0.35" />
  </svg>
);

// Nice Box — Nice box block icon
export const niceBoxIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
    <ellipse cx="32" cy="52" rx="18" ry="6" fill="rgba(0,0,0,0.15)" />

    <rect x="14" y="10" width="36" height="28" rx="6" fill="#4F46E5" />

    <rect
      x="18"
      y="14"
      width="36"
      height="28"
      rx="6"
      fill="#818CF8"
      opacity="0.9"
    />

    <path d="M24 20H40" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path
      d="M24 27H36"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.7"
    />

    <path
      d="M44 40L48 50L51 46L56 51L58 49L53 44L57 42L44 40Z"
      fill="#111827"
    />
  </svg>
);
