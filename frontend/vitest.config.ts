import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { pathToFileURL } from 'url';

// Custom Sass importer that strips the webpack-style `~` prefix
// and resolves the import from node_modules.
const tildeImporter = {
  findFileUrl(url: string) {
    if (url.startsWith('~')) {
      const resolved = resolve(
        import.meta.dirname,
        'node_modules',
        url.substring(1),
      );
      return pathToFileURL(resolved);
    }
    return null;
  },
};

// https://vitest.dev/config/
export default defineConfig(({ mode }) => {
  return {
    define: {
      global: 'globalThis',
      // Don't force NODE_ENV in test mode so vitest can set it to 'test'
      ...(mode !== 'test' && {
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    },
    root: 'src',
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: [resolve(import.meta.dirname, 'node_modules')],
          importers: [tildeImporter],
          silenceDeprecations: ['import', 'global-builtin'],
        },
      },
      lightningcss: {
        errorRecovery: true, // Otherwise lightningcss fails with var() usage in media queries.
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./test/setup.tsx'],
      onConsoleLog(log) {
        // Paragon needs to update their components. We don't do this.
        if (log.includes('Support for defaultProps will be removed')) {
          return false;
        }
        // Expected by several tests, but can't swallow the output otherwise.
        if (log.includes('Bogus color found for')) {
          return false;
        }
        // MockJax doesn't allow us to suppress this info with the way
        // we import it.
        if (log.includes('Initializing Mockjax and adding methods to jQuery')) {
          return false;
        }
      },
      coverage: {
        provider: 'v8',
        enabled: true,
        reporter: ['text', 'html'],
        reportsDirectory: './coverage',
        include: ['src/**/*.{ts,tsx}'],
      },
      sequence: {
        shuffle: true,
      },
    },
    resolve: {
      alias: {
        '@': resolve(import.meta.dirname, 'src'),
      },
    },
  };
});
