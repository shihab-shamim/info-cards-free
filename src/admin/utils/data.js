import { animatedGradientCardsIcon, expandableAnimatedCardSliderIcon, expandingFlexCardsIcon, foldOutRevealIcon, infoCardsIcon, magnifyingGlassCardsIcon, newsCardsIcon, playerCardsIcon } from "../../utils/icons";

const slug = "info-cards";

export const dashboardInfo = (info) => {
  const { version, licenseActiveNonce, action, nonce, adminUrl, deleteDataOnUninstall, uninstallNonce } = info;



  return {
    name: `Info Cards`,
    displayName: `Info Cards — Add Text and Media in Card Layouts.`,
    description:
      "The Info Cards Block Plugin for WordPress allows you to create beautifully designed and informative cards within your content . With this plugin, you can present your content interactively and engagingly, making it easier for your audience to consume and understand your message.",
    slug,
    version,
    displayOurPlugins: true,
    media: {
      logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
      banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
      thumbnail: `https://ps.w.org/info-cards/assets/icon-128x128.png?rev=2881794`,
      //   proThumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/parallax-section.png`,
      // video: "https://www.youtube.com/watch?v=milYZrqLJsE",
      // isYoutube: false,
    },
    pages: {
      org: `https://wordpress.org/plugins/${slug}/`,
      // landing: `https://bplugins.com/products/${slug}/`,
      docs: `https://bplugins.com/docs/${slug}/`,
      pricing: `https://bplugins.com/products/${slug}/pricing`,
    },
    freemius: {
      product_id: 17727,
      plan_id: 29468,
      public_key: "pk_a98bc1d71dc1e0a8bf0aede3af3e0",
    },
    licenseActiveNonce,
    action,
    nonce,
    adminUrl,
    deleteDataOnUninstall,
    uninstallNonce,
    startButton: {
      label: "Start Now",
      url: `wp-admin/post-new.php?post_type=page&title=Info Cards<!-- wp:icb/cards {"align":"wide","clientId":"24b0b5bd-d1b5-4234-9e21-684af8a46e6f"} /-->&nonce=${nonce}`,
    },
  };
};

export const welcomeInfo = (adminUrl = "") => ({
  // Hero card keyword chips
  keywords: ["Info Cards", "Shortcode", "12+ Layouts"],
  keywordsLabel: "Features",

  // Getting Started tabbed steps
  gettingStarted: {
    tabs: [
      {
        key: "gutenberg",
        label: "Gutenberg",
        steps: [
          {
            num: 1,
            title: "Add the Block",
            body: "Open the block editor. Click <strong>+</strong> or type <strong>/Info Cards</strong>.",
            link: { url: `${adminUrl}post-new.php`, label: "Open Editor" },
          },
          {
            num: 2,
            title: "Pick a Layout",
            body: "Choose a card layout or one of the <strong>12+ ready-made themes</strong>.",
          },
          {
            num: 3,
            title: "Add Your Content",
            body: "Add titles, descriptions, icons, images, and links to each card.",
          },
          {
            num: 4,
            title: "Style & Publish",
            body: "Adjust colors, typography, spacing, and borders, then publish.",
          },
        ],
      },
      {
        key: "shortcode",
        label: "Shortcode",
        steps: [
          {
            num: 1,
            title: "Create an Info Card",
            body: "Go to <strong>Info Cards</strong> in your admin menu and click <strong>Add New</strong>.",
            link: { url: `${adminUrl}post-new.php?post_type=icb`, label: "Add New" },
          },
          {
            num: 2,
            title: "Build & Publish",
            body: "Add your cards, configure the layout, and <strong>Publish</strong> the post.",
          },
          {
            num: 3,
            title: "Copy the Shortcode",
            body: "Go to <strong>Info Cards -> ShortCodes</strong> to find and copy the shortcode (e.g. <code>[icb id=\"123\"]</code>).",
            link: { url: `${adminUrl}edit.php?post_type=icb`, label: "All ShortCodes" },
          },
          {
            num: 4,
            title: "Paste & Display",
            body: "Paste the shortcode into any post, page, widget, or page builder layout.",
          },
        ],
      },
      {
        key: "elementor",
        label: "Elementor",
        steps: [
          {
            num: 1,
            title: "Create an Info Card",
            body: "Go to <strong>Info Cards -> Add New</strong> to build and publish a card, then copy its shortcode.",
            link: { url: `${adminUrl}post-new.php?post_type=icb`, label: "Add New" },
          },
          {
            num: 2,
            title: "Edit with Elementor",
            body: "Open any post or page in the <strong>Elementor</strong> editor.",
          },
          {
            num: 3,
            title: "Add Shortcode Widget",
            body: "Search for the <strong>Shortcode</strong> widget in the Elementor elements panel and drag it into your layout.",
          },
          {
            num: 4,
            title: "Paste Shortcode",
            body: "Paste your shortcode (e.g., <code>[icb id=\"123\"]</code>) into the widget input field and save your changes.",
          },
        ],
      },
      {
        key: "php",
        label: "PHP",
        steps: [
          {
            num: 1,
            title: "Get the ID",
            body: "Go to <strong>Info Cards -> ShortCodes</strong> and note the <strong>ID</strong> of the card you want to embed.",
            link: { url: `${adminUrl}edit.php?post_type=icb`, label: "All ShortCodes" },
          },
          {
            num: 2,
            title: "Copy PHP Function",
            body: "Copy the WordPress <code>do_shortcode</code> function: <pre><code>&lt;?php echo do_shortcode('[icb id=\"YOUR_ID\"]'); ?&gt;</code></pre>",
          },
          {
            num: 3,
            title: "Insert in Template",
            body: "Open your theme or template files (e.g., <code>single.php</code>, <code>page.php</code>) in an editor.",
          },
          {
            num: 4,
            title: "Replace ID & Save",
            body: "Paste the code into your PHP file and replace <code>YOUR_ID</code> with the actual ID of your info card.",
          },
        ],
      },
    ],
  },

  // Changelogs — each list item starts with <strong>Type:</strong> for badges
  changelogs: [
    {
      version: "3.0.1",
      type: "fix",
      list: [
        "<strong>Update:</strong> Added a modern and intuitive dashboard layout.",
        "<strong>Fix:</strong> CDN loading issue on page load.",
      ],
    },
    {
      version: "3.0.0",
      type: "new",
      list: ["<strong>New:</strong> Added 8+ new built-in blocks."],
    },
    {
      version: "2.0.7",
      type: "update",
      list: ["<strong>Update:</strong> Admin Dashboard updated."],
    },
    {
      version: "2.0.6",
      type: "update",
      list: ["<strong>Update:</strong> Universal Shortcodes — compatible with all page builders."],
    },
    {
      version: "2.0.5",
      type: "update",
      list: ["<strong>Update:</strong> Added a shortcode for the Pro version."],
    },
    {
      version: "2.0.4",
      type: "update",
      list: ["<strong>Update:</strong> Added a help page to this plugin."],
    },
  ],
  changelogsLimit: 6,
  changelogsReadMoreLabel: "View More Changelogs",

  // Pro upsell bullets (free users only)
  proFeatures: [
    "Universal Shortcodes: Compatible with all page builders.",
    "Fully Customizable",
    "Set Custom Color",
    "Built-in Templates",
    "Set Columns, Column Gap and Row Gap",
    "Use an Image in the Card",
    "Support Links & Buttons",
    "Typography Control",
    "Responsive Layout",
    "Easy to Use",
    "12+ Pre-built Info Card Layouts",
    "Customizable Title & Description",
    "Feature List Support Inside Cards",
    "Customizable Icon",
    "Icon Size & Style Control",
    "Background & Gradient Customization",
    "Padding & Spacing Options",
    "Border Style & Radius Control",
    "Added 7+ new built-in blocks.",
  ],
});

export const demoInfo = {

  demos: [
    {
      icon: infoCardsIcon,
      title: "Info Cards",
      children: [
        {
          title: "Default",
          type: "iframe",
          category: "basic",
          description: "Clean and minimal default layout design.",
          url: "https://bblockswp.com/demo/info-card-default/",
        },
        {
          title: "Theme 1",
          type: "iframe",
          category: "theme",
          description: "Modern styled layout with enhanced typography.",
          url: "https://bblockswp.com/demo/info-cards-theme-1/",
        },
        {
          title: "Theme 2",
          type: "iframe",
          category: "theme",
          description: "Balanced layout with subtle design accents.",
          url: "https://bblockswp.com/demo/info-cards-theme-2/",
        },
        {
          title: "Theme 3",
          type: "iframe",
          category: "theme",
          description: "Elegant card layout with refined spacing.",
          url: "https://bblockswp.com/demo/info-cards-theme-3/",
        },
        {
          title: "Theme 4",
          type: "iframe",
          category: "theme",
          description: "Bold visual style with strong highlight areas.",
          url: "https://bblockswp.com/demo/info-cards-theme-4/",
        },
        {
          title: "Theme 5",
          type: "iframe",
          category: "theme",
          description: "Clean boxed layout with modern UI elements.",
          url: "https://bblockswp.com/demo/info-cards-theme-5/",
        },
        {
          title: "Theme 6",
          type: "iframe",
          category: "theme",
          description: "Creative layout with layered design structure.",
          url: "https://bblockswp.com/demo/info-cards-theme-6/",
        },
        {
          title: "Theme 7",
          type: "iframe",
          category: "theme",
          description: "Minimal and spacious design for modern sites.",
          url: "https://bblockswp.com/demo/info-cards-theme-7/",
        },
        {
          title: "Theme 8",
          type: "iframe",
          category: "theme",
          description: "Professional style layout with refined visuals.",
          url: "https://bblockswp.com/demo/info-cards-theme-8/",
        },
        {
          title: "Theme 9",
          type: "iframe",
          category: "theme",
          description: "Advanced structured layout with stylish elements.",
          url: "https://bblockswp.com/demo/info-cards-theme-9/",
        },
        {
          title: "Theme 10",
          type: "iframe",
          category: "theme",
          description: "Modern UI layout optimized for readability.",
          url: "https://bblockswp.com/demo/info-cards-theme-10/",
        },
        {
          title: "Theme 11",
          type: "image",
          category: "theme",
          description: "Creative visual layout with dynamic design.",
          url: "https://bblockswp.com/demo/info-cards-theme-11/",
        },
        {
          title: "Theme 12",
          type: "iframe",
          category: "premium",
          description: "Advanced premium layout with enhanced styling.",
          url: "https://bblockswp.com/demo/info-cards-theme-12/",
        },
      ]
    },
    {
      icon: foldOutRevealIcon,
      title: "3D Fold Out Reveal",
      type: "iframe",
      category: "basic",
      description: "Clean and minimal default layout design.",
      url: "https://bblockswp.com/demo/info-cards-3d-fold-out-reveal/",
    },
    {
      icon: expandingFlexCardsIcon,
      title: "Expanding Flex Cards",
      type: "iframe",
      category: "basic",
      description: "Clean and minimal default layout design.",
      url: "https://bblockswp.com/demo/info-cards-expanding-flex-cards/",
    },
    {
      icon: animatedGradientCardsIcon,
      title: "Animated Gradient Cards",
      type: "iframe",
      category: "basic",
      description: "Clean and minimal default layout design.",
      url: "https://bblockswp.com/demo/info-cards-animated-gradient-cards/",
    },
    {
      icon: expandableAnimatedCardSliderIcon,
      title: "Expandable Animated Card Slider",
      type: "iframe",
      category: "basic",
      description: "Clean and minimal default layout design.",
      url: "https://bblockswp.com/demo/info-cards-2/",
    },
    {
      icon: magnifyingGlassCardsIcon,
      title: "Magnifying Glass Cards",
      type: "iframe",
      category: "basic",
      description: "Clean and minimal default layout design.",
      url: "https://bblockswp.com/demo/info-cards-magnifying-glass-card/",
    },
    {
      icon: newsCardsIcon,
      title: "News Cards",
      type: "iframe",
      category: "basic",
      description: "Clean and minimal default layout design.",
      url: "https://bblockswp.com/demo/info-cards-news-cards/",
    },
    {
      icon: playerCardsIcon,
      title: "Player Cards",
      type: "iframe",
      category: "basic",
      description: "Clean and minimal default layout design.",
      url: "https://bblockswp.com/demo/info-cards-player-cards/",
    }



  ],
};

export const pricingInfo = {
  logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
  pluginId: 17727,
  planId: 29468,
  licenses: [1, 3, null],
  button: {
    label: "Buy Now ➜",
  },
  featured: {
    selected: 3, // choose from licenses item
  },
};
