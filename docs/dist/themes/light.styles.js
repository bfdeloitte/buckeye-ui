import { css } from "lit";

export default css`
  :root,
  :host,
  .bui-theme-light {
    color-scheme: light;

    --bui-color-gray-50: hsl(0 0% 97.5%);
    --bui-color-gray-100: hsl(240 4.8% 95.9%);
    --bui-color-gray-200: hsl(240 5.9% 90%);
    --bui-color-gray-300: hsl(240 4.9% 83.9%);
    --bui-color-gray-400: hsl(240 5% 64.9%);
    --bui-color-gray-500: hsl(240 3.8% 46.1%);
    --bui-color-gray-600: hsl(240 5.2% 33.9%);
    --bui-color-gray-700: hsl(240 5.3% 26.1%);
    --bui-color-gray-800: hsl(240 3.7% 15.9%);
    --bui-color-gray-900: hsl(240 5.9% 10%);
    --bui-color-gray-950: hsl(240 7.3% 8%);

    --bui-color-red-50: hsl(0 85.7% 97.3%);
    --bui-color-red-100: hsl(0 93.3% 94.1%);
    --bui-color-red-200: hsl(0 96.3% 89.4%);
    --bui-color-red-300: hsl(0 93.5% 81.8%);
    --bui-color-red-400: hsl(0 90.6% 70.8%);
    --bui-color-red-500: hsl(0 84.2% 60.2%);
    --bui-color-red-600: hsl(0 72.2% 50.6%);
    --bui-color-red-700: hsl(0 73.7% 41.8%);
    --bui-color-red-800: hsl(0 70% 35.3%);
    --bui-color-red-900: hsl(0 62.8% 30.6%);
    --bui-color-red-950: hsl(0 60% 19.6%);

    --bui-color-orange-50: hsl(33.3 100% 96.5%);
    --bui-color-orange-100: hsl(34.3 100% 91.8%);
    --bui-color-orange-200: hsl(32.1 97.7% 83.1%);
    --bui-color-orange-300: hsl(30.7 97.2% 72.4%);
    --bui-color-orange-400: hsl(27 96% 61%);
    --bui-color-orange-500: hsl(24.6 95% 53.1%);
    --bui-color-orange-600: hsl(20.5 90.2% 48.2%);
    --bui-color-orange-700: hsl(17.5 88.3% 40.4%);
    --bui-color-orange-800: hsl(15 79.1% 33.7%);
    --bui-color-orange-900: hsl(15.3 74.6% 27.8%);
    --bui-color-orange-950: hsl(15.2 69.1% 19%);

    --bui-color-amber-50: hsl(48 100% 96.1%);
    --bui-color-amber-100: hsl(48 96.5% 88.8%);
    --bui-color-amber-200: hsl(48 96.6% 76.7%);
    --bui-color-amber-300: hsl(45.9 96.7% 64.5%);
    --bui-color-amber-400: hsl(43.3 96.4% 56.3%);
    --bui-color-amber-500: hsl(37.7 92.1% 50.2%);
    --bui-color-amber-600: hsl(32.1 94.6% 43.7%);
    --bui-color-amber-700: hsl(26 90.5% 37.1%);
    --bui-color-amber-800: hsl(22.7 82.5% 31.4%);
    --bui-color-amber-900: hsl(21.7 77.8% 26.5%);
    --bui-color-amber-950: hsl(22.9 74.1% 16.7%);

    --bui-color-yellow-50: hsl(54.5 91.7% 95.3%);
    --bui-color-yellow-100: hsl(54.9 96.7% 88%);
    --bui-color-yellow-200: hsl(52.8 98.3% 76.9%);
    --bui-color-yellow-300: hsl(50.4 97.8% 63.5%);
    --bui-color-yellow-400: hsl(47.9 95.8% 53.1%);
    --bui-color-yellow-500: hsl(45.4 93.4% 47.5%);
    --bui-color-yellow-600: hsl(40.6 96.1% 40.4%);
    --bui-color-yellow-700: hsl(35.5 91.7% 32.9%);
    --bui-color-yellow-800: hsl(31.8 81% 28.8%);
    --bui-color-yellow-900: hsl(28.4 72.5% 25.7%);
    --bui-color-yellow-950: hsl(33.1 69% 13.9%);

    --bui-color-lime-50: hsl(78.3 92% 95.1%);
    --bui-color-lime-100: hsl(79.6 89.1% 89.2%);
    --bui-color-lime-200: hsl(80.9 88.5% 79.6%);
    --bui-color-lime-300: hsl(82 84.5% 67.1%);
    --bui-color-lime-400: hsl(82.7 78% 55.5%);
    --bui-color-lime-500: hsl(83.7 80.5% 44.3%);
    --bui-color-lime-600: hsl(84.8 85.2% 34.5%);
    --bui-color-lime-700: hsl(85.9 78.4% 27.3%);
    --bui-color-lime-800: hsl(86.3 69% 22.7%);
    --bui-color-lime-900: hsl(87.6 61.2% 20.2%);
    --bui-color-lime-950: hsl(86.5 60.6% 13.9%);

    --bui-color-green-50: hsl(138.5 76.5% 96.7%);
    --bui-color-green-100: hsl(140.6 84.2% 92.5%);
    --bui-color-green-200: hsl(141 78.9% 85.1%);
    --bui-color-green-300: hsl(141.7 76.6% 73.1%);
    --bui-color-green-400: hsl(141.9 69.2% 58%);
    --bui-color-green-500: hsl(142.1 70.6% 45.3%);
    --bui-color-green-600: hsl(142.1 76.2% 36.3%);
    --bui-color-green-700: hsl(142.4 71.8% 29.2%);
    --bui-color-green-800: hsl(142.8 64.2% 24.1%);
    --bui-color-green-900: hsl(143.8 61.2% 20.2%);
    --bui-color-green-950: hsl(144.3 60.7% 12%);

    --bui-color-emerald-50: hsl(151.8 81% 95.9%);
    --bui-color-emerald-100: hsl(149.3 80.4% 90%);
    --bui-color-emerald-200: hsl(152.4 76% 80.4%);
    --bui-color-emerald-300: hsl(156.2 71.6% 66.9%);
    --bui-color-emerald-400: hsl(158.1 64.4% 51.6%);
    --bui-color-emerald-500: hsl(160.1 84.1% 39.4%);
    --bui-color-emerald-600: hsl(161.4 93.5% 30.4%);
    --bui-color-emerald-700: hsl(162.9 93.5% 24.3%);
    --bui-color-emerald-800: hsl(163.1 88.1% 19.8%);
    --bui-color-emerald-900: hsl(164.2 85.7% 16.5%);
    --bui-color-emerald-950: hsl(164.3 87.5% 9.4%);

    --bui-color-teal-50: hsl(166.2 76.5% 96.7%);
    --bui-color-teal-100: hsl(167.2 85.5% 89.2%);
    --bui-color-teal-200: hsl(168.4 83.8% 78.2%);
    --bui-color-teal-300: hsl(170.6 76.9% 64.3%);
    --bui-color-teal-400: hsl(172.5 66% 50.4%);
    --bui-color-teal-500: hsl(173.4 80.4% 40%);
    --bui-color-teal-600: hsl(174.7 83.9% 31.6%);
    --bui-color-teal-700: hsl(175.3 77.4% 26.1%);
    --bui-color-teal-800: hsl(176.1 69.4% 21.8%);
    --bui-color-teal-900: hsl(175.9 60.8% 19%);
    --bui-color-teal-950: hsl(176.5 58.6% 11.4%);

    --bui-color-cyan-50: hsl(183.2 100% 96.3%);
    --bui-color-cyan-100: hsl(185.1 95.9% 90.4%);
    --bui-color-cyan-200: hsl(186.2 93.5% 81.8%);
    --bui-color-cyan-300: hsl(187 92.4% 69%);
    --bui-color-cyan-400: hsl(187.9 85.7% 53.3%);
    --bui-color-cyan-500: hsl(188.7 94.5% 42.7%);
    --bui-color-cyan-600: hsl(191.6 91.4% 36.5%);
    --bui-color-cyan-700: hsl(192.9 82.3% 31%);
    --bui-color-cyan-800: hsl(194.4 69.6% 27.1%);
    --bui-color-cyan-900: hsl(196.4 63.6% 23.7%);
    --bui-color-cyan-950: hsl(196.8 61% 16.1%);

    --bui-color-sky-50: hsl(204 100% 97.1%);
    --bui-color-sky-100: hsl(204 93.8% 93.7%);
    --bui-color-sky-200: hsl(200.6 94.4% 86.1%);
    --bui-color-sky-300: hsl(199.4 95.5% 73.9%);
    --bui-color-sky-400: hsl(198.4 93.2% 59.6%);
    --bui-color-sky-500: hsl(198.6 88.7% 48.4%);
    --bui-color-sky-600: hsl(200.4 98% 39.4%);
    --bui-color-sky-700: hsl(201.3 96.3% 32.2%);
    --bui-color-sky-800: hsl(201 90% 27.5%);
    --bui-color-sky-900: hsl(202 80.3% 23.9%);
    --bui-color-sky-950: hsl(202.3 73.8% 16.5%);

    --bui-color-blue-50: hsl(213.8 100% 96.9%);
    --bui-color-blue-100: hsl(214.3 94.6% 92.7%);
    --bui-color-blue-200: hsl(213.3 96.9% 87.3%);
    --bui-color-blue-300: hsl(211.7 96.4% 78.4%);
    --bui-color-blue-400: hsl(213.1 93.9% 67.8%);
    --bui-color-blue-500: hsl(217.2 91.2% 59.8%);
    --bui-color-blue-600: hsl(221.2 83.2% 53.3%);
    --bui-color-blue-700: hsl(224.3 76.3% 48%);
    --bui-color-blue-800: hsl(225.9 70.7% 40.2%);
    --bui-color-blue-900: hsl(224.4 64.3% 32.9%);
    --bui-color-blue-950: hsl(226.2 55.3% 18.4%);

    --bui-color-indigo-50: hsl(225.9 100% 96.7%);
    --bui-color-indigo-100: hsl(226.5 100% 93.9%);
    --bui-color-indigo-200: hsl(228 96.5% 88.8%);
    --bui-color-indigo-300: hsl(229.7 93.5% 81.8%);
    --bui-color-indigo-400: hsl(234.5 89.5% 73.9%);
    --bui-color-indigo-500: hsl(238.7 83.5% 66.7%);
    --bui-color-indigo-600: hsl(243.4 75.4% 58.6%);
    --bui-color-indigo-700: hsl(244.5 57.9% 50.6%);
    --bui-color-indigo-800: hsl(243.7 54.5% 41.4%);
    --bui-color-indigo-900: hsl(242.2 47.4% 34.3%);
    --bui-color-indigo-950: hsl(243.5 43.6% 22.9%);

    --bui-color-violet-50: hsl(250 100% 97.6%);
    --bui-color-violet-100: hsl(251.4 91.3% 95.5%);
    --bui-color-violet-200: hsl(250.5 95.2% 91.8%);
    --bui-color-violet-300: hsl(252.5 94.7% 85.1%);
    --bui-color-violet-400: hsl(255.1 91.7% 76.3%);
    --bui-color-violet-500: hsl(258.3 89.5% 66.3%);
    --bui-color-violet-600: hsl(262.1 83.3% 57.8%);
    --bui-color-violet-700: hsl(263.4 70% 50.4%);
    --bui-color-violet-800: hsl(263.4 69.3% 42.2%);
    --bui-color-violet-900: hsl(263.5 67.4% 34.9%);
    --bui-color-violet-950: hsl(265.1 61.5% 21.4%);

    --bui-color-purple-50: hsl(270 100% 98%);
    --bui-color-purple-100: hsl(268.7 100% 95.5%);
    --bui-color-purple-200: hsl(268.6 100% 91.8%);
    --bui-color-purple-300: hsl(269.2 97.4% 85.1%);
    --bui-color-purple-400: hsl(270 95.2% 75.3%);
    --bui-color-purple-500: hsl(270.7 91% 65.1%);
    --bui-color-purple-600: hsl(271.5 81.3% 55.9%);
    --bui-color-purple-700: hsl(272.1 71.7% 47.1%);
    --bui-color-purple-800: hsl(272.9 67.2% 39.4%);
    --bui-color-purple-900: hsl(273.6 65.6% 32%);
    --bui-color-purple-950: hsl(276 59.5% 16.5%);

    --bui-color-fuchsia-50: hsl(289.1 100% 97.8%);
    --bui-color-fuchsia-100: hsl(287 100% 95.5%);
    --bui-color-fuchsia-200: hsl(288.3 95.8% 90.6%);
    --bui-color-fuchsia-300: hsl(291.1 93.1% 82.9%);
    --bui-color-fuchsia-400: hsl(292 91.4% 72.5%);
    --bui-color-fuchsia-500: hsl(292.2 84.1% 60.6%);
    --bui-color-fuchsia-600: hsl(293.4 69.5% 48.8%);
    --bui-color-fuchsia-700: hsl(294.7 72.4% 39.8%);
    --bui-color-fuchsia-800: hsl(295.4 70.2% 32.9%);
    --bui-color-fuchsia-900: hsl(296.7 63.6% 28%);
    --bui-color-fuchsia-950: hsl(297.1 56.8% 14.5%);

    --bui-color-pink-50: hsl(327.3 73.3% 97.1%);
    --bui-color-pink-100: hsl(325.7 77.8% 94.7%);
    --bui-color-pink-200: hsl(325.9 84.6% 89.8%);
    --bui-color-pink-300: hsl(327.4 87.1% 81.8%);
    --bui-color-pink-400: hsl(328.6 85.5% 70.2%);
    --bui-color-pink-500: hsl(330.4 81.2% 60.4%);
    --bui-color-pink-600: hsl(333.3 71.4% 50.6%);
    --bui-color-pink-700: hsl(335.1 77.6% 42%);
    --bui-color-pink-800: hsl(335.8 74.4% 35.3%);
    --bui-color-pink-900: hsl(335.9 69% 30.4%);
    --bui-color-pink-950: hsl(336.2 65.4% 15.9%);

    --bui-color-rose-50: hsl(355.7 100% 97.3%);
    --bui-color-rose-100: hsl(355.6 100% 94.7%);
    --bui-color-rose-200: hsl(352.7 96.1% 90%);
    --bui-color-rose-300: hsl(352.6 95.7% 81.8%);
    --bui-color-rose-400: hsl(351.3 94.5% 71.4%);
    --bui-color-rose-500: hsl(349.7 89.2% 60.2%);
    --bui-color-rose-600: hsl(346.8 77.2% 49.8%);
    --bui-color-rose-700: hsl(345.3 82.7% 40.8%);
    --bui-color-rose-800: hsl(343.4 79.7% 34.7%);
    --bui-color-rose-900: hsl(341.5 75.5% 30.4%);
    --bui-color-rose-950: hsl(341.3 70.1% 17.1%);

    --bui-color-primary-50: var(--bui-color-sky-50);
    --bui-color-primary-100: var(--bui-color-sky-100);
    --bui-color-primary-200: var(--bui-color-sky-200);
    --bui-color-primary-300: var(--bui-color-sky-300);
    --bui-color-primary-400: var(--bui-color-sky-400);
    --bui-color-primary-500: var(--bui-color-sky-500);
    --bui-color-primary-600: var(--bui-color-sky-600);
    --bui-color-primary-700: var(--bui-color-sky-700);
    --bui-color-primary-800: var(--bui-color-sky-800);
    --bui-color-primary-900: var(--bui-color-sky-900);
    --bui-color-primary-950: var(--bui-color-sky-950);

    --bui-color-success-50: var(--bui-color-green-50);
    --bui-color-success-100: var(--bui-color-green-100);
    --bui-color-success-200: var(--bui-color-green-200);
    --bui-color-success-300: var(--bui-color-green-300);
    --bui-color-success-400: var(--bui-color-green-400);
    --bui-color-success-500: var(--bui-color-green-500);
    --bui-color-success-600: var(--bui-color-green-600);
    --bui-color-success-700: var(--bui-color-green-700);
    --bui-color-success-800: var(--bui-color-green-800);
    --bui-color-success-900: var(--bui-color-green-900);
    --bui-color-success-950: var(--bui-color-green-950);

    --bui-color-warning-50: var(--bui-color-amber-50);
    --bui-color-warning-100: var(--bui-color-amber-100);
    --bui-color-warning-200: var(--bui-color-amber-200);
    --bui-color-warning-300: var(--bui-color-amber-300);
    --bui-color-warning-400: var(--bui-color-amber-400);
    --bui-color-warning-500: var(--bui-color-amber-500);
    --bui-color-warning-600: var(--bui-color-amber-600);
    --bui-color-warning-700: var(--bui-color-amber-700);
    --bui-color-warning-800: var(--bui-color-amber-800);
    --bui-color-warning-900: var(--bui-color-amber-900);
    --bui-color-warning-950: var(--bui-color-amber-950);

    --bui-color-danger-50: var(--bui-color-red-50);
    --bui-color-danger-100: var(--bui-color-red-100);
    --bui-color-danger-200: var(--bui-color-red-200);
    --bui-color-danger-300: var(--bui-color-red-300);
    --bui-color-danger-400: var(--bui-color-red-400);
    --bui-color-danger-500: var(--bui-color-red-500);
    --bui-color-danger-600: var(--bui-color-red-600);
    --bui-color-danger-700: var(--bui-color-red-700);
    --bui-color-danger-800: var(--bui-color-red-800);
    --bui-color-danger-900: var(--bui-color-red-900);
    --bui-color-danger-950: var(--bui-color-red-950);

    --bui-color-neutral-50: var(--bui-color-gray-50);
    --bui-color-neutral-100: var(--bui-color-gray-100);
    --bui-color-neutral-200: var(--bui-color-gray-200);
    --bui-color-neutral-300: var(--bui-color-gray-300);
    --bui-color-neutral-400: var(--bui-color-gray-400);
    --bui-color-neutral-500: var(--bui-color-gray-500);
    --bui-color-neutral-600: var(--bui-color-gray-600);
    --bui-color-neutral-700: var(--bui-color-gray-700);
    --bui-color-neutral-800: var(--bui-color-gray-800);
    --bui-color-neutral-900: var(--bui-color-gray-900);
    --bui-color-neutral-950: var(--bui-color-gray-950);

    --bui-color-neutral-0: hsl(0, 0%, 100%);
    --bui-color-neutral-1000: hsl(0, 0%, 0%);

    --bui-border-radius-small: 0.1875rem;
    --bui-border-radius-medium: 0.25rem;
    --bui-border-radius-large: 0.5rem;
    --bui-border-radius-x-large: 1rem;

    --bui-border-radius-circle: 50%;
    --bui-border-radius-pill: 9999px;

    --bui-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);
    --bui-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);
    --bui-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);
    --bui-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);
    --bui-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);

    --bui-spacing-3x-small: 0.125rem;
    --bui-spacing-2x-small: 0.25rem;
    --bui-spacing-x-small: 0.5rem;
    --bui-spacing-small: 0.75rem;
    --bui-spacing-medium: 1rem;
    --bui-spacing-large: 1.25rem;
    --bui-spacing-x-large: 1.75rem;
    --bui-spacing-2x-large: 2.25rem;
    --bui-spacing-3x-large: 3rem;
    --bui-spacing-4x-large: 4.5rem;

    --bui-transition-x-slow: 1000ms;
    --bui-transition-slow: 500ms;
    --bui-transition-medium: 250ms;
    --bui-transition-fast: 150ms;
    --bui-transition-x-fast: 50ms;

    --bui-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo,
      monospace;
    --bui-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    --bui-font-serif: Georgia, "Times New Roman", serif;

    --bui-font-size-2x-small: 0.625rem;
    --bui-font-size-x-small: 0.75rem;
    --bui-font-size-small: 0.875rem;
    --bui-font-size-medium: 1rem;
    --bui-font-size-large: 1.25rem;
    --bui-font-size-x-large: 1.5rem;
    --bui-font-size-2x-large: 2.25rem;
    --bui-font-size-3x-large: 3rem;
    --bui-font-size-4x-large: 4.5rem;

    --bui-font-weight-light: 300;
    --bui-font-weight-normal: 400;
    --bui-font-weight-semibold: 500;
    --bui-font-weight-bold: 700;

    --bui-letter-spacing-denser: -0.03em;
    --bui-letter-spacing-dense: -0.015em;
    --bui-letter-spacing-normal: normal;
    --bui-letter-spacing-loose: 0.075em;
    --bui-letter-spacing-looser: 0.15em;

    --bui-line-height-denser: 1;
    --bui-line-height-dense: 1.4;
    --bui-line-height-normal: 1.8;
    --bui-line-height-loose: 2.2;
    --bui-line-height-looser: 2.6;

    --bui-focus-ring-color: var(--bui-color-primary-600);
    --bui-focus-ring-style: solid;
    --bui-focus-ring-width: 3px;
    --bui-focus-ring: var(--bui-focus-ring-style) var(--bui-focus-ring-width)
      var(--bui-focus-ring-color);
    --bui-focus-ring-offset: 1px;

    --bui-button-font-size-small: var(--bui-font-size-x-small);
    --bui-button-font-size-medium: var(--bui-font-size-small);
    --bui-button-font-size-large: var(--bui-font-size-medium);

    --bui-input-height-small: 1.875rem;
    --bui-input-height-medium: 2.5rem;
    --bui-input-height-large: 3.125rem;

    --bui-input-background-color: var(--bui-color-neutral-0);
    --bui-input-background-color-hover: var(--bui-input-background-color);
    --bui-input-background-color-focus: var(--bui-input-background-color);
    --bui-input-background-color-disabled: var(--bui-color-neutral-100);
    --bui-input-border-color: var(--bui-color-neutral-300);
    --bui-input-border-color-hover: var(--bui-color-neutral-400);
    --bui-input-border-color-focus: var(--bui-color-primary-500);
    --bui-input-border-color-disabled: var(--bui-color-neutral-300);
    --bui-input-border-width: 1px;
    --bui-input-required-content: "*";
    --bui-input-required-content-offset: -2px;
    --bui-input-required-content-color: var(--bui-input-label-color);

    --bui-input-border-radius-small: var(--bui-border-radius-medium);
    --bui-input-border-radius-medium: var(--bui-border-radius-medium);
    --bui-input-border-radius-large: var(--bui-border-radius-medium);

    --bui-input-font-family: var(--bui-font-sans);
    --bui-input-font-weight: var(--bui-font-weight-normal);
    --bui-input-font-size-small: var(--bui-font-size-small);
    --bui-input-font-size-medium: var(--bui-font-size-medium);
    --bui-input-font-size-large: var(--bui-font-size-large);
    --bui-input-letter-spacing: var(--bui-letter-spacing-normal);

    --bui-input-color: var(--bui-color-neutral-700);
    --bui-input-color-hover: var(--bui-color-neutral-700);
    --bui-input-color-focus: var(--bui-color-neutral-700);
    --bui-input-color-disabled: var(--bui-color-neutral-900);
    --bui-input-icon-color: var(--bui-color-neutral-500);
    --bui-input-icon-color-hover: var(--bui-color-neutral-600);
    --bui-input-icon-color-focus: var(--bui-color-neutral-600);
    --bui-input-placeholder-color: var(--bui-color-neutral-500);
    --bui-input-placeholder-color-disabled: var(--bui-color-neutral-600);
    --bui-input-spacing-small: var(--bui-spacing-small);
    --bui-input-spacing-medium: var(--bui-spacing-medium);
    --bui-input-spacing-large: var(--bui-spacing-large);

    --bui-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);
    --bui-input-focus-ring-offset: 0;

    --bui-input-filled-background-color: var(--bui-color-neutral-100);
    --bui-input-filled-background-color-hover: var(--bui-color-neutral-100);
    --bui-input-filled-background-color-focus: var(--bui-color-neutral-100);
    --bui-input-filled-background-color-disabled: var(--bui-color-neutral-100);
    --bui-input-filled-color: var(--bui-color-neutral-800);
    --bui-input-filled-color-hover: var(--bui-color-neutral-800);
    --bui-input-filled-color-focus: var(--bui-color-neutral-700);
    --bui-input-filled-color-disabled: var(--bui-color-neutral-800);

    --bui-input-label-font-size-small: var(--bui-font-size-small);
    --bui-input-label-font-size-medium: var(--bui-font-size-medium);
    --bui-input-label-font-size-large: var(--bui-font-size-large);
    --bui-input-label-color: inherit;

    --bui-input-help-text-font-size-small: var(--bui-font-size-x-small);
    --bui-input-help-text-font-size-medium: var(--bui-font-size-small);
    --bui-input-help-text-font-size-large: var(--bui-font-size-medium);
    --bui-input-help-text-color: var(--bui-color-neutral-500);

    --bui-toggle-size-small: 0.875rem;
    --bui-toggle-size-medium: 1.125rem;
    --bui-toggle-size-large: 1.375rem;

    --bui-overlay-background-color: hsl(240 3.8% 46.1% / 33%);

    --bui-panel-background-color: var(--bui-color-neutral-0);
    --bui-panel-border-color: var(--bui-color-neutral-200);
    --bui-panel-border-width: 1px;

    --bui-tooltip-border-radius: var(--bui-border-radius-medium);
    --bui-tooltip-background-color: var(--bui-color-neutral-800);
    --bui-tooltip-color: var(--bui-color-neutral-0);
    --bui-tooltip-font-family: var(--bui-font-sans);
    --bui-tooltip-font-weight: var(--bui-font-weight-normal);
    --bui-tooltip-font-size: var(--bui-font-size-small);
    --bui-tooltip-line-height: var(--bui-line-height-dense);
    --bui-tooltip-padding: var(--bui-spacing-2x-small)
      var(--bui-spacing-x-small);
    --bui-tooltip-arrow-size: 6px;

    --bui-z-index-drawer: 700;
    --bui-z-index-dialog: 800;
    --bui-z-index-dropdown: 900;
    --bui-z-index-toast: 950;
    --bui-z-index-tooltip: 1000;
  }

  .bui-scroll-lock {
    padding-right: var(--bui-scroll-lock-size) !important;
    overflow: hidden !important;
  }

  .bui-toast-stack {
    position: fixed;
    top: 0;
    inset-inline-end: 0;
    z-index: var(--bui-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .bui-toast-stack bui-alert {
    margin: var(--bui-spacing-medium);
  }

  .bui-toast-stack bui-alert::part(base) {
    box-shadow: var(--bui-shadow-large);
  }
`;
