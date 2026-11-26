import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { pathToFileURL } from 'url';

interface AppConfig {
  entry: Record<string, string>;
  outDir: string;
}

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

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const libs: Record<string, AppConfig> = {
    card_carousel: {
      entry: {
        cardCarouselStudent: resolve(
          import.meta.dirname,
          'src/card/card-carousel/student-ui/main.tsx',
        ),
        cardCarouselStudio: resolve(
          import.meta.dirname,
          'src/card/card-carousel/studio-ui/main.tsx',
        ),
      },
      outDir: resolve(__dirname, '../src/card_carousel/public'),
    },
    card_grid: {
      entry: {
        cardGridStudent: resolve(
          import.meta.dirname,
          'src/card/card-grid/student-ui/main.tsx',
        ),
        cardGridStudio: resolve(
          import.meta.dirname,
          'src/card/card-grid/studio-ui/main.tsx',
        ),
      },
      outDir: resolve(__dirname, '../src/card_grid_block/public'),
    },
    keypoint_block: {
      entry: {
        keypointBlockStudent: resolve(
          import.meta.dirname,
          'src/keypoint-block/student-ui/index.tsx',
        ),
        keypointBlockStudio: resolve(
          import.meta.dirname,
          'src/keypoint-block/studio-ui/index.tsx',
        ),
      },
      outDir: resolve(__dirname, '../src/keypoint_block/public'),
    },
    cover_block: {
      entry: {
        coverBlockStudent: resolve(
          import.meta.dirname,
          'src/cover-block/student-ui/main.tsx',
        ),
        coverBlockStudio: resolve(
          import.meta.dirname,
          'src/cover-block/studio-ui/main.tsx',
        ),
      },
      outDir: resolve(__dirname, '../src/cover_block/public'),
    },
    two_column_block: {
      entry: {
        twoColumnBlockStudent: resolve(
          import.meta.dirname,
          'src/two-column-block/student-ui/main.tsx',
        ),
        twoColumnBlockStudio: resolve(
          import.meta.dirname,
          'src/two-column-block/studio-ui/main.tsx',
        ),
      },
      outDir: resolve(__dirname, '../src/two_column_block/public'),
    },
    ideas_overview_block: {
      entry: {
        ideasOverviewBlockStudent: resolve(
          import.meta.dirname,
          'src/ideas-overview-block/student-ui/main.tsx',
        ),
        ideasOverviewBlockStudio: resolve(
          import.meta.dirname,
          'src/ideas-overview-block/studio-ui/main.tsx',
        ),
      },
      outDir: resolve(__dirname, '../src/ideas_overview_block/public'),
    },
    unfolding_scenario: {
      entry: {
        unfoldingScenarioStudent: resolve(
          import.meta.dirname,
          'src/unfolding-scenario-block/student-ui/main.tsx',
        ),
        unfoldingScenarioStudio: resolve(
          import.meta.dirname,
          'src/unfolding-scenario-block/studio-ui/main.tsx',
        ),
      },
      outDir: resolve(__dirname, '../src/unfolding_scenario/public'),
    },
    external_resources: {
      entry: {
        externalResourcesStudent: resolve(
          import.meta.dirname,
          'src/external-resources/student-ui/main.tsx',
        ),
        externalResourcesStudio: resolve(
          import.meta.dirname,
          'src/external-resources/studio-ui/main.tsx',
        ),
      },
      outDir: resolve(__dirname, '../src/external_resources/public'),
    },
  };

  const xblock = process.env.XBLOCK;
  if (!xblock || !(xblock in libs)) {
    console.error(`Invalid XBLOCK environment variable: ${xblock}`);
    console.error(
      'Set it to the XBlock you wish to build. Available options:\n',
    );
    for (const key in libs) {
      console.error(`  ${key}`);
    }
    console.error('\nFor example: export XBLOCK=card_carousel');
    process.exit(1);
  }

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
    build: {
      cssMinify: 'lightningcss',
      lib: {
        entry: libs[xblock].entry,
        formats: ['es'],
      },
      outDir: libs[xblock].outDir,
      emptyOutDir: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./test/setup.tsx'],
    },
    resolve: {
      alias: {
        '@': resolve(import.meta.dirname, 'src'),
      },
    },
  };
});
