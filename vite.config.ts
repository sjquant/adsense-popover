import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { transform } from "esbuild";
import pkg from "./package.json";

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
    copyrightNotice(),
    minifyEs(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: "src/components/index.ts",
      formats: ["es", "esm", "umd"] as any,
      name: pkg.name.replace(/-./g, (char) => char[1].toUpperCase()),
      fileName: (format) =>
        ({
          es: `${pkg.name}.js`,
          esm: `${pkg.name}.min.js`,
          umd: `${pkg.name}.umd.js`,
        }[format]),
    },
  },
});

function minifyEs() {
  return {
    name: "minifyEs",
    renderChunk: {
      order: "post" as const,
      async handler(code, chunk, outputOptions) {
        if (
          outputOptions.format === "es" &&
          chunk.fileName.endsWith(".min.js")
        ) {
          return await transform(code, { minify: true });
        }
        return code;
      },
    },
  };
}

function copyrightNotice() {
  return {
    name: "copyright-notice",
    renderChunk(code) {
      const copyright = `/*! 
Copyright (c) 2023 sjquant. All rights reserved.

This software is part of the adsense-popover project: https://github.com/sjquant/adsense-popover

Licensed under the MIT License. See the LICENSE file in the project root for full license information.
*/\n`;
      return `${copyright}${code}`;
    },
  };
}
