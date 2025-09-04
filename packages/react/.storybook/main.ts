// .storybook/main.ts
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs"), 
   // getAbsolutePath("@storybook/addon-essentials"),
   // getAbsolutePath("@storybook/addon-actions"),     // novo
   // getAbsolutePath("@storybook/addon-controls"),    // novo
   // getAbsolutePath("@storybook/addon-backgrounds"), // novo
   // getAbsolutePath("@storybook/addon-viewport"),    // novo
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
   viteFinal: async (config) => {
    config.esbuild = config.esbuild || {};
    config.esbuild.jsx = 'transform';
    return config;
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
