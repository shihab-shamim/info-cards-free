/**
 * blocks.js — Single source of truth for ALL blocks in the Info Cards plugin.
 * Mirrors: pdf-embed-block/src/bplugins-admin/utils/blocks.js
 *
 * Used by:
 *   - Blocks.js  (admin dashboard toggle UI)
 *   - edit.js    (each block reads ICB_BLOCK_DATA.isPremium for pro lock)
 *
 * Fields:
 *   name      {string}  — must match the build/blocks/<name> folder
 *   title     {string}  — human-readable label
 *   icon      {JSX}     — SVG icon for the block
 *   isPremium {boolean} — true = pro block (locked without license)
 *   required  {boolean} — if true, cannot be toggled off
 */

import {
  infoCardsIcon,
  playerCardsIcon,
  newsCardsIcon,
  magnifyingGlassCardsIcon,
  expandingFlexCardsIcon,
  expandableAnimatedCardSliderIcon,
  animatedGradientCardsIcon,
  foldOutRevealIcon,
  niceBoxIcon,
} from "../../utils/icons";

export default [
  {
    name: "info-cards",
    title: "Info Cards",
    icon: infoCardsIcon,
    isPremium: false,
    required: true,
  },
  {
    name: "player-cards",
    title: "Player Cards",
    icon: playerCardsIcon,
    isPremium: true,
  },
  {
    name: "news-cards",
    title: "News Cards",
    icon: newsCardsIcon,
    isPremium: true,
  },
  {
    name: "magnifying-glass-cards",
    title: "Magnifying Glass Cards",
    icon: magnifyingGlassCardsIcon,
    isPremium: true,
  },
  {
    name: "expanding-flex-cards",
    title: "Expanding Flex Cards",
    icon: expandingFlexCardsIcon,
    isPremium: true,
  },
  {
    name: "expandable-animated-card-slider",
    title: "Expandable Animated Card Slider",
    icon: expandableAnimatedCardSliderIcon,
    isPremium: true,
  },
  {
    name: "animated-gradient-cards",
    title: "Animated Gradient Cards",
    icon: animatedGradientCardsIcon,
    isPremium: true,
  },
  {
    name: "3d-fold-out-reveal",
    title: "3D Fold Out Reveal",
    icon: foldOutRevealIcon,
    isPremium: true,
  },
  {
    name: "nice-box",
    title: "Nice Box",
    icon: niceBoxIcon,
    isPremium: true,
  },
];
