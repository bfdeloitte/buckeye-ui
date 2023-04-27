(() => {
  if (!window.$docsify) {
    throw new Error('Docsify must be loaded before installing this plugin.');
  }

  window.$docsify.plugins.push(hook => {
    hook.mounted(() => {
      function getTheme() {
        return localStorage.getItem('theme') || 'auto';
      }

      function isDark() {
        if (theme === 'auto') {
          return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return theme === 'dark';
      }

      function setTheme(newTheme) {
        const noTransitions = Object.assign(document.createElement('style'), {
          textContent: '* { transition: none !important; }'
        });

        theme = newTheme;
        localStorage.setItem('theme', theme);

        // Update the UI
        [...menu.querySelectorAll('bui-menu-item')].map(item => (item.checked = item.getAttribute('value') === theme));
        menuIcon.name = isDark() ? 'moon' : 'sun';

        // Toggle the dark mode class without transitions
        document.body.appendChild(noTransitions);
        requestAnimationFrame(() => {
          document.documentElement.classList.toggle('bui-theme-dark', isDark());
          requestAnimationFrame(() => document.body.removeChild(noTransitions));
        });
      }

      let theme = getTheme();

      // Generate the theme picker dropdown
      const dropdown = document.createElement('bui-dropdown');
      dropdown.classList.add('theme-picker');
      dropdown.innerHTML = `
        <bui-button size="small" pill slot="trigger" caret>
          <bui-icon name="sun" label="Select Theme"></bui-icon>
        </bui-button>
        <bui-menu>
          <bui-menu-label>Toggle <kbd>\\</kbd></bui-menu-label>
          <bui-menu-item type="checkbox" value="light">Light</bui-menu-item>
          <bui-menu-item type="checkbox" value="dark">Dark</bui-menu-item>
          <bui-divider></bui-divider>
          <bui-menu-item type="checkbox" value="auto">Auto</bui-menu-item>
        </bui-menu>
      `;
      document.querySelector('.sidebar-toggle').insertAdjacentElement('afterend', dropdown);

      // Listen for selections
      const menu = dropdown.querySelector('bui-menu');
      const menuIcon = dropdown.querySelector('bui-icon');
      menu.addEventListener('bui-select', event => setTheme(event.detail.item.value));

      // Update the theme when the preference changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => setTheme(theme));

      // Toggle themes when pressing backslash
      document.addEventListener('keydown', event => {
        if (
          event.key === '\\' &&
          !event.composedPath().some(el => ['input', 'textarea'].includes(el?.tagName?.toLowerCase()))
        ) {
          event.preventDefault();

          setTheme(isDark() ? 'light' : 'dark');
        }
      });

      // Set the initial theme and sync the UI
      setTheme(theme);
    });
  });
})();
