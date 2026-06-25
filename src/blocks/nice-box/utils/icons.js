const iconColor = "#4527a4";

export const blockIcon = (
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

export const verticalLineIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 14.707 14.707"
  >
    <rect x="6.275" y="0" width="2.158" height="14.707" />
  </svg>
);

export const horizontalLineIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 357 357"
  >
    <path d="M357,204H0v-51h357V204z" />
  </svg>
);
