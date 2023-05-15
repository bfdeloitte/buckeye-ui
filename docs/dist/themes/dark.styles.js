import { css } from "lit";

export default css`
  :host,
  .bui-theme-dark {
    color-scheme: dark;

    --bui-color-gray-50: hsl(240 5.1% 15%);
    --bui-color-gray-100: hsl(240 5.7% 18.2%);
    --bui-color-gray-200: hsl(240 4.6% 22%);
    --bui-color-gray-300: hsl(240 5% 27.6%);
    --bui-color-gray-400: hsl(240 5% 35.5%);
    --bui-color-gray-500: hsl(240 3.7% 44%);
    --bui-color-gray-600: hsl(240 5.3% 58%);
    --bui-color-gray-700: hsl(240 5.6% 73%);
    --bui-color-gray-800: hsl(240 7.3% 84%);
    --bui-color-gray-900: hsl(240 9.1% 91.8%);
    --bui-color-gray-950: hsl(0 0% 95%);

    --bui-color-red-50: hsl(0 56% 23.9%);
    --bui-color-red-100: hsl(0.6 60% 33.9%);
    --bui-color-red-200: hsl(0.9 67.2% 37.1%);
    --bui-color-red-300: hsl(1.1 71.3% 43.7%);
    --bui-color-red-400: hsl(1 76% 52.5%);
    --bui-color-red-500: hsl(0.7 89.6% 57.2%);
    --bui-color-red-600: hsl(0 98.6% 67.9%);
    --bui-color-red-700: hsl(0 100% 72.3%);
    --bui-color-red-800: hsl(0 100% 85.6%);
    --bui-color-red-900: hsl(0 100% 90.3%);
    --bui-color-red-950: hsl(0 100% 95.9%);

    --bui-color-orange-50: hsl(15 64.2% 23.3%);
    --bui-color-orange-100: hsl(15.1 70.9% 31.1%);
    --bui-color-orange-200: hsl(15.3 75.7% 35.5%);
    --bui-color-orange-300: hsl(17.1 83.5% 42.7%);
    --bui-color-orange-400: hsl(20.1 88% 50.8%);
    --bui-color-orange-500: hsl(24.3 100% 50.5%);
    --bui-color-orange-600: hsl(27.2 100% 57.7%);
    --bui-color-orange-700: hsl(31.3 100% 68.7%);
    --bui-color-orange-800: hsl(33.8 100% 79.3%);
    --bui-color-orange-900: hsl(38.9 100% 87.7%);
    --bui-color-orange-950: hsl(46.2 100% 95%);

    --bui-color-amber-50: hsl(21.9 66.3% 21.1%);
    --bui-color-amber-100: hsl(21.5 73.6% 29.7%);
    --bui-color-amber-200: hsl(22.3 77.6% 33.3%);
    --bui-color-amber-300: hsl(25.4 84.2% 39.6%);
    --bui-color-amber-400: hsl(31.4 87.4% 46.7%);
    --bui-color-amber-500: hsl(37 96.6% 48.3%);
    --bui-color-amber-600: hsl(43.3 100% 53.4%);
    --bui-color-amber-700: hsl(46.5 100% 61.1%);
    --bui-color-amber-800: hsl(49.3 100% 73%);
    --bui-color-amber-900: hsl(51.8 100% 85%);
    --bui-color-amber-950: hsl(60 100% 94.6%);

    --bui-color-yellow-50: hsl(32.5 60% 18.2%);
    --bui-color-yellow-100: hsl(28.1 68.6% 29%);
    --bui-color-yellow-200: hsl(31.3 75.8% 30.8%);
    --bui-color-yellow-300: hsl(34.7 84.4% 35.3%);
    --bui-color-yellow-400: hsl(40.1 87.3% 43.3%);
    --bui-color-yellow-500: hsl(44.7 88% 46%);
    --bui-color-yellow-600: hsl(47.7 100% 50.9%);
    --bui-color-yellow-700: hsl(51.3 100% 59.9%);
    --bui-color-yellow-800: hsl(54.6 100% 73%);
    --bui-color-yellow-900: hsl(58.9 100% 84.2%);
    --bui-color-yellow-950: hsl(60 100% 94%);

    --bui-color-lime-50: hsl(86.5 54.4% 18%);
    --bui-color-lime-100: hsl(87.6 56.8% 23.3%);
    --bui-color-lime-200: hsl(85.8 63.2% 24.5%);
    --bui-color-lime-300: hsl(86.1 72% 29.4%);
    --bui-color-lime-400: hsl(85.5 76.8% 37.3%);
    --bui-color-lime-500: hsl(84.3 74.2% 42.1%);
    --bui-color-lime-600: hsl(82.8 81.5% 52.6%);
    --bui-color-lime-700: hsl(82 89.9% 64%);
    --bui-color-lime-800: hsl(80.9 97.9% 76.6%);
    --bui-color-lime-900: hsl(77.9 100% 85.8%);
    --bui-color-lime-950: hsl(69.5 100% 93.8%);

    --bui-color-green-50: hsl(144.3 53.6% 16%);
    --bui-color-green-100: hsl(143.2 55.4% 23.5%);
    --bui-color-green-200: hsl(141.5 58.2% 26.3%);
    --bui-color-green-300: hsl(140.8 64.2% 31.8%);
    --bui-color-green-400: hsl(140.3 68% 39.2%);
    --bui-color-green-500: hsl(141.1 64.9% 43%);
    --bui-color-green-600: hsl(141.6 72.4% 55.2%);
    --bui-color-green-700: hsl(141.7 82.7% 70.1%);
    --bui-color-green-800: hsl(141 90.9% 82.1%);
    --bui-color-green-900: hsl(142 100% 89.1%);
    --bui-color-green-950: hsl(144 100% 95.5%);

    --bui-color-emerald-50: hsl(164.3 75% 13.5%);
    --bui-color-emerald-100: hsl(163.5 72.6% 20.1%);
    --bui-color-emerald-200: hsl(162.1 73.7% 22.4%);
    --bui-color-emerald-300: hsl(161.3 77.3% 27.6%);
    --bui-color-emerald-400: hsl(159.6 77.1% 34.3%);
    --bui-color-emerald-500: hsl(159.1 73.5% 37.9%);
    --bui-color-emerald-600: hsl(157.8 66.8% 48.9%);
    --bui-color-emerald-700: hsl(156.2 76.1% 63.8%);
    --bui-color-emerald-800: hsl(152.4 84.4% 77.4%);
    --bui-color-emerald-900: hsl(149.3 100% 87%);
    --bui-color-emerald-950: hsl(158.6 100% 94.8%);

    --bui-color-teal-50: hsl(176.5 51.5% 15.4%);
    --bui-color-teal-100: hsl(175.9 54.7% 22.3%);
    --bui-color-teal-200: hsl(175.9 60.7% 23.9%);
    --bui-color-teal-300: hsl(174.5 67.3% 28.8%);
    --bui-color-teal-400: hsl(174.4 71.9% 34.9%);
    --bui-color-teal-500: hsl(173.1 71% 38.3%);
    --bui-color-teal-600: hsl(172.3 68.2% 48.1%);
    --bui-color-teal-700: hsl(170.5 81.3% 61.5%);
    --bui-color-teal-800: hsl(168.4 92.1% 75.2%);
    --bui-color-teal-900: hsl(168.3 100% 86%);
    --bui-color-teal-950: hsl(180 100% 95.5%);

    --bui-color-cyan-50: hsl(197.1 53.8% 20.3%);
    --bui-color-cyan-100: hsl(196.8 57.3% 27.2%);
    --bui-color-cyan-200: hsl(195.3 62.7% 29.4%);
    --bui-color-cyan-300: hsl(193.5 71.3% 34.1%);
    --bui-color-cyan-400: hsl(192.5 76.8% 40.6%);
    --bui-color-cyan-500: hsl(189.4 78.6% 42.6%);
    --bui-color-cyan-600: hsl(188.2 89.1% 51.7%);
    --bui-color-cyan-700: hsl(187 98.6% 66.2%);
    --bui-color-cyan-800: hsl(184.9 100% 78.3%);
    --bui-color-cyan-900: hsl(180 100% 86.6%);
    --bui-color-cyan-950: hsl(180 100% 94.8%);

    --bui-color-sky-50: hsl(203 63.8% 20.9%);
    --bui-color-sky-100: hsl(203.4 70.4% 28%);
    --bui-color-sky-200: hsl(202.7 75.8% 30.8%);
    --bui-color-sky-300: hsl(203.1 80.4% 36.1%);
    --bui-color-sky-400: hsl(202.1 80.5% 44.3%);
    --bui-color-sky-500: hsl(199.7 85.9% 47.7%);
    --bui-color-sky-600: hsl(198.7 97.9% 57.2%);
    --bui-color-sky-700: hsl(198.7 100% 70.5%);
    --bui-color-sky-800: hsl(198.8 100% 82.5%);
    --bui-color-sky-900: hsl(198.5 100% 89.9%);
    --bui-color-sky-950: hsl(186 100% 95.5%);

    --bui-color-blue-50: hsl(227.1 49.5% 22.7%);
    --bui-color-blue-100: hsl(225.8 58.9% 36.8%);
    --bui-color-blue-200: hsl(227.7 64.4% 42.9%);
    --bui-color-blue-300: hsl(226.1 72.7% 51.2%);
    --bui-color-blue-400: hsl(222.6 86.5% 56.3%);
    --bui-color-blue-500: hsl(217.8 95.8% 57.4%);
    --bui-color-blue-600: hsl(213.3 100% 65%);
    --bui-color-blue-700: hsl(210.9 100% 74.8%);
    --bui-color-blue-800: hsl(211.5 100% 83.4%);
    --bui-color-blue-900: hsl(211 100% 88.9%);
    --bui-color-blue-950: hsl(201.8 100% 95.3%);

    --bui-color-indigo-50: hsl(243.5 40.8% 27%);
    --bui-color-indigo-100: hsl(242.9 45.7% 37.6%);
    --bui-color-indigo-200: hsl(244.7 52.7% 43.1%);
    --bui-color-indigo-300: hsl(245.3 60.5% 52.4%);
    --bui-color-indigo-400: hsl(244.1 79.2% 60.4%);
    --bui-color-indigo-500: hsl(239.6 88.7% 63.8%);
    --bui-color-indigo-600: hsl(234.5 96.7% 70.9%);
    --bui-color-indigo-700: hsl(229.4 100% 78.3%);
    --bui-color-indigo-800: hsl(227.1 100% 85%);
    --bui-color-indigo-900: hsl(223.8 100% 89.9%);
    --bui-color-indigo-950: hsl(220 100% 95.1%);

    --bui-color-violet-50: hsl(265.1 57.3% 25.4%);
    --bui-color-violet-100: hsl(263.5 63.8% 39.4%);
    --bui-color-violet-200: hsl(263.4 66.2% 44.1%);
    --bui-color-violet-300: hsl(263.7 72.8% 52.4%);
    --bui-color-violet-400: hsl(262.5 87.3% 59.8%);
    --bui-color-violet-500: hsl(258.3 95.1% 63.2%);
    --bui-color-violet-600: hsl(255.1 100% 67.2%);
    --bui-color-violet-700: hsl(253 100% 81.5%);
    --bui-color-violet-800: hsl(251.7 100% 87.9%);
    --bui-color-violet-900: hsl(254.1 100% 91.7%);
    --bui-color-violet-950: hsl(257.1 100% 96.1%);

    --bui-color-purple-50: hsl(276 54.3% 20.5%);
    --bui-color-purple-100: hsl(273.6 61.8% 35.4%);
    --bui-color-purple-200: hsl(272.9 64% 41.4%);
    --bui-color-purple-300: hsl(271.9 68.1% 49.2%);
    --bui-color-purple-400: hsl(271.5 85.1% 57.8%);
    --bui-color-purple-500: hsl(270.7 96.4% 62.1%);
    --bui-color-purple-600: hsl(270.5 100% 71.9%);
    --bui-color-purple-700: hsl(270.9 100% 81.3%);
    --bui-color-purple-800: hsl(272.4 100% 87.7%);
    --bui-color-purple-900: hsl(276.7 100% 91.5%);
    --bui-color-purple-950: hsl(300 100% 96.5%);

    --bui-color-fuchsia-50: hsl(297.1 51.2% 18.6%);
    --bui-color-fuchsia-100: hsl(296.7 59.5% 31.5%);
    --bui-color-fuchsia-200: hsl(295.4 65.4% 35.1%);
    --bui-color-fuchsia-300: hsl(294.6 67.4% 42.2%);
    --bui-color-fuchsia-400: hsl(293.3 68.7% 51.2%);
    --bui-color-fuchsia-500: hsl(292.1 88.4% 57.7%);
    --bui-color-fuchsia-600: hsl(292 98.5% 59.5%);
    --bui-color-fuchsia-700: hsl(292.4 100% 79.5%);
    --bui-color-fuchsia-800: hsl(292.9 100% 86.8%);
    --bui-color-fuchsia-900: hsl(300 100% 91.5%);
    --bui-color-fuchsia-950: hsl(300 100% 96.3%);

    --bui-color-pink-50: hsl(336.2 59.6% 20%);
    --bui-color-pink-100: hsl(336.8 63.9% 34%);
    --bui-color-pink-200: hsl(336.8 68.7% 37.6%);
    --bui-color-pink-300: hsl(336.1 71.8% 44.5%);
    --bui-color-pink-400: hsl(333.9 74.9% 53.1%);
    --bui-color-pink-500: hsl(330.7 86.3% 57.7%);
    --bui-color-pink-600: hsl(328.6 91.5% 67.2%);
    --bui-color-pink-700: hsl(327.4 97.6% 78.7%);
    --bui-color-pink-800: hsl(325.1 100% 86.6%);
    --bui-color-pink-900: hsl(322.1 100% 91.3%);
    --bui-color-pink-950: hsl(315 100% 95.9%);

    --bui-color-rose-50: hsl(342.3 62.9% 21.5%);
    --bui-color-rose-100: hsl(342.8 68.9% 34.2%);
    --bui-color-rose-200: hsl(344.8 72.6% 37.3%);
    --bui-color-rose-300: hsl(346.9 75.8% 43.7%);
    --bui-color-rose-400: hsl(348.2 80.1% 52.7%);
    --bui-color-rose-500: hsl(350.4 94.8% 57.5%);
    --bui-color-rose-600: hsl(351.2 100% 58.1%);
    --bui-color-rose-700: hsl(352.3 100% 78.1%);
    --bui-color-rose-800: hsl(352 100% 86.2%);
    --bui-color-rose-900: hsl(354.5 100% 90.7%);
    --bui-color-rose-950: hsl(353.3 100% 95.7%);

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

    --bui-color-neutral-0: hsl(240, 5.9%, 11%);
    --bui-color-neutral-1000: hsl(0, 0%, 100%);

    --bui-border-radius-small: 0.1875rem;
    --bui-border-radius-medium: 0.25rem;
    --bui-border-radius-large: 0.5rem;
    --bui-border-radius-x-large: 1rem;

    --bui-border-radius-circle: 50%;
    --bui-border-radius-pill: 9999px;

    --bui-shadow-x-small: 0 1px 2px rgb(0 0 0 / 18%);
    --bui-shadow-small: 0 1px 2px rgb(0 0 0 / 24%);
    --bui-shadow-medium: 0 2px 4px rgb(0 0 0 / 24%);
    --bui-shadow-large: 0 2px 8px rgb(0 0 0 / 24%);
    --bui-shadow-x-large: 0 4px 16px rgb(0 0 0 / 24%);

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

    --bui-focus-ring-color: var(--bui-color-primary-700);
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

    --bui-overlay-background-color: hsl(0 0% 0% / 43%);

    --bui-panel-background-color: var(--bui-color-neutral-50);
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
